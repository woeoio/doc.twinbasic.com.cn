---
title: TextOverflowMode
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/TextOverflowMode
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '33d8c38f-e5af-4da5-afb4-f23bc3f04498'
  PropagateID: '33d8c38f-e5af-4da5-afb4-f23bc3f04498'
  ReservedCode1: '150eac08-266a-4968-823e-416e5864f6d7'
  ReservedCode2: '150eac08-266a-4968-823e-416e5864f6d7'
---

# TextOverflowMode
控制不适合可用矩形的文本如何截断。由 [**TextRendering.OverflowMode**](/official/Reference/CustomControls/Styles/TextRendering#overflowmode) 使用。

| 常量 | 值 | 说明 |
|------|----|------|
| **tbAllowPartialChars** | 0 | 在可用宽度处截断，允许最后一个字形被裁剪为半字符。 |
| **tbDisallowPartialChars** | 1 | 在最后一个完全可见的字符处截断；边缘无半个字形。由 [**WaynesTextBox**](/official/Reference/CustomControls/WaynesTextBox/) 使用，以便插入符不会落在代理对字形之间。 |
| **tbAppendEllipsis** | 2 | 在最后一个完全可见的字符处截断，如果有字符被省略则追加 `…`。新构造的 [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) 对象的默认值。 |
| **tbShrinkToFit** | 3 | 缩小渲染字体大小直到整个字符串适合而不截断。由 [**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer) 使用，使其设计时时钟图标随控件缩放。 |