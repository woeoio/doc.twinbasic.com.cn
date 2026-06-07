---
title: Enumerations
parent: Reference Section
nav_order: 9
permalink: /Reference/Enumerations
---

# Enumerations

An *enumeration* defines a named set of integer constants. Passing an enum member instead of a bare integer makes call sites self-documenting and allows the IDE to offer completion for the valid values. Each built-in package groups its enumerations under a dedicated sub-folder; this page indexes all of them.

The sections below list enumerations [by package](#by-package), followed by an [alphabetical index](#alphabetical-index).

---

## By package

### VBA Package

Fifteen enumerations covering window styles, comparison modes, message-box options, variable types, date and time constants, file attributes, and more.

- [**VbAppWinStyle**](/en/official/Reference/VBA/Constants/VbAppWinStyle) -- window-style values for the *windowstyle* argument of [**Shell**](/en/official/Reference/VBA/Interaction/Shell)
- [**VbArchitecture**](/en/official/Reference/VBA/Constants/VbArchitecture) -- processor-architecture values returned by [**ProcessorArchitecture**](/en/official/Reference/VBA/Compilation/ProcessorArchitecture)
- [**VbCalendar**](/en/official/Reference/VBA/Constants/VbCalendar) -- calendar-type values for the [**Calendar**](/en/official/Reference/Core/Calendar) property
- [**VbCallType**](/en/official/Reference/VBA/Constants/VbCallType) -- procedure-call type flags for **CallByName**
- [**VbCompareMethod**](/en/official/Reference/VBA/Constants/VbCompareMethod) -- text-comparison modes for [**InStr**](/en/official/Reference/VBA/Strings/InStr), [**Replace**](/en/official/Reference/VBA/Strings/Replace), [**Split**](/en/official/Reference/VBA/Strings/Split), and similar
- [**VbDateTimeFormat**](/en/official/Reference/VBA/Constants/VbDateTimeFormat) -- format codes for [**FormatDateTime**](/en/official/Reference/VBA/Strings/FormatDateTime)
- [**VbDayOfWeek**](/en/official/Reference/VBA/Constants/VbDayOfWeek) -- day-of-week constants for [**DateAdd**](/en/official/Reference/VBA/DateTime/DateAdd), [**DateDiff**](/en/official/Reference/VBA/DateTime/DateDiff), [**Weekday**](/en/official/Reference/VBA/DateTime/Weekday), and similar
- [**VbFileAttribute**](/en/official/Reference/VBA/Constants/VbFileAttribute) -- attribute flags for [**Dir**](/en/official/Reference/VBA/FileSystem/Dir), [**GetAttr**](/en/official/Reference/VBA/FileSystem/GetAttr), and [**SetAttr**](/en/official/Reference/VBA/FileSystem/SetAttr)
- [**VbFirstWeekOfYear**](/en/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- first-week-of-year selectors for [**DateDiff**](/en/official/Reference/VBA/DateTime/DateDiff), [**DatePart**](/en/official/Reference/VBA/DateTime/DatePart), and [**Weekday**](/en/official/Reference/VBA/DateTime/Weekday)
- [**VbIMEStatus**](/en/official/Reference/VBA/Constants/VbIMEStatus) -- Input Method Editor mode constants
- [**VbMsgBoxResult**](/en/official/Reference/VBA/Constants/VbMsgBoxResult) -- identifies the button clicked in a [**MsgBox**](/en/official/Reference/VBA/Interaction/MsgBox) dialog
- [**VbMsgBoxStyle**](/en/official/Reference/VBA/Constants/VbMsgBoxStyle) -- buttons, icons, modality, and other flags for [**MsgBox**](/en/official/Reference/VBA/Interaction/MsgBox)
- [**VbStrConv**](/en/official/Reference/VBA/Constants/VbStrConv) -- conversion-type flags for [**StrConv**](/en/official/Reference/VBA/Strings/StrConv)
- [**VbTriState**](/en/official/Reference/VBA/Constants/VbTriState) -- three-state values for formatting functions such as [**FormatNumber**](/en/official/Reference/VBA/Strings/FormatNumber) and [**FormatCurrency**](/en/official/Reference/VBA/Strings/FormatCurrency)
- [**VbVarType**](/en/official/Reference/VBA/Constants/VbVarType) -- Variant subtype codes returned by [**VarType**](/en/official/Reference/VBA/Information/VarType)

### VBRUN Package

Eighty-six enumerations covering every aspect of classic VB6 controls and forms --- alignment, border styles, colours, drag-and-drop, OLE container options, printer settings, window states, and more.

- [**AlignConstants**](/en/official/Reference/VBRUN/Constants/AlignConstants) -- **Align** property values for picture boxes, toolbars, and data controls
- [**AlignmentConstants**](/en/official/Reference/VBRUN/Constants/AlignmentConstants) -- text alignment for label, text-box, and option-button controls
- [**AlignmentConstantsNoCenter**](/en/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- left/right alignment values where centre is not available
- [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants) -- drawing style for the **Appearance** property
- [**ApplicationStartConstants**](/en/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- standalone vs. Automation-invoked start-up mode
- [**AspectTypeConstants**](/en/official/Reference/VBRUN/Constants/AspectTypeConstants) -- OLE rendering aspect identifiers for **DataObjectFormat**
- [**AsyncReadConstants**](/en/official/Reference/VBRUN/Constants/AsyncReadConstants) -- flags for the *AsyncReadOptions* argument of **UserControl.AsyncRead**
- [**AsyncStatusCodeConstants**](/en/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- status codes reported during **AsyncReadProgress**
- [**AsyncTypeConstants**](/en/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- data kind delivered by **UserControl.AsyncRead**
- [**BackFillStyleConstants**](/en/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- opaque vs. transparent background fill
- [**BorderStyleConstants**](/en/official/Reference/VBRUN/Constants/BorderStyleConstants) -- line style for the **BorderStyle** property of Shape and Line controls
- [**ButtonConstants**](/en/official/Reference/VBRUN/Constants/ButtonConstants) -- style for command buttons with optional image-based appearance
- [**CheckBoxConstants**](/en/official/Reference/VBRUN/Constants/CheckBoxConstants) -- state values for the check-box **Value** property
- [**ClipboardConstants**](/en/official/Reference/VBRUN/Constants/ClipboardConstants) -- clipboard format identifiers for **DataObject** and **Clipboard**
- [**ColorConstants**](/en/official/Reference/VBRUN/Constants/ColorConstants) -- common named RGB colours
- [**ComboBoxConstants**](/en/official/Reference/VBRUN/Constants/ComboBoxConstants) -- style values for the combo-box **Style** property
- [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- border style for text boxes, picture boxes, and labels
- [**ControlBorderStyleConstantsCustom**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- extended border style including custom-drawn borders
- [**ControlTypeConstants**](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- identifiers for standard intrinsic control types
- [**DatabaseTypeConstants**](/en/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- database engine for the **DefaultType** property of a Data control
- [**DataBOFconstants**](/en/official/Reference/VBRUN/Constants/DataBOFconstants) -- action when the user moves past the start of a recordset
- [**DataEOFConstants**](/en/official/Reference/VBRUN/Constants/DataEOFConstants) -- action when the user moves past the end of a recordset
- [**DataErrorConstants**](/en/official/Reference/VBRUN/Constants/DataErrorConstants) -- response values for the Data control's **Error** event
- [**DataValidateConstants**](/en/official/Reference/VBRUN/Constants/DataValidateConstants) -- action codes in the **Validate** event
- [**DefaultCursorTypeConstants**](/en/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- cursor-driver for the Data control's connection
- [**DockModeConstants**](/en/official/Reference/VBRUN/Constants/DockModeConstants) -- dock-edge values for forms and toolbars
- [**DragConstants**](/en/official/Reference/VBRUN/Constants/DragConstants) -- action values for the **Drag** method
- [**DragModeConstants**](/en/official/Reference/VBRUN/Constants/DragModeConstants) -- automatic vs. manual drag-mode for controls
- [**DragOverConstants**](/en/official/Reference/VBRUN/Constants/DragOverConstants) -- state values in the **DragOver** event
- [**DrawModeConstants**](/en/official/Reference/VBRUN/Constants/DrawModeConstants) -- GDI raster-operation values for the **DrawMode** property
- [**DrawStyleConstants**](/en/official/Reference/VBRUN/Constants/DrawStyleConstants) -- line style for the **DrawStyle** property
- [**FillStyleConstants**](/en/official/Reference/VBRUN/Constants/FillStyleConstants) -- fill pattern for the **FillStyle** property
- [**FillStyleConstantsEx**](/en/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- extended fill patterns including gradient fills
- [**FormArrangeConstants**](/en/official/Reference/VBRUN/Constants/FormArrangeConstants) -- arrangement modes for the MDI **Arrange** method
- [**FormBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- border and frame style for the form's **BorderStyle** property
- [**FormShowConstants**](/en/official/Reference/VBRUN/Constants/FormShowConstants) -- modality values for the *Modal* argument of **Show**
- [**FormWindowStateConstants**](/en/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- window-state values for a form's **WindowState** property
- [**HitResultConstants**](/en/official/Reference/VBRUN/Constants/HitResultConstants) -- return values from a **UserControl**'s **HitTest** event
- [**KeyCodeConstants**](/en/official/Reference/VBRUN/Constants/KeyCodeConstants) -- virtual-key codes for **KeyDown** and **KeyUp** events
- [**LinkModeConstants**](/en/official/Reference/VBRUN/Constants/LinkModeConstants) -- DDE link-mode values for the **LinkMode** property
- [**ListBoxConstants**](/en/official/Reference/VBRUN/Constants/ListBoxConstants) -- style values for the list-box **Style** property
- [**LoadPictureColorConstants**](/en/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- colour depth for **LoadPicture**
- [**LoadPictureSizeConstants**](/en/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- size selector for **LoadPicture**
- [**LoadResConstants**](/en/official/Reference/VBRUN/Constants/LoadResConstants) -- resource-type values for **LoadResPicture**
- [**LogEventTypeConstants**](/en/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- severity values for **LogEvent**
- [**LogModeConstants**](/en/official/Reference/VBRUN/Constants/LogModeConstants) -- destination and behaviour flags for **App.StartLogging**
- [**MenuAccelConstants**](/en/official/Reference/VBRUN/Constants/MenuAccelConstants) -- keyboard-accelerator codes for menu-item shortcuts
- [**MenuControlConstants**](/en/official/Reference/VBRUN/Constants/MenuControlConstants) -- alignment and trigger-button flags for **PopupMenu**
- [**MouseButtonConstants**](/en/official/Reference/VBRUN/Constants/MouseButtonConstants) -- bit flags for the *Button* argument of mouse events
- [**MousePointerConstants**](/en/official/Reference/VBRUN/Constants/MousePointerConstants) -- cursor-shape values for the **MousePointer** property
- [**MultiSelectConstants**](/en/official/Reference/VBRUN/Constants/MultiSelectConstants) -- multi-selection mode for the list-box **MultiSelect** property
- [**NegotiatePositionConstants**](/en/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- menu placement during OLE in-place activation
- [**OldLinkModeConstants**](/en/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- legacy DDE link-mode values retained for compatibility
- [**OLEContainerActivateConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- activation trigger for the **AutoActivate** property
- [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) -- combined enumeration of all OLE container option values
- [**OLEContainerDisplayTypeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- display style for the OLE container **DisplayType** property
- [**OLEContainerSizeModeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- sizing rules for the OLE container **SizeMode** property
- [**OLEContainerTypesAllowedConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- object-type filter for **OLETypeAllowed**
- [**OLEContainerUpdateOptionsConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- update mode for a linked OLE object
- [**OLEDragConstants**](/en/official/Reference/VBRUN/Constants/OLEDragConstants) -- OLE drag-mode values for **OLEDragMode**
- [**OLEDropConstants**](/en/official/Reference/VBRUN/Constants/OLEDropConstants) -- OLE drop-mode values for **OLEDropMode**
- [**OLEDropEffectConstants**](/en/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- bit flags for the *Effect* argument of OLE drag-and-drop events
- [**PaletteModeConstants**](/en/official/Reference/VBRUN/Constants/PaletteModeConstants) -- palette-source values for forms and UserControls
- [**ParentControlsType**](/en/official/Reference/VBRUN/Constants/ParentControlsType) -- wrapping mode for the **ParentControls** collection
- [**PictureTypeConstants**](/en/official/Reference/VBRUN/Constants/PictureTypeConstants) -- subtype values for **stdole.IPictureDisp**
- [**PrinterObjectConstants**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- combined enumeration of all **Printer** object option values
- [**PrinterObjectConstants_ColorMode**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- colour mode for **Printer.ColorMode**
- [**PrinterObjectConstants_Duplex**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- duplex mode for **Printer.Duplex**
- [**PrinterObjectConstants_Orientation**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- paper orientation for **Printer.Orientation**
- [**PrinterObjectConstants_PaperBin**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- paper source for **Printer.PaperBin**
- [**PrinterObjectConstants_PaperSize**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- paper size for **Printer.PaperSize**
- [**PrinterObjectConstants_PrintQuality**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- print quality for **Printer.PrintQuality**
- [**QueryUnloadConstants**](/en/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- reason codes for the form's **QueryUnload** event
- [**RasterOpConstants**](/en/official/Reference/VBRUN/Constants/RasterOpConstants) -- GDI raster-operation codes for **PaintPicture**
- [**RecordsetTypeConstants**](/en/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- recordset type for a Data control
- [**ScaleModeConstants**](/en/official/Reference/VBRUN/Constants/ScaleModeConstants) -- measurement units for the **ScaleMode** property
- [**ScrollBarConstants**](/en/official/Reference/VBRUN/Constants/ScrollBarConstants) -- which scrollbars appear on text-box and similar controls
- [**ShapeConstants**](/en/official/Reference/VBRUN/Constants/ShapeConstants) -- geometric shape values for the Shape control's **Shape** property
- [**ShiftConstants**](/en/official/Reference/VBRUN/Constants/ShiftConstants) -- modifier-key bit flags for mouse and key events
- [**ShortcutConstants**](/en/official/Reference/VBRUN/Constants/ShortcutConstants) -- shortcut-key identifiers for menu items
- [**StartUpPositionConstants**](/en/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- initial position for a form's **StartUpPosition** property
- [**StorageTypeContants**](/en/official/Reference/VBRUN/Constants/StorageTypeContants) -- OLE data-storage medium identifiers for **DataObjectFormat**
- [**SystemColorConstants**](/en/official/Reference/VBRUN/Constants/SystemColorConstants) -- system-UI colour references (pass through **TranslateColor** for plain RGB)
- [**VariantTypeConstants**](/en/official/Reference/VBRUN/Constants/VariantTypeConstants) -- legacy DAO field-type tags retained for compatibility
- [**VerticalAlignmentConstants**](/en/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- vertical text alignment for cell-style controls
- [**ZOrderConstants**](/en/official/Reference/VBRUN/Constants/ZOrderConstants) -- position selectors for the **ZOrder** method

### WebView2 Package

Ten enumerations for navigation errors, permissions, download placement, script dialogs, print orientation, and resource-request filtering.

- [**wv2DefaultDownloadCornerAlign**](/en/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) -- anchors the built-in download-progress dialog to a corner of the control
- [**wv2ErrorStatus**](/en/official/Reference/WebView2/Enumerations/wv2ErrorStatus) -- reason a navigation failed (passed in the **NavigationComplete** event)
- [**wv2HostResourceAccessKind**](/en/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) -- cross-origin access policy for a virtual hostname mapping
- [**wv2KeyEventKind**](/en/official/Reference/WebView2/Enumerations/wv2KeyEventKind) -- keyboard message kind in the **AcceleratorKeyPressed** event
- [**wv2PermissionKind**](/en/official/Reference/WebView2/Enumerations/wv2PermissionKind) -- which device or browser capability a page is requesting
- [**wv2PermissionState**](/en/official/Reference/WebView2/Enumerations/wv2PermissionState) -- the host's decision on a permission request
- [**wv2PrintOrientation**](/en/official/Reference/WebView2/Enumerations/wv2PrintOrientation) -- page orientation for **PrintToPdf**
- [**wv2ProcessFailedKind**](/en/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) -- identifies which WebView2 process failed
- [**wv2ScriptDialogKind**](/en/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) -- which JavaScript dialog primitive the page is trying to open
- [**wv2WebResourceContext**](/en/official/Reference/WebView2/Enumerations/wv2WebResourceContext) -- request kind matched by a web-resource filter

### CustomControls Package

Thirteen enumerations governing the appearance and behaviour of the `Waynes...` custom controls.

- [**BorderStyle**](/en/official/Reference/CustomControls/Enumerations/BorderStyle) -- Win32 frame style for a **WaynesForm** window
- [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) -- 32-bit ABGR colour value type alias
- [**CornerShape**](/en/official/Reference/CustomControls/Enumerations/CornerShape) -- shape of a single corner of a control (square, rounded, cut)
- [**Customtate**](/en/official/Reference/CustomControls/Enumerations/Customtate) -- control state flags for custom-state painting
- [**DockMode**](/en/official/Reference/CustomControls/Enumerations/DockMode) -- how a control is positioned relative to its container
- [**FillPattern**](/en/official/Reference/CustomControls/Enumerations/FillPattern) -- how colour stops in a **Fill** are applied across the painted area
- [**FontWeight**](/en/official/Reference/CustomControls/Enumerations/FontWeight) -- font weight on the standard 100--900 OpenType scale
- [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount) -- pixel-measurement type alias used throughout the package
- [**PointSize**](/en/official/Reference/CustomControls/Enumerations/PointSize) -- typographic-point font-size type alias
- [**StartupPosition**](/en/official/Reference/CustomControls/Enumerations/StartupPosition) -- initial position of a **WaynesForm** window when first shown
- [**TextAlignment**](/en/official/Reference/CustomControls/Enumerations/TextAlignment) -- horizontal and vertical text alignment within a control
- [**TextOverflowMode**](/en/official/Reference/CustomControls/Enumerations/TextOverflowMode) -- how text that does not fit is truncated
- [**WindowState**](/en/official/Reference/CustomControls/Enumerations/WindowState) -- minimized, restored, or maximized state of a **WaynesForm**

### CEF Package

Two enumerations for log verbosity and print orientation.

- [**CefLogSeverity**](/en/official/Reference/CEF/Enumerations/CefLogSeverity) -- minimum severity at which the CEF runtime records messages to its debug log
- [**cefPrintOrientation**](/en/official/Reference/CEF/Enumerations/cefPrintOrientation) -- page orientation for **PrintToPdf**

### WinServicesLib Package

Four enumerations covering service type, start mode, control codes, and runtime status.

- [**ServiceControlCodeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- control codes the SCM can deliver to a running service
- [**ServiceStartConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) -- when and how the SCM starts a service
- [**ServiceStatusConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- runtime-state values a service reports to the SCM
- [**ServiceTypeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- Win32 service-type values (own process, shared host, kernel driver)

### WinNativeCommonCtls Package

Ten enumerations for the eight native common controls.

- [**DTPickerFormatConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- display format for a **DTPicker** control
- [**ImlDrawConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- render-style flags for **ListImage.Draw**
- [**OrientationConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- horizontal / vertical orientation for **Slider** and **UpDown**
- [**TreeBorderStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- border style shared by **TreeView** and **ListView**
- [**TreeLabelEditConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- when inline label editing is triggered on a **TreeView**
- [**TreeLineStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- whether the **TreeView** draws lines from root nodes or only child nodes
- [**TreeRelationshipConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- where a new node is inserted relative to an existing node
- [**TreeSortOrderConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- ascending or descending sort order for **TreeView** and **Node**
- [**TreeSortTypeConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- case-sensitive or case-insensitive sort comparison
- [**TreeStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- composite visual style of a **TreeView** (buttons, lines, icons)

---

## Alphabetical index

**A**

- [**AlignConstants**](/en/official/Reference/VBRUN/Constants/AlignConstants) -- **Align** property values (VBRUN)
- [**AlignmentConstants**](/en/official/Reference/VBRUN/Constants/AlignmentConstants) -- text alignment for labels and text boxes (VBRUN)
- [**AlignmentConstantsNoCenter**](/en/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- left/right text alignment without centre (VBRUN)
- [**AppearanceConstants**](/en/official/Reference/VBRUN/Constants/AppearanceConstants) -- drawing style for **Appearance** property (VBRUN)
- [**ApplicationStartConstants**](/en/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- standalone vs. Automation start mode (VBRUN)
- [**AspectTypeConstants**](/en/official/Reference/VBRUN/Constants/AspectTypeConstants) -- OLE rendering aspect identifiers (VBRUN)
- [**AsyncReadConstants**](/en/official/Reference/VBRUN/Constants/AsyncReadConstants) -- **UserControl.AsyncRead** option flags (VBRUN)
- [**AsyncStatusCodeConstants**](/en/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- **AsyncReadProgress** status codes (VBRUN)
- [**AsyncTypeConstants**](/en/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- data kind from **UserControl.AsyncRead** (VBRUN)

**B**

- [**BackFillStyleConstants**](/en/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- opaque vs. transparent background (VBRUN)
- [**BorderStyle**](/en/official/Reference/CustomControls/Enumerations/BorderStyle) -- Win32 frame style for **WaynesForm** (CustomControls)
- [**BorderStyleConstants**](/en/official/Reference/VBRUN/Constants/BorderStyleConstants) -- line style for Shape and Line controls (VBRUN)
- [**ButtonConstants**](/en/official/Reference/VBRUN/Constants/ButtonConstants) -- style for graphical command buttons (VBRUN)

**C**

- [**CefLogSeverity**](/en/official/Reference/CEF/Enumerations/CefLogSeverity) -- CEF debug-log minimum severity (CEF)
- [**cefPrintOrientation**](/en/official/Reference/CEF/Enumerations/cefPrintOrientation) -- page orientation for **PrintToPdf** (CEF)
- [**CheckBoxConstants**](/en/official/Reference/VBRUN/Constants/CheckBoxConstants) -- check-box **Value** property state (VBRUN)
- [**ClipboardConstants**](/en/official/Reference/VBRUN/Constants/ClipboardConstants) -- clipboard format identifiers (VBRUN)
- [**ColorConstants**](/en/official/Reference/VBRUN/Constants/ColorConstants) -- named RGB colours (VBRUN)
- [**ColorRGBA**](/en/official/Reference/CustomControls/Enumerations/ColorRGBA) -- 32-bit ABGR colour type alias (CustomControls)
- [**ComboBoxConstants**](/en/official/Reference/VBRUN/Constants/ComboBoxConstants) -- combo-box **Style** property values (VBRUN)
- [**ControlBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- border style for intrinsic controls (VBRUN)
- [**ControlBorderStyleConstantsCustom**](/en/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- extended border style including custom-drawn (VBRUN)
- [**ControlTypeConstants**](/en/official/Reference/VBRUN/Constants/ControlTypeConstants) -- standard intrinsic control type identifiers (VBRUN)
- [**CornerShape**](/en/official/Reference/CustomControls/Enumerations/CornerShape) -- corner shape (square, rounded, cut) (CustomControls)
- [**Customtate**](/en/official/Reference/CustomControls/Enumerations/Customtate) -- control state flags for custom painting (CustomControls)

**D**

- [**DatabaseTypeConstants**](/en/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- Data control database engine (VBRUN)
- [**DataBOFconstants**](/en/official/Reference/VBRUN/Constants/DataBOFconstants) -- action at beginning of recordset (VBRUN)
- [**DataEOFConstants**](/en/official/Reference/VBRUN/Constants/DataEOFConstants) -- action at end of recordset (VBRUN)
- [**DataErrorConstants**](/en/official/Reference/VBRUN/Constants/DataErrorConstants) -- Data control **Error** event response values (VBRUN)
- [**DataValidateConstants**](/en/official/Reference/VBRUN/Constants/DataValidateConstants) -- action codes in the **Validate** event (VBRUN)
- [**DefaultCursorTypeConstants**](/en/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- cursor driver for a Data control connection (VBRUN)
- [**DockMode**](/en/official/Reference/CustomControls/Enumerations/DockMode) -- how a CustomControl is docked (CustomControls)
- [**DockModeConstants**](/en/official/Reference/VBRUN/Constants/DockModeConstants) -- dock-edge values for forms and toolbars (VBRUN)
- [**DragConstants**](/en/official/Reference/VBRUN/Constants/DragConstants) -- **Drag** method action values (VBRUN)
- [**DragModeConstants**](/en/official/Reference/VBRUN/Constants/DragModeConstants) -- automatic vs. manual drag mode (VBRUN)
- [**DragOverConstants**](/en/official/Reference/VBRUN/Constants/DragOverConstants) -- state values in the **DragOver** event (VBRUN)
- [**DrawModeConstants**](/en/official/Reference/VBRUN/Constants/DrawModeConstants) -- GDI raster-operation for **DrawMode** (VBRUN)
- [**DrawStyleConstants**](/en/official/Reference/VBRUN/Constants/DrawStyleConstants) -- line style for **DrawStyle** property (VBRUN)
- [**DTPickerFormatConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- **DTPicker** display format (WinNativeCommonCtls)

**F**

- [**FillPattern**](/en/official/Reference/CustomControls/Enumerations/FillPattern) -- how colour stops in a **Fill** are applied (CustomControls)
- [**FillStyleConstants**](/en/official/Reference/VBRUN/Constants/FillStyleConstants) -- fill pattern for **FillStyle** property (VBRUN)
- [**FillStyleConstantsEx**](/en/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- extended fill patterns with gradient fills (VBRUN)
- [**FontWeight**](/en/official/Reference/CustomControls/Enumerations/FontWeight) -- font weight on the 100--900 scale (CustomControls)
- [**FormArrangeConstants**](/en/official/Reference/VBRUN/Constants/FormArrangeConstants) -- MDI child-window arrangement modes (VBRUN)
- [**FormBorderStyleConstants**](/en/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- form border and frame style (VBRUN)
- [**FormShowConstants**](/en/official/Reference/VBRUN/Constants/FormShowConstants) -- modality for **Show** (VBRUN)
- [**FormWindowStateConstants**](/en/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- form window state (VBRUN)

**H**

- [**HitResultConstants**](/en/official/Reference/VBRUN/Constants/HitResultConstants) -- **UserControl.HitTest** return values (VBRUN)

**I**

- [**ImlDrawConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- **ListImage.Draw** render-style flags (WinNativeCommonCtls)

**K**

- [**KeyCodeConstants**](/en/official/Reference/VBRUN/Constants/KeyCodeConstants) -- virtual-key codes for key events (VBRUN)

**L**

- [**LinkModeConstants**](/en/official/Reference/VBRUN/Constants/LinkModeConstants) -- DDE link-mode values (VBRUN)
- [**ListBoxConstants**](/en/official/Reference/VBRUN/Constants/ListBoxConstants) -- list-box **Style** property values (VBRUN)
- [**LoadPictureColorConstants**](/en/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- **LoadPicture** colour depth (VBRUN)
- [**LoadPictureSizeConstants**](/en/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- **LoadPicture** size selector (VBRUN)
- [**LoadResConstants**](/en/official/Reference/VBRUN/Constants/LoadResConstants) -- **LoadResPicture** resource type (VBRUN)
- [**LogEventTypeConstants**](/en/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- **LogEvent** severity values (VBRUN)
- [**LogModeConstants**](/en/official/Reference/VBRUN/Constants/LogModeConstants) -- **App.StartLogging** destination flags (VBRUN)

**M**

- [**MenuAccelConstants**](/en/official/Reference/VBRUN/Constants/MenuAccelConstants) -- menu-item keyboard-accelerator codes (VBRUN)
- [**MenuControlConstants**](/en/official/Reference/VBRUN/Constants/MenuControlConstants) -- **PopupMenu** alignment and trigger flags (VBRUN)
- [**MouseButtonConstants**](/en/official/Reference/VBRUN/Constants/MouseButtonConstants) -- mouse-event *Button* argument bit flags (VBRUN)
- [**MousePointerConstants**](/en/official/Reference/VBRUN/Constants/MousePointerConstants) -- **MousePointer** property cursor shape (VBRUN)
- [**MultiSelectConstants**](/en/official/Reference/VBRUN/Constants/MultiSelectConstants) -- list-box multi-selection mode (VBRUN)

**N**

- [**NegotiatePositionConstants**](/en/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- menu placement during OLE in-place activation (VBRUN)

**O**

- [**OldLinkModeConstants**](/en/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- legacy DDE link-mode values (VBRUN)
- [**OLEContainerActivateConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- OLE container auto-activation trigger (VBRUN)
- [**OLEContainerConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerConstants) -- combined OLE container option values (VBRUN)
- [**OLEContainerDisplayTypeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- OLE container display style (VBRUN)
- [**OLEContainerSizeModeConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- OLE container sizing rules (VBRUN)
- [**OLEContainerTypesAllowedConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- OLE container object-type filter (VBRUN)
- [**OLEContainerUpdateOptionsConstants**](/en/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- OLE container update mode (VBRUN)
- [**OLEDragConstants**](/en/official/Reference/VBRUN/Constants/OLEDragConstants) -- **OLEDragMode** property values (VBRUN)
- [**OLEDropConstants**](/en/official/Reference/VBRUN/Constants/OLEDropConstants) -- **OLEDropMode** property values (VBRUN)
- [**OLEDropEffectConstants**](/en/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- OLE drag-and-drop *Effect* bit flags (VBRUN)
- [**OrientationConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- horizontal / vertical for **Slider** and **UpDown** (WinNativeCommonCtls)

**P**

- [**PaletteModeConstants**](/en/official/Reference/VBRUN/Constants/PaletteModeConstants) -- palette source for forms and UserControls (VBRUN)
- [**ParentControlsType**](/en/official/Reference/VBRUN/Constants/ParentControlsType) -- **ParentControls** collection wrapping mode (VBRUN)
- [**PictureTypeConstants**](/en/official/Reference/VBRUN/Constants/PictureTypeConstants) -- **IPictureDisp** subtype values (VBRUN)
- [**PixelCount**](/en/official/Reference/CustomControls/Enumerations/PixelCount) -- pixel-measurement type alias (CustomControls)
- [**PointSize**](/en/official/Reference/CustomControls/Enumerations/PointSize) -- typographic-point font-size type alias (CustomControls)
- [**PrinterObjectConstants**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- combined **Printer** object option values (VBRUN)
- [**PrinterObjectConstants_ColorMode**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- **Printer.ColorMode** values (VBRUN)
- [**PrinterObjectConstants_Duplex**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- **Printer.Duplex** values (VBRUN)
- [**PrinterObjectConstants_Orientation**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- **Printer.Orientation** values (VBRUN)
- [**PrinterObjectConstants_PaperBin**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- **Printer.PaperBin** values (VBRUN)
- [**PrinterObjectConstants_PaperSize**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- **Printer.PaperSize** values (VBRUN)
- [**PrinterObjectConstants_PrintQuality**](/en/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- **Printer.PrintQuality** values (VBRUN)

**Q**

- [**QueryUnloadConstants**](/en/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- **QueryUnload** event reason codes (VBRUN)

**R**

- [**RasterOpConstants**](/en/official/Reference/VBRUN/Constants/RasterOpConstants) -- GDI raster-operation codes for **PaintPicture** (VBRUN)
- [**RecordsetTypeConstants**](/en/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- Data control recordset type (VBRUN)

**S**

- [**ScaleModeConstants**](/en/official/Reference/VBRUN/Constants/ScaleModeConstants) -- measurement units for **ScaleMode** (VBRUN)
- [**ScrollBarConstants**](/en/official/Reference/VBRUN/Constants/ScrollBarConstants) -- which scrollbars appear on a control (VBRUN)
- [**ServiceControlCodeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- SCM control codes for a running service (WinServicesLib)
- [**ServiceStartConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) -- service start mode (WinServicesLib)
- [**ServiceStatusConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- service runtime state values (WinServicesLib)
- [**ServiceTypeConstants**](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- Win32 service type (WinServicesLib)
- [**ShapeConstants**](/en/official/Reference/VBRUN/Constants/ShapeConstants) -- geometric shape for the Shape control (VBRUN)
- [**ShiftConstants**](/en/official/Reference/VBRUN/Constants/ShiftConstants) -- modifier-key bit flags for mouse and key events (VBRUN)
- [**ShortcutConstants**](/en/official/Reference/VBRUN/Constants/ShortcutConstants) -- menu-item keyboard shortcut identifiers (VBRUN)
- [**StartupPosition**](/en/official/Reference/CustomControls/Enumerations/StartupPosition) -- initial position of a **WaynesForm** (CustomControls)
- [**StartUpPositionConstants**](/en/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- form **StartUpPosition** property values (VBRUN)
- [**StorageTypeContants**](/en/official/Reference/VBRUN/Constants/StorageTypeContants) -- OLE data-storage medium identifiers (VBRUN)
- [**SystemColorConstants**](/en/official/Reference/VBRUN/Constants/SystemColorConstants) -- system-UI colour references (VBRUN)

**T**

- [**TextAlignment**](/en/official/Reference/CustomControls/Enumerations/TextAlignment) -- horizontal and vertical text alignment (CustomControls)
- [**TextOverflowMode**](/en/official/Reference/CustomControls/Enumerations/TextOverflowMode) -- text truncation mode (CustomControls)
- [**TreeBorderStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- **TreeView** and **ListView** border style (WinNativeCommonCtls)
- [**TreeLabelEditConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- **TreeView** inline-label-editing trigger (WinNativeCommonCtls)
- [**TreeLineStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- **TreeView** tree-lines scope (WinNativeCommonCtls)
- [**TreeRelationshipConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- **Nodes.Add** insertion position (WinNativeCommonCtls)
- [**TreeSortOrderConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- **TreeView** / **Node** sort direction (WinNativeCommonCtls)
- [**TreeSortTypeConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- **TreeView** / **Node** sort comparison mode (WinNativeCommonCtls)
- [**TreeStyleConstants**](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- **TreeView** composite visual style (WinNativeCommonCtls)

**V**

- [**VbAppWinStyle**](/en/official/Reference/VBA/Constants/VbAppWinStyle) -- window-style values for **Shell** (VBA)
- [**VbArchitecture**](/en/official/Reference/VBA/Constants/VbArchitecture) -- processor-architecture values (VBA)
- [**VbCalendar**](/en/official/Reference/VBA/Constants/VbCalendar) -- calendar type values (VBA)
- [**VbCallType**](/en/official/Reference/VBA/Constants/VbCallType) -- **CallByName** call-type flags (VBA)
- [**VbCompareMethod**](/en/official/Reference/VBA/Constants/VbCompareMethod) -- text-comparison mode for string functions (VBA)
- [**VbDateTimeFormat**](/en/official/Reference/VBA/Constants/VbDateTimeFormat) -- **FormatDateTime** format codes (VBA)
- [**VbDayOfWeek**](/en/official/Reference/VBA/Constants/VbDayOfWeek) -- day-of-week constants for date functions (VBA)
- [**VbFileAttribute**](/en/official/Reference/VBA/Constants/VbFileAttribute) -- file-attribute flags (VBA)
- [**VbFirstWeekOfYear**](/en/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- first-week-of-year selectors for date functions (VBA)
- [**VbIMEStatus**](/en/official/Reference/VBA/Constants/VbIMEStatus) -- Input Method Editor mode constants (VBA)
- [**VbMsgBoxResult**](/en/official/Reference/VBA/Constants/VbMsgBoxResult) -- **MsgBox** button-clicked identifier (VBA)
- [**VbMsgBoxStyle**](/en/official/Reference/VBA/Constants/VbMsgBoxStyle) -- **MsgBox** button, icon, and modality flags (VBA)
- [**VbStrConv**](/en/official/Reference/VBA/Constants/VbStrConv) -- **StrConv** conversion-type flags (VBA)
- [**VbTriState**](/en/official/Reference/VBA/Constants/VbTriState) -- three-state values for formatting functions (VBA)
- [**VbVarType**](/en/official/Reference/VBA/Constants/VbVarType) -- **VarType** Variant subtype codes (VBA)
- [**VariantTypeConstants**](/en/official/Reference/VBRUN/Constants/VariantTypeConstants) -- legacy DAO field-type tags (VBRUN)
- [**VerticalAlignmentConstants**](/en/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- vertical text alignment (VBRUN)

**W**

- [**WindowState**](/en/official/Reference/CustomControls/Enumerations/WindowState) -- **WaynesForm** window state (CustomControls)
- [**wv2DefaultDownloadCornerAlign**](/en/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) -- download-dialog corner alignment (WebView2)
- [**wv2ErrorStatus**](/en/official/Reference/WebView2/Enumerations/wv2ErrorStatus) -- navigation failure reason (WebView2)
- [**wv2HostResourceAccessKind**](/en/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) -- virtual-hostname cross-origin access policy (WebView2)
- [**wv2KeyEventKind**](/en/official/Reference/WebView2/Enumerations/wv2KeyEventKind) -- accelerator-key event kind (WebView2)
- [**wv2PermissionKind**](/en/official/Reference/WebView2/Enumerations/wv2PermissionKind) -- permission request capability identifier (WebView2)
- [**wv2PermissionState**](/en/official/Reference/WebView2/Enumerations/wv2PermissionState) -- permission-request decision (WebView2)
- [**wv2PrintOrientation**](/en/official/Reference/WebView2/Enumerations/wv2PrintOrientation) -- **PrintToPdf** page orientation (WebView2)
- [**wv2ProcessFailedKind**](/en/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) -- failed WebView2 process identifier (WebView2)
- [**wv2ScriptDialogKind**](/en/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) -- JavaScript dialog kind (WebView2)
- [**wv2WebResourceContext**](/en/official/Reference/WebView2/Enumerations/wv2WebResourceContext) -- web-resource filter request kind (WebView2)

**Z**

- [**ZOrderConstants**](/en/official/Reference/VBRUN/Constants/ZOrderConstants) -- **ZOrder** method position selectors (VBRUN)

---

### See Also

- [Statements](/en/official/Reference/Statements) -- alphabetical index of language statements
- [Procedures and Functions](/en/official/Reference/Procedures-and-Functions) -- alphabetical index of callable runtime members
- [Operators](/en/official/Reference/Operators) -- arithmetic, comparison, logical, and bitwise operators
- [Packages](/en/official/Reference/Packages) -- all twelve built-in packages
