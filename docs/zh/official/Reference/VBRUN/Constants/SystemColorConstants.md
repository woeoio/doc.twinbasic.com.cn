---
title: SystemColorConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/SystemColorConstants
---
# SystemColorConstants

Reference values for system palette entries --- the colours the user has chosen for various standard parts of the Windows UI. Values have the high bit set so that the runtime can distinguish them from RGB colours; pass them through [**TranslateColor**](/official/Reference/VBA/Information/TranslateColor) to obtain a plain RGB value.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbScrollBars** | &H80000000 | Scroll-bar colour. |
| **vbDesktop** | &H80000001 | Desktop colour. |
| **vbActiveTitleBar** | &H80000002 | Active window's title-bar colour. |
| **vbInactiveTitleBar** | &H80000003 | Inactive window's title-bar colour. |
| **vbMenuBar** | &H80000004 | Menu-bar background. |
| **vbWindowBackground** | &H80000005 | Window background (typically white in the classic palette). |
| **vbWindowFrame** | &H80000006 | Window frame. |
| **vbMenuText** | &H80000007 | Menu text colour. |
| **vbWindowText** | &H80000008 | Window text colour. |
| **vbTitleBarText** | &H80000009 | Active window's title-bar text. |
| **vbActiveTitleBarText** | &H80000009 | Same as **vbTitleBarText**. |
| **vbActiveBorder** | &H8000000A | Active window's border colour. |
| **vbInactiveBorder** | &H8000000B | Inactive window's border colour. |
| **vbApplicationWorkspace** | &H8000000C | Application workspace (MDI parent background). |
| **vbHighlight** | &H8000000D | Highlighted item background (selection colour). |
| **vbHighlightText** | &H8000000E | Highlighted item text. |
| **vbButtonFace** | &H8000000F | Button face. |
| **vb3DFace** | &H8000000F | Same as **vbButtonFace**. |
| **vbButtonShadow** | &H80000010 | Button shadow (the shaded edge). |
| **vb3Dshadow** | &H80000010 | Same as **vbButtonShadow**. |
| **vbGrayText** | &H80000011 | Disabled (grayed) text. |
| **vbButtonText** | &H80000012 | Button text. |
| **vbInactiveCaptionText** | &H80000013 | Inactive window's title-bar text. |
| **vbInactiveTitleBarText** | &H80000013 | Same as **vbInactiveCaptionText**. |
| **vb3DHighlight** | &H80000014 | 3-D highlight (the bright edge). |
| **vb3DDKShadow** | &H80000015 | 3-D dark shadow. |
| **vb3DLight** | &H80000016 | 3-D light edge. |
| **vbInfoText** | &H80000017 | Tool-tip text colour. |
| **vbInfoBackground** | &H80000018 | Tool-tip background colour. |
| **vbHotTrackText** | &H8000001A | Hot-tracked item text. |
| **vbActiveTitleBarGradient** | &H8000001B | Active title-bar gradient end colour. |
| **vbInactiveTitleBarGradient** | &H8000001C | Inactive title-bar gradient end colour. |
| **vbMenuHighlight** | &H8000001D | Menu-item highlight (hover) colour. |
| **vbMenuBarFlat** | &H8000001E | Flat-style menu-bar background. |
