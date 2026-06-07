---
title: AsyncTypeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncTypeConstants
---
# AsyncTypeConstants

The kind of data being delivered by **UserControl.AsyncRead**, also reported back through [**AsyncProperty.AsyncType**](/official/Reference/VBRUN/AsyncProperty/AsyncType).

| Constant | Value | Description |
|----------|-------|-------------|
| **vbAsyncTypePicture** | 0 | The data is delivered as an **stdole.IPictureDisp**. |
| **vbAsyncTypeFile** | 1 | The data is downloaded to a temporary file; **Value** holds the file's path. |
| **vbAsyncTypeByteArray** | 2 | The data is delivered as a **Byte** array. |
