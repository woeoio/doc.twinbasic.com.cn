---
title: 富文本框控件（RichTextBox）
description: 富文本框控件（RichTextBox） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c9def562-82f6-47ea-af86-b77001727bb1'
  PropagateID: 'c9def562-82f6-47ea-af86-b77001727bb1'
  ReservedCode1: '4246a5b0-dd41-4151-910a-c350a3691eb6'
  ReservedCode2: '4246a5b0-dd41-4151-910a-c350a3691eb6'
---

# 富文本框控件（RichTextBox）

封装 RichEdit 系统富文本编辑控件，提供格式化文本编辑、RTF 文件读写、OLE 对象嵌入、打印、查找替换及自动超链接检测等功能。

## 枚举

### RtfLoadSaveFormatConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfLoadSaveFormatRTF | 0 | RTF 格式 |
| RtfLoadSaveFormatText | 1 | 纯文本格式 |
| RtfLoadSaveFormatUnicodeText | 2 | Unicode 纯文本格式 |

### RtfFindOptionConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfFindOptionWholeWord | &H2 | 全字匹配 |
| RtfFindOptionMatchCase | &H4 | 区分大小写 |
| RtfFindOptionNoHighlight | &H8 | 不高亮匹配结果 |
| RtfFindOptionReverse | &H10 | 反向搜索 |

### RtfActionTypeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfActionTypeUnknown | 0 | 未知操作 |
| RtfActionTypeTyping | 1 | 键入操作 |
| RtfActionTypeDelete | 2 | 删除操作 |
| RtfActionTypeDragDrop | 3 | 拖放操作 |
| RtfActionTypeCut | 4 | 剪切操作 |
| RtfActionTypePaste | 5 | 粘贴操作 |
| RtfActionTypeAutoTable | 6 | 自动表格操作 |

### RtfSelAlignmentConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfSelAlignmentLeft | 0 | 左对齐 |
| RtfSelAlignmentRight | 1 | 右对齐 |
| RtfSelAlignmentCenter | 2 | 居中对齐 |
| RtfSelAlignmentJustified | 3 | 两端对齐 |

### RtfSelTypeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfSelTypeEmpty | 0 | 空选区 |
| RtfSelTypeText | 1 | 文本 |
| RtfSelTypeObject | 2 | OLE 对象 |
| RtfSelTypeMultiChar | 4 | 多字符 |
| RtfSelTypeMultiObject | 8 | 多 OLE 对象 |

### RtfTextModeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| RtfTextModeRichText | 0 | 富文本模式 |
| RtfTextModePlainText | 1 | 纯文本模式 |

### CCMousePointerConstants

参见通用枚举。

### OLEDropModeConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

### CCIMEModeConstants

参见通用枚举。

## 属性

### Text

```vb
Property Get Text() As String
Property Let Text(ByVal Value As String)
```

控件中包含的纯文本内容。默认属性。

### TextLength

```vb
Property Get TextLength() As Long
```

文本长度（字符数）。只读。

### TextRTF

```vb
Property Get TextRTF() As String
Property Let TextRTF(ByVal Value As String)
```

包含所有 RTF 代码的 RTF 文本内容。

### SelText

```vb
Property Get SelText() As String
Property Let SelText(ByVal Value As String)
```

当前选区的文本内容。

### SelRTF

```vb
Property Get SelRTF() As String
Property Let SelRTF(ByVal Value As String)
```

当前选区的 RTF 文本（包含所有 RTF 代码）。

### SelStart

```vb
Property Get SelStart() As Long
Property Let SelStart(ByVal Value As Long)
```

选区的起始位置，无选区时为插入点位置。

### SelLength

```vb
Property Get SelLength() As Long
Property Let SelLength(ByVal Value As Long)
```

选区的字符数。

### SelAlignment

```vb
Property Get SelAlignment() As Variant
Property Let SelAlignment(ByVal Value As Variant)
```

段落对齐方式，值为 RtfSelAlignmentConstants 之一。

### SelBold

```vb
Property Get SelBold() As Variant
Property Let SelBold(ByVal Value As Variant)
```

当前选区的粗体格式。

### SelItalic

```vb
Property Get SelItalic() As Variant
Property Let SelItalic(ByVal Value As Variant)
```

当前选区的斜体格式。

### SelStrikethru

```vb
Property Get SelStrikethru() As Variant
Property Let SelStrikethru(ByVal Value As Variant)
```

当前选区的删除线格式。

### SelUnderline

```vb
Property Get SelUnderline() As Variant
Property Let SelUnderline(ByVal Value As Variant)
```

当前选区的下划线格式。

### SelBullet

```vb
Property Get SelBullet() As Variant
Property Let SelBullet(ByVal Value As Variant)
```

当前选区或插入点所在段落是否具有项目符号样式。

### SelCharOffset

```vb
Property Get SelCharOffset() As Variant
Property Let SelCharOffset(ByVal Value As Variant)
```

字符偏移量，确定文本显示在基线上（正常）、基线上方（上标）或基线下方（下标）。

### SelColor

```vb
Property Get SelColor() As Variant
Property Let SelColor(ByVal Value As Variant)
```

当前选区的文本颜色。

### SelBkColor

```vb
Property Get SelBkColor() As Variant
Property Let SelBkColor(ByVal Value As Variant)
```

当前选区的文本背景颜色。

### SelFontName

```vb
Property Get SelFontName() As Variant
Property Let SelFontName(ByVal Value As Variant)
```

当前选区的字体名称。

### SelFontSize

```vb
Property Get SelFontSize() As Variant
Property Let SelFontSize(ByVal Value As Variant)
```

当前选区的字体大小（磅）。

### SelFontCharset

```vb
Property Get SelFontCharset() As Variant
Property Let SelFontCharset(ByVal Value As Variant)
```

当前选区的字体字符集。

### SelProtected

```vb
Property Get SelProtected() As Variant
Property Let SelProtected(ByVal Value As Variant)
```

当前选区文本是否受保护（不可编辑）。

### SelIndent

```vb
Property Get SelIndent() As Variant
Property Let SelIndent(ByVal Value As Variant)
```

左缩进距离。

### SelRightIndent

```vb
Property Get SelRightIndent() As Variant
Property Let SelRightIndent(ByVal Value As Variant)
```

右缩进距离。

### SelHangingIndent

```vb
Property Get SelHangingIndent() As Variant
Property Let SelHangingIndent(ByVal Value As Variant)
```

首行缩进距离（相对于左缩进）。

### SelVisible

```vb
Property Get SelVisible() As Variant
Property Let SelVisible(ByVal Value As Variant)
```

当前选区文本是否可见。

### SelLink

```vb
Property Get SelLink() As Variant
Property Let SelLink(ByVal Value As Variant)
```

当前选区文本是否标记为超链接。

### SelTabCount

```vb
Property Get SelTabCount() As Variant
Property Let SelTabCount(ByVal Value As Variant)
```

当前选区的制表位数量。

### SelTabs

```vb
Property Get SelTabs(ByVal Element As Integer) As Variant
Property Let SelTabs(ByVal Element As Integer, ByVal Value As Variant)
```

当前选区的绝对制表位位置。

### Modified

```vb
Property Get Modified() As Boolean
Property Let Modified(ByVal Value As Boolean)
```

控件内容是否已被修改。设置 Text 属性将重置为 False，任何输入操作将设为 True。

### UndoType

```vb
Property Get UndoType() As RtfActionTypeConstants
```

下一个撤销操作的类型。只读。

### RedoType

```vb
Property Get RedoType() As RtfActionTypeConstants
```

下一个重做操作的类型。只读。

### LeftMargin

```vb
Property Get LeftMargin() As Single
Property Let LeftMargin(ByVal Value As Single)
```

左边距宽度。

### RightMargin

```vb
Property Get RightMargin() As Single
Property Let RightMargin(ByVal Value As Single)
```

右边距宽度。

### ZoomFactor

```vb
Property Get ZoomFactor() As Double
Property Let ZoomFactor(ByVal Value As Double)
```

当前缩放比例。

### VisualStyles

```vb
Property Get VisualStyles() As Boolean
Property Let VisualStyles(ByVal Value As Boolean)
```

是否启用视觉样式。需要 comctl32.dll 6.0 或更高版本。

### Enabled

```vb
Property Get Enabled() As Boolean
Property Let Enabled(ByVal Value As Boolean)
```

是否可用。

### AllowDropFiles

```vb
Property Get AllowDropFiles() As Boolean
Property Let AllowDropFiles(ByVal Value As Boolean)
```

是否允许拖放文件。仅当没有 OLE 放置目标时适用。

### OLEDragDropRTF

```vb
Property Get OLEDragDropRTF() As Boolean
Property Let OLEDragDropRTF(ByVal Value As Boolean)
```

富文本框控件是否可作为 OLE 拖放源和放置目标。

### OLEDragMode

```vb
Property Get OLEDragMode() As VBRUN.OLEDragConstants
Property Let OLEDragMode(ByVal Value As VBRUN.OLEDragConstants)
```

OLE 拖放模式。当 OLEDragDropRTF 为 True 时必须为 Manual。

### OLEDragDropScroll

```vb
Property Get OLEDragDropScroll() As Boolean
Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

OLE 拖放操作期间是否允许滚动。当 OLEDragDropRTF 为 True 时必须为 True。

### OLEDropMode

```vb
Property Get OLEDropMode() As OLEDropModeConstants
Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

OLE 放置目标模式。当 OLEDragDropRTF 为 True 时必须为 None。参见通用枚举。

### MousePointer

```vb
Property Get MousePointer() As CCMousePointerConstants
Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

鼠标指针样式。参见通用枚举。

### MouseIcon

```vb
Property Get MouseIcon() As IPictureDisp
Property Let MouseIcon(ByVal Value As IPictureDisp)
Property Set MouseIcon(ByVal Value As IPictureDisp)
```

自定义鼠标图标。

### MouseTrack

```vb
Property Get MouseTrack() As Boolean
Property Let MouseTrack(ByVal Value As Boolean)
```

是否启用鼠标进入/离开跟踪。

### RightToLeft

```vb
Property Get RightToLeft() As Boolean
Property Let RightToLeft(ByVal Value As Boolean)
```

从右到左显示方向。

### RightToLeftMode

```vb
Property Get RightToLeftMode() As CCRightToLeftModeConstants
Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

从右到左模式。参见通用枚举。

### BorderStyle

```vb
Property Get BorderStyle() As Integer
Property Let BorderStyle(ByVal Value As Integer)
```

边框样式（vbBSNone 或 vbFixedSingle）。

### BackColor

```vb
Property Get BackColor() As OLE_COLOR
Property Let BackColor(ByVal Value As OLE_COLOR)
```

背景颜色。仅当 Enabled 为 True 时适用。

### Locked

```vb
Property Get Locked() As Boolean
Property Let Locked(ByVal Value As Boolean)
```

内容是否锁定为只读。

### HideSelection

```vb
Property Get HideSelection() As Boolean
Property Let HideSelection(ByVal Value As Boolean)
```

控件失去焦点时是否隐藏选区。

### PasswordChar

```vb
Property Get PasswordChar() As String
Property Let PasswordChar(ByVal Value As String)
```

密码字符，用于替代实际字符显示。当 UseSystemPasswordChar 为 True 时此属性无效。

### UseSystemPasswordChar

```vb
Property Get UseSystemPasswordChar() As Boolean
Property Let UseSystemPasswordChar(ByVal Value As Boolean)
```

是否使用默认系统密码字符。此属性优先于 PasswordChar。

### MultiLine

```vb
Property Get MultiLine() As Boolean
Property Let MultiLine(ByVal Value As Boolean)
```

是否允许多行文本。运行时只读。

### MaxLength

```vb
Property Get MaxLength() As Long
Property Let MaxLength(ByVal Value As Long)
```

可输入的最大字符数。

### ScrollBars

```vb
Property Get ScrollBars() As VBRUN.ScrollBarConstants
Property Let ScrollBars(ByVal Value As VBRUN.ScrollBarConstants)
```

滚动条样式。

### WantReturn

```vb
Property Get WantReturn() As Boolean
Property Let WantReturn(ByVal Value As Boolean)
```

按下回车键时是执行默认按钮还是换行。仅适用于多行富文本框且有默认按钮时。

### DisableNoScroll

```vb
Property Get DisableNoScroll() As Boolean
Property Let DisableNoScroll(ByVal Value As Boolean)
```

不需要滚动条时是否禁用而非隐藏。运行时只读。

### AutoURLDetect

```vb
Property Get AutoURLDetect() As Boolean
Property Let AutoURLDetect(ByVal Value As Boolean)
```

是否启用自动超链接检测。

### BulletIndent

```vb
Property Get BulletIndent() As Single
Property Let BulletIndent(ByVal Value As Single)
```

段落使用项目符号时的缩进量。

### SelectionBar

```vb
Property Get SelectionBar() As Boolean
Property Let SelectionBar(ByVal Value As Boolean)
```

是否在左边距添加选择栏，光标变为右上箭头，允许用户选择整行。

### FileName

```vb
Property Get FileName() As String
Property Let FileName(ByVal Value As String)
```

设计时加载到控件中的文件名。

### TextMode

```vb
Property Get TextMode() As RtfTextModeConstants
Property Let TextMode(ByVal Value As RtfTextModeConstants)
```

文本模式（富文本或纯文本）。

### UndoLimit

```vb
Property Get UndoLimit() As Long
Property Let UndoLimit(ByVal Value As Long)
```

撤销队列中可存储的最大操作数。0 表示禁用撤销功能。

### IMEMode

```vb
Property Get IMEMode() As CCIMEModeConstants
Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

输入法编辑器（IME）模式。参见通用枚举。

### AllowOverType

```vb
Property Get AllowOverType() As Boolean
Property Let AllowOverType(ByVal Value As Boolean)
```

是否允许激活改写模式。

### OverTypeMode

```vb
Property Get OverTypeMode() As Boolean
Property Let OverTypeMode(ByVal Value As Boolean)
```

改写模式是否激活。在改写模式下，输入的字符逐个替换已有字符。

### UseCrLf

```vb
Property Get UseCrLf() As Boolean
Property Let UseCrLf(ByVal Value As Boolean)
```

控件是否将每个 Cr 翻译为 CrLf 用于 Text 属性。

### AutoVerbMenu

```vb
Property Get AutoVerbMenu() As Boolean
Property Let AutoVerbMenu(ByVal Value As Boolean)
```

右键单击选中的 OLE 对象时是否显示其动词弹出菜单。

### Font

```vb
Property Get Font() As StdFont
Property Let Font(ByVal NewFont As StdFont)
Property Set Font(ByVal NewFont As StdFont)
```

字体。

### hWnd

```vb
Property Get hWnd() As LongPtr
```

富文本框控件的窗口句柄。

### hWndUserControl

```vb
Property Get hWndUserControl() As LongPtr
```

用户控件的窗口句柄。

### Name

```vb
Property Get Name() As String
```

控件名称。只读。

### Tag

```vb
Property Get Tag() As String
Property Let Tag(ByVal Value As String)
```

自定义数据。

### Parent

```vb
Property Get Parent() As Object
```

父对象。只读。

### Container

```vb
Property Get Container() As Object
Property Set Container(ByVal Value As Object)
```

容器对象。

### Left

```vb
Property Get Left() As Single
Property Let Left(ByVal Value As Single)
```

左边距。

### Top

```vb
Property Get Top() As Single
Property Let Top(ByVal Value As Single)
```

顶边距。

### Width

```vb
Property Get Width() As Single
Property Let Width(ByVal Value As Single)
```

宽度。

### Height

```vb
Property Get Height() As Single
Property Let Height(ByVal Value As Single)
```

高度。

### Visible

```vb
Property Get Visible() As Boolean
Property Let Visible(ByVal Value As Boolean)
```

是否可见。

### ToolTipText

```vb
Property Get ToolTipText() As String
Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

### HelpContextID

```vb
Property Get HelpContextID() As Long
Property Let HelpContextID(ByVal Value As Long)
```

帮助上下文 ID。

### WhatsThisHelpID

```vb
Property Get WhatsThisHelpID() As Long
Property Let WhatsThisHelpID(ByVal Value As Long)
```

"这是什么"帮助 ID。

### DragIcon

```vb
Property Get DragIcon() As IPictureDisp
Property Let DragIcon(ByVal Value As IPictureDisp)
Property Set DragIcon(ByVal Value As IPictureDisp)
```

拖拽图标。

### DragMode

```vb
Property Get DragMode() As Integer
Property Let DragMode(ByVal Value As Integer)
```

拖拽模式。

## 方法

### Copy

```vb
Public Sub Copy()
```

将当前选区复制到剪贴板。

### Cut

```vb
Public Sub Cut()
```

删除当前选区并将文本复制到剪贴板。

### Paste

```vb
Public Sub Paste()
```

将剪贴板内容粘贴到当前插入点位置。

### CanPaste

```vb
Public Function CanPaste(Optional ByVal wFormat As Long) As Boolean
```

确定剪贴板上是否有可粘贴的格式。

### PasteSpecial

```vb
Public Sub PasteSpecial(ByVal wFormat As Long)
```

以指定剪贴板格式粘贴到富文本框。

### PasteSpecialDlg

```vb
Public Sub PasteSpecialDlg()
```

显示"选择性粘贴"对话框。

### Clear

```vb
Public Sub Clear()
```

清除当前选区。

### Undo

```vb
Public Sub Undo()
```

撤销上一次操作（如果有）。

### CanUndo

```vb
Public Function CanUndo() As Boolean
```

确定撤销队列中是否有可撤销的操作。

### StopUndoAction

```vb
Public Sub StopUndoAction()
```

停止控件将后续键入操作收集到当前撤销操作中。

### ResetUndoQueue

```vb
Public Sub ResetUndoQueue()
```

重置撤销队列。

### Redo

```vb
Public Sub Redo()
```

重做下一个操作（如果有）。

### CanRedo

```vb
Public Function CanRedo() As Boolean
```

确定重做队列中是否有可重做的操作。

### GetTextRange

```vb
Public Function GetTextRange(ByVal Min As Long, ByVal Max As Long) As String
```

获取指定范围内的文本。

### Find

```vb
Public Function Find(ByVal Text As String, Optional ByVal Min As Long, Optional ByVal Max As Long = -1, Optional ByVal Options As RtfFindOptionConstants) As Long
```

在富文本框中查找文本，返回找到的字符位置，未找到返回 -1。

### Span

```vb
Public Sub Span(ByVal CharacterSet As String, Optional ByVal Forward As Boolean, Optional ByVal Negate As Boolean)
```

基于指定字符集选中文本。

### UpTo

```vb
Public Sub UpTo(ByVal CharacterSet As String, Optional ByVal Forward As Boolean, Optional ByVal Negate As Boolean)
```

将插入点移动到但不包含指定字符集中的第一个字符。

### SaveFile

```vb
Public Sub SaveFile(ByVal FileName As String, Optional ByVal Format As RtfLoadSaveFormatConstants = RtfLoadSaveFormatRTF, Optional ByVal SelectionOnly As Boolean)
```

将控件内容保存到文件。

### LoadFile

```vb
Public Sub LoadFile(ByVal FileName As String, Optional ByVal Format As RtfLoadSaveFormatConstants = RtfLoadSaveFormatRTF, Optional ByVal SelectionOnly As Boolean)
```

加载 RTF 或文本文件到控件。

### GetLine

```vb
Public Function GetLine(ByVal LineNumber As Long) As String
```

获取指定行的文本。0 表示当前行（包含插入点的行）。

### GetLineCount

```vb
Public Function GetLineCount() As Long
```

获取行数。

### ScrollToLine

```vb
Public Sub ScrollToLine(ByVal LineNumber As Long)
```

滚动以确保指定行可见。

### ScrollToCaret

```vb
Public Sub ScrollToCaret()
```

将插入点滚动到可见区域。

### CharFromPos

```vb
Public Function CharFromPos(ByVal X As Single, ByVal Y As Single) As Long
```

返回距离指定点最近的字符索引。

### GetLineFromChar

```vb
Public Function GetLineFromChar(ByVal CharIndex As Long) As Long
```

获取包含指定字符索引的行号。字符索引 -1 返回当前行。

### GetSelType

```vb
Public Function GetSelType() As Integer
```

确定当前选区类型，返回 RtfSelTypeConstants 标志组合。

### SelPrint

```vb
Public Sub SelPrint(ByVal hDC As LongPtr, Optional ByVal CallStartEndDoc As Boolean = True, Optional ByVal DocName As String = "RICHTEXT", Optional ByVal LeftMargin As Long, Optional ByVal TopMargin As Long, Optional ByVal RightMargin As Long, Optional ByVal BottomMargin As Long)
```

将富文本框中的格式化文本发送到设备进行打印。若无选区则打印全部内容。

### PrintDoc

```vb
Public Sub PrintDoc(ByVal hDC As LongPtr, Optional ByVal CallStartEndDoc As Boolean = True, Optional ByVal DocName As String = "RICHTEXT", Optional ByVal LeftMargin As Long, Optional ByVal TopMargin As Long, Optional ByVal RightMargin As Long, Optional ByVal BottomMargin As Long)
```

将富文本框中的全部格式化文本发送到设备进行打印。

### GetOLEInterface

```vb
Public Function GetOLEInterface() As IUnknown
```

检索 IRichEditOle 对象，用于访问 COM 功能。

### OLEObjectsAdd

```vb
Public Sub OLEObjectsAdd(ByVal LpOleObject As LongPtr)
```

插入一个 OLE 对象到富文本框。

### OLEObjectsAddFromFile

```vb
Public Sub OLEObjectsAddFromFile(ByVal FileName As String, Optional ByVal LinkToFile As Boolean)
```

从文件插入一个 OLE 对象到富文本框。

### OLEObjectsAddFromPicture

```vb
Public Sub OLEObjectsAddFromPicture(ByVal Picture As IPictureDisp, Optional ByVal ClipFormat As Variant)
```

从图片对象插入一个 OLE 对象到富文本框。

### OLEObjectsGet

```vb
Public Function OLEObjectsGet(ByVal IndexObj As Long, Optional ByVal CharPos As Long) As LongPtr
```

检索富文本框中的 OLE 对象。

### OLEObjectsCount

```vb
Public Function OLEObjectsCount() As Long
```

返回当前富文本框中包含的 OLE 对象数量。

### Drag

```vb
Public Sub Drag([ByRef Action As Variant])
```

开始、结束或取消拖放操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder([ByRef Position As Variant])
```

设置控件的 Z 顺序。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动 OLE 拖放操作。

### Refresh

```vb
Public Sub Refresh()
```

强制重绘控件。

## 事件

### Change

```vb
Public Event Change()
```

控件内容发生变化时触发。

### MaxText

```vb
Public Event MaxText()
```

当前文本插入超出最大字符数时触发。

### SelChange

```vb
Public Event SelChange(ByVal SelType As Integer, ByVal SelStart As Long, ByVal SelEnd As Long)
```

当前文本选区发生变化或插入点移动时触发。

### LinkEvent

```vb
Public Event LinkEvent(ByVal wMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr, ByVal LinkStart As Long, ByVal LinkEnd As Long)
```

鼠标点击或悬停在具有超链接格式的文本上时触发。

### DropFiles

```vb
Public Event DropFiles(ByRef FileList As Variant, ByVal X As Single, ByVal Y As Single, ByVal CharPos As Long, ByVal Protected As Boolean, ByRef Cancel As Boolean)
```

用户将文件拖放到控件上时触发。仅当没有 OLE 放置目标且 AllowDropFiles 为 True 时适用。

### ModifyProtected

```vb
Public Event ModifyProtected(ByRef Allow As Boolean, ByVal SelStart As Long, ByVal SelEnd As Long)
```

用户尝试编辑受保护文本时触发。

### Scroll

```vb
Public Event Scroll()
```

重新定位滚动条时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByRef Handled As Boolean, ByVal X As Single, ByVal Y As Single)
```

用户右键单击或按 Shift+F10 时触发。设置 Handled 为 True 可取消默认菜单。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyDown 事件之前触发。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(ByVal KeyCode As Integer, ByRef IsInputKey As Boolean)
```

在 KeyUp 事件之前触发。

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件时触发。

### OLEDragDropDone

```vb
Public Event OLEDragDropDone()
```

富文本框控件完成或取消 OLE 拖放操作后触发。

### OLEGetDropEffect

```vb
Public Event OLEGetDropEffect(ByRef Effect As Long, ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)
```

OLE 拖放操作期间由控件触发，用于指定放置操作的结果效果。

### OLEGetDragEffect

```vb
Public Event OLEGetDragEffect(ByRef AllowedEffects As Long)
```

控件启动 OLE 拖放操作时触发。

### OLEGetContextMenu

```vb
Public Event OLEGetContextMenu(ByVal SelType As Integer, ByVal LpOleObject As LongPtr, ByVal SelStart As Long, ByVal SelEnd As Long, ByRef hMenu As LongPtr)
```

请求提供弹出菜单供控件右键单击时使用。控件在完成后销毁此菜单。

### OLEContextMenuClick

```vb
Public Event OLEContextMenuClick(ByVal ID As Long)
```

用户从 OLEGetContextMenu 事件提供的弹出菜单中选择项时触发。

### OLEDeleteObject

```vb
Public Event OLEDeleteObject(ByVal LpOleObject As LongPtr)
```

OLE 对象即将在控件中被删除时触发。OLE 对象不一定被释放。

### Click

```vb
Public Event Click()
```

在控件上按下并释放鼠标按钮时触发。

### DblClick

```vb
Public Event DblClick()
```

在控件上双击鼠标时触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下按键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放按键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyChar As Integer)
```

按键字符输入时触发。

### MouseDown

```vb
Public Event MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

按下鼠标按钮时触发。

### MouseMove

```vb
Public Event MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

移动鼠标时触发。

### MouseUp

```vb
Public Event MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
```

释放鼠标按钮时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE 拖放操作完成或取消后触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

数据通过 OLE 拖放操作放到控件上时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE 拖放操作期间鼠标移过控件时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE 拖放操作中需要更改鼠标光标时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

放置目标请求 OLEDragStart 期间未提供的数据时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE 拖放操作启动时触发。

## 代码示例

```vb
' 加载 RTF 文件
RichTextBox1.LoadFile "C:\doc.rtf", RtfLoadSaveFormatRTF

' 设置选区格式
RichTextBox1.SelStart = 0
RichTextBox1.SelLength = 10
RichTextBox1.SelBold = True
RichTextBox1.SelColor = vbRed
RichTextBox1.SelFontSize = 14

' 查找文本
Dim pos As Long
pos = RichTextBox1.Find("关键字", 0, -1, RtfFindOptionMatchCase)

' 撤销/重做
If RichTextBox1.CanUndo Then RichTextBox1.Undo
If RichTextBox1.CanRedo Then RichTextBox1.Redo

' 打印
RichTextBox1.SelPrint Printer.hDC

' 插入 OLE 对象
RichTextBox1.OLEObjectsAddFromPicture LoadPicture("C:\image.bmp")

' 保存为纯文本
RichTextBox1.SaveFile "C:\output.txt", RtfLoadSaveFormatText
```