---
title: OLEContainerConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/OLEContainerConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f54205f2-3705-4b8f-9655-4b7c337a4cfd'
  PropagateID: 'f54205f2-3705-4b8f-9655-4b7c337a4cfd'
  ReservedCode1: '0217bed7-c92e-4a67-8ff9-40b5ac9b45bd'
  ReservedCode2: '0217bed7-c92e-4a67-8ff9-40b5ac9b45bd'
---

# OLEContainerConstants

包含**OLE**容器控件使用的所有选项值的组合枚举。每组逻辑值都有更具体的枚举 --- 参见另见部分 --- 但**OLEContainerConstants**保留了所有原始VB6名称，以便现有代码继续编译。

## OLE类型

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLELinked** | 0 | 对象链接到其源。 |
| **vbOLEEmbedded** | 1 | 对象嵌入在容器中。 |
| **vbOLEEither** | 2 | 链接或嵌入。 |
| **vbOLENone** | 3 | 无对象。 |

## 更新选项

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEAutomatic** | 0 | 源更改时容器自动更新链接对象。 |
| **vbOLEFrozen** | 1 | 更新已暂停。 |
| **vbOLEManual** | 2 | 仅在调用**Update**时更新。 |

## 激活触发

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEActivateManual** | 0 | 通过**DoVerb**手动激活。 |
| **vbOLEActivateGetFocus** | 1 | 获得焦点时激活。 |
| **vbOLEActivateDoubleclick** | 2 | 双击时激活。 |
| **vbOLEActivateAuto** | 3 | 根据对象默认设置自动激活。 |

## 大小调整

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLESizeClip** | 0 | 对象在容器边缘处被裁剪。 |
| **vbOLESizeStretch** | 1 | 对象拉伸以填充容器。 |
| **vbOLESizeAutoSize** | 2 | 容器自动调整大小以适应对象。 |
| **vbOLESizeZoom** | 3 | 对象按比例缩放以适应容器，保持宽高比。 |

## 显示样式

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEDisplayContent** | 0 | 显示对象内容。 |
| **vbOLEDisplayIcon** | 1 | 对象以图标显示。 |

## 状态

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEChanged** | 0 | 对象自上次更新以来已更改。 |
| **vbOLESaved** | 1 | 对象已保存。 |
| **vbOLEClosed** | 2 | 对象已关闭。 |
| **vbOLERenamed** | 3 | 对象已重命名。 |

## 动词

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEPrimary** | 0 | 调用对象的主动词。 |
| **vbOLEShow** | -1 | 显示对象。 |
| **vbOLEOpen** | -2 | 在单独窗口中打开对象。 |
| **vbOLEHide** | -3 | 隐藏对象。 |
| **vbOLEUIActivate** | -4 | 激活对象的用户界面。 |
| **vbOLEInPlaceActivate** | -5 | 就地激活对象。 |
| **vbOLEDiscardUndoState** | -6 | 丢弃对象持有的任何撤销状态。 |

## 菜单标志

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEFlagGrayed** | 1 | 动词在菜单中灰显。 |
| **vbOLEFlagDisabled** | 2 | 动词被禁用。 |
| **vbOLEFlagChecked** | 8 | 动词显示有复选标记。 |
| **vbOLEFlagSeparator** | 2048 | 项目呈现为菜单分隔符。 |

## 杂项

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbOLEMiscFlagMemStorage** | 1 | 对象的存储保留在内存中而非磁盘上。 |
| **vbOLEMiscFlagDisableInPlace** | 2 | 此对象禁用就地激活。 |

### 另见

- [OLEContainerActivateConstants](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants)
- [OLEContainerDisplayTypeConstants](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants)
- [OLEContainerSizeModeConstants](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants)
- [OLEContainerTypesAllowedConstants](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants)
- [OLEContainerUpdateOptionsConstants](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants)