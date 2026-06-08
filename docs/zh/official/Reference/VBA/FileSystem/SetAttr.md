---
title: SetAttr
parent: FileSystem Module
permalink: /tB/Modules/FileSystem/SetAttr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd5da8547-3817-4e37-ace0-2d6c35319b4b'
  PropagateID: 'd5da8547-3817-4e37-ace0-2d6c35319b4b'
  ReservedCode1: 'd6b8b740-f14b-45c8-bd2b-a86b1e135a9f'
  ReservedCode2: 'd6b8b740-f14b-45c8-bd2b-a86b1e135a9f'
---

# SetAttr

设置文件的属性信息。

语法：**SetAttr** *pathname*, *attributes*

*pathname*
: *必需* 字符串表达式，指定文件名；可以包含目录或文件夹以及驱动器。

*attributes*
: *必需* 常量或数值表达式，其和指定文件属性。

### 设置

*attributes*设置如下：

| 常量           | 值  | 描述                               |
|----------------|:---:|------------------------------------|
| **vbNormal**   | 0   | 普通（默认）。                     |
| **vbReadOnly** | 1   | 只读。                             |
| **vbHidden**   | 2   | 隐藏。                             |
| **vbSystem**   | 4   | 系统文件。                         |
| **vbArchive**  | 32  | 自上次备份后文件已更改。           |

设置打开文件的属性时会产生运行时错误。

### 示例

本示例使用**SetAttr**语句设置文件的属性。

```vb
SetAttr "TESTFILE", vbHidden    ' Set hidden attribute.
SetAttr "TESTFILE", vbHidden + vbReadOnly    ' Set hidden and read-only attributes.
```

### 另请参阅

- [GetAttr](/official/Reference/VBA/FileSystem/GetAttr)函数