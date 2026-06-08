---
title: "WebView2 包"
parent: Packages
nav_order: 7
permalink: /tB/Packages/WebView2/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '52774688-21fe-45ee-aa8a-eef1d3caf9c2'
  PropagateID: '52774688-21fe-45ee-aa8a-eef1d3caf9c2'
  ReservedCode1: 'ff52f4ef-e5d6-434f-967b-03a7216b5eaa'
  ReservedCode2: 'ff52f4ef-e5d6-434f-967b-03a7216b5eaa'
---

# WebView2 包

**WebView2Package** 封装了 Microsoft Edge WebView2 运行时，并将其作为普通 twinBASIC 控件暴露。将 [**WebView2**](/official/Reference/WebView2/WebView2/) 拖放到窗体上，运行中的 Edge 引擎即可在其内部渲染 Web 内容——导航到 URL、运行 JavaScript、拦截 HTTP 请求、在 BASIC 和 JavaScript 之间发送消息，以及将页面打印为 PDF。

该包是 twinBASIC 附带的内置包。参见 [WebView2 教程](/official/Tutorials/WebView2/) 了解如何在项目中引用它以及完整示例。

除了控件本身，该包还暴露了一小组包装器对象，它们出现在控件的事件参数中——**WebResourceRequested** 上的请求/响应对、**NavigationStarting** 上的请求头集合、**Create** 前配置的环境选项对象——以及用于指定选项值的 `wv2…` 枚举。

## 类

- [WebView2](/official/Reference/WebView2/WebView2/) —— 控件：导航、脚本、设置、支持延迟的事件，以及由底层 Edge 运行时控制的 PDF/暂停/下载/任务管理器功能
- [WebView2EnvironmentOptions](/official/Reference/WebView2/WebView2/EnvironmentOptions) —— WebView2 环境的预创建配置（用户数据文件夹、可执行文件文件夹、区域设置、跟踪防护等）；通过控件的 **EnvironmentOptions** 属性访问
- [WebView2Header](/official/Reference/WebView2/WebView2Header) —— 一个 HTTP 头（Name / Value）；头部迭代产出的元素类型
- [WebView2HeadersCollection](/official/Reference/WebView2/WebView2HeadersCollection) —— 用于对请求/响应头执行 `For Each` 的可枚举包装器
- [WebView2Request](/official/Reference/WebView2/WebView2Request) —— **WebResourceRequested** 事件的请求端——**Method**、**Uri**、**Headers**，以及作为字节或 UTF-8 文本的请求体
- [WebView2RequestHeaders](/official/Reference/WebView2/WebView2RequestHeaders) —— 传递给 **NavigationStarting** 并通过 **WebView2Request.Headers** 访问的可变请求头集合
- [WebView2Response](/official/Reference/WebView2/WebView2Response) —— **WebResourceRequested** 事件的响应端——**StatusCode**、**ReasonPhrase**、**Headers**，以及作为字节或 UTF-8 文本的响应体
- [WebView2ResponseHeaders](/official/Reference/WebView2/WebView2ResponseHeaders) —— 通过 **WebView2Response.Headers** 访问的可变响应头集合

## 枚举

- [wv2DefaultDownloadCornerAlign](/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) —— 将内置下载进度对话框锚定到控件的一个角落
- [wv2ErrorStatus](/official/Reference/WebView2/Enumerations/wv2ErrorStatus) —— 导航失败的原因；由 **NavigationComplete** 报告
- [wv2HostResourceAccessKind](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) —— 通过 **SetVirtualHostNameToFolderMapping** 注册的虚拟主机名的访问策略
- [wv2KeyEventKind](/official/Reference/WebView2/Enumerations/wv2KeyEventKind) —— **AcceleratorKeyPressed** 中快捷键键盘消息的类型
- [wv2PermissionKind](/official/Reference/WebView2/Enumerations/wv2PermissionKind) —— 页面请求使用的设备或浏览器能力；由 **PermissionRequested** 传递
- [wv2PermissionState](/official/Reference/WebView2/Enumerations/wv2PermissionState) —— 宿主对 **PermissionRequested** 事件的决策（允许/拒绝/默认）
- [wv2PrintOrientation](/official/Reference/WebView2/Enumerations/wv2PrintOrientation) —— 传递给 **PrintToPdf** 的页面方向
- [wv2ProcessFailedKind](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) —— 哪个外部 WebView2 进程失败；由 **ProcessFailed** 报告
- [wv2ScriptDialogKind](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) —— 正在打开的 JavaScript 对话框基元类型；由 **ScriptDialogOpening** 传递
- [wv2WebResourceContext](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) —— 通过 **AddWebResourceRequestedFilter** 注册的过滤器应匹配的 HTTP 请求类型

## 类型

- [COREWEBVIEW2_PHYSICAL_KEY_STATUS](/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS) —— 解码后的 `WM_KEYDOWN` / `WM_KEYUP` `lParam` 位字段；通过 **AcceleratorKeyPressed** 事件传递

## 教程

- [入门](/official/Tutorials/WebView2/Getting-started) —— 添加包引用并将控件拖放到窗体上
- [自定义 UserDataFolder](/official/Tutorials/WebView2/Customize-the-UserDataFolder) —— 为托管场景（Office 插件、展台安装）重新定位运行时的工作文件夹
- [重入](/official/Tutorials/WebView2/Re-entrancy) —— 控件的延迟事件机制自动处理了什么，以及 **AddObject** 的同步与延迟权衡
- [构建浏览器外壳](/official/Tutorials/WebView2/Building-a-browser-shell) —— 地址栏、后退/前进/刷新、缩放、PDF 导出
- [托管本地 Web 资源](/official/Tutorials/WebView2/Hosting-local-web-assets) —— 从项目资源文件夹提供 HTML/JS/CSS，无需 HTTP 服务器
- [JavaScript 互操作](/official/Tutorials/WebView2/JavaScript-interop) —— BASIC 和页面之间的三座桥：宿主对象、消息和脚本调用
- [从 twinBASIC 驱动 Monaco](/official/Tutorials/WebView2/Driving-Monaco) —— 结合以上所有内容的案例研究

> AI生成