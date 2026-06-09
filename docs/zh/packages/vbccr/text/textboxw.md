---
title: 文本框控件（TextBoxW）
description: 文本框控件（TextBoxW） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1bcf687d-1e1e-4015-8f61-94876a67cabf'
  PropagateID: '1bcf687d-1e1e-4015-8f61-94876a67cabf'
  ReservedCode1: '20c81dad-eaae-4cf1-8916-402bdb2690ef'
  ReservedCode2: '20c81dad-eaae-4cf1-8916-402bdb2690ef'
---

# 文本框控件（TextBoxW）

提供增强的文本框，支持Unicode、密码字符、气球提示、网络地址验证、拖放文件和OLE拖放。

## 枚举

### TxtCharacterCasingConstants

字符大小写常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TxtCharacterCasingNormal | 0 | 正常（不转换大小写） |
| TxtCharacterCasingUpper | 1 | 转换为大写 |
| TxtCharacterCasingLower | 2 | 转换为小写 |

### TxtIconConstants

气球提示图标常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TxtIconNone | 0 | 无图标 |
| TxtIconInfo | 1 | 信息图标 |
| TxtIconWarning | 2 | 警告图标 |
| TxtIconError | 3 | 错误图标 |

### TxtNetAddressFormatConstants

网络地址格式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TxtNetAddressFormatString | 0 | 字符串格式 |
| TxtNetAddressFormatHostName | 1 | 主机名格式 |
| TxtNetAddressFormatIPv4 | 2 | IPv4格式 |
| TxtNetAddressFormatIPv6 | 3 | IPv6格式 |

### TxtNetAddressTypeConstants

网络地址类型常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TxtNetAddressTypeNone | 0 | 无 |
| TxtNetAddressTypeIPv4 | 1 | IPv4地址 |
| TxtNetAddressTypeIPv6 | 2 | IPv6地址 |
| TxtNetAddressTypeIPv6WithScope | 3 | 带作用域的IPv6地址 |
| TxtNetAddressTypeDNS | 4 | DNS名称 |
| TxtNetAddressTypeNetBIOS | 5 | NetBIOS名称 |
| TxtNetAddressTypeUnspecified | 6 | 未指定类型 |
| TxtNetAddressTypeNamedPipe | 7 | 命名管道 |
| TxtNetAddressTypeEmailAddress | 8 | 电子邮件地址 |
| TxtNetAddressTypeURL | 9 | URL地址 |
| TxtNetAddressTypeURLKnownSuffix | 10 | 已知后缀的URL |
| TxtNetAddressTypeFriendlyDNS | 11 | 友好DNS名称 |
| TxtNetAddressTypeDNSSimpleLabel | 12 | 单标签DNS名称 |
| TxtNetAddressTypeAddressMask | 13 | 地址掩码 |
| TxtNetAddressTypeFileName | 14 | 文件名 |
| TxtNetAddressTypeAny | 15 | 任意地址 |
| TxtNetAddressTypeAnyLocal | 16 | 任意本地地址 |
| TxtNetAddressTypeIPv4MappedIPv6 | 17 | IPv4映射的IPv6地址 |
| TxtNetAddressTypeIPv4TranslatedIPv6 | 18 | IPv4转换的IPv6地址 |
| TxtNetAddressTypeIPv4TeredoIPv6 | 19 | Teredo IPv6地址 |

## 属性

### Name

```vb
Public Property Get Name() As String
```

返回在代码中标识对象的名称。

### Tag

```vb
Public Property Get Tag() As String
Public Property Let Tag(ByVal Value As String)
```

存储程序所需的额外数据。

### Parent

```vb
Public Property Get Parent() As Object
```

返回对象所在的对象。

### Container

```vb
Public Property Get Container() As Object
Public Property Set Container(ByVal Value As Object)
```

返回/设置对象的容器。

### Left

```vb
Public Property Get Left() As Single
Public Property Let Left(ByVal Value As Single)
```

返回/设置对象与其容器左边缘的距离。

### Top

```vb
Public Property Get Top() As Single
Public Property Let Top(ByVal Value As Single)
```

返回/设置对象与其容器顶边缘的距离。

### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

返回/设置对象的宽度。

### Height

```vb
Public Property Get Height() As Single
Public Property Let Height(ByVal Value As Single)
```

返回/设置对象的高度。

### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

返回/设置对象是否可见。

### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

返回/设置鼠标悬停时显示的提示文本。

### WhatsThisHelpID

```vb
Public Property Get WhatsThisHelpID() As Long
Public Property Let WhatsThisHelpID(ByVal Value As Long)
```

返回/设置关联的上下文帮助ID。

### DragIcon

```vb
Public Property Get DragIcon() As IPictureDisp
Public Property Let DragIcon(ByVal Value As IPictureDisp)
Public Property Set DragIcon(ByVal Value As IPictureDisp)
```

返回/设置拖放操作中显示的图标。

### DragMode

```vb
Public Property Get DragMode() As Integer
Public Property Let DragMode(ByVal Value As Integer)
```

返回/设置拖动模式（手动或自动）。

### hWnd

```vb
Public Property Get hWnd() As LongPtr
```

返回控件句柄。

### hWndUserControl

```vb
Public Property Get hWndUserControl() As LongPtr
```

返回UserControl句柄。

### Font

```vb
Public Property Get Font() As StdFont
Public Property Let Font(ByVal NewFont As StdFont)
Public Property Set Font(ByVal NewFont As StdFont)
```

返回/设置字体。

### VisualStyles

```vb
Public Property Get VisualStyles() As Boolean
Public Property Let VisualStyles(ByVal Value As Boolean)
```

返回/设置是否启用视觉样式。需要comctl32.dll 6.0或更高版本。

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

返回/设置前景色。

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

返回/设置对象是否能响应用户事件。

### AllowDropFiles

```vb
Public Property Get AllowDropFiles() As Boolean
Public Property Let AllowDropFiles(ByVal Value As Boolean)
```

返回/设置是否允许拖放文件。

### OLEDragMode

```vb
Public Property Get OLEDragMode() As Integer
Public Property Let OLEDragMode(ByVal Value As Integer)
```

返回/设置OLE拖动模式。

### OLEDragDropScroll

```vb
Public Property Get OLEDragDropScroll() As Boolean
Public Property Let OLEDragDropScroll(ByVal Value As Boolean)
```

返回/设置OLE拖放时是否自动滚动。

### OLEDropMode

```vb
Public Property Get OLEDropMode() As OLEDropModeConstants
Public Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)
```

返回/设置对象是否可以作为OLE放置目标。

### MousePointer

```vb
Public Property Get MousePointer() As CCMousePointerConstants
Public Property Let MousePointer(ByVal Value As CCMousePointerConstants)
```

返回/设置鼠标悬停时显示的指针类型。参见通用枚举。

### MouseIcon

```vb
Public Property Get MouseIcon() As IPictureDisp
Public Property Let MouseIcon(ByVal Value As IPictureDisp)
Public Property Set MouseIcon(ByVal Value As IPictureDisp)
```

返回/设置自定义鼠标图标。

### MouseTrack

```vb
Public Property Get MouseTrack() As Boolean
Public Property Let MouseTrack(ByVal Value As Boolean)
```

返回/设置是否在鼠标进入或离开控件时触发事件。

### RightToLeft

```vb
Public Property Get RightToLeft() As Boolean
Public Property Let RightToLeft(ByVal Value As Boolean)
```

返回/设置从右到左显示方向。

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

返回/设置从右到左模式。参见通用枚举。

### BorderStyle

```vb
Public Property Get BorderStyle() As Integer
Public Property Let BorderStyle(ByVal Value As Integer)
```

返回/设置边框样式。

### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

返回/设置文本内容。

### Default

```vb
Public Property Get Default() As Boolean
Public Property Let Default(ByVal Value As Boolean)
```

返回/设置是否为默认按钮（按Enter键触发）。

### Alignment

```vb
Public Property Get Alignment() As AlignmentConstants
Public Property Let Alignment(ByVal Value As AlignmentConstants)
```

返回/设置文本对齐方式。

### AllowOnlyNumbers

```vb
Public Property Get AllowOnlyNumbers() As Boolean
Public Property Let AllowOnlyNumbers(ByVal Value As Boolean)
```

返回/设置是否只允许输入数字。

### Locked

```vb
Public Property Get Locked() As Boolean
Public Property Let Locked(ByVal Value As Boolean)
```

返回/设置是否锁定编辑（仍可滚动和选择）。

### HideSelection

```vb
Public Property Get HideSelection() As Boolean
Public Property Let HideSelection(ByVal Value As Boolean)
```

返回/设置控件失去焦点时是否隐藏选中内容的突出显示。

### PasswordChar

```vb
Public Property Get PasswordChar() As String
Public Property Let PasswordChar(ByVal Value As String)
```

返回/设置密码掩码字符。

### UseSystemPasswordChar

```vb
Public Property Get UseSystemPasswordChar() As Boolean
Public Property Let UseSystemPasswordChar(ByVal Value As Boolean)
```

返回/设置是否使用系统默认密码字符。

### MultiLine

```vb
Public Property Get MultiLine() As Boolean
Public Property Let MultiLine(ByVal Value As Boolean)
```

返回/设置是否接受多行文本输入。

### MaxLength

```vb
Public Property Get MaxLength() As Long
Public Property Let MaxLength(ByVal Value As Long)
```

返回/设置最大字符数。0表示不限制。

### ScrollBars

```vb
Public Property Get ScrollBars() As Integer
Public Property Let ScrollBars(ByVal Value As Integer)
```

返回/设置滚动条样式。

### CueBanner

```vb
Public Property Get CueBanner() As String
Public Property Let CueBanner(ByVal Value As String)
```

返回/设置提示横幅文本（控件为空时显示）。

### CueBannerAlways

```vb
Public Property Get CueBannerAlways() As Boolean
Public Property Let CueBannerAlways(ByVal Value As Boolean)
```

返回/设置提示横幅是否始终显示（即使控件有焦点）。

### CharacterCasing

```vb
Public Property Get CharacterCasing() As TxtCharacterCasingConstants
Public Property Let CharacterCasing(ByVal Value As TxtCharacterCasingConstants)
```

返回/设置字符大小写转换方式。

### WantReturn

```vb
Public Property Get WantReturn() As Boolean
Public Property Let WantReturn(ByVal Value As Boolean)
```

返回/设置多行文本框中按Enter键是否插入换行符。

### IMEMode

```vb
Public Property Get IMEMode() As CCIMEModeConstants
Public Property Let IMEMode(ByVal Value As CCIMEModeConstants)
```

返回/设置输入法编辑器模式。参见通用枚举。

### NetAddressValidator

```vb
Public Property Get NetAddressValidator() As Boolean
Public Property Let NetAddressValidator(ByVal Value As Boolean)
```

返回/设置是否启用网络地址验证。

### NetAddressType

```vb
Public Property Get NetAddressType() As TxtNetAddressTypeConstants
Public Property Let NetAddressType(ByVal Value As TxtNetAddressTypeConstants)
```

返回/设置网络地址验证的类型。

### AllowOverType

```vb
Public Property Get AllowOverType() As Boolean
Public Property Let AllowOverType(ByVal Value As Boolean)
```

返回/设置是否允许改写模式。

### OverTypeMode

```vb
Public Property Get OverTypeMode() As Boolean
Public Property Let OverTypeMode(ByVal Value As Boolean)
```

返回/设置是否处于改写模式。

### Modified

```vb
Public Property Get Modified() As Boolean
Public Property Let Modified(ByVal Value As Boolean)
```

返回/设置文本是否已被修改。

### TextLength

```vb
Public Property Get TextLength() As Long
```

返回文本长度。

### SelStart

```vb
Public Property Get SelStart() As Long
Public Property Let SelStart(ByVal Value As Long)
```

返回/设置选中内容的起始位置。

### SelLength

```vb
Public Property Get SelLength() As Long
Public Property Let SelLength(ByVal Value As Long)
```

返回/设置选中内容的长度。

### SelText

```vb
Public Property Get SelText() As String
Public Property Let SelText(ByVal Value As String)
```

返回/设置选中内容的文本。

### LeftMargin

```vb
Public Property Get LeftMargin() As Long
Public Property Let LeftMargin(ByVal Value As Long)
```

返回/设置左边距。

### RightMargin

```vb
Public Property Get RightMargin() As Long
Public Property Let RightMargin(ByVal Value As Long)
```

返回/设置右边距。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

### Copy

```vb
Public Sub Copy()
```

将选中内容复制到剪贴板。

### Cut

```vb
Public Sub Cut()
```

将选中内容剪切到剪贴板。

### Paste

```vb
Public Sub Paste()
```

将剪贴板内容粘贴到控件。

### Clear

```vb
Public Sub Clear()
```

清除所有文本。

### Undo

```vb
Public Sub Undo()
```

撤销上一次操作。

### CanUndo

```vb
Public Function CanUndo() As Boolean
```

返回是否可以撤销。

### ResetUndoQueue

```vb
Public Sub ResetUndoQueue()
```

重置撤销队列。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动OLE拖放操作。

### GetLine

```vb
Public Function GetLine(ByVal LineIndex As Long) As String
```

获取指定行的文本内容。

### GetLineCount

```vb
Public Function GetLineCount() As Long
```

获取文本行数。

### ScrollToLine

```vb
Public Sub ScrollToLine(ByVal LineIndex As Long)
```

滚动到指定行。

### ScrollToCaret

```vb
Public Sub ScrollToCaret()
```

滚动到光标位置。

### CharFromPos

```vb
Public Function CharFromPos(ByVal X As Long, ByVal Y As Long) As Long
```

根据坐标获取字符索引。

### GetLineFromChar

```vb
Public Function GetLineFromChar(ByVal CharIndex As Long) As Long
```

根据字符索引获取行号。

### ShowBalloonTip

```vb
Public Sub ShowBalloonTip(ByVal Title As String, ByVal Text As String, ByVal Icon As TxtIconConstants)
```

显示气球提示。

### HideBalloonTip

```vb
Public Sub HideBalloonTip()
```

隐藏气球提示。

### ValidateNetAddress

```vb
Public Function ValidateNetAddress() As Long
```

验证网络地址，返回0表示有效。

### ShowNetAddressErrorTip

```vb
Public Sub ShowNetAddressErrorTip()
```

根据验证结果显示网络地址错误提示。

### NetAddressFormat

```vb
Public Property Get NetAddressFormat() As TxtNetAddressFormatConstants
```

返回网络地址格式。

### NetAddressString

```vb
Public Property Get NetAddressString() As String
```

返回网络地址字符串。

### NetAddressPortNumber

```vb
Public Property Get NetAddressPortNumber() As Long
```

返回网络地址端口号。

### NetAddressPrefixLength

```vb
Public Property Get NetAddressPrefixLength() As Long
```

返回网络地址前缀长度。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

### SetFocus

```vb
Public Sub SetFocus()
```

将焦点移至控件。

### ZOrder

```vb
Public Sub ZOrder(Optional ByRef Position As Variant)
```

设置Z顺序。

## 事件

### Click

```vb
Public Event Click()
```

用户单击控件时触发。

### DblClick

```vb
Public Event DblClick()
```

用户双击控件时触发。

### Change

```vb
Public Event Change()
```

文本内容改变时触发。

### MaxText

```vb
Public Event MaxText()
```

输入文本超过MaxLength限制时触发。

### DropFiles

```vb
Public Event DropFiles(ByVal Files As Variant)
```

拖放文件到控件时触发。Files为文件路径数组。

### Scroll

```vb
Public Event Scroll()
```

文本滚动时触发。

### ContextMenu

```vb
Public Event ContextMenu(ByVal X As Single, ByVal Y As Single, ByRef Handled As Boolean)
```

请求上下文菜单时触发。Handled为True时取消默认菜单。

### PreviewKeyDown

```vb
Public Event PreviewKeyDown(KeyCode As Integer, Shift As Integer)
```

在KeyDown事件之前触发，用于预处理键盘输入。

### PreviewKeyUp

```vb
Public Event PreviewKeyUp(KeyCode As Integer, Shift As Integer)
```

在KeyUp事件之前触发。

### KeyDown

```vb
Public Event KeyDown(KeyCode As Integer, Shift As Integer)
```

按下键盘按键时触发。

### KeyUp

```vb
Public Event KeyUp(KeyCode As Integer, Shift As Integer)
```

释放键盘按键时触发。

### KeyPress

```vb
Public Event KeyPress(KeyAscii As Integer)
```

按下并释放ANSI键时触发。

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

### MouseEnter

```vb
Public Event MouseEnter()
```

鼠标进入控件区域时触发。

### MouseLeave

```vb
Public Event MouseLeave()
```

鼠标离开控件区域时触发。

### OLECompleteDrag

```vb
Public Event OLECompleteDrag(Effect As Long)
```

OLE拖放操作完成时触发。

### OLEDragDrop

```vb
Public Event OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
```

OLE拖放操作放置时触发。

### OLEDragOver

```vb
Public Event OLEDragOver(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single, State As Integer)
```

OLE拖放操作悬停时触发。

### OLEGiveFeedback

```vb
Public Event OLEGiveFeedback(Effect As Long, DefaultCursors As Boolean)
```

OLE拖放操作给反馈时触发。

### OLESetData

```vb
Public Event OLESetData(Data As DataObject, DataFormat As Integer)
```

OLE拖放操作设置数据时触发。

### OLEStartDrag

```vb
Public Event OLEStartDrag(Data As DataObject, AllowedEffects As Long)
```

OLE拖放操作开始时触发。

## 代码示例

### 基本用法

```vb
' 设置多行文本框
With TextBoxW1
    .MultiLine = True
    .ScrollBars = 3
    .MaxLength = 5000
    .WantReturn = True
    .CueBanner = "请输入内容..."
End With

' 使用密码框
With TextBoxW1
    .PasswordChar = "*"
    .UseSystemPasswordChar = True
    .MaxLength = 20
End With

' 网络地址验证
TextBoxW1.NetAddressValidator = True
TextBoxW1.NetAddressType = TxtNetAddressTypeURL

Private Sub Command1_Click()
    If TextBoxW1.ValidateNetAddress() = 0 Then
        MsgBox "地址有效: " & TextBoxW1.NetAddressString
    Else
        TextBoxW1.ShowNetAddressErrorTip
    End If
End Sub

' 气球提示
TextBoxW1.ShowBalloonTip "输入错误", "请输入有效的邮箱地址", TxtIconError

' 拖放文件
Private Sub TextBoxW1_DropFiles(ByVal Files As Variant)
    Dim i As Long
    For i = LBound(Files) To UBound(Files)
        Debug.Print "文件: " & Files(i)
    Next i
End Sub
```