# StatusBar Control (VBCCRStatusBar)

VBCCRStatusBar control provides a status bar for displaying application status information, hints, and progress at the bottom of a form. It supports multiple panels, with each panel capable of displaying different types of information.

## Properties

### Key Properties

- `Panels`: Panel collection
- `SimpleText`: Text in simple panel mode
- `SimplePanel`: Whether to use simple panel mode
- `Style`: Status bar style
- `SizeGrip`: Whether to show size grip handle
- `Height`: Status bar height
- `Enabled`: Enable/disable status
- `Visible`: Visibility
- `Align`: Alignment (typically bottom)

### Panel Style Constants (SbrPanelStyleConstants)

Used for panel's `Style` property:

- `SbrPanelStyleText` (0) - Text style
- `SbrPanelStyleCaps` (1) - Caps Lock status
- `SbrPanelStyleNum` (2) - Num Lock status
- `SbrPanelStyleIns` (3) - Insert status
- `SbrPanelStyleScrl` (4) - Scroll Lock status
- `SbrPanelStyleTime` (5) - Time display
- `SbrPanelStyleDate` (6) - Date display
- `SbrPanelStyleKana` (7) - Kana input status
- `SbrPanelStyleHangul` (8) - Hangul input status
- `SbrPanelStyleJunja` (9) - Junja status
- `SbrPanelStyleKanji` (10) - Kanji input status
- `SbrPanelStyleHanja` (11) - Hanja status

## Methods

### Main Methods

- `AddPanel([Key As String], [Text As String], [Width As Long], [Style As PanelStyleConstants])`: Add panel
- `RemovePanel(Index As Variant)`: Remove panel
- `GetPanel(Index As Variant) As Panel`: Get panel object
- `ShowTips`: Show tooltips
- `Refresh`: Refresh display

## Events

- `PanelClick(Panel As Panel)`: Panel click event
- `PanelDblClick(Panel As Panel)`: Panel double-click event
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure status bar
    With StatusBar1
        .SizeGrip = True
        .SimplePanel = False
        
        ' Add panels
        .AddPanel , "Ready"  ' Status panel
        .AddPanel , "Line: 1, Col: 1"  ' Cursor position panel
        .AddPanel , "100%"  ' Zoom panel
        
        ' Set panel widths
        .GetPanel(1).Width = 1500
        .GetPanel(2).Width = 1000
    End With
End Sub
```

### Multi-function Status Bar

```vb
Private Sub CreateAdvancedStatusBar()
    With StatusBar1
        ' Status panel
        .AddPanel "STATUS", "Ready", 1500
        .GetPanel("STATUS").Style = sbrText
        
        ' Progress panel
        .AddPanel "PROGRESS", "0%", 1000
        .GetPanel("PROGRESS").Style = sbrProgress
        .GetPanel("PROGRESS").Max = 100
        
        ' Date time panel
        .AddPanel "DATETIME", Now, 2000
        .GetPanel("DATETIME").Style = sbrDate
        
        ' Keyboard status panel
        .AddPanel "KEYBOARD", "", 1000
        UpdateKeyboardStatus
    End With
End Sub

Private Sub UpdateKeyboardStatus()
    Dim Status As String
    Status = IIf(GetKeyState(vbKeyCapital) And 1, "CAP ", "") & _
            IIf(GetKeyState(vbKeyNumlock) And 1, "NUM ", "") & _
            IIf(GetKeyState(vbKeyScrollLock) And 1, "SCRL", "")
            
    StatusBar1.GetPanel("KEYBOARD").Text = Status
End Sub

Private Sub Timer1_Timer()
    ' Update date time
    StatusBar1.GetPanel("DATETIME").Text = Now
End Sub
```

### Progress Display

```vb
Private Sub ShowProgress(ByVal Percent As Long)
    With StatusBar1.GetPanel("PROGRESS")
        .Value = Percent
        .Text = Percent & "%"
    End With
    DoEvents
End Sub

Private Sub ProcessFiles()
    Dim i As Long
    Dim Total As Long
    
    Total = 100 ' Total number of files
    
    For i = 1 To Total
        ' Process file here
        ShowProgress CLng((i / Total) * 100)
    Next i
    
    ' Reset progress
    ShowProgress 0
    StatusBar1.GetPanel("STATUS").Text = "Processing complete"
End Sub
```

## Common Use Cases

### File Operation Status

```vb
Private Sub ShowFileStatus(ByVal Operation As String, _
                         ByVal FileName As String)
    With StatusBar1
        Select Case Operation
            Case "Copy"
                .GetPanel("STATUS").Text = "Copying " & FileName & "..."
            Case "Delete"
                .GetPanel("STATUS").Text = "Deleting " & FileName & "..."
            Case "Save"
                .GetPanel("STATUS").Text = "Saving " & FileName & "..."
            Case "Complete"
                .GetPanel("STATUS").Text = "Operation complete"
                .GetPanel("PROGRESS").Value = 0
        End Select
    End With
End Sub
```

### Network Status

```vb
Private Sub UpdateNetworkStatus()
    Dim Connected As Boolean
    Connected = CheckNetworkConnection()
    
    With StatusBar1.GetPanel("NETWORK")
        If Connected Then
            .Picture = LoadPicture("connected.ico")
            .Text = "Online"
        Else
            .Picture = LoadPicture("disconnected.ico")
            .Text = "Offline"
        End If
    End With
End Sub
```

## Best Practices

1. Panel Management
```vb
Private Sub InitializePanels()
    On Error GoTo ErrorHandler
    
    With StatusBar1
        .Panels.Clear
        
        ' Add standard panels
        .AddPanel "STATUS", "Ready", 2000
        .AddPanel "POSITION", "", 1500
        .AddPanel "MODIFIED", "", 1000
        .AddPanel "TIME", Time, 1200
    End With
    Exit Sub
    
ErrorHandler:
    Debug.Print "Panel initialization error: " & Err.Description
End Sub
```

2. Error Handling
```vb
Private Sub SafeUpdatePanel(ByVal Key As String, _
                          ByVal NewText As String)
    On Error GoTo ErrorHandler
    
    StatusBar1.GetPanel(Key).Text = NewText
    Exit Sub
    
ErrorHandler:
    Debug.Print "Panel update error: " & Err.Description
End Sub
```

## Known Issues and Solutions

1. Panel Width Issues
```vb
Private Sub FixPanelWidths()
    ' Calculate total width
    Dim TotalWidth As Long
    Dim i As Long
    
    With StatusBar1
        TotalWidth = .Width - 100 ' Account for borders
        
        ' Distribute remaining width
        For i = 1 To .Panels.Count - 1
            .GetPanel(i).Width = TotalWidth * 0.25
        Next i
        
        ' Last panel takes remaining space
        .GetPanel(.Panels.Count).AutoSize = sbrSpring
    End With
End Sub
```

2. Refresh Issues
```vb
Private Sub HandleRefreshIssues()
    StatusBar1.Visible = False
    StatusBar1.Refresh
    StatusBar1.Visible = True
End Sub
```

## Additional Tips

1. Dynamic Panel Updates
```vb
Private Sub UpdateStatusInfo(Optional ByVal Force As Boolean = False)
    Static LastUpdate As Date
    
    ' Update only if necessary
    If Not Force And DateDiff("s", LastUpdate, Now) < 5 Then Exit Sub
    
    With StatusBar1
        .GetPanel("MEMORY").Text = "Memory: " & Format$(GetFreeMemory, "#,##0 KB")
        .GetPanel("CPU").Text = "CPU: " & Format$(GetCPUUsage, "#0%")
        .GetPanel("TIME").Text = Format$(Now, "hh:mm:ss")
    End With
    
    LastUpdate = Now
End Sub
```

2. Status Animation
```vb
Private Sub ShowProcessingAnimation()
    Static Frame As Integer
    Dim Frames(3) As String
    
    Frames(0) = "|"
    Frames(1) = "/"
    Frames(2) = "-"
    Frames(3) = "\"
    
    StatusBar1.GetPanel("PROGRESS").Text = "Processing " & Frames(Frame)
    Frame = (Frame + 1) Mod 4
End Sub
```

3. Context Menu Integration
```vb
Private Sub StatusBar1_PanelClick(ByVal Panel As Panel)
    If Panel.Key = "STATUS" Then
        PopupMenu mnuStatus
    End If
End Sub
```
