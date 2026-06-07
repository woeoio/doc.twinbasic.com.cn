---
title: IMEStatus
parent: Information Module
permalink: /tB/Modules/Information/IMEStatus
---
# IMEStatus

Returns a [**VbIMEStatus**](/en/official/Reference/VBA/Constants/VbIMEStatus) value specifying the current Input Method Editor (IME) mode of Microsoft Windows; available in East Asian versions only.

Syntax: **IMEStatus** [ **()** ]

The return value is one of the [**VbIMEStatus**](/en/official/Reference/VBA/Constants/VbIMEStatus) constants. Locales differ in which constants can be returned:

- **Japanese**: any of `vbIMEModeNoControl`, `vbIMEModeOn`, `vbIMEModeOff`, `vbIMEModeDisable`, `vbIMEModeHiragana`, `vbIMEModeKatakana`, `vbIMEModeKatakanaHalf`, `vbIMEModeAlphaFull`, `vbIMEModeAlpha`.
- **Korean**: `vbIMEModeNoControl`, `vbIMEModeAlphaFull`, `vbIMEModeAlpha`, `vbIMEModeHangulFull`, `vbIMEModeHangul`.
- **Chinese**: `vbIMEModeNoControl`, `vbIMEModeOn`, `vbIMEModeOff`.

### See Also

- [VbIMEStatus](/en/official/Reference/VBA/Constants/VbIMEStatus) enumeration
