---
title: EnvironmentOptions
parent: WebView2
permalink: /tB/Packages/WebView2/WebView2/EnvironmentOptions
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4d6add08-df49-4764-8428-326948e122f9'
  PropagateID: '4d6add08-df49-4764-8428-326948e122f9'
  ReservedCode1: 'd50cd57a-c8bf-4671-a19d-225e08712b84'
  ReservedCode2: 'd50cd57a-c8bf-4671-a19d-225e08712b84'
---

# WebView2EnvironmentOptions 类
保存宿主对底层 WebView2 环境的预创建配置——文件夹布局、额外命令行参数、区域设置和一些策略开关。在每个 [**WebView2**](/official/Reference/WebView2/WebView2/) 控件上作为其 **EnvironmentOptions** 属性暴露；控件在触发 [**Create**](/official/Reference/WebView2/WebView2/#create) 事件之前自动实例化一个。

以下字段仅在 WebView2 环境构造期间生效——即在控件的 [**Create**](/official/Reference/WebView2/WebView2/#create) 事件*之前或期间*。之后赋值对活动环境无影响。

```vb
Private Sub WebView21_Create()
    WebView21.EnvironmentOptions.UserDataFolder = _
        Environ$("APPDATA") & "\MyApp\WebView2\"
    WebView21.EnvironmentOptions.Language = "en-GB"
End Sub
```

类型本身是 `Private Class`——实例只能通过控件的 **EnvironmentOptions** 属性访问，无法从包外部声明 **WebView2EnvironmentOptions** 类型的变量。

## 属性

### AdditionalBrowserArguments

直接传递给 Edge 浏览器进程的额外命令行开关——语法与 `msedge.exe` 相同。**String**。默认：空。

### AllowSingleSignOnUsingOSPrimaryAccount

当 **True** 时，单点登录使用操作系统的主账户（Azure AD 加入的机器上常见）。**Boolean**。默认：**False**。

### BrowserExecutableFolder

固定版本 WebView2 浏览器分发的路径。留空（默认）以加载系统范围的 Evergreen 运行时；设置此值以指向并行部署的固定版本。**String**。

### EnableTrackingPrevention

Edge 的跟踪防护功能在此环境中是否激活。**Boolean**。默认：**True**。

### ExclusiveUserDataFolderAccess

当 **True** 时，运行时锁定用户数据文件夹，使其他 WebView2 实例无法同时使用。**Boolean**。默认：**False**。

### Language

Edge 应在 `Accept-Language` 中报告并用于 UI 字符串的语言和区域设置——BCP-47 格式，例如 `"en-GB"`、`"fr-FR"`。**String**。默认：空（运行时选择系统默认值）。

### TargetCompatibleBrowserVersion

此应用程序构建所针对的最低 Edge 浏览器版本——加载器用此决定运行时是否能托管它。**String**。默认：`"86.0.616.0"`（支持 WebView2 的最低版本）。

### UserDataFolder

Edge 用于用户配置文件的文件夹路径——缓存、Cookie、历史记录、本地存储、密码管理器等。留空（默认）让运行时在宿主可执行文件旁边选择一个文件夹；设置此值以将用户数据保留在安装位置之外，例如 `%APPDATA%` 下。**String**。

设置可写的用户数据文件夹是解决安装在 `Program Files` 下的程序出现 *"创建 WebView2 控制器时发生错误"* 故障的常用方法。

### 另见

- [WebView2 控件类](/official/Reference/WebView2/WebView2/)
- [Create 事件](/official/Reference/WebView2/WebView2/#create)
- [自定义 UserDataFolder 教程](/official/Tutorials/WebView2/Customize-the-UserDataFolder)