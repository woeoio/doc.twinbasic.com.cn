---
title: Notes About the Form Designer
parent: CustomControls
nav_order: 5
permalink: /Tutorials/CustomControls/Form Designer
---


# Notes About the Form Designer

For the painting of controls in the form designer, CustomControl instances are instantiated and then release immediately after painting has finished. The design-mode flag is exposed on the framework's [`SerializeInfo.RuntimeUISrzIsDesignMode`](/official/Reference/CustomControls/Framework/SerializeInfo#runtimeuisrzisdesignmode) --- controls that want to render a placeholder only inside the designer (the way [`WaynesTimer`](/official/Reference/CustomControls/WaynesTimer) draws its 🕑 glyph) check this flag during [`Initialize`](/official/Reference/CustomControls/Framework/ICustomControl#initialize).

## See also

- [CustomControls package reference](/official/Reference/CustomControls/) -- overview of the framework and the built-in `Waynes…` controls
