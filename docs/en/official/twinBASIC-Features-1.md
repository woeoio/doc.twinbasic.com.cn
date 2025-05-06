This page is intended to list and briefly describe all new features that twinBASIC brings compared to VBx, and assumes existing familiarity with the principles of programming in the BASIC language. They are categorized into the following sections:

* [Language Syntax](https://github.com/twinbasic/documentation/wiki/twinbasic-features#language-syntax)
* [Project Configuration](https://github.com/twinbasic/documentation/wiki/twinbasic-features#project-configuration)
* [Attributes](https://github.com/twinbasic/documentation/wiki/twinbasic-features#attributes)
* [Standard Library](https://github.com/twinbasic/documentation/wiki/twinbasic-features#standard-library)
* [GUI components](https://github.com/twinbasic/documentation/wiki/twinbasic-features#gui-components) (e.g. controls and forms)
* [Design Experience](https://github.com/twinbasic/documentation/wiki/twinbasic-features#design-experience)

# Attributes
Attributes have two major functions; they can act as instructions to compiler to influence how code is generated, or to annotate an element (Forms, Modules, Classes, Types, Enums, Declares, Subs/Functions, etc.) In VBx, attributes are present but are not exposed via the code pane and uses cryptic syntax that is hard to use via the source file. Previously in VBx, some attributes like a procedure description, hidden attribute, and default member were set via hidden text the editor didn't show you, configured via the Procedure Attributes dialog or some other places. In tB, these are all visible in the code editor. The legacy ones from VBx are supported for compatibility, but new attributes utilize the following syntax:\
`[Attribute]` or `[Attribute(value)]`\
Many of the following items will have their associated attributes described, then miscellaneous ones will be described later on.

# 64bit Compilation

twinBASIC can compile native 64bit executables in addition to 32bit. The syntax is compatible with VBA7 for this: the `LongPtr` data type and the requirement (in 64bit mode) to mark APIs `PtrSafe`, e.g.:\
`Public Declare PtrSafe Sub foo Lib "bar" (ByVal hWnd As LongPtr)`

> [!IMPORTANT]
> There is a lot more required to get most 32bit apps to work properly as 64bit. Only some `Long` variables are to be changed, and this is determined by their C/C++ data types, of which there are many. Examples that need to be `LongPtr` include handles like `HWND, HBITMAP, HICON,` and `HANDLE`; pointers like `void*, PVOID, ULONG_PTR, DWORD_PTR,` and `LPWSTR/PWSTR/LPCWSTR/WCHAR*` when passed as `Long`; and the `SIZE_T` type found in CopyMemory and memory allocation functions.\
> Additionally, any code working with memory pointers must account for the fact all the types mentioned (and the many more not), as well as v-table entries, are now either 4 or 8 bytes, when most programmers have traditionally hard coded 4 bytes. There are also UDT alignment issues more frequently. This is all very complex and you should seek resources and advice when moving to 64bit (though remember, 32bit is still supported so this isn't a requirement). 

# Language Syntax

## New data types
* `LongPtr` Meant primarily to handle pointers, `LongPtr` is a 4-byte (32 bits) signed integer in 32bit mode, and a signed 8-byte integer (64 bits) in 64bit mode.
* `LongLong` A signed 8-byte (64 bits) integer, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. Note that this type is available in both 32bit and 64bit mode (VBA restricts it to 64bit mode). 
* `Decimal` In twinBASIC, `Decimal` is implementented as a full, regular data type, in addition to use within a `Variant`. This is a 16-byte (128 bits) type which holds a 12-byte (96 bits) integer with variable decimal point scaling and sign bit information. Values range from -79,228,162,514,264,337,593,543,950,335 to 79,228,162,514,264,337,593,543,950,335.
* All of the datatype management features also exist for these types: `DefDec`/`DefLngLng`/`DefLongPtr`, `CDec`/`CLngLng`/`CLongPtr`, and `vbDecimal`/`vbLongLong`/`vbLongPtr` constants for type checking.

## Interfaces and coclasses

### Defining interfaces
twinBASIC supports defining COM interfaces using BASIC syntax, rather than needing an type library with IDL and C++. These are only supported in .twin files, not in legacy .bas or .cls files. They must appear *before* the `Class` or `Module` statement, and will always have a project-wide scope. the The generic form for this is as follows:

```vb
[InterfaceId ("00000000-0000-0000-0000-000000000000")]
*<attributes>*
Interface <name> Extends <base-interface>
    *<attributes>*
    <method 1>
    *<attributes>*
    <method 2>
    ...
End Interface
```
Methods can be any of the following: `Sub`, `Function`, `Property Get`, `Property Let`, or `Property Set`, with arguments following the standard syntax, and with the standard attributes available. These cannot be modified with `Public/Private/Friend`. `End <method>` is not used, as these are prototype definitions only. 

Available attributes for interfaces currently include:
* `[Description("text")]` - Provides a description in information popups, and is exported as a `helpstring` attribute in the type library (if applicable).

* `[Hidden]` - Hides the interface from certain Intellisense and other lists.

* `[Restricted]` - Restricts the interface methods from being called in most contexts.

* `[OleAutomation(True/False)]` - Controls whether this attribute is applied in the typelibrary. This attribute is set to **True** by default.

* `[ComImport]` - Specifies that an interface is an import from an external COM library, for instance, the Windows shell.

* `[COMExtensible(True/False)]` - Specifies whether new members added at runtime can be called by name through an interface implementing IDispatch. This attribute is set to **False** by default.

Available attributes for methods currently include:

* `[Description("text")]` - See above.

* `[PreserveSig]` - For COM interfaces, normally methods return an HRESULT that the language hides from you. The `[ PreserveSig ]` attribute overrides this behavior and defines the function exactly as you provide. This is neccessary if you need to define it as returning something other than a 4-byte `Long`, or want to handle the result yourself, bypassing the normal runtime error raised if the return value is negative (this is helpful when a negative value indicates an expected, acceptable failure, rather than a true error, like when an enum interface is out of items).

* `[DispId(number)]` - Defines a dispatch ID associated with the method.

#### Example 
```vb
[InterfaceId("E7064791-0E4A-425B-8C8F-08802AAFEE61")]
[Description("Defines the IFoo interface")]
[OleAutomation(False)]
Interface IFoo Extends IUnknown
    Sub MySub(Arg1 As Long)
    Function Clone() As IFoo
    [PreserveSig]
    Function MyFunc([TypeHint(MyEnum)] Arg1 As Variant) As Boolean
End Interface 
```
(Where MyEnum is a standard `Enum ... End Enum` block.


### Defining coclasses
In addition to interfaces, twinBASIC also allows defining coclasses-- creatable classes that implement one or more defined interfaces. Like interfaces, these too must be in .twin files and not legacy .bas/.cls files, and must appear prior to the `Class` or `Module` statement. The generic form is:

```vb
[CoClassId("00000000-0000-0000-0000-000000000000")]
*<attributes>*
CoClass <name>
    [Default] Interface <interface name>
    *[Default, Source] Interface <event interface name>*
    *<additional Interface items>*
End CoClass
```
Each coclass must specify a `[Default]` interface, a source interface and additional interfaces are optional. Each represents a contract that the class will provide an implementation of the given interface. Note that at this time, twinBASIC does not yet support defining `dispinterface` interfaces, the usual form of Source interfaces for events.

The attributes available for coclasses are as follows:
* `[Description("text")]` - Provides a description in info popups and other places.
* `[ComCreatable(True/False)]` - Indicates that this coclass can be created with the `New` keyword. This is *True* by default. 
* `[AppObject]` - Indicates the class is part of the global namespace. You should not include this attribute without a full understanding of the meaning.
* `[Hidden]` - Hides the coclass from appearing in certain places. 

#### Example
```vb
[CoClassId("52112FA1-FBE4-11CA-B5DD-0020AFE7292D")]
CoClass Foo
   [Default] Interface IFoo
   Interface IBar
End CoClass
```
Where `IFoo` and `IBar` are interface defined with the `Interface` syntax described earlier.

### Enhancements to `Implements`
* `Implements` in twinBASIC is allowed on inherited interfaces-- for instance, if you have `Interface IFoo2 Extends IFoo`, you then use `Implements IFoo2` in a class, where in VBx this would not be allowed. You'll need to provide methods for all inherited interfaces (besides `IDispatch` and `IUnknown`). The class will mark all interfaces as available-- you don't need a separate statement for `IFoo`, it will be passed through `Set` statements (and their underlying `QueryInterface` calls) automatically.

* If you have an interface multiple others extend from, you can write multiple implementations, or specify one implementation for all. For example: 

    ```vb
    IOleWindow_GetWindow() As LongPtr _
      Implements IOleWindow.GetWindow, IShellBrowser.GetWindow, IShellView2.GetWindow
    ```

* `Implements` allowed on interfaces with 'As Any' parameters: In VBx, you'd get an error if you attempted to use any interface containing a member with an `As Any` argument. With twinBASIC, this is allowed if you substitute `As LongPtr` for `As Any`, for example:

    ```vb
    Interface IFoo Extends IUnknown
        Sub Bar(ppv As Any)
    End Interface

    Class MyClass
    Implements IFoo

    Private Sub IFoo_Bar(ppv As LongPtr) Implements IFoo.Bar

    End Sub
    ```

* `Implements Via` for basic inheritance\
It's now possible to have simple inheritance among classes. For example, if you have class cVehicle which implements IVehicle containing method Honk, you could create child classes like cCar or cTruck, which inherit the methods of the original, so you could call cCar.Honk without writing a separate implementation. Here's what this looks like as code:

![image](https://github.com/twinbasic/documentation/assets/7834493/b0724fe2-636d-47db-a8fc-531a585ddaf9)

You can see that the Honk method is only implemented by the parent class, then called from the child class when you click the CodeLens button to run the sub in place from the IDE.

## Delegate types for Call By Pointer

There is native support for calling a function by pointer, by way of `Delegate` syntax. A delegate in twinBASIC is a function pointer type that's compatible with LongPtr. `AddressOf` returns a delegate type, that's also backwards compatible with `LongPtr`.

The syntax looks like this:
7
```vb
    Private Delegate Function Delegate1 (ByVal A As Long, ByVal B As Long) As Long
    
    Private Sub Command1_Click()
        Dim myDelegate As Delegate1 = AddressOf Addition
        MsgBox "Answer: " & myDelegate(5, 6)
    End Sub
    
    Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
        Return A + B
    End Function
```

The delegate type can also be used in interface/API declarations and as members of a User-defined type, for example, the `ChooseColor` API:

```vb
Public Delegate Function CCHookProc (ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr
Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc 'Delegate function pointer type instead of LongPtr
    lpTemplateName As LongPtr
End Type
```

If you already have code assigning a `Long`/`LongPtr` to the `lpfnHook` member, it will continue to work normally, but now you can also have the type safety benefits of setting it to a method matching the Delegate:

```vb
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```


## Static linking of OBJ and LIB files

tB allows you to use properly compiled .lib and .obj files as statically linked libraries, using declares similar to DLLs, only referring a lib/obj file in your Miscellaneous files folder of your project. Once the file is in the project, it's set up with this syntax outside of declares, example from the sqlite sample:

```vb
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If

Generically:

    Import Libary "Relative resource path" As NAMESPACE Link "dependency1", "dependency2", ...
```

After that, you can use NAMESPACE in place of a DLL name, inside class/module declares:

```vb
' Compiled sqlite-amalgamation-3440200 (v3.44.2) 
'   using cmdline (MSVC):  cl /c /Gw /Gy /GS- /DSQLITE_OMIT_SEH sqlite3.c
#If Win64 Then
    Import Library "/Miscellaneous/sqlite3_64.obj" As SQLITE3 Link "stdlib", "kernel32"
#Else
    Import Library "/Miscellaneous/sqlite3_32.obj" As SQLITE3 Link "stdlib", "kernel32"
#End If

Module MainModule
    
    Declare PtrSafe Function sqlite3_open CDecl Lib SQLITE3 (ByVal filename As String, ByRef ppDb As LongPtr) As Long
    Declare PtrSafe Function sqlite3_exec CDecl Lib SQLITE3 (ByVal pDb As LongPtr, ByVal sql As String, ByVal exec_callback As LongPtr, ByVal udp As LongPtr, ByRef errmsg As LongPtr) As Long
...
```

>[!NOTE]
>StdCall names will be mangled with argument sizes, e.g. `int myfunc(int x, short y);` would be `myfunc@6`. It therefore may be better to use `CDecl`.

A documentation page will be dedicated to more fully explaining this in the future; for now if you need help with it, visit the tB Discord or Discussions section of the GitHub repository and ask.

## `Emit()` and Naked functions to insert assembly directly into exe/dll

Raw bytecode can be inserted into a binary with tB's `Emit()` function. To support this functions can be marked as `Naked` to remove hidden tB code. 

For example, the following is an implementation of the InterlockedIncrement compiler intrinsic that replaces the API in Microsoft C/C++ (adds one to `Addend` and returns the result, as an atomic operation which isn't guaranteed with regular code):

```vb
Public Function InlineInterlockedIncrement CDecl Naked(Addend As Long) As Long
#If Win64 Then
    Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov    eax,0x1
    Emit(&Hf0, &H0f, &Hc1, &H41, &H00) ' lock xadd DWORD PTR [rcx+0x4],eax
    Emit(&Hff, &Hc0)                   ' inc    eax
    Emit(&Hc3)                         ' ret 
#Else
    Emit(&H8b, &H4c, &H24, &H04)       ' mov     ecx, DWORD PTR _Addend$[esp-4]
    Emit(&Hb8, &H01, &H00, &H00, &H00) ' mov     eax, 1
    Emit(&Hf0, &H0f, &Hc1, &H01)       ' lock xadd DWORD PTR [ecx], eax
    Emit(&H40)                         ' inc     eax
    Emit(&Hc3)                         ' ret     0
#End If
End Function
```
(Note: The `CDecl` calling convention is optional; you can write x86 assembly using `_stdcall` and simply omit the notation.)

## Type Inference

Variables can now be declared `As Any` and their type will be inferred, similar to C++'s `auto`.\
`Dim x As Any = 5&' would result in x being a `Long`. 

This is only for the `Dim` statement; arguments cannot be `As Any` except in API declarations.

## New operators
* Bitshift operators ``<<`` and ``>>`` perform left-shift and right-shift operations on a numeric variable. Note that shifts beyond available size result in 0, not wrapping.   

* `vbNullPtr` - Allows passing null pointers to UDT members of APIs/interfaces. The equivalent behavior in VBx is to declare them `As Any` and then pass `ByVal 0` at call sites.

    **Example**
    ```vb
    Type Foo
       bar As Long
    End Type
    Public Declare PtrSafe Function MyFunc Lib "MyDLL" (pFoo As Foo) As Long

    Private Sub CallMyFunc()
        Dim ret As Long = MyFunc(vbNullPtr)
    End Sub
    ```

Additionally, while not strictly new syntax, twinBASIC also adds support for `ByVal Nothing`, to override a `ByRef <interface>` argument and pass a null pointer there.

* Short-circuit conditional operators `OrElse` and `AndAlso`. With the regular `Or` and `And` statements, both sides are evaluated, even when not necessary. With a short circuit operator, if the condition is resolved by the first side, the other side is not evaluated. So if you have:
`If Condition1 OrElse Condition2 Then`, if Condition1 is `True`, then `Condition2` will not be evaluated, and any code called by it will not run. 

* Short-circuit `If()` operator with syntax identical to the tradition `IIf`. This has the additional benefit of not converting variables into a `Variant` if they're the same type; i.e. `If(condition, Long, Long)` the `Long` variables will never become a `Variant`. 

* New assignment operators: `+= -= /= *= ^= &= <<= >>=`

    These are the equivalent of `var = var (operand) (var2)`. So `i += 1` is the equivalent of `i = i + 1`. 

* `IsNot` operator: The logical opposite of the *Is* operator for testing object equivalence. For example, instead of `If (object Is Nothing) = False` you could now write `If object IsNot Nothing Then`. 

## New literals notation

### Binary literals<br>
In addition to `&H` for hexadecimal literals and `&O` for octal notation, twinBASIC also provides `&B` for binary notation. For example, `Dim b As Long = &B010110` is valid syntax, and b = 22.

### Digit grouping
The &H, &O, and &B literals can all be grouped using an underscore, for example, grouping a `Long` by it's constituent binary byte groups: `&B10110101_10100011_10000011_01101110`, or grouping a `LongLong` as two `Long` groups: `&H01234567_89ABCDEF`.



## Thread safety/multithreading support
While there's no native language syntax yet (planned), you can call `CreateThread` directly with no hacks. Previously, VBx and other BASIC languages typically required elaborate workarounds to be able to use `CreateThread` for anything but some specialized, extremely simple things. In twinBASIC, you can call it and all other threading APIs without any special steps, other than of course the careful management of doing threading at a low level like this. 

### Example

In a new Standard EXE project, add a CommandButton and TextBox to your form:

```vb
    Private Declare PtrSafe Function GetCurrentThreadId Lib "kernel32" () As Long

    Private Declare PtrSafe Function CreateThread Lib "kernel32" ( _
                            ByRef lpThreadAttributes As Any, _
                            ByVal dwStackSize As Long, _
                            ByVal lpStartAddress As LongPtr, _
                            ByRef lpParameter As Any, _
                            ByVal dwCreationFlags As Long, _
                            ByRef lpThreadId As Long) As LongPtr

    Private Declare PtrSafe Function WaitForSingleObject Lib "kernel32" ( _
                            ByVal hHandle As LongPtr, _
                            ByVal dwMilliseconds As Long) As Long

 
    
    Private Const INFINITE = -1&
    
    Private Sub Command1_Click() Handles Command1.Click
        Dim lTID As Long
        Dim lCurTID As Long
        Dim hThreadNew As LongPtr
        lCurTID = GetCurrentThreadId()
        hThreadNew = CreateThread(ByVal 0, 0, AddressOf TestThread, ByVal 0, 0, lTID)
        Text1.Text = "Thread " & lCurTID & " is waiting on thread " & lTID
        Dim hr As Long
        hr = WaitForSingleObject(hThreadNew, 30000&) 'Wait 30s as a default. You can use INFINITE instead if you never want to time out.
        Text1.Text = "Wait end code " & CStr(hr)
    End Sub

    Public Sub TestThread()
        MsgBox "Hello thread"
    End Sub
```
Under a single-threaded code, if you called `TestThread` before updating `Text1.Text`, the text wouldn't update until you clicked ok on the message box. But here, the message box in launched in a separate thread, so execution continues and updates the text, after which we manually choose to wait for the message box thread to exit.


## Improvements to `AddressOf` 
`AddressOf` can be now be used on class/form/usercontrol members, including from outside the class by specifying the instance. Also, no need for `FARPROC`-type functions, you can use it like `Ptr = AddressOf Func`. So if you have class `CFoo` with member function `bar`, the following is valid:

```vb
Dim foo1 As New CFoo
Dim lpfn As LongPtr = AddressOf foo1.bar
```
