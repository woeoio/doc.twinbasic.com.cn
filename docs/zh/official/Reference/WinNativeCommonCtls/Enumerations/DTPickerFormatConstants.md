---
title: DTPickerFormatConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '06d7dbb8-e75a-4930-ad77-cb7dfe0fabc0'
  PropagateID: '06d7dbb8-e75a-4930-ad77-cb7dfe0fabc0'
  ReservedCode1: '9623b0da-697d-4709-9b46-80edff993db5'
  ReservedCode2: '9623b0da-697d-4709-9b46-80edff993db5'
---

# DTPickerFormatConstants
选择 [**DTPicker**](/official/Reference/WinNativeCommonCtls/DTPicker) 控件使用的显示格式。由 [**DTPicker.Format**](/official/Reference/WinNativeCommonCtls/DTPicker#format) 属性使用。

当设置为 **dtpCustom** 时，选择器还会读取 [**DTPicker.CustomFormat**](/official/Reference/WinNativeCommonCtls/DTPicker#customformat) 来控制实际显示。

| 成员            | 值 | 描述                                                            |
|-------------------|-------|------------------------------------------------------------------------|
| **dtpLongDate**   | 0 | 长日期格式，例如 *"Tuesday, January 14, 2025"*。   |
| **dtpShortDate** | 1 | 短日期格式，例如 *"1/14/2025"*。                  |
| **dtpTime**           | 2 | 时间格式，例如 *"3:45:00 PM"*。                       |
| **dtpCustom**       | 3 | 来自 [**CustomFormat**](/official/Reference/WinNativeCommonCtls/DTPicker#customformat) 的自定义图片字符串。 |

## 另见

- [DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker) —— 使用该枚举的控件