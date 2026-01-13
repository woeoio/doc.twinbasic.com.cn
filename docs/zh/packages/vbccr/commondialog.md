# CommonDialog Class Module (VBCCRCommonDialog)

CommonDialog 类模块提供了标准的 Windows 通用对话框功能，包括打开文件、保存文件、选择颜色、选择字体和打印对话框。

## 属性

### 基本属性
- `CancelError` - 取消时是否产生错误
- `Flags` - 对话框标志
- `FilterIndex` - 当前选择的文件类型索引
- `DefaultExt` - 默认文件扩展名
- `DialogTitle` - 对话框标题
- `FileName` - 文件名
- `Filter` - 文件类型过滤器
- `InitDir` - 初始目录
- `MaxFileSize` - 文件名最大长度

### 字体对话框属性
- `FontBold` - 字体是否加粗
- `FontItalic` - 字体是否斜体
- `FontName` - 字体名称
- `FontSize` - 字体大小
- `FontStrikethru` - 字体是否删除线
- `FontUnderline` - 字体是否下划线
- `Min` - 最小字体大小
- `Max` - 最大字体大小

### 颜色对话框属性
- `Color` - 选择的颜色
- `CustomColors` - 自定义颜色数组

### 打印对话框属性
- `Copies` - 打印份数
- `FromPage` - 起始页
- `ToPage` - 结束页
- `Min` - 最小页号
- `Max` - 最大页号
- `PrinterDefault` - 是否使用默认打印机
- `Orientation` - 打印方向

## 方法

- `ShowOpen` - 显示打开文件对话框
- `ShowSave` - 显示保存文件对话框
- `ShowColor` - 显示颜色选择对话框
- `ShowFont` - 显示字体选择对话框
- `ShowPrinter` - 显示打印对话框
- `ShowHelp` - 显示帮助对话框

## 代码示例

### 文件对话框

```vb
Private Sub ShowOpenFileDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "打开文件"
        .CancelError = True
        .Filter = "文本文件 (*.txt)|*.txt|所有文件 (*.*)|*.*"
        .FilterIndex = 1
        .DefaultExt = "txt"
        .InitDir = App.Path
        
        On Error GoTo CancelError
        .ShowOpen
        
        ' 处理选择的文件
        If LenB(.FileName) > 0 Then
            Debug.Print "选择的文件: " & .FileName
        End If
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub

Private Sub ShowSaveFileDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "保存文件"
        .CancelError = True
        .Filter = "文本文件 (*.txt)|*.txt|所有文件 (*.*)|*.*"
        .FilterIndex = 1
        .DefaultExt = "txt"
        .InitDir = App.Path
        
        On Error GoTo CancelError
        .ShowSave
        
        ' 处理选择的文件
        If LenB(.FileName) > 0 Then
            Debug.Print "保存文件为: " & .FileName
        End If
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub

Private Sub ShowMultiSelectFileDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "选择多个文件"
        .CancelError = True
        .Filter = "文本文件 (*.txt)|*.txt|所有文件 (*.*)|*.*"
        .FilterIndex = 1
        .DefaultExt = "txt"
        .InitDir = App.Path
        .Flags = cdlOFNAllowMultiselect Or cdlOFNExplorer
        
        On Error GoTo CancelError
        .ShowOpen
        
        ' 处理选择的文件
        If LenB(.FileName) > 0 Then
            Dim Files() As String
            Files = Split(.FileName, Chr$(0))
            
            If UBound(Files) = 0 Then
                ' 单个文件
                Debug.Print "选择的文件: " & Files(0)
            Else
                ' 多个文件
                Dim Path As String
                Path = Files(0) & "\"
                
                Dim i As Long
                For i = 1 To UBound(Files)
                    Debug.Print "选择的文件 " & i & ": " & Path & Files(i)
                Next i
            End If
        End If
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub
```

### 颜色对话框

```vb
Private Sub ShowColorDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "选择颜色"
        .CancelError = True
        .Color = vbBlack  ' 初始颜色
        
        ' 设置自定义颜色
        .CustomColors = "0xFF0000,0x00FF00,0x0000FF"
        
        On Error GoTo CancelError
        .ShowColor
        
        ' 处理选择的颜色
        Debug.Print "选择的颜色: " & Hex$(.Color)
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub
```

### 字体对话框

```vb
Private Sub ShowFontDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "选择字体"
        .CancelError = True
        
        ' 设置初始字体
        .FontName = "Arial"
        .FontSize = 10
        .FontBold = False
        .FontItalic = False
        
        ' 设置字体大小范围
        .Min = 8
        .Max = 72
        
        On Error GoTo CancelError
        .ShowFont
        
        ' 处理选择的字体
        With Text1.Font
            .Name = CommonDialog1.FontName
            .Size = CommonDialog1.FontSize
            .Bold = CommonDialog1.FontBold
            .Italic = CommonDialog1.FontItalic
            .Strikethrough = CommonDialog1.FontStrikethru
            .Underline = CommonDialog1.FontUnderline
        End With
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub
```

### 打印对话框

```vb
Private Sub ShowPrintDialog()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .DialogTitle = "打印"
        .CancelError = True
        
        ' 设置页面范围
        .FromPage = 1
        .ToPage = 10
        .Min = 1
        .Max = 100
        
        ' 设置打印份数
        .Copies = 1
        
        On Error GoTo CancelError
        .ShowPrinter
        
        ' 处理打印设置
        Debug.Print "打印份数: " & .Copies
        Debug.Print "起始页: " & .FromPage
        Debug.Print "结束页: " & .ToPage
        Debug.Print "打印方向: " & .Orientation
    End With
    Exit Sub
    
CancelError:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    End If
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function ShowDialogSafely(ByVal Dialog As VBCCRCommonDialog, _
                                ByVal DialogType As Long) As Boolean
    On Error GoTo ErrorHandler
    
    Dialog.CancelError = True
    
    Select Case DialogType
        Case 1  ' 打开文件
            Dialog.ShowOpen
        Case 2  ' 保存文件
            Dialog.ShowSave
        Case 3  ' 颜色选择
            Dialog.ShowColor
        Case 4  ' 字体选择
            Dialog.ShowFont
        Case 5  ' 打印
            Dialog.ShowPrinter
    End Select
    
    ShowDialogSafely = True
    Exit Function
    
ErrorHandler:
    If Err.Number = cdlCancel Then
        Debug.Print "用户取消了操作"
    Else
        Debug.Print "显示对话框时出错: " & Err.Description
    End If
    ShowDialogSafely = False
End Function
```

2. 文件过滤器构建
```vb
Private Function BuildFileFilter(ParamArray Filters() As Variant) As String
    Dim Result As String
    
    Dim i As Long
    For i = 0 To UBound(Filters) Step 2
        If i > 0 Then Result = Result & "|"
        Result = Result & Filters(i) & "|" & Filters(i + 1)
    Next i
    
    BuildFileFilter = Result
End Function

' 使用示例
Private Sub ShowOpenWithFilter()
    Dim CommonDialog1 As New VBCCRCommonDialog
    
    With CommonDialog1
        .Filter = BuildFileFilter("文本文件 (*.txt)", "*.txt", _
                                "图片文件", "*.bmp;*.jpg;*.gif", _
                                "所有文件 (*.*)", "*.*")
        .ShowOpen
    End With
End Sub
```

3. 自定义颜色管理
```vb
Private Type ColorManager
    Colors(0 To 15) As Long
    Count As Long
End Type

Private CustomColors As ColorManager

Private Sub InitColorManager()
    With CustomColors
        .Count = 0
        Erase .Colors
    End With
End Sub

Private Sub AddCustomColor(ByVal Color As Long)
    With CustomColors
        If .Count < 16 Then
            .Colors(.Count) = Color
            .Count = .Count + 1
        End If
    End With
End Sub

Private Function GetCustomColorsString() As String
    Dim Result As String
    
    With CustomColors
        Dim i As Long
        For i = 0 To .Count - 1
            If i > 0 Then Result = Result & ","
            Result = Result & Hex$(.Colors(i))
        Next i
    End With
    
    GetCustomColorsString = Result
End Function
```

CommonDialog 类模块提供了方便的标准对话框访问。通过合理的封装和错误处理，可以方便地实现文件选择、颜色选择、字体选择和打印功能。上述示例展示了 CommonDialog 类的多种用法，开发者可以根据具体需求选择合适的实现方式。
