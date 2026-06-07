---
title: Enumerations
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/Enumerations/
nav_order: 99
---

# WinNativeCommonCtls Enumerations
The ten module-level enumerations declared in the package's shared modules and exposed to user code. Each is reachable from any project that references the package.

Per-control nested enumerations (those declared *inside* a `<Name>BaseCtl` class --- `ListViewConstants`, `ListArrangeConstants`, `ListLabelEditConstants`, `ListTextBackgroundConstants`, `ListColumnAlignmentConstants`, `PrbOrientation`, `PrbScrolling`, `PrbState`, `TickStyleConstants`, `TextPositionConstants`, `ImageListColorDepth`) are documented on the page of the control that declares them, not under this folder.

## DTPicker

- [DTPickerFormatConstants](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- the [**DTPicker.Format**](/official/Reference/WinNativeCommonCtls/DTPicker#format) values

## ImageList

- [ImlDrawConstants](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- the *Style* flags for [**ListImage.Draw**](/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw)

## Shared (Slider, UpDown)

- [OrientationConstants](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- the horizontal / vertical enum used by [**Slider.Orientation**](/official/Reference/WinNativeCommonCtls/Slider#orientation) and [**UpDown.Orientation**](/official/Reference/WinNativeCommonCtls/UpDown#orientation)

## TreeView (and ListView via TreeBorderStyleConstants)

- [TreeBorderStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- the [**TreeView.BorderStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#borderstyle) and [**ListView.BorderStyle**](/official/Reference/WinNativeCommonCtls/ListView/#borderstyle) values
- [TreeLabelEditConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- the [**TreeView.LabelEdit**](/official/Reference/WinNativeCommonCtls/TreeView/#labeledit) values
- [TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- the [**TreeView.LineStyle**](/official/Reference/WinNativeCommonCtls/TreeView/#linestyle) values
- [TreeRelationshipConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- the *Relationship* values for [**Nodes.Add**](/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add)
- [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- the [**TreeView.SortOrder**](/official/Reference/WinNativeCommonCtls/TreeView/#sortorder) and [**Node.SortOrder**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sortorder) values
- [TreeSortTypeConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- the [**TreeView.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/#sorttype) and [**Node.SortType**](/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) values
- [TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- the [**TreeView.Style**](/official/Reference/WinNativeCommonCtls/TreeView/#style) values
