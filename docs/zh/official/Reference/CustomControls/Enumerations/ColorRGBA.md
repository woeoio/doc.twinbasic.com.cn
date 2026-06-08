---
title: ColorRGBA
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/ColorRGBA
---
# ColorRGBA
**Long** 兼容类型别名，用于任何需要 32 位 ABGR 颜色值的地方。高字节是 alpha 通道——`&HFF000000` 为完全不透明，`&H00000000` 为完全透明——低三个字节遵循 [**ColorConstants**](/official/Reference/VBRUN/Constants/ColorConstants) `Long` 颜色常量使用的标准 `vbBlue`/`vbGreen`/`vbRed` 顺序。由 [**FillColorPoint.Color**](/official/Reference/CustomControls/Styles/Fill#color) 和 [**FillColorPoints.SetSolidColorRGBA**](/official/Reference/CustomControls/Styles/Fill#setsolidcolorrgba) / [**Borders.SetSimpleBorderRGBA**](/official/Reference/CustomControls/Styles/Borders#setsimpleborderrgba) 的 **RGBA** 参数使用。

::: info
**ColorRGBA** 仅作为空 `Enum` 块声明（带有占位 `[_MAX] = 0` 成员），因为 twinBASIC 尚未暴露类型别名语法如 `Type ColorRGBA = Long`。源码中有 `FIXME` 注释说明了此替代。**ColorRGBA** 应作为 **Long** 兼容类型别名使用，而非带有命名成员的枚举；当别名语法可用时，枚举替代将被替换。
:::

要写入完全不透明颜色，OR 进不透明 alpha 掩码：`&HFF000000 Or vbBlue`。便捷设置器 [**FillColorPoints.SetSolidColor**](/official/Reference/CustomControls/Styles/Fill#setsolidcolor) 和 [**Borders.SetSimpleBorder**](/official/Reference/CustomControls/Styles/Borders#setsimpleborder) 接受普通三字节 **Long** 颜色并自动应用不透明掩码；只有 `*RGBA` 变体接受原始 **ColorRGBA**。

```vb
Dim translucentRed As ColorRGBA = &H800000FF&    ' 50% alpha, full red
```