/**
 * clearDieLink Plugin
 * 
 * 从 Jekyll 迁移的文档死链修复插件
 * 处理以下问题：
 * 1. 自动添加 .md 后缀到相对链接
 * 2. HTML 后缀转 MD
 * 3. 目录链接规范化（/ → /index.md）
 * 4. Jekyll Attribute Lists 清理
 * 5. Jekyll TOC 语法清理
 * 6. 图片路径空格处理
 * 7. Jekyll include 语法移除
 */

export interface ClearDieLinkOptions {
  /** 是否启用调试日志 */
  debug?: boolean
  /** 是否自动添加 .md 后缀 */
  addMdExtension?: boolean
  /** 是否转换 HTML 后缀为 MD */
  convertHtmlToMd?: boolean
  /** 是否规范化目录链接 */
  normalizeDirLinks?: boolean
  /** 是否清理 Jekyll 语法 */
  cleanJekyllSyntax?: boolean
  /** 是否编码图片路径中的空格 */
  encodeImageSpaces?: boolean
}

export function clearDieLink(options: ClearDieLinkOptions = {}) {
  const {
    debug = false,
    addMdExtension = true,
    convertHtmlToMd = true,
    normalizeDirLinks = true,
    cleanJekyllSyntax = true,
    encodeImageSpaces = true,
  } = options

  const log = (...args: any[]) => {
    if (debug) {
      console.log('[clearDieLink]', ...args)
    }
  }

  return {
    name: 'clear-die-link',
    enforce: 'pre' as const,
    
    transform(code: string, id: string) {
      // 只处理 markdown 文件
      if (!id.endsWith('.md')) return null
      
      let transformed = code
      let hasChanges = false

      // ====================
      // 1. Jekyll TOC 语法清理 (在一般清理之前处理)
      // ====================
      if (cleanJekyllSyntax) {
        // 移除 * TOC 行
        const beforeToc = transformed
        transformed = transformed.replace(/^\s*\*\s*TOC\s*$/gmi, '')
        if (transformed !== beforeToc) {
          hasChanges = true
          log('Removed TOC marker in:', id)
        }
      }

      // ====================
      // 2. 链接处理（排除图片链接 ![]()）
      // ====================
      
      // 处理 Markdown 链接 [text](url)，但排除图片 ![alt](url)
      // 策略：先临时替换图片，处理链接，再恢复图片
      if (addMdExtension || convertHtmlToMd || normalizeDirLinks) {
        const beforeLinks = transformed
        
        // 临时替换图片为占位符
        const images: string[] = []
        transformed = transformed.replace(
          /!\[([^\]]*)\]\(([^)"\s]*)(?:\s+"([^"]*)")?\)/g,
          (match) => {
            images.push(match)
            return `<<<IMAGE_${images.length - 1}>>>`
          }
        )
        
        // 处理普通链接
        transformed = transformed.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          (match, text: string, url: string) => {
            // 跳过已处理的链接
            if (url.startsWith('http://') || url.startsWith('https://')) {
              return match // 外部链接
            }
            if (url.startsWith('#')) {
              return match // 纯锚点链接
            }
            if (url.startsWith('mailto:') || url.startsWith('tel:')) {
              return match // 特殊协议
            }
            if (/\{[^}]+\}$/.test(url)) {
              // VitePress 属性语法 [text](url){...}
              // 处理 URL 部分
              const attrMatch = url.match(/^(.*)(\{[^}]+\})$/)
              if (attrMatch) {
                const cleanUrl = attrMatch[1]
                const attrs = attrMatch[2]
                const processedUrl = processUrl(cleanUrl, id, { addMdExtension, convertHtmlToMd, normalizeDirLinks })
                return `[${text}](${processedUrl})${attrs}`
              }
            }
            
            const processedUrl = processUrl(url, id, { addMdExtension, convertHtmlToMd, normalizeDirLinks })
            return `[${text}](${processedUrl})`
          }
        )
        
        // 恢复图片占位符
        images.forEach((img, index) => {
          transformed = transformed.replace(`<<<IMAGE_${index}>>>`, img)
        })
        
        if (transformed !== beforeLinks) {
          hasChanges = true
          log('Processed links in:', id)
        }
      }

      // ====================
      // 3. 图片处理
      // ====================
      if (encodeImageSpaces) {
        const beforeImages = transformed
        // 图片格式: ![alt](url) 或 ![alt](url "title")
        // 需要正确处理带标题的图片链接
        transformed = transformed.replace(
          /!\[([^\]]*)\]\(([^)"\s]*)(?:\s+"([^"]*)")?\)/g,
          (match, alt: string, url: string, title?: string) => {
            // 如果 URL 中包含空格且未被编码
            if (url.includes(' ') && !url.includes('%20')) {
              const encodedUrl = url.replace(/\s/g, '%20')
              log('Encoded image URL:', url, '→', encodedUrl)
              if (title) {
                return `![${alt}](${encodedUrl} "${title}")`
              }
              return `![${alt}](${encodedUrl})`
            }
            return match
          }
        )
        if (transformed !== beforeImages) {
          hasChanges = true
        }
      }

      // ====================
      // 4. Jekyll Attribute Lists 清理
      // ====================
      if (cleanJekyllSyntax) {
        // 4.1 图片的 {:style="..."} → {style="..."}
        const beforeImgStyle = transformed
        transformed = transformed.replace(
          /(!\[[^\]]*\]\([^)]+\))\{:style="([^"]+)"\}/g,
          '$1{style="$2"}'
        )
        if (transformed !== beforeImgStyle) {
          hasChanges = true
          log('Converted image style attribute in:', id)
        }

        // 4.2 移除其他所有 Jekyll Attribute Lists
        const beforeAttrs = transformed
        transformed = transformed.replace(/\s*\{:[^}]+\}/g, '')
        if (transformed !== beforeAttrs) {
          hasChanges = true
          log('Removed Jekyll attributes in:', id)
        }
      }

      // ====================
      // 5. Jekyll include 语法移除
      // ====================
      if (cleanJekyllSyntax) {
        const beforeInclude = transformed
        transformed = transformed.replace(/\{%\s*include\s+[^%]+%\}/g, '')
        if (transformed !== beforeInclude) {
          hasChanges = true
          log('Removed Jekyll include in:', id)
        }
      }

      // ====================
      // 6. Frontmatter 中的 permalink 记录（可选）
      // ====================
      if (cleanJekyllSyntax && debug) {
        // 记录 Jekyll 的 permalink（VitePress 使用不同的路由方式）
        transformed.replace(
          /^permalink:\s*\/[^\n]+$/gmi,
          (match) => {
            log('Found permalink in frontmatter:', match.trim())
            return match
          }
        )
      }

      return hasChanges ? transformed : null
    }
  }
}

/**
 * 处理 URL 的核心函数
 */
function processUrl(
  url: string,
  filePath: string, // 当前文件路径，用于计算相对路径
  options: { 
    addMdExtension: boolean
    convertHtmlToMd: boolean
    normalizeDirLinks: boolean 
  }
): string {
  let processed = url
  
  // 统一路径分隔符
  const normalizedPath = filePath.replace(/\\/g, '/')

  // 提取锚点部分
  const hashIndex = processed.indexOf('#')
  let hash = ''
  if (hashIndex !== -1) {
    hash = processed.slice(hashIndex)
    processed = processed.slice(0, hashIndex)
  }

  // 1. 转换 tB/ 路径为实际路径 (Jekyll 迁移)
  // 处理各种格式：/zh/tB/, /en/tB/, /tB/, tB/, ../tB/, ../../tB/
  if (processed.match(/^\/zh\/tB\//) || 
      processed.match(/^\/en\/tB\//) || 
      processed.startsWith('/tB/') ||
      processed.startsWith('tB/') || 
      processed.includes('/tB/')) {
    processed = convertTbPath(processed, normalizedPath) + hash
    return processed
  }

  // 2. 转换 HTML 后缀为 MD
  if (options.convertHtmlToMd && processed.endsWith('.html')) {
    processed = processed.slice(0, -5) + '.md'
  }

  // 2. 特殊路径映射（Jekyll 迁移的常见问题）
  processed = mapSpecialPaths(processed, normalizedPath)

  // 3. 规范化目录链接（只有以 / 结尾的才是目录）
  if (options.normalizeDirLinks && processed.endsWith('/') && !processed.endsWith('://')) {
    processed = processed + 'index.md'
  }

  // 4. 添加 .md 后缀（排除已有后缀的情况）
  if (options.addMdExtension) {
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(processed)
    const isSpecial = processed === '' || processed === '/'
    
    if (!hasExtension && !isSpecial && !processed.endsWith('/')) {
      processed = processed + '.md'
    }
  }

  return processed + hash
}

/**
 * 转换 Jekyll 的 tB/ 路径为 VitePress 相对路径
 * 支持格式：/zh/tB/, /en/tB/, /tB/, ../tB/, tB/
 */
function convertTbPath(url: string, normalizedPath: string): string {
  // 提取语言前缀和清理路径
  let cleanUrl = url
  let langPrefix = ''
  
  // 匹配 /zh/tB/ 或 /en/tB/
  const langMatch = url.match(/^\/(zh|en)\/tB\/(.*)$/)
  if (langMatch) {
    langPrefix = langMatch[1]
    cleanUrl = 'tB/' + langMatch[2]
  }
  // 匹配 /tB/
  else if (url.startsWith('/tB/')) {
    cleanUrl = 'tB/' + url.slice(4)
    // 从文件路径推断语言
    langPrefix = normalizedPath.includes('/zh/') ? 'zh' : 'en'
  }
  // 移除相对路径前缀 ../ 或 ./
  else {
    cleanUrl = url.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '')
  }
  
  // 确定目标语言目录
  const targetLang = langPrefix || (normalizedPath.includes('/zh/') ? 'zh' : 'en')
  
  // 计算当前文件到目标的相对路径
  const relativePath = calculateRelativePath(normalizedPath, targetLang)
  
  // 映射 tB/ 路径到实际路径（统一返回 .md 文件路径）
  const mappings: { [key: string]: (subPath: string) => string } = {
    'tB/Core/': (sub) => `${relativePath}Reference/${sub}.md`,
    'tB/Modules/': (sub) => `${relativePath}Reference/Modules/${sub}.md`,
    'tB/IDE/Project/': (sub) => `${relativePath}IDE/${sub}.md`,
    'tB/IDE/AddIns/': (sub) => `${relativePath}IDE/AddIns/${sub}.md`,
    'tB/Controls': () => `${relativePath}Reference/Controls.md`,
    'tB/Gloss': () => `${relativePath}Reference/Glossary.md`,
    'tB/Reference': (sub) => sub ? `${relativePath}Reference/${sub}.md` : `${relativePath}Reference/`,
    'tB/Tutorials/': (sub) => `${relativePath}Tutorials/${sub}.md`,
    'tB/Features/': (sub) => `${relativePath}Features/${sub}.md`,
    'tB/IDE/': (sub) => `${relativePath}IDE/${sub}.md`,
    'tB/Videos/': (sub) => `${relativePath}Videos/${sub}.md`,
    'tB/Modules': () => `${relativePath}Reference/Modules/`,
    'tB/Core': () => `${relativePath}Reference/`,
  }
  
  // 查找匹配并转换
  for (const [pattern, builder] of Object.entries(mappings)) {
    const cleanPattern = pattern.replace(/\/$/, '')
    // 精确匹配
    if (cleanUrl === cleanPattern) {
      const result = builder('')
      // 如果结果是目录（以/结尾），返回 index.md
      return result.endsWith('/') ? `${result}index.md` : result
    }
    // 前缀匹配
    if (cleanUrl.startsWith(pattern)) {
      const subPath = cleanUrl.slice(pattern.length)
      return builder(subPath)
    }
  }
  
  // 未匹配的路径，添加 .md
  const remainingPath = cleanUrl.replace(/^tB\//, '')
  return `${relativePath}${remainingPath}.md`
}

/**
 * 计算从当前文件到目标语言目录的相对路径
 */
function calculateRelativePath(normalizedPath: string, targetLang: string): string {
  // 判断当前文件所在语言
  const isInZh = normalizedPath.includes('/zh/')
  const isInEn = normalizedPath.includes('/en/')
  const currentLang = isInZh ? 'zh' : (isInEn ? 'en' : targetLang)
  
  // 计算当前文件在 official 下的深度
  const officialMatch = normalizedPath.match(/official\/(.*?)(?:\/[^\/]+\.md)?$/)
  if (!officialMatch) return `./`
  
  const subPath = officialMatch[1] // 例如：Reference/Core
  const depth = subPath.split('/').filter(Boolean).length
  
  // 同语言
  if (currentLang === targetLang) {
    if (depth === 0) return './'
    if (depth === 1) return './'
    return '../'.repeat(depth - 1)
  }
  
  // 跨语言 - 先回到根，再进入目标语言
  const backToRoot = depth === 0 ? '../' : '../'.repeat(depth + 1)
  return `${backToRoot}${targetLang}/official/`
}

/**
 * 特殊路径映射（处理 Jekyll 迁移后的常见问题）
 */
function mapSpecialPaths(url: string, normalizedPath: string): string {
  let processed = url
  const isInCore = normalizedPath.includes('/Core/')
  const isInModules = normalizedPath.includes('/Modules/')
  const isInReference = normalizedPath.includes('/Reference/') && !isInCore && !isInModules
  const isInAttributes = normalizedPath.includes('/Reference/Attributes.md')
  const isInStatements = normalizedPath.includes('/Reference/Statements.md')
  const isInProcedures = normalizedPath.includes('/Reference/Procedures and Functions.md') || normalizedPath.includes('/Reference/Procedures-and-Functions.md')
  const isInGlossary = normalizedPath.includes('/Reference/Glossary.md')
  
  const isInDocDev = normalizedPath.includes('/Miscellaneous/Documentation Development.md')
  const isInCategories = normalizedPath.includes('/Reference/Categories.md')
  
  // 1. Core/ 目录内的特殊映射
  if (isInCore) {
    // Gloss -> ../Glossary
    if (processed === './Gloss' || processed === 'Gloss') {
      return '../Glossary.md'
    }
    // Attributes -> ../Attributes (Attributes.md 在 Reference/ 下，与 Core/ 同级)
    if (processed === './Attributes' || processed === 'Attributes') {
      return '../Attributes.md'
    }
    // While-Wend -> ./While-Wend.md
    if (processed === './While-Wend' || processed === 'While-Wend') {
      return './While-Wend.md'
    }
    // 引用同级 Core 文件（./XXX -> ./XXX.md）
    // 处理 ./ReDim, ./Private, ./Public, ./Deftype, ./Sub, ./Property, ./Type 等
    if (processed.match(/^\.\/[A-Za-z][A-Za-z0-9_-]*$/)) {
      return processed + '.md'
    }
  }
  
  // 2. Reference/Attributes.md 中的特殊映射
  if (isInAttributes) {
    // ./CoClass, ./Class, ./Module, ./Interface 等 -> ./Core/XXX
    const coreFiles = ['CoClass', 'Class', 'Module', 'Interface', 'Enum', 'Type', 
                       'Function', 'Sub', 'Property', 'Declare', 'Const', 'New',
                       'Dim', 'Private', 'Public', 'Protected', 'Static', 'Option',
                       'ReDim', 'Let', 'Set', 'Get', 'Error', 'Event', 'Implements',
                       'End', 'Call', 'Do-Loop', 'For-Next', 'For-Each-Next',
                       'While-Wend', 'If-Then-Else', 'Select-Case', 'With',
                       'GoTo', 'GoSub-Return', 'Resume', 'On-Error', 'On-GoTo',
                       'On-GoSub', 'Stop', 'Continue', 'Exit', 'Return',
                       'Deftype', 'ParamArray']
    for (const file of coreFiles) {
      if (processed === `./${file}`) {
        return `./Core/${file}.md`
      }
    }
    // ../Glossary -> ./Glossary (Attributes.md 在 Reference/ 下，Glossary.md 也在 Reference/ 下)
    if (processed === '../Gloss' || processed === '../Glossary') {
      return './Glossary.md'
    }
    // ../../Features/... -> ./../Features/...
    if (processed.startsWith('../../Features/')) {
      return './..' + processed.slice(2)
    }
  }
  
  // 3. Reference/Statements.md 中的特殊映射 - 链接多了 Reference/ 前缀
  if (isInStatements) {
    // ./Reference/Call -> ./Core/Call
    if (processed.match(/^\.\/Reference\//)) {
      const subPath = processed.slice('./Reference/'.length)
      // 处理 Modules/XXX 子路径
      if (subPath.startsWith('Modules/')) {
        return `./${subPath}.md`
      }
      // 处理 Core/XXX 或简单文件名
      return `./Core/${subPath}.md`
    }
  }
  
  // 4. Reference/Procedures and Functions.md 中的特殊映射
  if (isInProcedures) {
    // ./Reference/AppActivate -> ./Modules/Interaction/AppActivate
    if (processed.match(/^\.\/Reference\//)) {
      const subPath = processed.slice('./Reference/'.length)
      // 处理 Modules/XXX 子路径
      if (subPath.startsWith('Modules/')) {
        return `./${subPath}.md`
      }
      // 其他文件映射到对应目录
      const moduleMappings: { [key: string]: string } = {
        'AppActivate': './Modules/Interaction/AppActivate.md',
        'Beep': './Modules/Interaction/Beep.md',
        'Calendar': './Modules/DateTime/Calendar.md',
        'ChDir': './Modules/FileSystem/ChDir.md',
        'ChDrive': './Modules/FileSystem/ChDrive.md',
        'CurDir': './Modules/FileSystem/CurDir.md',
        'Date': './Modules/DateTime/Date.md',
        'DeleteSetting': './Modules/Interaction/DeleteSetting.md',
        'Dir': './Modules/FileSystem/Dir.md',
        'FileCopy': './Modules/FileSystem/FileCopy.md',
        'GetSetting': './Modules/Interaction/GetSetting.md',
        'MkDir': './Modules/FileSystem/MkDir.md',
        'Now': './Modules/DateTime/Now.md',
        'RmDir': './Modules/FileSystem/RmDir.md',
        'SaveSetting': './Modules/Interaction/SaveSetting.md',
        'SendKeys': './Modules/Interaction/SendKeys.md',
        'Shell': './Modules/Interaction/Shell.md',
        'Time': './Modules/DateTime/Time.md',
      }
      if (moduleMappings[subPath]) {
        return moduleMappings[subPath]
      }
      // 默认映射到 Core
      return `./Core/${subPath}.md`
    }
  }
  
  // 5. Reference/Glossary.md 中的特殊映射
  if (isInGlossary) {
    // ./Core/Is -> ./Is.md (Glossary.md 在 Reference/ 下，可以直接引用 Core/ 下的文件用相对路径)
    if (processed.match(/^\.\/Core\//)) {
      const fileName = processed.slice('./Core/'.length)
      return `./Core/${fileName}.md`
    }
    // ./Core/Property -> ./Core/Property.md
    if (processed.match(/^Core\//)) {
      return `./${processed}.md`
    }
  }
  
  // 6. Miscellaneous/Documentation Development.md 中的特殊映射
  if (isInDocDev) {
    // ./Reference/Modules/Math -> ../Reference/Modules/Math.md
    // ./Reference/Const -> ../Reference/Core/Const.md
    if (processed.match(/^\.\/Reference\//)) {
      const subPath = processed.slice('./Reference/'.length)
      
      // 处理 Modules/XXX 子路径
      if (subPath.startsWith('Modules/')) {
        return `../Reference/${subPath}.md`
      }
      
      // 处理 Attributes -> ../Reference/Attributes.md
      if (subPath === 'Attributes') {
        return `../Reference/${subPath}.md`
      }
      
      // 其他文件映射到 Core/
      return `../Reference/Core/${subPath}.md`
    }
  }
  
  // 6.5 Reference/Categories.md 中的特殊映射
  if (isInCategories) {
    // ./Reference/Option -> ./Core/Option.md
    // ./Reference/Modules/Math -> ./Modules/Math.md
    if (processed.match(/^\.\/Reference\//)) {
      const subPath = processed.slice('./Reference/'.length)
      
      // 处理 Modules/XXX 子路径
      if (subPath.startsWith('Modules/')) {
        return `./${subPath}.md`
      }
      
      // 其他文件映射到 Core/
      return `./Core/${subPath}.md`
    }
  }
  
  // 7. Reference/ 目录（非 Core/Modules 子目录）的特殊映射
  if (isInReference && !isInAttributes && !isInStatements && !isInProcedures && !isInGlossary) {
    // Core/Sub -> ./Core/Sub
    if (processed.match(/^Core\//)) {
      return './' + processed
    }
    // Modules/XXX -> ./Modules/XXX
    if (processed.match(/^Modules\//)) {
      return './' + processed
    }
    // Attributes -> ./Attributes
    if (processed === 'Attributes' || processed === './Attributes') {
      return './Attributes.md'
    }
    // 简单文件名（如 Call）-> ./Core/Call
    const simpleFiles = ['Call', 'Class', 'CoClass', 'Const', 'Continue', 'Declare', 
                         'Dim', 'Do-Loop', 'End', 'Enum', 'Erase', 'Error', 'Event',
                         'Exit', 'Function', 'Get', 'GoSub-Return', 'GoTo', 
                         'If-Then-Else', 'Implements', 'Input', 'Interface', 'Is',
                         'Kill', 'LBound', 'Let', 'Line-Input', 'Load', 'Lock',
                         'LSet', 'Mid-equals', 'MidB-equals', 'MkDir', 'Module',
                         'Name', 'New', 'Option', 'On-Error', 'On-GoSub', 'On-GoTo',
                         'Open', 'ParamArray', 'Print', 'Private', 'Property',
                         'Public', 'Put', 'RaiseEvent', 'ReDim', 'Reset', 'Resume',
                         'RmDir', 'RSet', 'SavePicture', 'SaveSetting', 'Seek',
                         'Select-Case', 'SendKeys', 'Set', 'SetAttr', 'Shell',
                         'Static', 'Stop', 'Sub', 'Time', 'Type', 'Unload', 'Unlock',
                         'While-Wend', 'Width', 'With', 'Write', 'Topic-Preprocessor',
                         'Deftype', 'AppActivate', 'Beep', 'Calendar', 'ChDir',
                         'ChDrive', 'CurDir', 'Date', 'DeleteSetting', 'Dir',
                         'FileCopy', 'GetSetting', 'Now', 'For-Next', 'For-Each-Next']
    for (const file of simpleFiles) {
      if (processed === file || processed === `./${file}`) {
        return `./Core/${file}.md`
      }
    }
    // Gloss -> ./Glossary
    if (processed === 'Gloss' || processed === './Gloss') {
      return './Glossary.md'
    }
  }
  
  // 8. official/ 根目录的特殊映射 (包括 index.md 和根目录下的其他 md 文件)
  const isInOfficialRoot = normalizedPath.match(/official\/[^/]+\.md$/)
  if (isInOfficialRoot) {
    // FAQ -> ./Miscellaneous/FAQs
    if (processed === './FAQ' || processed === 'FAQ') {
      return './Miscellaneous/FAQs.md'
    }
    // IDE/CallStack -> ./IDE/Call Stack
    const ideMappings: { [key: string]: string } = {
      './IDE/CallStack': './IDE/Call Stack.md',
      './IDE/DebugConsole': './IDE/Debug Console.md',
      './IDE/New': './IDE/New Project.md',
      './IDE/Explorer': './IDE/Project Explorer.md',
      './IDE/Settings': './IDE/Project Settings.md',
      './IDE/Splash': './IDE/Splash Screen.md',
      './IDE/StatusBar': './IDE/Status Bar.md',
      './IDE/Editor/Form': './IDE/tbForm.md',
      './IDE/Editor/Report': './IDE/tbReport.md',
      './Videos/tB': './Videos/twinBASIC.md',
    }
    if (ideMappings[processed]) {
      return ideMappings[processed]
    }
    // 目录链接规范化
    const dirMappings: { [key: string]: string } = {
      './Features': './Features/index.md',
      './Tutorials': './Tutorials/index.md',
      './Reference': './Reference/index.md',
      './IDE': './IDE/index.md',
      './Videos': './Videos/index.md',
      './Documentation': './Miscellaneous/Documentation Development.md',
    }
    if (dirMappings[processed]) {
      return dirMappings[processed]
    }
    // ./Reference/Procedures-and-Functions -> ./Reference/Procedures and Functions.md
    if (processed === './Reference/Procedures-and-Functions' || processed === './Reference/Procedures and Functions') {
      return './Reference/Procedures and Functions.md'
    }
    // ./Reference/Compiler-Constants -> ./Reference/Compiler Constants.md
    if (processed === './Reference/Compiler-Constants' || processed === './Reference/Compiler Constants') {
      return './Reference/Compiler Constants.md'
    }
  }
  
  // 8.5 official/index.md 的特殊映射 (根目录下的 official/index.md，以及 en/official/index.md)
  const isInOfficialIndex = normalizedPath.includes('/official/index.md') && !normalizedPath.includes('/zh/')
  if (isInOfficialIndex) {
    // ./Tutorials/CustomControls -> ./Tutorials/CustomControls/index.md
    if (processed === './Tutorials/CustomControls') {
      return './Tutorials/CustomControls/index.md'
    }
    if (processed === './Tutorials/WebView2') {
      return './Tutorials/WebView2/index.md'
    }
    // ./Features -> ./Features/index.md
    if (processed === './Features') {
      return './Features/index.md'
    }
    // ./Features/Language -> ./Features/Language/index.md
    if (processed === './Features/Language') {
      return './Features/Language/index.md'
    }
    if (processed === './Features/Project-Configuration') {
      return './Features/Project-Configuration/index.md'
    }
    if (processed === './Features/Standard-Library') {
      return './Features/Standard-Library/index.md'
    }
    if (processed === './Features/GUI-Components') {
      return './Features/GUI-Components/index.md'
    }
    if (processed === './Features/Packages') {
      return './Features/Packages/index.md'
    }
    if (processed === './Features/Advanced') {
      return './Features/Advanced/index.md'
    }
    if (processed === './Features/Compiler-IDE') {
      return './Features/Compiler-IDE/index.md'
    }
    // ./Documentation/Development -> ./Miscellaneous/Documentation Development.md
    if (processed === './Documentation/Development') {
      return './Miscellaneous/Documentation Development.md'
    }
  }
  
  // 9. Modules/ 目录内的 Gloss 引用
  if (isInModules && processed === '../Gloss') {
    return '../../Glossary.md'
  }
  
  // 10. 处理上级目录引用的 Gloss
  if (processed === '../Gloss') {
    return '../Glossary.md'
  }
  
  // 11. Reference/Modules/ 子目录中的链接处理
  if (normalizedPath.includes('/Reference/Modules/')) {
    // 先处理简单的 ./XXX 相对链接（如 ./SendKeys -> ./SendKeys.md）
    // 这些链接指向同级目录的文件
    if (processed.match(/^\.\/[A-Za-z][A-Za-z0-9_-]*$/)) {
      return processed + '.md'
    }
    
    // 处理跨子目录的引用，如 Calendar -> ./DateTime/Calendar
    const moduleFiles = ['Calendar', 'Now', 'Date', 'Time', 'Timer', 'DateAdd',
                         'DateDiff', 'DatePart', 'DateSerial', 'DateValue',
                         'TimeSerial', 'TimeValue', 'FormatDateTime', 'Format',
                         'IsDate', 'Year', 'Month', 'Day', 'Weekday', 'Hour',
                         'Minute', 'Second', 'DateInterval']
    for (const file of moduleFiles) {
      if (processed === `./${file}` || processed === file) {
        return `./DateTime/${file}.md`
      }
    }
    // CurDir, Dir, MkDir, RmDir -> 引用同级或 FileSystem/
    const fsFiles = ['CurDir', 'Dir', 'MkDir', 'RmDir', 'ChDir', 'ChDrive']
    for (const file of fsFiles) {
      if (processed === `./${file}` || processed === file) {
        return `./FileSystem/${file}.md`
      }
    }
    // Shell, SendKeys, AppActivate -> Interaction/
    const interactionFiles = ['Shell', 'SendKeys', 'AppActivate']
    for (const file of interactionFiles) {
      if (processed === `./${file}` || processed === file) {
        return `./Interaction/${file}.md`
      }
    }
  }
  
  // 12. Tutorials/CustomControls/ 中的特殊映射
  if (normalizedPath.includes('/Tutorials/CustomControls/')) {
    if (processed === './Painting' || processed === 'Painting') {
      return './Painting.md'
    }
    if (processed === './Properties' || processed === 'Properties') {
      return './Properties.md'
    }
  }
  
  // 13. IDE/tbReport.md 中的特殊映射
  if (normalizedPath.includes('/IDE/tbReport.md')) {
    if (processed === './../../../Controls') {
      return './../../Reference/Controls.md'
    }
  }
  
  // 13.5 IDE/tbForm.md 中的特殊映射
  if (normalizedPath.includes('/IDE/tbForm.md')) {
    if (processed === './../Toolbox') {
      return './Toolbox.md'
    }
    if (processed === './../../../Controls') {
      return './../../Reference/Controls.md'
    }
  }
  
  // 13.6 IDE/Toolbox.md 中的特殊映射
  if (normalizedPath.includes('/IDE/Toolbox.md')) {
    if (processed === './../../Controls') {
      return './../Reference/Controls.md'
    }
    if (processed === './Settings') {
      return './Project/Settings.md'
    }
  }
  
  // 14. Miscellaneous/FAQs.md 中的特殊映射 (支持 zh 和 en)
  if (normalizedPath.includes('/Miscellaneous/FAQs.md')) {
    if (processed === './Features' || processed === 'Features') {
      return './Features/index.md'
    }
    // ./Features/index -> ./Features/index.md
    if (processed === './Features/index') {
      return './Features/index.md'
    }
  }
  
  // 14.5 Features/index.md 中的特殊映射
  if (normalizedPath.includes('/Features/index.md')) {
    // ./Standard-Library -> ./Standard-Library/index.md
    if (processed === './Standard-Library') {
      return './Standard-Library/index.md'
    }
  }
  
  // 14.6 Features/Attributes-Intro.md 中的特殊映射
  if (normalizedPath.includes('/Features/Attributes-Intro.md')) {
    // ./Reference/Glossary -> ../Reference/Glossary.md
    if (processed === './Reference/Glossary' || processed === './Reference/Gloss') {
      return '../Reference/Glossary.md'
    }
    // ./Reference/Attributes -> ../Reference/Attributes.md
    if (processed === './Reference/Attributes') {
      return '../Reference/Attributes.md'
    }
  }
  
  // 14.7 IDE/Project Explorer.md 中的特殊映射
  if (normalizedPath.includes('/IDE/Project Explorer.md')) {
    // ./Settings -> ./Project/Settings.md
    if (processed === './Settings') {
      return './Project/Settings.md'
    }
    // ./Editor/Form -> ./tbForm.md (或 Editor/Form.md)
    if (processed === './Editor/Form') {
      return './tbForm.md'
    }
    if (processed === './Editor/Report') {
      return './tbReport.md'
    }
  }
  
  // 14.8 IDE/AddIns/GlobalSearch.md 中的特殊映射
  if (normalizedPath.includes('/IDE/AddIns/GlobalSearch.md')) {
    // ./../Project/Toolbar -> ../Project/Toolbar.md
    if (processed === './../Project/Toolbar' || processed === '../Project/Toolbar') {
      return '../Project/Toolbar.md'
    }
  }
  
  // 14.9 Features/Packages/ 中的特殊映射
  if (normalizedPath.includes('/Features/Packages/')) {
    // ./Importing-TWINPACK -> ./Importing-TWINPACK.md
    if (processed === './Importing-TWINPACK') {
      return './Importing-TWINPACK.md'
    }
    if (processed === './Importing-TWINSERV') {
      return './Importing-TWINSERV.md'
    }
  }
  
  // 14.10 Features/Compiler-IDE/Package-Server.md 中的特殊映射
  if (normalizedPath.includes('/Features/Compiler-IDE/Package-Server.md')) {
    // ./../Packages/Creating-TWINPACK -> ../Packages/Creating-TWINPACK.md
    if (processed === './../Packages/Creating-TWINPACK' || processed === '../Packages/Creating-TWINPACK') {
      return '../Packages/Creating-TWINPACK.md'
    }
    if (processed === './../Packages/Importing-TWINPACK' || processed === '../Packages/Importing-TWINPACK') {
      return '../Packages/Importing-TWINPACK.md'
    }
    if (processed === './../Packages/Importing-TWINSERV' || processed === '../Packages/Importing-TWINSERV') {
      return '../Packages/Importing-TWINSERV.md'
    }
    if (processed === './../Packages/Updating' || processed === '../Packages/Updating') {
      return '../Packages/Updating.md'
    }
  }
  
  // 14.11 Features/GUI-Components/Modernization.md 中的特殊映射
  if (normalizedPath.includes('/Features/GUI-Components/Modernization.md')) {
    // ./../../Packages/Importing-TWINSERV/index -> ../../Packages/Importing-TWINSERV/index.md
    if (processed === './../../Packages/Importing-TWINSERV/index') {
      return '../../Packages/Importing-TWINSERV/index.md'
    }
  }
  
  // 15. Core/ 目录中的上级目录链接处理
  if (isInCore) {
    // ./../Modules/FileSystem -> ./../Modules/FileSystem/index.md
    if (processed === './../Modules/FileSystem' || processed === '../Modules/FileSystem') {
      return '../Modules/FileSystem/index.md'
    }
    // ./../Modules/VBA/Array -> ./../Modules/VBA/Array.md
    if (processed === './../Modules/VBA/Array' || processed === '../Modules/VBA/Array') {
      return '../Modules/VBA/Array.md'
    }
    // ./../IDE/Project/Settings -> ./../IDE/Project/Settings.md
    if (processed === './../IDE/Project/Settings' || processed === '../IDE/Project/Settings') {
      return '../IDE/Project/Settings.md'
    }
  }
  
  // 16. Reference/Attributes.md 中的上级目录链接
  if (isInAttributes) {
    // ../../Features/Language/Interfaces-CoClasses -> ../../Features/Language/Interfaces-CoClasses/index.md
    if (processed === '../../Features/Language/Interfaces-CoClasses' || processed === './../../Features/Language/Interfaces-CoClasses') {
      return '../../Features/Language/Interfaces-CoClasses/index.md'
    }
    // ../../Features/Language/UDTs -> ../../Features/Language/UDTs/index.md
    if (processed === '../../Features/Language/UDTs' || processed === './../../Features/Language/UDTs') {
      return '../../Features/Language/UDTs/index.md'
    }
  }
  
  return processed
}

export default clearDieLink
