---
title: 链接标签控件（LinkLabel）
description: 链接标签控件（LinkLabel） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a6b5df25-6dbd-4a59-982b-b450013dea88'
  PropagateID: 'a6b5df25-6dbd-4a59-982b-b450013dea88'
  ReservedCode1: 'd821f296-5ce4-4515-a00f-35335f75ee80'
  ReservedCode2: 'd821f296-5ce4-4515-a00f-35335f75ee80'
---

# 链接标签控件（LinkLabel）

增强型链接标签控件，支持超链接显示和自定义链接集合。

## 枚举

### LlbLinkBehaviorConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| LlbLinkBehaviorSystemDefault | 0 | 系统默认 |
| LlbLinkBehaviorAlwaysUnderline | 1 | 始终下划线 |
| LlbLinkBehaviorHoverUnderline | 2 | 悬停下划线 |
| LlbLinkBehaviorNeverUnderline | 3 | 从不下划线 |

### CCAppearanceConstants

参见通用枚举。

### CCBorderStyleConstants

参见通用枚举。

### CCBackStyleConstants

参见通用枚举。

### CCMousePointerConstants

参见通用枚举。

### CCVerticalAlignmentConstants

参见通用枚举。

### CCRightToLeftModeConstants

参见通用枚举。

## 属性

### Caption
`Property Get Caption() As String`
`Property Let Caption(ByVal Value As String)`

显示文本。

### ActiveLinkColor
`Property Get ActiveLinkColor() As OLE_COLOR`
`Property Let ActiveLinkColor(ByVal Value As OLE_COLOR)`

活动链接颜色。

### LinkColor
`Property Get LinkColor() As OLE_COLOR`
`Property Let LinkColor(ByVal Value As OLE_COLOR)`

链接颜色。

### VisitedLinkColor
`Property Get VisitedLinkColor() As OLE_COLOR`
`Property Let VisitedLinkColor(ByVal Value As OLE_COLOR)`

已访问链接颜色。

### DisabledLinkColor
`Property Get DisabledLinkColor() As OLE_COLOR`
`Property Let DisabledLinkColor(ByVal Value As OLE_COLOR)`

禁用链接颜色。

### LinkBehavior
`Property Get LinkBehavior() As LlbLinkBehaviorConstants`
`Property Let LinkBehavior(ByVal Value As LlbLinkBehaviorConstants)`

链接行为样式。

### Text
`Property Get Text() As String`
`Property Let Text(ByVal Value As String)`

控件的完整文本内容，包含链接标记。

### Links
`Property Get Links() As LlbLinks`

链接集合。

### AutoSize
`Property Get AutoSize() As Boolean`
`Property Let AutoSize(ByVal Value As Boolean)`

是否自动调整大小以适应内容。

### BorderStyle
`Property Get BorderStyle() As CCBorderStyleConstants`
`Property Let BorderStyle(ByVal Value As CCBorderStyleConstants)`

边框样式。参见通用枚举。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### BackStyle
`Property Get BackStyle() As CCBackStyleConstants`
`Property Let BackStyle(ByVal Value As CCBackStyleConstants)`

背景样式。参见通用枚举。

### ForeColor
`Property Get ForeColor() As OLE_COLOR`
`Property Let ForeColor(ByVal Value As OLE_COLOR)`

前景颜色。

### Font
`Property Get Font() As StdFont`
`Property Let Font(ByVal NewFont As StdFont)`
`Property Set Font(ByVal NewFont As StdFont)`

字体。

### Enabled
`Property Get Enabled() As Boolean`
`Property Let Enabled(ByVal Value As Boolean)`

是否可用。

### MousePointer
`Property Get MousePointer() As CCMousePointerConstants`
`Property Let MousePointer(ByVal Value As CCMousePointerConstants)`

鼠标指针样式。参见通用枚举。

### MouseIcon
`Property Get MouseIcon() As IPictureDisp`
`Property Let MouseIcon(ByVal Value As IPictureDisp)`
`Property Set MouseIcon(ByVal Value As IPictureDisp)`

自定义鼠标图标。

### MouseTrack
`Property Get MouseTrack() As Boolean`
`Property Let MouseTrack(ByVal Value As Boolean)`

是否启用鼠标进入/离开跟踪。

### WordWrap
`Property Get WordWrap() As Boolean`
`Property Let WordWrap(ByVal Value As Boolean)`

是否自动换行。

### UseMnemonic
`Property Get UseMnemonic() As Boolean`
`Property Let UseMnemonic(ByVal Value As Boolean)`

是否将 & 字符解释为快捷键前缀。

### RightToLeft
`Property Get RightToLeft() As Boolean`
`Property Let RightToLeft(ByVal Value As Boolean)`

从右到左显示方向。

### RightToLeftLayout
`Property Get RightToLeftLayout() As Boolean`
`Property Let RightToLeftLayout(ByVal Value As Boolean)`

从右到左镜像布局。

### RightToLeftMode
`Property Get RightToLeftMode() As CCRightToLeftModeConstants`
`Property Let RightToLeftMode(ByVal Value As CCRightToLeftModeConstants)`

从右到左模式。参见通用枚举。

### Appearance
`Property Get Appearance() As CCAppearanceConstants`
`Property Let Appearance(ByVal Value As CCAppearanceConstants)`

外观样式。参见通用枚举。

### VerticalAlignment
`Property Get VerticalAlignment() As CCVerticalAlignmentConstants`
`Property Let VerticalAlignment(ByVal Value As CCVerticalAlignmentConstants)`

垂直对齐方式。参见通用枚举。

### hWnd
`Property Get hWnd() As LongPtr`

窗口句柄。只读。

### ToolTipText
`Property Get ToolTipText() As String`
`Property Let ToolTipText(ByVal Value As String)`

工具提示文本。

### Name
`Property Get Name() As String`

控件名称。只读。

### Tag
`Property Get Tag() As Variant`
`Property Let Tag(ByVal Value As Variant)`
`Property Set Tag(ByVal Value As Variant)`

自定义数据。

### Parent
`Property Get Parent() As Object`

父对象。只读。

### Container
`Property Get Container() As Object`
`Property Set Container(ByVal Value As Object)`

容器对象。

### Left
`Property Get Left() As Single`
`Property Let Left(ByVal Value As Single)`

左边距。

### Top
`Property Get Top() As Single`
`Property Let Top(ByVal Value As Single)`

顶边距。

### Width
`Property Get Width() As Single`
`Property Let Width(ByVal Value As Single)`

宽度。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

可见性。

## 方法

### Refresh
`Sub Refresh()`

强制重绘。

### AboutBox
`Sub AboutBox()`

显示关于对话框。

## 事件

### LinkClick
`Event LinkClick(ByVal Link As LlbLink)`

链接被点击时触发。

### Click
`Event Click()`

单击时触发。

### DblClick
`Event DblClick()`

双击时触发。

### MouseDown
`Event MouseDown(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标按下时触发。

### MouseUp
`Event MouseUp(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标释放时触发。

### MouseMove
`Event MouseMove(ByVal Button As Integer, ByVal Shift As Integer, ByVal X As Single, ByVal Y As Single)`

鼠标移动时触发。

### MouseEnter
`Event MouseEnter()`

鼠标进入控件时触发。

### MouseLeave
`Event MouseLeave()`

鼠标离开控件时触发。

## 子对象

### Link（LlbLink）

表示链接标签中的单个链接。

#### 属性

| 属性 | 类型 | 读写 | 说明 |
|------|------|------|------|
| Start As Long | Long | 读写 | 链接文本起始位置（从 0 开始） |
| Length As Long | Long | 读写 | 链接文本长度 |
| Visited As Boolean | Boolean | 读写 | 是否已访问 |
| Key As String | String | 读写 | 链接关键字 |
| Tag As Variant | Variant | 读写 | 自定义数据 |

### Links（LlbLinks）

链接集合对象。

#### 属性

| 属性 | 类型 | 读写 | 说明 |
|------|------|------|------|
| Item(ByVal Index As Variant) As LlbLink | LlbLink | 只读 | 按索引获取链接 |
| Count As Long | Long | 只读 | 链接数量 |

#### 方法

| 方法 | 说明 |
|------|------|
| Add(ByVal Start As Long, ByVal Length As Long, Optional ByVal Key As String) As LlbLink | 添加链接 |
| Clear() | 清除所有链接 |
| Remove(ByVal Index As Variant) | 移除指定链接 |

## 代码示例

```vb
' 设置带链接的文本
With LinkLabel1
    .Caption = "访问 VBCCR 项目主页获取更多信息"
    .LinkColor = vbBlue
    .VisitedLinkColor = vbPurple
    .LinkBehavior = LlbLinkBehaviorHoverUnderline
    ' 添加链接
    .Links.Add 2, 7, "url_main"
    .Links.Add 15, 4, "url_more"
End With

' 处理链接点击
Private Sub LinkLabel1_LinkClick(ByVal Link As LlbLink)
    Select Case Link.Key
        Case "url_main"
            ShellExecute 0, "open", "https://github.com/Kr00l/VBCCR", vbNullString, vbNullString, 1
        Case "url_more"
            MsgBox "更多信息..."
    End Select
    Link.Visited = True
End Sub

' 创建多链接文本
With LinkLabel2
    .Caption = "请阅读 许可协议 和 隐私政策"
    .Links.Clear
    .Links.Add 3, 4, "license"
    .Links.Add 10, 4, "privacy"
End With
```