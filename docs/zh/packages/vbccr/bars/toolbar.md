---
title: 工具栏控件（ToolBar）
description: 工具栏控件（ToolBar） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a1e8d49a-eb57-455c-979d-da33709eecc5'
  PropagateID: 'a1e8d49a-eb57-455c-979d-da33709eecc5'
  ReservedCode1: '57cde458-c180-4320-9fcf-5559eb1f3320'
  ReservedCode2: '57cde458-c180-4320-9fcf-5559eb1f3320'
---

# 工具栏控件（ToolBar）

提供可自定义的工具栏，支持扁平/标准样式、下拉按钮、按钮菜单、用户自定义和OLE拖放。

## 枚举

### TbrStyleConstants

工具栏样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbrStyleStandard | 0 | 标准工具栏样式 |
| TbrStyleFlat | 1 | 扁平工具栏样式 |

### TbrTextAlignConstants

按钮文本对齐方式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbrTextAlignBottom | 0 | 文本显示在按钮底部 |
| TbrTextAlignRight | 1 | 文本显示在按钮右侧 |

### TbrOrientationConstants

工具栏方向常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbrOrientationHorizontal | 0 | 水平方向 |
| TbrOrientationVertical | 1 | 垂直方向 |

### TbrButtonStyleConstants

按钮样式常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbrButtonDefault | 0 | 默认按钮样式 |
| TbrButtonCheck | 1 | 复选按钮样式 |
| TbrButtonCheckGroup | 2 | 复选组按钮样式（同组互斥） |
| TbrButtonSeparator | 3 | 分隔符 |
| TbrButtonDropDown | 4 | 下拉按钮样式 |
| TbrButtonWholeDropDown | 5 | 整体下拉按钮样式 |

### TbrButtonValueConstants

按钮状态值常量。

| 常量 | 值 | 说明 |
|------|-----|------|
| TbrButtonUnpressed | 0 | 未按下状态 |
| TbrButtonPressed | 1 | 按下状态 |

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

### ImageList

```vb
Public Property Get ImageList() As Variant
Public Property Let ImageList(ByVal Value As Variant)
Public Property Set ImageList(ByVal Value As Variant)
```

返回/设置关联的ImageList控件。可以是对象引用、字符串键名或LongPtr句柄。

### DisabledImageList

```vb
Public Property Get DisabledImageList() As Variant
Public Property Let DisabledImageList(ByVal Value As Variant)
Public Property Set DisabledImageList(ByVal Value As Variant)
```

返回/设置按钮禁用状态使用的ImageList控件。

### HotImageList

```vb
Public Property Get HotImageList() As Variant
Public Property Let HotImageList(ByVal Value As Variant)
Public Property Set HotImageList(ByVal Value As Variant)
```

返回/设置按钮热点状态使用的ImageList控件。

### PressedImageList

```vb
Public Property Get PressedImageList() As Variant
Public Property Let PressedImageList(ByVal Value As Variant)
Public Property Set PressedImageList(ByVal Value As Variant)
```

返回/设置按钮按下状态使用的ImageList控件。

### BackColor

```vb
Public Property Get BackColor() As OLE_COLOR
Public Property Let BackColor(ByVal Value As OLE_COLOR)
```

返回/设置背景色。

### Style

```vb
Public Property Get Style() As TbrStyleConstants
Public Property Let Style(ByVal Value As TbrStyleConstants)
```

返回/设置工具栏样式。

### TextAlignment

```vb
Public Property Get TextAlignment() As TbrTextAlignConstants
Public Property Let TextAlignment(ByVal Value As TbrTextAlignConstants)
```

返回/设置按钮文本对齐方式。

### Orientation

```vb
Public Property Get Orientation() As TbrOrientationConstants
Public Property Let Orientation(ByVal Value As TbrOrientationConstants)
```

返回/设置工具栏方向。

### Divider

```vb
Public Property Get Divider() As Boolean
Public Property Let Divider(ByVal Value As Boolean)
```

返回/设置是否显示分隔线。

### ShowTips

```vb
Public Property Get ShowTips() As Boolean
Public Property Let ShowTips(ByVal Value As Boolean)
```

返回/设置是否显示工具提示。

### Wrappable

```vb
Public Property Get Wrappable() As Boolean
Public Property Let Wrappable(ByVal Value As Boolean)
```

返回/设置按钮是否自动换行。

### AllowCustomize

```vb
Public Property Get AllowCustomize() As Boolean
Public Property Let AllowCustomize(ByVal Value As Boolean)
```

返回/设置是否允许用户自定义工具栏。

### AltDrag

```vb
Public Property Get AltDrag() As Boolean
Public Property Let AltDrag(ByVal Value As Boolean)
```

返回/设置是否允许Alt+拖动来自定义工具栏。

### DoubleBuffer

```vb
Public Property Get DoubleBuffer() As Boolean
Public Property Let DoubleBuffer(ByVal Value As Boolean)
```

返回/设置是否启用双缓冲绘制。

### ButtonHeight

```vb
Public Property Get ButtonHeight() As Single
Public Property Let ButtonHeight(ByVal Value As Single)
```

返回/设置按钮高度。

### ButtonWidth

```vb
Public Property Get ButtonWidth() As Single
Public Property Let ButtonWidth(ByVal Value As Single)
```

返回/设置按钮宽度。

### MinButtonWidth

```vb
Public Property Get MinButtonWidth() As Single
Public Property Let MinButtonWidth(ByVal Value As Single)
```

返回/设置最小按钮宽度。

### MaxButtonWidth

```vb
Public Property Get MaxButtonWidth() As Single
Public Property Let MaxButtonWidth(ByVal Value As Single)
```

返回/设置最大按钮宽度。

### InsertMarkColor

```vb
Public Property Get InsertMarkColor() As OLE_COLOR
Public Property Let InsertMarkColor(ByVal Value As OLE_COLOR)
```

返回/设置插入标记颜色。

### Transparent

```vb
Public Property Get Transparent() As Boolean
Public Property Let Transparent(ByVal Value As Boolean)
```

返回/设置工具栏是否透明。

### HotTracking

```vb
Public Property Get HotTracking() As Boolean
Public Property Let HotTracking(ByVal Value As Boolean)
```

返回/设置是否启用热点跟踪。

### HideClippedButtons

```vb
Public Property Get HideClippedButtons() As Boolean
Public Property Let HideClippedButtons(ByVal Value As Boolean)
```

返回/设置是否隐藏被裁剪的按钮。

### AnchorHot

```vb
Public Property Get AnchorHot() As Boolean
Public Property Let AnchorHot(ByVal Value As Boolean)
```

返回/设置是否锚定热点。

### MaxTextRows

```vb
Public Property Get MaxTextRows() As Integer
Public Property Let MaxTextRows(ByVal Value As Integer)
```

返回/设置最大文本行数。

### Buttons

```vb
Public Property Get Buttons() As TbrButtons
```

返回按钮集合。

## 方法

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

### Refresh

```vb
Public Sub Refresh()
```

强制完全重绘对象。

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

### Resize

```vb
Public Event Resize()
```

控件大小改变时触发。

### BeginCustomization

```vb
Public Event BeginCustomization()
```

开始自定义工具栏时触发。

### InitCustomizationDialog

```vb
Public Event InitCustomizationDialog(ByVal hDlg As LongPtr, ByRef HideHelpButton As Boolean)
```

初始化自定义对话框时触发。hDlg为对话框句柄，HideHelpButton控制是否隐藏帮助按钮。

### CustomizationChange

```vb
Public Event CustomizationChange()
```

自定义工具栏发生改变时触发。

### ResetCustomizations

```vb
Public Event ResetCustomizations(ByRef CloseDialog As Boolean)
```

重置自定义时触发。CloseDialog控制是否关闭对话框。

### CustomizationHelp

```vb
Public Event CustomizationHelp()
```

用户在自定义对话框中点击帮助时触发。

### EndCustomization

```vb
Public Event EndCustomization()
```

结束自定义工具栏时触发。

### ButtonClick

```vb
Public Event ButtonClick(ByVal Button As TbrButton)
```

用户单击按钮时触发。

### ButtonDrag

```vb
Public Event ButtonDrag(ByVal Button As TbrButton, ByVal MouseButton As Integer)
```

用户拖动按钮时触发。

### ButtonHotChanged

```vb
Public Event ButtonHotChanged(ByVal Button As TbrButton, ByVal Hot As Boolean)
```

按钮热点状态改变时触发。

### ButtonDropDown

```vb
Public Event ButtonDropDown(ByVal Button As TbrButton)
```

下拉按钮被点击时触发。

### ButtonMenuClick

```vb
Public Event ButtonMenuClick(ByVal ButtonMenu As TbrButtonMenu)
```

下拉菜单项被点击时触发。

### ButtonMenuClick2

```vb
Public Event ButtonMenuClick2(ByVal Button As TbrButton, ByVal ID As Long)
```

下拉菜单项被点击时触发，同时提供所属按钮和菜单项ID。

### ButtonMouseEnter

```vb
Public Event ButtonMouseEnter(ByVal Button As TbrButton)
```

鼠标进入按钮区域时触发。

### ButtonMouseLeave

```vb
Public Event ButtonMouseLeave(ByVal Button As TbrButton)
```

鼠标离开按钮区域时触发。

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

### TbrButton 类

工具栏按钮对象。

#### TbrButton 属性

#### Index

```vb
Public Property Get Index() As Long
```

按钮在集合中的索引。

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

按钮的唯一标识键。

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

额外数据。

#### ID

```vb
Public Property Get ID() As Long
```

按钮ID。

#### Caption

```vb
Public Property Get Caption() As String
Public Property Let Caption(ByVal Value As String)
```

按钮标题。

#### Style

```vb
Public Property Get Style() As TbrButtonStyleConstants
Public Property Let Style(ByVal Value As TbrButtonStyleConstants)
```

按钮样式。

#### Image

```vb
Public Property Get Image() As Variant
Public Property Let Image(ByVal Value As Variant)
```

按钮图像。

#### ImageIndex

```vb
Public Property Get ImageIndex() As Long
```

图像索引。

#### ToolTipText

```vb
Public Property Get ToolTipText() As String
Public Property Let ToolTipText(ByVal Value As String)
```

工具提示文本。

#### Description

```vb
Public Property Get Description() As String
Public Property Let Description(ByVal Value As String)
```

按钮描述。

#### Value

```vb
Public Property Get Value() As TbrButtonValueConstants
Public Property Let Value(ByVal Value As TbrButtonValueConstants)
```

按钮值（按下/未按下状态）。

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

#### MixedState

```vb
Public Property Get MixedState() As Boolean
Public Property Let MixedState(ByVal Value As Boolean)
```

是否处于混合状态（三态复选框）。

#### HighLighted

```vb
Public Property Get HighLighted() As Boolean
Public Property Let HighLighted(ByVal Value As Boolean)
```

是否高亮显示。

#### NoImage

```vb
Public Property Get NoImage() As Boolean
Public Property Let NoImage(ByVal Value As Boolean)
```

是否不显示图像。

#### NoPrefix

```vb
Public Property Get NoPrefix() As Boolean
Public Property Let NoPrefix(ByVal Value As Boolean)
```

是否不处理助记符前缀（&）。

#### AutoSize

```vb
Public Property Get AutoSize() As Boolean
Public Property Let AutoSize(ByVal Value As Boolean)
```

是否自动调整大小。

#### CustomWidth

```vb
Public Property Get CustomWidth() As Single
Public Property Let CustomWidth(ByVal Value As Single)
```

自定义宽度。

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

#### Position

```vb
Public Property Get Position() As Long
Public Property Let Position(ByVal Value As Long)
```

按钮位置。

#### Hot

```vb
Public Property Get Hot() As Boolean
```

是否处于热点状态。

#### Left

```vb
Public Property Get Left() As Single
```

按钮左边距。

#### Top

```vb
Public Property Get Top() As Single
```

按钮顶边距。

#### Width

```vb
Public Property Get Width() As Single
```

按钮宽度。

#### Height

```vb
Public Property Get Height() As Single
```

按钮高度。

#### ButtonMenus

```vb
Public Property Get ButtonMenus() As TbrButtonMenus
```

下拉菜单集合。

#### hMenu

```vb
Public Property Get hMenu() As LongPtr
```

菜单句柄。

### TbrButtonMenu 类

按钮下拉菜单项对象。

#### TbrButtonMenu 属性

#### Index

```vb
Public Property Get Index() As Long
```

菜单项索引。

#### Key

```vb
Public Property Get Key() As String
Public Property Let Key(ByVal Value As String)
```

唯一标识键。

#### Tag

```vb
Public Property Get Tag() As Variant
Public Property Let Tag(ByVal Value As Variant)
```

额外数据。

#### Text

```vb
Public Property Get Text() As String
Public Property Let Text(ByVal Value As String)
```

菜单项文本。

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

#### Checked

```vb
Public Property Get Checked() As Boolean
Public Property Let Checked(ByVal Value As Boolean)
```

是否选中。

#### Separator

```vb
Public Property Get Separator() As Boolean
Public Property Let Separator(ByVal Value As Boolean)
```

是否为分隔符。

#### Picture

```vb
Public Property Get Picture() As IPictureDisp
Public Property Set Picture(ByVal Value As IPictureDisp)
```

菜单项图标。

#### Parent

```vb
Public Property Get Parent() As TbrButton
```

所属按钮。

### TbrButtonMenus 类

按钮下拉菜单项集合。

#### TbrButtonMenus 成员

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

枚举器（隐藏）。

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Text As Variant) As TbrButtonMenu
```

添加菜单项。

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbrButtonMenu
```

获取菜单项（默认成员）。

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查菜单项是否存在。

#### Count

```vb
Public Property Get Count() As Long
```

菜单项数量。

#### Clear

```vb
Public Sub Clear()
```

清除所有菜单项。

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

移除菜单项。

### TbrButtons 类

工具栏按钮集合。

#### TbrButtons 成员

#### NewEnum

```vb
Public Function NewEnum() As IUnknown
```

枚举器（隐藏）。

#### Add

```vb
Public Function Add(Optional ByVal Index As Variant, Optional ByVal Key As Variant, Optional ByVal Caption As Variant, Optional ByVal Style As Variant, Optional ByVal Image As Variant) As TbrButton
```

添加按钮。

#### Item

```vb
Public Function Item(ByVal Index As Variant) As TbrButton
```

获取按钮（默认成员）。

#### Exists

```vb
Public Function Exists(ByVal Index As Variant) As Boolean
```

检查按钮是否存在。

#### Count

```vb
Public Property Get Count() As Long
```

按钮数量。

#### Clear

```vb
Public Sub Clear()
```

清除所有按钮。

#### Remove

```vb
Public Sub Remove(ByVal Index As Variant)
```

移除按钮。

### TbrButtonProperties 类

按钮内部属性对象（Friend访问）。

#### FInit

```vb
Friend Property Get FInit() As Boolean
Friend Property Let FInit(ByVal Value As Boolean)
```

内部初始化标志。

#### ForeColor

```vb
Public Property Get ForeColor() As OLE_COLOR
Public Property Let ForeColor(ByVal Value As OLE_COLOR)
```

前景色。

## 代码示例

### 基本用法

```vb
' 创建工具栏并添加按钮
With ToolBar1.Buttons
    .Add , "New", "新建", tbrButtonDefault, 1
    .Add , "Open", "打开", tbrButtonDefault, 2
    .Add , , , tbrButtonSeparator
    .Add , "Bold", "加粗", tbrButtonCheck, 3
End With

' 为按钮添加下拉菜单
Dim btn As TbrButton
Set btn = ToolBar1.Buttons.Add(, "Font", "字体", tbrButtonDropDown, 4)
With btn.ButtonMenus
    .Add , "Arial", "Arial"
    .Add , "Courier", "Courier New"
    .Add , , , , , True  ' 分隔符
    .Add , "Tahoma", "Tahoma"
End With

' 处理按钮点击
Private Sub ToolBar1_ButtonClick(ByVal Button As TbrButton)
    Select Case Button.Key
        Case "New": MsgBox "新建文件"
        Case "Open": MsgBox "打开文件"
        Case "Bold": MsgBox "加粗: " & Button.Value
    End Select
End Sub

' 处理下拉菜单点击
Private Sub ToolBar1_ButtonMenuClick(ByVal ButtonMenu As TbrButtonMenu)
    MsgBox "选择字体: " & ButtonMenu.Text
End Sub
```