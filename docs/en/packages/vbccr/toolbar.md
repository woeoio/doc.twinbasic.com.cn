# Toolbar Control (VBCCRToolbar)

VBCCRToolbar control provides a toolbar interface for organizing and displaying common command buttons. It supports various button styles including icons, text, and dropdown menus, allowing users to quickly access program features.

## Properties

### Key Properties

- `Buttons`: Button collection
- `ImageList`: Icon list
- `ButtonWidth`: Button width
- `ButtonHeight`: Button height
- `Style`: Toolbar style
- `Wrappable`: Whether to allow wrapping
- `AllowCustomize`: Whether to allow customization
- `TextAlignment`: Text alignment
- `HotImageList`: Hot state icon list
- `DisabledImageList`: Disabled state icon list
- `ShowTips`: Whether to show tooltips

### Toolbar Style Constants (TbrStyleConstants)

- `TbrStyleStandard` (0) - Standard style
- `TbrStyleFlat` (1) - Flat style

### Text Alignment Constants (TbrTextAlignConstants)

- `TbrTextAlignBottom` (0) - Text at bottom of button
- `TbrTextAlignRight` (1) - Text on right side of button

### Button Style Constants (TbrButtonStyleConstants)

Used for button's `Style` property:

- `TbrButtonStyleDefault` (0) - Default button
- `TbrButtonStyleCheck` (1) - Check button
- `TbrButtonStyleCheckGroup` (2) - Check button in button group
- `TbrButtonStyleSeparator` (3) - Separator
- `TbrButtonStyleDropDown` (4) - Dropdown button
- `TbrButtonStyleWholeDropDown` (5) - Whole dropdown button

## Methods

### Main Methods

- `AddButton(Caption As String, [Key As String], [Image As Variant])`: Add button
- `RemoveButton(Index As Variant)`: Remove button
- `GetButton(Index As Variant) As Button`: Get button
- `Customize()`: Open customization dialog
- `SaveLayout(Key As String)`: Save layout
- `LoadLayout(Key As String)`: Load layout

## Events

- `ButtonClick(Button As Button)`: Button click event
- `ButtonDropDown(Button As Button, Cancel As Boolean)`: Dropdown button event
- `ButtonBeginDrag(Button As Button, Cancel As Boolean)`: Begin drag event
- `BeforeCustomize(Cancel As Boolean)`: Before customize event
- `Change()`: Toolbar change event

## Code Examples

### Basic Usage

```vb
Private Sub Form_Load()
    ' Configure toolbar
    With Toolbar1
        .ImageList = ImageList1
        .ButtonWidth = 24
        .ButtonHeight = 24
        .Style = tbrFlat
        .ShowTips = True
        
        ' Add buttons
        .AddButton "New", "NEW", 1
        .AddButton "Open", "OPEN", 2
        .AddButton "Save", "SAVE", 3
        .AddButton , , , tbrSeparator  ' Separator
        .AddButton "Cut", "CUT", 4
        .AddButton "Copy", "COPY", 5
        .AddButton "Paste", "PASTE", 6
    End With
End Sub
```

### Button Management

```vb
Private Sub SetupButtons()
    With Toolbar1
        ' Add standard button
        Dim NewBtn As Button
        Set NewBtn = .AddButton("New", "NEW")
        With NewBtn
            .Image = 1
            .ToolTipText = "New Document"
            .Style = tbrImageAndText
        End With
        
        ' Add dropdown button
        Dim DropBtn As Button
        Set DropBtn = .AddButton("More", "MORE")
        With DropBtn
            .Image = 2
            .Style = tbrDropDown
        End With
        
        ' Add toggle button
        Dim ToggleBtn As Button
        Set ToggleBtn = .AddButton("Bold", "BOLD")
        With ToggleBtn
            .Image = 3
            .Style = tbrCheck
        End With
    End With
End Sub

Private Sub Toolbar1_ButtonClick(Button As Button)
    Select Case Button.Key
        Case "NEW"
            NewDocument
        Case "OPEN"
            OpenDocument
        Case "SAVE"
            SaveDocument
        Case "CUT"
            EditCut
        Case "COPY"
            EditCopy
        Case "PASTE"
            EditPaste
        Case "BOLD"
            ToggleBold
    End Select
End Sub
```

### Advanced Toolbar Features

```vb
Private Sub CreateAdvancedToolbar()
    With Toolbar1
        ' Configure toolbar appearance
        .Style = tbrFlat
        .Wrappable = True
        .AllowCustomize = True
        .TextAlignment = tbrTextRight
        
        ' Set up image lists
        Set .ImageList = ilsNormal
        Set .HotImageList = ilsHot
        Set .DisabledImageList = ilsDisabled
        
        ' Add button groups
        AddFileButtons
        AddEditButtons
        AddFormatButtons
        AddViewButtons
        
        ' Load saved layout
        LoadSavedLayout
    End With
End Sub

Private Sub AddFileButtons()
    With Toolbar1
        ' File operations group
        .AddButton "New", "NEW", 1
        With .GetButton("NEW")
            .Style = tbrImageAndText
            .ToolTipText = "Create New Document"
        End With
        
        .AddButton "Open", "OPEN", 2
        .AddButton "Save", "SAVE", 3
        
        ' Recent files dropdown
        Dim RecentBtn As Button
        Set RecentBtn = .AddButton("Recent", "RECENT")
        With RecentBtn
            .Style = tbrDropDown
            .Image = 4
        End With
    End With
End Sub
```

## Common Use Cases

### Document Editor Toolbar

```vb
Private Sub CreateEditorToolbar()
    With Toolbar1
        ' File group
        .AddButton "New", "NEW", 1
        .AddButton "Open", "OPEN", 2
        .AddButton "Save", "SAVE", 3
        .AddButton , , , tbrSeparator
        
        ' Edit group
        .AddButton "Undo", "UNDO", 4
        .AddButton "Redo", "REDO", 5
        .AddButton , , , tbrSeparator
        
        ' Format group
        AddFormatButton "Bold", "BOLD", 6
        AddFormatButton "Italic", "ITALIC", 7
        AddFormatButton "Underline", "UNDERLINE", 8
        
        ' Set button states
        .GetButton("UNDO").Enabled = False
        .GetButton("REDO").Enabled = False
    End With
End Sub

Private Sub AddFormatButton(Caption As String, Key As String, ImageIndex As Long)
    Dim Btn As Button
    Set Btn = Toolbar1.AddButton(Caption, Key)
    With Btn
        .Image = ImageIndex
        .Style = tbrCheck
    End With
End Sub
```

## Best Practices

1. Button Organization
```vb
Private Sub OrganizeButtons()
    With Toolbar1
        ' Group related buttons
        AddButtonGroup "File Operations", 1, 4
        AddButtonGroup "Edit Operations", 5, 8
        AddButtonGroup "Format Operations", 9, 12
        
        ' Add separators between groups
        AddSeparators
        
        ' Set group visibility
        SetGroupVisibility
    End With
End Sub
```

2. Event Handling
```vb
Private Sub HandleToolbarEvents()
    On Error GoTo ErrorHandler
    
    ' Save current button state
    Dim CurrentState As Boolean
    CurrentState = Toolbar1.GetButton("BOLD").Value
    
    ' Process button click
    ProcessButtonClick
    
    ' Restore state if error
    If Err.Number <> 0 Then
        Toolbar1.GetButton("BOLD").Value = CurrentState
    End If
    Exit Sub
    
ErrorHandler:
    Debug.Print "Toolbar error: " & Err.Description
End Sub
```

## Known Issues and Solutions

1. Button State Management
```vb
Private Sub ManageButtonStates()
    ' Update button states based on document
    With Toolbar1
        .GetButton("SAVE").Enabled = DocumentModified
        .GetButton("UNDO").Enabled = CanUndo
        .GetButton("REDO").Enabled = CanRedo
        
        ' Update format buttons
        UpdateFormatButtons
    End With
End Sub
```

2. Layout Management
```vb
Private Sub HandleLayoutIssues()
    ' Fix layout problems
    With Toolbar1
        .Refresh
        .Wrappable = False
        .Wrappable = True
        
        ' Reposition buttons if needed
        RepositionButtons
    End With
End Sub
```

## Additional Tips

1. Custom Button Styles
```vb
Private Sub CustomizeButtonStyle(Button As Button)
    With Button
        ' Set appearance
        .Style = tbrImageAndText
        .TextAlignment = tbrTextRight
        .ButtonWidth = 60
        
        ' Set states
        .Visible = True
        .Enabled = True
        .Value = False
    End With
End Sub
```

2. Dynamic Toolbar Configuration
```vb
Private Sub ConfigureToolbar(ByVal UserLevel As String)
    Select Case UserLevel
        Case "Admin"
            ShowAdminButtons True
        Case "User"
            ShowAdminButtons False
        Case "Guest"
            ShowMinimalButtons
    End Select
End Sub

Private Sub ShowAdminButtons(ByVal Show As Boolean)
    With Toolbar1
        .GetButton("SETTINGS").Visible = Show
        .GetButton("USERS").Visible = Show
        .GetButton("SECURITY").Visible = Show
    End With
End Sub
```

3. Toolbar Customization
```vb
Private Sub EnableCustomization()
    With Toolbar1
        .AllowCustomize = True
        .SaveLayout "Default"
        
        ' Add customization button
        Dim CustomBtn As Button
        Set CustomBtn = .AddButton("Customize", "CUSTOM")
        With CustomBtn
            .Image = 20
            .ToolTipText = "Customize Toolbar"
        End With
    End With
End Sub
```
