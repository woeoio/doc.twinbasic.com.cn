---
title: 状态栏控件（StatusBar）
description: 状态栏控件（StatusBar） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ac971b66-3c54-4bb7-a392-a43c49b8c6d7'
  PropagateID: 'ac971b66-3c54-4bb7-a392-a43c49b8c6d7'
  ReservedCode1: '9bf91f0c-3c49-4633-812a-df38b5a58f48'
  ReservedCode2: '9bf91f0c-3c49-4633-812a-df38b5a58f48'
---

# 状态栏控件（StatusBar）

提供可自定义的状态栏，支持面板集合、简单/正常模式、大小调整手柄和OLE拖放。不可获得焦点。

## 枚举

### SbrStyleConstants

状态栏样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrStyleNormal | 0 | 正常模式（显示面板） |
| SbrStyleSimple | 1 | 简单模式（仅显示SimpleText） |

### SbrPanelStyleConstants

面板样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrPanelStyleText | 0 | 文本面板 |
| SbrPanelStyleCaps | 1 | Caps Lock状态 |
| SbrPanelStyleNum | 2 | Num Lock状态 |
| SbrPanelStyleIns | 3 | Insert状态 |
| SbrPanelStyleScrl | 4 | Scroll Lock状态 |
| SbrPanelStyleTime | 5 | 时间 |
| SbrPanelStyleDate | 6 | 日期 |
| SbrPanelStyleKana | 7 | Kana状态 |
| SbrPanelStyleHangul | 8 | Hangul状态 |
| SbrPanelStyleJunja | 9 | Junja状态 |
| SbrPanelStyleFinal | 10 | Final状态 |
| SbrPanelStyleKanji | 11 | Kanji状态 |
| SbrPanelStyleHanja | 12 | Hanja状态 |

### SbrPanelBevelConstants

面板斜面样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrPanelBevelFlat | 0 | 平面 |
| SbrPanelBevelInset | 1 | 内凹 |
| SbrPanelBevelRaised | 2 | 凸起 |

### SbrPanelAutoSizeConstants

面板自动调整大小常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrPanelAutoSizeNone | 0 | 不自动调整 |
| SbrPanelAutoSizeSpring | 1 | 弹性调整（填充剩余空间） |
| SbrPanelAutoSizeContent | 2 | 根据内容调整 |

### SbrPanelAlignmentConstants

面板对齐方式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrPanelAlignmentLeft | 0 | 左对齐 |
| SbrPanelAlignmentCenter | 1 | 居中对齐 |
| SbrPanelAlignmentRight | 2 | 右对齐 |
| SbrPanelAlignmentLeftRight | 3 | 从左到右对齐（RTL支持） |

### SbrPanelDTFormatConstants

面板日期时间格式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| SbrPanelDTFormatShort | 0 | 短格式 |
| SbrPanelDTFormatLong | 1 | 长格式 |

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

### Align

```vb
Public Property Get Align() As Integer
Public Property Let Align(ByVal Value As Integer)
```

返回/设置控件在其窗体上的对齐方式。

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

返回/设置拖动模式。

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

### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

返回/设置对象是否能响应用户事件。

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

### RightToLeftLayout

```vb
Public Property Get RightToLeftLayout() As Boolean
Public Property Let RightToLeftLayout(ByVal Value As Boolean)
```

返回/设置从右到左布局。

### RightToLeftMode

```vb
Public Property Get RightToLeftMode() As CCRightToLeftModeConstants
Public Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)
```

返回/设置从右到左模式。参见通用枚举。

### Style

```vb
Public Property Get Style() As SbrStyleConstants
Public Property Let Style(ByVal Value As SbrStyleConstants)
```

返回/设置状态栏样式。

### SimpleText

```vb
Public Property Get SimpleText() As String
Public Property Let SimpleText(ByVal Value As String)
```

返回/设置简单模式下显示的文本。

### AllowSizeGrip

```vb
Public Property Get AllowSizeGrip() As Boolean
Public Property Let AllowSizeGrip(ByVal Value As Boolean)
```

返回/设置是否显示大小调整手柄。

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

返回/设置是否显示工具提示。

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

返回/设置是否启用双缓冲绘制。

### Panels

```vb
Public Property Get Panels() As SbrPanels
```

返回面板集合。

## 方法

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

### IncludesSizeGrip

```vb
Public Function IncludesSizeGrip() As Boolean
```

判断状态栏是否包含大小调整手柄。

### HitTest

```vb
Public Function HitTest(ByVal X As Single, ByVal Y As Single) As SbrPanel
```

返回指定坐标处的面板。

### OLEDrag

```vb
Public Sub OLEDrag()
```

启动OLE拖放操作。

### Drag

```vb
Public Sub Drag(Optional ByRef Action As Variant)
```

开始、结束或取消拖动操作。

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

### StyleChange

```vb
Public Event StyleChange()
```

状态栏样式改变时触发。

### PanelClick

```vb
Public Event PanelClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
```

用户单击面板时触发。

### PanelDblClick

```vb
Public Event PanelDblClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
```

用户双击面板时触发。

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

## 子对象

### SbrPanel 类

状态栏面板对象。

#### SbrPanel 属性

#### Index

```vb
Public Property Get Index() As Long
```

面板在集合中的索引。

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

面板的唯一标识键。

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
Public Property Set Tag(ByVal Value As Variant)
```

额外数据。

#### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

面板文本。

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

#### Style

```vb
Public Property Get Style() As SbrPanelStyleConstants
Public Property Let Style(ByVal Value As SbrPanelStyleConstants)
```

面板样式。

#### Bevel

```vb
Public Property Get Bevel() As SbrPanelBevelConstants
Public Property Let Bevel(ByVal Value As SbrPanelBevelConstants)
```

面板斜面样式。

#### AutoSize

```vb
Public Property Get AutoSize() As SbrPanelAutoSizeConstants
Public Property Let AutoSize(ByVal Value As SbrPanelAutoSizeConstants)
```

面板自动调整大小方式。

#### Alignment

```vb
Public Property Get Alignment() As SbrPanelAlignmentConstants
Public Property Let Alignment(ByVal Value As SbrPanelAlignmentConstants)
```

面板对齐方式。

#### DTFormat

```vb
Public Property Get DTFormat() As SbrPanelDTFormatConstants
Public Property Let DTFormat(ByVal Value As SbrPanelDTFormatConstants)
```

面板日期时间格式。

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

#### MinWidth

```vb
Public Property Get MinWidth() As Single
Public Property Let MinWidth(ByVal Value As Single)
```

最小宽度。

#### Picture

```vb
Public Property Get Picture() As IPictureDisp
Public Property Let Picture(ByVal Value As IPictureDisp)
Public Property Set Picture(ByVal Value As IPictureDisp)
```

面板图片。

#### Enabled

```vb
Public Property Get Enabled() As Boolean
Public Property Let Enabled(ByVal Value As Boolean)
```

是否可用。

#### Visible

```vb
Public Property Get Visible() As Boolean
Public Property Let Visible(ByVal Value As Boolean)
```

是否可见。

#### Bold

```vb
Public Property Get Bold() As Boolean
Public Property Let Bold(ByVal Value As Boolean)
```

是否以粗体显示文本。

#### PictureOnRight

```vb
Public Property Get PictureOnRight() As Boolean
Public Property Let PictureOnRight(ByVal Value As Boolean)
```

图片是否显示在右侧。

#### Left

```vb
Public Property Get Left() As Single
```

面板左边距（只读）。

#### Width

```vb
Public Property Get Width() As Single
Public Property Let Width(ByVal Value As Single)
```

面板宽度。

### SbrPanels 类

状态栏面板集合。

#### SbrPanels 成员

#### NewEnum

```vb
Public Function NewEnum() As IEnumVARIANT
```

枚举器（隐藏）。

#### Add

```vb
Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Text As String, Optional ByVal Style As SbrPanelStyleConstants) As SbrPanel
```

添加面板。

#### Item

```vb
Public Property Get Item(ByVal Index As Variant) As SbrPanel
```

获取面板（默认成员）。

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查面板是否存在。

#### Count

```vb
Public Property Get Count() As Long
```

面板数量。

#### Clear

```vb
Public Sub Clear()
```

清除所有面板。

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

移除面板。

### SbrPanelProperties 类

面板内部属性对象。

#### SbrPanelProperties 属性

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

## 代码示例

### 基本用法

```vb
' 添加状态栏面板
With StatusBar1.Panels
    .Add , "Status", "就绪", sbrText
    .Add , "Caps", , sbrCaps
    .Add , "Time", , sbrTime
End With

' 自定义面板样式
With StatusBar1.Panels(1)
    .AutoSize = sbrSpring
    .Bevel = sbrInset
End With

' 切换到简单模式
StatusBar1.Style = sbrSimple
StatusBar1.SimpleText = "正在加载数据..."

' 处理面板点击
Private Sub StatusBar1_PanelClick(ByVal Panel As SbrPanel, ByVal Button As Integer)
    Debug.Print "点击面板: " & Panel.Key
End Sub
```