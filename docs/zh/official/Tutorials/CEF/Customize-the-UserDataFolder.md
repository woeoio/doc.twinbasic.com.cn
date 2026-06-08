---
title: "自定义UserDataFolder"
parent: CEF
nav_order: 2
permalink: /Tutorials/CEF/Customize-UserDataFolder
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3d6212dc-272b-46bd-a849-af3820577246'
  PropagateID: '3d6212dc-272b-46bd-a849-af3820577246'
  ReservedCode1: '8fc36813-3211-4d1e-be64-38ef03e4bea1'
  ReservedCode2: '8fc36813-3211-4d1e-be64-38ef03e4bea1'
---

# 自定义UserDataFolder

在运行时，CEF需要一个工作文件夹用于用户配置——缓存、Cookie、历史记录、本地存储、密码管理器以及防止两个浏览器进程共享同一配置的每实例锁文件。默认情况下，运行时在 `%LocalAppData%\twinBASIC_CEF\<ProjectName>\instance-<N>\` 下选择一个文件夹，但该默认值并非总是合适的。

以下是默认值出错的几种情况：

- **Office加载项**，其中宿主进程是 `MSACCESS.EXE` 或 `EXCEL.EXE`——默认的每进程布局会与宿主自身的配置冲突。
- **信息亭安装**，应用程序在低权限账户下运行，无法写入 `%LocalAppData%`。
- **便携部署**，所有状态必须存在于可执行文件旁边的USB闪存或网络共享上。
- **多用户/托管场景**，每个终端用户需要隔离的配置。

在所有这些情况下，通过在控件的[**Create**](/official/Reference/CEF/CefBrowser/#create)事件期间分配[**EnvironmentOptions.UserDataFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#userdatafolder)来覆盖默认值：

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.UserDataFolder = _
        Environ$("APPDATA") & "\MyApp\CEF\"
End Sub
```

如果文件夹不存在会自动创建。路径必须可由当前用户写入——只读路径在辅助浏览器进程尝试启动时会引发[**Error**](/official/Reference/CEF/CefBrowser/#error)事件。

## 为什么在Create事件中

CEF在辅助浏览器进程启动时*一次性*读取环境选项。[**Create**](/official/Reference/CEF/CefBrowser/#create)事件在该启动之前立即触发，这使它成为覆盖默认值的正确位置。在此之后分配[**UserDataFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#userdatafolder)（例如在[**Ready**](/official/Reference/CEF/CefBrowser/#ready)中）对运行中的浏览器没有影响。

## 跨实例共享文件夹

单个用户数据文件夹不能同时被两个CEF进程打开——运行时在浏览器进程的整个生命周期内对其持有独占锁。同一应用程序中的两个**CefBrowser**控件共享辅助进程，因此也共享同一个锁，它们可以正常协作；指向同一文件夹的两个*独立*应用程序则会冲突。

当检测到冲突且[**UserDataFolder**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#userdatafolder)保留默认值时，控件会自动使用下一个 `instance-N` 子文件夹重试。当宿主已明确设置路径时，锁失败反而作为CEF初始化错误出现（"CEF cache path already locked by another process"）——在[**Error**](/official/Reference/CEF/CefBrowser/#error)事件中处理它：

```vb
Private Sub CefBrowser1_Error(ByVal code As Long, ByVal msg As String)
    If InStr(msg, "already locked") > 0 Then
        MsgBox "Another copy of this application is already running. " & _
               "Close it before opening another window.", _
               vbExclamation
    End If
End Sub
```

## 记录运行时输出

[**EnvironmentOptions**](/official/Reference/CEF/CefBrowser/EnvironmentOptions)上的两个相关字段配置CEF调试日志，在调查运行时问题时很有用：

```vb
Private Sub CefBrowser1_Create()
    CefBrowser1.EnvironmentOptions.UserDataFolder = _
        Environ$("APPDATA") & "\MyApp\CEF\"
    CefBrowser1.EnvironmentOptions.LogFilePath = _
        Environ$("APPDATA") & "\MyApp\CEF\debug.log"
    CefBrowser1.EnvironmentOptions.LogSeverity = CefLogWarning
End Sub
```

[**LogFilePath**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logfilepath)跨运行追加——如果需要限制大小，请从你自己的代码中轮换或删除它。[**LogSeverity**](/official/Reference/CEF/CefBrowser/EnvironmentOptions#logseverity)控制阈值；**CefLogDisable**（默认值）无论路径如何都不写入任何内容。

## 另见

- [CefEnvironmentOptions](/official/Reference/CEF/CefBrowser/EnvironmentOptions) —— 预创建选项的完整参考。
- [自定义UserDataFolder（WebView2）](/official/Tutorials/WebView2/Customize-the-UserDataFolder) —— 应用于[**WebView2**](/official/Reference/WebView2/WebView2/)控件的相同思路。