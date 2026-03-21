## Enhanced pointer functionality

The `CType(Of <type>)` operator specifies an explicit intent to cast one type to another. This can be used for casting `LongPtr` (or `Long` on 32bit/`LongLong` on 64bit) to a custom user-defined type, with or without making a copy of it, depending on the usage. This allows not just for casting directly without a `CopyMemory` call, but also, setting the members of a UDT represented only by a pointer, without copying memory back and forth.

Consider the following UDTs:

```vb
Private Type foo
    a As Long
    b As Long
    pfizz As LongPtr 'A pointer to a variable of type fizz
End Type
Private Type bar
    pfoo As LongPtr 'A pointer to a variable of type foo
End Type
Private Type fizz
    c As Long
End Type
```

The following codes examples work to manipulate the pointers:

```vb
Sub call1()
    Dim f As foo
    test1 VarPtr(f)
    Debug.Print f.a, f.b
End Sub
Sub test1(ByVal ptr As LongPtr)
    With CType(Of foo)(ptr)
        .a = 1
        .b = 2
    End With
End Sub
```

This will print `1  2`.

```vb
Sub call2()
    Dim f As foo, b As bar
    b.pfoo = VarPtr(f)
    test2 b
    Debug.Print f.a, f.b
End Sub
Sub test2(b As bar)
    With CType(Of foo)(b.pfoo)
        .a = 3
        .b = 4
    End With
End Sub
```
This will print `3  4`

```vb
Sub call3()
    Dim f As foo, b As bar, z As fizz
    f.pfizz = VarPtr(z)
    b.pfoo = VarPtr(f)
    test3 b
    Debug.Print z.c
End Sub
Sub test3(b As bar)
    CType(Of fizz)(CType(Of foo)(b.pfoo).pfizz).c = 4
End Sub
```

Free standing use and nesting is also allowed; the above will print `4`. While the examples here are local code only, this is particularly useful for APIs, where you're forced to work with pointers extensively.


## `Len/LenB(Of <type>)` Support
The classic `Len` and `LenB` functions can now be used to directly get the length/size of a type, both intrinsic and user-defined, without needing have declared a variable of that type. For instance, to know the pointer size, you can use `LenB(Of LongPtr)`. 

## Overloading

twinBASIC supports overloading in two ways:

### Overloading by type of argument
The following Subs are valid together in a module/class/etc:

```vb
Sub foo(bar As Integer)
'...
End Sub

Sub foo(bar As Long)
'...
End Sub

Sub foo(bar As Double)
'...
End Sub
```
The compiler will automatically pick which one is called by the data type.

### Overloading by number of arguments
In addition to the above, you could also add the following:

```vb
Sub Foo(bar1 As Integer)
'...
End Sub
Sub Foo(bar1 As Integer, bar2 As Integer)
'...
End Sub
```
The compiler will automatically pick which one is called by the number and/or types of arguments.

## Inline variable initialization
You can now set initial values for variables inline, without needing a line-continuation character.

**Examples**

`Dim i As Long = 1`

`Dim foo As Boolean = bar()`

`Dim arr As Variant = Array(1, 2, 3)`

`Dim strArr(2) As String = Array("a", "b", "c")`

## Inline variable declaration for `For`
You now no longer need a separate `Dim` statement for counter variables:
```vb
For i As Long = 0 To 10
    ...
Next
```
is now valid syntax. You can use any type, not just `Long`.

## Generics
The following is an examples of generics use in tB:

```vb
Public Function TCast(Of T)(ByRef Expression As T) As T
Return Expression
End Function
```
Which could be used e.g. to return a `Date` typed variable with `TCast(Of Date)("2021-01-01")`



## Enhancements to API/method declarations
### `DeclareWide` 
The `DeclareWide` keyword, in place of `Declare`, disables ANSI<->Unicode conversion for API calls. This applies both directly to arguments, and to String arguments inside a UDT. For example, the following are equivalent in functionality:
```
Public Declare PtrSafe Sub FooW Lib "some.dll" (ByVal bar As LongPtr)
Public DeclareWide PtrSafe Sub Foo Lib "some.dll" Alias "FooW" (ByVal bar As String)
```
Both represent a fully Unicode operation, but the allows direct use of the `String` datatype without requiring the use of `StrPtr` to prevent conversion. 

> [!WARNING]
> This does **not** change the underlying data types-- the `String` type is a `BSTR`, not an `LPWSTR`, so in the event an API returns a pre-allocated `LPWSTR`, rather than filling a buffer you have created, it will not provide a valid `String` type. This would be the case where an API parameter is given as `[out] LPWSTR *arg`.

### `CDecl` support
The cdecl calling convention is supported both for API declares and methods in your code. This includes DLL exports in standard DLLs. Examples:

`Private DeclareWide PtrSafe Function _wtoi64 CDecl Lib "msvcrt" (ByVal psz As String) As LongLong`
 
```vb
[ DllExport ]
Public Function MyExportedFunction CDecl(foo As Long, Bar As Long) As Long
```

Support for callbacks using `CDecl` is also available. You would pass a delegate that includes `CDecl` as the definition in the prototype. Here is an example code that performs a quicksort using the [`qsort` function](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw):

```vb
Private Delegate Function LongComparator CDecl ( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long

Private Declare PtrSafe Sub qsort CDecl _
Lib "msvcrt" ( _
    ByRef pFirst As Any, _
    ByVal lNumber As Long, _
    ByVal lSize As Long, _
    ByVal pfnComparator As LongComparator _
)

Public Sub CallMe()
    Dim z() As Long
    Dim i As Long
    Dim s As String
    
    ReDim z(10) As Long
    For i = 0 To UBound(z)
        z(i) = Int(Rnd * 1000)
    Next i
    qsort z(0), UBound(z) + 1, LenB(z(0)), AddressOf Comparator
    For i = 0 To UBound(z)
        s = s & CStr(z(i)) & vbNewLine
    Next i
    MsgBox s
End Sub

Private Function Comparator CDecl( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long
    Comparator = a - b
End Function
```

### Variadic Arguments support
With `cdecl` calling convention fully supported, twinBASIC can also handle variadic functions. In C/C++, those functions contain an ellipsis `...` as part of their arguments. This is represented in tB As `{ByRef | ByVal} ParamArray ... As Any()`. Note that `ByRef` or `ByVal` must be explicitly marked; implicit `ByRef` is not allowed.

Using the [given C/C++ prototype](https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-wsprintfw):
```cpp
int WINAPIV wsprintfW(
  [out] LPWSTR  unnamedParam1,
  [in]  LPCWSTR unnamedParam2,
        ...     
);
```

The twinBASIC declaration and function using it can be written as shown:
```vb
Private DeclareWide PtrSafe Function wsprintfW CDecl _
Lib "user32" ( _
  ByVal buf As String, _
  ByVal format As String, _
  ByVal ParamArray args As Any() _
) As Long
    
Private Sub Test()
  Dim buf As String = Space(1024)
  wsprintfW(buf, "%d %d %d", 1, 2, 3)
  MsgBox buf
End Sub
```

### `[PreserveSig]`
The `[PreserveSig]` attribute was described earlier for COM methods, but it can also be used on API declares. For APIs, the default is `True`. So therefore, you can specify `False` in order to rewrite the last parameter as a return. Example:

```vb
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" (ppshf As IShellFolder) As Long
```

can be rewritten as

```vb
[PreserveSig(False)] 
Public Declare PtrSafe Function SHGetDesktopFolder Lib "shell32" () As IShellFolder`
```


## Loop control
The following new statements are available for controlling the procession of loops:

* `Continue For` - Proceed to the next iteration (or end) of `For` loop.
* `Continue While` - Proceed to the next iteration (or end) of `While` loop.
* `Continue Do` - Proceed to the next iteration of `Do` loop.
* `Exit While` - Exit a `While` loop immediately.

## `Return` syntax for functions.
You can now combine assigning a return value and exiting a function into a single statement like many other languages allow. This is accomplished with the `Return` keyword:

```vb
Private Function Foo() As Long
Dim i As Long = 1
If i Then
    Return i
End If
End Function
```
this is the equivalent of
```vb
Private Function Foo() As Long
Dim i As Long = 1
If i Then
    Foo = i
    Exit Function
End If
End Function
```
`Return` can be used for objects as well. It is currently only valid with a value specified and within a function; you cannot use `Return` without anything after it in a sub.

## New class member handler syntax
You can now separate the name of method from the class member it applies to.

### `Handles` for events
For events events on Forms, UserControls, and event-raising objects, you can define any method as the handler, rather than need to name it as `Object_Event()`, by following it with `Handles Object.Event`. For example, in a form, instead of `Private Sub Form_Load()` you could handle the `Load` event with `Private Sub OnLoad() Handles Form.Load`. 

### `Implements` for interfaces
Similar to the above, for forms/UCs/classes that use `Implements`, you can use `Sub Bar() Implements IFoo.Bar`. Note that you can specify more than one implemented method; for more information, see the Enhancements to Implements subsection of the Interfaces and Coclasses section detailing the new in-language syntax for defining these.

>[!NOTE]
>These are opt-in and optional\
>For compatibility, twinBASIC will always continue to support the traditional syntax for event handling and Implements, and you're not required to use this new syntax (or *any* of the additions described in this article). Whether or not automatically created prototypes use this syntax is controlled via IDE Options: "IDE: Use new handles/implements syntax".

## Custom UDT packing
If you've done extensive work with the Windows API, every so often you'll come across user-defined types that have an extraneous member added called pad, padding, reserved, etc, that doesn't appear in the documentation for that type. This is the result of the UDT applying packing rules different from the default. By default, UDTs have hidden spacing bytes that make their largest sized member appear at a multiple of it's size, and making the entire UDT be a multiple of that size. Consider the following UDT:
```vb
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```
If you ask for `Len(t)`, you get 8-- the sum of 2x2-byte Integers and 1 4-byte Long. But if you ask for `LenB(t)`, you get 12. This is because the largest size type is 4, so that's the packing alignment number. Each Long must appear at a multiple of 4 bytes, so 2 byte of hidden padding is inserted between x and y. You can see this for yourself by checking `VarPtr(t.y) - VarPtr(t)`. This gives you the starting offset of `y`-- which is 4, not 2 like you'd get if it immediately followed `x`. Finally, with the hidden 2 bytes, we're now up to 10 bytes. But the total UDT size must be a multiple of 4, so 2 more hidden bytes are added on the end.\
Some API UDTs will look like `MyUDT` is correct, but you'll see it defined in VBx as 2 Longs-- which gets the required 8 bytes, with some special handling for the first member. If you refer back to the original C/C++ header, you'll find, for this situation, something like `#include <pshpack1.h>` or `#pragma pack(push,1)` somewhere before the UDT. This manually alters the packing rule to insert no hidden bytes anywhere.\
In twinBASIC, instead of two Longs and having to worry about getting the first one right when it's not an Integer, you can use the original definition with:
```vb
[PackingAlignment(1)]
Private Type MyUDT
    x As Integer
    y As Long
    z As Integer
End Type
Private t As MyUDT
```
You'll now find that both `Len(t)` and `LenB(t)` are 8. **NOTE:** Alignment, not packing alignment, is not set this way-- specifying 16 would not get you a 16-byte structure for `t`. twinBASIC does not currently have an equivalent for `__declspec_align(n)`, but such a feature is planned. This is very, very rare outside kernel mode programming.

## Block and inline comments

You can now use `/* */` syntax. For example, `Sub Foo(bar As Long /* out */)` or:

```c
/*
Everything here is
a comment until:
*/
```


## Destructuring assignment support for arrays
This feature allows you to assign the contents of an array to multiple variables in a single line:

```vb
    Dim a As Long, b As Long, c As Long
    Dim d(2) As Long
    d(0) = 1
    d(1) = 2
    d(2) = 3
    Array(a, b, c) = d
    Debug.Print a, b, c
```

This would print `1   2   3`. You could also assign multiple variables at once like this and get the same result:

```vb
    Dim a As Long, b As Long, c As Long
    Array(a, b, c) = Array(1, 2, 3)
    Debug.Print a, b, c
```

You can now also do assignments like this:

```vb
        Dim a As Long = 9
        Dim b As Long = 7
        Dim c() As Long = Array(a, b)
        Debug.Print c(1), UBound(c)
```

Which prints `7    1`.


## Direct access to COM error handling
You can retrieve the last `HRESULT` to a COM interface call via `Err.LastHResult`; these are usually hidden and mapped to internal errors-- everything in a COM interface normally called a `Sub` is actually an `HRESULT`-returning function.

More importantly, you can now **set** the `HRESULT` in interface implementations with `Err.ReturnHResult`. This was a critical missing feature for which sometimes Err.Raise would work, but mostly programmers resorted to complicated vtable-swapping code to redirect to a standard module function. For instance you can now return `S_FALSE` where expected with `Err.ReturnHResult = S_FALSE`.

## Module-level definitions not limited to top
It's now possible to insert module-level code in between methods or properties. Where previously all `Declare` statements, `Enum`, `Type`, etc had to appear prior to the first `Sub/Function/Property`, the following would now be valid:

```vb
Private Const foo = "foo"
Sub SomeMethod()
'...
End Sub
Private Const bar = "bar"
Sub SomeOtherMethod()
'...
End Sub
```

## Preset methods for code part names
The following can be used and what they represent will be automatically inserted as a `String`:

* `CurrentComponentName`, e.g. "Form1"
* `CurrentProcedureName`, e.g. "Foo" when in `Sub Foo()`
* `CurrentProjectName`, 
* `CurrentSourceFile`
* `CurrentComponentCLSID`


## Removal of limits on line continuations, procedure size, etc.
twinBASIC imposes no artificial limitations on those, number of controls on a form, module size, and more.

## Parameterized class constructors.
Classes now support a `New` sub with ability to add arguments, called as the class is constructed prior to the `Class_Initialize` event. For example a class can have:

```vb
[ComCreatable(False)]
Class MyClass
Private MyClassVar As Long
Sub New(Value As Long)
MyClassVar = Value
End Sub
End Class
```

then created by `Dim mc As MyClass = New MyClass(123)` which sets `MyClassVar` on create. Note: Classes using this must be private, have the `[ComCreatable(False)]` attribute, or also contain `Class_Initialize()`. `Class_Initialize()` will replace `New` in callers of a compiled OCX. Within the project, only `New` will be used if present.

## `Private`/`Public` modifiers for modules and classes
A private module or class won't have it's members entered into the type library in an ActiveX project.

## `ReadOnly` variables
In a class, module-level variables can be declared as `ReadOnly`, e.g. `Private ReadOnly mStartDate As Date`. This allows more complex constant assignments: you can use a function return to set it inline, `Private ReadOnly mStartDate As Date = Now()`, or `ReadOnly` constants can be set in `Class_Initialize` or `Sub New(...)` (see parameterized class constructors above), but everywhere else, they can only be read, not changed.
