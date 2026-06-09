---
title: 图像列表控件（ImageList）
description: 图像列表控件（ImageList） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7e0301a4-ff9b-4153-9fae-31a0beeded9d'
  PropagateID: '7e0301a4-ff9b-4153-9fae-31a0beeded9d'
  ReservedCode1: 'e9989aff-a458-451b-85fc-8bc88a34e1e6'
  ReservedCode2: 'e9989aff-a458-451b-85fc-8bc88a34e1e6'
---

# 图像列表控件（ImageList）

封装 ImageList 控件，用于存储和管理图像集合，供其他控件引用。

## 枚举

### ImlImageSizeConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| imlSmall | 0 | 小图标（16×16） |
| imlLarge | 1 | 大图标（32×32） |
| imlCustom | 2 | 自定义大小 |

### CCBackStyleConstants

参见通用枚举。

## 属性

### ImageWidth
`Property Get ImageWidth() As Long`
`Property Let ImageWidth(ByVal Value As Long)`

图像宽度（像素）。

### ImageHeight
`Property Get ImageHeight() As Long`
`Property Let ImageHeight(ByVal Value As Long)`

图像高度（像素）。

### ImageSize
`Property Get ImageSize() As ImlImageSizeConstants`
`Property Let ImageSize(ByVal Value As ImlImageSizeConstants)`

预设图像尺寸。设置此属性将自动调整 ImageWidth 和 ImageHeight。

### ColorDepth
`Property Get ColorDepth() As Long`
`Property Let ColorDepth(ByVal Value As Long)`

色深。支持 4、8、16、24、32 位。需要 comctl32.dll 6.0 或更高版本。

### MaskColor
`Property Get MaskColor() As OLE_COLOR`
`Property Let MaskColor(ByVal Value As OLE_COLOR)`

掩码颜色。

### UseMaskColor
`Property Get UseMaskColor() As Boolean`
`Property Let UseMaskColor(ByVal Value As Boolean)`

是否使用掩码颜色。

### BackColor
`Property Get BackColor() As OLE_COLOR`
`Property Let BackColor(ByVal Value As OLE_COLOR)`

背景颜色。

### hImageList
`Property Get hImageList() As LongPtr`

图像列表句柄。只读。

### ListImages
`Property Get ListImages() As ImlListImages`

图像集合。

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

宽度（设计时使用）。

### Height
`Property Get Height() As Single`
`Property Let Height(ByVal Value As Single)`

高度（设计时使用）。

### Visible
`Property Get Visible() As Boolean`
`Property Let Visible(ByVal Value As Boolean)`

可见性（设计时使用）。

### hWnd
`Property Get hWnd() As LongPtr`

窗口句柄。只读。

## 方法

### Refresh
`Sub Refresh()`

强制重绘。

### CreateIcon
`Function CreateIcon(ByVal ImageIndex As Long) As IPictureDisp`

从指定图像创建图标。

### CreateBitmap
`Function CreateBitmap(ByVal ImageIndex As Long) As IPictureDisp`

从指定图像创建位图。需要 comctl32.dll 6.0 或更高版本。

### Overlay
`Function Overlay(ByVal ImageIndex1 As Long, ByVal ImageIndex2 As Long) As IPictureDisp`

将两个图像叠加，返回叠加后的图像。

### AboutBox
`Sub AboutBox()`

显示关于对话框。

## 子对象

### ListImage（ImlListImage）

表示图像列表中的单个图像。

#### 属性

| 属性 | 类型 | 读写 | 说明 |
|------|------|------|------|
| Index | Long | 只读 | 集合中的索引 |
| Key | String | 读写 | 集合中的键 |
| Tag | Variant | 读写 | 自定义数据 |
| Picture | IPictureDisp | 读写 | 图像 |
| MaskPicture | IPictureDisp | 读写 | 掩码图像 |
| Overlay | Boolean | 读写 | 是否为叠加图像 |
| OverlaySourceIndex | Long | 读写 | 叠加源索引 |
| ExtractIcon | IPictureDisp | 只读 | 提取图标 |
| ExtractBitmap | IPictureDisp | 只读 | 提取位图 |

### ListImages（ImlListImages）

图像集合对象。

#### 属性

| 属性 | 类型 | 读写 | 说明 |
|------|------|------|------|
| Item(ByVal Index As Variant) | ImlListImage | 只读 | 按索引或键获取图像 |
| Count | Long | 只读 | 图像数量 |

#### 方法

| 方法 | 说明 |
|------|------|
| Add([Index], [Key], [Picture], [MaskPicture]) As ImlListImage | 添加图像 |
| Exists(ByVal Index As Variant) As Boolean | 判断图像是否存在 |
| Clear | 清除所有图像 |
| Remove(ByVal Index As Variant) | 移除指定图像 |

## 代码示例

```vb
' 设置图像大小并添加图像
With ImageList1
    .ImageSize = imlSmall
    .ListImages.Add , "open", LoadPicture("open.ico")
    .ListImages.Add , "save", LoadPicture("save.ico")
    .ListImages.Add , "exit", LoadPicture("exit.ico")
End With

' 按键引用图像
Set cmdOpen.Picture = ImageList1.ListImages("open").ExtractIcon

' 创建叠加图像
ImageList1.ListImages.Add , "overlay1", LoadPicture("ov1.ico")
ImageList1.ListImages("overlay1").Overlay = True
ImageList1.ListImages("overlay1").OverlaySourceIndex = 1

' 使用 Overlay 方法叠加两个图像
Set imgOverlay = ImageList1.Overlay(1, 2)

' 遍历所有图像
Dim img As ImlListImage
For Each img In ImageList1.ListImages
    Debug.Print img.Index; img.Key
Next img
```