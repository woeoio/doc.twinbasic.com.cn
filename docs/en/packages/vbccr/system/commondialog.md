---
title: CommonDialog Control
description: CommonDialog Control - VBCCR Development Manual, Complete API Reference Based on Source Code
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ec635500-4594-4a10-854c-324b32bb4b8a'
  PropagateID: 'ec635500-4594-4a10-854c-324b32bb4b8a'
  ReservedCode1: 'a1593645-b1e1-4d27-a629-daa2e4d8f226'
  ReservedCode2: 'a1593645-b1e1-4d27-a629-daa2e4d8f226'
---

# CommonDialog Control

Provides a wrapper class for Windows standard dialogs (Open, Save, Color, Font, Print, Help, Page Setup, Folder Browser, Find, Replace).

## Enumerations

### CdlErrorConstants

| Constant | Value | Description |
|------|-----|------|
| CdlCancel | 32755 | User selected "Cancel" |
| CdlBufferTooSmall | 20476 | File name buffer is too small |
| CdlInvalidFileName | 20477 | Invalid file name |
| CdlSubclassFailure | 20478 | Subclassing failed |
| CdlMaxLessThanMin | 24573 | Minimum value is greater than maximum |
| CdlNoFonts | 24574 | No fonts available |
| CdlPrinterNotFound | 28660 | Printer not found |
| CdlCreateICFailure | 28661 | Failed to create information context |
| CdlDndmMismatch | 28662 | DEVMODE mismatch |
| CdlNoDefaultPrn | 28663 | No default printer |
| CdlNoDevices | 28664 | No print devices |
| CdlInitFailure | 28665 | Print dialog initialization failed |
| CdlGetDevModeFail | 28666 | Failed to get DEVMODE |
| CdlLoadDrvFailure | 28667 | Failed to load printer driver |
| CdlRetDefFailure | 28668 | Failed to return default DEVMODE |
| CdlParseFailure | 28669 | Parse failure |
| CdlHelp | 32751 | Help request |
| CdlBufferLengthZero | 36848 | Buffer length is zero |

### CdlPRORConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRORPortrait | vbPRORPortrait | Portrait orientation |
| CdlPRORLandscape | vbPRORLandscape | Landscape orientation |

### CdlPRPSConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRPSLetter | vbPRPSLetter | Letter |
| CdlPRPSLetterSmall | vbPRPSLetterSmall | Letter Small |
| CdlPRPSTabloid | vbPRPSTabloid | Tabloid |
| CdlPRPSLedger | vbPRPSLedger | Ledger |
| CdlPRPSLegal | vbPRPSLegal | Legal |
| CdlPRPSStatement | vbPRPSStatement | Statement |
| CdlPRPSExecutive | vbPRPSExecutive | Executive |
| CdlPRPSA3 | vbPRPSA3 | A3 |
| CdlPRPSA4 | vbPRPSA4 | A4 |
| CdlPRPSA4Small | vbPRPSA4Small | A4 Small |
| CdlPRPSA5 | vbPRPSA5 | A5 |
| CdlPRPSB4 | vbPRPSB4 | B4 |
| CdlPRPSB5 | vbPRPSB5 | B5 |
| CdlPRPSFolio | vbPRPSFolio | Folio |
| CdlPRPSQuarto | vbPRPSQuarto | Quarto |
| CdlPRPS10x14 | vbPRPS10x14 | 10x14 |
| CdlPRPS11x17 | vbPRPS11x17 | 11x17 |
| CdlPRPSNote | vbPRPSNote | Note |
| CdlPRPSEnv9 | vbPRPSEnv9 | Envelope #9 |
| CdlPRPSEnv10 | vbPRPSEnv10 | Envelope #10 |
| CdlPRPSEnv11 | vbPRPSEnv11 | Envelope #11 |
| CdlPRPSEnv12 | vbPRPSEnv12 | Envelope #12 |
| CdlPRPSEnv14 | vbPRPSEnv14 | Envelope #14 |
| CdlPRPSCSheet | vbPRPSCSheet | C Sheet |
| CdlPRPSDSheet | vbPRPSDSheet | D Sheet |
| CdlPRPSESheet | vbPRPSESheet | E Sheet |
| CdlPRPSEnvDL | vbPRPSEnvDL | Envelope DL |
| CdlPRPSEnvC5 | vbPRPSEnvC5 | Envelope C5 |
| CdlPRPSEnvC3 | vbPRPSEnvC3 | Envelope C3 |
| CdlPRPSEnvC4 | vbPRPSEnvC4 | Envelope C4 |
| CdlPRPSEnvC6 | vbPRPSEnvC6 | Envelope C6 |
| CdlPRPSEnvC65 | vbPRPSEnvC65 | Envelope C65 |
| CdlPRPSEnvB4 | vbPRPSEnvB4 | Envelope B4 |
| CdlPRPSEnvB5 | vbPRPSEnvB5 | Envelope B5 |
| CdlPRPSEnvB6 | vbPRPSEnvB6 | Envelope B6 |
| CdlPRPSEnvItaly | vbPRPSEnvItaly | Envelope Italy |
| CdlPRPSEnvMonarch | vbPRPSEnvMonarch | Envelope Monarch |
| CdlPRPSEnvPersonal | vbPRPSEnvPersonal | Envelope Personal |
| CdlPRPSFanfoldUS | vbPRPSFanfoldUS | Fanfold US |
| CdlPRPSFanfoldStdGerman | vbPRPSFanfoldStdGerman | Fanfold Std German |
| CdlPRPSFanfoldLglGerman | vbPRPSFanfoldLglGerman | Fanfold Lgl German |
| CdlPRPSUser | vbPRPSUser | User-defined |

### CdlPRBNConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRBNUpper | vbPRBNUpper | Upper paper bin |
| CdlPRBNLower | vbPRBNLower | Lower paper bin |
| CdlPRBNMiddle | vbPRBNMiddle | Middle paper bin |
| CdlPRBNManual | vbPRBNManual | Manual paper feed |
| CdlPRBNEnvelope | vbPRBNEnvelope | Envelope bin |
| CdlPRBNEnvManual | vbPRBNEnvManual | Envelope manual feed |
| CdlPRBNAuto | vbPRBNAuto | Auto feed |
| CdlPRBNTractor | vbPRBNTractor | Tractor feed |
| CdlPRBNSmallFmt | vbPRBNSmallFmt | Small format bin |
| CdlPRBNLargeFmt | vbPRBNLargeFmt | Large format bin |
| CdlPRBNLargeCapacity | vbPRBNLargeCapacity | Large capacity bin |
| CdlPRBNCassette | vbPRBNCassette | Cassette bin |

### CdlPRPQConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRPQHigh | vbPRPQHigh | High quality |
| CdlPRPQMedium | vbPRPQMedium | Medium quality |
| CdlPRPQLow | vbPRPQLow | Low quality |
| CdlPRPQDraft | vbPRPQDraft | Draft quality |

### CdlPRCMConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRCMMonochrome | vbPRCMMonochrome | Monochrome printing |
| CdlPRCMColor | vbPRCMColor | Color printing |

### CdlPRDPConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPRDPSimplex | vbPRDPSimplex | Single-sided printing |
| CdlPRDPHorizontal | vbPRDPHorizontal | Double-sided horizontal flip |
| CdlPRDPVertical | vbPRDPVertical | Double-sided vertical flip |

### CdlOFNConstants

| Constant | Value | Description |
|------|-----|------|
| CdlOFNReadOnly | &H1 | Show read-only checkbox |
| CdlOFNOverwritePrompt | &H2 | Prompt before overwriting file |
| CdlOFNHideReadOnly | &H4 | Hide read-only checkbox |
| CdlOFNNoChangeDir | &H8 | Do not change current directory |
| CdlOFNHelpButton | &H10 | Show help button |
| CdlOFNNoValidate | &H100 | Do not validate file name |
| CdlOFNAllowMultiSelect | &H200 | Allow multiple selections |
| CdlOFNExtensionDifferent | &H400 | Extension is different |
| CdlOFNPathMustExist | &H800 | Path must exist |
| CdlOFNFileMustExist | &H1000 | File must exist |
| CdlOFNCreatePrompt | &H2000 | Prompt to create file |
| CdlOFNShareAware | &H4000 | Ignore sharing errors |
| CdlOFNNoReadOnlyReturn | &H8000& | Do not return read-only files |
| CdlOFNNoNetworkButton | &H20000 | Hide network button |
| CdlOFNExplorer | &H80000 | Use Explorer-style dialog |
| CdlOFNNoDereferenceLinks | &H100000 | Do not dereference shortcuts |
| CdlOFNDontAddToRecent | &H2000000 | Do not add to recent files |
| CdlOFNForcesShowHidden | &H10000000 | Show hidden files |

### CdlOFNShareViResultConstants

| Constant | Value | Description |
|------|-----|------|
| CdlOFNShareViResultWarn | &H0 | Warn on sharing violation |
| CdlOFNShareViResultNoWarn | &H1 | Do not warn on sharing violation |
| CdlOFNShareViResultFallThrough | &H2 | Ignore sharing violation |

### CdlCCConstants

| Constant | Value | Description |
|------|-----|------|
| CdlCCRGBInit | &H1 | Use initial color |
| CdlCCFullOpen | &H2 | Fully open the dialog |
| CdlCCPreventFullOpen | &H4 | Prevent full open |
| CdlCCHelpButton | &H8 | Show help button |
| CdlCCSolidColor | &H80 | Solid colors only |
| CdlCCAnyColor | &H100 | Any color |

### CdlCFConstants

| Constant | Value | Description |
|------|-----|------|
| CdlCFScreenFonts | &H1 | Screen fonts |
| CdlCFPrinterFonts | &H2 | Printer fonts |
| CdlCFHelpButton | &H4 | Show help button |
| CdlCFEffects | &H100 | Enable effects options |
| CdlCFApply | &H200 | Enable Apply button |
| CdlCFScriptsOnly | &H400 | Script fonts only |
| CdlCFNoVectorFonts | &H800 | Exclude vector fonts |
| CdlCFLimitSize | &H2000 | Limit font size |
| CdlCFFixedPitchOnly | &H4000 | Fixed-pitch fonts only |
| CdlCFForceFontExist | &H10000 | Font must exist |
| CdlCFScalableOnly | &H20000 | Scalable fonts only |
| CdlCFTTOnly | &H40000 | TrueType fonts only |
| CdlCFNoFaceSel | &H80000 | No font name selected |
| CdlCFNoStyleSel | &H100000 | No style selected |
| CdlCFNoSizeSel | &H200000 | No size selected |
| CdlCFSelectScript | &H400000 | Select script |
| CdlCFNoScriptSel | &H800000 | No script selected |
| CdlCFNoVertFonts | &H1000000 | Exclude vertical fonts |

### CdlPDConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPDAllPages | &H0 | All pages |
| CdlPDSelection | &H1 | Selection |
| CdlPDPageNums | &H2 | Page range |
| CdlPDNoSelection | &H4 | Disable selection |
| CdlPDNoPageNums | &H8 | Disable page range |
| CdlPDCollate | &H10 | Collate copies |
| CdlPDPrintToFile | &H20 | Print to file |
| CdlPDPrintSetup | &H40 | Show print setup |
| CdlPDNoWarning | &H80 | No warning |
| CdlPDReturnDC | &H100 | Return device context |
| CdlPDReturnIC | &H200 | Return information context |
| CdlPDReturnDefault | &H400 | Return default printer |
| CdlPDHelpButton | &H800 | Show help button |
| CdlPDUseDevModeCopies | &H40000 | Use DEVMODE copy count |
| CdlPDUseDevModeCopiesAndCollate | &H40000 | Use DEVMODE copies and collate |
| CdlPDDisablePrintToFile | &H80000 | Disable print to file |
| CdlPDCurrentPage | &H400000 | Current page |
| CdlPDHidePrintToFile | &H100000 | Hide print to file |
| CdlPDNoNetworkButton | &H200000 | Hide network button |
| CdlPDNoCurrentPage | &H800000 | Disable current page |

### CdlPDResultConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPDResultCancel | &H0 | User cancelled |
| CdlPDResultPrint | &H1 | User chose print |
| CdlPDResultApply | &H2 | User chose apply |

### CdlHelpConstants

| Constant | Value | Description |
|------|-----|------|
| CdlHelpContext | &H1 | Context help |
| CdlHelpQuit | &H2 | Quit help |
| CdlHelpIndex | &H3 | Help index |
| CdlHelpContents | &H3 | Help contents |
| CdlHelpHelpOnHelp | &H4 | Help on help |
| CdlHelpSetIndex | &H5 | Set help index |
| CdlHelpSetContents | &H5 | Set help contents |
| CdlHelpContextPopup | &H8 | Context popup help |
| CdlHelpForceFile | &H9 | Force help file |
| CdlHelpKey | &H101 | Keyword help |
| CdlHelpCommandHelp | &H102 | Command help |
| CdlHelpPartialKey | &H105 | Partial keyword help |

### CdlPSDConstants

| Constant | Value | Description |
|------|-----|------|
| CdlPSDDefaultMinMargins | &H0 | Default minimum margins |
| CdlPSDMinMargins | &H1 | Allow setting minimum margins |
| CdlPSDMargins | &H2 | Allow setting margins |
| CdlPSDInThousandthsOfInches | &H4 | In thousandths of inches |
| CdlPSDInHundredthsOfMillimeters | &H8 | In hundredths of millimeters |
| CdlPSDDisableMargins | &H10 | Disable margins |
| CdlPSDDisablePrinter | &H20 | Disable printer button |
| CdlPSDNoWarning | &H80 | No warning |
| CdlPSDDisableOrientation | &H100 | Disable orientation |
| CdlPSDDisablePaper | &H200 | Disable paper |
| CdlPSDReturnDefault | &H400 | Return default settings |
| CdlPSDHelpButton | &H800 | Show help button |
| CdlPSDDisablePagePainting | &H80000 | Disable page painting |
| CdlPSDNoNetworkButton | &H200000 | Hide network button |

### CdlBIFConstants

| Constant | Value | Description |
|------|-----|------|
| CdlBIFReturnOnlyFSDirs | &H1 | Return file system directories only |
| CdlBIFDontGoBelowDomain | &H2 | Do not go below domain |
| CdlBIFStatusText | &H4 | Include status text |
| CdlBIFReturnFSAncestors | &H8 | Return file system ancestors |
| CdlBIFEditBox | &H10 | Include edit box |
| CdlBIFValidate | &H20 | Validate input |
| CdlBIFNewDialogStyle | &H40 | New dialog style |
| CdlBIFBrowseIncludeURLs | &H80 | Include URLs |
| CdlBIFUseNewUI | &H50 | Use new UI |
| CdlBIFUAHint | &H100 | User hint |
| CdlBIFNoNewFolderButton | &H200 | Hide new folder button |
| CdlBIFNoTranslateTargets | &H400 | Do not translate targets |
| CdlBIFBrowseForComputer | &H1000 | Browse for computer only |
| CdlBIFBrowseForPrinter | &H2000 | Browse for printer only |
| CdlBIFBrowseIncludeFiles | &H4000 | Include files |
| CdlBIFShareable | &H8000& | Shareable |
| CdlBIFBrowseFileJunctions | &H10000 | Browse file junctions |

### CdlFRConstants

| Constant | Value | Description |
|------|-----|------|
| CdlFRDown | &H1 | Search downward |
| CdlFRWholeWord | &H2 | Match whole word |
| CdlFRMatchCase | &H4 | Case-sensitive |
| CdlFRFindNext | &H8 | Find next |
| CdlFRReplace | &H10 | Replace |
| CdlFRReplaceAll | &H20 | Replace all |
| CdlFRHelpButton | &H80 | Show help button |
| CdlFRNoUpDown | &H400 | Disable direction selection |
| CdlFRNoMatchCase | &H800 | Disable case selection |
| CdlFRNoWholeWord | &H1000 | Disable whole word selection |
| CdlFRHideUpDown | &H4000 | Hide direction selection |
| CdlFRHideMatchCase | &H8000& | Hide case selection |
| CdlFRHideWholeWord | &H10000 | Hide whole word selection |

## Properties

### Object

`Property Get Object() As Object`

Returns the instance of the object itself.

### CancelError

`Property Get/Let CancelError() As Boolean`

Indicates whether an error is raised when the user selects "Cancel".

### HookEvents

`Property Get/Let HookEvents() As Boolean`

Indicates whether the dialog can raise events that require hook callbacks.

### Tag

`Property Get/Let Tag() As String`

Stores additional data needed by the program.

### hDC

`Property Get hDC() As LongPtr`

Returns the device context handle (read-only).

### Flags

`Property Get/Let Flags() As Long`

Returns/sets the dialog option flags.

### DialogTitle

`Property Get/Let DialogTitle() As String`

Sets the string displayed in the dialog title bar.

### MaxFileSize

`Property Get/Let MaxFileSize() As Long`

Returns/sets the maximum size of the open file name.

### FileName

`Property Get/Let FileName() As String`

Returns/sets the path and file name of the selected file.

### FileTitle

`Property Get FileTitle() As String`

Returns the file name of the selected file (without path, read-only).

### FileOffset

`Property Get FileOffset() As Integer`

Returns the zero-based offset from the beginning of the path to the file name (read-only).

### Filter

`Property Get/Let Filter() As String`

Returns/sets the filter displayed in the dialog type list box.

### FilterIndex

`Property Get/Let FilterIndex() As Long`

Returns/sets the default filter index.

### InitDir

`Property Get/Let InitDir() As String`

Returns/sets the initial file directory.

### DefaultExt

`Property Get/Let DefaultExt() As String`

Returns/sets the default file extension.

### Color

`Property Get/Let Color() As Long`

Returns/sets the selected color.

### CustomColors

`Property Get/Let CustomColors() As Variant`

Returns/sets the custom colors available for user selection.

### FontName

`Property Get/Let FontName() As String`

Returns/sets the font name.

### FontSize

`Property Get/Let FontSize() As Single`

Returns/sets the font size (in points).

### FontBold

`Property Get/Let FontBold() As Boolean`

Returns/sets the bold font style.

### FontItalic

`Property Get/Let FontItalic() As Boolean`

Returns/sets the italic font style.

### FontStrikethru

`Property Get/Let FontStrikethru() As Boolean`

Returns/sets the strikethrough font style.

### FontUnderline

`Property Get/Let FontUnderline() As Boolean`

Returns/sets the underline font style.

### FontCharset

`Property Get/Let FontCharset() As Integer`

Returns/sets the font character set.

### FontWeight

`Property Get/Let FontWeight() As Integer`

Returns/sets the font weight (0=Don'tCare, 100=Thin, 200=ExtraLight, 300=Light, 400=Normal, 500=Medium, 600=SemiBold, 700=Bold, 800=ExtraBold, 900=Heavy).

### Min

`Property Get/Let Min() As Long`

Returns/sets the minimum font size (Font dialog) or minimum print page range (Print dialog).

### Max

`Property Get/Let Max() As Long`

Returns/sets the maximum font size (Font dialog) or maximum print page range (Print dialog).

### FromPage

`Property Get/Let FromPage() As Long`

Returns/sets the starting print page.

### ToPage

`Property Get/Let ToPage() As Long`

Returns/sets the ending print page.

### Orientation

`Property Get/Let Orientation() As CdlPRORConstants`

Returns/sets the print orientation.

### PaperSize

`Property Get/Let PaperSize() As CdlPRPSConstants`

Returns/sets the print paper size.

### Copies

`Property Get/Let Copies() As Integer`

Returns/sets the number of print copies.

### PaperBin

`Property Get/Let PaperBin() As CdlPRBNConstants`

Returns/sets the default paper bin.

### PrintQuality

`Property Get/Let PrintQuality() As CdlPRPQConstants`

Returns/sets the print resolution.

### ColorMode

`Property Get/Let ColorMode() As CdlPRCMConstants`

Returns/sets the printer color mode.

### Duplex

`Property Get/Let Duplex() As CdlPRDPConstants`

Returns/sets the duplex printing mode.

### PrinterDefault

`Property Get/Let PrinterDefault() As Boolean`

Returns/sets whether the user selection changes the default printer.

### PrinterDefaultInit

`Property Get/Let PrinterDefaultInit() As Boolean`

Returns/sets whether to always initialize the default printer.

### PrinterDriver

`Property Get/Let PrinterDriver() As String`

Returns/sets the non-default printer driver name.

### PrinterName

`Property Get/Let PrinterName() As String`

Returns/sets the non-default printer device name.

### PrinterPort

`Property Get/Let PrinterPort() As String`

Returns/sets the non-default printer port name.

### HelpFile

`Property Get/Let HelpFile() As String`

Returns/sets the help file name associated with the project.

### HelpCommand

`Property Get/Let HelpCommand() As CdlHelpConstants`

Returns/sets the online help type.

### HelpContext

`Property Get/Let HelpContext() As LongPtr`

Returns/sets the context ID for the help topic.

### HelpKey

`Property Get/Let HelpKey() As String`

Returns/sets the keyword that identifies the help topic.

### PageLeftMargin

`Property Get/Let PageLeftMargin() As Long`

Returns/sets the left margin of the paper (device units).

### PageTopMargin

`Property Get/Let PageTopMargin() As Long`

Returns/sets the top margin of the paper (device units).

### PageRightMargin

`Property Get/Let PageRightMargin() As Long`

Returns/sets the right margin of the paper (device units).

### PageBottomMargin

`Property Get/Let PageBottomMargin() As Long`

Returns/sets the bottom margin of the paper (device units).

### PageLeftMinMargin

`Property Get/Let PageLeftMinMargin() As Long`

Returns/sets the minimum left margin of the paper (device units).

### PageTopMinMargin

`Property Get/Let PageTopMinMargin() As Long`

Returns/sets the minimum top margin of the paper (device units).

### PageRightMinMargin

`Property Get/Let PageRightMinMargin() As Long`

Returns/sets the minimum right margin of the paper (device units).

### PageBottomMinMargin

`Property Get/Let PageBottomMinMargin() As Long`

Returns/sets the minimum bottom margin of the paper (device units).

### RootFolder

`Property Get/Let RootFolder() As Variant`

Returns/sets the root folder for the folder browser dialog.

### FindWhat

`Property Get/Let FindWhat() As String`

Returns/sets the search string for the Find dialog.

### ReplaceWith

`Property Get/Let ReplaceWith() As String`

Returns/sets the replacement string for the Replace dialog.

### Action

`Property Let Action() As Integer`

Sets the type of dialog to display (write-only, 1=Open, 2=Save, 3=Color, 4=Font, 5=Print, 6=Help, 7=Page Setup, 8=Folder Browser, 9=Find, 10=Replace).

## Methods

### ShowOpen

`Public Function ShowOpen() As Boolean`

Displays the Open dialog. Returns True on success.

### ShowSave

`Public Function ShowSave() As Boolean`

Displays the Save dialog. Returns True on success.

### ShowColor

`Public Function ShowColor() As Boolean`

Displays the Color dialog. Returns True on success.

### ShowFont

`Public Function ShowFont() As Boolean`

Displays the Font dialog. Returns True on success.

### ShowPrinter

`Public Function ShowPrinter() As Boolean`

Displays the Print dialog. Returns True on success.

### ShowPrinterEx

`Public Function ShowPrinterEx() As Boolean`

Displays the extended Print dialog (PrintDlgEx). Returns True on success.

### ShowHelp

`Public Sub ShowHelp()`

Displays help.

### ShowPageSetup

`Public Function ShowPageSetup() As Boolean`

Displays the Page Setup dialog. Returns True on success.

### ShowFolderBrowser

`Public Function ShowFolderBrowser() As Boolean`

Displays the Folder Browser dialog. Returns True on success.

### ShowFind

`Public Function ShowFind() As Boolean`

Displays the Find dialog. Returns True on success.

### ShowReplace

`Public Function ShowReplace() As Boolean`

Displays the Replace dialog. Returns True on success.

## Events

### InitDialog

`Public Event InitDialog(ByVal Action As Integer, ByVal hDlg As Long)`

Occurs when the dialog has completed initialization.

### Help

`Public Event Help(ByRef Handled As Boolean, ByVal Action As Integer, ByVal hDlg As Long)`

Occurs when the user clicks the help button in the dialog.

### FileShareViolation

`Public Event FileShareViolation(ByVal FileName As String, ByRef Result As CdlOFNShareViResultConstants, ByVal hDlg As Long)`

Occurs when the user clicks OK in the Open or Save dialog and a network sharing violation occurs.

### FileValidate

`Public Event FileValidate(ByVal FileName As String, ByVal FileTitle As String, ByVal FileOffset As Integer, ByRef Cancel As Boolean, ByVal hDlg As Long)`

Occurs when the user clicks OK in the Open or Save dialog.

### ColorValidate

`Public Event ColorValidate(ByRef RGBColor As Long, ByRef Cancel As Boolean, ByVal hDlg As Long)`

Occurs when the user clicks OK in the Color dialog.

### FontApply

`Public Event FontApply(ByVal Flags As Long, ByVal FontName As String, ByVal FontSize As Single, ByVal FontBold As Boolean, ByVal FontItalic As Boolean, ByVal FontStrikethru As Boolean, ByVal FontUnderline As Boolean, ByVal FontCharset As Integer, ByVal RGBColor As Long, ByVal hDlg As Long)`

Occurs when the user clicks the "Apply" button in the Font dialog.

### FolderBrowserValidateFailed

`Public Event FolderBrowserValidateFailed(ByVal Text As String, ByRef Cancel As Boolean, ByVal hDlg As Long)`

Occurs when the user enters an invalid name in the Folder Browser dialog.

### FindNext

`Public Event FindNext()`

Occurs when the user clicks the "Find Next" button in the Find or Replace dialog.

### Replace

`Public Event Replace()`

Occurs when the user clicks the "Replace" button in the Replace dialog.

### ReplaceAll

`Public Event ReplaceAll()`

Occurs when the user clicks the "Replace All" button in the Replace dialog.

## Code Examples

### Basic Usage

```vb
Private Sub cmdOpen_Click()
    Dim dlg As CommonDialog
    Set dlg = New CommonDialog
    
    dlg.Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*"
    dlg.FilterIndex = 1
    dlg.CancelError = True
    
    On Error GoTo Cancelled
    If dlg.ShowOpen() Then
        MsgBox "Selected: " & dlg.FileName
    End If
    Exit Sub
Cancelled:
    If Err.Number = CdlCancel Then Exit Sub
    MsgBox "Error: " & Err.Description
End Sub
```

### Using Event Hooks

```vb
Private WithEvents dlg As CommonDialog

Private Sub cmdFont_Click()
    Set dlg = New CommonDialog
    dlg.HookEvents = True
    dlg.Flags = CdlCFScreenFonts Or CdlCFEffects Or CdlCFLimitSize
    dlg.Min = 8
    dlg.Max = 72
    dlg.ShowFont
End Sub

Private Sub dlg_FontApply(ByVal Flags As Long, ByVal FontName As String, _
    ByVal FontSize As Single, ByVal FontBold As Boolean, ByVal FontItalic As Boolean, _
    ByVal FontStrikethru As Boolean, ByVal FontUnderline As Boolean, _
    ByVal FontCharset As Integer, ByVal RGBColor As Long, ByVal hDlg As Long)
    Me.Font.Name = FontName
    Me.Font.Size = FontSize
    Me.Font.Bold = FontBold
    Me.Font.Italic = FontItalic
End Sub
```