---
title: "文件 I/O"
parent: Standard Library
nav_order: 2
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '98b031eb-0cf7-4e16-9e80-0b9b7c10074a'
  PropagateID: '98b031eb-0cf7-4e16-9e80-0b9b7c10074a'
  ReservedCode1: 'de916ca7-f55d-4eaa-9441-e9a3bc1261ca'
  ReservedCode2: 'de916ca7-f55d-4eaa-9441-e9a3bc1261ca'
---

# 文件 I/O 的编码选项

`Open` 语句通过新的 `Encoding` 关键字和变量支持 Unicode，允许你指定多种编码选项，除了标准的 Unicode 选项外。

## 用法示例

```vb
Open "C:\MyFile.txt" For Input Encoding utf_8 As #1
```

## 支持的编码

参见 **Open** 语句参考页面上的[文本编码表](/official/Reference/Core/Open#text-encodings)。