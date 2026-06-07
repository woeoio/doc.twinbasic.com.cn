---
title: VbMsgBoxStyle
parent: Constants Module
permalink: /tB/Modules/Constants/VbMsgBoxStyle
---
# VbMsgBoxStyle

Buttons, icons, default-button, modality, and other behaviour flags for the **MsgBox** dialog. Combine values from different groups with **Or** (or addition) to specify the desired combination --- for example, `vbYesNo Or vbCritical Or vbDefaultButton2`.

### Buttons

| Constant | Value | Description |
|----------|-------|-------------|
| **vbOKOnly** | 0 | **OK** button only (default). |
| **vbOKCancel** | 1 | **OK** and **Cancel** buttons. |
| **vbAbortRetryIgnore** | 2 | **Abort**, **Retry**, and **Ignore** buttons. |
| **vbYesNoCancel** | 3 | **Yes**, **No**, and **Cancel** buttons. |
| **vbYesNo** | 4 | **Yes** and **No** buttons. |
| **vbRetryCancel** | 5 | **Retry** and **Cancel** buttons. |
| **vbCancelTryAgainContinue** | 6 | **Cancel**, **Try Again**, and **Continue** buttons. |

### Icon

| Constant | Value | Description |
|----------|-------|-------------|
| **vbCritical** | 16 | Critical message icon. |
| **vbQuestion** | 32 | Warning query icon. |
| **vbExclamation** | 48 | Warning message icon. |
| **vbInformation** | 64 | Information message icon. |

### Default button

| Constant | Value | Description |
|----------|-------|-------------|
| **vbDefaultButton1** | 0 | First button is default (default). |
| **vbDefaultButton2** | 256 | Second button is default. |
| **vbDefaultButton3** | 512 | Third button is default. |
| **vbDefaultButton4** | 768 | Fourth button is default. |

### Modality

| Constant | Value | Description |
|----------|-------|-------------|
| **vbApplicationModal** | 0 | Application-modal message box (default). |
| **vbSystemModal** | 4096 | System-modal message box. |

### Options

| Constant | Value | Description |
|----------|-------|-------------|
| **vbMsgBoxHelpButton** | 16384 | Adds a Help button to the message box. |
| **vbMsgBoxSetForeground** | 65536 | Specifies the message box window as the foreground window. |
| **vbMsgBoxRight** | 524288 | Text is right-aligned. |
| **vbMsgBoxRtlReading** | 1048576 | Text is displayed right-to-left, for Hebrew and Arabic systems. |

### See Also

- [VbMsgBoxResult](/en/official/Reference/VBA/Constants/VbMsgBoxResult)
