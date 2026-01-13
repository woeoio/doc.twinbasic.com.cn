# WebBrowser Control (VBCCRWebBrowser)

VBCCRWebBrowser control is an embedded web browser control that provides complete web browsing functionality, supporting navigation, script execution, and web page interaction.

## Properties

### Basic Properties
- `LocationURL` - Current web page address
- `LocationName` - Current web page title
- `Busy` - Whether loading
- `ReadyState` - Ready state
  - `READYSTATE_UNINITIALIZED` (0) - Uninitialized
  - `READYSTATE_LOADING` (1) - Loading
  - `READYSTATE_LOADED` (2) - Loaded
  - `READYSTATE_INTERACTIVE` (3) - Interactive
  - `READYSTATE_COMPLETE` (4) - Load complete
- `Silent` - Whether in silent mode
- `Offline` - Whether in offline mode
- `RegisterAsBrowser` - Whether to register as browser
- `RegisterAsDropTarget` - Whether to accept drag and drop
- `TheaterMode` - Whether in theater mode

### Navigation Properties
- `Resizable` - Whether window is resizable
- `FullScreen` - Whether in full screen mode
- `AddressBar` - Whether to show address bar
- `StatusBar` - Whether to show status bar
- `ToolBar` - Whether to show toolbar
- `MenuBar` - Whether to show menu bar

## Events

- `BeforeNavigate2` - Triggered before navigation
- `NavigateComplete2` - Triggered when navigation completes
- `DocumentComplete` - Triggered when document loading completes
- `StatusTextChange` - Triggered when status text changes
- `ProgressChange` - Triggered when loading progress changes
- `TitleChange` - Triggered when title changes
- `NewWindow2` - Triggered when opening new window
- `WindowClosing` - Triggered when window is closing
- `WindowSetHeight` - Triggered when setting window height
- `WindowSetWidth` - Triggered when setting window width
- `WindowSetResizable` - Triggered when setting window resizable
- `ClientToHostWindow` - Triggered during client coordinate conversion
- `SetSecureLockIcon` - Triggered when setting security icon
- `FileDownload` - Triggered during file download
- `NavigateError` - Triggered on navigation error
- `PrintTemplateInstantiation` - Triggered on print template instantiation
- `PrintTemplateTeardown` - Triggered on print template teardown
- `PrivacyImpactedStateChange` - Triggered on privacy state change
- `UpdatePageStatus` - Triggered on page status update

## Code Examples

### Basic Usage

```vb
Private Sub InitWebBrowser()
    With WebBrowser1
        .Silent = True  ' Disable error prompts
        .RegisterAsBrowser = True
        .RegisterAsDropTarget = False
        
        ' Navigate to specified page
        .Navigate "https://www.example.com"
    End With
End Sub
```

### Navigation Manager

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
                        Optional ByVal PostData As String, _
                        Optional ByVal Headers As String)
    With Navigation
        ' Remove forward history when navigating to new page
        If .CurrentIndex < .Count Then
            .Count = .CurrentIndex
        End If
        
        ' Add new entry
        .Count = .Count + 1
        If .Count > .MaxHistory Then
            ' Remove oldest entry
            MoveArray .History, 2, 1, .MaxHistory - 1
            .Count = .MaxHistory
        End If
        
        ' Store navigation info
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
```

### Event Handling

```vb
Private Sub WebBrowser1_BeforeNavigate2(ByVal pDisp As Object, _
                                      URL As Variant, _
                                      Flags As Variant, _
                                      TargetFrameName As Variant, _
                                      PostData As Variant, _
                                      Headers As Variant, _
                                      Cancel As Boolean)
    ' Handle navigation start
    lblStatus.Caption = "Loading: " & URL
    
    ' Check if URL should be blocked
    If IsBlockedURL(URL) Then
        Cancel = True
        MsgBox "Access to this URL is blocked", vbExclamation
    End If
End Sub

Private Sub WebBrowser1_DocumentComplete(ByVal pDisp As Object, _
                                      URL As Variant)
    ' Handle document load completion
    lblStatus.Caption = "Ready"
    
    ' Add to history
    AddToHistory URL, WebBrowser1.LocationName
    
    ' Update UI
    UpdateNavigationButtons
End Sub
```

## Common Use Cases

### Custom Navigation

```vb
Private Sub NavigateWithHeaders()
    Const URL As String = "https://api.example.com/data"
    
    ' Set custom headers
    Dim Headers As String
    Headers = "Content-Type: application/json" & vbCrLf & _
             "Authorization: Bearer " & GetAuthToken()
    
    ' Set post data
    Dim PostData As String
    PostData = "{""id"": 123}"
    
    ' Navigate with custom headers and post data
    WebBrowser1.Navigate2 URL, , , PostData, Headers
End Sub
```

### Script Interaction

```vb
Private Sub ExecuteJavaScript()
    ' Wait for document to be ready
    Do While WebBrowser1.ReadyState <> READYSTATE_COMPLETE
        DoEvents
    Loop
    
    ' Execute JavaScript
    Dim Result As Variant
    Result = WebBrowser1.Document.parentWindow.execScript( _
        "return document.title;", "JavaScript")
        
    ' Get element by ID
    Dim Element As Object
    Set Element = WebBrowser1.Document.getElementById("myElement")
    
    ' Set element value
    Element.Value = "New Value"
End Sub
```

## Best Practices

1. Error Handling
```vb
Private Sub HandleNavigationErrors()
    On Error GoTo ErrorHandler
    
    ' Attempt navigation
    WebBrowser1.Navigate "https://www.example.com"
    Exit Sub
    
ErrorHandler:
    MsgBox "Navigation error: " & Err.Description, vbExclamation
End Sub
```

2. Performance Optimization
```vb
Private Sub OptimizePerformance()
    ' Disable animations and media
    WebBrowser1.Silent = True
    
    ' Disable script debugging
    DisableScriptDebugger
    
    ' Use offline mode for local content
    If IsLocalContent(URL) Then
        WebBrowser1.Offline = True
    End If
End Sub
```

## Known Issues and Solutions

1. Memory Management
```vb
Private Sub CleanupBrowser()
    ' Stop all navigation
    WebBrowser1.Stop
    
    ' Clear history
    WebBrowser1.ExecWB OLECMDID_CLEARHISTORY, _
                      OLECMDEXECOPT_DODEFAULT
    
    ' Release resources
    Set WebBrowser1.Document = Nothing
End Sub
```

2. Security Settings
```vb
Private Sub ConfigureSecurity()
    ' Set security zone
    SetSecurityZone "trusted"
    
    ' Enable protected mode
    WebBrowser1.SetProperty "ProtectedMode", True
    
    ' Configure SSL settings
    SetSSLSettings
End Sub
```

## Additional Tips

1. Page Loading Status
```vb
Private Sub MonitorPageLoad()
    Static LastProgress As Long
    
    Private Sub WebBrowser1_ProgressChange(ByVal Progress As Long, _
                                         ByVal ProgressMax As Long)
        If ProgressMax > 0 Then
            ' Calculate percentage
            Dim Percent As Long
            Percent = (Progress * 100) \ ProgressMax
            
            ' Update progress display
            UpdateProgress Percent
            LastProgress = Progress
        End If
    End Sub
End Sub
```

2. Print Operations
```vb
Private Sub PrintWebPage(Optional ByVal ShowDialog As Boolean = True)
    If ShowDialog Then
        ' Show print dialog
        WebBrowser1.ExecWB OLECMDID_PRINT, _
                          OLECMDEXECOPT_PROMPTUSER
    Else
        ' Print with default settings
        WebBrowser1.ExecWB OLECMDID_PRINT, _
                          OLECMDEXECOPT_DONTPROMPTUSER
    End If
End Sub
```

3. Download Management
```vb
Private Sub WebBrowser1_FileDownload(ByVal ActiveDocument As Boolean, _
                                   Cancel As Boolean)
    ' Handle file downloads
    If Not IsAllowedFileType(ActiveDocument) Then
        Cancel = True
        MsgBox "File type not allowed", vbExclamation
    Else
        ' Set download location
        SetDownloadPath GetDownloadFolder()
    End If
End Sub
```
