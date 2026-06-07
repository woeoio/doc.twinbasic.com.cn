---
title: BorderStyle
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/BorderStyle
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '25cc4648-0317-4e54-8c35-ddf207cc0a47'
  PropagateID: '25cc4648-0317-4e54-8c35-ddf207cc0a47'
  ReservedCode1: '50ce1419-bfd6-4e8d-a7a9-02fc4fd1f77e'
  ReservedCode2: '50ce1419-bfd6-4e8d-a7a9-02fc4fd1f77e'
---

# BorderStyle
The Win32 frame style used by a [**WaynesForm**](/en/official/Reference/CustomControls/WaynesForm/) window. Determines whether the window has a thick or thin border, whether it can be resized by dragging an edge, and whether it shows a normal title bar or the smaller tool-window title bar. Used by [**WindowsFormOptions.BorderStyle**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#borderstyle).

| Constant | Value | Description |
|----------|-------|-------------|
| **tbNone** | 0 | No border at all --- the form is a borderless, captionless rectangle. |
| **tbFixedSingle** | 1 | Thin single-line border; size is fixed at run time. |
| **tbFixedSizable** | 2 | Standard resizable border with a normal title bar. The default for newly-constructed [**WindowsFormOptions**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions). |
| **tbFixedDialog** | 3 | Dialog-frame border; size is fixed and the system menu offers only **Move** / **Close**. |
| **tbFixedToolWindow** | 4 | Tool-window border with the smaller title bar; size is fixed. |
| **tbSizableToolWindow** | 5 | Tool-window border with the smaller title bar; the window is resizable. |

Most border styles cannot be combined with **MinimizeButton** or **MaximizeButton** --- only **tbFixedSizable** shows full sizing controls. Setting [**MinimizeButton**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#minimizebutton) or [**MaximizeButton**](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions#maximizebutton) to **True** on a window style that does not include them has no effect.

> AI生成