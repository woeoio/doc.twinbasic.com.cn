# RichTextBox 控件 (VBCCRRichTextBox)

VBCCRRichTextBox 控件是一个富文本编辑控件，支持多种文本格式、样式和图片。它提供了比标准文本框更强大的文本编辑和格式化功能。

## 属性

### 关键属性

- `Text`: 获取或设置纯文本内容
- `TextRTF`: 获取或设置 RTF 格式文本
- `SelText`: 选中的文本
- `SelStart`: 选择的起始位置
- `SelLength`: 选择的长度
- `SelColor`: 选中文本的颜色
- `SelBold`: 选中文本是否加粗
- `SelItalic`: 选中文本是否斜体
- `SelUnderline`: 选中文本是否下划线
- `SelStrikeThru`: 选中文本是否删除线
- `SelFontName`: 选中文本的字体名称
- `SelFontSize`: 选中文本的字体大小
- `SelAlignment`: 选中文本的对齐方式
- `SelIndent`: 选中文本的缩进
- `SelHangingIndent`: 选中文本的悬挂缩进
- `SelBullet`: 选中文本是否为项目符号
- `MultiLine`: 是否支持多行
- `ScrollBars`: 滚动条设置
- `Locked`: 是否只读
- `AutoURLDetect`: 是否自动检测URL
- `TextMode`: 文本模式
- `HideSelection`: 失去焦点时是否隐藏选择
- `MaxLength`: 最大文本长度

### 文件格式常量 (RtfLoadSaveFormatConstants)

用于 `LoadFile` 和 `SaveFile` 方法的 `Format` 参数:

- `RtfLoadSaveFormatRTF` (0) - RTF 格式
- `RtfLoadSaveFormatText` (1) - 纯文本格式
- `RtfLoadSaveFormatUnicodeText` (2) - Unicode 文本格式

### 对齐方式常量 (RtfSelAlignmentConstants)

用于 `SelAlignment` 属性:

- `RtfSelAlignmentLeft` (0) - 左对齐
- `RtfSelAlignmentRight` (1) - 右对齐
- `RtfSelAlignmentCenter` (2) - 居中对齐
- `RtfSelAlignmentJustified` (3) - 两端对齐

### 文本模式常量 (RtfTextModeConstants)

用于 `TextMode` 属性:

- `RtfTextModeRichText` (0) - 富文本模式
- `RtfTextModePlainText` (1) - 纯文本模式

## 方法

### 主要方法

- `LoadFile(FileName As String, [Format])`: 加载文件
- `SaveFile(FileName As String, [Format], [SelectionOnly])`: 保存文件
- `Find(Text As String, [Start], [End], [Options])`: 查找文本
- `GetTextRange(StartPos As Long, EndPos As Long, [Format As Long]) As String`: 获取文本范围
- `SelPrint(hdc As Long)`: 打印选中的文本
- `PrintDoc(hdc As Long, [StartPage], [EndPage])`: 打印文档
- `Span()`: 扩展选择到指定字符
- `UpTo()`: 扩展选择到指定字符之前

### 撤销和重做

- `Undo()`: 撤销操作
- `CanUndo()`: 返回是否可以撤销
- `StopUndoAction()`: 停止撤销动作
- `ResetUndoQueue()`: 重置撤销队列
- `CanPaste([Format As Long])`: 返回是否可以粘贴
- `Paste()`: 粘贴内容
- `PasteSpecial()`: 特殊粘贴
- `PasteSpecialDlg()`: 显示特殊粘贴对话框

### OLE 拖放

- `OLEDrag()`: 开始 OLE 拖放操作

## 事件

- `Change()`: 内容改变时触发
- `SelChange()`: 选择改变时触发
- `Click()`: 点击时触发
- `DblClick()`: 双击时触发
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `LinkEvent()`: 链接事件
- `MaxText()`: 达到最大文本长度时触发
- `ModifyProtected()`: 修改受保护文本时触发
- `DropFiles()`: 文件拖放时触发
- `ContextMenu()`: 右键菜单时触发
- `OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)`
- `OLEStartDrag(Data As DataObject, AllowedEffects As Long)`
- `OLES etData(Data As DataObject, DataFormat As Integer)`
- `OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)`
- `OLECompleteDrag(Effect As Long)`
- `MouseEnter()`: 鼠标进入控件时触发
- `MouseLeave()`: 鼠标离开控件时触发

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    With RichTextBox1
        .MultiLine = True
        .ScrollBars = vbVertical
        .AutoURLDetect = True
        .Text = "欢迎使用富文本编辑器"
    End With
End Sub
```

### 文本格式化

```vb
Private Sub FormatText()
    With RichTextBox1
        ' 设置选中文本的格式
        .SelStart = 0
        .SelLength = 10
        .SelBold = True
        .SelColor = vbBlue
        .SelFontSize = 14

        ' 添加新文本并设置格式
        .SelStart = .TextLength
        .SelText = vbCrLf & "新段落"
        .SelItalic = True
        .SelColor = vbRed
        .SelUnderline = True
    End With
End Sub
```

### 查找和替换

```vb
Private Sub FindAndReplace(ByVal FindText As String, ByVal ReplaceText As String)
    Dim StartPos As Long
    Dim FindLen As Long

    With RichTextBox1
        StartPos = 0
        FindLen = Len(FindText)

        Do
            StartPos = .Find(FindText, StartPos, -1, 0)
            If StartPos = -1 Then Exit Do

            .SelStart = StartPos
            .SelLength = FindLen
            .SelText = ReplaceText

            StartPos = StartPos + Len(ReplaceText)
        Loop
    End With
End Sub
```

### 文件操作

```vb
Private Sub LoadDocument()
    With cdOpen
        .Filter = "RTF 文档|*.rtf|文本文档|*.txt|所有文件|*.*"
        .ShowOpen

        If .FileName <> "" Then
            On Error GoTo ErrorHandler
            Select Case Right$(.FileName,4)
                Case ".rtf"
                    RichTextBox1.LoadFile .FileName, RtfLoadSaveFormatRTF
                Case Else
                    RichTextBox1.LoadFile .FileName, RtfLoadSaveFormatText
            End Select
        End If
    End With
    Exit Sub

ErrorHandler:
    MsgBox "加载文件错误: " & Err.Description
End Sub

Private Sub SaveDocument()
    With cdSave
        .Filter = "RTF 文档|*.rtf|文本文档|*.txt|所有文件|*.*"
        .ShowSave

        If .FileName <> "" Then
            On Error GoTo ErrorHandler
            Select Case Right$(.FileName,4)
                Case ".rtf"
                    RichTextBox1.SaveFile .FileName, RtfLoadSaveFormatRTF
                Case Else
                    RichTextBox1.SaveFile .FileName, RtfLoadSaveFormatText
            End Select
        End If
    End With
    Exit Sub

ErrorHandler:
    MsgBox "保存文件错误: " & Err.Description
End Sub
```

## 常见用例

### 简单文本编辑器

```vb
Private Sub CreateTextEditor()
    ' 设置编辑器基本功能
    With RichTextBox1
        .MultiLine = True
        .ScrollBars = vbBoth
        .AutoURLDetect = True
        .HideSelection = False
    End With
End Sub

Private Sub UpdateToolbar()
    With RichTextBox1
        ' 更新工具栏按钮状态
        cmdBold.Value = .SelBold
        cmdItalic.Value = .SelItalic
        cmdUnderline.Value = .SelUnderline

        ' 更新字体组合框
        cmbFontName.Text = .SelFontName
        cmbFontSize.Text = .SelFontSize
    End With
End Sub
```

### 语法高亮

```vb
Private Sub HighlightSyntax()
    Dim Keywords() As String
    Keywords = Split("Function,Sub,Dim,Private,Public,End,If,Then,Else,For,Next", ",")

    Dim i As Long
    For i = 0 To UBound(Keywords)
        Dim pos As Long
        pos = 0

        Do
            pos = RichTextBox1.Find(Keywords(i), pos, -1, 0)
            If pos = -1 Then Exit Do

            With RichTextBox1
                .SelStart = pos
                .SelLength = Len(Keywords(i))
                .SelColor = vbBlue
                .SelBold = True
            End With

            pos = pos + Len(Keywords(i))
        Loop
    Next i
End Sub
```

### 自动完成

```vb
Private Sub RichTextBox1_KeyPress(KeyAscii As Integer)
    If KeyAscii = vbKeySpace Then
        Dim LastWord As String
        LastWord = GetLastWord()

        If Len(LastWord) > 2 Then
            ShowAutoComplete LastWord
        End If
    End If
End Sub

Private Function GetLastWord() As String
    Dim pos As Long
    pos = RichTextBox1.SelStart - 1

    While pos >= 0 And Mid$(RichTextBox1.Text, pos + 1, 1) <> " " And _
          Mid$(RichTextBox1.Text, pos + 1, 1) <> vbCr
        GetLastWord = Mid$(RichTextBox1.Text, pos + 1, 1) & GetLastWord
        pos = pos - 1
    Wend
End Function
```

### 撤销和重做

```vb
Private Sub ManageUndoRedo()
    ' 更新撤销/重做按钮状态
    cmdUndo.Enabled = RichTextBox1.CanUndo
    cmdRedo.Enabled = False  ' VBCCR RichTextBox 不支持 Redo
End Sub

Private Sub cmdUndo_Click()
    If RichTextBox1.CanUndo Then
        RichTextBox1.Undo
    End If
End Sub

Private Sub RichTextBox1_Change()
    ManageUndoRedo
End Sub
```

### 字体格式化

```vb
Private Sub ApplyFont(ByVal FontName As String, ByVal FontSize As Long)
    With RichTextBox1
        .SelFontName = FontName
        .SelFontSize = FontSize
    End With
End Sub

Private Sub ApplyBold()
    RichTextBox1.SelBold = Not RichTextBox1.SelBold
End Sub

Private Sub ApplyItalic()
    RichTextBox1.SelItalic = Not RichTextBox1.SelItalic
End Sub

Private Sub ApplyUnderline()
    RichTextBox1.SelUnderline = Not RichTextBox1.SelUnderline
End Sub

Private Sub ApplyColor(ByVal Color As Long)
    RichTextBox1.SelColor = Color
End Sub

Private Sub ApplyAlignment(ByVal Alignment As Long)
    RichTextBox1.SelAlignment = Alignment
End Sub
```

### 打印功能

```vb
Private Sub PrintDocument()
    On Error GoTo ErrorHandler

    With cdPrint
        .ShowPrinter
        If .hDC <> 0 Then
            RichTextBox1.PrintDoc .hDC
        End If
    End With
    Exit Sub

ErrorHandler:
    MsgBox "打印错误: " & Err.Description
End Sub

Private Sub PrintSelectedText()
    On Error GoTo ErrorHandler

    With cdPrint
        .ShowPrinter
        If .hDC <> 0 Then
            RichTextBox1.SelPrint .hDC
        End If
    End With
    Exit Sub

ErrorHandler:
    MsgBox "打印错误: " & Err.Description
End Sub
```

## 最佳实践

1. 文件操作
```vb
Private Sub SafeFileOperation()
    On Error GoTo ErrorHandler

    RichTextBox1.LoadFile "document.rtf", RtfLoadSaveFormatRTF
    Exit Sub

ErrorHandler:
    Select Case Err.Number
        Case 75  ' 路径/文件访问错误
            MsgBox "无法访问文件,请检查文件是否存在", vbExclamation
        Case 52  ' 坏文件名或编号
            MsgBox "文件名无效", vbExclamation
        Case Else
            MsgBox "错误 " & Err.Number & ": " & Err.Description
    End Select
End Sub
```

2. 文本选择
```vb
Private Sub SelectWord()
    Dim StartPos As Long
    Dim EndPos As Long

    With RichTextBox1
        StartPos = .SelStart

        ' 查找单词边界
        While StartPos > 0 And Mid$(.Text, StartPos, 1) <> " " And _
              Mid$(.Text, StartPos, 1) <> vbCr
            StartPos = StartPos - 1
        Wend

        EndPos = .SelStart
        While EndPos < Len(.Text) And Mid$(.Text, EndPos + 1, 1) <> " " And _
              Mid$(.Text, EndPos + 1, 1) <> vbCr
            EndPos = EndPos + 1
        Wend

        .SelStart = StartPos
        .SelLength = EndPos - StartPos
    End With
End Sub
```

3. 内存优化
```vb
Private Sub OptimizeForLargeText()
    ' 处理大文本时分段加载
    Const CHUNK_SIZE As Long = 1000000 ' 1MB

    RichTextBox1.Text = ""

    Open "largefile.txt" For Input As #1
    Do While Not EOF(1)
        Dim TextLine As String
        Line Input #1, TextLine

        RichTextBox1.SelStart = RichTextBox1.TextLength
        RichTextBox1.SelText = TextLine & vbCrLf

        DoEvents
    Loop
    Close #1
End Sub
```

## 其他提示

- 使用 TextRTF 属性保存和加载富文本格式
- 实现自动保存功能防止数据丢失
- 提供搜索和替换功能
- 支持多种文本格式(RTF, Text)
- 实现打印功能
- 处理编码问题
- 提供状态信息
- 支持快捷键
- 使用 AutoURLDetect 自动检测链接
- 在 Form_Unload 中保存未完成的更改
- 使用 CanUndo 和 CanPaste 管理命令状态
- 适当使用 SelAlignment 实现段落对齐
- 使用 SelBullet 创建项目符号列表
