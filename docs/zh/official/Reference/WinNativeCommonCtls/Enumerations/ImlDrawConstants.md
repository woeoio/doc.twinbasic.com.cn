---
title: ImlDrawConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/ImlDrawConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8407e246-bf2f-4afd-8ec5-e934054bcbcb'
  PropagateID: '8407e246-bf2f-4afd-8ec5-e934054bcbcb'
  ReservedCode1: '1a469eba-b19b-4ce9-b202-46c6db8631e7'
  ReservedCode2: '1a469eba-b19b-4ce9-b202-46c6db8631e7'
---

# ImlDrawConstants
传递给 [**ListImage.Draw**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw) 的 *Style* 参数的标志组合。多个标志可通过 **Or** 运算组合以构成渲染样式。

```vb
' Draw a small icon with the focus rectangle overlaid:
ImageList1.ListImages("doc").Draw _
    PictureBox1.hDC, 0, 0, _
    ImlDrawTransparent Or ImlDrawFocus
```

| 成员                    | 值 | 描述                                                              |
|---------------------------|-------|--------------------------------------------------------------------------|
| **ImlDrawNormal**           | 1  | 以正常状态渲染（无覆盖层）。                |
| **ImlDrawTransparent** | 2  | 遵循图像的遮罩/Alpha —— 透明像素保持透明。 |
| **ImlDrawSelected**       | 4  | 以选中颜色覆盖层渲染（通常为蓝色色调）。        |
| **ImlDrawFocus**             | 8  | 以焦点矩形覆盖层渲染（虚线边框）。                |
| **ImlDrawNoMask**           | 16 | 忽略遮罩 —— 绘制整个位图，包括通常为透明的像素。 |

## 另见

- [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/) —— 父控件
- [ListImage.Draw](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw) —— 使用该枚举的方法