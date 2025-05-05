
## Exported Functions and Variables
It's possible to export a function or variable from standard modules, including with CDecl, e.g.

```vba
[DllExport]
Public Const MyExportedSymbol As Long = &H00000001

[DllExport]
Public Function MyExportedFunction(ByVal arg As Long) As Long

[DllExport]
Public Function MyCDeclExport CDecl(ByVal arg As Long)
```

This is primary used to create Standard DLLs (see next section), but this functionality is also available in Standard EXE and other compiled project types.

# Project Configuration
## Built in support for making Standard DLLs
While it was possible to accomplish this via hacks previously, tB offers it as a built in project type. You can choose this project type at startup, then you simply need to mark functions with `[DllExport]` when you want them exported. The name will be used as-is, it will not be mangled. The `CDecl` calling convention is supported with the normal syntax, e.g. `Public Function foo CDecl(bar As Long) As Long`.\
Standard DLLs in twinBASIC can still specify a startup point; each export will then check if this code has run yet, and if not, run it.

## Built in support for making Console Applications
This project type allows making a true console project rather than a GUI project.  Helpfully, it will also add a default `Console` class for reading/writing console IO and provided debug console.

## Built in support for easily making services.
tB has a services package (WinServicesLib) that makes creating full featured true services a breeze. It simplifies use of MESSAGETABLE resources, multiple services per exe, named pipes for IPC, and more. See samples 21-22.

## Built in support for making Kernel-Mode Drivers.
Kernel mode drivers can only access a very limited subset of the API, and can't call usermode DLLs like a runtime. So it would typically require elaborate hacks and dramatically limit what you could do in prior BASIC products, if possible at all. And of course, there's no WOW64 layer for kernel mode, so tB is the first BASIC product to support making drivers for 64bit Windows. This is controlled by the 'Project: Native subsystem' option, as well as the following two features.

## Built in support for overriding entry point.
BASIC applications typically have a hidden entry point that is the first to run, before `Sub Main` or the startup form's `Form_Load`. This sets up features of the app like initializing COM. twinBASIC supports overriding this and setting one of your own procedures as the true entry point. This is mostly useful for kernel mode projects, which must have a specific kind of entry point and can't call the normal APIs in the default. But there are other reasons you might want to use this option, but be warned: Many things will break in a normal application if you don't do the initialization procedures yourself or understand precisely what you can't use. 

## Place API declares in the IAT
tB has the option to put all API declares in the import address table rather than call them at runtime via `LoadLibrary/GetProcAddress` like VBx (which puts TLB-declared APIs in the import table; tB replicates this too but further provides an option for in-project declares).

This has a small performance advantage in that it's loaded  and bound at startup rather than on the first call, but the primary use is for kernel mode, which cannot call `LoadLibrary` and other user mode APIs to use late binding.


## Register ActiveX builds to `HKEY_LOCAL_MACHINE` or `HKEY_CURRENT_USER` option.
While modern applications use `HKEY_CURRENT_USER`, for VBx compatibility components must be registered to `HKEY_LOCAL_MACHINE`. Note that this requires running as admin when registering.

## Registration at build time is optional
tB provides the Project: Register DLL after build option so you can disable automatic registration, if for example you wanted to move the file first.

# Misc Attributes
The following attributes are also available but haven't been described above:

* `[Description("text")]` attribute for APIs, UDTs , and Consts that are shown in popups when you hover over uses of them and in VBx object browser. Additionally, this attribute can be used for `Module` or `Class` to describe the module/class itself, and if a class represents a creatable control, it will often be used in component lists to describe the control, as it's exported as the `helpstring` attribute at the class level too.
* `[RunAfterBuild]` attribute-- you can specify a function that runs after your exe is built (there's `App.LastBuildPath` to know where it is if you're e.g. signing the exe).
* Per-class/module and Per-procedure `[IntegerOverflowChecks(False)]`, `[FloatingPointErrorChecks(False)]` and `[ArrayBoundsChecks(False)]` attributes to disable those checks on performance-critical routines while leaving them generally in place.
* Constant function folding. You can specify a `[ConstantFoldable]` attribute for functions where when called with non-variable input, will be computed at compile time, rather than runtime. For example, a function to converted string literals to ANSI. The result would never change, so the resulting ANSI string is stored, rather than recomputing every run.
* `[Unimplemented]` attribute for methods allows showing a compiler warning about it being unimplemented wherever it's called. You can upgrade it to error too.
* `[SetDllDirectory(True/False)]` attribute to allow an explicitly loaded DLL to load it's own dependencies from it's load path. Also has the effect of allowing searching the app path for the DLLs in the base app's declare statements. It can be used per-declare or within a module.
* `[EnumId("GUID")]` specifies a GUID to be associated with an enum in type libraries.
* `[TypeHint()]` attribute allows populating Intellisense with an enum for types other than `Long`.
* `[CompileIf(condition)]` method attribute for more advanced control over conditional compilation.
* `[DebugOnly]` for a Sub/Function will exclude calls to it from the build.
* `[DllStackCheck(False)]` attribute for DLL Declares giving minor codegen size reduction on 32-bit API calls.
* `[Debuggable(False)]` attribute turns of breakpoints and stepping for the method or module.
* `[PopulateFrom()]` to populate enums via JSON

Note that you can also use VBx attributes with the new syntax; `[PredeclaredId]`, `[Hidden]`, `[Restricted]` \etc.

# Standard Library Enhancements

## Unicode support
Native functions that take string arguments, such as `MsgBox` and FileSystem functions (e.g. `Open`, `Dir`, `Mkdir`, `Kill`, and `RmDir`) now support Unicode. Additionally, .twin files make this easy to use as the editor supports Unicode as well. So you can paste a Unicode string in the editor, see it appear correctly, then have the same string correctly displayed by tB functions and controls.

### Encoding options for file i/o

The `Open` statement supports Unicode through the use of a new `Encoding` keyword and variable, and allows you to specify a wide range of encoding options in addition to standard Unicode options.

Usage example:

```vba
Open "C:\MyFile.txt" For Input Encoding utf-8 As #1
```

The full list of encoding options currently defined (and don't worry, these will come up in Intellisense) is: `default_system_ansi`, `utf_7`, `utf_7_bom`, `utf_8`, `utf_8_bom`, `utf_16`, `utf_16_bom`, `us_ascii`, `koi8_u`, `koi8_r`, `big5`, `iso_8859_1_latin1`, `iso_8859_2_latin2`, `iso_8859_3_latin3`, `iso_8859_4_latin4`, `iso_8859_5_cyrillic`, `iso_8859_6_arabic`, `iso_8859_7_greek`, `iso_8859_8_hebrew`, `iso_8859_9_latin5_turkish`, `iso_8859_10_latin6_nordic`, `iso_8859_11_thai`, `iso_8859_13_latin8_baltic`, `iso_8859_14_latin8_celtic`, `iso_8859_15_latin9_euro`, `iso_8859_16_latin10_balkan`, `windows_1250_central_europe`, `windows_1251_cyrillic`, `windows_1252_western`, `windows_1253_greek`, `windows_1254_turkish`, `windows_1255_hebrew`, `windows_1256_arabic`, `windows_1257_baltic`, `windows_1258_vietnamese`, `ibm_850_western_europe`, `ibm_852_central_and_eastern_europe`, `ibm_855_cyrillic`, `ibm_856_hebrew`, `ibm_857_turkish`, `ibm_858_western_europe`, `ibm_860_portuguese`, `ibm_861_icelandic`, `ibm_862_hebrew`, `ibm_863_canadian`, `ibm_865_danish`, `ibm_866_cyrillic`, `ibm_869_greek`, `ibm_932_japanese`, and `ibm_949_korean`.

Others with a similar format should be accepted depending on system support.

## New Built-in functions:

In addition to the new datatype-related and component name functions already described, the standard builtin `VBA` library functions include:

* `IsArrayInitialized(variable)` - Determines if an array is initialized. Note: A `Variant` declared as empty array with `Array()` will return `True`. 
* `RGBA(r, g, b, a)` - Like the `RBG()` function, only including the alpha channel.
* `RBG_R(rgba)`, `RGB_B(rgba)`, `RBG_G(rgba)`, and `RGBA_A(rgba)` - Get the values for individual channels.
* `TranslateColor(ColorValue, Optional Palette)` - Translates an OLE color value to an RGB color.
* `ProcessorArchitecture()` - Returns either `vbArchWin32` or `vbArchWin64`, depending on application bitness.
* `CallByDispId(Object, DispId, CallType, Arguments)` - Similar to `CallByName()`, but uses the dispatch id instead of method name.
* `RaiseEventByName(Object, Name, Args)` - Invokes an event on class, using arguments specified as a single `Variant` containing an array.
* `RaiseEventByName2(Object, Name, Arg1, Arg2, ...)` - Invokes an event on class, using arguments specified as a ParamArray.
* `PictureToByteArray(StdPicture)` - Converts a picture to a byte array; Globals.LoadPicture supports loading from byte arrays.
* `CreateGUID()` - Returns a string with a freshly generated GUID.
* `AllocMem(size)` and `FreeMem` - allocate and free memory from the process heap.
* `Int3Breakpoint` - Inserts a true breakpoint helpful for attached external debuggers.
* `GetDeclaredTypeProgId(Of T)` / `GetDeclaredTypeClsid(Of T)` generics for getting strings of ProgID/CLSID.
* `GetDeclaredMinEnumValue(Of T)` / `GetDeclaredMaxEnumValue(Of T)` generics
* Some `Interlocked*` functions

### Built in runtime functions and redirects from msvbvm60.dll

tB has built in support for some of the most commonly used runtime functions, for compatibility. These all support both 32 and 64bit. Unless otherwise noted, all of these function in two ways: First, built in native versions that are always present (unless you remove the basic compiler packages), with the most common arrangements of arguments. These don't require a `Declare` statement. If you *do* provide a `Declare` version, tB will allow whatever arrangements of arguments you specify (e.g. `As Any` instead of `As LongPtr`), mapped to an alias if provided.

* Memory functions: `GetMem1`, `GetMem2`, `GetMem4`, `GetMem8`, `PutMem1`, `PutMem2`, `PutMem4`, `PutMem8` with new additions `GetMemPtr` and `PutMemPtr` pegged to the current pointer size.
* `vbaObjSet`, `vbaObjSetAddref`, `vbaCastObj`, and `vbaObjAddref` for manipulating object assignments through pointers.
* `vbaCopyBytes` and `vbaCopyBytesZero`
* `vbaAryMove` and `vbaRefVarAry` (currently only with a `Declare` statement).
* tB also has an instrinsic `VarPtr` but will still redirect calls via a declare statement, e.g. aliases used for arrays (though tB's `VarPtr` supports arrays natively).


# GUI components 

## Support for modern image formats
You no longer face an incredibly limited format selection for images in tB Forms and Controls; not only do the Bitmap and Icon formats support the full range of formats for those, you can additionally load PNG Images, JPEG Images, Metafiles (.emf/.wmf), and SVG Vector Graphics (.svg). 

### Improved `LoadPicture`
Additionally, `LoadPicture` can load all image types directly from a byte array, rather than requiring a file on disk. You can use this to load images from resource files or other sources. Note that if your projects references stdole2.tlb (most do), currently you must qualify it as `Global.LoadPicture` to get tB's custom binding that supports byte arrays.

## Transparency and Alpha Blending on Forms

## Form.TransparencyKey
This new property specifies a color that will be transparent to the window below it in the z-order (all windows, not just in your project). Setting this property will cause the specified color to be 100% transparent. A Shape control with a solid `FillStyle` is a helpful tool to color the areas of the form in the key color.

## Form.Opacity

This sets an alpha blending level for the entire form. Like transparency, this is to all windows immediately underneath it. Note that any areas covered by the `TransparencyKey` color will remain 100% transparent.

The following image shows a Form with a `TransparencyKey` of Red, using a Shape control to define the transparent area, while also specifying 75% `Opacity` for the entire form:

![image alt ><](https://github.com/twinbasic/documentation/assets/7834493/85f25aa2-abc8-4d42-8510-078f8ee4a324)

## Additional Form features

In addition to the above, forms have:

* `DpiScaleX`/`DpiScaleY` properties to retrieve the current values 
* `.MinWidth`, `.MinHeight`, `.MaxWidth`, and `.MaxHeight` properties so subclassing isn't needed for this 
* `Form.TopMost` property.
* Control anchoring: control x/y/cx/cy can made relative, so they're automatically moved/resized with the Form. For example if you put a TextBox in the bottom right, then check the Right and Bottom anchors (in addition to Top and Left), the bottom right will size with the form on resize. This saves a lot of boiler-plate sizing code. 
* Control docking: Controls can be fixed along one of the sides of the Form (or container), or made to fill the whole Form/container. Multiple controls can be combined and mixed/matched in docking positions.

For more information on Control Anchoring and Control Docking, see the Wiki entry [Control Anchoring and Docking ‐ Automatic size and position management](https://github.com/twinbasic/documentation/wiki/Control-Anchoring-and-Docking-%E2%80%90-Automatic-size-and-position-management).



## Unicode support
All tB-implemented controls support Unicode, both in the code editor and when displayed.

**Important:** If you subclass controls, note that this means you will receive the Unicode (W) version of window messages, e.g. ListViews will send `LVN_GETDISPINFOW (LVN_FIRST - 77)` instead of `LVN_GETDISPINFOA (LVN_FIRST - 50)`. 

## UserControl Enhancements

The UserControl object now provides the new Boolean property `PreKeyEvents` that enables corresponding new events `PreKeyDown` and `PreKeyUp`. These allow handling special keys like tab, arrows, etc without OS or COM hooks (for example, based on the `IOleInPlaceActiveObject` interface). These work with all child windows inside the UserControl, including ones created by `CreateWindowEx`. You can also access raw message data in the `PreKeyDown`/`PreKeyUp` event handlers with the new `PreKeyWParam`/`PreKeyLParam` and `PreKeyTargetHwnd` UserControl properties.


## Control Modernization

tB will eventually replace all built in controls that you're used to, for now the ones available are: CommandButton, TextBox, ComboBox, CheckBox, OptionButton, Label, Frame, PictureBox, Line, Shape, VScrollBar, HScrollBar, Timer, DriveListBox, DirListBox, FileListBox, Image, and Data from the basic set; then, ListView, TreeView, ProgressBar, DTPicker, MonthView, Slider, and UpDown from the Common Controls.

* Controls support x64: Every control can be compiled both as 32bit and 64bit without changing anything.\
* Controls are DPI aware: They will automatically size correctly when dpi awareness is enabled for your app.\
* Controls support Visual Styles per-control: Comctl6 styles can be applied, or not, on a control-by-control basis with the `.VisualStyles` property.

### Alternatives for unimplemented controls

The best option is Krool's VBCCR and VBFlexGrid projects. These are now available [from the Package Server](https://github.com/twinbasic/documentation/wiki/twinBASIC-Packages-Importing-a-package-from-TWINSERV) in x64-compatible form, and are also DPI aware and support Visual Styles. 

Additionally, the original OCX controls provided by Microsoft will work fine; however, they're mostly 32-bit only. The x64 version of `MSComCtl.ocx` doesn't come with Windows and isn't legally redistributable but if you have Office 64bit, it works in tB.

## Misc additional control properties

* `TextBox.NumbersOnly` property: Restricts input to 0-9 by setting the `ES_NUMBER` style on the underlying control.

* `TextBox.TextHint` property: Sets the light gray hint text in an empty TextBox (`EM_SETCUEBANNER`). 

* `PictureDpiScaling` property for forms, usercontrols and pictureboxes: PictureDpiScaling property allows you to turn off DPI scaling of images so that they display at 1:1 rather than allowing the OS to stretch them.  The idea being you may want to choose a different bitmap manually, rather than apply the somewhat limited OS-stretching.

* `Label.VerticalAlignment` property: Defaults to Top.

* `Label.LineSpacing` property (in twips, default is 0)

* `Label.Angle` property (in degrees, rotates the label text)

* `Label.BorderCustom` property (has suboptions to set size, padding and color of borders independently for each side). 

## New Controls

### QR Code Control
![image](https://github.com/user-attachments/assets/54ed49d8-b434-45e3-9e63-a1fe75cdf814)

Easily display custom QR codes with a native control.

### Multiframe Control
![image-15](https://github.com/user-attachments/assets/4ad9c774-b31d-47d3-9963-6d99ac4f37bb)

This control allows you to create a number of frames within it with their size specified as a percentage, such that as the control is resized the frames within expand proportionally. For details and a video demonstration, Mike Wolfe's twinBASIC Weekly Update [covered it when released](https://nolongerset.com/twinbasic-update-april-29-2025/#experimental-multi-frame-control).\
Combined with anchors and docking, this allows designing highly functional and complex layouts visually, without writing any code to handling resizing.


# Design Experience and Compiler Features

## Customize COM initialization 
You can specify the call used by the hidden entry point with the following options: `CoInitialize STA`, `CoInitializeEx MTA`, `OleInitialize STA`. If you don't know the difference, don't change it from the default.

## Customize symbol table parameters

You can adjust the following parameters: Max Size Raw, Max Size Lookup, and Data Type Lookup. These options allow for compiling very large projects that would otherwise have issues, and the compiler will notify you if these values need to be increased.

## Sanitize Boolean types
Under the hood, a Boolean is a 2-byte type. With memory APIs, or when receiving these from outside code, it's possible to store values other than the ones representing `True` and `False`. This option validates Booleans from external sources, e.g. COM objects and APIs, to ensure only the two supported values are stored.

## Stale/dangling pointer detection

Bugs result from using Strings and Variants after they have been freed. It may not be noticed immediately if the memory has not been overwritten, but it's sometimes hard to detect and can cause issues like a String displaying it's previous value or garbage. This debugging option detects use-after-free, and replaces the data with a special symbol indicating the problem. Below shows an example where the ListView ColumnHeader text had been set by previously-freed string and detected by this feature:

![image](https://github.com/twinbasic/documentation/assets/7834493/021f6cbf-acce-445d-ade7-3fcad0af4927)

Previously, it had shown the same text for every column-- but only under certain circumstances, leading to the issue being overlooking for a long time. 

## Additional compiler options

- Projects can be marked `LARGEADDRESSAWARE`.

- A manual base address can be specified

- Option to strip PE relocation symbols 

### Exploit mitigation

You can enable the following:

Data execution prevention (DEP)

Address-space layout randomization (ASLR)

## Compiler Warnings

twinBASIC provides compiler warnings during design time for common bad practices or likely oversights, including:
*  Warnings for likely-incorrect hex literals\
Non-explicit values are coerced into the lowest possible type first. So if you declare a constant as `&H8000`, the compiler sees it as an -32,768 `Integer`, and when you're putting that into a `Long` you almost certainly do not want -32,768, you want **positive** 32,768, which requires you to instead use `&H8000&`.\
This warning is supplied for `&H8000`-`&HFFFF` and `&H80000000`-`&HFFFFFFFF`.

*  Warnings for implicit variable creation with `ReDim`.\
When you use `ReDim myArray(1)`, the `myArray` variable is created for you, when it's good practice to declare all variables first.

*  Warnings for use of `DefType`\
This feature is discouraged for it making code difficult to read and prone to difficult to debug errors.

The full list can be found in your project's Settings page:\
![image](https://github.com/twinbasic/documentation/assets/7834493/017bd6f8-4b35-43a9-b6be-84cba69daf64)

### Adjusting warnings
Each warning has the ability to set them to ignore or turn them into an error both project-wide via the Settings page, and per-module/class, and per-procedure with `[IgnoreWarnings(TB___)]`, `[EnforceWarnings(TB____)]`, and `[EnforceErrors(TB____)]` attributes, where the underscores are replaced with the **full** number, e.g. `[IgnoreWarnings(TB0001)]`; the leading zeroes must be included.

### Strict mode

twinBASIC has added the following warning messages to support something similar to .NET's Strict Mode, where certain implicit conversions are not allowed and must be made explicit. By default, these are all set to be ignored, and must be enabled in the "Compiler Warnings" section of Project Settings or per-module/procedure with `[EnforceWarnings()]`. All of these can be configured individually and ignored for procedure/module scope with `[IgnoreWarnings()]`

**TB0018: Impicit narrowing conversion**\
Such as converting a Long to Integer; if you have `Dim i As Integer, l As Long` then `i = l` will trigger the warning, and `i = CInt(l)` would be required to avoid it.

**TB0019: Implicit enumeration conversion**\
When assigning a member of one Enum to a variabled typed as another, such as `Dim day As VbDayOfWeek: day = vbBlack`. The `CType(Of <type>)` operator whose use in pointers was described in the previous section is also used to specify an explicit type conversion in this case; the warning would not be triggered by `day = CType(Of VbDayOfWeek)(vbBlack)`.

**TB0020: Suspicious interface conversion**\
If a declared coclass doesn't explicitly name an interface as supported, converting to it will trigger this warning, e.g.

```vba
Dim myPic As StdPicture
Dim myFont As StdFont
Set myFont = myPic
```

You'd use `Set myFont = CType(OfStdFont)(myPic)` to avoid this warning.

**TB0021: Implicit enumeration conversion to/from numeric**
Triggered by assigning a numeric literal to a variabled typed as an Enum, such as `Dim day As VbDayOfWeek: day = 1`. To avoid it you'd use `day = CType(Of VbDayOfWeek)(1)`.

## Run some Subs from the IDE

The CodeLens feature allows running Subs and Functions, with no arguments and in modules (but not classes/Forms/UserControls) right from the editor without starting the full program. It has robust access to your code; it can access constants, call other functions both instrinsic and user-define, call APIs, and print to the Debug Console.\
Methods eligible to run with CodeLens (when enabled), have a bar above them that you can click to run:\
![image](https://github.com/twinbasic/documentation/assets/7834493/351d0147-cad3-4e16-89e5-0a9e43496740)

