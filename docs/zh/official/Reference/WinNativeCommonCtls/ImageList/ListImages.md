---
title: ListImages
parent: ImageList
permalink: /tB/Packages/WinNativeCommonCtls/ImageList/ListImages
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cc5cb16e-d2c0-4f2d-ae17-37d86d8eb886'
  PropagateID: 'cc5cb16e-d2c0-4f2d-ae17-37d86d8eb886'
  ReservedCode1: 'f52bcdd5-10ab-4fa0-83ff-c9e53d2256cc'
  ReservedCode2: 'f52bcdd5-10ab-4fa0-83ff-c9e53d2256cc'
---

# ListImages 类

**ListImages** 集合是管理 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 内图片的入口。通过 `<imageList>.ListImages` 访问；支持添加、删除、索引访问和 `For Each` 迭代。

该类标记为 `[COMCreatable(False)]` --- 用户代码通过父级 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 控件的 [**ListImages**](/official/Reference/WinNativeCommonCtls/ImageList/#listimages) 属性访问 **ListImages**，从不直接实例化。

```vb
With ImageList1.ListImages
    .Add , "doc",    LoadPicture(App.Path & "\doc.ico")
    .Add , "folder", LoadPicture(App.Path & "\folder.ico")
    Debug.Print .Count    ' 2
End With

Dim img As ListImage
For Each img In ImageList1.ListImages
    Debug.Print img.Index, img.Key
Next
```

## 绑定时修改

如果父级 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 绑定到了消费控件（[**ListView**](/official/Reference/WinNativeCommonCtls/ListView/) 或 [**TreeView**](/official/Reference/WinNativeCommonCtls/TreeView/) 已将其设为图像列表属性），[**Clear**](#clear) 和 [**Remove**](#remove) 引发运行时错误 35617（*"ImageList cannot be modified while another control is bound to it"*）。[**Add**](#add) 不受影响 --- 始终可以添加新图片。

要重建绑定的图像列表，先将消费控件的图像列表属性设为 **Nothing** 以解除绑定。

属性
----------

### Count

集合中的图像数。**Long**，只读。

### Item

返回给定索引或键的 [**ListImage**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage)。默认成员，因此 `ImageList1.ListImages("doc")` 无须写 `.Item("doc")`。

语法：*object*.**Item**（*Index*）**As ListImage**

*Index*
: 一个 **Variant**，可以是集合中基于1的 **Long** 位置或 **String** 键（区分大小写 --- 集合使用 `vbBinaryCompare`）。

方法
-------

### Add

向集合添加一张图片。

语法：*object*.**Add**（[*Index*] [, *Key*] [, *Picture*] [, *Tag*]）**As ListImage**

*Index*
: *可选* 给出插入新图像基于1位置的 **Long**。省略时，图像追加到末尾。超出范围的值引发运行时错误 35600。

*Key*
: *可选* 可用于查找图像的 **String** 名称。省略时，图像没有键。数字字符串会被拒绝并引发运行时错误 35603。键在集合内必须唯一。

*Picture*
: *必需* 要添加的 **StdPicture**。位图（`vbPicTypeBitmap`）根据 [**MaskColor**](/official/Reference/WinNativeCommonCtls/ImageList/#maskcolor) / [**UseMaskColor**](/official/Reference/WinNativeCommonCtls/ImageList/#usemaskcolor) 进行缩放和蒙版。图标（`vbPicTypeIcon`）直接以其自身alpha蒙版添加。省略 *Picture* 引发运行时错误 35607。

*Tag*
: *可选* 附加到新图像的任意数据；可通过 [**ListImage.Tag**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#tag) 访问。

返回新创建的 [**ListImage**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage)。

第一次 **Add** 调用固定 [**ImageWidth**](/official/Reference/WinNativeCommonCtls/ImageList/#imagewidth) 和 [**ImageHeight**](/official/Reference/WinNativeCommonCtls/ImageList/#imageheight)（除非在属性表中预设）；后续所有图片缩放以匹配。

### Clear

从集合中移除所有图片。将 [**ImageWidth**](/official/Reference/WinNativeCommonCtls/ImageList/#imagewidth) 和 [**ImageHeight**](/official/Reference/WinNativeCommonCtls/ImageList/#imageheight) 重置为 `0`，解锁以供重新赋值。

语法：*object*.**Clear**

如果父级 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 当前绑定到消费控件，引发运行时错误 35617。

### Exists

返回集合中是否存在具有给定键的图片。

语法：*object*.**Exists**（*Index*）**As Boolean**

*Index*
: 一个 **Variant**，强制转换为 **String** 进行查找。区分大小写。

### Remove

从集合中移除一张图片。剩余图片的 [**Index**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#index) 值会重新计算，以便后续按索引查找仍然有效。

语法：*object*.**Remove**（*Index*）

*Index*
: 一个 **Variant** --- 可以是基于1的 **Long** 位置或 **String** 键。超出范围/不存在的值引发运行时错误 35601。非字符串非数值的值引发运行时错误 35603。

如果父级 [**ImageList**](/official/Reference/WinNativeCommonCtls/ImageList/) 当前绑定到消费控件，引发运行时错误 35617。

### _NewEnum

返回 `For Each img In imageList.ListImages` 使用的枚举器。按 **Index** 顺序迭代图片。

语法：*object*.**_NewEnum** **As Object**

## 另见

- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) --- 父控件
- [ListImage](/official/Reference/WinNativeCommonCtls/ImageList/ListImage) --- 集合中的一张图片