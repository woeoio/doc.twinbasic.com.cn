import type { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

// 路径映射规则：旧路径 -> 新路径
const redirectMap: Record<string, string> = {
  // ========== 中文路径 ==========
  // 首页相关
  '/official/Home': '/official/',
  
  // FAQ
  '/official/twinBASIC-Frequently-Asked-Questions-(FAQs).html': '/official/Miscellaneous/FAQs.html',
  
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
  '/official/twinBASIC-Compiler-Constants': '/official/Reference/Compiler-Constants.html',

  // 控件相关
  '/official/Control-Anchoring-and-Docking-‐-Automatic-size-and-position-management': '/official/Features/GUI-Components/Anchoring-Docking.html',

  // 自定义控件
  '/official/twinBASIC-CustomControls-Introduction': '/official/Tutorials/CustomControls/',
  '/official/twinBASIC---CustomControls---Defining-a-CustomControl': '/official/Tutorials/CustomControls/Defining-a-CustomControl.html',
  '/official/twinBASIC---CustomControls---Notes-about-the-form-designer': '/official/Tutorials/CustomControls/Notes-about-the-form-designer.html',
  '/official/twinBASIC---CustomControls---Painting---drawing-to-your-control': '/official/Tutorials/CustomControls/Painting-drawing-to-your-control.html',
  '/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization': '/official/Tutorials/CustomControls/Property-sheet-and-object-serialization.html',

  // 包管理
  '/official/twinBASIC-Packages-What-is-a-package': '/official/Features/Packages/',
  '/official/twinBASIC-Packages-Creating-a-TWINPACK-package': '/official/Features/Packages/Creating-a-TWINPACK-package.html',
  '/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file': '/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file.html',
  '/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV': '/official/Features/Packages/Importing-a-package-from-TWINSERV.html',
  '/official/twinBASIC-Packages-Updating-a-package': '/official/Features/Packages/Updating-a-package.html',

  // VBCCR 旧路径 (扁平结构 -> 新分类结构)
  '/packages/vbccr/readme': '/packages/vbccr/author',
  // 按钮类
  '/packages/vbccr/checkbox': '/packages/vbccr/buttons/checkboxw',
  '/packages/vbccr/commandbutton': '/packages/vbccr/buttons/commandbuttonw',
  '/packages/vbccr/commandlink': '/packages/vbccr/buttons/commandlink',
  '/packages/vbccr/optionbutton': '/packages/vbccr/buttons/optionbuttonw',
  // 文本标签类
  '/packages/vbccr/textbox': '/packages/vbccr/text/textboxw',
  '/packages/vbccr/richtextbox': '/packages/vbccr/text/richtextbox',
  '/packages/vbccr/spinbox': '/packages/vbccr/text/spinbox',
  '/packages/vbccr/label': '/packages/vbccr/text/labelw',
  '/packages/vbccr/windowedlabel': '/packages/vbccr/text/windowedlabel',
  '/packages/vbccr/linklabel': '/packages/vbccr/text/linklabel',
  '/packages/vbccr/hotkey': '/packages/vbccr/text/hotkey',
  // 列表选择类
  '/packages/vbccr/combobox': '/packages/vbccr/lists/comboboxw',
  '/packages/vbccr/listbox': '/packages/vbccr/lists/listboxw',
  '/packages/vbccr/fontcombo': '/packages/vbccr/lists/fontcombo',
  '/packages/vbccr/imagecombo': '/packages/vbccr/lists/imagecombo',
  '/packages/vbccr/ipaddress': '/packages/vbccr/lists/ipaddress',
  '/packages/vbccr/virtualcombo': '/packages/vbccr/lists/virtualcombo',
  '/packages/vbccr/vlistbox': '/packages/vbccr/lists/vlistbox',
  // 视图类
  '/packages/vbccr/listview': '/packages/vbccr/views/listview',
  '/packages/vbccr/treeview': '/packages/vbccr/views/treeview',
  '/packages/vbccr/tabstrip': '/packages/vbccr/views/tabstrip',
  // 工具条/状态栏类
  '/packages/vbccr/toolbar': '/packages/vbccr/bars/toolbar',
  '/packages/vbccr/statusbar': '/packages/vbccr/bars/statusbar',
  '/packages/vbccr/coolbar': '/packages/vbccr/bars/coolbar',
  '/packages/vbccr/pager': '/packages/vbccr/bars/pager',
  // 滑块/进度/调节类
  '/packages/vbccr/slider': '/packages/vbccr/ranges/slider',
  '/packages/vbccr/progressbar': '/packages/vbccr/ranges/progressbar',
  '/packages/vbccr/updown': '/packages/vbccr/ranges/updown',
  '/packages/vbccr/animation': '/packages/vbccr/ranges/animation',
  // 日期时间类
  '/packages/vbccr/dtpicker': '/packages/vbccr/datetime/dtpicker',
  '/packages/vbccr/datetimepicker': '/packages/vbccr/datetime/dtpicker',
  '/packages/vbccr/monthview': '/packages/vbccr/datetime/monthview',
  '/packages/vbccr/monthcalendar': '/packages/vbccr/datetime/monthview',
  // 对话框/系统/容器/多媒体类
  '/packages/vbccr/commondialog': '/packages/vbccr/system/commondialog',
  '/packages/vbccr/sysinfo': '/packages/vbccr/system/sysinfo',
  '/packages/vbccr/imagelist': '/packages/vbccr/system/imagelist',
  '/packages/vbccr/frame': '/packages/vbccr/system/framew',
  '/packages/vbccr/mciwnd': '/packages/vbccr/system/mciwnd',
  // 已删除/不再存在的旧控件 -> 重定向到 VBCCR 首页
  '/packages/vbccr/drivelist': '/packages/vbccr/',
  '/packages/vbccr/drivepath': '/packages/vbccr/',
  '/packages/vbccr/filepath': '/packages/vbccr/',
  '/packages/vbccr/image': '/packages/vbccr/',
  '/packages/vbccr/line': '/packages/vbccr/',
  '/packages/vbccr/option': '/packages/vbccr/',
  '/packages/vbccr/picture': '/packages/vbccr/',
  '/packages/vbccr/scrollbar': '/packages/vbccr/',
  '/packages/vbccr/shape': '/packages/vbccr/',
  '/packages/vbccr/timer': '/packages/vbccr/',
  '/packages/vbccr/webbrowser': '/packages/vbccr/',
  
  // ========== 英文路径 ==========
  // 首页相关
  '/en/official/Home': '/en/official/',
  
  // FAQ
  '/en/official/twinBASIC-Frequently-Asked-Questions-(FAQs).html': '/en/official/Miscellaneous/FAQs.html',

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
  '/en/official/twinBASIC-Compiler-Constants': '/en/official/Reference/Compiler-Constants.html',

  // 自定义控件
  '/en/official/twinBASIC-CustomControls-Introduction': '/en/official/Tutorials/CustomControls/',
  '/en/official/twinBASIC---CustomControls---Defining-a-CustomControl': '/en/official/Tutorials/CustomControls/Defining-a-CustomControl.html',
  '/en/official/twinBASIC---CustomControls---Notes-about-the-form-designer': '/en/official/Tutorials/CustomControls/Notes-about-the-form-designer.html',
  '/en/official/twinBASIC---CustomControls---Painting---drawing-to-your-control': '/en/official/Tutorials/CustomControls/Painting-drawing-to-your-control.html',
  '/en/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization': '/en/official/Tutorials/CustomControls/Property-sheet-and-object-serialization.html',

  // 包管理
  '/en/official/twinBASIC-Packages-What-is-a-package': '/en/official/Features/Packages/',
  '/en/official/twinBASIC-Packages-Creating-a-TWINPACK-package': '/en/official/Features/Packages/Creating-a-TWINPACK-package.html',
  '/en/official/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file': '/en/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file.html',
  '/en/official/twinBASIC-Packages-Importing-a-package-from-TWINSERV': '/en/official/Features/Packages/Importing-a-package-from-TWINSERV.html',
  '/en/official/twinBASIC-Packages-Updating-a-package': '/en/official/Features/Packages/Updating-a-package.html',

  // VBCCR 旧路径 (扁平结构 -> 新分类结构)
  '/en/packages/vbccr/readme': '/en/packages/vbccr/author',
  // Buttons
  '/en/packages/vbccr/checkbox': '/en/packages/vbccr/buttons/checkboxw',
  '/en/packages/vbccr/commandbutton': '/en/packages/vbccr/buttons/commandbuttonw',
  '/en/packages/vbccr/commandlink': '/en/packages/vbccr/buttons/commandlink',
  '/en/packages/vbccr/optionbutton': '/en/packages/vbccr/buttons/optionbuttonw',
  // Text
  '/en/packages/vbccr/textbox': '/en/packages/vbccr/text/textboxw',
  '/en/packages/vbccr/richtextbox': '/en/packages/vbccr/text/richtextbox',
  '/en/packages/vbccr/spinbox': '/en/packages/vbccr/text/spinbox',
  '/en/packages/vbccr/label': '/en/packages/vbccr/text/labelw',
  '/en/packages/vbccr/windowedlabel': '/en/packages/vbccr/text/windowedlabel',
  '/en/packages/vbccr/linklabel': '/en/packages/vbccr/text/linklabel',
  '/en/packages/vbccr/hotkey': '/en/packages/vbccr/text/hotkey',
  // Lists
  '/en/packages/vbccr/combobox': '/en/packages/vbccr/lists/comboboxw',
  '/en/packages/vbccr/listbox': '/en/packages/vbccr/lists/listboxw',
  '/en/packages/vbccr/fontcombo': '/en/packages/vbccr/lists/fontcombo',
  '/en/packages/vbccr/imagecombo': '/en/packages/vbccr/lists/imagecombo',
  '/en/packages/vbccr/ipaddress': '/en/packages/vbccr/lists/ipaddress',
  '/en/packages/vbccr/virtualcombo': '/en/packages/vbccr/lists/virtualcombo',
  '/en/packages/vbccr/vlistbox': '/en/packages/vbccr/lists/vlistbox',
  // Views
  '/en/packages/vbccr/listview': '/en/packages/vbccr/views/listview',
  '/en/packages/vbccr/treeview': '/en/packages/vbccr/views/treeview',
  '/en/packages/vbccr/tabstrip': '/en/packages/vbccr/views/tabstrip',
  // Bars
  '/en/packages/vbccr/toolbar': '/en/packages/vbccr/bars/toolbar',
  '/en/packages/vbccr/statusbar': '/en/packages/vbccr/bars/statusbar',
  '/en/packages/vbccr/coolbar': '/en/packages/vbccr/bars/coolbar',
  '/en/packages/vbccr/pager': '/en/packages/vbccr/bars/pager',
  // Ranges
  '/en/packages/vbccr/slider': '/en/packages/vbccr/ranges/slider',
  '/en/packages/vbccr/progressbar': '/en/packages/vbccr/ranges/progressbar',
  '/en/packages/vbccr/updown': '/en/packages/vbccr/ranges/updown',
  '/en/packages/vbccr/animation': '/en/packages/vbccr/ranges/animation',
  // Date/Time
  '/en/packages/vbccr/dtpicker': '/en/packages/vbccr/datetime/dtpicker',
  '/en/packages/vbccr/datetimepicker': '/en/packages/vbccr/datetime/dtpicker',
  '/en/packages/vbccr/monthview': '/en/packages/vbccr/datetime/monthview',
  '/en/packages/vbccr/monthcalendar': '/en/packages/vbccr/datetime/monthview',
  // System
  '/en/packages/vbccr/commondialog': '/en/packages/vbccr/system/commondialog',
  '/en/packages/vbccr/sysinfo': '/en/packages/vbccr/system/sysinfo',
  '/en/packages/vbccr/imagelist': '/en/packages/vbccr/system/imagelist',
  '/en/packages/vbccr/frame': '/en/packages/vbccr/system/framew',
  '/en/packages/vbccr/mciwnd': '/en/packages/vbccr/system/mciwnd',
  // 已删除/不再存在的旧控件 -> 重定向到 VBCCR 首页
  '/en/packages/vbccr/drivelist': '/en/packages/vbccr/',
  '/en/packages/vbccr/drivepath': '/en/packages/vbccr/',
  '/en/packages/vbccr/filepath': '/en/packages/vbccr/',
  '/en/packages/vbccr/image': '/en/packages/vbccr/',
  '/en/packages/vbccr/line': '/en/packages/vbccr/',
  '/en/packages/vbccr/option': '/en/packages/vbccr/',
  '/en/packages/vbccr/picture': '/en/packages/vbccr/',
  '/en/packages/vbccr/scrollbar': '/en/packages/vbccr/',
  '/en/packages/vbccr/shape': '/en/packages/vbccr/',
  '/en/packages/vbccr/timer': '/en/packages/vbccr/',
  '/en/packages/vbccr/webbrowser': '/en/packages/vbccr/'
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
        // 如果路径已以 .html 结尾，则不再添加
        const htmlPath = relativePath.endsWith('.html')
          ? path.join(outDir, relativePath)
          : path.join(outDir, relativePath + '.html')
        
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
