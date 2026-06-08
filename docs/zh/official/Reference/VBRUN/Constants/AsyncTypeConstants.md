---
title: AsyncTypeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/AsyncTypeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c0540230-7b9e-44ad-a917-d1039dd06a84'
  PropagateID: 'c0540230-7b9e-44ad-a917-d1039dd06a84'
  ReservedCode1: '0260e387-ac3f-4046-a40b-2e4aa1924e5d'
  ReservedCode2: '0260e387-ac3f-4046-a40b-2e4aa1924e5d'
---

# AsyncTypeConstants

**UserControl.AsyncRead**传递的数据类型，也通过[**AsyncProperty.AsyncType**](/official/Reference/VBRUN/AsyncProperty/AsyncType)报告。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbAsyncTypePicture** | 0 | 数据以**stdole.IPictureDisp**形式传递。 |
| **vbAsyncTypeFile** | 1 | 数据下载到临时文件；**Value**保存文件路径。 |
| **vbAsyncTypeByteArray** | 2 | 数据以**Byte**数组形式传递。 |