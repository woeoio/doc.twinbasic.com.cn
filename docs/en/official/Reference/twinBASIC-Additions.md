---

title: twinBASIC Additions
parent: Reference Section
nav_order: 11
permalink: /Reference/twinBASIC-Additions

---

# twinBASIC Additions

twinBASIC extends the VBA language with new data types, language constructs, operators, runtime functions, and project-level capabilities. This page lists the additions that have a dedicated reference page, grouped by category.

For a broader overview aimed at developers coming from VBA or VB6, see the [welcome page](/en/official/).

---

## New data types

| Type         | Description                  | Notes                                                                      |
| ------------ | ---------------------------- | -------------------------------------------------------------------------- |
| **LongLong** | 8-byte signed integer        | Available in both 32-bit and 64-bit builds; VBA restricts it to 64-bit     |
| **LongPtr**  | Pointer-width signed integer | 4 bytes in 32-bit, 8 bytes in 64-bit; use in `Declare` statements          |
| **Decimal**  | 128-bit fixed-decimal type   | Available as a standalone declared type, not only as a **Variant** subtype |

See [Data Types](/en/official/Reference/Data-Types) for the full type table, and [Features → New Data Types](/en/official/Features/Language/Data-Types) for more detail on these three.

---

## New language constructs

### Object-oriented

- [**Interface**](/en/official/Reference/Core/Interface) -- defines a COM interface using twinBASIC syntax; a class that **Implements** it must provide all members
- [**CoClass**](/en/official/Reference/Core/CoClass) -- declares a COM co-class; generates COM registration metadata at compile time
- [**Inherits**](/en/official/Reference/Core/Implements) -- makes one class inherit another's implementation (single inheritance only)
- [**Implements Via**](/en/official/Reference/Core/Implements) -- an extended form of `Implements` that delegates interface dispatch to a member object instead of requiring per-member forwarding code
- [**Protected**](/en/official/Reference/Core/Protected) -- declares a class member accessible to the class and its derived classes; VBA has no equivalent

### Generics

twinBASIC supports generic types and generic modules using the `Of` keyword. A generic class or module takes one or more type parameters at instantiation time --- for example, `EventLog(Of EventIds, Categories)` in the [WinEventLogLib](/en/official/Reference/WinEventLogLib/EventLog) package, or `ServiceCreator(Of T)` in [WinServicesLib](/en/official/Reference/WinServicesLib/ServiceCreator).

### New declaration keywords

- [**Delegate**](/en/official/Reference/Core/Delegate) -- declares a typed function-pointer type; enables type-safe `AddressOf` and CDecl callbacks
- **Enum** member ranges -- enum members can now reference other members by name rather than only literal integers

### Flow control

- [**Continue**](/en/official/Reference/Core/Continue) -- skips to the next iteration of the enclosing loop (`Continue For`, `Continue Do`, `Continue While`); VBA has no equivalent
- [**Return**](/en/official/Reference/Core/Return) -- exits a **Function** or **Property Get** and supplies the return value in one statement; also retains the legacy **GoSub**/**Return** meaning

### Attributes

twinBASIC uses a square-bracket attribute syntax on declarations and modules:

```vb
[Documentation("Returns the absolute value of n.")]
[COMCreatable(False)]
Public Function Abs(ByVal n As Double) As Double
```

See [Attributes](/en/official/Reference/Attributes) for the full list, including `[DllExport]`, `[DebugOnly]`, `[WindowsControl]`, `[MustBeQualified]`, `[PreserveSig]`, and more.

### Inline initialisation

Variables can be initialised at the point of declaration:

```vb
Dim total As Long = 0
Dim greeting As String = "Hello"
Dim items() As String = Array("a", "b", "c")
```

See [Features → Inline Initialization](/en/official/Features/Language/Inline-Initialization).

### Parameterised New

`New` accepts constructor arguments when a class exposes an `_Initialize` method with matching parameters:

```vb
Dim conn As New NamedPipeClientConnection("\\.\pipe\mypipe", token)
```

See [Features → New](/en/official/Features/GUI-Components/New).

---

## New operators

| Operator                                                 | Description                                                                             |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [**AndAlso**](/en/official/Reference/Core/AndAlso)       | Short-circuit logical AND --- the right operand is not evaluated if the left is `False` |
| [**OrElse**](/en/official/Reference/Core/OrElse)         | Short-circuit logical OR --- the right operand is not evaluated if the left is `True`   |
| [**IsNot**](/en/official/Reference/Core/IsNot)           | Logical inverse of `Is`; `a IsNot b` is equivalent to `Not (a Is b)`                    |
| [**LeftShift**](/en/official/Reference/Core/LeftShift)   | Bitwise left shift; `x LeftShift n` shifts x left by n bits                             |
| [**RightShift**](/en/official/Reference/Core/RightShift) | Bitwise right shift; `x RightShift n` shifts x right by n bits                          |

---

## New runtime functions

These functions exist in the VBA package but have no equivalent in standard VBA --- they are twinBASIC additions:

| Function                                                                            | Module      | Description                                                                     |
| ----------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------- |
| [**CType**](/en/official/Reference/VBA/Conversion/CType)                            | Conversion  | Explicit cast to a caller-supplied type; syntax `CType(expr, TypeName)`         |
| [**If**](/en/official/Reference/VBA/Interaction/If)                                 | Interaction | Ternary --- evaluates to one of two values; only the chosen branch is evaluated |
| [**CallByDispId**](/en/official/Reference/VBA/Interaction/CallByDispId)             | Interaction | Invokes a method or property by its IDispatch dispatch ID                       |
| [**RaiseEventByName**](/en/official/Reference/VBA/Interaction/RaiseEventByName)     | Interaction | Raises an event by name, passing arguments as a **Variant** array               |
| [**RaiseEventByName2**](/en/official/Reference/VBA/Interaction/RaiseEventByName2)   | Interaction | Raises an event by name with a variable-length argument list                    |
| [**ObjPtr**](/en/official/Reference/VBA/Information/ObjPtr)                         | Information | Returns the COM-identity address of an object                                   |
| [**VarPtr**](/en/official/Reference/VBA/Information/VarPtr)                         | Information | Returns the address of a variable                                               |
| [**StrPtr**](/en/official/Reference/VBA/Information/StrPtr)                         | Information | Returns the address of a **String**'s underlying character buffer               |
| [**IsArrayInitialized**](/en/official/Reference/VBA/Information/IsArrayInitialized) | Information | Returns whether a dynamic array has been dimensioned                            |
| [**TranslateColor**](/en/official/Reference/VBA/Information/TranslateColor)         | Information | Translates an OLE colour to a plain RGB value                                   |

Additional low-level memory, threading, and introspection functions are documented in the [HiddenModule](/en/official/Reference/VBA/HiddenModule/) section.

---

## Project and runtime capabilities

### 64-bit compilation

twinBASIC compiles to either 32-bit or 64-bit native code. The target is set per-project. See [Features → 64-bit Compilation](/en/official/Features/64bit) and use `#If Win64 Then` / `#If Win32 Then` to conditionally compile architecture-specific code.

### Static linking (Fusion)

twinBASIC can statically link its runtime into the output EXE, producing a single-file distributable with no separate runtime DLL. See [Features → Fusion](/en/official/Features/Fusion).

### Multithreading

twinBASIC supports background threads through the `Thread` API. See [Features → Multithreading](/en/official/Features/Advanced/Multithreading).

### Inline assembly

The [**Emit**](/en/official/Reference/VBA/HiddenModule/Emit) / [**EmitAny**](/en/official/Reference/VBA/HiddenModule/EmitAny) functions inject raw byte sequences into the code generated for the enclosing procedure. The `[Naked]` attribute suppresses the generated prologue and epilogue. See [Features → Assembly](/en/official/Features/Advanced/Assembly).

### Enhanced API declarations

Beyond the standard `Declare`, twinBASIC adds:

- `DeclareWide` --- disables ANSI/Unicode conversion for string arguments
- `CDecl` calling convention on both declares and regular functions
- `ByVal` UDT passing
- Variadic (`CDecl` + `ParamArray ... As Any()`) parameter lists

See [Features → Enhanced API Declarations](/en/official/Features/Advanced/API-Declarations).

---

## IDE additions

- **CodeLens** --- inline action bars above procedures ("Run", "Debug", "Test") without leaving the editor. See [Features → CodeLens](/en/official/Features/Compiler-IDE/CodeLens).
- **Package server** (TWINSERV) --- install packages from a central registry without leaving the IDE. See [Features → Importing a package](/en/official/Features/Packages/Importing-a-package-from-TWINSERV).
- **Type inference** --- `Dim x = 1` infers **Long**; `For Each item In collection` infers the element type when the collection is typed. See [Features → Type Inference](/en/official/Features/Language/Type-Inference).
- **Conditional compilation constants** (`#Const`, `#If`) --- a superset of the VBA set; see [Compiler Constants](/en/official/Reference/Compiler-Constants).

---

### See Also

- [Data Types](/en/official/Reference/Data-Types) -- storage sizes and ranges for all intrinsic types
- [Features](/en/official/Features/) -- in-depth coverage of every twinBASIC feature
- [Categories](/en/official/Reference/Categories) -- statements and procedures grouped by purpose
