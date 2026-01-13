# TabStrip Control (VBCCRTabStrip)

VBCCRTabStrip control provides a tab container that allows users to switch between different content panels by clicking on tabs. It is commonly used to organize and display related but different content groups.

## Properties

### Key Properties

- `Tabs`: Tab collection
- `SelectedItem`: Currently selected tab
- `TabIndex`: Current tab index
- `MultiRow`: Whether to allow multiple rows
- `Style`: Tab style
- `TabFixedWidth`: Fixed width
- `TabMinWidth`: Minimum width
- `Alignment`: Tab alignment
- `TabOrientation`: Tab orientation (top/bottom)
- `HotTracking`: Mouse hover effect
- `TabEnabled`: Tab enabled state
- `TabVisible`: Tab visible state
- `ImageList`: Icon list

### Tab Style Constants (TbsStyleConstants)

Used for `Style` property:

- `TbsStyleTabs` (0) - Standard tab style
- `TbsStyleButtons` (1) - Button style
- `TbsStyleFlatButtons` (2) - Flat button style

## Methods

### Main Methods

- `AddTab(Caption As String, [Key As String], [Image As Variant], [ToolTipText As String])`: Add new tab
- `RemoveTab(Index As Variant)`: Remove tab
- `Clear()`: Clear all tabs
- `GetTab(Index As Variant) As Tab`: Get tab object
- `SelectTab(Index As Variant)`: Select specified tab
- `HitTest(X As Single, Y As Single) As Long`: Test click position

## Events

- `Click()`: Click event
- `BeforeClick(Cancel As Boolean)`: Before click event
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `TabClick(Tab As Tab)`: Tab click event
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Add tabs
    With TabStrip1
        .AddTab "General"
        .AddTab "Advanced"
        .AddTab "Settings"
        .MultiRow = False
        .Style = tabStyleDefault
        .TabIndex = 0
    End With
    
    ' Show corresponding panel
    ShowPanel TabStrip1.TabIndex
End Sub

Private Sub TabStrip1_Click()
    ShowPanel TabStrip1.TabIndex
End Sub

Private Sub ShowPanel(ByVal Index As Long)
    ' Hide all panels
    fraGeneral.Visible = False
    fraAdvanced.Visible = False
    fraSettings.Visible = False
    
    ' Show selected panel
    Select Case Index
        Case 0: fraGeneral.Visible = True
        Case 1: fraAdvanced.Visible = True
        Case 2: fraSettings.Visible = True
    End Select
End Sub
```

### Dynamic Tabs

```vb
Private Sub CreateDynamicTabs()
    ' Clear existing tabs
    TabStrip1.Clear
    
    ' Dynamically add tabs
    For i = 1 To 5
        With TabStrip1
            .AddTab "Tab " & i, "TAB" & i
            .GetTab(i - 1).ToolTipText = "This is Tab " & i
            .GetTab(i - 1).Enabled = True
            .GetTab(i - 1).Tag = "DATA" & i
        End With
    Next i
End Sub

Private Sub LoadTabContent(ByVal TabIndex As Long)
    Dim Data As String
    Data = TabStrip1.GetTab(TabIndex).Tag
    
    ' Load content based on tab data
    Select Case Data
        Case "DATA1": LoadGeneralContent
        Case "DATA2": LoadAdvancedContent
        Case "DATA3": LoadSettingsContent
        Case Else: LoadDefaultContent
    End Select
End Sub
```

### Tab with Images

```vb
Private Sub SetupImageTabs()
    ' Set up image list
    With ImageList1
        .ListImages.Add 1, "GENERAL", LoadPicture("general.ico")
        .ListImages.Add 2, "ADVANCED", LoadPicture("advanced.ico")
        .ListImages.Add 3, "SETTINGS", LoadPicture("settings.ico")
    End With
    
    ' Assign image list to tab strip
    Set TabStrip1.ImageList = ImageList1
    
    ' Add tabs with images
    With TabStrip1
        .AddTab "General", , 1
        .AddTab "Advanced", , 2
        .AddTab "Settings", , 3
    End With
End Sub
```

## Common Use Cases

### Document Interface

```vb
Private Sub CreateDocumentTabs()
    Dim FileName As String
    
    ' Add new document tab
    FileName = "Document" & (TabStrip1.Tabs.Count + 1) & ".txt"
    
    With TabStrip1
        .AddTab FileName, "DOC" & .Tabs.Count
        .TabIndex = .Tabs.Count - 1
    End With
    
    ' Create and show document content
    CreateDocumentContent FileName
End Sub

Private Sub TabStrip1_TabClick(ByVal Tab As Tab)
    ' Load document content
    LoadDocument Tab.Key
End Sub
```

### Settings Manager

```vb
Private Sub CreateSettingsTabs()
    With TabStrip1
        ' Add settings categories
        .AddTab "User Settings"
        .AddTab "System Settings"
        .AddTab "Network Settings"
        .AddTab "Security Settings"
        
        ' Set tooltips
        .GetTab(0).ToolTipText = "Configure user preferences"
        .GetTab(1).ToolTipText = "Configure system options"
        .GetTab(2).ToolTipText = "Configure network options"
        .GetTab(3).ToolTipText = "Configure security options"
    End With
End Sub

Private Sub SaveTabSettings()
    Dim i As Long
    
    For i = 0 To TabStrip1.Tabs.Count - 1
        SaveSettings TabStrip1.GetTab(i).Key
    Next i
End Sub
```

## Best Practices

1. Tab Management
```vb
Private Sub ManageTabs()
    On Error GoTo ErrorHandler
    
    With TabStrip1
        ' Save current tab index
        Dim CurrentIndex As Long
        CurrentIndex = .TabIndex
        
        ' Update tabs
        .Clear
        LoadTabs
        
        ' Restore selection if valid
        If CurrentIndex < .Tabs.Count Then
            .TabIndex = CurrentIndex
        End If
    End With
    Exit Sub
    
ErrorHandler:
    Debug.Print "Tab management error: " & Err.Description
End Sub
```

2. Error Handling
```vb
Private Sub SafeTabOperation(ByVal Index As Long)
    On Error GoTo ErrorHandler
    
    If Index < 0 Or Index >= TabStrip1.Tabs.Count Then
        Exit Sub
    End If
    
    TabStrip1.SelectTab Index
    LoadTabContent Index
    Exit Sub
    
ErrorHandler:
    MsgBox "Tab operation error: " & Err.Description, vbExclamation
End Sub
```

## Known Issues and Solutions

1. Tab Width Issues
```vb
Private Sub FixTabWidth()
    Const MIN_WIDTH As Long = 60
    Const MAX_WIDTH As Long = 150
    
    With TabStrip1
        .TabMinWidth = MIN_WIDTH
        .TabFixedWidth = 0 ' Auto width
        
        ' Adjust if tabs are too wide
        If .Width / .Tabs.Count > MAX_WIDTH Then
            .TabFixedWidth = MAX_WIDTH
        End If
    End With
End Sub
```

2. Tab Visibility
```vb
Private Sub HandleTabVisibility()
    Dim i As Long
    Dim VisibleCount As Long
    
    ' Count visible tabs
    For i = 0 To TabStrip1.Tabs.Count - 1
        If TabStrip1.GetTab(i).Visible Then
            VisibleCount = VisibleCount + 1
        End If
    Next i
    
    ' Show message if no visible tabs
    If VisibleCount = 0 Then
        lblNoTabs.Visible = True
    Else
        lblNoTabs.Visible = False
    End If
End Sub
```

## Additional Tips

1. Tab Navigation
```vb
Private Sub TabStrip1_KeyDown(KeyCode As Integer, Shift As Integer)
    Select Case KeyCode
        Case vbKeyLeft
            MoveToPreviousTab
        Case vbKeyRight
            MoveToNextTab
        Case vbKeyHome
            MoveToFirstTab
        Case vbKeyEnd
            MoveToLastTab
    End Select
End Sub

Private Sub MoveToPreviousTab()
    If TabStrip1.TabIndex > 0 Then
        TabStrip1.TabIndex = TabStrip1.TabIndex - 1
    End If
End Sub

Private Sub MoveToNextTab()
    If TabStrip1.TabIndex < TabStrip1.Tabs.Count - 1 Then
        TabStrip1.TabIndex = TabStrip1.TabIndex + 1
    End If
End Sub
```

2. Dynamic Tab Updates
```vb
Private Sub UpdateTabStatus()
    Dim Tab As Tab
    
    For Each Tab In TabStrip1.Tabs
        ' Update tab status
        Tab.Enabled = CheckTabAccess(Tab.Key)
        Tab.ToolTipText = GetTabStatus(Tab.Key)
        
        ' Update tab caption if needed
        If HasPendingChanges(Tab.Key) Then
            Tab.Caption = Tab.Caption & " *"
        End If
    Next Tab
End Sub
```

3. Tab Context Menu
```vb
Private Sub TabStrip1_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If Button = vbRightButton Then
        Dim TabIndex As Long
        TabIndex = TabStrip1.HitTest(X, Y)
        
        If TabIndex >= 0 Then
            PopupMenu mnuTabContext
        End If
    End If
End Sub
```
