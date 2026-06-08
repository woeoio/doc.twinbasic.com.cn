---
title: FontWeight
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/FontWeight
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7db63bad-bfd5-4a70-a7fd-0a69da530d7f'
  PropagateID: '7db63bad-bfd5-4a70-a7fd-0a69da530d7f'
  ReservedCode1: '398eec50-78ed-4f9e-9abf-8dd6af2cb8ab'
  ReservedCode2: '398eec50-78ed-4f9e-9abf-8dd6af2cb8ab'
---

# FontWeight
字体的粗细，在 OpenType `wght` 轴和 CSS `font-weight` 使用的标准 100--900 刻度上。赋给 [**FontStyle.Weight**](/official/Reference/CustomControls/Styles/TextRendering#weight)；每种粗细的可用性取决于所选字体系列安装了哪些字面。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbThin** | 100 | 最细粗细（也称 Hairline）。 |
| **tbExtraLight** | 200 | 也称 Ultra Light。 |
| **tbLight** | 300 | 笔画明显比常规粗细更细。 |
| **tbNormal** | 400 | 默认粗细。也称 Regular。新构造的 [**FontStyle**](/official/Reference/CustomControls/Styles/TextRendering) 对象从此开始。 |
| **tbMedium** | 500 | 比 **tbNormal** 略重。 |
| **tbSemiBold** | 600 | 更重；也称 Demi Bold。 |
| **tbBold** | 700 | 标准粗体粗细。 |
| **tbExtraBold** | 800 | 也称 Ultra Bold。 |
| **tbHeavy** | 900 | 最重粗细。也称 Black。 |