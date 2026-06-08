---
title: StorageTypeContants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/StorageTypeContants
---
# StorageTypeContants

[**DataObjectFormat.StorageType**](/official/Reference/VBRUN/DataObject/DataObjectFormat#storagetype)和其他低层数据传输例程使用的OLE数据存储介质标识符，用于标识字节的物理存储方式。

::: info
该枚举在运行时命名为 StorageTypeContants（注意缺少字母 s）——这是VB6遗留的长期命名问题，twinBASIC为保持源代码兼容性而保留。
:::

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbHGlobal** | 1 | 全局内存句柄（HGLOBAL）。 |
| **vbFile** | 2 | 磁盘上的文件路径。 |
| **vbIStream** | 4 | IStream 接口指针。 |
| **vbIStorage** | 8 | IStorage 接口指针。 |
| **vbGDI** | 16 | GDI对象句柄。 |
| **vbMetaFile** | 32 | Windows图元文件句柄。 |
| **vbEnhancedMetaFile** | 64 | 增强型图元文件句柄。 |