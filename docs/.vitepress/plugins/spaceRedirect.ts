import fs from 'fs'
import path from 'path'

/**
 * 文件名映射：带空格的文件名 -> 带连字符的文件名
 * 与 renameBuildFiles.ts 中的 renameMap 相反
 */
const spaceToHyphenMap: Record<string, string> = {
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
  'Updating a package.html': 'Updating-a-package.html',
  'Defining a CustomControl.html': 'Defining-a-CustomControl.html',
  'Notes about the form designer.html': 'Notes-about-the-form-designer.html',
  'Painting-drawing to your control.html': 'Painting-drawing-to-your-control.html',
  'Property sheet and object serialization.html': 'Property-sheet-and-object-serialization.html',
  'Customize the UserDataFolder.html': 'Customize-the-UserDataFolder.html',
  'Getting started.html': 'Getting-started.html',
}

/**
 * 生成重定向 HTML 内容
 */
function generateRedirectHtml(targetPath: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>301 Moved Permanently</title>
  <meta http-equiv="refresh" content="0; url=${targetPath}">
  <link rel="canonical" href="${targetPath}">
  <script>
    window.location.href = "${targetPath}";
  </script>
</head>
<body>
  <h1>301 Moved Permanently</h1>
  <p>The document has moved <a href="${targetPath}">here</a>.</p>
</body>
</html>
`
}

/**
 * 递归查找带连字符的文件并生成对应带空格的重定向文件
 */
function processFilesInDir(dir: string, baseDir: string): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // 递归处理子目录
      processFilesInDir(fullPath, baseDir)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      // 查找当前文件名是否是需要生成重定向的目标文件名
      const spaceFileName = Object.entries(spaceToHyphenMap).find(
        ([, hyphenName]) => hyphenName === entry.name
      )?.[0]

      if (spaceFileName) {
        // 生成带空格的重定向文件路径
        const spaceFilePath = path.join(dir, spaceFileName)

        // 计算相对路径（用于重定向目标）
        const relativePath = './' + entry.name

        // 生成重定向 HTML
        const redirectHtml = generateRedirectHtml(relativePath)

        try {
          fs.writeFileSync(spaceFilePath, redirectHtml, 'utf-8')
          // console.log(`[space-redirect] Created: ${path.relative(baseDir, spaceFilePath)} -> ${entry.name}`)
        } catch (err) {
          console.error(`[space-redirect] Failed to create ${spaceFilePath}:`, err)
        }
      }
    }
  }
}

/**
 * 生成带空格文件名的重定向文件
 * 在 renameBuildFiles 之后调用，为带连字符的文件生成带空格的重定向文件
 * 这样访问 "Call Stack.html" 会自动重定向到 "Call-Stack.html"
 */
export function generateSpaceRedirects(outDir: string): void {
  console.log('[space-redirect] Generating space-named redirect files...')

  const distPath = path.resolve(outDir)

  if (!fs.existsSync(distPath)) {
    console.error('[space-redirect] Dist directory not found:', distPath)
    return
  }

  processFilesInDir(distPath, distPath)

  console.log('[space-redirect] Done')
}

export default generateSpaceRedirects
