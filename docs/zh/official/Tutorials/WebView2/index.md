---
title: WebView2
parent: Tutorials
permalink: /Tutorials/WebView2/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '572bb5ee-84f5-43e0-b794-faf46e3c51a6'
  PropagateID: '572bb5ee-84f5-43e0-b794-faf46e3c51a6'
  ReservedCode1: '981f609b-7bf4-4d9c-aa70-8fee6f80f911'
  ReservedCode2: '981f609b-7bf4-4d9c-aa70-8fee6f80f911'
---

# WebView2

[**WebView2**](/official/Reference/WebView2/WebView2/)控件在twinBASIC窗体中托管Microsoft Edge浏览器引擎——导航到网页、运行本地Web应用、与JavaScript交换消息和方法调用、拦截HTTP流量以及将页面打印为PDF。

这些教程演示了最常见的模式：

- [入门](/official/Tutorials/WebView2/Getting-started) —— 添加包引用并将控件放置到窗体上。
- [自定义UserDataFolder](/official/Tutorials/WebView2/Customize-the-UserDataFolder) —— 重新定位运行时的工作文件夹，用于宿主场景（Office加载项、信息亭安装）。
- [重入性](/official/Tutorials/WebView2/Re-entrancy) —— 控件的延迟事件机制为你做了什么，以及你仍需注意的一个地方。
- [构建浏览器外壳](/official/Tutorials/WebView2/Building-a-browser-shell) —— 地址栏、后退/前进/刷新、缩放、PDF导出——将控件变成可工作的浏览器。
- [托管本地Web资源](/official/Tutorials/WebView2/Hosting-local-web-assets) —— 从项目资源文件夹提供HTML/JS/CSS，无需HTTP服务器。
- [JavaScript互操作](/official/Tutorials/WebView2/JavaScript-interop) —— BASIC和页面之间的三座桥：宿主对象、消息和脚本调用。
- [从twinBASIC驱动Monaco](/official/Tutorials/WebView2/Driving-Monaco) —— 综合以上所有内容的案例研究：嵌入Microsoft Monaco编辑器与实时HTML预览面板。

后四个教程的完整示例代码以*示例0——WebView2示例*的形式在新项目对话框中提供。

关于控件本身的完整成员集，参见[**WebView2**类参考](/official/Reference/WebView2/WebView2/)。