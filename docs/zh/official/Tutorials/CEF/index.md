---
title: CEF
parent: Tutorials
permalink: /Tutorials/CEF/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '835b43e0-38ff-42ad-bbf6-de76ebd7dcbc'
  PropagateID: '835b43e0-38ff-42ad-bbf6-de76ebd7dcbc'
  ReservedCode1: '43df1a74-b557-4924-8dde-5109d9b80152'
  ReservedCode2: '43df1a74-b557-4924-8dde-5109d9b80152'
---

# CEF

[**CefBrowser**](/official/Reference/CEF/CefBrowser/)控件在twinBASIC窗体中托管Chromium浏览器——导航到网页、运行本地Web应用、与JavaScript交换消息和方法调用以及将页面打印为PDF。与[**WebView2**](/official/Tutorials/WebView2/)不同，Chromium运行时*随*应用程序一起发布，而不是系统组件，因此浏览器版本由开发者控制，相同的包可在未安装Edge的机器上运行。

这些教程演示了最常见的模式：

- [入门](/official/Tutorials/CEF/Getting-started) —— 添加包引用、下载匹配的CEF运行时并将控件放置到窗体上。
- [自定义UserDataFolder](/official/Tutorials/CEF/Customize-the-UserDataFolder) —— 重新定位运行时的工作文件夹，用于宿主场景（Office加载项、信息亭安装、便携部署）。
- [重入性](/official/Tutorials/CEF/Re-entrancy) —— 控件的延迟事件机制为你做了什么，以及你仍需注意的一个地方（[**JsRun**](/official/Reference/CEF/CefBrowser/#jsrun)）。
- [构建浏览器外壳](/official/Tutorials/CEF/Building-a-browser-shell) —— 地址栏、后退/前进/刷新、缩放、PDF导出——将控件变成可工作的浏览器。
- [托管本地Web资源](/official/Tutorials/CEF/Hosting-local-web-assets) —— 从项目资源文件夹提供HTML/JS/CSS，无需HTTP服务器。
- [JavaScript互操作](/official/Tutorials/CEF/JavaScript-interop) —— BASIC和页面之间的两座桥：消息和脚本调用。
- [从twinBASIC驱动Monaco](/official/Tutorials/CEF/Driving-Monaco) —— 综合以上所有内容的案例研究：嵌入Microsoft Monaco编辑器与实时HTML预览面板。

后四个教程的完整示例代码以*示例1b——Chromium Embedded Framework示例*的形式在新项目对话框中提供，几乎逐功能镜像*示例1a——WebView2示例*。

::: important
CEF包目前处于**BETA**阶段。[**WebView2**](/official/Reference/WebView2/WebView2/)上的几个功能尚未暴露——参见参考的[WebView2对等](/official/Reference/CEF/#webview2-parity)部分了解当前差距列表。
:::

关于控件本身的完整成员集，参见[**CefBrowser**类参考](/official/Reference/CEF/CefBrowser/)。