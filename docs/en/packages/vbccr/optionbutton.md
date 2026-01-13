# OptionButton Control (VBCCROptionButton)

VBCCROptionButton control is a radio button control that allows users to select one option from a group of options. It is typically used together with other OptionButton controls to form an option group.

## Properties

### Appearance Properties
- `Alignment` - Text alignment
  - `vbLeftJustify` (0) - Left aligned
  - `vbRightJustify` (1) - Right aligned
- `Appearance` - Appearance style
  - `cc2D` (0) - 2D appearance
  - `cc3D` (1) - 3D appearance
- `BackColor` - Background color
- `ForeColor` - Text color
- `Font` - Font properties
- `Caption` - Button text
- `Picture` - Icon
- `DisabledPicture` - Icon for disabled state
- `DownPicture` - Icon for pressed state
- `Enabled` - Whether enabled
- `Visible` - Whether visible
- `Value` - Selected state
  - `True` - Selected
  - `False` - Not selected
- `ToolTipText` - Tooltip text

## Events

- `Click` - Triggered when clicked
- `DblClick` - Triggered when double-clicked
- `MouseDown` - Triggered when mouse button is pressed
- `MouseMove` - Triggered when mouse moves
- `MouseUp` - Triggered when mouse button is released
- `GotFocus` - Triggered when control receives focus
- `LostFocus` - Triggered when control loses focus
- `KeyDown` - Triggered when a key is pressed down
- `KeyPress` - Triggered when a key is pressed
- `KeyUp` - Triggered when a key is released

## Code Examples

### Basic Usage

```vb
Private Sub InitOptionButtons()
    ' Set basic properties
    With Option1
        .Caption = "Option 1"
        .Value = True  ' Selected by default
        .ToolTipText = "This is the first option"
    End With
    
    With Option2
        .Caption = "Option 2"
        .Value = False
        .ToolTipText = "This is the second option"
    End With
End Sub
```

### Option Group Management

```vb
Private Type OptionGroup
    Name As String
    Buttons() As VBCCROptionButton
    Count As Long
    SelectedIndex As Long
End Type

Private Type GroupManager
    Groups() As OptionGroup
    Count As Long
End Type

Private Groups As GroupManager

Private Sub InitGroupManager()
    ReDim Groups.Groups(1 To 10)
    Groups.Count = 0
End Sub

Private Function CreateOptionGroup(ByVal Name As String) As Long
    With Groups
        .Count = .Count + 1
        If .Count > UBound(.Groups) Then
            ReDim Preserve .Groups(1 To .Count + 10)
        End If
        
        With .Groups(.Count)
            .Name = Name
            ReDim .Buttons(1 To 10)
            .Count = 0
            .SelectedIndex = -1
        End With
        
        CreateOptionGroup = .Count
    End With
End Function

Private Sub AddToGroup(ByVal GroupIndex As Long, _
                      ByVal Button As VBCCROptionButton)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        .Count = .Count + 1
        If .Count > UBound(.Buttons) Then
            ReDim Preserve .Buttons(1 To .Count + 10)
        End If
        
        Set .Buttons(.Count) = Button
        
        ' Set tag to identify group and index
        Button.Tag = GroupIndex & ":" & .Count
        
        ' Add event handling
        Button.Value = False  ' Ensure initial state is not selected
    End With
End Sub

Private Sub OptionButton_Click()
    Dim Button As VBCCROptionButton
    Set Button = Me.ActiveControl
    
    ' Parse group and index
    Dim Parts() As String
    Parts = Split(Button.Tag, ":")
    
    If UBound(Parts) <> 1 Then Exit Sub
    
    Dim GroupIndex As Long
    Dim ButtonIndex As Long
    GroupIndex = Val(Parts(0))
    ButtonIndex = Val(Parts(1))
    
    UpdateGroupSelection GroupIndex, ButtonIndex
End Sub

Private Sub UpdateGroupSelection(ByVal GroupIndex As Long, _
                               ByVal ButtonIndex As Long)
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then Exit Sub
    
    With Groups.Groups(GroupIndex)
        ' Clear previous selection
        If .SelectedIndex > 0 Then
            .Buttons(.SelectedIndex).Value = False
        End If
        
        ' Update selection
        .SelectedIndex = ButtonIndex
        .Buttons(ButtonIndex).Value = True
        
        ' Trigger selection changed event
        RaiseEvent GroupSelectionChanged GroupIndex, ButtonIndex
    End With
End Sub

Private Function GetSelectedOption(ByVal GroupIndex As Long) As Long
    If GroupIndex < 1 Or GroupIndex > Groups.Count Then
        GetSelectedOption = -1
        Exit Function
    End If
    
    GetSelectedOption = Groups.Groups(GroupIndex).SelectedIndex
End Function
```

### Dynamic Option Buttons

```vb
Private Type DynamicOption
    Button As VBCCROptionButton
    Value As Variant
    Enabled As Boolean
    Visible As Boolean
    Tag As Variant
End Type

Private Type OptionSet
    Name As String
    Options() As DynamicOption
    Count As Long
    Container As Object  ' Frame or PictureBox
    ItemHeight As Single
    ItemSpacing As Single
End Type

Private Type SetManager
    Sets() As OptionSet
    Count As Long
End Type

Private Sets As SetManager

Private Sub InitSetManager()
    ReDim Sets.Sets(1 To 10)
    Sets.Count = 0
End Sub

Private Function CreateOptionSet(ByVal Name As String, _
                               ByVal Container As Object, _
                               Optional ByVal ItemHeight As Single = 300, _
                               Optional ByVal ItemSpacing As Single = 60) _
                               As Long
    With Sets
        .Count = .Count + 1
        If .Count > UBound(.Sets) Then
            ReDim Preserve .Sets(1 To .Count + 10)
        End If
        
        With .Sets(.Count)
            .Name = Name
            Set .Container = Container
            .ItemHeight = ItemHeight
            .ItemSpacing = ItemSpacing
            ReDim .Options(1 To 10)
            .Count = 0
        End With
        
        CreateOptionSet = .Count
    End With
End Function

Private Sub AddOption(ByVal SetIndex As Long, _
                     ByVal Caption As String, _
                     Optional ByVal Value As Variant = Empty)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        .Count = .Count + 1
        If .Count > UBound(.Options) Then
            ReDim Preserve .Options(1 To .Count + 10)
        End If
        
        With .Options(.Count)
            ' Create new option button
            Set .Button = Controls.Add("VBCCROptionButton", _
                                    "Option" & SetIndex & "_" & Sets.Sets(SetIndex).Count)
            
            ' Set position and size
            With .Button
                .Container = Sets.Sets(SetIndex).Container
                .Caption = Caption
                .Top = (Sets.Sets(SetIndex).Count - 1) * _
                       (Sets.Sets(SetIndex).ItemHeight + Sets.Sets(SetIndex).ItemSpacing)
                .Height = Sets.Sets(SetIndex).ItemHeight
                .Width = Sets.Sets(SetIndex).Container.ScaleWidth
                .Left = 0
                .Visible = True
            End With
            
            ' Save value
            If IsEmpty(Value) Then
                .Value = Caption
            Else
                .Value = Value
            End If
            
            .Enabled = True
            .Visible = True
        End With
    End With
    
    ' Adjust container height
    AdjustContainerHeight SetIndex
End Sub

Private Sub AdjustContainerHeight(ByVal SetIndex As Long)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        .Container.Height = .Count * (.ItemHeight + .ItemSpacing)
    End With
End Sub

Private Sub RemoveOption(ByVal SetIndex As Long, _
                        ByVal OptionIndex As Long)
    If SetIndex < 1 Or SetIndex > Sets.Count Then Exit Sub
    If OptionIndex < 1 Or OptionIndex > Sets.Sets(SetIndex).Count Then Exit Sub
    
    With Sets.Sets(SetIndex)
        ' Remove control
        Controls.Remove .Options(OptionIndex).Button.Name
        
        ' Move subsequent options
        Dim i As Long
        For i = OptionIndex To .Count - 1
            Set .Options(i) = .Options(i + 1)
            
            ' Update position
            With .Options(i).Button
                .Top = (i - 1) * _
                      (Sets.Sets(SetIndex).ItemHeight + Sets.Sets(SetIndex).ItemSpacing)
            End With
        Next i
        
        ' Decrease count
        .Count = .Count - 1
        
        ' Adjust container size
        AdjustContainerHeight SetIndex
    End With
End Sub

Private Function GetSelectedValue(ByVal SetIndex As Long) As Variant
    If SetIndex < 1 Or SetIndex > Sets.Count Then
        GetSelectedValue = Empty
        Exit Function
    End If
    
    With Sets.Sets(SetIndex)
        Dim i As Long
        For i = 1 To .Count
            If .Options(i).Button.Value Then
                GetSelectedValue = .Options(i).Value
                Exit Function
            End If
        Next i
    End With
    
    GetSelectedValue = Empty
End Function
```

### Data Binding

```vb
Private Type BoundOption
    Button As VBCCROptionButton
    DataField As String
    DataSource As Object  ' Recordset or Collection
End Type

Private Type BindingManager
    Bindings() As BoundOption
    Count As Long
End Type

Private Bindings As BindingManager

Private Sub InitBindingManager()
    ReDim Bindings.Bindings(1 To 10)
    Bindings.Count = 0
End Sub

Private Function BindOptionToData(ByVal Button As VBCCROptionButton, _
                                ByVal DataSource As Object, _
                                ByVal DataField As String) As Long
    With Bindings
        .Count = .Count + 1
        If .Count > UBound(.Bindings) Then
            ReDim Preserve .Bindings(1 To .Count + 10)
        End If
        
        With .Bindings(.Count)
            Set .Button = Button
            Set .DataSource = DataSource
            .DataField = DataField
            
            ' Initialize value
            UpdateOptionFromData .Count
        End With
        
        BindOptionToData = .Count
    End With
End Function

Private Sub UpdateOptionFromData(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .Button.Value = .DataSource.Fields(.DataField).Value
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .Button.Value = .DataSource.Item(.DataField)
            End If
        End If
    End With
End Sub

Private Sub UpdateDataFromOption(ByVal BindingIndex As Long)
    If BindingIndex < 1 Or BindingIndex > Bindings.Count Then Exit Sub
    
    With Bindings.Bindings(BindingIndex)
        If TypeOf .DataSource Is ADODB.Recordset Then
            ' ADO Recordset
            If Not .DataSource.EOF Then
                .DataSource.Fields(.DataField).Value = .Button.Value
            End If
        ElseIf TypeOf .DataSource Is Collection Then
            ' Collection
            If .DataSource.Count > 0 Then
                .DataSource.Item(.DataField) = .Button.Value
            End If
        End If
    End With
End Sub

Private Sub BoundOption_Click()
    Dim Button As VBCCROptionButton
    Set Button = Me.ActiveControl
    
    ' Find binding
    Dim i As Long
    For i = 1 To Bindings.Count
        If Bindings.Bindings(i).Button Is Button Then
            UpdateDataFromOption i
            Exit For
        End If
    Next i
End Sub
```

### Paged Options

```vb
Private Type PagedOptions
    Name As String
    Options() As VBCCROptionButton
    Count As Long
    PageSize As Long
    CurrentPage As Long
    Container As Object
    ItemHeight As Single
    ItemSpacing As Single
End Type

Private Type PageManager
    Pages() As PagedOptions
    Count As Long
End Type

Private Pages As PageManager

Private Sub InitPageManager()
    ReDim Pages.Pages(1 To 10)
    Pages.Count = 0
End Sub

Private Function CreatePagedOptions(ByVal Name As String, _
                                  ByVal Container As Object, _
                                  Optional ByVal PageSize As Long = 10, _
                                  Optional ByVal ItemHeight As Single = 300, _
                                  Optional ByVal ItemSpacing As Single = 60) _
                                  As Long
    With Pages
        .Count = .Count + 1
        If .Count > UBound(.Pages) Then
            ReDim Preserve .Pages(1 To .Count + 10)
        End If
        
        With .Pages(.Count)
            .Name = Name
            Set .Container = Container
            .PageSize = PageSize
            .ItemHeight = ItemHeight
            .ItemSpacing = ItemSpacing
            ReDim .Options(1 To PageSize)
            .Count = 0
            .CurrentPage = 1
        End With
        
        CreatePagedOptions = .Count
    End With
End Function

Private Sub AddPagedOption(ByVal PageIndex As Long, _
                          ParamArray Options() As Variant)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        Dim i As Long
        For i = LBound(Options) To UBound(Options)
            If .Count = UBound(.Options) Then
                ReDim Preserve .Options(1 To .Count + .PageSize)
            End If
            
            .Count = .Count + 1
            
            ' Create option button
            Set .Options(.Count) = Controls.Add("VBCCROptionButton", _
                                             .Name & "_Option" & .Count)
            
            With .Options(.Count)
                .Container = Pages.Pages(PageIndex).Container
                .Caption = Options(i)
                .Visible = False  ' Initially hidden
            End With
        Next i
        
        ' Show current page
        ShowPage PageIndex, .CurrentPage
    End With
End Sub

Private Sub ShowPage(ByVal PageIndex As Long, _
                    ByVal PageNumber As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        ' Hide all options
        Dim i As Long
        For i = 1 To .Count
            .Options(i).Visible = False
        Next i
        
        ' Calculate page range
        Dim StartIndex As Long
        Dim EndIndex As Long
        StartIndex = (PageNumber - 1) * .PageSize + 1
        EndIndex = StartIndex + .PageSize - 1
        If EndIndex > .Count Then EndIndex = .Count
        
        ' Show current page options
        For i = StartIndex To EndIndex
            With .Options(i)
                .Top = (i - StartIndex) * _
                      (Pages.Pages(PageIndex).ItemHeight + _
                       Pages.Pages(PageIndex).ItemSpacing)
                .Width = Pages.Pages(PageIndex).Container.ScaleWidth
                .Left = 0
                .Visible = True
            End With
        Next i
        
        .CurrentPage = PageNumber
    End With
End Sub

Private Function GetPageCount(ByVal PageIndex As Long) As Long
    If PageIndex < 1 Or PageIndex > Pages.Count Then
        GetPageCount = 0
        Exit Function
    End If
    
    With Pages.Pages(PageIndex)
        GetPageCount = (.Count + .PageSize - 1) \ .PageSize
    End With
End Function

Private Sub NextPage(ByVal PageIndex As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        If .CurrentPage < GetPageCount(PageIndex) Then
            ShowPage PageIndex, .CurrentPage + 1
        End If
    End With
End Sub

Private Sub PreviousPage(ByVal PageIndex As Long)
    If PageIndex < 1 Or PageIndex > Pages.Count Then Exit Sub
    
    With Pages.Pages(PageIndex)
        If .CurrentPage > 1 Then
            ShowPage PageIndex, .CurrentPage - 1
        End If
    End With
End Sub
```

## Best Practices

1. Error Handling
```vb
Private Sub SafeSetOptionValue(ByVal Button As VBCCROptionButton, _
                             ByVal Value As Boolean)
    On Error GoTo ErrorHandler
    
    Button.Value = Value
    Exit Sub
    
ErrorHandler:
    Debug.Print "Failed to set option button value: " & Err.Description
End Sub
```

2. Hotkey Support
```vb
Private Sub SetOptionHotkey(ByVal Button As VBCCROptionButton, _
                          ByVal Key As Integer, _
                          Optional ByVal Ctrl As Boolean = False, _
                          Optional ByVal Alt As Boolean = False, _
                          Optional ByVal Shift As Boolean = False)
    ' Add hotkey tooltip
    Dim HotkeyText As String
    
    If Ctrl Then HotkeyText = HotkeyText & "Ctrl+"
    If Alt Then HotkeyText = HotkeyText & "Alt+"
    If Shift Then HotkeyText = HotkeyText & "Shift+"
    
    HotkeyText = HotkeyText & Chr$(Key)
    
    Button.ToolTipText = Button.Caption & " (" & HotkeyText & ")"
    
    ' Save hotkey information
    Button.Tag = Key & ":" & Ctrl & ":" & Alt & ":" & Shift
End Sub
```

3. State Persistence
```vb
Private Sub SaveOptionState(ByVal Button As VBCCROptionButton)
    SaveSetting App.Title, Button.Name, "Caption", Button.Caption
    SaveSetting App.Title, Button.Name, "Value", Button.Value
    SaveSetting App.Title, Button.Name, "Enabled", Button.Enabled
    SaveSetting App.Title, Button.Name, "Visible", Button.Visible
    SaveSetting App.Title, Button.Name, "Tag", Button.Tag
End Sub

Private Sub RestoreOptionState(ByVal Button As VBCCROptionButton)
    With Button
        .Caption = GetSetting(App.Title, .Name, "Caption", .Caption)
        .Value = CBool(GetSetting(App.Title, .Name, "Value", .Value))
        .Enabled = CBool(GetSetting(App.Title, .Name, "Enabled", .Enabled))
        .Visible = CBool(GetSetting(App.Title, .Name, "Visible", .Visible))
        .Tag = GetSetting(App.Title, .Name, "Tag", .Tag)
    End With
End Sub
```

The OptionButton control is an important control for implementing radio button functionality. Through proper organization and management, it can achieve flexible option grouping, data binding, and paged display capabilities. The examples above demonstrate various ways to use the OptionButton control, and developers can choose the appropriate implementation based on their actual needs.
```
