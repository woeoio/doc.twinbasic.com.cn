---
title: Constants Module
parent: VBRUN Package
permalink: /tB/Packages/VBRUN/Constants/
---

# Constants module

The VBRUN **Constants** module collects the named-integer enumerations that classic VB6 forms, intrinsic controls, and runtime services use to spell out their option values --- colours, mouse pointers, key codes, drag/drop states, OLE container behaviour, printer setup values, and so on. There are no standalone constants in this module; everything is grouped into an enumeration so that **IntelliSense** can offer the right options at each property or argument.

Some enumerations are tagged **\[MustBeQualified\]** in the source --- their members must be referenced through the enum name (e.g. `ControlBorderStyleConstantsCustom.vbCustomBorder`) to avoid clashing with members of similarly named enumerations. This is noted on those enum's pages.

## Enumerations

- [AlignConstants](/en/official/Reference/VBRUN/Constants/AlignConstants) -- alignment values for the **Align** property (none, top, bottom, left, right)
- [AlignmentConstants](/en/official/Reference/VBRUN/Constants/AlignmentConstants) -- text alignment values (left, right, centred)
- [AlignmentConstantsNoCenter](/en/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- text alignment values without a centred option
- [AppearanceConstants](/en/official/Reference/VBRUN/Constants/AppearanceConstants) -- flat or 3-D drawing style for controls
- [ApplicationStartConstants](/en/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- whether the application was started standalone or via Automation
- [AspectTypeConstants](/en/official/Reference/VBRUN/Constants/AspectTypeConstants) -- rendering aspects of an OLE object (content, thumbnail, icon, print)
- [AsyncReadConstants](/en/official/Reference/VBRUN/Constants/AsyncReadConstants) -- flags for **UserControl.AsyncRead**
- [AsyncStatusCodeConstants](/en/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- status codes reported by the **AsyncReadProgress** event
- [AsyncTypeConstants](/en/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- the kind of data being read in **UserControl.AsyncRead**
- [BackFillStyleConstants](/en/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- whether a control's background fill is opaque or transparent
- [BorderStyleConstants](/en/official/Reference/VBRUN/Constants/BorderStyleConstants) -- line style for drawn shapes (solid, dashed, dotted, transparent, ...)
- [ButtonConstants](/en/official/Reference/VBRUN/Constants/ButtonConstants) -- standard or graphical button style
- [CheckBoxConstants](/en/official/Reference/VBRUN/Constants/CheckBoxConstants) -- state of a check box (unchecked, checked, grayed)
- [ClipboardConstants](/en/official/Reference/VBRUN/Constants/ClipboardConstants) -- clipboard format identifiers (`vbCFText`, `vbCFBitmap`, ...)
- [ColorConstants](/en/official/Reference/VBRUN/Constants/ColorConstants) -- common named colours (`vbBlack`, `vbBlue`, `vbRed`, ...)
- [ComboBoxConstants](/en/official/Reference/VBRUN/Constants/ComboBoxConstants) -- combo-box style (drop-down, simple, drop-down list)
- [ControlBorderStyleConstants](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- single-border style (none or fixed single)
- [ControlBorderStyleConstantsCustom](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- single-border style with a custom-drawn option
- [ControlTypeConstants](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- identifiers for the standard intrinsic control types
- [DataBOFconstants](/en/official/Reference/VBRUN/Constants/DataBOFconstants) -- action when a Data control reaches the start of a recordset
- [DataEOFConstants](/en/official/Reference/VBRUN/Constants/DataEOFConstants) -- action when a Data control reaches the end of a recordset
- [DataErrorConstants](/en/official/Reference/VBRUN/Constants/DataErrorConstants) -- response to an error from a data binding operation
- [DataValidateConstants](/en/official/Reference/VBRUN/Constants/DataValidateConstants) -- actions reported in a Data control's **Validate** event
- [DatabaseTypeConstants](/en/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- database engine to use with the Data control (ODBC, Jet, ACE)
- [DefaultCursorTypeConstants](/en/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- cursor type for a Data control connection
- [DockModeConstants](/en/official/Reference/VBRUN/Constants/DockModeConstants) -- dock-edge values for forms and toolbars
- [DragConstants](/en/official/Reference/VBRUN/Constants/DragConstants) -- states reported by **DragDrop**/**DragOver**
- [DragModeConstants](/en/official/Reference/VBRUN/Constants/DragModeConstants) -- automatic or manual drag mode
- [DragOverConstants](/en/official/Reference/VBRUN/Constants/DragOverConstants) -- enter/leave/over state values during a drag-over event
- [DrawModeConstants](/en/official/Reference/VBRUN/Constants/DrawModeConstants) -- raster operation for **PSet**/**Line**/**Circle** drawing
- [DrawStyleConstants](/en/official/Reference/VBRUN/Constants/DrawStyleConstants) -- line style for drawn lines and shape outlines
- [FillStyleConstants](/en/official/Reference/VBRUN/Constants/FillStyleConstants) -- fill pattern for filled shapes
- [FillStyleConstantsEx](/en/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- fill pattern with twinBASIC gradient extensions
- [FormArrangeConstants](/en/official/Reference/VBRUN/Constants/FormArrangeConstants) -- MDI child arrangement modes (cascade, tile, ...)
- [FormBorderStyleConstants](/en/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- form window border style (sizable, fixed dialog, tool window, ...)
- [FormShowConstants](/en/official/Reference/VBRUN/Constants/FormShowConstants) -- whether a form is shown modal or modeless
- [FormWindowStateConstants](/en/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- normal, minimised, or maximised window state
- [HitResultConstants](/en/official/Reference/VBRUN/Constants/HitResultConstants) -- return values from a **UserControl** **HitTest** event
- [KeyCodeConstants](/en/official/Reference/VBRUN/Constants/KeyCodeConstants) -- virtual-key code values for **KeyDown**/**KeyUp**
- [LinkModeConstants](/en/official/Reference/VBRUN/Constants/LinkModeConstants) -- DDE link mode (none, automatic, manual, notify)
- [ListBoxConstants](/en/official/Reference/VBRUN/Constants/ListBoxConstants) -- list-box style (standard, check-box, colour swatch)
- [LoadPictureColorConstants](/en/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- colour-depth flag for **LoadPicture**
- [LoadPictureSizeConstants](/en/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- size selector for **LoadPicture**
- [LoadResConstants](/en/official/Reference/VBRUN/Constants/LoadResConstants) -- resource type for **LoadResPicture**
- [LogEventTypeConstants](/en/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- severity for **LogEvent** (error, warning, information)
- [LogModeConstants](/en/official/Reference/VBRUN/Constants/LogModeConstants) -- destination and behaviour flags for the application log
- [MenuAccelConstants](/en/official/Reference/VBRUN/Constants/MenuAccelConstants) -- keyboard-accelerator codes for menu items
- [MenuControlConstants](/en/official/Reference/VBRUN/Constants/MenuControlConstants) -- alignment and triggering options for popup menus
- [MouseButtonConstants](/en/official/Reference/VBRUN/Constants/MouseButtonConstants) -- bit flags for the pressed mouse buttons (left, right, middle)
- [MousePointerConstants](/en/official/Reference/VBRUN/Constants/MousePointerConstants) -- cursor shape for the **MousePointer** property
- [MultiSelectConstants](/en/official/Reference/VBRUN/Constants/MultiSelectConstants) -- multi-selection mode for a list box
- [NegotiatePositionConstants](/en/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- positioning of OLE-negotiated menus
- [OLEContainerActivateConstants](/en/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- when the **OLE** container activates its embedded object
- [OLEContainerConstants](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) -- combined enumeration of all **OLE** container option values
- [OLEContainerDisplayTypeConstants](/en/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- whether to show content or icon
- [OLEContainerSizeModeConstants](/en/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- sizing rule for an embedded **OLE** object
- [OLEContainerTypesAllowedConstants](/en/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- linked, embedded, or either object types
- [OLEContainerUpdateOptionsConstants](/en/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- update mode for an **OLE**-linked object
- [OLEDragConstants](/en/official/Reference/VBRUN/Constants/OLEDragConstants) -- automatic or manual **OLE** drag
- [OLEDropConstants](/en/official/Reference/VBRUN/Constants/OLEDropConstants) -- none/manual/automatic **OLE** drop targets
- [OLEDropEffectConstants](/en/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- effect of an **OLE** drop (copy, move, link, scroll)
- [OldLinkModeConstants](/en/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- legacy DDE link modes (hot, cold, server)
- [PaletteModeConstants](/en/official/Reference/VBRUN/Constants/PaletteModeConstants) -- palette source for forms and controls
- [ParentControlsType](/en/official/Reference/VBRUN/Constants/ParentControlsType) -- whether [**ParentControls**](/en/official/Reference/VBRUN/ParentControls) wraps items in their **Extender**
- [PictureTypeConstants](/en/official/Reference/VBRUN/Constants/PictureTypeConstants) -- the type of a **StdPicture** (bitmap, icon, metafile, enhanced metafile)
- [PrinterObjectConstants](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- combined enumeration of all printer setup values
- [PrinterObjectConstants_ColorMode](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- colour or monochrome printing
- [PrinterObjectConstants_Duplex](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- one-sided or two-sided printing mode
- [PrinterObjectConstants_Orientation](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- portrait or landscape paper orientation
- [PrinterObjectConstants_PaperBin](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- paper-source identifiers for the printer
- [PrinterObjectConstants_PaperSize](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- paper-size identifiers for the printer
- [PrinterObjectConstants_PrintQuality](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- draft / low / medium / high print quality
- [QueryUnloadConstants](/en/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- reason codes reported in a form's **QueryUnload** event
- [RasterOpConstants](/en/official/Reference/VBRUN/Constants/RasterOpConstants) -- raster-operation codes for **PaintPicture**
- [RecordsetTypeConstants](/en/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- table / dynaset / snapshot recordset types
- [ScaleModeConstants](/en/official/Reference/VBRUN/Constants/ScaleModeConstants) -- measurement units for a form's or container's **Scale** properties
- [ScrollBarConstants](/en/official/Reference/VBRUN/Constants/ScrollBarConstants) -- which scrollbars a control should display (none, horizontal, vertical, both)
- [ShapeConstants](/en/official/Reference/VBRUN/Constants/ShapeConstants) -- geometric shape selectors for the **Shape** control
- [ShiftConstants](/en/official/Reference/VBRUN/Constants/ShiftConstants) -- bit flags for **Shift**, **Ctrl**, and **Alt** in mouse and key events
- [ShortcutConstants](/en/official/Reference/VBRUN/Constants/ShortcutConstants) -- shortcut-key identifiers for menu items
- [StartUpPositionConstants](/en/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- initial position of a form (manual, owner, screen, default)
- [StorageTypeContants](/en/official/Reference/VBRUN/Constants/StorageTypeContants) -- **OLE** data storage medium (`HGLOBAL`, file, `IStream`, `IStorage`, ...)
- [SystemColorConstants](/en/official/Reference/VBRUN/Constants/SystemColorConstants) -- high values referring to system palette entries
- [VariantTypeConstants](/en/official/Reference/VBRUN/Constants/VariantTypeConstants) -- DAO field-type tags (legacy)
- [VerticalAlignmentConstants](/en/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- vertical text alignment (top, middle, bottom)
- [ZOrderConstants](/en/official/Reference/VBRUN/Constants/ZOrderConstants) -- selectors for **BringToFront** / **SendToBack**

::: info
The enumeration name `StorageTypeContants` (note the missing `s`) is preserved here exactly as the runtime exposes it; the misspelling is a long-standing VB6 holdover.
:::
