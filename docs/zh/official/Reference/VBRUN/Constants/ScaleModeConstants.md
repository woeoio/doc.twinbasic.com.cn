---
title: ScaleModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/ScaleModeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'be296186-631c-4495-ad2f-94975964927f'
  PropagateID: 'be296186-631c-4495-ad2f-94975964927f'
  ReservedCode1: '221ed5da-9e2e-4324-8228-caa076dc70df'
  ReservedCode2: '221ed5da-9e2e-4324-8228-caa076dc70df'
---

# ScaleModeConstants

窗体和容器**ScaleMode**属性的测量单位值，控制**Scale**、**CurrentX**、**CurrentY**、**Width**和**Height**属性使用的单位。

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbScaledPixels** | -1 | 像素，按系统DPI因子缩放。*(twinBASIC新增)* |
| **vbUser** | 0 | 使用**Scale**显式设置的用户自定义坐标系。 |
| **vbTwips** | 1 | 缇 --- 1/1440英寸（默认）。 |
| **vbPoints** | 2 | 磅 --- 1/72英寸。 |
| **vbPixels** | 3 | 底层设备的像素。 |
| **vbCharacters** | 4 | 当前字体的字符（水平12磅，垂直24磅）。 |
| **vbInches** | 5 | 英寸。 |
| **vbMillimeters** | 6 | 毫米。 |
| **vbCentimeters** | 7 | 厘米。 |
| **vbHimetric** | 8 | HiMetric单位 --- 0.01毫米。 |
| **vbContainerPosition** | 9 | 容器的坐标，用于定位。 |
| **vbContainerSize** | 10 | 容器的坐标，用于调整大小。 |