---
title: KeyCodeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/KeyCodeConstants
---
# KeyCodeConstants

Virtual-key codes reported in the *KeyCode* argument of **KeyDown** and **KeyUp** events. The values match the underlying Windows virtual-key codes (`VK_*`).

::: info
In classic VBA, `KeyCodeConstants` is a module of standalone constants; in VB6 and twinBASIC it is an enumeration.
:::

## Mouse buttons and modifiers

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKeyLButton** | 1 | Left mouse button. |
| **vbKeyRButton** | 2 | Right mouse button. |
| **vbKeyMButton** | 4 | Middle mouse button. |
| **vbKeyShift** | 16 | **Shift**. |
| **vbKeyControl** | 17 | **Ctrl**. |
| **vbKeyMenu** | 18 | **Alt**. |

## Editing and navigation

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKeyCancel** | 3 | **Ctrl**+**Break**. |
| **vbKeyBack** | 8 | **Backspace**. |
| **vbKeyTab** | 9 | **Tab**. |
| **vbKeyClear** | 12 | **Clear** (numeric pad **5** without **Num Lock**). |
| **vbKeyReturn** | 13 | **Enter**. |
| **vbKeyPause** | 19 | **Pause**. |
| **vbKeyCapital** | 20 | **Caps Lock**. |
| **vbKeyEscape** | 27 | **Esc**. |
| **vbKeySpace** | 32 | **Space**. |
| **vbKeyPageUp** | 33 | **Page Up**. |
| **vbKeyPageDown** | 34 | **Page Down**. |
| **vbKeyEnd** | 35 | **End**. |
| **vbKeyHome** | 36 | **Home**. |
| **vbKeyLeft** | 37 | **Left arrow**. |
| **vbKeyUp** | 38 | **Up arrow**. |
| **vbKeyRight** | 39 | **Right arrow**. |
| **vbKeyDown** | 40 | **Down arrow**. |
| **vbKeySelect** | 41 | **Select**. |
| **vbKeyPrint** | 42 | **Print**. |
| **vbKeyExecute** | 43 | **Execute**. |
| **vbKeySnapshot** | 44 | **Print Screen**. |
| **vbKeyInsert** | 45 | **Insert**. |
| **vbKeyDelete** | 46 | **Delete**. |
| **vbKeyHelp** | 47 | **Help**. |
| **vbKeyNumlock** | 144 | **Num Lock**. |
| **vbKeyScrollLock** | 145 | **Scroll Lock**. |

## Letter keys

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKeyA** -- **vbKeyZ** | 65 -- 90 | The letters **A** through **Z**. |

## Number keys

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKey0** -- **vbKey9** | 48 -- 57 | The digits **0** through **9** on the main keyboard. |

## Numeric keypad

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKeyNumpad0** -- **vbKeyNumpad9** | 96 -- 105 | The digits **0** through **9** on the numeric keypad. |
| **vbKeyMultiply** | 106 | **\*** on the numeric keypad. |
| **vbKeyAdd** | 107 | **+** on the numeric keypad. |
| **vbKeySeparator** | 108 | Numeric-keypad separator. |
| **vbKeySubtract** | 109 | **-** on the numeric keypad. |
| **vbKeyDecimal** | 110 | **.** on the numeric keypad. |
| **vbKeyDivide** | 111 | **/** on the numeric keypad. |

## Function keys

| Constant | Value | Description |
|----------|-------|-------------|
| **vbKeyF1** -- **vbKeyF16** | 112 -- 127 | The function keys **F1** through **F16**. |
