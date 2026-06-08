---
title: ClipboardConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/ClipboardConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '86ea1af4-2559-4698-a937-3dff75eb8a2c'
  PropagateID: '86ea1af4-2559-4698-a937-3dff75eb8a2c'
  ReservedCode1: '7194640a-30c5-4832-95f5-6f076e29de5a'
  ReservedCode2: '7194640a-30c5-4832-95f5-6f076e29de5a'
---

# ClipboardConstants

[**DataObject**](/official/Reference/VBRUN/DataObject/)和**Clipboard**对象使用的标准剪贴板格式标识符，用于选择值的存储或检索方式。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbCFText** | 1 | ANSI文本。 |
| **vbCFBitmap** | 2 | 设备相关位图（`HBITMAP`）。 |
| **vbCFMetafile** | 3 | Windows元文件。 |
| **vbCFDIB** | 8 | 设备无关位图。 |
| **vbCFPalette** | 9 | 调色板。 |
| **vbCFUnicodeText** | 13 | Unicode(UTF-16)文本。 |
| **vbCFEMetafile** | 14 | 增强元文件。 |
| **vbCFFiles** | 15 | 文件路径列表（通常来自Windows外壳拖放）。 |
| **vbCFLink** | &HFFFFBF00 | DDE链接引用。 |
| **vbCFRTF** | &HFFFFBF01 | 富文本格式。 |