---
title: TranslateColor
parent: Information Module
permalink: /tB/Modules/Information/TranslateColor
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c04806f6-1096-427b-a3e4-d3ea2a93742e'
  PropagateID: 'c04806f6-1096-427b-a3e4-d3ea2a93742e'
  ReservedCode1: '16485c8d-0758-4e09-b3fc-3f87e1d96eeb'
  ReservedCode2: '16485c8d-0758-4e09-b3fc-3f87e1d96eeb'
---

# TranslateColor

将OLE颜色值转换为普通RGB颜色，在此过程中解析对系统调色板的任何引用。

语法：**TranslateColor(** *ColorValue* [ **,** *hPalettePtr* ] **)**

*ColorValue*
: *必需* **Long** OLE颜色值，要进行转换。

*hPalettePtr*
: *可选* **LongPtr**，用于转换的调色板句柄。默认为**0**，选择默认系统调色板。

OLE颜色格式编码字面RGB值或Windows系统调色板中的索引（例如`&H80000012`，按钮表面的颜色）。**TranslateColor**返回对应的普通RGB **Long**，适合传给期望真正颜色值而非系统调色板引用的API和属性。

### 示例

本示例将OLE系统颜色转换为其当前RGB值。

```vb
Dim OleColor As Long
Dim RgbColor As Long
OleColor = &H80000012                 ' COLOR_BTNFACE — the button face colour.
RgbColor = TranslateColor(OleColor)
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)、[RGBA](/official/Reference/VBA/Information/RGBA)函数
- [QBColor](/official/Reference/VBA/Information/QBColor)函数