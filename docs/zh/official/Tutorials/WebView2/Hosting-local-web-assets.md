---
title: "托管本地Web资源"
parent: WebView2
nav_order: 5
permalink: /Tutorials/WebView2/Hosting-Local-Web-Assets
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '81acb1f2-ab29-47fa-a893-df30a94fee5b'
  PropagateID: '81acb1f2-ab29-47fa-a893-df30a94fee5b'
  ReservedCode1: '5f9fe98e-8dae-4c04-a2b2-c057a38e3a68'
  ReservedCode2: '5f9fe98e-8dae-4c04-a2b2-c057a38e3a68'
---

# 托管本地Web资源

[**WebView2**](/official/Reference/WebView2/WebView2/)控件可以直接从磁盘上的文件夹提供HTML、JavaScript、CSS和任何其他资源——无需嵌入式HTTP服务器。Edge的[**SetVirtualHostNameToFolderMapping**](/official/Reference/WebView2/WebView2/#setvirtualhostnametofoldermapping)将虚拟 `https://` 主机名路由到本地文件夹，使资源表现如同来自真实源：同源 `fetch`、内容安全策略、Service Workers等都能正常工作。

本教程演示*示例0——WebView2示例*（窗体*示例2*、*示例3*、*示例4*）中使用的模式。

## 三步模式

1. **选择文件夹。** 它必须存在于磁盘上并包含 `index.html`（加上页面需要的任何资源——脚本、样式、图片）。
2. **注册虚拟主机**映射到该文件夹。
3. **导航**到虚拟主机名下的URL。

挂接[**Ready**](/official/Reference/WebView2/WebView2/#ready)事件，以便在安装映射之前控件已完全初始化：

```vb
Private Sub WebView_Ready() Handles WebView.Ready
    Dim folderPath As String = _
        Environ$("USERPROFILE") & "\Documents\MyApp"
    WebView.SetVirtualHostNameToFolderMapping _
        "myapp.example", folderPath & "\", wv2ResourceAllow
    WebView.Navigate "https://myapp.example/index.html"
End Sub
```

映射完成后，对 `https://myapp.example/<path>` 的每个请求都从 `folderPath\<path>` 提供。页面上的 `<script src="/script.js">` 解析为 `folderPath\script.js`，就像真正的Web服务器位于 `myapp.example` 上一样。

## 选择主机名

Edge运行时在应用本地覆盖之前通过DNS解析虚拟主机名。碰巧可以在公共Internet上解析的主机名会在每个请求上引入短暂的（约2秒）停顿——参见[WebView2Feedback#2381](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2381)。

安全的约定是选择一个永远不会解析的TLD下的名称，如 `.example`、`.invalid` 或 `.test`：

| 推荐         | 避免                       |
|---------------------|-----------------------------|
| `myapp.example`     | `myapp.com`, `app.local`    |
| `editor.invalid`    | `editor.dev`                |
| `assets.test`       | `assets.io`                 |

## 在项目Resources文件夹中捆绑资源

大多数应用程序希望将HTML/JS/CSS打包在可执行文件*内部*，并在首次运行时释放到磁盘上。twinBASIC的 `Resources` 文件夹是存放它们的正确位置。

1. 在IDE的项目资源管理器中，展开**Resources**并添加子文件夹（右键→*添加新子文件夹*）。给它一个容易记住的名称，如 `WEB_APP`。
2. 将资源放入其中——`index.html`、`script.js`、`styles.css`，以及你需要的任何子目录。

在运行时，下面的辅助过程将 `Resources` 子文件夹的内容复制到本地路径。将其放入项目中的 `.twin` 模块：

```vb
Module Files

    Private Sub CreateFile(ByVal Path As String, ByRef Data() As Byte)
        On Error Resume Next : Kill Path : On Error GoTo 0
        Dim fileNum As Integer = FreeFile
        Open Path For Binary As fileNum
        Put fileNum, 1, Data
        Close fileNum
    End Sub

    Private Sub CreateLocalFileFromResource( _
            ByVal OutputLocalFolderPath As String, _
            ByVal InputResourceSubFolderName As String, _
            ByVal ResourceName As String)

        Dim splitPath As Variant = Split(ResourceName, "~")
        On Error Resume Next : MkDir OutputLocalFolderPath : On Error GoTo 0

        Dim i As Long
        For i = 0 To UBound(splitPath) - 1
            OutputLocalFolderPath &= "\" & splitPath(i)
            On Error Resume Next : MkDir OutputLocalFolderPath : On Error GoTo 0
        Next

        Dim Data() As Byte
        Data = LoadResData(ResourceName, InputResourceSubFolderName)
        CreateFile(OutputLocalFolderPath & "\" & splitPath(i), Data)
    End Sub

    [Description("Copy every file from a Resources subfolder onto disk. " & _
                 "'~' characters in resource names represent subfolders.")]
    Public Sub CopyResourcesFolderContentsToLocalPath( _
            ByVal InputResourceSubFolderName As String, _
            ByVal OutputLocalFolderPath As String)

        Dim resourceId As Variant
        For Each resourceId In LoadResIdList(InputResourceSubFolderName)
            CreateLocalFileFromResource _
                OutputLocalFolderPath, InputResourceSubFolderName, resourceId
        Next
    End Sub

End Module
```

[**LoadResIdList**](/official/Reference/VB/Global/#loadresidlist)返回指定子文件夹下的每个资源ID；[**LoadResData**](/official/Reference/VB/Global/#loadresdata)返回字节数据。辅助过程将每个资源名称按 `~` 分割，在磁盘上重建原始子目录树——当资源被编译时，twinBASIC IDE通过用 `~` 连接名称来展平嵌套文件夹。

## 完整组合

完整的部署于`Ready`的模式如下：

```vb
Private Sub WebView_Ready() Handles WebView.Ready
    ' Resources/WEB_APP/* is copied here on every launch.
    Dim folderPath As String = _
        Environ$("USERPROFILE") & "\Documents\MyApp"

    CopyResourcesFolderContentsToLocalPath "WEB_APP", folderPath

    WebView.SetVirtualHostNameToFolderMapping _
        "myapp.example", folderPath & "\", wv2ResourceAllow
    WebView.Navigate "https://myapp.example/index.html"
End Sub
```

部署完成后，应用程序可以启动DevTools（[**OpenDevToolsWindow**](/official/Reference/WebView2/WebView2/#opendevtoolswindow)）检查已加载的文件，用户可以直接编辑磁盘上的 `index.html` 并点击**刷新**——这在开发过程中的快速迭代中很有用。

## 下一步

- [JavaScript互操作](/official/Tutorials/WebView2/JavaScript-interop) —— 托管页面如何与BASIC应用交换值和方法调用。
- [从twinBASIC驱动Monaco](/official/Tutorials/WebView2/Driving-Monaco) —— 基于此模式的完整案例研究。
- [SetVirtualHostNameToFolderMapping](/official/Reference/WebView2/WebView2/#setvirtualhostnametofoldermapping) —— 完整参考。