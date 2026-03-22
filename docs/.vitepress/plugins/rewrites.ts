import type { UserConfig } from 'vitepress'

/**
 * 路径重写规则
 * 将带空格的文件名映射到带连字符的 URL 路径
 * 格式: '源文件路径': '目标URL路径'
 */
export const rewrites: UserConfig['rewrites'] = {
  // IDE 路径映射（空格转 -）
  'zh/official/IDE/Call Stack.md': 'official/IDE/Call-Stack.md',
  'zh/official/IDE/Debug Console.md': 'official/IDE/Debug-Console.md',
  'zh/official/IDE/New Project.md': 'official/IDE/New-Project.md',
  'zh/official/IDE/Open Editors.md': 'official/IDE/Open-Editors.md',
  'zh/official/IDE/Package Publishing.md': 'official/IDE/Package-Publishing.md',
  'zh/official/IDE/Project Explorer.md': 'official/IDE/Project-Explorer.md',
  'zh/official/IDE/Project Settings.md': 'official/IDE/Project-Settings.md',
  'zh/official/IDE/Splash Screen.md': 'official/IDE/Splash-Screen.md',
  'zh/official/IDE/Status Bar.md': 'official/IDE/Status-Bar.md',
  // Packages 路径映射
  'zh/official/Features/Packages/Creating a TWINPACK package.md': 'official/Features/Packages/Creating-a-TWINPACK-package.md',
  'zh/official/Features/Packages/Importing a package from a TWINPACK file.md': 'official/Features/Packages/Importing-a-package-from-a-TWINPACK-file.md',
  'zh/official/Features/Packages/Importing a package from TWINSERV.md': 'official/Features/Packages/Importing-a-package-from-TWINSERV.md',
  'zh/official/Features/Packages/Updating a package.md': 'official/Features/Packages/Updating-a-package.md',
  // Miscellaneous
  'zh/official/Miscellaneous/Documentation Development.md': 'official/Miscellaneous/Documentation-Development.md',
  // Reference
  'zh/official/Reference/Compiler Constants.md': 'official/Reference/Compiler-Constants.md',
  'zh/official/Reference/Procedures and Functions.md': 'official/Reference/Procedures-and-Functions.md',
  // CustomControls
  'zh/official/Tutorials/CustomControls/Defining a CustomControl.md': 'official/Tutorials/CustomControls/Defining-a-CustomControl.md',
  'zh/official/Tutorials/CustomControls/Notes about the form designer.md': 'official/Tutorials/CustomControls/Notes-about-the-form-designer.md',
  'zh/official/Tutorials/CustomControls/Painting-drawing to your control.md': 'official/Tutorials/CustomControls/Painting-drawing-to-your-control.md',
  'zh/official/Tutorials/CustomControls/Property sheet and object serialization.md': 'official/Tutorials/CustomControls/Property-sheet-and-object-serialization.md',
  // WebView2
  'zh/official/Tutorials/WebView2/Customize the UserDataFolder.md': 'official/Tutorials/WebView2/Customize-the-UserDataFolder.md',
  'zh/official/Tutorials/WebView2/Getting started.md': 'official/Tutorials/WebView2/Getting-started.md',
 
  'zh/:rest*': ':rest*',
 
  // 英文路径映射
  'en/official/IDE/Call Stack.md': 'en/official/IDE/Call-Stack.md',
  'en/official/IDE/Debug Console.md': 'en/official/IDE/Debug-Console.md',
  'en/official/IDE/New Project.md': 'en/official/IDE/New-Project.md',
  'en/official/IDE/Open Editors.md': 'en/official/IDE/Open-Editors.md',
  'en/official/IDE/Package Publishing.md': 'en/official/IDE/Package-Publishing.md',
  'en/official/IDE/Project Explorer.md': 'en/official/IDE/Project-Explorer.md',
  'en/official/IDE/Project Settings.md': 'en/official/IDE/Project-Settings.md',
  'en/official/IDE/Splash Screen.md': 'en/official/IDE/Splash-Screen.md',
  'en/official/IDE/Status Bar.md': 'en/official/IDE/Status-Bar.md',
  'en/official/Features/Packages/Creating a TWINPACK package.md': 'en/official/Features/Packages/Creating-a-TWINPACK-package.md',
  'en/official/Features/Packages/Importing a package from a TWINPACK file.md': 'en/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file.md',
  'en/official/Features/Packages/Importing a package from TWINSERV.md': 'en/official/Features/Packages/Importing-a-package-from-TWINSERV.md',
  'en/official/Features/Packages/Updating a package.md': 'en/official/Features/Packages/Updating-a-package.md',
  'en/official/Miscellaneous/Documentation Development.md': 'en/official/Miscellaneous/Documentation-Development.md',
  'en/official/Reference/Compiler Constants.md': 'en/official/Reference/Compiler-Constants.md',
  'en/official/Reference/Procedures and Functions.md': 'en/official/Reference/Procedures-and-Functions.md',
  'en/official/Tutorials/CustomControls/Defining a CustomControl.md': 'en/official/Tutorials/CustomControls/Defining-a-CustomControl.md',
  'en/official/Tutorials/CustomControls/Notes about the form designer.md': 'en/official/Tutorials/CustomControls/Notes-about-the-form-designer.md',
  'en/official/Tutorials/CustomControls/Painting-drawing to your control.md': 'en/official/Tutorials/CustomControls/Painting-drawing-to-your-control.md',
  'en/official/Tutorials/CustomControls/Property sheet and object serialization.md': 'en/official/Tutorials/CustomControls/Property-sheet-and-object-serialization.md',
  'en/official/Tutorials/WebView2/Customize the UserDataFolder.md': 'en/official/Tutorials/WebView2/Customize-the-UserDataFolder.md',
  'en/official/Tutorials/WebView2/Getting started.md': 'en/official/Tutorials/WebView2/Getting-started.md',
}

export default rewrites
