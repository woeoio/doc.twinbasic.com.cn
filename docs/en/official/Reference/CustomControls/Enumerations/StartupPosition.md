---
title: StartupPosition
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/StartupPosition
---
# StartupPosition
The initial position of a form's window when it is first shown. Used by [**WindowsFormOptions.StartUpPosition**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#startupposition). Honoured once, at the form's first display; subsequent moves are at the user's discretion or controlled by code.

| Constant | Value | Description |
|----------|-------|-------------|
| **tbStartUpManual** | 0 | The form uses its design-time **Left** and **Top** values. |
| **tbStartUpCenterOwner** | 1 | The form is centred over its owner window. Falls back to **tbStartUpCenterScreen** if the form has no owner. |
| **tbStartUpCenterScreen** | 2 | The form is centred on the screen. |
| **tbStartUpWindowsDefault** | 3 | Windows chooses the position using the same cascade-from-top-left logic the OS applies to new windows. The default for newly-constructed [**WindowsFormOptions**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions). |
