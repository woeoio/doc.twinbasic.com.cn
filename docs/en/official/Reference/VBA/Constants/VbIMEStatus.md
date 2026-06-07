---
title: VbIMEStatus
parent: Constants Module
permalink: /tB/Modules/Constants/VbIMEStatus
---
# VbIMEStatus

Input Method Editor mode constants. Each value is exposed under both the legacy `vbIME...` name and the newer `vbIMEMode...` name; the two names with the same value are interchangeable.

The constants applicable to a given mode depend on the system locale. Values 4--8 apply to Japanese locales, and values 9 and 10 apply to Korean locales.

| Constants | Value | Description |
|-----------|-------|-------------|
| **vbIMENoOp** / **vbIMEModeNoControl** | 0 | Don't control the IME (default). |
| **vbIMEOn** / **vbIMEModeOn** | 1 | IME on. |
| **vbIMEOff** / **vbIMEModeOff** | 2 | IME off. |
| **vbIMEDisable** / **vbIMEModeDisable** | 3 | IME disabled. |
| **vbIMEHiragana** / **vbIMEModeHiragana** | 4 | Full-width Hiragana mode. |
| **vbIMEKatakanaDbl** / **vbIMEModeKatakana** | 5 | Full-width Katakana mode. |
| **vbIMEKatakanaSng** / **vbIMEModeKatakanaHalf** | 6 | Half-width Katakana mode. |
| **vbIMEAlphaDbl** / **vbIMEModeAlphaFull** | 7 | Full-width Alphanumeric mode. |
| **vbIMEAlphaSng** / **vbIMEModeAlpha** | 8 | Half-width Alphanumeric mode. |
| **vbIMEModeHangulFull** | 9 | Full-width Hangul mode. |
| **vbIMEModeHangul** | 10 | Half-width Hangul mode. |
