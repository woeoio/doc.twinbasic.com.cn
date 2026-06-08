---
title: ControlBorderStyleConstantsCustom
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/ControlBorderStyleConstantsCustom
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '042d8dfa-3a59-4baf-adc3-e5648dd4076b'
  PropagateID: '042d8dfa-3a59-4baf-adc3-e5648dd4076b'
  ReservedCode1: '2cc3a115-313f-4b6f-841c-c8fcbbd74000'
  ReservedCode2: '2cc3a115-313f-4b6f-841c-c8fcbbd74000'
---

# ControlBorderStyleConstantsCustom

除标准选项外还支持自定义绘制边框的控件的边框样式值。该枚举标记为**\[MustBeQualified\]**，因此成员必须通过枚举名引用（`ControlBorderStyleConstantsCustom.vbCustomBorder`），以避免与[**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants)中类似命名的值冲突。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbNoBorder** | 0 | 不绘制边框。 |
| **vbFixedSingleBorder** | 1 | 固定单线边框，不可调整大小。 |
| **vbCustomBorder** | 2 | 控件引发允许用户代码自行绘制边框的事件。 |