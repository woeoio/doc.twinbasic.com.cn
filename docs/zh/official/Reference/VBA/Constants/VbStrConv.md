---
title: VbStrConv
parent: Constants Module
permalink: /tB/Modules/Constants/VbStrConv
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0aaa227d-7404-4fd7-afb2-7ba29d524937'
  PropagateID: '0aaa227d-7404-4fd7-afb2-7ba29d524937'
  ReservedCode1: 'fe26e592-ac9c-4c33-bd6c-db9b7b38d9ce'
  ReservedCode2: 'fe26e592-ac9c-4c33-bd6c-db9b7b38d9ce'
---

# VbStrConv

[**StrConv**](/official/Reference/VBA/Strings/StrConv) 函数的转换类型标志。兼容的标志可以用 **Or** 组合以同时应用多个转换。

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbUpperCase** | 1 | 将字符串转换为大写字符。 |
| **vbLowerCase** | 2 | 将字符串转换为小写字符。 |
| **vbProperCase** | 3 | 将字符串中每个单词的首字母转换为大写。 |
| **vbWide** | 4 | 将字符串中的窄（单字节）字符转换为宽（双字节）字符。东亚区域设置。 |
| **vbNarrow** | 8 | 将字符串中的宽（双字节）字符转换为窄（单字节）字符。东亚区域设置。 |
| **vbKatakana** | 16 | 将平假名字符转换为片假名。仅限日语。 |
| **vbHiragana** | 32 | 将片假名字符转换为平假名。仅限日语。 |
| **vbUnicode** | 64 | 使用系统默认代码页将字符串转换为 Unicode。 |
| **vbFromUnicode** | 128 | 将字符串从 Unicode 转换为系统默认代码页。 |
| **vbUTF8** | 256 | 将字符串转换为 UTF-8（twinBASIC 扩展）。 |
| **vbFromUTF8** | 512 | 将字符串从 UTF-8 转换（twinBASIC 扩展）。 |

### 另请参阅

- [StrConv](/official/Reference/VBA/Strings/StrConv) 函数