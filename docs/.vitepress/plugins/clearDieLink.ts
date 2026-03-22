// 死链清理插件 - 在 Vite transform 阶段处理，将死链替换为纯文本
// 针对 ai/dielinks 中列出的所有死链

// 所有死链路径（去重后，按长度降序排列，优先匹配长路径）
const deadLinks = [
  // 长路径优先
  './../../Features/Language/Interfaces-CoClasses',
  './../../Features/Language/UDTs',
  './../Features/Language/Interfaces-CoClasses',
  './../IDE/Project/Settings',
  './../Modules/VBA/Array',
  './../Modules/FileSystem',
  './../Tutorials/CustomControls',
  './../tB/Core/AppActivate',
  './../tB/Core/Beep',
  './../tB/Core/Call',
  './../tB/Core/ChDir',
  './../tB/Core/ChDrive',
  './../tB/Core/Class',
  './../tB/Core/Close',
  './../tB/Core/Calendar',
  './../tB/Core/CoClass',
  './../tB/Core/Const',
  './../tB/Core/Continue',
  './../tB/Core/CurDir',
  './../tB/Core/Date',
  './../tB/Core/Declare',
  './../tB/Core/Deftype',
  './../tB/Core/DeleteSetting',
  './../tB/Core/Dir',
  './../tB/Core/Dim',
  './../tB/Core/Do-Loop',
  './../tB/Core/End',
  './../tB/Core/Enum',
  './../tB/Core/Erase',
  './../tB/Core/Error',
  './../tB/Core/Event',
  './../tB/Core/Exit',
  './../tB/Core/FileCopy',
  './../tB/Core/For-Each-Next',
  './../tB/Core/For-Next',
  './../tB/Core/Function',
  './../tB/Core/Get',
  './../tB/Core/GetSetting',
  './../tB/Core/GoSub-Return',
  './../tB/Core/GoTo',
  './../tB/Core/If-Then-Else',
  './../tB/Core/Implements',
  './../tB/Core/Input',
  './../tB/Core/Interface',
  './../tB/Core/Is',
  './../tB/Core/Kill',
  './../tB/Core/LBound',
  './../tB/Core/Let',
  './../tB/Core/Line-Input',
  './../tB/Core/Load',
  './../tB/Core/Lock',
  './../tB/Core/LSet',
  './../tB/Core/Mid-equals',
  './../tB/Core/MidB-equals',
  './../tB/Core/MkDir',
  './../tB/Core/Module',
  './../tB/Core/Name',
  './../tB/Core/New',
  './../tB/Core/Now',
  './../tB/Core/On-Error',
  './../tB/Core/On-GoSub',
  './../tB/Core/On-GoTo',
  './../tB/Core/Open',
  './../tB/Core/Option',
  './../tB/Core/ParamArray',
  './../tB/Core/Print',
  './../tB/Core/Private',
  './../tB/Core/Property',
  './../tB/Core/Protected',
  './../tB/Core/Public',
  './../tB/Core/Put',
  './../tB/Core/RaiseEvent',
  './../tB/Core/ReDim',
  './../tB/Core/Reset',
  './../tB/Core/Resume',
  './../tB/Core/Return',
  './../tB/Core/RmDir',
  './../tB/Core/RSet',
  './../tB/Core/SavePicture',
  './../tB/Core/SaveSetting',
  './../tB/Core/Seek',
  './../tB/Core/Select-Case',
  './../tB/Core/SendKeys',
  './../tB/Core/Set',
  './../tB/Core/SetAttr',
  './../tB/Core/Shell',
  './../tB/Core/Static',
  './../tB/Core/Stop',
  './../tB/Core/Sub',
  './../tB/Core/Time',
  './../tB/Core/Topic-Preprocessor',
  './../tB/Core/Type',
  './../tB/Core/UBound',
  './../tB/Core/Unload',
  './../tB/Core/Unlock',
  './../tB/Core/While-Wend',
  './../tB/Core/Width',
  './../tB/Core/With',
  './../tB/Core/Write',
  './../tB/Core/Attributes',
  './../tB/Gloss',
  './../tB/Modules/Collection',
  './../tB/Modules/Compilation',
  './../tB/Modules/Constants',
  './../tB/Modules/Conversion',
  './../tB/Modules/DateTime',
  './../tB/Modules/DateTime/Date',
  './../tB/Modules/ErrObject',
  './../tB/Modules/ErrorCallstack',
  './../tB/Modules/ErrorContext',
  './../tB/Modules/ErrorStackFrame',
  './../tB/Modules/ExpressionService',
  './../tB/Modules/FileSystem',
  './../tB/Modules/Financial',
  './../tB/Modules/Hyperlink',
  './../tB/Modules/Information',
  './../tB/Modules/Interaction',
  './../tB/Modules/Math',
  './../tB/Modules/Strings',
  './../tB/Modules/TextEncodingConstants',
  './../tB/Modules/_HiddenModule',
  './../tB/Modules/AmbientProperties',
  './../tB/Modules/AsyncProperty',
  './../tB/Modules/ContainedControls',
  './../tB/Modules/DataMembers',
  './../tB/Modules/DataObject',
  './../tB/Modules/ParentControls',
  './../tB/Modules/PropertyBag',
  './../tB/Modules/Graphics',
  './../tB/Reference/Attributes',
  './../tB/Reference/Categories',
  './../tB/Reference/Compiler-Constants',
  './../tB/Reference/Controls/PropertyPage',
  './../tB/Reference/Controls/UserControl',
  './../tB/Reference/Controls/WebView2',
  './../tB/Reference/Error-Codes',
  './../tB/Reference/Glossary',
  './../tB/Reference/Procedures-and-Functions',
  './../tB/Reference/Statements',
  './../tB/Reference/WebView2/Events',
  './../tB/Reference/WebView2/JavaScript-Interop',
  './../tB/Reference',
  './../tB/Tutorials/Arrays',
  './../tB/Tutorials/CustomControls',
  './../tB/Tutorials/CustomControls/Defining-a-CustomControl',
  './../tB/Tutorials/CustomControls/Notes-about-the-form-designer',
  './../tB/Tutorials/CustomControls/Painting-drawing-to-your-control',
  './../tB/Tutorials/CustomControls/Property-sheet-and-object-serialization',
  './../tB/Tutorials/WebView2',
  './../tB/Tutorials/WebView2/Customize-the-UserDataFolder',
  './../tB/Tutorials/WebView2/Getting-started',
  './../tB/Tutorials/WebView2/Re-entrancy',
  './../tB/Videos/AccessDevCon',
  './../tB/Videos/twinBASIC',
  './../tB/Controls',
  './../tB/Core',
  './../tB/IDE/AddIns/index',
  './tB/IDE/AddIns/index',
  './../tB/IDE/Project/CallStack',
  './../tB/IDE/Project/DebugConsole',
  './../tB/IDE/Project/Diagnostics',
  './../tB/IDE/Project/Editor',
  './../tB/IDE/Project/Editor/Form',
  './../tB/IDE/Project/Editor/Report',
  './../tB/IDE/Project/Explorer',
  './../tB/IDE/Project/Menu/index',
  './tB/IDE/Project/Menu/index',
  './../tB/IDE/Project/New',
  './../tB/IDE/Project/Properties',
  './../tB/IDE/Project/Settings',
  './../tB/IDE/Project/Splash',
  './../tB/IDE/Project/StatusBar',
  './../tB/IDE/Project/Toolbar',
  './../tB/IDE/Project/Toolbox',
  './../tB/IDE/Project/Variables',
  './../tB/Modules',
  './../Packages/Creating-TWINPACK',
  './../Packages/Importing-TWINPACK',
  './../Packages/Importing-TWINSERV',
  './../Packages/Updating',
  './../Project/Toolbar',
  './../Toolbox',
  './../../Packages/Importing-TWINSERV/index',
  './../../../Controls',
  './../../Controls',
  './Documentation/Development',
  './Editor/Form',
  './Editor/Report',
  './FAQ',
  './Features',
  './Features/Advanced',
  './Features/Compiler-IDE',
  './Features/GUI-Components',
  './Features/Language',
  './Features/Packages',
  './Features/Project-Configuration',
  './Features/Standard-Library',
  './Importing-TWINPACK',
  './Importing-TWINSERV',
  './Painting',
  './Properties',
  './Reference/Compiler-Constants',
  './Reference/Procedures-and-Functions',
  './Settings',
  './Standard-Library',
  './Tutorials/CustomControls',
  './Tutorials/WebView2',
  './tB/Core/Attributes',
  './tB/Controls',
  './tB/Gloss',
  './tB/IDE/AddIns/index',
  './tB/IDE/Project/CallStack',
  './tB/IDE/Project/DebugConsole',
  './tB/IDE/Project/Diagnostics',
  './tB/IDE/Project/Editor',
  './tB/IDE/Project/Editor/Form',
  './tB/IDE/Project/Editor/Report',
  './tB/IDE/Project/Explorer',
  './tB/IDE/Project/Menu/index',
  './tB/IDE/Project/New',
  './tB/IDE/Project/Properties',
  './tB/IDE/Project/Settings',
  './tB/IDE/Project/Splash',
  './tB/IDE/Project/StatusBar',
  './tB/IDE/Project/Toolbar',
  './tB/IDE/Project/Toolbox',
  './tB/IDE/Project/Variables',
  './tB/Modules',
  './tB/Reference/Compiler-Constants',
  './Videos/tB',
  // 相对当前目录的短路径
  './Attributes',
  './Calendar',
  './Class',
  './CoClass',
  './Close',
  './Command',
  './Const',
  './Continue',
  './CurDir',
  './DateAdd',
  './DateDiff',
  './DateInterval',
  './DatePart',
  './DateSerial',
  './DateValue',
  './Day',
  './Declare',
  './Deftype',
  './Dir',
  './DoEvents',
  './DriveSpec',
  './Enum',
  './Environ',
  './EOF',
  './Erase',
  './Exit',
  './FileAttr',
  './FileCopy',
  './FileDateTime',
  './FileLen',
  './For-Each-Next',
  './For-Next',
  './Format',
  './FormatDateTime',
  './FreeFile',
  './Function',
  './Get',
  './GetAttr',
  './GoSub-Return',
  './GoTo',
  './Hour',
  './If-Then-Else',
  './Input',
  './InputBox',
  './Interface',
  './IsDate',
  './Kill',
  './LBound',
  './Let',
  './Line-Input',
  './Loc',
  './Lock',
  './Minute',
  './MkDir',
  './Module',
  './Month',
  './MsgBox',
  './Name',
  './New',
  './Now',
  './On-Error',
  './Open',
  './ParamArray',
  './Print',
  './Private',
  './Protected',
  './Property',
  './Public',
  './Put',
  './RaiseEvent',
  './ReDim',
  './Reset',
  './Resume',
  './Return',
  './RmDir',
  './Second',
  './Seek',
  './Select-Case',
  './SendKeys',
  './Set',
  './SetAttr',
  './Shell',
  './Static',
  './Stop',
  './Sub',
  './Time',
  './TimeSerial',
  './TimeValue',
  './Timer',
  './Type',
  './UBound',
  './Unlock',
  './Weekday',
  './While-Wend',
  './Width',
  './With',
  './Write',
  './Year',
  './Core/Is',
  './Core/Property',
  './Core/Public',
  './Core/Static',
  './Core/Sub',
  // 绝对路径
  '/zh/tB/Core',
  '/zh/tB/Core/Dim',
  '/zh/tB/Core/Error',
  '/zh/tB/Core/For-Each-Next',
  '/zh/tB/Core/For-Next',
  '/zh/tB/Core/Function',
  '/zh/tB/Core/Option',
  '/zh/tB/Core/Property',
  '/zh/tB/Core/Sub',
  '/zh/tB/Modules',
  '/zh/tB/Modules/DateTime',
  '/zh/tB/Modules/DateTime/Date',
  '/zh/tB/Modules/DateTime/DateAdd',
  '/zh/tB/Modules/DateTime/DateDiff',
  '/zh/tB/Modules/DateTime/DateInterval',
  '/zh/tB/Modules/DateTime/DatePart',
  '/zh/tB/Modules/DateTime/DateSerial',
  '/zh/tB/Modules/DateTime/DateValue',
  '/zh/tB/Modules/DateTime/Day',
  '/zh/tB/Modules/DateTime/Format',
  '/zh/tB/Modules/DateTime/FormatDateTime',
  '/zh/tB/Modules/DateTime/Hour',
  '/zh/tB/Modules/DateTime/IsDate',
  '/zh/tB/Modules/DateTime/Minute',
  '/zh/tB/Modules/DateTime/Month',
  '/zh/tB/Modules/DateTime/Now',
  '/zh/tB/Modules/DateTime/Second',
  '/zh/tB/Modules/DateTime/Time',
  '/zh/tB/Modules/DateTime/TimeSerial',
  '/zh/tB/Modules/DateTime/TimeValue',
  '/zh/tB/Modules/DateTime/Timer',
  '/zh/tB/Modules/DateTime/Weekday',
  '/zh/tB/Modules/DateTime/Year',
  '/zh/tB/Modules/FileSystem',
  '/zh/tB/Modules/FileSystem/ChDir',
  '/zh/tB/Modules/FileSystem/ChDrive',
  '/zh/tB/Modules/FileSystem/FileCopy',
  '/zh/tB/Modules/Financial',
  '/zh/tB/Modules/Graphics',
  '/zh/tB/Modules/Interaction',
  '/zh/tB/Modules/Interaction/AppActivate',
  '/zh/tB/Modules/Interaction/Beep',
  '/zh/tB/Modules/Interaction/DeleteSetting',
  '/zh/tB/Modules/Interaction/GetSetting',
  '/zh/tB/Modules/Interaction/SaveSetting',
  '/zh/tB/Modules/Math',
  '/zh/tB/Modules/Strings',
  '/zh/tB/Reference',
  '/zh/tB/Reference/Attributes',
  '/zh/tB/Reference/Categories',
  '/zh/tB/Reference/Compiler-Constants',
  '/zh/tB/Reference/Controls/PropertyPage',
  '/zh/tB/Reference/Controls/UserControl',
  '/zh/tB/Reference/Controls/WebView2',
  '/zh/tB/Reference/WebView2/Events',
  '/zh/tB/Reference/WebView2/JavaScript-Interop',
  '/zh/tB/Reference/Error-Codes',
  '/zh/tB/Reference/Glossary',
  '/zh/tB/Reference/Procedures-and-Functions',
  '/zh/tB/Reference/Statements',
  '/zh/tB/Tutorials/Arrays',
  '/zh/tB/Tutorials/CustomControls',
  '/zh/tB/Tutorials/CustomControls/Defining-a-CustomControl',
  '/zh/tB/Tutorials/CustomControls/Notes-about-the-form-designer',
  '/zh/tB/Tutorials/CustomControls/Painting-drawing-to-your-control',
  '/zh/tB/Tutorials/CustomControls/Property-sheet-and-object-serialization',
  '/zh/tB/Tutorials/WebView2',
  '/zh/tB/Tutorials/WebView2/Customize-the-UserDataFolder',
  '/zh/tB/Tutorials/WebView2/Getting-started',
  '/zh/tB/Tutorials/WebView2/Re-entrancy',
  '/zh/tB/Videos/AccessDevCon',
  '/zh/tB/Videos/twinBASIC',
  // 特殊路径
  '/tB/Core/For-Next',
  'http://localhost:4000',
]

  // 去重并按长度降序排序（长的先匹配，避免部分匹配问题）
const uniqueDeadLinks = [...new Set(deadLinks)].sort((a, b) => b.length - a.length)

// 清理死链的主函数
export function clearDieLinks(code: string, id: string): string | null {
  // 只处理 markdown 文件
  if (!id.endsWith('.md')) return null

  // 只处理指定目录下的文件
  const normalizedPath = id.replace(/\\/g, '/')
  const isTargetDir = normalizedPath.includes('/docs/en/official/') || 
                      normalizedPath.includes('/docs/zh/official/')
  if (!isTargetDir) return null

  let transformed = code
  let hasChanged = false
  let replacedCount = 0

  // 特殊处理：直接替换已知的特定死链模式
  const specificPatterns = [
    // [text](../../Packages/Importing-TWINSERV/) 或 [text](../../Packages/Importing-TWINSERV/index)
    { pattern: /\[([^\]]+)\]\(\.\.\/\.\.\/Packages\/Importing-TWINSERV\/?(?:index)?\)/g, replacement: '$1' },
    // [text](../../Features/Language/Interfaces-CoClasses) 或带锚点
    { pattern: /\[([^\]]+)\]\(\.\.\/\.\.\/Features\/Language\/Interfaces-CoClasses[^)]*\)/g, replacement: '$1' },
    // [text](tB/IDE/Project/Menu/) 或 [text](tB/IDE/Project/Menu/index) - 注意：没有 ./ 前缀
    { pattern: /\[([^\]]+)\]\(tB\/IDE\/Project\/Menu\/?(?:index)?\)/g, replacement: '$1' },
    // [text](tB/IDE/AddIns/) 或 [text](tB/IDE/AddIns/index) - 注意：没有 ./ 前缀
    { pattern: /\[([^\]]+)\]\(tB\/IDE\/AddIns\/?(?:index)?\)/g, replacement: '$1' },
  ]

  // 处理 [完整大小] 和 [Full size] 图片链接 - 转换为 Markdown 图片语法
  const fullSizePatterns = [
    // [完整大小](/images/...) -> ![完整大小](/images/...)
    { pattern: /\[完整大小\]\(([^)]+)\)/g, replacement: '![完整大小]($1)' },
    // [Full size](...) -> ![Full size](...)
    { pattern: /\[Full size\]\(([^)]+)\)/g, replacement: '![Full size]($1)' },
    // [full size](...) -> ![full size](...)
    { pattern: /\[full size\]\(([^)]+)\)/g, replacement: '![full size]($1)' },
  ]
  
  for (const { pattern, replacement } of fullSizePatterns) {
    const newTransformed = transformed.replace(pattern, replacement)
    if (newTransformed !== transformed) {
      transformed = newTransformed
      hasChanged = true
    }
  }
  
  // 特殊处理：替换纯文本 URL（不是 markdown 链接）
  transformed = transformed.replace(/http:\/\/localhost:4000/g, 'localhost:4000')

  for (const { pattern, replacement } of specificPatterns) {
    const matches = transformed.match(pattern)
    if (matches) {
      replacedCount += matches.length
      transformed = transformed.replace(pattern, replacement)
      hasChanged = true
    }
  }

  // 处理每种死链 - 使用正则替换 [text](link) 为 text
  for (const link of uniqueDeadLinks) {
    // 同时处理多种变体：
    // 1. 原始路径（如 ./../tB/Gloss）
    // 2. 去掉 ./ 前缀（如 ../tB/Gloss）
    // 3. 对于 ./../../Features/... 也添加 ../../Features/... 变体
    const linkVariants = new Set([link])
    
    if (link.startsWith('./')) {
      const withoutDotSlash = link.slice(2) // ../tB/Gloss 或 ../../Features/...
      linkVariants.add(withoutDotSlash)
      
      // 对于 ./../tB/Gloss 也添加 ../Gloss 变体
      if (withoutDotSlash.startsWith('../tB/')) {
        linkVariants.add(withoutDotSlash.replace('../tB/', '../'))
      }
      // 对于 ./../../Features/... 也添加简化变体
      if (withoutDotSlash.startsWith('../../')) {
        linkVariants.add(withoutDotSlash.slice(3)) // 去掉 ../ 前缀
      }
      if (withoutDotSlash.startsWith('../')) {
        linkVariants.add(withoutDotSlash.slice(3)) // 去掉 ../ 前缀
      }
    }
    
    // 也处理反过来：如果链接以 ../ 或 ../../ 开头，也尝试加 ./ 前缀
    if (link.startsWith('../')) {
      linkVariants.add('./' + link)
    }

    for (const linkVariant of linkVariants) {
      // 转义正则特殊字符
      const escapedLink = linkVariant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

      // 匹配 markdown 链接的各种变体：
      // [text](link), [text](link.md), [text](link/index), [text](link/index.md)
      // [text](link#anchor), [text](link.md#anchor) 等带锚点的格式
      // [text](link/), [text](link/index/) 等带末尾斜杠的格式
      const patterns = [
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/\\)`, 'g'),  // 带末尾斜杠
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}\\.md\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/index\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/index/\\)`, 'g'),  // 带末尾斜杠
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/index\\.md\\)`, 'g'),
        // 带锚点的变体
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}#[^\\)]+\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}\\.md#[^\\)]+\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/index#[^\\)]+\\)`, 'g'),
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedLink}/index\\.md#[^\\)]+\\)`, 'g'),
      ]

      for (const pattern of patterns) {
        const matches = transformed.match(pattern)
        if (matches) {
          replacedCount += matches.length
        }
        const newTransformed = transformed.replace(pattern, '$1')
        if (newTransformed !== transformed) {
          transformed = newTransformed
          hasChanged = true
        }
      }
    }
  }

  // 调试输出（只在有替换时显示）
  // if (replacedCount > 0) {
  //   console.log(`[clearDieLink] ${id}: 替换了 ${replacedCount} 个死链`)
  // }

  return hasChanged ? transformed : null
}

// Vite 插件形式导出（兼容之前的用法）
export default function clearDieLinkPlugin() {
  let processedCount = 0
  let replacedTotal = 0
  
  return {
    name: 'clear-dead-links',
    enforce: 'pre' as const,
    
    buildStart() {
      console.log('[clear-dead-links] Starting dead link cleanup...')
    },
    
    transform(code: string, id: string) {
      // 只处理指定目录下的 markdown 文件
      if (!id.endsWith('.md')) return null
      
      const normalizedPath = id.replace(/\\/g, '/')
      const isTargetDir = normalizedPath.includes('/docs/en/official/') || 
                          normalizedPath.includes('/docs/zh/official/')
      if (!isTargetDir) return null
      
      // 第一步：先处理 Markdown 链接/图片中的 %20，这比 clearDieLinks 更早
      let transformed = code
      let hasChanged = false
      
      // 处理 [text](url) 格式中的 %20（只处理 .md 链接，不处理图片）
      if (code.includes('%20')) {
        // 处理链接 [text](url)，排除图片 ![alt](url)，且只处理 .md 结尾的链接
        transformed = code.replace(/(?<!!)\[([^\]]+)\]\(([^)]+\.md[^)]*)\)/g, (match, text, url) => {
          const decodedUrl = url.replace(/%20/g, '-')
          if (decodedUrl !== url) {
            return `[${text}](${decodedUrl})`
          }
          return match
        })
        hasChanged = transformed !== code
      }
      
      // 注意：不要处理图片路径中的空格，因为实际图片文件名可能就是带空格的
      // VitePress 会自动处理资源文件名的编码
      
      // 第二步：处理死链
      const result = clearDieLinks(transformed, id)
      if (result) {
        transformed = result
        hasChanged = true
      }
      
      if (hasChanged) {
        processedCount++
        replacedTotal += (code.length - transformed.length) > 0 ? 1 : 0
        return transformed
      }
      
      return null
    },
    
    closeBundle() {
      console.log(`[clear-dead-links] Done: ${processedCount} files processed`)
    }
  }
}
