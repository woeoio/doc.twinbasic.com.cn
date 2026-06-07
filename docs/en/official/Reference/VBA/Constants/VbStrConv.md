---
title: VbStrConv
parent: Constants Module
permalink: /tB/Modules/Constants/VbStrConv
---
# VbStrConv

Conversion type flags for the [**StrConv**](/en/official/Reference/VBA/Strings/StrConv) function. Compatible flags can be combined with **Or** to apply multiple conversions at once.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbUpperCase** | 1 | Converts the string to uppercase characters. |
| **vbLowerCase** | 2 | Converts the string to lowercase characters. |
| **vbProperCase** | 3 | Converts the first letter of every word in the string to uppercase. |
| **vbWide** | 4 | Converts narrow (single-byte) characters in the string to wide (double-byte) characters. East-Asia locales. |
| **vbNarrow** | 8 | Converts wide (double-byte) characters in the string to narrow (single-byte) characters. East-Asia locales. |
| **vbKatakana** | 16 | Converts Hiragana characters to Katakana. Japan only. |
| **vbHiragana** | 32 | Converts Katakana characters to Hiragana. Japan only. |
| **vbUnicode** | 64 | Converts the string to Unicode using the system default code page. |
| **vbFromUnicode** | 128 | Converts the string from Unicode to the system default code page. |
| **vbUTF8** | 256 | Converts the string to UTF-8 (twinBASIC extension). |
| **vbFromUTF8** | 512 | Converts the string from UTF-8 (twinBASIC extension). |

### See Also

- [StrConv](/en/official/Reference/VBA/Strings/StrConv) function
