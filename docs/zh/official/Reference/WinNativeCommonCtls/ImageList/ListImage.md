---
title: ListImage
parent: ImageList
permalink: /tB/Packages/WinNativeCommonCtls/ImageList/ListImage
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '92389138-6b70-4111-9bf1-7b54b208cd68'
  PropagateID: '92389138-6b70-4111-9bf1-7b54b208cd68'
  ReservedCode1: 'b406e474-dbe3-4812-8d0d-2d8438d42936'
  ReservedCode2: 'b406e474-dbe3-4812-8d0d-2d8438d42936'
---

# ListImage 类

**ListImage** 是 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 的 [**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages) 集合中的一张图片。从 [**ListImages.Add**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#add) 和 [**ListImages.Item**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item) 返回。

该类标记为 `[COMCreatable(False)]` --- 用户代码从不直接实例化 **ListImage**；[**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages) 集合在 **Add** 方法中创建它们。

```vb
Dim img As ListImage = ImageList1.ListImages.Add(, "open", LoadPicture("open.ico"))
img.Tag = "Open document command"
```

属性
----------

### Index

图像在父集合中基于1的位置。**Long**，只读。等于同一图像的 [**ListImages.Item**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item)(*key*).Index。

### Key

图像添加时的字符串键。**String**。默认：空字符串。通过 [**ListImages.Item**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#item) 查找接受数字 **Index** 或字符串 **Key**。

### Picture

传入 [**ListImages.Add**](/official/Reference/WinNativeCommonCtls/ImageList/ListImages#add) 的原始 `StdPicture`。**StdPicture**。图像列表还保留内部缩放位图副本；修改返回的 **Picture** 不会更改列表渲染的内容。

### Tag

应用程序可附加到图像的任意数据。**Variant**。

方法
-------

### Draw

将图像渲染到给定位置的Win32设备上下文中。适用于自绘场景，应用程序需要自行绘制图标而非通过消费控件。

语法：*object*.**Draw** *hDC* [, *x* [, *y* [, *Style* ] ] ]

*hDC*
: 目标设备上下文的 **OLE_HANDLE**。

*x*
: *可选* 包含水平像素偏移的 **Variant**。默认：0。

*y*
: *可选* 包含垂直像素偏移的 **Variant**。默认：0。

*Style*
: *可选* [**ImlDrawConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) 标志的组合，控制绘制模式（普通、透明、蒙版、选中、聚焦）。多个标志可用 **Or** 组合。

```vb
Private Sub PictureBox1_Paint()
    ImageList1.ListImages("doc").Draw _
        PictureBox1.hDC, 0, 0, _
        ImlDrawTransparent Or ImlDrawSelected
End Sub
```

### ExtractIcon

返回一个包含以 `HICON` 渲染的图像的新 `StdPicture`。与返回原始位图的 [**Picture**](#picture) 属性不同；**ExtractIcon** 是从缓存位图构建并应用透明度的新图标。

语法：*object*.**ExtractIcon** **As IPictureDisp**

返回的 **IPictureDisp** 拥有其图标句柄并在超出作用域时销毁它。

## 另见

- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) --- 父控件
- [ListImages](/official/Reference/WinNativeCommonCtls/ImageList/ListImages) --- 持有 **ListImage** 实例的集合
- [ImlDrawConstants](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) --- [**Draw**](#draw) 的 *Style* 标志组合