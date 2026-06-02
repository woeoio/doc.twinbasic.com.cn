import fs from 'fs'
import path from 'path'

/**
 * 需要重命名的文件映射
 * key: 带空格的源文件名 (不带路径)
 * value: 带连字符的目标文件名 (不带路径)
 */
const renameMap: Record<string, string> = {
  'Documentation Development.html': 'Documentation-Development.html',
  'Compiler Constants.html': 'Compiler-Constants.html',
  'Procedures and Functions.html': 'Procedures-and-Functions.html',
  'Call Stack.html': 'Call-Stack.html',
  'Debug Console.html': 'Debug-Console.html',
  'New Project.html': 'New-Project.html',
  'Open Editors.html': 'Open-Editors.html',
  'Package Publishing.html': 'Package-Publishing.html',
  'Project Explorer.html': 'Project-Explorer.html',
  'Project Settings.html': 'Project-Settings.html',
  'Splash Screen.html': 'Splash-Screen.html',
  'Status Bar.html': 'Status-Bar.html',
  'Creating a TWINPACK package.html': 'Creating-a-TWINPACK-package.html',
  'Importing a package from a TWINPACK file.html': 'Importing-a-package-from-a-TWINPACK-file.html',
  'Importing a package from TWINSERV.html': 'Importing-a-package-from-TWINSERV.html',
  'Linked Packages.html': 'Linked-Packages.html',
  'Updating a package.html': 'Updating-a-package.html',
  'Defining a CustomControl.html': 'Defining-a-CustomControl.html',
  'Notes about the form designer.html': 'Notes-about-the-form-designer.html',
  'Painting-drawing to your control.html': 'Painting-drawing-to-your-control.html',
  'Property sheet and object serialization.html': 'Property-sheet-and-object-serialization.html',
  'Customize the UserDataFolder.html': 'Customize-the-UserDataFolder.html',
  'Getting started.html': 'Getting-started.html',
  'Building a browser shell.html': 'Building-a-browser-shell.html',
  'Driving Monaco.html': 'Driving-Monaco.html',
  'Hosting local web assets.html': 'Hosting-local-web-assets.html',
  'JavaScript interop.html': 'JavaScript-interop.html',
  // CEF (Note: keys are the same as WebView2, no duplicates needed)
}

// 构建反向映射用于链接替换
const oldToNewMap: Record<string, string> = {}
const oldToNewPatterns: { oldName: string; newName: string }[] = []

for (const [oldName, newName] of Object.entries(renameMap)) {
  oldToNewMap[oldName] = newName
  oldToNewPatterns.push({ oldName, newName })
}

/**
 * 修复 HTML 文件中的链接引用
 */
function fixHtmlLinks(content: string): string {
  let newContent = content
  for (const { oldName, newName } of oldToNewPatterns) {
    // 使用正则替换所有出现的旧文件名
    // 处理 href="...oldName" 和 href='...oldName' 等情况
    const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(escapedOldName, 'g')
    newContent = newContent.replace(regex, newName)
  }
  return newContent
}

/**
 * 递归查找并重命名文件，同时修复内部链接
 */
function processFilesInDir(dir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  // 第一阶段：收集需要重命名的文件
  const filesToRename: { oldPath: string; newPath: string }[] = []
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // 递归处理子目录
      processFilesInDir(fullPath)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      // 检查是否需要重命名
      const targetName = renameMap[entry.name]
      if (targetName) {
        const targetPath = path.join(dir, targetName)
        filesToRename.push({ oldPath: fullPath, newPath: targetPath })
      }
    }
  }

  // 第二阶段：处理 HTML 文件内容（修复链接）
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8')
      const newContent = fixHtmlLinks(content)
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf-8')
      }
    }
  }

  // 第三阶段：重命名文件
  for (const { oldPath, newPath } of filesToRename) {
    fs.renameSync(oldPath, newPath)
  }
}

/**
 * VitePress buildEnd 钩子
 * 在构建完成后重命名输出文件（空格 -> 连字符）并修复内部链接
 */
export function renameBuildFiles(outDir: string): void {
  const distPath = path.resolve(outDir)
  
  if (!fs.existsSync(distPath)) {
    return
  }

  processFilesInDir(distPath)
}

export default renameBuildFiles
