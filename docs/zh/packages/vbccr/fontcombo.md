# FontCombo Control (VBCCRFontCombo)

FontCombo 控件是一个专门用于字体选择的组合框控件，它自动列出系统中安装的所有字体，并提供字体预览功能。

## 属性

### 基本属性
- `Text` - 当前选择的字体名称
- `List` - 字体列表
- `ListCount` - 列表项数量
- `ListIndex` - 当前选中项的索引
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见

### 特有属性
- `FontType` - 显示的字体类型
  - `ALL_FONTS` (0) - 所有字体
  - `TT_FONTS_ONLY` (1) - 仅 TrueType 字体
  - `DEVICE_FONTS_ONLY` (2) - 仅设备字体
  - `RASTER_FONTS_ONLY` (3) - 仅点阵字体
- `PreviewText` - 预览文本
- `ShowPreview` - 是否显示预览
- `ShowSymbols` - 是否显示符号字体
- `MaxMRUCount` - 最近使用字体的最大数量

## 事件

- `Change` - 选择改变时触发
- `Click` - 点击控件时触发
- `DblClick` - 双击控件时触发
- `DropDown` - 下拉列表时触发
- `GotFocus` - 获得焦点时触发
- `KeyDown` - 按下键盘时触发
- `KeyPress` - 键盘按键时触发
- `KeyUp` - 释放键盘时触发
- `LostFocus` - 失去焦点时触发
- `MouseDown` - 鼠标按下时触发
- `MouseMove` - 鼠标移动时触发
- `MouseUp` - 鼠标释放时触发
- `Scroll` - 滚动列表时触发
- `CloseUp` - 关闭下拉列表时触发

## 代码示例

### 基本用法

```vb
Private Sub InitFontCombo()
    With FontCombo1
        .FontType = ALL_FONTS  ' 显示所有字体
        .ShowPreview = True  ' 显示预览
        .PreviewText = "AaBbYyZz"  ' 设置预览文本
        .ShowSymbols = False  ' 不显示符号字体
    End With
End Sub
```

### 字体分类器

```vb
Private Type FontInfo
    Name As String
    Type As Long
    CharSet As Long
    IsSymbol As Boolean
    IsTrueType As Boolean
    IsVertical As Boolean
End Type

Private Type FontManager
    Fonts() As FontInfo
    Count As Long
    
    TTFonts() As String
    TTCount As Long
    
    SymbolFonts() As String
    SymbolCount As Long
    
    VerticalFonts() As String
    VerticalCount As Long
End Type

Private Manager As FontManager

Private Sub InitFontManager()
    With Manager
        ReDim .Fonts(1 To 1000)
        .Count = 0
        
        ReDim .TTFonts(1 To 100)
        .TTCount = 0
        
        ReDim .SymbolFonts(1 To 50)
        .SymbolCount = 0
        
        ReDim .VerticalFonts(1 To 50)
        .VerticalCount = 0
        
        ' 分类所有字体
        ClassifyFonts
    End With
End Sub

Private Sub ClassifyFonts()
    With Manager
        ' 获取所有字体
        Dim i As Long
        For i = 0 To FontCombo1.ListCount - 1
            .Count = .Count + 1
            With .Fonts(.Count)
                .Name = FontCombo1.List(i)
                
                ' 获取字体信息
                Dim DC As Long
                DC = GetDC(0)
                
                Dim LF As LOGFONT
                LF.lfCharSet = DEFAULT_CHARSET
                StrToBytes .Name, LF.lfFaceName
                
                Dim TM As TEXTMETRIC
                Dim OldFont As Long, NewFont As Long
                
                NewFont = CreateFontIndirect(LF)
                OldFont = SelectObject(DC, NewFont)
                
                GetTextMetrics DC, TM
                
                ' 判断字体类型
                .CharSet = TM.tmCharSet
                .IsSymbol = (TM.tmCharSet = SYMBOL_CHARSET)
                .IsTrueType = ((TM.tmPitchAndFamily And TMPF_TRUETYPE) = TMPF_TRUETYPE)
                .IsVertical = ((TM.tmPitchAndFamily And TMPF_VECTOR) = TMPF_VECTOR)
                
                ' 分类存储
                If .IsTrueType Then
                    .Type = TT_FONTS_ONLY
                    .TTCount = .TTCount + 1
                    .TTFonts(.TTCount) = .Name
                End If
                
                If .IsSymbol Then
                    .SymbolCount = .SymbolCount + 1
                    .SymbolFonts(.SymbolCount) = .Name
                End If
                
                If .IsVertical Then
                    .VerticalCount = .VerticalCount + 1
                    .VerticalFonts(.VerticalCount) = .Name
                End If
                
                ' 清理
                SelectObject DC, OldFont
                DeleteObject NewFont
            End With
        Next i
        
        ReleaseDC 0, DC
    End With
End Sub

Private Sub FilterFontsByType(ByVal FontType As Long)
    With FontCombo1
        ' 保存当前选择
        Dim CurrentFont As String
        CurrentFont = .Text
        
        ' 清空列表
        Do While .ListCount > 0
            .RemoveItem 0
        Loop
        
        ' 添加符合条件的字体
        Dim i As Long
        For i = 1 To Manager.Count
            With Manager.Fonts(i)
                If .Type = FontType Then
                    FontCombo1.AddItem .Name
                End If
            End With
        Next i
        
        ' 恢复选择
        On Error Resume Next
        .Text = CurrentFont
    End With
End Sub

Private Sub ShowTrueTypeFontsOnly()
    FilterFontsByType TT_FONTS_ONLY
End Sub

Private Sub ShowSymbolFonts()
    With FontCombo1
        ' 保存当前选择
        Dim CurrentFont As String
        CurrentFont = .Text
        
        ' 清空列表
        Do While .ListCount > 0
            .RemoveItem 0
        Loop
        
        ' 添加符号字体
        Dim i As Long
        For i = 1 To Manager.SymbolCount
            .AddItem Manager.SymbolFonts(i)
        Next i
        
        ' 恢复选择
        On Error Resume Next
        .Text = CurrentFont
    End With
End Sub
```

### 字体预览器

```vb
Private Type PreviewManager
    PreviewText As String
    PreviewSize As Long
    PreviewStyle As Long  ' 0=普通, 1=粗体, 2=斜体, 3=粗斜体
    PreviewColor As Long
    PreviewBackColor As Long
End Type

Private Preview As PreviewManager

Private Sub InitPreviewManager()
    With Preview
        .PreviewText = "AaBbYyZz 0123456789"
        .PreviewSize = 12
        .PreviewStyle = 0
        .PreviewColor = vbBlack
        .PreviewBackColor = vbWhite
    End With
    
    UpdatePreview
End Sub

Private Sub UpdatePreview()
    With FontCombo1
        .PreviewText = Preview.PreviewText
        
        ' 创建预览字体
        Dim NewFont As StdFont
        Set NewFont = New StdFont
        
        With NewFont
            .Name = FontCombo1.Text
            .Size = Preview.PreviewSize
            .Bold = ((Preview.PreviewStyle And 1) = 1)
            .Italic = ((Preview.PreviewStyle And 2) = 2)
        End With
        
        Set .Font = NewFont
        .BackColor = Preview.PreviewBackColor
        .ForeColor = Preview.PreviewColor
    End With
End Sub

Private Sub FontCombo1_Change()
    UpdatePreview
End Sub

Private Sub SetPreviewText(ByVal Text As String)
    Preview.PreviewText = Text
    UpdatePreview
End Sub

Private Sub SetPreviewSize(ByVal Size As Long)
    If Size >= 6 And Size <= 72 Then
        Preview.PreviewSize = Size
        UpdatePreview
    End If
End Sub

Private Sub SetPreviewStyle(ByVal Style As Long)
    If Style >= 0 And Style <= 3 Then
        Preview.PreviewStyle = Style
        UpdatePreview
    End If
End Sub
```

### 最近使用字体管理器

```vb
Private Type MRUManager
    Fonts() As String
    Count As Long
    MaxCount As Long
End Type

Private MRU As MRUManager

Private Sub InitMRUManager(Optional ByVal MaxCount As Long = 10)
    With MRU
        .MaxCount = MaxCount
        ReDim .Fonts(1 To MaxCount)
        .Count = 0
    End With
End Sub

Private Sub AddToMRU(ByVal FontName As String)
    With MRU
        ' 检查是否已存在
        Dim i As Long
        For i = 1 To .Count
            If .Fonts(i) = FontName Then
                ' 移到最前
                If i > 1 Then
                    Dim j As Long
                    For j = i To 2 Step -1
                        .Fonts(j) = .Fonts(j - 1)
                    Next j
                    .Fonts(1) = FontName
                End If
                Exit Sub
            End If
        Next i
        
        ' 添加新字体
        If .Count < .MaxCount Then
            ' 还有空间
            .Count = .Count + 1
        End If
        
        ' 移动现有字体
        For i = .Count To 2 Step -1
            .Fonts(i) = .Fonts(i - 1)
        Next i
        
        ' 添加到最前
        .Fonts(1) = FontName
    End With
    
    ' 更新界面
    UpdateMRUList
End Sub

Private Sub UpdateMRUList()
    With FontCombo1
        ' 保存当前选择
        Dim CurrentFont As String
        CurrentFont = .Text
        
        ' 清空列表
        Do While .ListCount > 0
            .RemoveItem 0
        Loop
        
        ' 添加最近使用的字体
        Dim i As Long
        For i = 1 To MRU.Count
            .AddItem MRU.Fonts(i)
        Next i
        
        ' 添加分隔符
        If MRU.Count > 0 Then
            .AddItem "-"
        End If
        
        ' 添加所有字体
        For i = 0 To Screen.FontCount - 1
            .AddItem Screen.Fonts(i)
        Next i
        
        ' 恢复选择
        On Error Resume Next
        .Text = CurrentFont
    End With
End Sub

Private Sub FontCombo1_Click()
    AddToMRU FontCombo1.Text
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeSetFont(ByVal FontName As String) As Boolean
    On Error GoTo ErrorHandler
    
    FontCombo1.Text = FontName
    SafeSetFont = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置字体失败: " & Err.Description
    SafeSetFont = False
End Function
```

2. 字体验证
```vb
Private Function IsFontInstalled(ByVal FontName As String) As Boolean
    Dim i As Long
    For i = 0 To Screen.FontCount - 1
        If Screen.Fonts(i) = FontName Then
            IsFontInstalled = True
            Exit Function
        End If
    Next i
    IsFontInstalled = False
End Function
```

3. 状态保存
```vb
Private Sub SaveFontComboState()
    SaveSetting App.Title, "FontCombo", "LastFont", FontCombo1.Text
    SaveSetting App.Title, "FontCombo", "PreviewText", Preview.PreviewText
    SaveSetting App.Title, "FontCombo", "PreviewSize", CStr(Preview.PreviewSize)
End Sub

Private Sub RestoreFontComboState()
    With Preview
        .PreviewText = GetSetting(App.Title, "FontCombo", "PreviewText", "AaBbYyZz")
        .PreviewSize = CLng(GetSetting(App.Title, "FontCombo", "PreviewSize", "12"))
    End With
    
    Dim LastFont As String
    LastFont = GetSetting(App.Title, "FontCombo", "LastFont", "")
    
    If SafeSetFont(LastFont) = False Then
        FontCombo1.Text = "Arial"  ' 使用默认字体
    End If
    
    UpdatePreview
End Sub
```

FontCombo 控件提供了方便的字体选择功能。通过合理的扩展，可以实现字体分类、预览和最近使用记录等功能。上述示例展示了 FontCombo 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
