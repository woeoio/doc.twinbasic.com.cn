---
title: PointSize
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/PointSize
---
# PointSize
字体大小的 **Long** 兼容类型别名，以*排版磅*表示（一磅为 1⁄72 英寸）。由 [**FontStyle.Size**](/official/Reference/CustomControls/Styles/TextRendering#size) 使用。新 [**FontStyle**](/official/Reference/CustomControls/Styles/TextRendering) 对象默认为 12 磅。

::: info
**PointSize** 仅作为空 `Enum` 块声明（带有占位 `[_MAX] = 0` 成员），因为 twinBASIC 尚未暴露类型别名语法如 `Type PointSize = Long`。源码中有 `FIXME` 注释说明了此替代。**PointSize** 应作为 **Long** 兼容类型别名使用，而非带有命名成员的枚举；当别名语法可用时，枚举替代将被替换。
:::