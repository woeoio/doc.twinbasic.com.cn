---
title: SavePicture
parent: Statements
permalink: /tB/Core/SavePicture
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cdb1fc00-57ff-48cb-8be2-9bbb18f50bd9'
  PropagateID: 'cdb1fc00-57ff-48cb-8be2-9bbb18f50bd9'
  ReservedCode1: '9d1ce5b0-e013-4441-9204-28a49c872215'
  ReservedCode2: '9d1ce5b0-e013-4441-9204-28a49c872215'
---

# SavePicture

将`Picture`或`Image`中的图形保存到文件。

语法：
> **SavePicture** *picture* **,** *stringexpression*

*picture*
: 要保存图形的`Picture`（例如`stdole.StdPicture`）或`Image`。通常是**PictureBox**或**Image**等控件的`Picture`属性，或**LoadPicture**调用的结果。

*stringexpression*
: 指定要写入文件路径的字符串表达式。

如果*picture*最初来自文件（通过**LoadPicture**加载），文件以与原始格式相同的格式写入。如果*picture*在运行时创建或修改（例如，通过在**PictureBox**中绘图），文件保存为位图（`.bmp`）。

::: info
**SavePicture**是twinBASIC为保持源代码兼容性而保留的旧版VB6/VBx语句。需要更多输出格式控制（PNG、JPEG、格式选项）的新代码应直接使用平台的图像API，或通过[**PictureToByteArray**](/official/Reference/VBA/HiddenModule/PictureToByteArray)转换并通过标准文件I/O写入字节。
:::

### 示例

```vb
' Save the graphic currently displayed in Picture1 to disk.
SavePicture Picture1.Picture, "C:\Temp\Snapshot.bmp"

' Round-trip an image through a Picture object.
Dim P As StdPicture
Set P = LoadPicture("C:\Temp\Original.png")
SavePicture P, "C:\Temp\Copy.bmp"   ' Always saved as BMP if not loaded from file.
```

### 另请参阅

- [**PictureToByteArray** 函数](/official/Reference/VBA/HiddenModule/PictureToByteArray)
- [**CreateStdPictureFromHandle** 函数](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle)