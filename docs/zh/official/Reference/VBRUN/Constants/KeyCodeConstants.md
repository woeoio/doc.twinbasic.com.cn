---
title: KeyCodeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/KeyCodeConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0d51fe34-f3f5-4249-b6b4-06fc0963f016'
  PropagateID: '0d51fe34-f3f5-4249-b6b4-06fc0963f016'
  ReservedCode1: '8838fea6-dd31-4568-8bf1-0c829723cc61'
  ReservedCode2: '8838fea6-dd31-4568-8bf1-0c829723cc61'
---

# KeyCodeConstants

**KeyDown**和**KeyUp**事件的*KeyCode*参数中报告的虚拟键代码。值与底层Windows虚拟键代码（`VK_*`）匹配。

::: info
在经典VBA中，`KeyCodeConstants`是独立常量模块；在VB6和twinBASIC中它是一个枚举。
:::

## 鼠标按钮和修饰键

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKeyLButton** | 1 | 鼠标左键。 |
| **vbKeyRButton** | 2 | 鼠标右键。 |
| **vbKeyMButton** | 4 | 鼠标中键。 |
| **vbKeyShift** | 16 | **Shift**。 |
| **vbKeyControl** | 17 | **Ctrl**。 |
| **vbKeyMenu** | 18 | **Alt**。 |

## 编辑和导航

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKeyCancel** | 3 | **Ctrl**+**Break**。 |
| **vbKeyBack** | 8 | **Backspace**。 |
| **vbKeyTab** | 9 | **Tab**。 |
| **vbKeyClear** | 12 | **Clear**（数字小键盘**5**，不按**Num Lock**）。 |
| **vbKeyReturn** | 13 | **Enter**。 |
| **vbKeyPause** | 19 | **Pause**。 |
| **vbKeyCapital** | 20 | **Caps Lock**。 |
| **vbKeyEscape** | 27 | **Esc**。 |
| **vbKeySpace** | 32 | **空格**。 |
| **vbKeyPageUp** | 33 | **Page Up**。 |
| **vbKeyPageDown** | 34 | **Page Down**。 |
| **vbKeyEnd** | 35 | **End**。 |
| **vbKeyHome** | 36 | **Home**。 |
| **vbKeyLeft** | 37 | **左箭头**。 |
| **vbKeyUp** | 38 | **上箭头**。 |
| **vbKeyRight** | 39 | **右箭头**。 |
| **vbKeyDown** | 40 | **下箭头**。 |
| **vbKeySelect** | 41 | **Select**。 |
| **vbKeyPrint** | 42 | **Print**。 |
| **vbKeyExecute** | 43 | **Execute**。 |
| **vbKeySnapshot** | 44 | **Print Screen**。 |
| **vbKeyInsert** | 45 | **Insert**。 |
| **vbKeyDelete** | 46 | **Delete**。 |
| **vbKeyHelp** | 47 | **Help**。 |
| **vbKeyNumlock** | 144 | **Num Lock**。 |
| **vbKeyScrollLock** | 145 | **Scroll Lock**。 |

## 字母键

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKeyA** -- **vbKeyZ** | 65 -- 90 | 字母**A**到**Z**。 |

## 数字键

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKey0** -- **vbKey9** | 48 -- 57 | 主键盘上的数字**0**到**9**。 |

## 数字小键盘

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKeyNumpad0** -- **vbKeyNumpad9** | 96 -- 105 | 数字小键盘上的数字**0**到**9**。 |
| **vbKeyMultiply** | 106 | 数字小键盘上的**\***。 |
| **vbKeyAdd** | 107 | 数字小键盘上的**+**。 |
| **vbKeySeparator** | 108 | 数字小键盘分隔符。 |
| **vbKeySubtract** | 109 | 数字小键盘上的**-**。 |
| **vbKeyDecimal** | 110 | 数字小键盘上的**.**。 |
| **vbKeyDivide** | 111 | 数字小键盘上的**/**。 |

## 功能键

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbKeyF1** -- **vbKeyF16** | 112 -- 127 | 功能键**F1**到**F16**。 |