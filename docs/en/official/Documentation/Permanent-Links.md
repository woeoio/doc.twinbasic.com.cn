---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f1eb40eb-d7fc-41f9-8942-ea5ac98c2571'
  PropagateID: 'f1eb40eb-d7fc-41f9-8942-ea5ac98c2571'
  ReservedCode1: '66bf97b7-6ca4-430d-bc67-a83b74d94eaa'
  ReservedCode2: '66bf97b7-6ca4-430d-bc67-a83b74d94eaa'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '13605a79-c393-496f-9c3a-f8f6ab13a73f'
  PropagateID: '13605a79-c393-496f-9c3a-f8f6ab13a73f'
  ReservedCode1: '99077cb7-777d-4d81-b8dc-ab23cac9c135'
  ReservedCode2: '99077cb7-777d-4d81-b8dc-ab23cac9c135'
---

---
title: Permanent Links
parent: Documentation Development
nav_order: 1
permalink: /Documentation/Development/Permanent-Links
---

# Permanent Links

The stable, or machine-accessible, part of the documentation tree is rooted on the `/tB/` prefix. URLs with this prefix --- and the internal links that target them, e.g. [`docs.twinbasic.com/tB/Modules/Math/Round`](/en/official/Reference/VBA/Math/Round) --- are guaranteed not to move. This is the contract the IDE help system, `[Documentation(...)]` attribute references, and external links rely on; anything documented below should be treated as essential.

## /tB/Core/``<Statement>``

- [AppActivate](/en/official/Reference/Core/AppActivate)
- [Beep](/en/official/Reference/Core/Beep)
- [Call](/en/official/Reference/Core/Call), [ChDir](/en/official/Reference/Core/ChDir), [ChDrive](/en/official/Reference/Core/ChDrive), [Class](/en/official/Reference/Core/Class), [Close](/en/official/Reference/Core/Close), [CoClass](/en/official/Reference/Core/CoClass), [Const](/en/official/Reference/Core/Const), [Continue](/en/official/Reference/Core/Continue)
- [Date](/en/official/Reference/Core/Date), [Declare](/en/official/Reference/Core/Declare), [Deftype](/en/official/Reference/Core/Deftype), [DeleteSetting](/en/official/Reference/Core/DeleteSetting), [Dim](/en/official/Reference/Core/Dim), [Do-Loop](/en/official/Reference/Core/Do-Loop)
- [End](/en/official/Reference/Core/End), [Enum](/en/official/Reference/Core/Enum), [Erase](/en/official/Reference/Core/Erase), [Error](/en/official/Reference/Core/Error), [Event](/en/official/Reference/Core/Event), [Exit](/en/official/Reference/Core/Exit)
- [FileCopy](/en/official/Reference/Core/FileCopy), [For-Next](/en/official/Reference/Core/For-Next), [For-Each-Next](/en/official/Reference/Core/For-Each-Next), [Function](/en/official/Reference/Core/Function)
- [Get](/en/official/Reference/Core/Get), [GetSetting](/en/official/Reference/Core/GetSetting), [GoSub-Return](/en/official/Reference/Core/GoSub-Return), [GoTo](/en/official/Reference/Core/GoTo)
- [If-Then-Else](/en/official/Reference/Core/If-Then-Else), [Implements](/en/official/Reference/Core/Implements), [Input](/en/official/Reference/Core/Input), [Interface](/en/official/Reference/Core/Interface), [Is](/en/official/Reference/Core/Is)
- [Kill](/en/official/Reference/Core/Kill)
- [LBound](/en/official/Reference/Core/LBound), [Let](/en/official/Reference/Core/Let), [Line-Input](/en/official/Reference/Core/Line-Input), [Load](/en/official/Reference/Core/Load), [Lock](/en/official/Reference/Core/Lock), [LSet](/en/official/Reference/Core/LSet)
- [Mid-equals](/en/official/Reference/Core/Mid-equals) for `Mid(...) = ...` , [MidB-equals](/en/official/Reference/Core/MidB-equals) for `MidB(...) = ...`, [MkDir](/en/official/Reference/Core/MkDir), [Module](/en/official/Reference/Core/Module)
- [Name](/en/official/Reference/Core/Name), [New](/en/official/Reference/Core/New)
- [Option](/en/official/Reference/Core/Option), [On-Error](/en/official/Reference/Core/On-Error), [On-GoSub](/en/official/Reference/Core/On-GoSub), [On-GoTo](/en/official/Reference/Core/On-GoTo), [Open](/en/official/Reference/Core/Open)
- [ParamArray](/en/official/Reference/Core/ParamArray), [Print](/en/official/Reference/Core/Print), [Private](/en/official/Reference/Core/Private), [Property](/en/official/Reference/Core/Property), [Protected](/en/official/Reference/Core/Protected), [Public](/en/official/Reference/Core/Public), [Put](/en/official/Reference/Core/Put)
- [RaiseEvent](/en/official/Reference/Core/RaiseEvent), [ReDim](/en/official/Reference/Core/ReDim), [Reset](/en/official/Reference/Core/Reset), [Resume](/en/official/Reference/Core/Resume), [RmDir](/en/official/Reference/Core/RmDir), [RSet](/en/official/Reference/Core/RSet)
- [SavePicture](/en/official/Reference/Core/SavePicture), [SaveSetting](/en/official/Reference/Core/SaveSetting), [Seek](/en/official/Reference/Core/Seek), [Select-Case](/en/official/Reference/Core/Select-Case), [SendKeys](/en/official/Reference/Core/SendKeys), [Set](/en/official/Reference/Core/Set), [SetAttr](/en/official/Reference/Core/SetAttr), [Static](/en/official/Reference/Core/Static), [Sub](/en/official/Reference/Core/Sub), [Stop](/en/official/Reference/Core/Stop)
- [Time](/en/official/Reference/Core/Time), [Type](/en/official/Reference/Core/Type)
- [Unload](/en/official/Reference/Core/Unload), [Unlock](/en/official/Reference/Core/Unlock)
- [While-Wend](/en/official/Reference/Core/While-Wend), [Width](/en/official/Reference/Core/Width), [With](/en/official/Reference/Core/With), [Write](/en/official/Reference/Core/Write)

## /tB/Modules/``<ModuleName>``/``<Symbol>``

Within each VBA module, each procedure, property, or statement has its own stand-alone page, e.g. [**LenB**: /tB/Modules/Strings/Len](/en/official/Reference/VBA/Strings/Len). The `$`-suffixed and `B`/`W` variants are documented on the same page as the base symbol (so `LenB`, `Len$`, etc. all share the [`Len`](/en/official/Reference/VBA/Strings/Len) page).

- [Collection](/en/official/Reference/VBA/Collection)
- [Compilation](/en/official/Reference/VBA/Compilation)
- [Constants](/en/official/Reference/VBA/Constants)
- [Conversion](/en/official/Reference/VBA/Conversion)
- [DateTime](/en/official/Reference/VBA/DateTime)
- [ErrObject](/en/official/Reference/VBA/ErrObject)
- [TbExpressionService](/en/official/Reference/VBA/TbExpressionService)
- [FileSystem](/en/official/Reference/VBA/FileSystem)
- [Financial](/en/official/Reference/VBA/Financial)
- [Information](/en/official/Reference/VBA/Information)
- [Interaction](/en/official/Reference/VBA/Interaction)
- [Math](/en/official/Reference/VBA/Math)
- [Strings](/en/official/Reference/VBA/Strings)
- Internal [_HiddenModule](/en/official/Reference/VBA/HiddenModule)

## /tB/Packages/``<Package>``/...

Each package lives under `/tB/Packages/<Package>/`. The sub-structure depends on the package: modules, classes, enumerations, and sub-objects each have their own page.

### VBRUN -- /tB/Packages/VBRUN/``<Module>``/

- [AmbientProperties](/en/official/Reference/VBRUN/AmbientProperties)
- [AsyncProperty](/en/official/Reference/VBRUN/AsyncProperty)
- [Constants](/en/official/Reference/VBRUN/Constants)
- [ContainedControls](/en/official/Reference/VBRUN/ContainedControls)
- [DataMembers](/en/official/Reference/VBRUN/DataMembers)
- [DataObject](/en/official/Reference/VBRUN/DataObject)
- [ErrorCallstack](/en/official/Reference/VBRUN/ErrorCallstack)
- [ErrorContext](/en/official/Reference/VBRUN/ErrorContext)
- [ErrorStackFrame](/en/official/Reference/VBRUN/ErrorStackFrame)
- [Hyperlink](/en/official/Reference/VBRUN/Hyperlink)
- [ParentControls](/en/official/Reference/VBRUN/ParentControls)
- [PropertyBag](/en/official/Reference/VBRUN/PropertyBag)

### VB -- /tB/Packages/VB/``<Class>``/

- [App](/en/official/Reference/VB/App), [CheckBox](/en/official/Reference/VB/CheckBox), [CheckMark](/en/official/Reference/VB/CheckMark), [Clipboard](/en/official/Reference/VB/Clipboard), [ComboBox](/en/official/Reference/VB/ComboBox), [CommandButton](/en/official/Reference/VB/CommandButton)
- [Data](/en/official/Reference/VB/Data), [DirListBox](/en/official/Reference/VB/DirListBox), [DriveListBox](/en/official/Reference/VB/DriveListBox)
- [FileListBox](/en/official/Reference/VB/FileListBox), [Form](/en/official/Reference/VB/Form), [Frame](/en/official/Reference/VB/Frame), [Global](/en/official/Reference/VB/Global)
- [HScrollBar](/en/official/Reference/VB/HScrollBar), [Image](/en/official/Reference/VB/Image)
- [Label](/en/official/Reference/VB/Label), [Line](/en/official/Reference/VB/Line), [ListBox](/en/official/Reference/VB/ListBox)
- [MDIForm](/en/official/Reference/VB/MDIForm), [Menu](/en/official/Reference/VB/Menu), [MultiFrame](/en/official/Reference/VB/MultiFrame)
- [OLE](/en/official/Reference/VB/OLE), [OptionButton](/en/official/Reference/VB/OptionButton)
- [PictureBox](/en/official/Reference/VB/PictureBox), [Printer](/en/official/Reference/VB/Printer), [Printers](/en/official/Reference/VB/Printers), [PropertyPage](/en/official/Reference/VB/PropertyPage)
- [QRCode](/en/official/Reference/VB/QRCode), [Report](/en/official/Reference/VB/Report)
- [Screen](/en/official/Reference/VB/Screen), [Shape](/en/official/Reference/VB/Shape)
- [TextBox](/en/official/Reference/VB/TextBox), [Timer](/en/official/Reference/VB/Timer)
- [UserControl](/en/official/Reference/VB/UserControl), [VScrollBar](/en/official/Reference/VB/VScrollBar)

### WebView2 -- /tB/Packages/WebView2/...

- [WebView2](/en/official/Reference/WebView2/WebView2) (control class, with [EnvironmentOptions](/en/official/Reference/WebView2/WebView2/EnvironmentOptions) sub-page)
- [WebView2Header](/en/official/Reference/WebView2/WebView2Header), [WebView2HeadersCollection](/en/official/Reference/WebView2/WebView2HeadersCollection), [WebView2Request](/en/official/Reference/WebView2/WebView2Request), [WebView2RequestHeaders](/en/official/Reference/WebView2/WebView2RequestHeaders), [WebView2Response](/en/official/Reference/WebView2/WebView2Response), [WebView2ResponseHeaders](/en/official/Reference/WebView2/WebView2ResponseHeaders)
- Enumerations: [wv2DefaultDownloadCornerAlign](/en/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign), [wv2ErrorStatus](/en/official/Reference/WebView2/Enumerations/wv2ErrorStatus), [wv2HostResourceAccessKind](/en/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind), [wv2KeyEventKind](/en/official/Reference/WebView2/Enumerations/wv2KeyEventKind), [wv2PermissionKind](/en/official/Reference/WebView2/Enumerations/wv2PermissionKind), [wv2PermissionState](/en/official/Reference/WebView2/Enumerations/wv2PermissionState), [wv2PrintOrientation](/en/official/Reference/WebView2/Enumerations/wv2PrintOrientation), [wv2ProcessFailedKind](/en/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind), [wv2ScriptDialogKind](/en/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind), [wv2WebResourceContext](/en/official/Reference/WebView2/Enumerations/wv2WebResourceContext)
- Types: [COREWEBVIEW2_PHYSICAL_KEY_STATUS](/en/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS)

### Assert -- /tB/Packages/Assert/``<Module>``

- [Exact](/en/official/Reference/Assert/Exact), [Strict](/en/official/Reference/Assert/Strict), [Permissive](/en/official/Reference/Assert/Permissive)

### CustomControls -- /tB/Packages/CustomControls/...

- Controls: [WaynesButton](/en/official/Reference/CustomControls/WaynesButton) (with [WaynesButtonState](/en/official/Reference/CustomControls/WaynesButton/WaynesButtonState)), [WaynesForm](/en/official/Reference/CustomControls/WaynesForm) (with [WindowsFormOptions](/en/official/Reference/CustomControls/WaynesForm/WindowsFormOptions)), [WaynesFrame](/en/official/Reference/CustomControls/WaynesFrame), [WaynesGrid](/en/official/Reference/CustomControls/WaynesGrid) (with [CellRenderingOptions](/en/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions), [Column](/en/official/Reference/CustomControls/WaynesGrid/Column)), [WaynesLabel](/en/official/Reference/CustomControls/WaynesLabel), [WaynesSlider](/en/official/Reference/CustomControls/WaynesSlider) (with [WaynesSliderState](/en/official/Reference/CustomControls/WaynesSlider/WaynesSliderState)), [WaynesTextBox](/en/official/Reference/CustomControls/WaynesTextBox) (with [WaynesTextBoxState](/en/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState)), [WaynesTimer](/en/official/Reference/CustomControls/WaynesTimer)
- Styles: [Anchors](/en/official/Reference/CustomControls/Styles/Anchors), [Borders](/en/official/Reference/CustomControls/Styles/Borders), [Corners](/en/official/Reference/CustomControls/Styles/Corners), [Fill](/en/official/Reference/CustomControls/Styles/Fill), [Line](/en/official/Reference/CustomControls/Styles/Line), [Padding](/en/official/Reference/CustomControls/Styles/Padding), [TextRendering](/en/official/Reference/CustomControls/Styles/TextRendering)
- Framework: [Canvas](/en/official/Reference/CustomControls/Framework/Canvas), [CustomControlContext](/en/official/Reference/CustomControls/Framework/CustomControlContext), [CustomControlsCollection](/en/official/Reference/CustomControls/Framework/CustomControlsCollection), [CustomControlTimer](/en/official/Reference/CustomControls/Framework/CustomControlTimer), [CustomFormContext](/en/official/Reference/CustomControls/Framework/CustomFormContext), [ICustomControl](/en/official/Reference/CustomControls/Framework/ICustomControl), [ICustomForm](/en/official/Reference/CustomControls/Framework/ICustomForm), [SerializeInfo](/en/official/Reference/CustomControls/Framework/SerializeInfo)
- Enumerations: [BorderStyle](/en/official/Reference/CustomControls/Enumerations/BorderStyle), [ColorRGBA](/en/official/Reference/CustomControls/Enumerations/ColorRGBA), [CornerShape](/en/official/Reference/CustomControls/Enumerations/CornerShape), [Customtate](/en/official/Reference/CustomControls/Enumerations/Customtate), [DockMode](/en/official/Reference/CustomControls/Enumerations/DockMode), [FillPattern](/en/official/Reference/CustomControls/Enumerations/FillPattern), [FontWeight](/en/official/Reference/CustomControls/Enumerations/FontWeight), [PixelCount](/en/official/Reference/CustomControls/Enumerations/PixelCount), [PointSize](/en/official/Reference/CustomControls/Enumerations/PointSize), [StartupPosition](/en/official/Reference/CustomControls/Enumerations/StartupPosition), [TextAlignment](/en/official/Reference/CustomControls/Enumerations/TextAlignment), [TextOverflowMode](/en/official/Reference/CustomControls/Enumerations/TextOverflowMode), [WindowState](/en/official/Reference/CustomControls/Enumerations/WindowState)

### CEF -- /tB/Packages/CEF/...

- [CefBrowser](/en/official/Reference/CEF/CefBrowser) (control class, with [EnvironmentOptions](/en/official/Reference/CEF/CefBrowser/EnvironmentOptions) sub-page)
- Enumerations: [CefLogSeverity](/en/official/Reference/CEF/Enumerations/CefLogSeverity), [cefPrintOrientation](/en/official/Reference/CEF/Enumerations/cefPrintOrientation)

### WinEventLogLib -- /tB/Packages/WinEventLogLib/``<Class>``

- [EventLog](/en/official/Reference/WinEventLogLib/EventLog), [EventLogHelperPublic](/en/official/Reference/WinEventLogLib/EventLogHelperPublic)

### WinNamedPipesLib -- /tB/Packages/WinNamedPipesLib/``<Class>``

- [NamedPipeClientConnection](/en/official/Reference/WinNamedPipesLib/NamedPipeClientConnection), [NamedPipeClientManager](/en/official/Reference/WinNamedPipesLib/NamedPipeClientManager), [NamedPipeServer](/en/official/Reference/WinNamedPipesLib/NamedPipeServer), [NamedPipeServerConnection](/en/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)

### WinServicesLib -- /tB/Packages/WinServicesLib/...

- [ITbService](/en/official/Reference/WinServicesLib/ITbService), [ServiceCreator](/en/official/Reference/WinServicesLib/ServiceCreator), [ServiceManager](/en/official/Reference/WinServicesLib/ServiceManager), [Services](/en/official/Reference/WinServicesLib/Services), [ServiceState](/en/official/Reference/WinServicesLib/ServiceState)
- Enumerations: [ServiceControlCodeConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants), [ServiceStartConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants), [ServiceStatusConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants), [ServiceTypeConstants](/en/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)

### tbIDE -- /tB/Packages/tbIDE/``<Class>``

- [AddIn](/en/official/Reference/tbIDE/AddIn), [AddinTimer](/en/official/Reference/tbIDE/AddinTimer), [Button](/en/official/Reference/tbIDE/Button), [CodeEditor](/en/official/Reference/tbIDE/CodeEditor), [DebugConsole](/en/official/Reference/tbIDE/DebugConsole), [Editor](/en/official/Reference/tbIDE/Editor), [Editors](/en/official/Reference/tbIDE/Editors)
- [File](/en/official/Reference/tbIDE/File), [FileSystem](/en/official/Reference/tbIDE/FileSystem), [FileSystemItem](/en/official/Reference/tbIDE/FileSystemItem), [Folder](/en/official/Reference/tbIDE/Folder)
- [Host](/en/official/Reference/tbIDE/Host), [HtmlElement](/en/official/Reference/tbIDE/HtmlElement), [HtmlElementProperties](/en/official/Reference/tbIDE/HtmlElementProperties), [HtmlElementProperty](/en/official/Reference/tbIDE/HtmlElementProperty), [HtmlElements](/en/official/Reference/tbIDE/HtmlElements), [HtmlEventProperties](/en/official/Reference/tbIDE/HtmlEventProperties), [HtmlEventProperty](/en/official/Reference/tbIDE/HtmlEventProperty)
- [KeyboardShortcuts](/en/official/Reference/tbIDE/KeyboardShortcuts), [Project](/en/official/Reference/tbIDE/Project), [Themes](/en/official/Reference/tbIDE/Themes), [Toolbar](/en/official/Reference/tbIDE/Toolbar), [Toolbars](/en/official/Reference/tbIDE/Toolbars), [ToolWindow](/en/official/Reference/tbIDE/ToolWindow), [ToolWindows](/en/official/Reference/tbIDE/ToolWindows)

### WinNativeCommonCtls -- /tB/Packages/WinNativeCommonCtls/...

- Controls: [DTPicker](/en/official/Reference/WinNativeCommonCtls/DTPicker), [ImageList](/en/official/Reference/WinNativeCommonCtls/ImageList), [ListView](/en/official/Reference/WinNativeCommonCtls/ListView), [MonthView](/en/official/Reference/WinNativeCommonCtls/MonthView), [ProgressBar](/en/official/Reference/WinNativeCommonCtls/ProgressBar), [Slider](/en/official/Reference/WinNativeCommonCtls/Slider), [TreeView](/en/official/Reference/WinNativeCommonCtls/TreeView), [UpDown](/en/official/Reference/WinNativeCommonCtls/UpDown)
- Sub-objects: [ListImages](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImages), [ListImage](/en/official/Reference/WinNativeCommonCtls/ImageList/ListImage), [ListItems](/en/official/Reference/WinNativeCommonCtls/ListView/ListItems), [ListItem](/en/official/Reference/WinNativeCommonCtls/ListView/ListItem), [ColumnHeaders](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders), [ColumnHeader](/en/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader), [Nodes](/en/official/Reference/WinNativeCommonCtls/TreeView/Nodes), [Node](/en/official/Reference/WinNativeCommonCtls/TreeView/Node)
- Enumerations: [DTPickerFormatConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants), [ImlDrawConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants), [OrientationConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants), [TreeBorderStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants), [TreeLabelEditConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants), [TreeLineStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants), [TreeRelationshipConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants), [TreeSortOrderConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants), [TreeSortTypeConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants), [TreeStyleConstants](/en/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants)

## /tB/Core/Attributes#``<attribute>``

::: info

All non-alphabetic characters, as well as parameters, are removed from the links. All attribute names are in lowercase in the links. E.g. `ArrayBoundsChecks(Bool)` is referenced as `/tB/Core/Attributes#arrayboundschecks`.
:::

- [AppObject](/en/official/Reference/Attributes#appobject), [ArrayBoundsChecks](/en/official/Reference/Attributes#arrayboundschecks)
- [BindOnlyIfNoArguments](/en/official/Reference/Attributes#bindonlyifnoarguments), [BindOnlyIfStringSuffix](/en/official/Reference/Attributes#bindonlyifstringsuffix)
- [ClassId](/en/official/Reference/Attributes#classid), [ClassInterface](/en/official/Reference/Attributes#classinterface), [CoClassCustomConstructor](/en/official/Reference/Attributes#coclasscustomconstructor), [CoClassId](/en/official/Reference/Attributes#coclassid), [COMControl](/en/official/Reference/Attributes#comcontrol), [COMCreatable](/en/official/Reference/Attributes#comcreatable), [COMExtensible](/en/official/Reference/Attributes#comextensible), [ComImport](/en/official/Reference/Attributes#comimport), [CompileIf](/en/official/Reference/Attributes#compileif), [CompilerOptions](/en/official/Reference/Attributes#compileroptions), [ConstantFoldable](/en/official/Reference/Attributes#constantfoldable), [ConstantFoldableNumericsOnly](/en/official/Reference/Attributes#constantfoldablenumericsonly)
- [Debuggable](/en/official/Reference/Attributes#debuggable), [DebugOnly](/en/official/Reference/Attributes#debugonly), [DefaultMember](/en/official/Reference/Attributes#defaultmember), [Description](/en/official/Reference/Attributes#description), [DispId](/en/official/Reference/Attributes#dispid), [DispInterface](/en/official/Reference/Attributes#dispinterface), [DllExport](/en/official/Reference/Attributes#dllexport), [DLLStackCheck](/en/official/Reference/Attributes#dllstackcheck), [DualInterface](/en/official/Reference/Attributes#dualinterface)
- [EnforceErrors](/en/official/Reference/Attributes#enforceerrors), [EnforceWarnings](/en/official/Reference/Attributes#enforcewarnings), [EnumId](/en/official/Reference/Attributes#enumid), [EventInterfaceId](/en/official/Reference/Attributes#eventinterfaceid), [EventsUseDispInterface](/en/official/Reference/Attributes#eventsusedispinterface)
- [Flags](/en/official/Reference/Attributes#flags), [FloatingPointErrorChecks](/en/official/Reference/Attributes#floatingpointerrorchecks), [FormDesignerId](/en/official/Reference/Attributes#formdesignerid), [Hidden](/en/official/Reference/Attributes#hidden)
- [IdeButton](/en/official/Reference/Attributes#idebutton), [IgnoreWarnings](/en/official/Reference/Attributes#ignorewarnings), [IntegerOverflowChecks](/en/official/Reference/Attributes#integeroverflowchecks), [InterfaceId](/en/official/Reference/Attributes#interfaceid)
- [MustBeQualified](/en/official/Reference/Attributes#mustbequalified)
- [OleAutomation](/en/official/Reference/Attributes#oleautomation)
- [PackingAlignment](/en/official/Reference/Attributes#packingalignment), [PopulateFrom](/en/official/Reference/Attributes#populatefrom), [PredeclaredID](/en/official/Reference/Attributes#predeclaredid), [PreserveSig](/en/official/Reference/Attributes#preservesig)
- [Restricted](/en/official/Reference/Attributes#restricted), [RunAfterBuild](/en/official/Reference/Attributes#runafterbuild)
- [Serialize](/en/official/Reference/Attributes#serialize), [SetDllDirectory](/en/official/Reference/Attributes#setdlldirectory), [SimplerByVals](/en/official/Reference/Attributes#simplerbyvals)
- [TestCase](/en/official/Reference/Attributes#testcase), [TestFixture](/en/official/Reference/Attributes#testfixture), [TypeHint](/en/official/Reference/Attributes#typehint)
- [Unimplemented](/en/official/Reference/Attributes#unimplemented), [UseGetLastError](/en/official/Reference/Attributes#usegetlasterror), [UserDefinedTypeIsAnAlias](/en/official/Reference/Attributes#userdefinedtypeisanalias)
- [WindowsControl](/en/official/Reference/Attributes#windowscontrol)

> AI生成

> AI生成