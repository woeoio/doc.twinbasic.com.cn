---
title: PointSize
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/PointSize
---
# PointSize
A **Long**-compatible type alias for a font size, expressed in *typographic points* (a point is 1⁄72 of an inch). Used by [**FontStyle.Size**](/official/Reference/CustomControls/Styles/TextRendering#size). New [**FontStyle**](/official/Reference/CustomControls/Styles/TextRendering) objects default to 12 points.

::: info
**PointSize** is declared as an empty `Enum` block (with a placeholder `[_MAX] = 0` member) only because twinBASIC has not yet exposed a type-alias syntax such as `Type PointSize = Long`. The source contains a `FIXME` comment noting the stand-in. **PointSize** should be used as a **Long**-compatible type alias rather than as an enumeration with named members; when alias syntax becomes available, the enum stand-in will be replaced.
:::
