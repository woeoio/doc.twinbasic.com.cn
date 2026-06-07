---
title: DockMode
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/DockMode
---
# DockMode
How a control is positioned relative to its container --- attached to one edge, filling the whole client area, or not docked at all (positioned absolutely by [**Left**](/en/official/Reference/CustomControls#controls) / [**Top**](/en/official/Reference/CustomControls#controls) / [**Width**](/en/official/Reference/CustomControls#controls) / [**Height**](/en/official/Reference/CustomControls#controls)). Used by the **Dock** property that every concrete custom control inherits.

| Constant | Value | Description |
|----------|-------|-------------|
| **tbDockNone** | 0 | Not docked. The control's **Left**, **Top**, **Width**, and **Height** are used directly, modulated by the control's [**Anchors**](/en/official/Reference/CustomControls/Styles/Anchors) when the container resizes. |
| **tbDockLeft** | 1 | Attached to the container's left edge. Width is preserved; height is stretched to the container's client area. |
| **tbDockTop** | 2 | Attached to the container's top edge. Height is preserved; width is stretched. |
| **tbDockRight** | 3 | Attached to the container's right edge. Width is preserved; height is stretched. |
| **tbDockBottom** | 4 | Attached to the container's bottom edge. Height is preserved; width is stretched. |
| **tbDockFill** | 5 | Fills the entire remaining client area, after other docked siblings have claimed their edges. |

Order matters when more than one sibling is docked inside the same container: each docked control claims its edge from whatever client area remains *after* its earlier-added siblings have claimed theirs. The control with **Dock = tbDockFill** is therefore added last so that it inherits the residual space:

```vb
Private Sub Form_Load()
    lblHeader.Dock = tbDockTop      ' attached to the top, full width
    lblStatus.Dock = tbDockBottom   ' attached to the bottom, full width
    pnlTree.Dock   = tbDockLeft     ' attached to the left, between header and status
    pnlAside.Dock  = tbDockRight    ' attached to the right, between header and status
    pnlMain.Dock   = tbDockFill     ' fills whatever is left in the middle
End Sub
```

Setting **Dock** to anything other than **tbDockNone** makes the control's own [**Anchors**](/en/official/Reference/CustomControls/Styles/Anchors) irrelevant --- docking takes over the position and size completely. Manual positioning resumes when **Dock** is reset to **tbDockNone**.
