import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

// 路径映射规则：旧路径 -> 新路径
const redirectMap: Record<string, string> = {
  // ========== 中文路径 ==========
  // 首页相关
  '/official/Home': '/official/',
  
  // FAQ
  '/official/twinBASIC-Frequently-Asked-Questions-(FAQs)': '/official/Miscellaneous/FAQs',
  
  // 入门指南相关
  '/start/base': '/official/Tutorials/',
  '/res/pic': '/official/Tutorials/',
  // 搜索引擎抓取的错误路径，显示“入门指南”却跑到 WebView2 子目录
  '/official/twinBASIC-WebView2-Getting-Started': '/official/Tutorials/',
  
  // Features 功能特性
  '/official/twinBASIC-Features-1': '/official/Features/',
  '/official/twinBASIC-Features-2': '/official/Features/',
  '/official/twinBASIC-Features-3': '/official/Features/',
  '/official/twinBASIC-Features-4': '/official/Features/',
  
  // 编译器常量
  '/official/twinBASIC-Compiler-Constants': '/official/Reference/Compiler-Constants',
  
  // 控件相关
  '/official/Control-Anchoring-and-Docking-‐-Automatic-size-and-position-management': '/official/Features/GUI-Components/Anchoring-Docking',
  
  // 自定义控件
  '/official/twinBASIC-CustomControls-Introduction': '/official/Tutorials/CustomControls/',
  '/official/twinBASIC---CustomControls---Defining-a-CustomControl': '/official/Tutorials/CustomControls/Defining-a-CustomControl',
  '/official/twinBASIC---CustomControls---Notes-about-the-form-designer': '/official/Tutorials/CustomControls/Notes-about-the-form-designer',
  '/official/twinBASIC---CustomControls---Painting---drawing-to-your-control': '/official/Tutorials/CustomControls/Painting-drawing-to-your-control',
  '/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization': '/official/Tutorials/CustomControls/Property-sheet-and-object-serialization',
  
  // 包管理
  '/official/twinBASIC-Packages-What-is-a-package': '/official/Features/Packages/',
  '/official/twinBASIC-Packages-Creating-a-TWINPACK-package': '/official/Features/Packages/Creating-a-TWINPACK-package',
  '/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file': '/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file',
  '/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV': '/official/Features/Packages/Importing-a-package-from-TWINSERV',
  '/official/twinBASIC-Packages-Updating-a-package': '/official/Features/Packages/Updating-a-package',
  
  // ========== 英文路径 ==========
  // 首页相关
  '/en/official/Home': '/en/official/',
  
  // FAQ
  '/en/official/twinBASIC-Frequently-Asked-Questions-(FAQs)': '/en/official/Miscellaneous/FAQs',
  
  // 入门指南相关
  '/en/start/base': '/en/official/Tutorials/',
  '/en/res/pic': '/en/official/Tutorials/',
  // 搜索引擎抓取的错误路径，显示“入门指南”却跑到 WebView2 子目录
  '/en/official/twinBASIC-WebView2-Getting-Started': '/en/official/Tutorials/',
  
  // Features 功能特性
  '/en/official/twinBASIC-Features-1': '/en/official/Features/',
  '/en/official/twinBASIC-Features-2': '/en/official/Features/',
  '/en/official/twinBASIC-Features-3': '/en/official/Features/',
  '/en/official/twinBASIC-Features-4': '/en/official/Features/',
  
  // 编译器常量
  '/en/official/twinBASIC-Compiler-Constants': '/en/official/Reference/Compiler-Constants',

  // 自定义控件
  '/en/official/twinBASIC-CustomControls-Introduction': '/en/official/Tutorials/CustomControls/',
  '/en/official/twinBASIC---CustomControls---Defining-a-CustomControl': '/en/official/Tutorials/CustomControls/Defining-a-CustomControl',
  '/en/official/twinBASIC---CustomControls---Notes-about-the-form-designer': '/en/official/Tutorials/CustomControls/Notes-about-the-form-designer',
  '/en/official/twinBASIC---CustomControls---Painting---drawing-to-your-control': '/en/official/Tutorials/CustomControls/Painting-drawing-to-your-control',
  '/en/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization': '/en/official/Tutorials/CustomControls/Property-sheet-and-object-serialization',

  // 包管理
  '/en/official/twinBASIC-Packages-What-is-a-package': '/en/official/Features/Packages/',
  '/en/official/twinBASIC-Packages-Creating-a-TWINPACK-package': '/en/official/Features/Packages/Creating-a-TWINPACK-package',
  '/en/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file': '/en/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file',
  '/en/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV': '/en/official/Features/Packages/Importing-a-package-from-TWINSERV',
  '/en/official/twinBASIC-Packages-Updating-a-package': '/en/official/Features/Packages/Updating-a-package'
}

export function navRedirectPlugin(): Plugin {
  return {
    name: 'nav-redirect',
    enforce: 'post',
    
    // 生成重定向 HTML 文件
    closeBundle() {
      console.log('[nav-redirect] Generating redirect files...')
      
      const outDir = path.resolve(process.cwd(), 'dist')
      
      // 为每个旧路径生成重定向 HTML
      for (const [oldPath, newPath] of Object.entries(redirectMap)) {
        // 移除开头的斜杠
        const relativePath = oldPath.startsWith('/') ? oldPath.slice(1) : oldPath
        const htmlPath = path.join(outDir, relativePath + '.html')
        
        // 确保目标目录存在
        const dir = path.dirname(htmlPath)
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }
        
        // 生成 301 重定向 HTML
        const redirectHtml = generateRedirectHtml(newPath)
        
        try {
          fs.writeFileSync(htmlPath, redirectHtml, 'utf-8')
          // console.log(`[nav-redirect] Created redirect: ${oldPath} -> ${newPath}`)
        } catch (err) {
          console.error(`[nav-redirect] Failed to create redirect for ${oldPath}:`, err)
        }
      }
      
      // 生成 _redirects 文件 (用于 Netlify/Vercel)
      generateRedirectsFile(outDir, redirectMap)
      
      console.log(`[nav-redirect] Done: ${Object.keys(redirectMap).length} redirects generated`)
    }
  }
}

// 生成重定向 HTML 文件内容 (使用 meta refresh 作为降级方案)
function generateRedirectHtml(targetPath: string): string {
  const fullUrl = targetPath.startsWith('http') ? targetPath : targetPath
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>301 Moved Permanently</title>
  <meta http-equiv="refresh" content="0; url=${fullUrl}">
  <link rel="canonical" href="${fullUrl}">
  <script>
    // JavaScript 重定向作为备选
    window.location.href = "${fullUrl}";
  </script>
</head>
<body>
  <h1>301 Moved Permanently</h1>
  <p>The document has moved <a href="${fullUrl}">here</a>.</p>
</body>
</html>
`
}

// 生成 _redirects 文件 (Netlify/Vercel 格式)
function generateRedirectsFile(outDir: string, redirects: Record<string, string>): void {
  const lines: string[] = []
  
  for (const [from, to] of Object.entries(redirects)) {
    // Netlify/Vercel 格式: from to status
    lines.push(`${from} ${to} 301`)
  }
  
  const redirectsFile = path.join(outDir, '_redirects')
  
  try {
    fs.writeFileSync(redirectsFile, lines.join('\n') + '\n', 'utf-8')
    // console.log(`[nav-redirect] Generated _redirects file with ${lines.length} rules`)
  } catch (err) {
    console.error('[nav-redirect] Failed to generate _redirects file:', err)
  }
  
  // 同时生成 vercel.json 格式的重定向配置
  const vercelConfig = {
    redirects: Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true
    }))
  }
  
  const vercelFile = path.join(outDir, 'vercel.json')
  try {
    fs.writeFileSync(vercelFile, JSON.stringify(vercelConfig, null, 2), 'utf-8')
    // console.log(`[nav-redirect] Generated vercel.json with ${vercelConfig.redirects.length} rules`)
  } catch (err) {
    console.error('[nav-redirect] Failed to generate vercel.json:', err)
  }
}

export default navRedirectPlugin
