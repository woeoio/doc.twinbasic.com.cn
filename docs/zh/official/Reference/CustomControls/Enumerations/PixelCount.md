---
title: PixelCount
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/PixelCount
---
# PixelCount
**Long** 兼容类型别名，用于任何需要以像素为单位测量值的地方。在包中被广泛使用——每个控件继承的 **Left**、**Top**、**Width**、**Height** 类型为 **PixelCount**，[**Corner.Radius**](/official/Reference/CustomControls/Styles/Corners#radius)、[**Padding**](/official/Reference/CustomControls/Styles/Padding) 字段、[**Border.StrokeSize**](/official/Reference/CustomControls/Styles/Borders#strokesize) 等也是如此。

::: info
**PixelCount** 仅作为空 `Enum` 块声明（带有占位 `[_MAX] = 0` 成员），因为 twinBASIC 尚未暴露类型别名语法如 `Type PixelCount = Long`。源码中有 `FIXME` 注释说明了此替代。**PixelCount** 应作为 **Long** 兼容类型别名使用，而非带有命名成员的枚举；当别名语法可用时，枚举替代将被替换。
:::

包将一个 **PixelCount** 视为一个*未缩放的*像素；设计时画布为 96 DPI。运行时在绘制时根据活动监视器的 DPI 缩放值，因此 15 像素角半径在 96 DPI 和 192 DPI 显示器上看起来相同。在 [**ICustomControl.Paint**](/official/Reference/CustomControls/Framework/ICustomControl#paint) 实现中，缩放因子可通过 [**Canvas.RuntimeUICCGetDpiScaleFactor**](/official/Reference/CustomControls/Framework/Canvas#runtimeuiccgetdpiscalefactor) 获取。