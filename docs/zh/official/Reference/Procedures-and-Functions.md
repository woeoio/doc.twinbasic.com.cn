---
title: Procedures and Functions
parent: Reference Section
nav_order: 3
permalink: /Reference/Procedures-and-Functions
---

# Procedures and Functions

## A

- [Abs](/official/Reference/VBA/Math/Abs) -- returns the absolute value of a number
- [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem) -- allocates a block of native memory and returns its address
- [AppActivate](/official/Reference/VBA/Interaction/AppActivate) -- activates an application window
- [Array](/official/Reference/VBA/Information/Array) -- creates a **Variant** array from a comma-separated list of values, or destructures one when used on the left of an assignment
- [Asc, AscB, AscW](/official/Reference/VBA/Strings/Asc) -- returns the character code of the first letter in a string
- [Atn](/official/Reference/VBA/Math/Atn) -- returns the arctangent of a number

## B

- [Beep](/official/Reference/VBA/Interaction/Beep) -- sounds a tone through the computer’s speaker

## C

- [Calendar](/official/Reference/VBA/DateTime/Calendar) -- returns or sets the calendar type (Gregorian or Hijri)
- [CallByDispId](/official/Reference/VBA/Interaction/CallByDispId) -- invokes a method or property on an object dynamically by IDispatch dispatch ID
- [CallByName](/official/Reference/VBA/Interaction/CallByName) -- invokes a method or property on an object dynamically by name
- [CBool](/official/Reference/VBA/Conversion/CBool) -- coerces an expression to a **Boolean**
- [CByte](/official/Reference/VBA/Conversion/CByte) -- coerces an expression to a **Byte**
- [CCur](/official/Reference/VBA/Conversion/CCur) -- coerces an expression to a **Currency**
- [CDate](/official/Reference/VBA/Conversion/CDate) -- coerces an expression to a **Date**
- [CDbl](/official/Reference/VBA/Conversion/CDbl) -- coerces an expression to a **Double**
- [CDec](/official/Reference/VBA/Conversion/CDec) -- coerces an expression to a **Decimal**
- [ChDir](/official/Reference/Core/ChDir) -- changes the current directory or folder
- [ChDrive](/official/Reference/Core/ChDrive) -- changes the current drive
- [CurDir](/official/Reference/Core/CurDir) -- returns the current path
- [Choose](/official/Reference/VBA/Interaction/Choose) -- returns one value from a list, selected by 1-based index
- [Chr$, Chr, ChrB$, ChrB, ChrW$, ChrW](/official/Reference/VBA/Strings/Chr) -- returns the character associated with a given character code
- [CInt](/official/Reference/VBA/Conversion/CInt) -- coerces an expression to an **Integer**
- [CLng](/official/Reference/VBA/Conversion/CLng) -- coerces an expression to a **Long**
- [CLngLng](/official/Reference/VBA/Conversion/CLngLng) -- coerces an expression to a **LongLong**
- [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr) -- coerces an expression to a **LongPtr**
- [Command$, Command](/official/Reference/VBA/Interaction/Command) -- returns the command-line arguments passed to the program
- [CompilerVersion](/official/Reference/VBA/Compilation/CompilerVersion) -- returns the twinBASIC compiler version number
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) -- converts an icon picture to a bitmap picture
- [Cos](/official/Reference/VBA/Math/Cos) -- returns the cosine of an angle
- [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) -- generates a fresh GUID and returns it as a registry-formatted string
- [CreateObject](/official/Reference/VBA/Interaction/CreateObject) -- creates a new instance of a COM/Automation object
- [CreateStdPictureFromHandle](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle) -- wraps a GDI bitmap or icon handle in an **stdole.StdPicture**
- [CSng](/official/Reference/VBA/Conversion/CSng) -- coerces an expression to a **Single**
- [CStr](/official/Reference/VBA/Conversion/CStr) -- coerces an expression to a **String**
- [CType](/official/Reference/VBA/Conversion/CType) -- generic type conversion supporting the **CType(Of *type*)** cast operator
- [CurrentComponentCLSID](/official/Reference/VBA/Compilation/CurrentComponentCLSID) -- returns the Class ID (CLSID) of the current class
- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) -- returns the name of the current component (module or class)
- [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) -- returns the name of the procedure in which the function is called
- [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) -- returns the name of the current project
- [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) -- returns the full path of the current source file
- [CVar](/official/Reference/VBA/Conversion/CVar) -- coerces an expression to a **Variant**
- [CVDate](/official/Reference/VBA/Conversion/CVDate) -- coerces an expression to a **Variant** of subtype **Date**
- [CVErr](/official/Reference/VBA/Conversion/CVErr) -- coerces a numeric expression to a **Variant** of subtype **Error**

## D

- [Date](/official/Reference/Core/Date) -- sets or returns the current system date
- [DateAdd](/official/Reference/VBA/DateTime/DateAdd) -- adds a time interval to a date
- [DateDiff](/official/Reference/VBA/DateTime/DateDiff) -- returns the number of time intervals between two dates
- [DatePart](/official/Reference/VBA/DateTime/DatePart) -- returns a specified part of a given date
- [DateSerial](/official/Reference/VBA/DateTime/DateSerial) -- returns a date for a specified year, month, and day
- [DateValue](/official/Reference/VBA/DateTime/DateValue) -- converts a string to a date
- [Day](/official/Reference/VBA/DateTime/Day) -- returns the day of the month from a date value
- [DDB](/official/Reference/VBA/Financial/DDB) -- returns the depreciation of an asset via the double-declining balance method
- [DeleteSetting](/official/Reference/VBA/Interaction/DeleteSetting) -- deletes a section or key setting from an application’s entry in the Windows registry
- [Dir](/official/Reference/Core/Dir) -- returns the name of a file, directory, folder, or volume label that matches a pattern
- [DoEvents](/official/Reference/VBA/Interaction/DoEvents) -- yields control to the message loop so pending events can be processed

## E

- [Emit](/official/Reference/VBA/HiddenModule/Emit) -- injects custom **Byte** values into the codegen stream of the enclosing procedure
- [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) -- injects custom typed values into the codegen stream of the enclosing procedure
- [Environ$, Environ](/official/Reference/VBA/Interaction/Environ) -- returns the value of a process environment variable
- [EOF](/official/Reference/VBA/FileSystem/EOF) -- returns whether the end of a file has been reached
- [Erl](/official/Reference/VBA/Information/Erl) -- returns the line number where the most recent run-time error occurred
- [Err](/official/Reference/VBA/Information/Err) -- returns the **ErrObject** describing the current run-time error state
- [Error$, Error](/official/Reference/VBA/Conversion/Error) -- returns the error message that corresponds to a given error number
- [Eval](/official/Reference/VBA/HiddenModule/Eval) -- compiles and evaluates a twinBASIC expression supplied as a string
- [Exp](/official/Reference/VBA/Math/Exp) -- returns *e* (the base of natural logarithms) raised to a power

## F

- [FileAttr](/official/Reference/VBA/FileSystem/FileAttr) -- returns the file mode for files opened with the **Open** statement
- [FileCopy](/official/Reference/Core/FileCopy) -- copies a file
- [FileDateTime](/official/Reference/VBA/FileSystem/FileDateTime) -- returns the date and time when a file was created or last modified
- [FileLen](/official/Reference/VBA/FileSystem/FileLen) -- returns the length of a file in bytes
- [Filter](/official/Reference/VBA/Strings/Filter) -- filters a string array into a subset according to criteria
- [Fix](/official/Reference/VBA/Conversion/Fix) -- returns the integer portion of a number, truncating toward zero
- [Format$, Format](/official/Reference/VBA/Strings/Format) -- formats an expression according to instructions contained in a format expression
- [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) -- formats an expression as a currency value
- [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) -- formats an expression as a date or time
- [FormatNumber](/official/Reference/VBA/Strings/FormatNumber) -- formats an expression as a number
- [FormatPercent](/official/Reference/VBA/Strings/FormatPercent) -- formats an expression as a percentage
- [FreeFile](/official/Reference/VBA/FileSystem/FreeFile) -- returns the next file number available for use by the **Open** statement
- [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem) -- frees memory allocated with **AllocMem**
- [FV](/official/Reference/VBA/Financial/FV) -- returns the future value of an annuity based on periodic fixed payments and a fixed interest rate

## G

- [GetAllSettings](/official/Reference/VBA/Interaction/GetAllSettings) -- returns every key/value pair in a section of an application's registry entry
- [GetAttr](/official/Reference/VBA/FileSystem/GetAttr) -- returns the attributes of a file or directory
- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1) -- reads one byte from a memory address into a **Byte** variable
- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2) -- reads two bytes from a memory address into an **Integer** variable
- [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4) -- reads four bytes from a memory address into a **Long** variable
- [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8) -- reads eight bytes from a memory address into a **Currency** variable
- [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) -- reads a pointer-sized value from a memory address into a **LongPtr** variable
- [GetObject](/official/Reference/VBA/Interaction/GetObject) -- returns a reference to an Automation object loaded from a file or already running
- [GetSetting](/official/Reference/VBA/Interaction/GetSetting) -- returns a string key setting value from an application’s entry in the Windows registry

## H

- [Hex$, Hex](/official/Reference/VBA/Conversion/Hex) -- returns a string representing the hexadecimal value of a number
- [Hour](/official/Reference/VBA/DateTime/Hour) -- returns the hour of the day from a time value

## I

- [If](/official/Reference/VBA/Interaction/If) -- evaluates an expression and returns one of two values, with short-circuit evaluation
- [IIf](/official/Reference/VBA/Interaction/IIf) -- evaluates an expression and returns one of two values; both branches are always evaluated
- [IMEStatus](/official/Reference/VBA/Information/IMEStatus) -- returns the status of the Input Method Editor
- [Input, Input$](/official/Reference/VBA/FileSystem/Input) -- reads a fixed number of characters from an open sequential file
- [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) -- reads a fixed number of bytes from an open sequential file
- [InputBox](/official/Reference/VBA/Interaction/InputBox) -- prompts the user for a line of text and returns what was entered
- [InStr$, InStrB, InStr](/official/Reference/VBA/Strings/InStr) -- returns the position of one string within another
- [InStrRev](/official/Reference/VBA/Strings/InStrRev) -- returns the position of one string within another, searching from the end
- [Int](/official/Reference/VBA/Conversion/Int) -- returns the integer portion of a number, rounding toward negative infinity
- [IPmt](/official/Reference/VBA/Financial/IPmt) -- returns the interest payment for a given period of an annuity
- [IRR](/official/Reference/VBA/Financial/IRR) -- returns the internal rate of return for a series of periodic cash flows
- [IsArray](/official/Reference/VBA/Information/IsArray) -- returns whether a variable is an array
- [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) -- returns whether an array has been dimensioned
- [IsDate](/official/Reference/VBA/Information/IsDate) -- returns whether an expression can be evaluated as a date
- [IsEmpty](/official/Reference/VBA/Information/IsEmpty) -- returns whether a **Variant** is uninitialised
- [IsError](/official/Reference/VBA/Information/IsError) -- returns whether an expression is an error subtype
- [IsMissing](/official/Reference/VBA/Information/IsMissing) -- returns whether an optional argument was supplied
- [IsNull](/official/Reference/VBA/Information/IsNull) -- returns whether a variable contains a **Null** value
- [IsNumeric](/official/Reference/VBA/Information/IsNumeric) -- returns whether an expression can be evaluated as a number
- [IsObject](/official/Reference/VBA/Information/IsObject) -- returns whether a variable refers to an object

## J

- [Join](/official/Reference/VBA/Strings/Join) -- concatenates a string array using a given delimiter

## K

- [Kill](/official/Reference/Core/Kill) -- deletes files from a disk

## L

- [LBound](/official/Reference/VBA/Information/LBound) -- returns the smallest valid subscript for a dimension of an array
- [LCase$, LCase](/official/Reference/VBA/Strings/LCase) -- returns a string converted to lowercase
- [Left$, Left, LeftB$, LeftB](/official/Reference/VBA/Strings/Left) -- returns the leftmost characters from a string
- [Len, LenB](/official/Reference/VBA/Strings/Len) -- returns the length of a string, or the storage size of a variable
- [Load](/official/Reference/Core/Load) -- loads an object (typically a form) into memory without showing it
- [Loc](/official/Reference/VBA/FileSystem/Loc) -- returns the current read/write position within an open file
- [LOF](/official/Reference/VBA/FileSystem/LOF) -- returns the size, in bytes, of an open file
- [Log](/official/Reference/VBA/Math/Log) -- returns the natural (base *e*) logarithm of a number
- [LTrim$, LTrim](/official/Reference/VBA/Strings/LTrim) -- removes leading spaces from a string

## M

- [MacID](/official/Reference/VBA/Conversion/MacID) -- on the Macintosh, converts a 4-character constant to a value usable by **Dir**, **Kill**, **Shell**, or **AppActivate**
- [Mid$, Mid, MidB$, MidB](/official/Reference/VBA/Strings/Mid) -- returns a substring of a string
- [Minute](/official/Reference/VBA/DateTime/Minute) -- returns the minute of the hour from a time value
- [MIRR](/official/Reference/VBA/Financial/MIRR) -- returns the modified internal rate of return for a series of periodic cash flows
- [MkDir](/official/Reference/Core/MkDir) -- creates a new directory or folder
- [Month](/official/Reference/VBA/DateTime/Month) -- returns the month of the year from a date value
- [MonthName](/official/Reference/VBA/Strings/MonthName) -- returns the name of the specified month
- [MsgBox](/official/Reference/VBA/Interaction/MsgBox) -- displays a modal message dialog and returns the button the user clicked

## N

- [Name](/official/Reference/Core/Name) -- renames a disk file, directory, or folder
- [NPer](/official/Reference/VBA/Financial/NPer) -- returns the number of periods for an annuity based on periodic fixed payments and a fixed interest rate
- [NPV](/official/Reference/VBA/Financial/NPV) -- returns the net present value of an investment based on a series of periodic cash flows and a discount rate
- [Now](/official/Reference/Core/Now) -- returns the current system date and time
- [Nz](/official/Reference/VBA/Conversion/Nz) -- replaces a **Null** value with a specified replacement value

## O

- [ObjPtr](/official/Reference/VBA/Information/ObjPtr) -- returns the COM-identity address of an object
- [Oct$, Oct](/official/Reference/VBA/Conversion/Oct) -- returns a string representing the octal value of a number

## P

- [Partition](/official/Reference/VBA/Interaction/Partition) -- returns a string identifying the range a number falls into
- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray) -- serialises an **IPicture** into a **Byte** array
- [Pmt](/official/Reference/VBA/Financial/Pmt) -- returns the payment for an annuity based on periodic fixed payments and a fixed interest rate
- [PPmt](/official/Reference/VBA/Financial/PPmt) -- returns the principal payment for a given period of an annuity
- [ProcessorArchitecture](/official/Reference/VBA/Compilation/ProcessorArchitecture) -- returns the processor architecture of the running application
- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1) -- writes one byte to a memory address
- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2) -- writes two bytes to a memory address
- [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4) -- writes four bytes to a memory address
- [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8) -- writes eight bytes to a memory address
- [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) -- writes a pointer-sized value to a memory address
- [PV](/official/Reference/VBA/Financial/PV) -- returns the present value of an annuity based on periodic fixed payments and a fixed interest rate

## Q

- [QBColor](/official/Reference/VBA/Information/QBColor) -- returns the RGB colour value for a QuickBASIC colour index

## R

- [RaiseEventByName](/official/Reference/VBA/Interaction/RaiseEventByName) -- raises an event by name on an object, taking arguments as a **Variant** array
- [RaiseEventByName2](/official/Reference/VBA/Interaction/RaiseEventByName2) -- raises an event by name on an object, taking a variable-length argument list
- [Randomize](/official/Reference/VBA/Math/Randomize) -- initializes the random-number generator
- [Rate](/official/Reference/VBA/Financial/Rate) -- returns the interest rate per period for an annuity
- [Replace](/official/Reference/VBA/Strings/Replace) -- replaces a substring within a string with another substring
- [Reset](/official/Reference/VBA/FileSystem/Reset) -- closes all disk files opened by using the **Open** statement
- [RGB](/official/Reference/VBA/Information/RGB) -- builds an RGB colour value from red, green, and blue components
- [RGBA](/official/Reference/VBA/Information/RGBA) -- builds an RGBA colour value from red, green, blue, and alpha components
- [RGBA_A](/official/Reference/VBA/Information/RGBA_A) -- returns the alpha component of an RGBA colour value
- [RGB_B](/official/Reference/VBA/Information/RGB_B) -- returns the blue component of an RGB colour value
- [RGB_G](/official/Reference/VBA/Information/RGB_G) -- returns the green component of an RGB colour value
- [RGB_R](/official/Reference/VBA/Information/RGB_R) -- returns the red component of an RGB colour value
- [Right$, Right, RightB$, RightB](/official/Reference/VBA/Strings/Right) -- returns the rightmost characters from a string
- [RmDir](/official/Reference/Core/RmDir) -- removes an existing directory or folder
- [Rnd](/official/Reference/VBA/Math/Rnd) -- returns a pseudo-random number in the range [0.0, 1.0)
- [Round](/official/Reference/VBA/Math/Round) -- rounds a number to a specified number of decimal places
- [RTrim$, RTrim](/official/Reference/VBA/Strings/RTrim) -- removes trailing spaces from a string

## S

- [SavePicture](/official/Reference/Core/SavePicture) -- saves a graphic from a **Picture** or **Image** to a file
- [SaveSetting](/official/Reference/VBA/Interaction/SaveSetting) -- saves or creates an application entry in the application’s entry in the Windows registry
- [Second](/official/Reference/VBA/DateTime/Second) -- returns the second of the minute from a time value
- [Seek](/official/Reference/VBA/FileSystem/Seek) -- returns or sets the read/write position within an open file
- [SendKeys](/official/Reference/VBA/Interaction/SendKeys) -- sends keystrokes to the active window
- [SetAttr](/official/Reference/VBA/FileSystem/SetAttr) -- sets attribute information for a file
- [Sgn](/official/Reference/VBA/Math/Sgn) -- returns a value indicating the sign of a number
- [Shell](/official/Reference/VBA/Interaction/Shell) -- runs another program asynchronously and returns its task ID
- [Sin](/official/Reference/VBA/Math/Sin) -- returns the sine of an angle
- [SLN](/official/Reference/VBA/Financial/SLN) -- returns the straight-line depreciation of an asset for a single period
- [Space$, Space](/official/Reference/VBA/Strings/Space) -- returns a string of spaces
- [Split](/official/Reference/VBA/Strings/Split) -- splits a string into a string array
- [Sqr](/official/Reference/VBA/Math/Sqr) -- returns the square root of a number
- [Str$, Str](/official/Reference/VBA/Conversion/Str) -- returns the string representation of a number
- [StrComp](/official/Reference/VBA/Strings/StrComp) -- compares two strings
- [StrConv](/official/Reference/VBA/Strings/StrConv) -- converts a string to a specified format
- [String$, String](/official/Reference/VBA/Strings/String) -- returns a string of repeating characters
- [StrPtr](/official/Reference/VBA/Information/StrPtr) -- returns the address of the underlying buffer of a **String**
- [StrReverse](/official/Reference/VBA/Strings/StrReverse) -- reverses the order of characters in a string
- [Switch](/official/Reference/VBA/Interaction/Switch) -- returns the value paired with the first **True** condition in a list of (condition, value) pairs
- [SYD](/official/Reference/VBA/Financial/SYD) -- returns the sum-of-years' digits depreciation of an asset for a specified period

## T

- [Tan](/official/Reference/VBA/Math/Tan) -- returns the tangent of an angle
- [Time](/official/Reference/Core/Time) -- sets or returns the current system time
- [Timer](/official/Reference/VBA/DateTime/Timer) -- returns the number of seconds elapsed since midnight
- [TimeSerial](/official/Reference/VBA/DateTime/TimeSerial) -- returns a time for a specific hour, minute, and second
- [TimeValue](/official/Reference/VBA/DateTime/TimeValue) -- converts a string to a time
- [TranslateColor](/official/Reference/VBA/Information/TranslateColor) -- translates an OLE colour value to a plain RGB colour value
- [Trim$, Trim](/official/Reference/VBA/Strings/Trim) -- removes leading and trailing spaces from a string
- [TypeName](/official/Reference/VBA/Information/TypeName) -- returns the name of a variable's data type as a **String**

## U

- [UBound](/official/Reference/VBA/Information/UBound) -- returns the largest valid subscript for a dimension of an array
- [UCase$, UCase](/official/Reference/VBA/Strings/UCase) -- returns a string converted to uppercase
- [Unload](/official/Reference/Core/Unload) -- removes an object (typically a form) from memory

## V

- [Val](/official/Reference/VBA/Conversion/Val) -- parses a string into a **Double**
- [ValDec](/official/Reference/VBA/Conversion/ValDec) -- parses a string into a **Decimal**
- [VarPtr](/official/Reference/VBA/Information/VarPtr) -- returns the address of a variable
- [VarType](/official/Reference/VBA/Information/VarType) -- returns the **VbVarType** enumeration value identifying a variable's subtype
- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj) -- returns an object reinterpreted as another COM interface
- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes) -- copies a block of bytes from one address to another
- [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) -- copies a block of bytes from one address to another, then zeros the source
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) -- increments the COM reference count of an object at a given address
- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet) -- assigns an object pointer to an object variable, releasing any prior reference
- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) -- assigns an object pointer to an object variable, adding a reference and releasing any prior reference

## W

- [Weekday](/official/Reference/VBA/DateTime/Weekday) -- returns the day of the week from a date value
- [WeekdayName](/official/Reference/VBA/Strings/WeekdayName) -- returns the name of the specified day of the week
- [Width](/official/Reference/VBA/FileSystem/Width) -- sets the line width for a sequential output file

## X

## Y

- [Year](/official/Reference/VBA/DateTime/Year) -- returns the year from a date value

## Z
