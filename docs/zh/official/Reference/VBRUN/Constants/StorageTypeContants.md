---
title: StorageTypeContants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/StorageTypeContants
---
# StorageTypeContants

OLE data-storage medium identifiers used by [**DataObjectFormat.StorageType**](/official/Reference/VBRUN/DataObject/DataObjectFormat#storagetype) and other low-level data-transfer routines, identifying how the bytes are physically stored.

::: info
The enum is named `StorageTypeContants` (note the missing `s`) in the runtime --- a long-standing VB6 holdover that twinBASIC preserves for source compatibility.
:::

| Constant | Value | Description |
|----------|-------|-------------|
| **vbHGlobal** | 1 | A global memory handle (`HGLOBAL`). |
| **vbFile** | 2 | A path to a file on disk. |
| **vbIStream** | 4 | An `IStream` interface pointer. |
| **vbIStorage** | 8 | An `IStorage` interface pointer. |
| **vbGDI** | 16 | A GDI object handle. |
| **vbMetaFile** | 32 | A Windows metafile handle. |
| **vbEnhancedMetaFile** | 64 | An enhanced metafile handle. |
