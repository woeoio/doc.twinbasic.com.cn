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

- [DTPickerFormatConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- the [**DTPicker.Format**](/en/official/Reference/WinNativeCommonCtls/DTPicker#format) values

## ImageList

- [ImlDrawConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- the *Style* flags for [**ListImage.Draw**](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImage#draw)

## Shared (Slider, UpDown)

- [OrientationConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- the horizontal / vertical enum used by [**Slider.Orientation**](/en/official/Reference/WinNativeCommonCtls/Slider#orientation) and [**UpDown.Orientation**](/en/official/Reference/WinNativeCommonCtls/UpDown#orientation)

## TreeView (and ListView via TreeBorderStyleConstants)

- [TreeBorderStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- the [**TreeView.BorderStyle**](/en/official/Reference/WinNativeCommonCtls/TreeView#borderstyle) and [**ListView.BorderStyle**](/en/official/Reference/WinNativeCommonCtls/ListView#borderstyle) values
- [TreeLabelEditConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- the [**TreeView.LabelEdit**](/en/official/Reference/WinNativeCommonCtls/TreeView#labeledit) values
- [TreeLineStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- the [**TreeView.LineStyle**](/en/official/Reference/WinNativeCommonCtls/TreeView#linestyle) values
- [TreeRelationshipConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- the *Relationship* values for [**Nodes.Add**](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes#add)
- [TreeSortOrderConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- the [**TreeView.SortOrder**](/en/official/Reference/WinNativeCommonCtls/TreeView#sortorder) and [**Node.SortOrder**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sortorder) values
- [TreeSortTypeConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- the [**TreeView.SortType**](/en/official/Reference/WinNativeCommonCtls/TreeView#sorttype) and [**Node.SortType**](/en/official/Reference/WinNativeCommonCtls/TreeView/Node#sorttype) values
- [TreeStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- the [**TreeView.Style**](/en/official/Reference/WinNativeCommonCtls/TreeView#style) values
