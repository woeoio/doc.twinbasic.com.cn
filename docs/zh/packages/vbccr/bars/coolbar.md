---
title: 冷却栏控件（CoolBar）
description: 冷却栏控件（CoolBar） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7b53f30c-df91-41a6-8d2f-605232f6c190'
  PropagateID: '7b53f30c-df91-41a6-8d2f-605232f6c190'
  ReservedCode1: '30e02ca5-44a2-4644-92ce-7092d01ad50d'
  ReservedCode2: '30e02ca5-44a2-4644-92ce-7092d01ad50d'
---

# 冷却栏控件（CoolBar）

封装 ReBar 系统控件，实现可拖拽、可调整大小的带状容器栏。

## 枚举

### CbrOrientationConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CbrOrientationHorizontal | 0 | 水平方向 |
| CbrOrientationVertical | 1 | 垂直方向 |

### CbrBandStyleConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CbrBandStyleNormal | 0 | 正常样式，可调整大小 |
| CbrBandStyleFixedSize | 1 | 固定大小 |

### CbrBandGripperConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CbrBandGripperNormal | 0 | 默认抓握条 |
| CbrBandGripperAlways | 1 | 始终显示抓握条 |
| CbrBandGripperNever | 2 | 不显示抓握条 |

### CbrHitResultConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CbrHitResultNoWhere | 0 | 空白区域 |
| CbrHitResultCaption | 1 | 标题区域 |
| CbrHitResultClient | 2 | 客户区 |
| CbrHitResultGrabber | 3 | 抓握条 |
| CbrHitResultChevron | 4 | 折叠箭头 |
| CbrHitResultSplitter | 5 | 分隔条 |

## 属性

### VisualStyles
`Property Get VisualStyles() As Boolean`
`Property Let VisualStyles(ByVal Value As Boolean)`

是否启用视觉样式。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### OLEDropMode
`Property Get OLEDropMode() As OLEDropModeConstants`
`Property Let OLEDropMode(ByVal Value As OLEDropModeConstants)`

OLE 拖放模式。参见通用枚举。

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

鼠标指针。参见通用枚举。

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

自定义鼠标图标。

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

鼠标进入/离开跟踪。

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

从右到左显示。

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

从右到左镜像布局。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### ImageList
`Property Get ImageList() As Variant`
`Property Let ImageList(ByVal Value As Variant)`
`Property Set ImageList(ByVal Value As Variant)`

关联的 ImageList 控件。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景色。

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景色。

### BorderStyle
`Property Get BorderStyle() As Integer`
`Property Let BorderStyle(ByVal Value As Integer)`

边框样式（0-无边框，1-固定单线）。

### Orientation
`Property Get Orientation() As CbrOrientationConstants`
`Property Let Orientation(ByVal Value As CbrOrientationConstants)`

方向。

### BandBorders
`Property Get BandBorders() As Boolean`
`Property Let BandBorders(ByVal Value As Boolean)`

是否在带之间显示分隔线。

### FixedOrder
`Property Get FixedOrder() As Boolean`
`Property Let FixedOrder(ByVal Value As Boolean)`

是否禁止用户重新排列带。

### VariantHeight
`Property Get VariantHeight() As Boolean`
`Property Let VariantHeight(ByVal Value As Boolean)`

是否允许带具有不同高度。

### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

背景图片。

### DblClickToggle
`Property Get DblClickToggle() As Boolean`
`Property Let DblClickToggle(ByVal Value As Boolean)`

双击是否切换最大化/最小化。

### VerticalGripper
`Property Get VerticalGripper() As Boolean`
`Property Let VerticalGripper(ByVal Value As Boolean)`

垂直方向时是否使用垂直抓握条。

### ShowTips
`Property Get ShowTips() As Boolean`
`Property Let ShowTips(ByVal Value As Boolean)`

是否显示工具提示。

### DoubleBuffer
`Property Get DoubleBuffer() As Boolean`
`Property Let DoubleBuffer(ByVal Value As Boolean)`

是否启用双缓冲减少闪烁。

### Bands
`Property Get Bands() As CbrBands`

带的集合。

### ContainedControls
`Property Get ContainedControls() As VBRUN.ContainedControls`

包含的控件集合。只读。

### RowCount
`Property Get RowCount() As Long`

行数。只读。

### hWnd / hWndUserControl / Font

参见公共属性。

### Name / Tag / Parent / Container / Left / Top / Width / Height / Visible / ToolTipText / WhatsThisHelpID / Align / DragIcon / DragMode

参见标准扩展器属性。

## 方法

### Refresh
`Public Sub Refresh()`

强制重绘。

### HitTest
`Public Function HitTest(ByVal X As Single, ByVal Y As Single, Optional ByRef HitResult As CbrHitResultConstants) As CbrBand`

命中测试，返回指定坐标处的带对象。

### OLEDrag
`Public Sub OLEDrag()`

### Drag / ZOrder

参见标准方法。

## 事件

### Click
`Public Event Click()`

单击。

### DblClick
`Public Event DblClick()`

双击。

### Resize
`Public Event Resize()`

大小改变。

### HeightChanged
`Public Event HeightChanged(ByVal NewHeight As Single)`

高度改变。

### LayoutChanged
`Public Event LayoutChanged()`

布局改变。

### MinMax
`Public Event MinMax(ByRef Cancel As Boolean)`

带即将最大化或最小化，可取消。

### BandBeforeDrag
`Public Event BandBeforeDrag(ByVal Band As CbrBand, ByRef Cancel As Boolean)`

带即将被拖动，可取消。

### BandAfterDrag
`Public Event BandAfterDrag(ByVal Band As CbrBand, ByVal NewPosition As Long)`

带拖动完成。

### BandChevronPushed
`Public Event BandChevronPushed(ByVal Band As CbrBand, ByVal Left As Single, ByVal Top As Single, ByVal Width As Single, ByVal Height As Single)`

折叠箭头被点击。

### BandMouseEnter
`Public Event BandMouseEnter(ByVal Band As CbrBand)`

鼠标进入带。

### BandMouseLeave
`Public Event BandMouseLeave(ByVal Band As CbrBand)`

鼠标离开带。

### MouseDown / MouseMove / MouseUp / MouseEnter / MouseLeave

### OLECompleteDrag / OLEDragDrop / OLEDragOver / OLEGiveFeedback / OLESetData / OLEStartDrag

## CbrBand 对象

带的属性和方法。

### 属性

#### Index
`Property Get Index() As Long`

带在集合中的索引。只读。

#### Key
`Property Get Key() As String`
`Property Let Key(ByVal Value As String)`

带的关键字。

#### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

自定义数据。

#### ID
`Property Get ID() As Long`

内部标识。只读。

#### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

带标题。

#### Child
`Property Get Child() As Object`
`Property Let Child(ByVal Value As Object)`
`Property Set Child(ByVal Value As Object)`

带中包含的子控件。

#### Style
`Property Get Style() As CbrBandStyleConstants`
`Property Let Style(ByVal Value As CbrBandStyleConstants)`

带样式。

#### Image
`Property Get Image() As Variant`
`Property Let Image(ByVal Value As Variant)`

ImageList 中图像的索引或关键字。

#### ImageIndex
`Property Get ImageIndex() As Long`

图像索引。只读。

#### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

带宽度。Style 为 FixedSize 时只读。

#### Height
`Property Get Height() As Single`

带高度。只读。

#### MinWidth
`Property Get MinWidth() As Single`
`Property Let MinWidth(ByVal Value As Single)`

最小宽度。

#### MinHeight
`Property Get MinHeight() As Single`
`Property Let MinHeight(ByVal Value As Single)`

最小高度。

#### IdealWidth
`Property Get IdealWidth() As Single`
`Property Let IdealWidth(ByVal Value As Single)`

理想宽度。

#### Gripper
`Property Get Gripper() As CbrBandGripperConstants`
`Property Let Gripper(ByVal Value As CbrBandGripperConstants)`

抓握条样式。

#### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。需要 ShowTips 为 True。

#### UseCoolBarPicture
`Property Get UseCoolBarPicture() As Boolean`
`Property Let UseCoolBarPicture(ByVal Value As Boolean)`

是否使用 CoolBar 的背景图片。

#### Picture
`Property Get Picture() As IPictureDisp`
`Property Let Picture(ByVal Value As IPictureDisp)`
`Property Set Picture(ByVal Value As IPictureDisp)`

带的背景图片。

#### UseCoolBarColors
`Property Get UseCoolBarColors() As Boolean`
`Property Let UseCoolBarColors(ByVal Value As Boolean)`

是否使用 CoolBar 的前景/背景色。

#### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

带背景色。

#### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

带前景色。

#### NewRow
`Property Get NewRow() As Boolean`
`Property Let NewRow(ByVal Value As Boolean)`

是否在新行开始。

#### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

是否可见。

#### ChildEdge
`Property Get ChildEdge() As Boolean`
`Property Let ChildEdge(ByVal Value As Boolean)`

是否在子控件上下显示边缘。

#### UseChevron
`Property Get UseChevron() As Boolean`
`Property Let UseChevron(ByVal Value As Boolean)`

带宽小于理想宽度时是否显示折叠箭头。

#### HideCaption
`Property Get HideCaption() As Boolean`
`Property Let HideCaption(ByVal Value As Boolean)`

是否隐藏标题。

#### FixedBackground
`Property Get FixedBackground() As Boolean`
`Property Let FixedBackground(ByVal Value As Boolean)`

背景图片是否固定不动。

#### Position
`Property Get Position() As Long`
`Property Let Position(ByVal Value As Long)`

带的位置。

### 方法

#### Maximize
`Public Sub Maximize()`

最大化带。

#### Minimize
`Public Sub Minimize()`

最小化带。

#### PushChevron
`Public Sub PushChevron()`

程序化点击折叠箭头。

## CbrBands 集合

带的集合对象。

### 属性

#### Item
`Property Get Item(ByVal Index As Variant) As CbrBand`

按索引或关键字获取带。

#### ItemFromPosition
`Property Get ItemFromPosition(ByVal Position As Long) As CbrBand`

按位置获取带。

#### Count
`Property Get Count() As Long`

带数量。

### 方法

#### Add
`Public Function Add(Optional ByVal Index As Long, Optional ByVal Key As String, Optional ByVal Caption As String, Optional ByVal Image As Variant, Optional ByVal NewRow As Boolean, Optional ByVal Child As Variant, Optional ByVal Visible As Boolean = True) As CbrBand`

添加新带。

#### Remove
`Public Sub Remove(ByVal Index As Variant)`

移除带。

#### Clear
`Public Sub Clear()`

清空所有带。

#### Exists
`Public Function Exists(ByVal Index As Variant) As Boolean`

检查带是否存在。

## CbrBandProperties 对象

带颜色属性的辅助对象。

### 属性

#### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景色。

#### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景色。

## 代码示例

### 基本用法

```vb
' 添加带
With CoolBar1.Bands
    .Add Key:="Band1", Caption:="工具栏", NewRow:=True
    .Add Key:="Band2", Caption:="格式栏"
End With

' 设置子控件
Set CoolBar1.Bands("Band1").Child = Toolbar1

' 设置带属性
CoolBar1.Bands(1).UseChevron = True
CoolBar1.Bands(1).IdealWidth = 500
```

### 命中测试

```vb
Private Sub CoolBar1_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    Dim HitResult As CbrHitResultConstants
    Dim Band As CbrBand
    Set Band = CoolBar1.HitTest(X, Y, HitResult)
    If Not Band Is Nothing Then
        Debug.Print "点击了: " & Band.Caption
    End If
End Sub
```

### 折叠箭头事件

```vb
Private Sub CoolBar1_BandChevronPushed(ByVal Band As CbrBand, _
    ByVal Left As Single, ByVal Top As Single, _
    ByVal Width As Single, ByVal Height As Single)
    ' 在折叠箭头位置显示菜单
    PopupMenu mnuToolbar, , Left, Top + Height
End Sub
```