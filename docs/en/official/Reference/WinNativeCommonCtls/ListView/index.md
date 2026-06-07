---
title: ListView
parent: WinNativeCommonCtls Package
permalink: /tB/Packages/WinNativeCommonCtls/ListView/
---

# ListView class
A **ListView** is a flexible multi-column / icon list with four distinct visual modes selected through the [**View**](#view) property:

| [**View**](#view)              | Description                                                                        |
|--------------------------------|------------------------------------------------------------------------------------|
| **lvwIcon**                    | Large icons in a wrapping grid; each item shows an icon plus its label.            |
| **lvwSmallIcon**               | Small icons in a wrapping grid.                                                    |
| **lvwList**                    | A single column of small-icon-plus-label entries, wrapped into multiple columns to fit. |
| **lvwReport**                  | Multi-column table view with header row; columns are defined through [**ColumnHeaders**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders). |

The two main collections are accessed through properties: [**ListItems**](#listitems) for the rows, and [**ColumnHeaders**](#columnheaders) for the **Report**-view column headers.

```vb
Private Sub Form_Load()
    ' Bind an image list and configure the view
    Set ListView1.SmallIcons = ImageList1
    ListView1.View = lvwReport

    ' Define columns
    ListView1.ColumnHeaders.Add , "name",  "Name",  150
    ListView1.ColumnHeaders.Add , "type",  "Type",   80
    ListView1.ColumnHeaders.Add , "size",  "Size",   80, lvwColumnRight

    ' Add rows
    Dim item As ListItem
    Set item = ListView1.ListItems.Add(, "doc1", "Report.docx", "doc")
    item.SubItems(1) = "Word document"
    item.SubItems(2) = "24 KB"
End Sub

Private Sub ListView1_ItemClick(Item As ListItem)
    Debug.Print "Clicked: " & Item.Text
End Sub
```

The control inherits the focusable rect-dockable members from `BaseControlFocusable` --- size, position, **Anchors**, **Dock**, **Font**, **Appearance**, **MousePointer** / **MouseIcon**, **ToolTipText**, **DragMode** / **DragIcon**, **Drag**, **Refresh**, **SetFocus**, **TabIndex** / **TabStop**, **ZOrder**, **CausesValidation**, **VisualStyles**, **hWnd**, **HelpContextID** / **WhatsThisHelpID**.

## Image lists

A **ListView** can bind to three independent [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) instances, one per role:

- **[Icons](#icons)** --- large icons rendered in **lvwIcon** view.
- **[SmallIcons](#smallicons)** --- small icons rendered in **lvwSmallIcon**, **lvwList**, and **lvwReport** views.
- **[ColumnHeaderIcons](#columnheadericons)** --- small icons rendered inside the report-view column headers, addressed per-column through [**ColumnHeader.Icon**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#icon).

A [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) selects its icons through its **Icon** and **SmallIcon** properties, which can be either a 1-based **Long** index or a **String** key into the respective image list.

## Selection and label editing

Selection is single-row by default; setting [**MultiSelect**](#multiselect) to **True** lets the user **Ctrl**-click and **Shift**-click multiple items. The currently focused item is exposed as [**SelectedItem**](#selecteditem) (a [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem)) and [**SelectedItemIndex**](#selecteditemindex) (a **Long**). [**ListItem.Selected**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#selected) reads / writes selection on an individual row.

[**LabelEdit**](#labeledit) controls inline label editing:

- **lvwAutomatic** --- clicking an already-selected item starts an edit (after a short delay; this is the F2 / single-click-and-pause pattern).
- **lvwManual** --- only programmatic [**StartLabelEdit**](#startlabeledit) calls open an editor.
- **lvwDisabled** --- labels cannot be edited.

Edit start fires [**BeforeLabelEdit**](#beforelabeledit) (cancellable), and edit end fires [**AfterLabelEdit**](#afterlabeledit) (cancellable, with the proposed new text).

## Sorting, column reordering, and the header

In **lvwReport** view, clicking a column header fires [**ColumnClick**](#columnclick), letting the application implement sorting (the package does not auto-sort). When [**AllowColumnReorder**](#allowcolumnreorder) is **True** in **lvwReport** view, the user can drag column headers to reorder them; the resulting order is reflected through [**ColumnHeader.Position**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#position).

[**hWndHeader**](#hwndheader) is the Win32 handle of the embedded `SysHeader32` window, exposed for raw Win32 customization.

Properties
----------

### AllowColumnReorder

Whether the user can drag column headers to reorder them. **Boolean**. Default: **False**. Only effective in **lvwReport** view.

### Appearance

How the control's border is drawn. A [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants) member. Default: **vbAppear3d**. Inherited.

### Arrange

How items are arranged in icon / small-icon view. A member of [**ListArrangeConstants**](#listarrangeconstants). Default: **lvwNone**.

### BackColor

The background color of the list area. **OLE_COLOR**. Default: **vbWindowBackground**.

### BorderStyle

The control's border style. A [**TreeBorderStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) member: **ccNone** or **ccFixedSingle**. Default: **ccFixedSingle**. The enum is shared with [**TreeView**](/en/official/Reference/WinNativeCommonCtls/TreeView/).

### CheckBoxes

Whether each row has a leading checkbox. **Boolean**. Default: **False**. When **True**, fires [**ItemCheck**](#itemcheck) on click.

### ColumnHeaderIcons

The [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) used for column-header icons in **lvwReport** view. Individual columns reference an icon by setting [**ColumnHeader.Icon**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader#icon).

### ColumnHeaders

The [**ColumnHeaders**](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) collection. Read-only.

### FlatScrollBar

Whether the control uses flat (rather than 3D) scrollbars. **Boolean**. Default: **False**.

### FullRowSelect

Whether clicking on any cell in a row selects the entire row (as opposed to clicking only on the first column's text). **Boolean**. Default: **False**. Only meaningful in **lvwReport** view.

### GridLines

Whether gridlines are drawn between rows and columns. **Boolean**. Default: **False**. Only meaningful in **lvwReport** view.

### HideColumnHeaders

Whether the column header row is hidden in **lvwReport** view. **Boolean**. Default: **False**.

### HideSelection

Whether selection highlight is hidden when the control does not have focus. **Boolean**. Default: **True**.

### HotTracking

Whether items are highlighted as the mouse hovers over them (and tracked-click selection is enabled). **Boolean**. Default: **False**.

### hWnd

The Win32 handle of the listview window. **LongPtr**, read-only.

### hWndHeader

The Win32 handle of the embedded column-header window (`SysHeader32`). **LongPtr**, read-only. Tagged `[Hidden]` `[NonBrowsable]` --- exposed only for advanced Win32 customization (e.g. subclassing the header).

### Icons

The [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) used for large icons in **lvwIcon** view. Assignment increments the bound-count on the **ImageList** (and decrements the previous one's); see the [bound-count caveat](/en/official/Reference/WinNativeCommonCtls/ImageList/#binding-to-consumers).

### LabelEdit

How inline label editing is triggered. A member of [**ListLabelEditConstants**](#listlabeleditconstants). Default: **lvwAutomatic**.

### LabelWrap

Whether item labels wrap to multiple lines in **lvwIcon** view. **Boolean**. Default: **True**.

### ListItems

The [**ListItems**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems) collection --- the rows of the list. Read-only.

### MultiSelect

Whether the user can select multiple items. **Boolean**. Default: **False**.

### SelectedItem

The currently focused [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem), or **Nothing** if no row is focused. Read-only --- to change selection, assign to [**ListItem.Selected**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem#selected).

### SelectedItemIndex

The 1-based index of the currently focused row, or `-1` if no row is focused. **Long**, read-only.

### SmallIcons

The [**ImageList**](/en/official/Reference/WinNativeCommonCtls/ImageList/) used for small icons in **lvwSmallIcon**, **lvwList**, and **lvwReport** views.

### TextBackground

Whether item-label text has an opaque background. A member of [**ListTextBackgroundConstants**](#listtextbackgroundconstants). Default: **lvwTransparent**.

### View

The visual mode. A member of [**ListViewConstants**](#listviewconstants). Default: **lvwIcon**.

Methods
-------

### GetFirstVisible

Returns the first [**ListItem**](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) currently visible in the viewport. Useful for virtualized scenarios where the application updates row content based on what the user is looking at.

Syntax: *object*.**GetFirstVisible** **As ListItem**

### StartLabelEdit

Opens the inline editor on the currently selected row. Used when [**LabelEdit**](#labeledit) is **lvwManual**.

Syntax: *object*.**StartLabelEdit**

Events
------

### AfterLabelEdit

Raised when an inline label edit completes. Set *Cancel* to **True** to revert; *NewString* holds the user's proposed new text.

Syntax: *object*\_**AfterLabelEdit**( *Cancel* **As Boolean**, *NewString* **As String** )

### BeforeLabelEdit

Raised when an inline label edit is about to start. Set *Cancel* to **True** to block the edit.

Syntax: *object*\_**BeforeLabelEdit**( *Cancel* **As Boolean** )

### Click

Raised on a mouse click inside the control. Distinct from [**ItemClick**](#itemclick), which fires only when the click hits a row.

Syntax: *object*\_**Click**( )

### ColumnClick

Raised when the user clicks a column header in **lvwReport** view.

Syntax: *object*\_**ColumnClick**( *ColumnHeader* **As ColumnHeader** )

### DblClick

Raised on a double-click inside the control.

Syntax: *object*\_**DblClick**( )

### DragDrop, DragOver

Inherited drag-drop events.

### Initialize

Raised after the control's window has been created.

### ItemCheck

Raised when the user toggles the checkbox on a row (only when [**CheckBoxes**](#checkboxes) is **True**).

Syntax: *object*\_**ItemCheck**( *Item* **As ListItem** )

### ItemClick

Raised when a row becomes selected (via mouse click or keyboard navigation).

Syntax: *object*\_**ItemClick**( *Item* **As ListItem** )

### KeyDown, KeyPress, KeyUp

Inherited keyboard events.

### MouseDown, MouseMove, MouseUp

Inherited mouse events.

### OLECompleteDrag, OLEDragDrop, OLEDragOver, OLEGiveFeedback, OLESetData, OLEStartDrag

Inherited OLE drag-and-drop events.

### Scroll

::: info
The **Scroll** event is declared on the control but tagged `[Unimplemented]` in the current source. It is reserved for a future release; do not rely on it.
:::

### Validate

Inherited validation event.

## ListViewConstants

Determines the visual mode of a **ListView**. Declared on the **ListView** class.

| Member                | Value | Description                                                          |
|-----------------------|-------|----------------------------------------------------------------------|
| **lvwIcon**           | 0 | Large icons in a wrapping grid.                            |
| **lvwSmallIcon** | 1 | Small icons in a wrapping grid.                            |
| **lvwList**           | 2 | Single-column list (wrapping into multiple columns).        |
| **lvwReport**       | 3 | Multi-column report view with header row.                   |

## ListArrangeConstants

Determines how items are auto-arranged in icon / small-icon view. Declared on the **ListView** class.

| Member                 | Value | Description                                            |
|------------------------|-------|--------------------------------------------------------|
| **lvwNone**         | 0 | No auto-arrangement; items stay where they were placed. |
| **lvwAutoLeft** | 1 | Items auto-flow left-to-right.                          |
| **lvwAutoTop**   | 2 | Items auto-flow top-to-bottom.                          |

## ListTextBackgroundConstants

Determines whether item-label text has an opaque or transparent background. Declared on the **ListView** class.

| Member                | Value | Description                                                       |
|-----------------------|-------|-------------------------------------------------------------------|
| **lvwTransparent** | 0 | Item text overlays the list background unchanged.   |
| **lvwOpaque**           | 1 | Item text is drawn with an opaque background matching [**BackColor**](#backcolor). |

## ListLabelEditConstants

Determines when inline label editing is triggered. Declared on the **ListView** class.

| Member             | Value | Description                                                                |
|--------------------|-------|----------------------------------------------------------------------------|
| **lvwAutomatic** | 0 | F2 or click-and-pause on a selected row starts an edit. |
| **lvwManual**       | 1 | Only [**StartLabelEdit**](#startlabeledit) opens an editor. |
| **lvwDisabled**   | 2 | Label editing is disabled entirely. |

## See Also

- [ListItem](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem) -- a single row
- [ListItems](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems) -- the collection of rows
- [ColumnHeader](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader) -- a single column header (Report view)
- [ColumnHeaders](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders) -- the column header collection
- [ImageList](/en/official/Reference/WinNativeCommonCtls/ImageList/) -- the picture source for [**Icons**](#icons), [**SmallIcons**](#smallicons), and [**ColumnHeaderIcons**](#columnheadericons)
- [TreeBorderStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- the [**BorderStyle**](#borderstyle) enum shared with [**TreeView**](/en/official/Reference/WinNativeCommonCtls/TreeView/)
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- where **vbListView** lives
