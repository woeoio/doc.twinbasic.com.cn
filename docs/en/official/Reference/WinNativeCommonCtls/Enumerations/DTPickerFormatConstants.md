---
title: DTPickerFormatConstants
parent: Enumerations
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants
---

# DTPickerFormatConstants
Selects the display format used by a [**DTPicker**](/en/official/Reference/WinNativeCommonCtls/DTPicker) control. Used by the [**DTPicker.Format**](/en/official/Reference/WinNativeCommonCtls/DTPicker#format) property.

When set to **dtpCustom**, the picker also reads [**DTPicker.CustomFormat**](/en/official/Reference/WinNativeCommonCtls/DTPicker#customformat) to control the actual display.

| Member            | Value | Description                                                            |
|-------------------|-------|------------------------------------------------------------------------|
| **dtpLongDate**   | 0 | Long date format, e.g. *"Tuesday, January 14, 2025"*.   |
| **dtpShortDate** | 1 | Short date format, e.g. *"1/14/2025"*.                  |
| **dtpTime**           | 2 | Time format, e.g. *"3:45:00 PM"*.                       |
| **dtpCustom**       | 3 | Custom picture string from [**CustomFormat**](/en/official/Reference/WinNativeCommonCtls/DTPicker#customformat). |

## See Also

- [DTPicker](/en/official/Reference/WinNativeCommonCtls/DTPicker) -- the consuming control
