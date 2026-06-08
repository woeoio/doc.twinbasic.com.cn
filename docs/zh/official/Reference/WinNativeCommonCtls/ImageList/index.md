---
title: ImageList
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/ImageList/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd17f535d-c742-4ac2-92e1-8d2c3e33948c'
  PropagateID: 'd17f535d-c742-4ac2-92e1-8d2c3e33948c'
  ReservedCode1: '40c9112f-6435-4026-84b4-fd5564f0526f'
  ReservedCode2: '40c9112f-6435-4026-84b4-fd5564f0526f'
---

# ImageList 类

**ImageList** 是图片的离屏容器，所有图片缩放到相同的 [**ImageWidth**](#imagewidth) × [**ImageHeight**](#imageheight) 位图尺寸。该控件在运行时没有可见表示 --- 其目的是通过 [**Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons)、[**SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons)、[**ColumnHeaderIcons**](/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons) 或 [**ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) 属性为消费控件提供图标。

```vb
Private Sub Form_Load()
    ' Load some pictures via the Add method
    ImageList1.ListImages.Add , "doc",    LoadPicture("doc.ico")
    ImageList1.ListImages.Add , "folder", LoadPicture("folder.ico")
    ImageList1.ListImages.Add , "image",  LoadPicture("image.ico")

    ' Bind to a TreeView
    Set TreeView1.ImageList = ImageList1

    ' Add nodes that reference images by Key
    TreeView1.Nodes.Add , , , "My Folder", "folder"
    TreeView1.Nodes.Add , , , "Report",    "doc"
End Sub
```

控件从 `BaseControlNotFocusable` 继承矩形不可聚焦基类成员 --- 大小和位置（运行时尺寸无关紧要，因为控件不被绘制）、**Name**、**Tag**、**hWnd**。它不以任何有意义的方式暴露 **Visible**、**Anchors** 或 **Dock**，且从不接受焦点。

## 图像尺寸锁定

添加到列表中的第一张图片固定其 [**ImageWidth**](#imagewidth) 和 [**ImageHeight**](#imageheight) --- 后续每张图片缩放以匹配这些尺寸。尺寸也可以在添加任何图像*之前*显式设置（通常通过设计时属性），在这种情况下第一次 **Add** 调用会遵循预设值而非测量传入图片。

一旦列表中有任何图像，尝试赋值 [**ImageWidth**](#imagewidth) 或 [**ImageHeight**](#imageheight) 会引发运行时错误 35611，消息为 *"Property is read-only if image list contains images"*。要调整图像列表大小，请先调用 [**ListImages.Clear**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#clear)。

## 蒙版颜色和透明度

当 [**UseMaskColor**](#usemaskcolor) 为 **True**（默认）时，通过 [**ListImages.Add**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#add) 添加的每个位图会被蒙版处理：匹配 [**MaskColor**](#maskcolor) 的像素在图像渲染到消费控件时变为透明。默认 [**MaskColor**](#maskcolor) 为 `&H00C0C0C0`（银色），与经典VB6透明约定匹配。图标（以 `vbPicTypeIcon` 类型的 `StdPicture` 传入）包含自己的alpha蒙版，不受 **MaskColor** / **UseMaskColor** 影响。

将 [**ColorDepth**](#colordepth) 设为 **ColorDepth32Bit** 会完全禁用蒙版 --- alpha通道直接保留。

## 绑定到消费者

当 **ImageList** 绑定到 [**ListView**](/official/Reference/WinNativeCommonCtls/ListView/)（通过 [**Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons)、[**SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons) 或 [**ColumnHeaderIcons**](/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons)）或 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/)（通过 [**ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist)）时，消费控件递增 **ImageList** 的内部绑定计数。绑定计数非零时，尝试调用 [**ListImages.Clear**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#clear) 或 [**ListImages.Remove**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#remove) 引发运行时错误 35617（*"ImageList cannot be modified while another control is bound to it"*）。要修改内容，先将消费控件的图像列表属性设为 **Nothing** 以解除绑定。

属性
----------

### BackColor

当 [**UseBackColor**](#usebackcolor) 为 **True** 时，通过 [**ListImage.Draw**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw) 将图像列表渲染到目标DC时使用的背景颜色。**OLE_COLOR**。默认：**vbWindowBackground**。

### ColorDepth

底层位图存储的像素深度。[**ImageListColorDepth**](#imagelistcolordepth) 的成员。默认：**ColorDepth32Bit**。一旦添加了图像，此值在列表生命周期内固定 --- 要更改，请先调用 [**ListImages.Clear**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#clear)。

### hImageList

底层ComCtl32图像列表的Win32 `HIMAGELIST` 句柄。**LongPtr**，只读。用于与原始Win32 API高级互操作（如 `ImageList_Draw`、自定义绘制回调）；该句柄由 **ImageList** 控件拥有，不得被用户代码销毁。

### ImageHeight

列表中每张图像缩放到的像素高度。**Long**。默认：`0`（使用第一张添加图像的高度）。仅在列表为空时允许赋值；否则运行时错误 35611。

### ImageWidth

列表中每张图像缩放到的像素宽度。**Long**。默认：`0`。与 [**ImageHeight**](#imageheight) 相同的锁定语义。

### ListImages

持有图片的 [**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages) 集合。只读。

### MaskColor

添加位图图片时视为透明的颜色。**OLE_COLOR**。默认：`&H00C0C0C0`（银色）。仅在 [**UseMaskColor**](#usemaskcolor) 为 **True** 且 [**ColorDepth**](#colordepth) 不为 **ColorDepth32Bit** 时生效。

### UseBackColor

图像列表是否通过 `ImageList_SetBkColor` 向消费控件报告固定背景颜色。**Boolean**。默认：**False**。为 **False** 时，消费控件将蒙版像素视为透明。

### UseMaskColor

添加位图时是否将 [**MaskColor**](#maskcolor) 视为透明。**Boolean**。默认：**True**。

方法
-------

### Overlay

将两个列表图像合成为单个叠加图片。先绘制第一张图像，然后在其上绘制第二张并应用其蒙版。

语法：*object*.**Overlay**（*Key1*, *Key2*）**As StdPicture**

*Key1*
: 底层图像的 **Index** 或 **Key**。

*Key2*
: 顶层图像的 **Index** 或 **Key**。

返回一个 **vbPicTypeIcon** 类型的 **StdPicture**，适合直接渲染或在其他地方使用 --- 注意这是一次性快照，不是图像列表中的引用。返回的图标在 **StdPicture** 超出作用域时被销毁。

## ImageListColorDepth

确定 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 中位图存储的像素深度。在 **ImageList** 类上声明。

| 成员                  | 值 | 描述                                                  |
|-------------------------|-------|--------------------------------------------------------------|
| **ColorDepth4Bit**   | 4  | 16色调色板。                          |
| **ColorDepth8Bit**   | 8  | 256色调色板。                         |
| **ColorDepth16Bit** | 16 | 高彩色（RGB565）。                       |
| **ColorDepth24Bit** | 24 | 真彩色（RGB888），无alpha。             |
| **ColorDepth32Bit** | 32 | 带完整alpha通道的真彩色；此深度下禁用蒙版。 |

## 另见

- [ListImage](/official/Reference/WinNativeCommonCtls/ImageList/ListImage) --- 列表中的一张图片
- [ListImages](/official/Reference/WinNativeCommonCtls/ImageList/ListImages) --- 持有图片的集合
- [ImlDrawConstants](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) --- [**ListImage.Draw**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw) 的 *Style* 参数
- [ListView](/official/Reference/WinNativeCommonCtls/ListView/) --- 通过 [**Icons**](/official/Reference/WinNativeCommonCtls/ListView/#icons)、[**SmallIcons**](/official/Reference/WinNativeCommonCtls/ListView/#smallicons)、[**ColumnHeaderIcons**](/official/Reference/WinNativeCommonCtls/ListView/#columnheadericons) 的典型消费者
- [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/) --- 通过 [**ImageList**](/official/Reference/WinNativeCommonCtls/TreeView/#imagelist) 的典型消费者
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) --- **vbImageList** 所在位置