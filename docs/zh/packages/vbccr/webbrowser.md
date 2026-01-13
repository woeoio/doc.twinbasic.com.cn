# WebBrowser Control (VBCCRWebBrowser)

VBCCRWebBrowser 控件是一个嵌入式 Web 浏览器控件，它提供了完整的网页浏览功能，支持导航、脚本执行和与网页交互。

## 属性

### 基本属性
- `LocationURL` - 当前网页地址
- `LocationName` - 当前网页标题
- `Busy` - 是否正在加载
- `ReadyState` - 就绪状态
  - `READYSTATE_UNINITIALIZED` (0) - 未初始化
  - `READYSTATE_LOADING` (1) - 正在加载
  - `READYSTATE_LOADED` (2) - 已加载
  - `READYSTATE_INTERACTIVE` (3) - 可交互
  - `READYSTATE_COMPLETE` (4) - 加载完成
- `Silent` - 是否静默模式
- `Offline` - 是否离线模式
- `RegisterAsBrowser` - 是否注册为浏览器
- `RegisterAsDropTarget` - 是否接受拖放
- `TheaterMode` - 是否剧场模式

### 导航属性
- `Resizable` - 窗口是否可调整大小
- `FullScreen` - 是否全屏显示
- `AddressBar` - 是否显示地址栏
- `StatusBar` - 是否显示状态栏
- `ToolBar` - 是否显示工具栏
- `MenuBar` - 是否显示菜单栏

## 事件

- `BeforeNavigate2` - 导航前触发
- `NavigateComplete2` - 导航完成时触发
- `DocumentComplete` - 文档加载完成时触发
- `StatusTextChange` - 状态文本改变时触发
- `ProgressChange` - 加载进度改变时触发
- `TitleChange` - 标题改变时触发
- `NewWindow2` - 打开新窗口时触发
- `WindowClosing` - 窗口关闭时触发
- `WindowSetHeight` - 设置窗口高度时触发
- `WindowSetWidth` - 设置窗口宽度时触发
- `WindowSetResizable` - 设置窗口可调整大小时触发
- `ClientToHostWindow` - 客户端坐标转换时触发
- `SetSecureLockIcon` - 设置安全图标时触发
- `FileDownload` - 文件下载时触发
- `NavigateError` - 导航错误时触发
- `PrintTemplateInstantiation` - 打印模板实例化时触发
- `PrintTemplateTeardown` - 打印模板销毁时触发
- `PrivacyImpactedStateChange` - 隐私状态改变时触发
- `UpdatePageStatus` - 页面状态更新时触发

## 代码示例

### 基本用法

```vb
Private Sub InitWebBrowser()
    With WebBrowser1
        .Silent = True  ' 禁用错误提示
        .RegisterAsBrowser = True
        .RegisterAsDropTarget = False
        
        ' 导航到指定页面
        .Navigate "https://www.example.com"
    End With
End Sub
```

### 导航管理器

```vb
Private Type NavigationInfo
    URL As String
    Title As String
    PostData As String
    Headers As String
    Timestamp As Date
End Type

Private Type NavigationHistory
    Browser As VBCCRWebBrowser
    History() As NavigationInfo
    Count As Long
    CurrentIndex As Long
    MaxHistory As Long
End Type

Private Navigation As NavigationHistory

Private Sub InitNavigationManager(ByVal Browser As VBCCRWebBrowser, _
                                Optional ByVal MaxHistory As Long = 100)
    With Navigation
        Set .Browser = Browser
        .MaxHistory = MaxHistory
        ReDim .History(1 To MaxHistory)
        .Count = 0
        .CurrentIndex = 0
    End With
End Sub

Private Sub AddToHistory(ByVal URL As String, _
                        ByVal Title As String, _
                        Optional ByVal PostData As String = "", _
                        Optional ByVal Headers As String = "")
    With Navigation
        ' 移除当前位置后的历史记录
        .Count = .CurrentIndex
        
        ' 添加新记录
        .Count = .Count + 1
        If .Count > .MaxHistory Then
            ' 移除最旧的记录
            Dim i As Long
            For i = 1 To .MaxHistory - 1
                .History(i) = .History(i + 1)
            Next i
            .Count = .MaxHistory
        End If
        
        With .History(.Count)
            .URL = URL
            .Title = Title
            .PostData = PostData
            .Headers = Headers
            .Timestamp = Now
        End With
        
        .CurrentIndex = .Count
    End With
End Sub

Private Sub NavigateBack()
    With Navigation
        If .CurrentIndex > 1 Then
            .CurrentIndex = .CurrentIndex - 1
            NavigateToHistoryItem .CurrentIndex
        End If
    End With
End Sub

Private Sub NavigateForward()
    With Navigation
        If .CurrentIndex < .Count Then
            .CurrentIndex = .CurrentIndex + 1
            NavigateToHistoryItem .CurrentIndex
        End If
    End With
End Sub

Private Sub NavigateToHistoryItem(ByVal Index As Long)
    If Index < 1 Or Index > Navigation.Count Then Exit Sub
    
    With Navigation.History(Index)
        If LenB(.PostData) > 0 Then
            Navigation.Browser.Navigate .URL, , , .PostData, .Headers
        Else
            Navigation.Browser.Navigate .URL, , , , .Headers
        End If
    End With
End Sub

Private Sub WebBrowser_BeforeNavigate2(ByVal URL As String, _
                                     ByVal Flags As Long, _
                                     ByVal TargetFrameName As String, _
                                     PostData As Variant, _
                                     ByVal Headers As String, _
                                     Cancel As Boolean)
    ' 记录导航信息
    Dim PostDataStr As String
    If Not IsMissing(PostData) Then
        PostDataStr = StrConv(PostData, vbUnicode)
    End If
    
    AddToHistory URL, Navigation.Browser.LocationName, PostDataStr, Headers
End Sub
```

### 脚本执行器

```vb
Private Type ScriptResult
    Success As Boolean
    Result As Variant
    Error As String
End Type

Private Function ExecuteScript(ByVal Browser As VBCCRWebBrowser, _
                             ByVal Script As String) As ScriptResult
    On Error GoTo ErrorHandler
    
    ' 等待页面加载完成
    Do While Browser.ReadyState <> READYSTATE_COMPLETE
        DoEvents
        Sleep 100
    Loop
    
    ' 执行脚本
    Dim Document As Object
    Set Document = Browser.Document
    
    ExecuteScript.Success = True
    ExecuteScript.Result = Document.parentWindow.execScript(Script, "JScript")
    Exit Function
    
ErrorHandler:
    ExecuteScript.Success = False
    ExecuteScript.Error = Err.Description
End Function

Private Function GetElementById(ByVal Browser As VBCCRWebBrowser, _
                              ByVal Id As String) As Object
    On Error Resume Next
    
    Set GetElementById = Browser.Document.getElementById(Id)
End Function

Private Function GetElementsByTagName(ByVal Browser As VBCCRWebBrowser, _
                                    ByVal TagName As String) As Object
    On Error Resume Next
    
    Set GetElementsByTagName = Browser.Document.getElementsByTagName(TagName)
End Function

Private Sub SetElementValue(ByVal Element As Object, _
                          ByVal Value As String)
    On Error Resume Next
    
    Element.Value = Value
End Sub

Private Sub ClickElement(ByVal Element As Object)
    On Error Resume Next
    
    Element.Click
End Sub
```

### 下载管理器

```vb
Private Type DownloadInfo
    URL As String
    FileName As String
    SavePath As String
    FileSize As Long
    Downloaded As Long
    Status As String
    StartTime As Date
    LastUpdate As Date
End Type

Private Type DownloadManager
    Browser As VBCCRWebBrowser
    Downloads() As DownloadInfo
    Count As Long
End Type

Private Downloads As DownloadManager

Private Sub InitDownloadManager(ByVal Browser As VBCCRWebBrowser)
    With Downloads
        Set .Browser = Browser
        ReDim .Downloads(1 To 10)
        .Count = 0
    End With
End Sub

Private Function AddDownload(ByVal URL As String, _
                           ByVal FileName As String, _
                           ByVal SavePath As String) As Long
    With Downloads
        .Count = .Count + 1
        If .Count > UBound(.Downloads) Then
            ReDim Preserve .Downloads(1 To .Count + 10)
        End If
        
        With .Downloads(.Count)
            .URL = URL
            .FileName = FileName
            .SavePath = SavePath
            .FileSize = 0
            .Downloaded = 0
            .Status = "等待中"
            .StartTime = Now
            .LastUpdate = Now
        End With
        
        AddDownload = .Count
    End With
End Function

Private Sub WebBrowser_FileDownload(ByVal ActiveDocument As Boolean, _
                                  Cancel As Boolean)
    ' 处理文件下载请求
    Dim FileName As String
    FileName = GetFileNameFromURL(Downloads.Browser.LocationURL)
    
    ' 显示保存对话框
    Dim dlg As Object
    Set dlg = CreateObject("MSComDlg.CommonDialog")
    
    With dlg
        .DialogTitle = "保存文件"
        .FileName = FileName
        .Filter = "所有文件 (*.*)|*.*"
        .ShowSave
        
        If LenB(.FileName) > 0 Then
            AddDownload Downloads.Browser.LocationURL, FileName, .FileName
        Else
            Cancel = True
        End If
    End With
End Sub

Private Function GetFileNameFromURL(ByVal URL As String) As String
    Dim Parts() As String
    Parts = Split(URL, "/")
    
    If UBound(Parts) >= 0 Then
        GetFileNameFromURL = Parts(UBound(Parts))
    End If
End Function

Private Sub UpdateDownloadProgress(ByVal Index As Long, _
                                 ByVal Progress As Long, _
                                 ByVal MaxProgress As Long)
    If Index < 1 Or Index > Downloads.Count Then Exit Sub
    
    With Downloads.Downloads(Index)
        .FileSize = MaxProgress
        .Downloaded = Progress
        .LastUpdate = Now
        
        ' 计算下载速度和剩余时间
        Dim Speed As Double
        Dim TimeLeft As Double
        
        If DateDiff("s", .StartTime, Now) > 0 Then
            Speed = .Downloaded / DateDiff("s", .StartTime, Now)
            If Speed > 0 Then
                TimeLeft = (.FileSize - .Downloaded) / Speed
            End If
        End If
        
        ' 更新状态
        .Status = "下载中 - " & _
                 Format(.Downloaded / 1024, "#,##0") & "KB / " & _
                 Format(.FileSize / 1024, "#,##0") & "KB " & _
                 Format((.Downloaded * 100) / .FileSize, "0") & "% " & _
                 Format(Speed / 1024, "#,##0") & "KB/s " & _
                 "剩余时间: " & Format(TimeLeft / 60, "0") & " 分钟"
    End With
End Sub
```

### Cookie 管理器

```vb
Private Type CookieInfo
    Name As String
    Value As String
    Domain As String
    Path As String
    Expires As Date
    Secure As Boolean
End Type

Private Type CookieManager
    Browser As VBCCRWebBrowser
    Cookies() As CookieInfo
    Count As Long
End Type

Private Cookies As CookieManager

Private Sub InitCookieManager(ByVal Browser As VBCCRWebBrowser)
    With Cookies
        Set .Browser = Browser
        ReDim .Cookies(1 To 10)
        .Count = 0
    End With
End Sub

Private Function GetCookies(ByVal Domain As String) As String()
    Dim Result() As String
    Dim Count As Long
    
    With Cookies
        ReDim Result(1 To .Count)
        
        Dim i As Long
        For i = 1 To .Count
            If LCase$(.Cookies(i).Domain) = LCase$(Domain) Then
                Count = Count + 1
                Result(Count) = .Cookies(i).Name & "=" & .Cookies(i).Value
            End If
        Next i
        
        If Count > 0 Then
            ReDim Preserve Result(1 To Count)
            GetCookies = Result
        Else
            GetCookies = Array()
        End If
    End With
End Function

Private Sub SetCookie(ByVal Name As String, _
                     ByVal Value As String, _
                     ByVal Domain As String, _
                     Optional ByVal Path As String = "/", _
                     Optional ByVal Expires As Date, _
                     Optional ByVal Secure As Boolean = False)
    With Cookies
        ' 检查是否已存在
        Dim i As Long
        For i = 1 To .Count
            If .Cookies(i).Name = Name And _
               .Cookies(i).Domain = Domain And _
               .Cookies(i).Path = Path Then
                ' 更新现有cookie
                With .Cookies(i)
                    .Value = Value
                    .Expires = Expires
                    .Secure = Secure
                End With
                Exit Sub
            End If
        Next i
        
        ' 添加新cookie
        .Count = .Count + 1
        If .Count > UBound(.Cookies) Then
            ReDim Preserve .Cookies(1 To .Count + 10)
        End If
        
        With .Cookies(.Count)
            .Name = Name
            .Value = Value
            .Domain = Domain
            .Path = Path
            .Expires = Expires
            .Secure = Secure
        End With
    End With
End Sub

Private Sub DeleteCookie(ByVal Name As String, _
                        ByVal Domain As String, _
                        Optional ByVal Path As String = "/")
    With Cookies
        Dim i As Long
        For i = 1 To .Count
            If .Cookies(i).Name = Name And _
               .Cookies(i).Domain = Domain And _
               .Cookies(i).Path = Path Then
                ' 移除cookie
                If i < .Count Then
                    Dim j As Long
                    For j = i To .Count - 1
                        .Cookies(j) = .Cookies(j + 1)
                    Next j
                End If
                .Count = .Count - 1
                Exit Sub
            End If
        Next i
    End With
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Sub SafeNavigate(ByVal Browser As VBCCRWebBrowser, _
                        ByVal URL As String)
    On Error GoTo ErrorHandler
    
    Browser.Navigate URL
    Exit Sub
    
ErrorHandler:
    Debug.Print "导航失败: " & Err.Description
End Sub
```

2. 性能优化
```vb
Private Sub DisableAnimations(ByVal Browser As VBCCRWebBrowser)
    ' 禁用动画以提高性能
    ExecuteScript Browser, _
        "document.documentElement.style.setProperty('--animation-duration', '0s');" & _
        "document.documentElement.style.setProperty('transition-duration', '0s');"
End Sub

Private Sub DisableImages(ByVal Browser As VBCCRWebBrowser)
    ' 禁用图片加载以提高性能
    ExecuteScript Browser, _
        "document.querySelectorAll('img').forEach(function(img) {" & _
        "    img.style.display = 'none';" & _
        "});"
End Sub
```

3. 状态保存
```vb
Private Sub SaveBrowserState(ByVal Browser As VBCCRWebBrowser)
    SaveSetting App.Title, Browser.Name, "LastURL", Browser.LocationURL
    SaveSetting App.Title, Browser.Name, "Silent", Browser.Silent
    SaveSetting App.Title, Browser.Name, "Offline", Browser.Offline
    SaveSetting App.Title, Browser.Name, "AddressBar", Browser.AddressBar
    SaveSetting App.Title, Browser.Name, "StatusBar", Browser.StatusBar
    SaveSetting App.Title, Browser.Name, "ToolBar", Browser.ToolBar
End Sub

Private Sub RestoreBrowserState(ByVal Browser As VBCCRWebBrowser)
    With Browser
        .Silent = CBool(GetSetting(App.Title, .Name, "Silent", .Silent))
        .Offline = CBool(GetSetting(App.Title, .Name, "Offline", .Offline))
        .AddressBar = CBool(GetSetting(App.Title, .Name, "AddressBar", .AddressBar))
        .StatusBar = CBool(GetSetting(App.Title, .Name, "StatusBar", .StatusBar))
        .ToolBar = CBool(GetSetting(App.Title, .Name, "ToolBar", .ToolBar))
        
        Dim LastURL As String
        LastURL = GetSetting(App.Title, .Name, "LastURL", "")
        If LenB(LastURL) > 0 Then
            .Navigate LastURL
        End If
    End With
End Sub
```

WebBrowser 控件提供了强大的网页浏览和交互功能。通过合理的管理和扩展，可以实现导航历史、脚本执行、下载管理和 Cookie 管理等功能。上述示例展示了 WebBrowser 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
