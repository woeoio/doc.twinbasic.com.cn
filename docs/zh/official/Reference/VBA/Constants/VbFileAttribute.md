---
title: VbFileAttribute
parent: Constants Module
permalink: /tB/Modules/Constants/VbFileAttribute
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9936f448-14d4-4305-8bc0-3a6cc014a387'
  PropagateID: '9936f448-14d4-4305-8bc0-3a6cc014a387'
  ReservedCode1: 'f33444c5-308b-4ea2-9dc7-9aefcdbdfe54'
  ReservedCode2: 'f33444c5-308b-4ea2-9dc7-9aefcdbdfe54'
---

# VbFileAttribute

[**Dir**](/official/Reference/VBA/FileSystem/Dir)、[**GetAttr**](/official/Reference/VBA/FileSystem/GetAttr) 和 [**SetAttr**](/official/Reference/VBA/FileSystem/SetAttr) 使用的文件和目录属性标志。使用 **Or** 组合多个标志。

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbNormal** | 0 | 普通（**Dir** 和 **SetAttr** 的默认值）。 |
| **vbReadOnly** | 1 | 只读。 |
| **vbHidden** | 2 | 隐藏。 |
| **VbSystem** | 4 | 系统文件。 |
| **vbVolume** | 8 | 卷标。 |
| **vbDirectory** | 16 | 目录或文件夹。 |
| **vbArchive** | 32 | 文件自上次备份以来已更改。 |
| **vbAlias** | 64 | 标识符是别名（旧版 Macintosh）。 |

### 另请参阅

- [Dir](/official/Reference/VBA/FileSystem/Dir)、[GetAttr](/official/Reference/VBA/FileSystem/GetAttr)、[SetAttr](/official/Reference/VBA/FileSystem/SetAttr)