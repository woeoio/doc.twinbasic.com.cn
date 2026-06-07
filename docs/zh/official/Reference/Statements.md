---
title: Statements
parent: Reference Section
nav_order: 2
permalink: /Reference/Statements
---

# Statements

These statements are built into the language itself. They are understood by the compiler, and are not explicitly declared nor defined in the visible runtime library.

## Alphabetical List

* [Alias](/official/Reference/Core/Alias) -- (twinBASIC) declares an alternative name for an intrinsic type, user-defined type, or interface

* [Call](/official/Reference/Core/Call) -- transfer control to a procedure

* [Class](/official/Reference/Core/Class) -- define a class

* [CoClass](/official/Reference/Core/CoClass) -- (twinBASIC) defines a creatable COM class as the contract for one or more **Interface** blocks

* [Close](/official/Reference/Core/Close) -- concludes input/output (I/O) to a file opened using the **Open** statement

* [Const](/official/Reference/Core/Const) -- declares constants for use in place of literal values

* [Continue](/official/Reference/Core/Continue) -- immediately begins the next iteration of the enclosing loop

* [Declare](/official/Reference/Core/Declare) -- declares references to external procedures in a dynamic-link library (DLL)

* [Delegate](/official/Reference/Core/Delegate) -- (twinBASIC) declares a function-pointer type --- a named signature for indirect calls

* [Dim](/official/Reference/Core/Dim) -- declares variables and allocates storage space

* [Do ... Loop](/official/Reference/Core/Do-Loop) -- repeats a block of statements while a condition is **True** or until a condition becomes **True**

* [End](/official/Reference/Core/End) -- ends a procedure or block

* [Enum](/official/Reference/Core/Enum) -- declares a type for an enumeration

* [Erase](/official/Reference/Core/Erase) -- reinitializes the elements of fixed-size arrays, or releases dynamic-array storage space

* [Error](/official/Reference/Core/Error) -- simulates the occurrence of an error

* [Event](/official/Reference/Core/Event) -- declares a user-defined event

* [Exit](/official/Reference/Core/Exit) -- exits a block of **Do…Loop**, **For…Next**, **Function**, **Sub**, or **Property** code

* [For ... Next](/official/Reference/Core/For-Next) -- repeats a group of statements while the loop counter approaches its final value

* [For Each...Next](/official/Reference/Core/For-Each-Next) -- repeats a group of statements for each element in an array or collection

* [Function](/official/Reference/Core/Function) -- declares the name, arguments, and code that form the body of a **Function** procedure

* [Get](/official/Reference/Core/Get) -- reads data from an open disk file into a variable

* [GoSub ... Return](/official/Reference/Core/GoSub-Return) -- branches to and returns from a subroutine within a procedure

* [GoTo](/official/Reference/Core/GoTo) -- branches unconditionally to a specified line within a procedure

* [Handles](/official/Reference/Core/Handles) -- (twinBASIC) binds a procedure as an event handler for one or more named events

* [If ... Then ... Else](/official/Reference/Core/If-Then-Else) -- conditionally executes a group of statements, depending on the value of an expression

* [Input #](/official/Reference/Core/Input) -- reads data from an open sequential file and assigns it to variables

* [Implements](/official/Reference/Core/Implements) -- specifies an interface or class that will be implemented in the class in which it appears

* [Interface](/official/Reference/Core/Interface) -- (twinBASIC) defines a COM interface using twinBASIC syntax

* [Kill](/official/Reference/Core/Kill) -- deletes files from a disk

* [Let](/official/Reference/Core/Let) -- assigns the value of an expression to a variable or property

* [Line Input #](/official/Reference/Core/Line-Input) -- reads a single line from an open sequential file into a string variable

* [Load](/official/Reference/Core/Load) -- loads an object (typically a form) into memory without showing it

* [Lock](/official/Reference/Core/Lock), [Unlock](/official/Reference/Core/Unlock) -- control access by other processes to all or part of an open file

* [LSet](/official/Reference/Core/LSet) -- left-aligns a string within a string variable, or copies one user-defined-type variable into another

* [Mid =](/official/Reference/Core/Mid-equals) -- replaces a specified number of characters within a string variable

* [MidB =](/official/Reference/Core/MidB-equals) -- byte-positioned form of **Mid =**

* [Module](/official/Reference/Core/Module) -- defines a module: a non-instantiable container for procedures, constants, types, and module-level variables

* [Name](/official/Reference/Core/Name) -- renames a disk file, directory, or folder

* [New](/official/Reference/Core/New) -- creates a new instance of a class

* [On Error](/official/Reference/Core/On-Error) -- enables an error-handling routine and specifies its location, or disables error handling

* [On ... GoTo](/official/Reference/Core/On-GoTo), [On ... GoSub](/official/Reference/Core/On-GoSub) -- branch to one of several lines based on the value of an expression

* [Open](/official/Reference/Core/Open) -- enables input/output (I/O) to a file

* [Option](/official/Reference/Core/Option) -- configure a compiler option

* [ParamArray](/official/Reference/Core/ParamArray) -- declares the final parameter of a procedure as an arbitrary-arity list of arguments

* [Print #](/official/Reference/Core/Print) -- writes display-formatted data to a sequential file

* [Private](/official/Reference/Core/Private) -- declares module-level variables accessible only within the declaring module

* [Property](/official/Reference/Core/Property) -- declares the **Get**, **Let**, or **Set** procedures that form the body of a property

* [Protected](/official/Reference/Core/Protected) -- (twinBASIC) declares a class member accessible within the class and its derived classes

* [Public](/official/Reference/Core/Public) -- declares module-level variables accessible to all procedures in all modules

* [Put](/official/Reference/Core/Put) -- writes data from a variable to a disk file

* [RaiseEvent](/official/Reference/Core/RaiseEvent) -- fires an event declared at the module level within a class, form, or document

* [Randomize](/official/Reference/VBA/Math/Randomize) -- initializes the random-number generator

* [ReDim](/official/Reference/Core/ReDim) -- reallocates storage space for a dynamic array

* [Resume](/official/Reference/Core/Resume) -- resumes execution after an error-handling routine is finished

* [Return](/official/Reference/Core/Return) -- returns from a **GoSub** subroutine, or (twinBASIC) exits a procedure with an optional value

* [RSet](/official/Reference/Core/RSet) -- right-aligns a string within a string variable

* [SavePicture](/official/Reference/Core/SavePicture) -- saves a graphic from a **Picture** or **Image** to a file

* [Seek](/official/Reference/Core/Seek) -- sets the read/write position within a file opened by using the **Open** statement

* [Select Case](/official/Reference/Core/Select-Case) -- executes one of several groups of statements, depending on the value of an expression

* [Set](/official/Reference/Core/Set) -- assigns an object reference to a variable or property

* [Static](/official/Reference/Core/Static) -- declares procedure-local variables whose values are preserved between calls

* [Stop](/official/Reference/Core/Stop) -- suspends execution

* [Sub](/official/Reference/Core/Sub) -- declares the name, arguments, and code that form the body of a **Sub** procedure

* [Type](/official/Reference/Core/Type) -- defines a user-defined data type containing one or more elements

* [Unload](/official/Reference/Core/Unload) -- removes an object (typically a form) from memory

* [While ... Wend](/official/Reference/Core/While-Wend) -- executes a series of statements as long as a given condition is **True**

* [With](/official/Reference/Core/With) -- executes a series of statements on a single object or a user-defined type

* [Write #](/official/Reference/Core/Write) -- writes raw, delimited data to a sequential file (paired with [**Input #**](/official/Reference/Core/Input))

* [#If ... Then ... Else](/official/Reference/Core/Topic-Preprocessor), [#Const](/official/Reference/Core/Topic-Preprocessor) -- compiler directives that conditionally include code blocks at compile time

---

## Deprecated

* [DefBool through DefVar](/official/Reference/Core/Deftype) -- set the default data type for variables whose names start with given letters; superseded by explicit **As** *type* declarations
