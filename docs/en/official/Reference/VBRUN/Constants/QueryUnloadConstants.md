---
title: QueryUnloadConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/QueryUnloadConstants
---
# QueryUnloadConstants

Reason codes reported in the *UnloadMode* argument of a form's **QueryUnload** event, identifying what triggered the unload.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbFormControlMenu** | 0 | The user clicked the form's Close button (or selected Close from its system menu). |
| **vbFormCode** | 1 | The unload was initiated by code calling **Unload**. |
| **vbAppWindows** | 2 | Windows is shutting down. |
| **vbAppTaskManager** | 3 | The application is being closed by Task Manager. |
| **vbFormMDIForm** | 4 | The MDI parent form is being unloaded. |
| **vbFormOwner** | 5 | The owner form is being unloaded. |
