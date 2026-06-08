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
title: "永久链接"
parent: Documentation Development
nav_order: 1
permalink: /Documentation/Development/Permanent-Links
---

# 永久链接

The stable, or machine-accessible, part of the documentation tree is rooted on the `/tB/` prefix. URLs with this prefix --- and the internal links that target them, e.g. [`docs.twinbasic.com/tB/Modules/Math/Round`](/official/Reference/VBA/Math/Round) --- are guaranteed not to move. This is the contract the IDE help system, `[Documentation(...)]` attribute references, and external links rely on; anything documented below should be treated as essential.

## /tB/Core/``<Statement>``

- [AppActivate](/official/Reference/Core/AppActivate)
- [Beep](/official/Reference/Core/Beep)
- [Call](/official/Reference/Core/Call), [ChDir](/official/Reference/Core/ChDir), [ChDrive](/official/Reference/Core/ChDrive), [Class](/official/Reference/Core/Class), [Close](/official/Reference/Core/Close), [CoClass](/official/Reference/Core/CoClass), [Const](/official/Reference/Core/Const), [Continue](/official/Reference/Core/Continue)
- [Date](/official/Reference/Core/Date), [Declare](/official/Reference/Core/Declare), [Deftype](/official/Reference/Core/Deftype), [DeleteSetting](/official/Reference/Core/DeleteSetting), [Dim](/official/Reference/Core/Dim), [Do-Loop](/official/Reference/Core/Do-Loop)
- [End](/official/Reference/Core/End), [Enum](/official/Reference/Core/Enum), [Erase](/official/Reference/Core/Erase), [Error](/official/Reference/Core/Error), [Event](/official/Reference/Core/Event), [Exit](/official/Reference/Core/Exit)
- [FileCopy](/official/Reference/Core/FileCopy), [For-Next](/official/Reference/Core/For-Next), [For-Each-Next](/official/Reference/Core/For-Each-Next), [Function](/official/Reference/Core/Function)
- [Get](/official/Reference/Core/Get), [GetSetting](/official/Reference/Core/GetSetting), [GoSub-Return](/official/Reference/Core/GoSub-Return), [GoTo](/official/Reference/Core/GoTo)
- [If-Then-Else](/official/Reference/Core/If-Then-Else), [Implements](/official/Reference/Core/Implements), [Input](/official/Reference/Core/Input), [Interface](/official/Reference/Core/Interface), [Is](/official/Reference/Core/Is)
- [Kill](/official/Reference/Core/Kill)
- [LBound](/official/Reference/Core/LBound), [Let](/official/Reference/Core/Let), [Line-Input](/official/Reference/Core/Line-Input), [Load](/official/Reference/Core/Load), [Lock](/official/Reference/Core/Lock), [LSet](/official/Reference/Core/LSet)
- [Mid-equals](/official/Reference/Core/Mid-equals) for `Mid(...) = ...` , [MidB-equals](/official/Reference/Core/MidB-equals) for `MidB(...) = ...`, [MkDir](/official/Reference/Core/MkDir), [Module](/official/Reference/Core/Module)
- [Name](/official/Reference/Core/Name), [New](/official/Reference/Core/New)
- [Option](/official/Reference/Core/Option), [On-Error](/official/Reference/Core/On-Error), [On-GoSub](/official/Reference/Core/On-GoSub), [On-GoTo](/official/Reference/Core/On-GoTo), [Open](/official/Reference/Core/Open)
- [ParamArray](/official/Reference/Core/ParamArray), [Print](/official/Reference/Core/Print), [Private](/official/Reference/Core/Private), [Property](/official/Reference/Core/Property), [Protected](/official/Reference/Core/Protected), [Public](/official/Reference/Core/Public), [Put](/official/Reference/Core/Put)
- [RaiseEvent](/official/Reference/Core/RaiseEvent), [ReDim](/official/Reference/Core/ReDim), [Reset](/official/Reference/Core/Reset), [Resume](/official/Reference/Core/Resume), [RmDir](/official/Reference/Core/RmDir), [RSet](/official/Reference/Core/RSet)
- [SavePicture](/official/Reference/Core/SavePicture), [SaveSetting](/official/Reference/Core/SaveSetting), [Seek](/official/Reference/Core/Seek), [Select-Case](/official/Reference/Core/Select-Case), [SendKeys](/official/Reference/Core/SendKeys), [Set](/official/Reference/Core/Set), [SetAttr](/official/Reference/Core/SetAttr), [Static](/official/Reference/Core/Static), [Sub](/official/Reference/Core/Sub), [Stop](/official/Reference/Core/Stop)
- [Time](/official/Reference/Core/Time), [Type](/official/Reference/Core/Type)
- [Unload](/official/Reference/Core/Unload), [Unlock](/official/Reference/Core/Unlock)
- [While-Wend](/official/Reference/Core/While-Wend), [Width](/official/Reference/Core/Width), [With](/official/Reference/Core/With), [Write](/official/Reference/Core/Write)

## /tB/Modules/``<ModuleName>``/``<Symbol>``

Within each VBA module, each procedure, property, or statement has its own stand-alone page, e.g. [**LenB**: /tB/Modules/Strings/Len](/official/Reference/VBA/Strings/Len). The `$`-suffixed and `B`/`W` variants are documented on the same page as the base symbol (so `LenB`, `Len$`, etc. all share the [`Len`](/official/Reference/VBA/Strings/Len) page).

- [Collection](/official/Reference/VBA/Collection/)
- [Compilation](/official/Reference/VBA/Compilation/)
- [Constants](/official/Reference/VBA/Constants/)
- [Conversion](/official/Reference/VBA/Conversion/)
- [DateTime](/official/Reference/VBA/DateTime/)
- [ErrObject](/official/Reference/VBA/ErrObject/)
- [TbExpressionService](/official/Reference/VBA/TbExpressionService/)
- [FileSystem](/official/Reference/VBA/FileSystem/)
- [Financial](/official/Reference/VBA/Financial/)
- [Information](/official/Reference/VBA/Information/)
- [Interaction](/official/Reference/VBA/Interaction/)
- [Math](/official/Reference/VBA/Math/)
- [Strings](/official/Reference/VBA/Strings/)
- Internal [_HiddenModule](/official/Reference/VBA/HiddenModule/)

## /tB/Packages/``<Package>``/...

Each package lives under `/tB/Packages/<Package>/`. The sub-structure depends on the package: modules, classes, enumerations, and sub-objects each have their own page.

### VBRUN -- /tB/Packages/VBRUN/`<Module>`/

- [AmbientProperties](/official/Reference/VBRUN/AmbientProperties/)
- [AsyncProperty](/official/Reference/VBRUN/AsyncProperty/)
- [Constants](/official/Reference/VBRUN/Constants/)
- [ContainedControls](/official/Reference/VBRUN/ContainedControls/)
- [DataMembers](/official/Reference/VBRUN/DataMembers/)
- [DataObject](/official/Reference/VBRUN/DataObject/)
- [ErrorCallstack](/official/Reference/VBRUN/ErrorCallstack/)
- [ErrorContext](/official/Reference/VBRUN/ErrorContext/)
- [ErrorStackFrame](/official/Reference/VBRUN/ErrorStackFrame/)
- [Hyperlink](/official/Reference/VBRUN/Hyperlink/)
- [ParentControls](/official/Reference/VBRUN/ParentControls/)
- [PropertyBag](/official/Reference/VBRUN/PropertyBag/)

### VB -- /tB/Packages/VB/`<Class>`/

- [App](/official/Reference/VB/App/), [CheckBox](/official/Reference/VB/CheckBox/), [CheckMark](/official/Reference/VB/CheckMark/), [Clipboard](/official/Reference/VB/Clipboard/), [ComboBox](/official/Reference/VB/ComboBox/), [CommandButton](/official/Reference/VB/CommandButton/)
- [Data](/official/Reference/VB/Data/), [DirListBox](/official/Reference/VB/DirListBox/), [DriveListBox](/official/Reference/VB/DriveListBox/)
- [FileListBox](/official/Reference/VB/FileListBox/), [Form](/official/Reference/VB/Form/), [Frame](/official/Reference/VB/Frame/), [Global](/official/Reference/VB/Global/)
- [HScrollBar](/official/Reference/VB/HScrollBar/), [Image](/official/Reference/VB/Image/)
- [Label](/official/Reference/VB/Label/), [Line](/official/Reference/VB/Line/), [ListBox](/official/Reference/VB/ListBox/)
- [MDIForm](/official/Reference/VB/MDIForm/), [Menu](/official/Reference/VB/Menu/), [MultiFrame](/official/Reference/VB/MultiFrame/)
- [OLE](/official/Reference/VB/OLE/), [OptionButton](/official/Reference/VB/OptionButton/)
- [PictureBox](/official/Reference/VB/PictureBox/), [Printer](/official/Reference/VB/Printer/), [Printers](/official/Reference/VB/Printers/), [PropertyPage](/official/Reference/VB/PropertyPage/)
- [QRCode](/official/Reference/VB/QRCode/), [Report](/official/Reference/VB/Report/)
- [Screen](/official/Reference/VB/Screen/), [Shape](/official/Reference/VB/Shape/)
- [TextBox](/official/Reference/VB/TextBox/), [Timer](/official/Reference/VB/Timer/)
- [UserControl](/official/Reference/VB/UserControl/), [VScrollBar](/official/Reference/VB/VScrollBar/)

### WebView2 -- /tB/Packages/WebView2/...

- [WebView2](/official/Reference/WebView2/WebView2/) (control class, with [EnvironmentOptions](/official/Reference/WebView2/WebView2/EnvironmentOptions) sub-page)
- [WebView2Header](/official/Reference/WebView2/WebView2Header), [WebView2HeadersCollection](/official/Reference/WebView2/WebView2HeadersCollection), [WebView2Request](/official/Reference/WebView2/WebView2Request), [WebView2RequestHeaders](/official/Reference/WebView2/WebView2RequestHeaders), [WebView2Response](/official/Reference/WebView2/WebView2Response), [WebView2ResponseHeaders](/official/Reference/WebView2/WebView2ResponseHeaders)
- 枚举：[wv2DefaultDownloadCornerAlign](/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign), [wv2ErrorStatus](/official/Reference/WebView2/Enumerations/wv2ErrorStatus), [wv2HostResourceAccessKind](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind), [wv2KeyEventKind](/official/Reference/WebView2/Enumerations/wv2KeyEventKind), [wv2PermissionKind](/official/Reference/WebView2/Enumerations/wv2PermissionKind), [wv2PermissionState](/official/Reference/WebView2/Enumerations/wv2PermissionState), [wv2PrintOrientation](/official/Reference/WebView2/Enumerations/wv2PrintOrientation), [wv2ProcessFailedKind](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind), [wv2ScriptDialogKind](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind), [wv2WebResourceContext](/official/Reference/WebView2/Enumerations/wv2WebResourceContext)
- 类型：[COREWEBVIEW2_PHYSICAL_KEY_STATUS](/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS)

### Assert -- /tB/Packages/Assert/`<Module>`

- [Exact](/official/Reference/Assert/Exact), [Strict](/official/Reference/Assert/Strict), [Permissive](/official/Reference/Assert/Permissive)

### CustomControls -- /tB/Packages/CustomControls/...

- 控件：[WaynesButton](/official/Reference/CustomControls/WaynesButton/) (with [WaynesButtonState](/official/Reference/CustomControls/WaynesButton/WaynesButtonState)), [WaynesForm](/official/Reference/CustomControls/WaynesForm/) (with [WindowsFormOptions](/official/Reference/CustomControls/WaynesForm/WindowsFormOptions)), [WaynesFrame](/official/Reference/CustomControls/WaynesFrame), [WaynesGrid](/official/Reference/CustomControls/WaynesGrid/) (with [CellRenderingOptions](/official/Reference/CustomControls/WaynesGrid/CellRenderingOptions), [Column](/official/Reference/CustomControls/WaynesGrid/Column)), [WaynesLabel](/official/Reference/CustomControls/WaynesLabel), [WaynesSlider](/official/Reference/CustomControls/WaynesSlider/) (with [WaynesSliderState](/official/Reference/CustomControls/WaynesSlider/WaynesSliderState)), [WaynesTextBox](/official/Reference/CustomControls/WaynesTextBox/) (with [WaynesTextBoxState](/official/Reference/CustomControls/WaynesTextBox/WaynesTextBoxState)), [WaynesTimer](/official/Reference/CustomControls/WaynesTimer)
- 样式：[Anchors](/official/Reference/CustomControls/Styles/Anchors), [Borders](/official/Reference/CustomControls/Styles/Borders), [Corners](/official/Reference/CustomControls/Styles/Corners), [Fill](/official/Reference/CustomControls/Styles/Fill), [Line](/official/Reference/CustomControls/Styles/Line), [Padding](/official/Reference/CustomControls/Styles/Padding), [TextRendering](/official/Reference/CustomControls/Styles/TextRendering)
- 框架：[Canvas](/official/Reference/CustomControls/Framework/Canvas), [CustomControlContext](/official/Reference/CustomControls/Framework/CustomControlContext), [CustomControlsCollection](/official/Reference/CustomControls/Framework/CustomControlsCollection), [CustomControlTimer](/official/Reference/CustomControls/Framework/CustomControlTimer), [CustomFormContext](/official/Reference/CustomControls/Framework/CustomFormContext), [ICustomControl](/official/Reference/CustomControls/Framework/ICustomControl), [ICustomForm](/official/Reference/CustomControls/Framework/ICustomForm), [SerializeInfo](/official/Reference/CustomControls/Framework/SerializeInfo)
- 枚举：[BorderStyle](/official/Reference/CustomControls/Enumerations/BorderStyle), [ColorRGBA](/official/Reference/CustomControls/Enumerations/ColorRGBA), [CornerShape](/official/Reference/CustomControls/Enumerations/CornerShape), [Customtate](/official/Reference/CustomControls/Enumerations/Customtate), [DockMode](/official/Reference/CustomControls/Enumerations/DockMode), [FillPattern](/official/Reference/CustomControls/Enumerations/FillPattern), [FontWeight](/official/Reference/CustomControls/Enumerations/FontWeight), [PixelCount](/official/Reference/CustomControls/Enumerations/PixelCount), [PointSize](/official/Reference/CustomControls/Enumerations/PointSize), [StartupPosition](/official/Reference/CustomControls/Enumerations/StartupPosition), [TextAlignment](/official/Reference/CustomControls/Enumerations/TextAlignment), [TextOverflowMode](/official/Reference/CustomControls/Enumerations/TextOverflowMode), [WindowState](/official/Reference/CustomControls/Enumerations/WindowState)

### CEF -- /tB/Packages/CEF/...

- [CefBrowser](/official/Reference/CEF/CefBrowser/) (control class, with [EnvironmentOptions](/official/Reference/CEF/CefBrowser/EnvironmentOptions) sub-page)
- 枚举：[CefLogSeverity](/official/Reference/CEF/Enumerations/CefLogSeverity), [cefPrintOrientation](/official/Reference/CEF/Enumerations/cefPrintOrientation)

### WinEventLogLib -- /tB/Packages/WinEventLogLib/`<Class>`

- [EventLog](/official/Reference/WinEventLogLib/EventLog), [EventLogHelperPublic](/official/Reference/WinEventLogLib/EventLogHelperPublic)

### WinNamedPipesLib -- /tB/Packages/WinNamedPipesLib/`<Class>`

- [NamedPipeClientConnection](/official/Reference/WinNamedPipesLib/NamedPipeClientConnection), [NamedPipeClientManager](/official/Reference/WinNamedPipesLib/NamedPipeClientManager), [NamedPipeServer](/official/Reference/WinNamedPipesLib/NamedPipeServer), [NamedPipeServerConnection](/official/Reference/WinNamedPipesLib/NamedPipeServerConnection)

### WinServicesLib -- /tB/Packages/WinServicesLib/...

- [ITbService](/official/Reference/WinServicesLib/ITbService), [ServiceCreator](/official/Reference/WinServicesLib/ServiceCreator), [ServiceManager](/official/Reference/WinServicesLib/ServiceManager), [Services](/official/Reference/WinServicesLib/Services), [ServiceState](/official/Reference/WinServicesLib/ServiceState)
- 枚举：[ServiceControlCodeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants), [ServiceStartConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants), [ServiceStatusConstants](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants), [ServiceTypeConstants](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants)

### tbIDE -- /tB/Packages/tbIDE/`<Class>`

- [AddIn](/official/Reference/tbIDE/AddIn), [AddinTimer](/official/Reference/tbIDE/AddinTimer), [Button](/official/Reference/tbIDE/Button), [CodeEditor](/official/Reference/tbIDE/CodeEditor), [DebugConsole](/official/Reference/tbIDE/DebugConsole), [Editor](/official/Reference/tbIDE/Editor), [Editors](/official/Reference/tbIDE/Editors)
- [File](/official/Reference/tbIDE/File), [FileSystem](/official/Reference/tbIDE/FileSystem), [FileSystemItem](/official/Reference/tbIDE/FileSystemItem), [Folder](/official/Reference/tbIDE/Folder)
- [Host](/official/Reference/tbIDE/Host), [HtmlElement](/official/Reference/tbIDE/HtmlElement), [HtmlElementProperties](/official/Reference/tbIDE/HtmlElementProperties), [HtmlElementProperty](/official/Reference/tbIDE/HtmlElementProperty), [HtmlElements](/official/Reference/tbIDE/HtmlElements), [HtmlEventProperties](/official/Reference/tbIDE/HtmlEventProperties), [HtmlEventProperty](/official/Reference/tbIDE/HtmlEventProperty)
- [KeyboardShortcuts](/official/Reference/tbIDE/KeyboardShortcuts), [Project](/official/Reference/tbIDE/Project), [Themes](/official/Reference/tbIDE/Themes), [Toolbar](/official/Reference/tbIDE/Toolbar), [Toolbars](/official/Reference/tbIDE/Toolbars), [ToolWindow](/official/Reference/tbIDE/ToolWindow), [ToolWindows](/official/Reference/tbIDE/ToolWindows)

### WinNativeCommonCtls -- /tB/Packages/WinNativeCommonCtls/...

- 控件：[DTPicker](/official/Reference/WinNativeCommonCtls/DTPicker), [ImageList](/official/Reference/WinNativeCommonCtls/ImageList/), [ListView](/official/Reference/WinNativeCommonCtls/ListView/), [MonthView](/official/Reference/WinNativeCommonCtls/MonthView), [ProgressBar](/official/Reference/WinNativeCommonCtls/ProgressBar), [Slider](/official/Reference/WinNativeCommonCtls/Slider), [TreeView](/official/Reference/WinNativeCommonCtls/TreeView/), [UpDown](/official/Reference/WinNativeCommonCtls/UpDown)
- 子对象：[ListImages](/official/Reference/WinNativeCommonCtls/ImageList/ListImages), [ListImage](/official/Reference/WinNativeCommonCtls/ImageList/ListImage), [ListItems](/official/Reference/WinNativeCommonCtls/ListView/ListItems), [ListItem](/official/Reference/WinNativeCommonCtls/ListView/ListItem), [ColumnHeaders](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeaders), [ColumnHeader](/official/Reference/WinNativeCommonCtls/ListView/ColumnHeader), [Nodes](/official/Reference/WinNativeCommonCtls/TreeView/Nodes), [Node](/official/Reference/WinNativeCommonCtls/TreeView/Node)
- 枚举：[DTPickerFormatConstants](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants), [ImlDrawConstants](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants), [OrientationConstants](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants), [TreeBorderStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants), [TreeLabelEditConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants), [TreeLineStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants), [TreeRelationshipConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants), [TreeSortOrderConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants), [TreeSortTypeConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants), [TreeStyleConstants](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants)

## /tB/Core/Attributes#``<attribute>``

::: info

All non-alphabetic characters, as well as parameters, are removed from the links. All attribute names are in lowercase in the links. E.g. `ArrayBoundsChecks(Bool)` is referenced as `/tB/Core/Attributes#arrayboundschecks`.
:::

- [AppObject](/official/Reference/Attributes#appobject), [ArrayBoundsChecks](/official/Reference/Attributes#arrayboundschecks)
- [BindOnlyIfNoArguments](/official/Reference/Attributes#bindonlyifnoarguments), [BindOnlyIfStringSuffix](/official/Reference/Attributes#bindonlyifstringsuffix)
- [ClassId](/official/Reference/Attributes#classid), [ClassInterface](/official/Reference/Attributes#classinterface), [CoClassCustomConstructor](/official/Reference/Attributes#coclasscustomconstructor), [CoClassId](/official/Reference/Attributes#coclassid), [COMControl](/official/Reference/Attributes#comcontrol), [COMCreatable](/official/Reference/Attributes#comcreatable), [COMExtensible](/official/Reference/Attributes#comextensible), [ComImport](/official/Reference/Attributes#comimport), [CompileIf](/official/Reference/Attributes#compileif), [CompilerOptions](/official/Reference/Attributes#compileroptions), [ConstantFoldable](/official/Reference/Attributes#constantfoldable), [ConstantFoldableNumericsOnly](/official/Reference/Attributes#constantfoldablenumericsonly)
- [Debuggable](/official/Reference/Attributes#debuggable), [DebugOnly](/official/Reference/Attributes#debugonly), [DefaultMember](/official/Reference/Attributes#defaultmember), [Description](/official/Reference/Attributes#description), [DispId](/official/Reference/Attributes#dispid), [DispInterface](/official/Reference/Attributes#dispinterface), [DllExport](/official/Reference/Attributes#dllexport), [DLLStackCheck](/official/Reference/Attributes#dllstackcheck), [DualInterface](/official/Reference/Attributes#dualinterface)
- [EnforceErrors](/official/Reference/Attributes#enforceerrors), [EnforceWarnings](/official/Reference/Attributes#enforcewarnings), [EnumId](/official/Reference/Attributes#enumid), [EventInterfaceId](/official/Reference/Attributes#eventinterfaceid), [EventsUseDispInterface](/official/Reference/Attributes#eventsusedispinterface)
- [Flags](/official/Reference/Attributes#flags), [FloatingPointErrorChecks](/official/Reference/Attributes#floatingpointerrorchecks), [FormDesignerId](/official/Reference/Attributes#formdesignerid), [Hidden](/official/Reference/Attributes#hidden)
- [IdeButton](/official/Reference/Attributes#idebutton), [IgnoreWarnings](/official/Reference/Attributes#ignorewarnings), [IntegerOverflowChecks](/official/Reference/Attributes#integeroverflowchecks), [InterfaceId](/official/Reference/Attributes#interfaceid)
- [MustBeQualified](/official/Reference/Attributes#mustbequalified)
- [OleAutomation](/official/Reference/Attributes#oleautomation)
- [PackingAlignment](/official/Reference/Attributes#packingalignment), [PopulateFrom](/official/Reference/Attributes#populatefrom), [PredeclaredID](/official/Reference/Attributes#predeclaredid), [PreserveSig](/official/Reference/Attributes#preservesig)
- [Restricted](/official/Reference/Attributes#restricted), [RunAfterBuild](/official/Reference/Attributes#runafterbuild)
- [Serialize](/official/Reference/Attributes#serialize), [SetDllDirectory](/official/Reference/Attributes#setdlldirectory), [SimplerByVals](/official/Reference/Attributes#simplerbyvals)
- [TestCase](/official/Reference/Attributes#testcase), [TestFixture](/official/Reference/Attributes#testfixture), [TypeHint](/official/Reference/Attributes#typehint)
- [Unimplemented](/official/Reference/Attributes#unimplemented), [UseGetLastError](/official/Reference/Attributes#usegetlasterror), [UserDefinedTypeIsAnAlias](/official/Reference/Attributes#userdefinedtypeisanalias)
- [WindowsControl](/official/Reference/Attributes#windowscontrol)

> AI生成

> AI生成