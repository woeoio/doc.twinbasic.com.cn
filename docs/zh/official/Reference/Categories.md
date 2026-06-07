---
title: Categories
parent: Reference Section
nav_order: 1
permalink: /Reference/Categories
---

This chapter lists the global statements and procedures that form the core of the twinBASIC language.

# Categorical List

## Compiler Control

* [Option](/official/Reference/Core/Option) - configure a compiler option
* [#If ... Then ... Else](/official/Reference/Core/Topic-Preprocessor) - enable or disable compilation of enclosed code
* [#Const](/official/Reference/Core/Topic-Preprocessor) - define a module-private conditional compiler constant

## Declarations and Definitions

* [Class](/official/Reference/Core/Class), [Module](/official/Reference/Core/Module) - define a class or module
* [Interface](/official/Reference/Core/Interface), [CoClass](/official/Reference/Core/CoClass) - (twinBASIC) define a COM interface or coclass using twinBASIC syntax
* [Sub](/official/Reference/Core/Sub) - define a procedure
* [Function](/official/Reference/Core/Function) - define a function
* [Property](/official/Reference/Core/Property) - define a property
* [ParamArray](/official/Reference/Core/ParamArray) - declare a procedure's final parameter as a variadic argument list
* [Enum](/official/Reference/Core/Enum) - define an enumeration type with associated constants
* [Type](/official/Reference/Core/Type) - declare a user-defined data type (UDT)/a structure
* [Declare](/official/Reference/Core/Declare) - declare an external/library procedure or function
* [Event](/official/Reference/Core/Event) - declare an event
* [Implements](/official/Reference/Core/Implements) - specifies that a class implements a given interface
* [End](/official/Reference/Core/End) - terminate execution, finish a Function, Sub, Property, or Enum definition, finish a Type declaration; finish a Class or Module, finish an If, Select, or With block

## Flow Control

Statements:

* [Call](/official/Reference/Core/Call) - invokes a procedure or function
* [Do ... Loop](/official/Reference/Core/Do-Loop), [For ... Next](/official/Reference/Core/For-Next), [For Each ... Next](/official/Reference/Core/For-Each-Next), [While ... Wend](/official/Reference/Core/While-Wend) - loops
* [If ... Then ... Else](/official/Reference/Core/If-Then-Else) - execute code conditionally
* [Continue](/official/Reference/Core/Continue) - skip to the next iteration of the loop
* [Exit](/official/Reference/Core/Exit) - exit a loop, procedure, function or property
* [Return](/official/Reference/Core/Return) - return from a **GoSub** subroutine, or (twinBASIC) return a value and exit from a **Function** or **Property Get**
* [Select Case](/official/Reference/Core/Select-Case) - execute a code block selected by an expression
* [With](/official/Reference/Core/With) - bring a variable or expression into scope
* [Goto](/official/Reference/Core/GoTo), [GoSub ... Return](/official/Reference/Core/GoSub-Return) - transfer execution to another location
* [On ... GoTo](/official/Reference/Core/On-GoTo), [On ... GoSub](/official/Reference/Core/On-GoSub) - transfer execution to a location selected by an expression
* [Stop](/official/Reference/Core/Stop) - interrupt execution

Inline conditional functions --- expression-level alternatives to the **If...Then...Else** and **Select Case** statements above:

* [If](/official/Reference/VBA/Interaction/If) - evaluate an expression and return one of two values; only the chosen branch is evaluated (twinBASIC addition)
* [IIf](/official/Reference/VBA/Interaction/IIf) - evaluate an expression and return one of two values; both branches are always evaluated
* [Choose](/official/Reference/VBA/Interaction/Choose) - return one value from a list, selected by 1-based index
* [Switch](/official/Reference/VBA/Interaction/Switch) - return the value paired with the first **True** condition in a list of (condition, value) pairs

See also: 

* [End](/official/Reference/Core/End) - terminate execution.
* [On Error](/official/Reference/Core/On-Error), [Resume](/official/Reference/Core/Resume) - flow control for run-time errors (see [Error Handling](#error-handling))

## Error Handling

Statements:

* [On Error](/official/Reference/Core/On-Error) - specifies what to do when an error occurs
* [Resume](/official/Reference/Core/Resume) - resumes execution after an error has been caught
* [Error](/official/Reference/Core/Error) statement - simulates the occurrence of an error (legacy; prefer **Err.Raise**)

Procedures:

* [Err](/official/Reference/VBA/Information/Err) - returns the **ErrObject** describing the current run-time error state
* [Erl](/official/Reference/VBA/Information/Erl) - returns the line number where the most recent run-time error occurred
* [Error$, Error](/official/Reference/VBA/Conversion/Error) function - returns the error message that corresponds to a given error number
* [CVErr](/official/Reference/VBA/Conversion/CVErr) - wraps a numeric expression in a **Variant** of subtype **Error**
* [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) - register a callback that fires when an unhandled run-time error escapes the active error handler chain on the calling thread

## Variable Declaration

Statements:

* [Dim](/official/Reference/Core/Dim) - declare a typed scalar or array variable
* [Const](/official/Reference/Core/Const) - declare a constant
* [Public](/official/Reference/Core/Public) - declare a public variable in a class or module
* [Private](/official/Reference/Core/Private) - declare a private variable in a class or module
* [Protected](/official/Reference/Core/Protected) - (twinBASIC) declare a class member accessible within the class and its derived classes
* [Static](/official/Reference/Core/Static) - declare a a variable of static duration

## Variable Assignment and Modification

Statements:

- [Let](/official/Reference/Core/Let) - sets the value of a variable
- [Set](/official/Reference/Core/Set) - changes the object referred by the variable
- [New](/official/Reference/Core/New) - create a new instance of a class
- [LSet](/official/Reference/Core/LSet) - assigns a user-defined type, or left-aligns a string
- [RSet](/official/Reference/Core/RSet) - right-aligns a string

Operators:

- [Is](/official/Reference/Core/Is) - compares two object references for identity
- [IsNot](/official/Reference/Core/IsNot) - (twinBASIC) the logical inverse of **Is**

## Arrays

Statements:

* [ReDim](/official/Reference/Core/ReDim) - allocate or change the size of a dynamically-sized array
* [Erase](/official/Reference/Core/Erase) - fill a fixed-size array with default values, or invalidate a dynamic array

Procedures:

* [LBound](/official/Reference/VBA/Information/LBound) - smallest valid subscript for an array dimension
* [UBound](/official/Reference/VBA/Information/UBound) - largest valid subscript for an array dimension
* [IsArray](/official/Reference/VBA/Information/IsArray) - returns whether a variable is an array
* [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) - returns whether an array has been dimensioned

See also:

* [Dim](/official/Reference/Core/Dim) - allocate a scalar or array variable
* [Array](/official/Reference/VBA/Information/Array), [Filter](/official/Reference/VBA/Strings/Filter), [Join](/official/Reference/VBA/Strings/Join), [Split](/official/Reference/VBA/Strings/Split) - array helpers
* [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove), [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) - low-level **Variant**-array helpers (see [Memory and Pointers](#memory-and-pointers))

## File I/O

Statements:

- [Open](/official/Reference/Core/Open), [Close](/official/Reference/Core/Close) - open/close a file for I/O operations
- [Get](/official/Reference/Core/Get), [Put](/official/Reference/Core/Put) - read/write data from an open random access file
- [Line Input](/official/Reference/Core/Line-Input), [Print](/official/Reference/Core/Print) - read/write a line from/to an open text file
- [Input](/official/Reference/Core/Input), [Write](/official/Reference/Core/Write) - read/write data from an open sequential access file
- [Seek](/official/Reference/Core/Seek) - change the current access position in an open file
- [Lock](/official/Reference/Core/Lock), [Unlock](/official/Reference/Core/Unlock) - lock/unlock a range of records in an open file

Procedures:

* [Reset](/official/Reference/Core/Reset) - close all open disk files
* [Width](/official/Reference/VBA/FileSystem/Width) - set the limit for line lengths when printing
* [Input, Input$](/official/Reference/VBA/FileSystem/Input) - read a fixed number of characters from a sequential file
* [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) - read a fixed number of bytes from a sequential file
* [ChDir](/official/Reference/Core/ChDir), [ChDrive](/official/Reference/Core/ChDrive) - change the current working directory and disk drive
* [MkDir](/official/Reference/Core/MkDir), [RmDir](/official/Reference/Core/RmDir) - create/remove a directory on disk
* [Name](/official/Reference/Core/Name) - rename a file or directory on disk
* [SetAttr](/official/Reference/Core/SetAttr) - set attributes of a file on disk
* [FileCopy](/official/Reference/Core/FileCopy) - copy a file on disk
* [Kill](/official/Reference/Core/Kill) - delete a file from disk
* [SavePicture](/official/Reference/Core/SavePicture) - write a `Picture` or `Image` to a disk file
* [MacID](/official/Reference/VBA/Conversion/MacID) - convert a 4-character Mac file-type code (legacy)

## State Management

Procedures:

* [Load](/official/Reference/Core/Load), [Unload](/official/Reference/Core/Unload) - load/unload a form or control into memory
* [GetSetting](/official/Reference/VBA/Interaction/GetSetting), [SaveSetting](/official/Reference/VBA/Interaction/SaveSetting) - retrieve/store a string value from/to the system registry
* [GetAllSettings](/official/Reference/VBA/Interaction/GetAllSettings) - retrieve every key/value pair in a section of an application's registry entry
* [DeleteSetting](/official/Reference/VBA/Interaction/DeleteSetting) - remove value from the system registry

## Events

Statements:

* [RaiseEvent](/official/Reference/Core/RaiseEvent) - raise an event that may be handled by event handlers

Procedures:

* [RaiseEventByName](/official/Reference/VBA/Interaction/RaiseEventByName) - raise an event by name on an object, taking arguments as a **Variant** array
* [RaiseEventByName2](/official/Reference/VBA/Interaction/RaiseEventByName2) - raise an event by name on an object, taking a variable-length argument list
* [RuntimeCreateGetMessageHook](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook) - create an **IGetMessageHook** for filtering Windows messages destined for a window and (optionally) its descendants

See also

* [Event](/official/Reference/Core/Event) - declare an event
* [IGetMessageHook interface](/official/Reference/VBA/HiddenModule/#igetmessagehook-interface) - subscribe a callback to a Windows message type, then start/stop delivery

## User Dialogs

Procedures:

* [MsgBox](/official/Reference/VBA/Interaction/MsgBox) - display a modal message dialog and return the button the user clicked
* [InputBox](/official/Reference/VBA/Interaction/InputBox) - prompt the user for a line of text and return what was entered
* [Beep](/official/Reference/VBA/Interaction/Beep) - sound a system beep

## Process Control

Procedures:

* [Shell](/official/Reference/VBA/Interaction/Shell) - run another program asynchronously and return its task ID
* [AppActivate](/official/Reference/VBA/Interaction/AppActivate) - change the focus to, or activate, a named window
* [SendKeys](/official/Reference/VBA/Interaction/SendKeys) - send keystrokes to the active window
* [DoEvents](/official/Reference/VBA/Interaction/DoEvents) - yield control to the message loop so pending events can be processed

## COM and Automation

Procedures:

* [CreateObject](/official/Reference/VBA/Interaction/CreateObject) - create a new instance of a COM/Automation object
* [GetObject](/official/Reference/VBA/Interaction/GetObject) - obtain a reference to an Automation object loaded from a file or already running
* [CallByName](/official/Reference/VBA/Interaction/CallByName) - invoke a method or property on an object dynamically by name
* [CallByDispId](/official/Reference/VBA/Interaction/CallByDispId) - invoke a method or property on an object dynamically by IDispatch dispatch ID (twinBASIC addition)
* [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) - generate a fresh GUID and return it as a registry-formatted string
* [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj) - reinterpret an object as another COM interface (a typed `QueryInterface`)
* [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet), [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) - assign a raw object pointer to an **Object** variable, with or without addref
* [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) - increment the COM reference count of the object at a given address

See also:

* [ObjPtr](/official/Reference/VBA/Information/ObjPtr) - return the COM-identity address of an object (see [Memory and Pointers](#memory-and-pointers))

## Command Line and Environment

Procedures:

* [Command$, Command](/official/Reference/VBA/Interaction/Command) - return the command-line arguments passed to the program
* [Environ$, Environ](/official/Reference/VBA/Interaction/Environ) - return the value of a process environment variable

## Colours

Procedures:

* [RGB](/official/Reference/VBA/Information/RGB) - build an RGB colour value from red, green, and blue components
* [RGBA](/official/Reference/VBA/Information/RGBA) - build an RGBA colour value from red, green, blue, and alpha components
* [RGB_R](/official/Reference/VBA/Information/RGB_R), [RGB_G](/official/Reference/VBA/Information/RGB_G), [RGB_B](/official/Reference/VBA/Information/RGB_B), [RGBA_A](/official/Reference/VBA/Information/RGBA_A) - extract individual colour components
* [QBColor](/official/Reference/VBA/Information/QBColor) - return the RGB colour value for a QuickBASIC colour index
* [TranslateColor](/official/Reference/VBA/Information/TranslateColor) - translate an OLE colour value to a plain RGB colour value

## Mathematics

Procedures:

* [Atn](/official/Reference/VBA/Math/Atn), [Cos](/official/Reference/VBA/Math/Cos), [Sin](/official/Reference/VBA/Math/Sin), [Tan](/official/Reference/VBA/Math/Tan) - trigonometric functions
* [Sqr](/official/Reference/VBA/Math/Sqr) - take a square root
* [Exp](/official/Reference/VBA/Math/Exp) - calculate an exponential with base $e$
* [Log](/official/Reference/VBA/Math/Log) - calculate the natural (base $e$) logarithm of a number
* [Sgn](/official/Reference/VBA/Math/Sgn) - return the sign of a number
* [Abs](/official/Reference/VBA/Math/Abs) - returns the absolute value of a number
* [Round](/official/Reference/VBA/Math/Round) - round the number to a given number of decimal places
* [Rnd](/official/Reference/VBA/Math/Rnd) - generate a random number in the range [0.0, 1.0)
* [Randomize](/official/Reference/VBA/Math/Randomize) - seed the random number generator
* [Partition](/official/Reference/VBA/Interaction/Partition) - return a string label identifying which of a series of equal-width numeric ranges a value falls into (histogram-style bucketing)

See also:

* [Fix](/official/Reference/VBA/Conversion/Fix), [Int](/official/Reference/VBA/Conversion/Int) - extract the integer portion of a number
* [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr) - coerce to integer types (rounds half-to-even)

## Type Conversion

Procedures that coerce an expression to a specific type:

* [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CCur](/official/Reference/VBA/Conversion/CCur), [CDbl](/official/Reference/VBA/Conversion/CDbl), [CDec](/official/Reference/VBA/Conversion/CDec), [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr), [CSng](/official/Reference/VBA/Conversion/CSng) - coerce to a specific numeric type
* [CStr](/official/Reference/VBA/Conversion/CStr) - coerce to **String** (locale-aware; preferred over [Str](/official/Reference/VBA/Conversion/Str))
* [CVar](/official/Reference/VBA/Conversion/CVar) - coerce to **Variant**
* [CDate](/official/Reference/VBA/Conversion/CDate) - coerce to **Date**; [CVDate](/official/Reference/VBA/Conversion/CVDate) returns a **Variant** of subtype **Date** (legacy)
* [CType](/official/Reference/VBA/Conversion/CType) - explicit cast operator with a caller-supplied target type (twinBASIC extension)

Procedures that convert between numbers and strings:

* [Hex$, Hex](/official/Reference/VBA/Conversion/Hex) - hexadecimal string representation of a number
* [Oct$, Oct](/official/Reference/VBA/Conversion/Oct) - octal string representation of a number
* [Str$, Str](/official/Reference/VBA/Conversion/Str) - decimal string representation of a number
* [Val](/official/Reference/VBA/Conversion/Val) - parse a string into a **Double**
* [ValDec](/official/Reference/VBA/Conversion/ValDec) - parse a string into a **Decimal**

Procedures that extract the integer portion of a number:

* [Fix](/official/Reference/VBA/Conversion/Fix) - truncates toward zero
* [Int](/official/Reference/VBA/Conversion/Int) - rounds toward negative infinity

Other:

* [Nz](/official/Reference/VBA/Conversion/Nz) - replace **Null** with a default value

See also:

* [Format$, Format](/official/Reference/VBA/Strings/Format) - locale-aware number formatting
* [FormatNumber](/official/Reference/VBA/Strings/FormatNumber), [FormatPercent](/official/Reference/VBA/Strings/FormatPercent), [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency), [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - typed formatters
* [CVErr](/official/Reference/VBA/Conversion/CVErr), [Error$, Error](/official/Reference/VBA/Conversion/Error) function - error helpers (see [Error Handling](#error-handling))

## Type Inspection

Procedures that name or identify a variable's subtype:

* [VarType](/official/Reference/VBA/Information/VarType) - returns the **VbVarType** code identifying a variable's subtype
* [TypeName](/official/Reference/VBA/Information/TypeName) - returns the name of a variable's data type as a **String**

Procedures that test a value's state or subtype:

* [IsDate](/official/Reference/VBA/Information/IsDate) - returns whether an expression can be evaluated as a date
* [IsEmpty](/official/Reference/VBA/Information/IsEmpty) - returns whether a **Variant** is uninitialised
* [IsError](/official/Reference/VBA/Information/IsError) - returns whether an expression is an error subtype
* [IsMissing](/official/Reference/VBA/Information/IsMissing) - returns whether an optional argument was supplied
* [IsNull](/official/Reference/VBA/Information/IsNull) - returns whether a variable contains a **Null** value
* [IsNumeric](/official/Reference/VBA/Information/IsNumeric) - returns whether an expression can be evaluated as a number
* [IsObject](/official/Reference/VBA/Information/IsObject) - returns whether a variable refers to an object

See also:

* [IsArray](/official/Reference/VBA/Information/IsArray), [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) - in [Arrays](#arrays)

## String Handling

Statements that modify strings:

* [Mid =](/official/Reference/Core/Mid-equals), [MidB =](/official/Reference/Core/MidB-equals) - assign to or replace characters or wide/narrow string sections

Procedures that check properties of strings:

* [Len](/official/Reference/VBA/Strings/Len), [LenB](/official/Reference/VBA/Strings/Len) - the length of a string
* [Asc](/official/Reference/VBA/Strings/Asc), [AscB](/official/Reference/VBA/Strings/Asc), [AscW](/official/Reference/VBA/Strings/Asc) - returns the character code of the first letter in a string
* [StrComp](/official/Reference/VBA/Strings/StrComp) - compares two strings
* [InStr$](/official/Reference/VBA/Strings/InStr), [InStrB](/official/Reference/VBA/Strings/InStr), [InStr](/official/Reference/VBA/Strings/InStr) - finds the position of a given substring in a string

Procedures that create strings:

* [Chr\$](/official/Reference/VBA/Strings/Chr), [Chr](/official/Reference/VBA/Strings/Chr), [ChrB\$](/official/Reference/VBA/Strings/Chr), [ChrB](/official/Reference/VBA/Strings/Chr), [ChrW\$](/official/Reference/VBA/Strings/Chr), [ChrW](/official/Reference/VBA/Strings/Chr) - returns the character having a given code
* [Space$](/official/Reference/VBA/Strings/Space), [Space](/official/Reference/VBA/Strings/Space) - return a string of spaces
* [String\$](/official/Reference/VBA/Strings/String), [String](/official/Reference/VBA/Strings/String) - return a string of specified characters

Procedures that return modified strings:

* [Left\$](/official/Reference/VBA/Strings/Left), [Left](/official/Reference/VBA/Strings/Left), [LeftB$](/official/Reference/VBA/Strings/Left), [LeftB](/official/Reference/VBA/Strings/Left) - extract a left substring of a string
* [Mid$](/official/Reference/VBA/Strings/Mid), [Mid](/official/Reference/VBA/Strings/Mid), [MidB\$](/official/Reference/VBA/Strings/Mid), [MidB](/official/Reference/VBA/Strings/Mid) - extract a substring of a string
* [Right\$](/official/Reference/VBA/Strings/Right), [Right](/official/Reference/VBA/Strings/Right), [RightB\$](/official/Reference/VBA/Strings/Right), [RightB](/official/Reference/VBA/Strings/Right) - extract a right substring of a string
* [LTrim\$](/official/Reference/VBA/Strings/LTrim), [LTrim](/official/Reference/VBA/Strings/LTrim), [RTrim\$](/official/Reference/VBA/Strings/RTrim), [RTrim](/official/Reference/VBA/Strings/RTrim) - removes leading/trailing spaces from a string
* [Trim$](/official/Reference/VBA/Strings/Trim), [Trim](/official/Reference/VBA/Strings/Trim) - removes leading and trailing spaces from a string
* [StrReverse](/official/Reference/VBA/Strings/StrReverse) - reverses the order of characters of a string
* [LCase\$](/official/Reference/VBA/Strings/LCase), [LCase](/official/Reference/VBA/Strings/LCase), [UCase\$](/official/Reference/VBA/Strings/UCase), [UCase](/official/Reference/VBA/Strings/UCase) - capitalizes or lowercases a string
* [StrConv](/official/Reference/VBA/Strings/StrConv) - converts the string to a specified format
* [Join](/official/Reference/VBA/Strings/Join) - concatenates a string array using a given delimiter
* [Split](/official/Reference/VBA/Strings/Split) - splits a string into a string array
* [Replace](/official/Reference/VBA/Strings/Replace) - replaces substrings in a string
* [Filter](/official/Reference/VBA/Strings/Filter) - filters a string array into a subset according to criteria
* [InStrRev](/official/Reference/VBA/Strings/InStrRev) - returns the position of a given substring in a string, searching from the end
* [Format\$](/official/Reference/VBA/Strings/Format), [Format](/official/Reference/VBA/Strings/Format) - format a numeric expression in a specific way
* [FormatNumber](/official/Reference/VBA/Strings/FormatNumber) - formats an expression as a numeric string
* [FormatPercent](/official/Reference/VBA/Strings/FormatPercent) - formats an expression as a percent string

Procedures that convert between numbers and strings:

* [CStr](/official/Reference/VBA/Conversion/CStr) - coerce a value to **String** (locale-aware)
* [Hex$, Hex](/official/Reference/VBA/Conversion/Hex) - hexadecimal string representation of a number
* [Oct$, Oct](/official/Reference/VBA/Conversion/Oct) - octal string representation of a number
* [Str$, Str](/official/Reference/VBA/Conversion/Str) - decimal string representation of a number
* [Val](/official/Reference/VBA/Conversion/Val) - parse a string into a **Double**
* [ValDec](/official/Reference/VBA/Conversion/ValDec) - parse a string into a **Decimal**

See also:

* [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) - format an expression as a currency string
* [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - formats an expression as a date/time string

## Date and Time

Procedures:

* [Date](/official/Reference/Core/Date), [Time](/official/Reference/Core/Time) - set the current date and time
* [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - formats an expression as a date/time string
* [MonthName](/official/Reference/VBA/Strings/MonthName) - returns the name of the specified month
* [WeekdayName](/official/Reference/VBA/Strings/WeekdayName) - returns the name of the specified day of the week

See also:

* [CDate](/official/Reference/VBA/Conversion/CDate), [CVDate](/official/Reference/VBA/Conversion/CVDate) - coerce an expression to **Date** or **Variant** (subtype **Date**)

## Introspection

Procedures:

* [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) - returns the name of the current project
* [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) - returns the name of the current component (module or class)
* [CurrentComponentCLSID](/official/Reference/VBA/Compilation/CurrentComponentCLSID) - returns the Class ID (CLSID) of the current class
* [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) - returns the name of the procedure in which the function is called
* [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) - returns the full path of the current source file
* [ProcessorArchitecture](/official/Reference/VBA/Compilation/ProcessorArchitecture) - returns the processor architecture of the running application
* [CompilerVersion](/official/Reference/VBA/Compilation/CompilerVersion) - returns the twinBASIC compiler version number
* [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId), [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid), [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid), [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) - return the COM ProgID/CLSID/IID/event IID of a declared type, resolved at compile time
* [GetDeclaredMinEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue), [GetDeclaredMaxEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue) - return the smallest/largest value of a declared enumeration, resolved at compile time

See also:

* [IMEStatus](/official/Reference/VBA/Information/IMEStatus) - the current Input Method Editor mode (East Asian Windows only)

## Memory and Pointers

Procedures:

* [ObjPtr](/official/Reference/VBA/Information/ObjPtr) - return the COM-identity address of an object
* [StrPtr](/official/Reference/VBA/Information/StrPtr) - return the address of the underlying buffer of a **String**
* [VarPtr](/official/Reference/VBA/Information/VarPtr) - return the address of a variable
* [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem), [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem) - allocate/release native memory blocks
* [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1), [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2), [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4), [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8), [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) - read N bytes from a memory address into a typed variable
* [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1), [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2), [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4), [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8), [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) - write a typed value of N bytes to a memory address
* [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes), [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) - copy a block of bytes; the *Zero* form clears the source after the copy

See also:

* [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove), [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) - low-level **Variant**-array helpers (see [Arrays](#arrays))
* [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet), [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref), [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) - object-pointer assignment and refcounting (see [COM and Automation](#com-and-automation))

## Threading and Atomics

Procedures:

* [InterlockedExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer) - atomically exchange a pointer-sized value
* [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer) - atomically compare-and-swap a pointer-sized value
* [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32), [InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64) - atomic 32-bit / 64-bit compare-and-swap
* [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32), [InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32) - atomic 32-bit increment / decrement

See also:

* [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) - per-thread error trap (see [Error Handling](#error-handling))

## Inline Assembly and Codegen

Procedures:

* [Emit](/official/Reference/VBA/HiddenModule/Emit) - inject custom **Byte** values into the codegen of the enclosing procedure
* [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) - inject custom typed values into the codegen of the enclosing procedure (size inferred from each value's data type)
* [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset) - return the stack-frame offset of a variable, resolved at compile time
* [StackArgsSize](/official/Reference/VBA/HiddenModule/StackArgsSize) - return the total size of stack-passed arguments to the enclosing procedure
* [UnprotectedAccess](/official/Reference/VBA/HiddenModule/UnprotectedAccess) - return an object reference that bypasses access checks on private members

See also:

* [Direct Assembly Insertion](/official/Features/Advanced/Assembly) - the `Naked` modifier and worked examples

## Expression Evaluation

Procedures:

* [Eval](/official/Reference/VBA/HiddenModule/Eval) - compile and evaluate a twinBASIC expression supplied as a string

See also:

* [ExpressionService module](/official/Reference/VBA/TbExpressionService/) - the underlying engine, when more control over binders or compiled-expression reuse is needed

## Financial

Procedures:

* [DDB](/official/Reference/VBA/Financial/DDB) - depreciation of an asset via the Double-Declining Balance method
* [FV](/official/Reference/VBA/Financial/FV) - future value of an investment with constant deposits and interest
* [Pmt](/official/Reference/VBA/Financial/Pmt) - payment for a loan with constant payments and interest
* [IPmt](/official/Reference/VBA/Financial/IPmt) - interest payment for a loan with constant payments and interest
* [PPmt](/official/Reference/VBA/Financial/PPmt) - principal payment for a loan with constant payments and interest 
* [SYD](/official/Reference/VBA/Financial/SYD) - sum-of-years' digits depreciation of an asset
* [SLN](/official/Reference/VBA/Financial/SLN) - straight-line depreciation of an asset in one period
* [PV](/official/Reference/VBA/Financial/PV) - present value of investment
* [IRR](/official/Reference/VBA/Financial/IRR) - internal rate of return for a series of cash flows
* [MIRR](/official/Reference/VBA/Financial/MIRR) - modified internal rate of return for a series of cash flow
* [Rate](/official/Reference/VBA/Financial/Rate) - interest rate per period of an annuity
* [NPV](/official/Reference/VBA/Financial/NPV) - net present value of an investment
* [NPer](/official/Reference/VBA/Financial/NPer) - number of periods for an investment with constant deposits and interest
* [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) - format an expression as a currency string

## Unit Testing

Modules of the [Assert](/official/Reference/Assert/) package:

* [Exact](/official/Reference/Assert/Exact) - strictest comparison semantics; datatypes must match and no implicit conversions happen
* [Strict](/official/Reference/Assert/Strict) - case-sensitive strings, otherwise standard twinBASIC equality
* [Permissive](/official/Reference/Assert/Permissive) - case-insensitive strings, otherwise standard twinBASIC equality

Each module exposes the same fifteen assertions: **Succeed**, **Fail**, **Inconclusive**, **AreEqual** / **AreNotEqual**, **AreSame** / **AreNotSame**, **IsTrue** / **IsFalse**, **IsNothing** / **IsNotNothing**, **IsNull** / **IsNotNull**, **SequenceEquals** / **NotSequenceEquals**. All are tagged `[DebugOnly(True)]` and compile out of release builds.

## Deprecated

Statements:

* [DefBool, DefByte, DefInt, DefLng, DefCur, DefSng, DefDbl, DefDec, DefDate, DefStr, DefObj, DefVar](/official/Reference/Core/Deftype) - used to give implicit types to single-letter variables
