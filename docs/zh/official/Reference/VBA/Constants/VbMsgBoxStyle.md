---
title: VbMsgBoxStyle
parent: Constants Module
permalink: /tB/Modules/Constants/VbMsgBoxStyle
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fff6a0f1-cbdd-49ae-a544-8bd68c5ee568'
  PropagateID: 'fff6a0f1-cbdd-49ae-a544-8bd68c5ee568'
  ReservedCode1: '4fa1744b-5261-492e-b774-795e6391cba9'
  ReservedCode2: '4fa1744b-5261-492e-b774-795e6391cba9'
---

# VbMsgBoxStyle

**MsgBox** 对话框的按钮、图标、默认按钮、模态和其他行为标志。使用 **Or**（或加法）组合不同组的值以指定所需的组合——例如 `vbYesNo Or vbCritical Or vbDefaultButton2`。

### 按钮

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbOKOnly** | 0 | 仅 **OK** 按钮（默认）。 |
| **vbOKCancel** | 1 | **OK** 和 **Cancel** 按钮。 |
| **vbAbortRetryIgnore** | 2 | **Abort**、**Retry** 和 **Ignore** 按钮。 |
| **vbYesNoCancel** | 3 | **Yes**、**No** 和 **Cancel** 按钮。 |
| **vbYesNo** | 4 | **Yes** 和 **No** 按钮。 |
| **vbRetryCancel** | 5 | **Retry** 和 **Cancel** 按钮。 |
| **vbCancelTryAgainContinue** | 6 | **Cancel**、**Try Again** 和 **Continue** 按钮。 |

### 图标

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbCritical** | 16 | 严重消息图标。 |
| **vbQuestion** | 32 | 警告查询图标。 |
| **vbExclamation** | 48 | 警告消息图标。 |
| **vbInformation** | 64 | 信息消息图标。 |

### 默认按钮

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbDefaultButton1** | 0 | 第一个按钮为默认（默认）。 |
| **vbDefaultButton2** | 256 | 第二个按钮为默认。 |
| **vbDefaultButton3** | 512 | 第三个按钮为默认。 |
| **vbDefaultButton4** | 768 | 第四个按钮为默认。 |

### 模态

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbApplicationModal** | 0 | 应用程序模态消息框（默认）。 |
| **vbSystemModal** | 4096 | 系统模态消息框。 |

### 选项

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbMsgBoxHelpButton** | 16384 | 向消息框添加帮助按钮。 |
| **vbMsgBoxSetForeground** | 65536 | 指定消息框窗口为前台窗口。 |
| **vbMsgBoxRight** | 524288 | 文本右对齐。 |
| **vbMsgBoxRtlReading** | 1048576 | 文本从右到左显示，适用于希伯来语和阿拉伯语系统。 |

### 另请参阅

- [VbMsgBoxResult](/official/Reference/VBA/Constants/VbMsgBoxResult)