---
title: Statements
parent: Reference Section
nav_order: 2
permalink: /Reference/Statements
---

# Statements

These statements are built into the language itself. They are understood by the compiler, and are not explicitly declared nor defined in the visible runtime library.

## Alphabetical List

* [Alias](/en/official/Reference/Core/Alias) -- (twinBASIC) declares an alternative name for an intrinsic type, user-defined type, or interface

* [Call](/en/official/Reference/Core/Call) -- transfer control to a procedure

* [Class](/en/official/Reference/Core/Class) -- define a class

* [CoClass](/en/official/Reference/Core/CoClass) -- (twinBASIC) defines a creatable COM class as the contract for one or more **Interface** blocks

* [Close](/en/official/Reference/Core/Close) -- concludes input/output (I/O) to a file opened using the **Open** statement

* [Const](/en/official/Reference/Core/Const) -- declares constants for use in place of literal values

* [Continue](/en/official/Reference/Core/Continue) -- immediately begins the next iteration of the enclosing loop

* [Declare](/en/official/Reference/Core/Declare) -- declares references to external procedures in a dynamic-link library (DLL)

* [Delegate](/en/official/Reference/Core/Delegate) -- (twinBASIC) declares a function-pointer type --- a named signature for indirect calls

* [Dim](/en/official/Reference/Core/Dim) -- declares variables and allocates storage space

* [Do ... Loop](/en/official/Reference/Core/Do-Loop) -- repeats a block of statements while a condition is **True** or until a condition becomes **True**

* [End](/en/official/Reference/Core/End) -- ends a procedure or block

* [Enum](/en/official/Reference/Core/Enum) -- declares a type for an enumeration

* [Erase](/en/official/Reference/Core/Erase) -- reinitializes the elements of fixed-size arrays, or releases dynamic-array storage space

* [Error](/en/official/Reference/Core/Error) -- simulates the occurrence of an error

* [Event](/en/official/Reference/Core/Event) -- declares a user-defined event

* [Exit](/en/official/Reference/Core/Exit) -- exits a block of **Do…Loop**, **For…Next**, **Function**, **Sub**, or **Property** code

* [For ... Next](/en/official/Reference/Core/For-Next) -- repeats a group of statements while the loop counter approaches its final value

* [For Each...Next](/en/official/Reference/Core/For-Each-Next) -- repeats a group of statements for each element in an array or collection

* [Function](/en/official/Reference/Core/Function) -- declares the name, arguments, and code that form the body of a **Function** procedure

* [Get](/en/official/Reference/Core/Get) -- reads data from an open disk file into a variable

* [GoSub ... Return](/en/official/Reference/Core/GoSub-Return) -- branches to and returns from a subroutine within a procedure

* [GoTo](/en/official/Reference/Core/GoTo) -- branches unconditionally to a specified line within a procedure

* [Handles](/en/official/Reference/Core/Handles) -- (twinBASIC) binds a procedure as an event handler for one or more named events

* [If ... Then ... Else](/en/official/Reference/Core/If-Then-Else) -- conditionally executes a group of statements, depending on the value of an expression

* [Input #](/en/official/Reference/Core/Input) -- reads data from an open sequential file and assigns it to variables

* [Implements](/en/official/Reference/Core/Implements) -- specifies an interface or class that will be implemented in the class in which it appears

* [Interface](/en/official/Reference/Core/Interface) -- (twinBASIC) defines a COM interface using twinBASIC syntax

* [Kill](/en/official/Reference/Core/Kill) -- deletes files from a disk

* [Let](/en/official/Reference/Core/Let) -- assigns the value of an expression to a variable or property

* [Line Input #](/en/official/Reference/Core/Line-Input) -- reads a single line from an open sequential file into a string variable

* [Load](/en/official/Reference/Core/Load) -- loads an object (typically a form) into memory without showing it

* [Lock](/en/official/Reference/Core/Lock), [Unlock](/en/official/Reference/Core/Unlock) -- control access by other processes to all or part of an open file

* [LSet](/en/official/Reference/Core/LSet) -- left-aligns a string within a string variable, or copies one user-defined-type variable into another

* [Mid =](/en/official/Reference/Core/Mid-equals) -- replaces a specified number of characters within a string variable

* [MidB =](/en/official/Reference/Core/MidB-equals) -- byte-positioned form of **Mid =**

* [Module](/en/official/Reference/Core/Module) -- defines a module: a non-instantiable container for procedures, constants, types, and module-level variables

* [Name](/en/official/Reference/Core/Name) -- renames a disk file, directory, or folder

* [New](/en/official/Reference/Core/New) -- creates a new instance of a class

* [On Error](/en/official/Reference/Core/On-Error) -- enables an error-handling routine and specifies its location, or disables error handling

* [On ... GoTo](/en/official/Reference/Core/On-GoTo), [On ... GoSub](/en/official/Reference/Core/On-GoSub) -- branch to one of several lines based on the value of an expression

* [Open](/en/official/Reference/Core/Open) -- enables input/output (I/O) to a file

* [Option](/en/official/Reference/Core/Option) -- configure a compiler option

* [ParamArray](/en/official/Reference/Core/ParamArray) -- declares the final parameter of a procedure as an arbitrary-arity list of arguments

* [Print #](/en/official/Reference/Core/Print) -- writes display-formatted data to a sequential file

* [Private](/en/official/Reference/Core/Private) -- declares module-level variables accessible only within the declaring module

* [Property](/en/official/Reference/Core/Property) -- declares the **Get**, **Let**, or **Set** procedures that form the body of a property

* [Protected](/en/official/Reference/Core/Protected) -- (twinBASIC) declares a class member accessible within the class and its derived classes

* [Public](/en/official/Reference/Core/Public) -- declares module-level variables accessible to all procedures in all modules

* [Put](/en/official/Reference/Core/Put) -- writes data from a variable to a disk file

* [RaiseEvent](/en/official/Reference/Core/RaiseEvent) -- fires an event declared at the module level within a class, form, or document

* [Randomize](/en/official/Reference/VBA/Math/Randomize) -- initializes the random-number generator

* [ReDim](/en/official/Reference/Core/ReDim) -- reallocates storage space for a dynamic array

* [Resume](/en/official/Reference/Core/Resume) -- resumes execution after an error-handling routine is finished

* [Return](/en/official/Reference/Core/Return) -- returns from a **GoSub** subroutine, or (twinBASIC) exits a procedure with an optional value

* [RSet](/en/official/Reference/Core/RSet) -- right-aligns a string within a string variable

* [SavePicture](/en/official/Reference/Core/SavePicture) -- saves a graphic from a **Picture** or **Image** to a file

* [Seek](/en/official/Reference/Core/Seek) -- sets the read/write position within a file opened by using the **Open** statement

* [Select Case](/en/official/Reference/Core/Select-Case) -- executes one of several groups of statements, depending on the value of an expression

* [Set](/en/official/Reference/Core/Set) -- assigns an object reference to a variable or property

* [Static](/en/official/Reference/Core/Static) -- declares procedure-local variables whose values are preserved between calls

* [Stop](/en/official/Reference/Core/Stop) -- suspends execution

* [Sub](/en/official/Reference/Core/Sub) -- declares the name, arguments, and code that form the body of a **Sub** procedure

* [Type](/en/official/Reference/Core/Type) -- defines a user-defined data type containing one or more elements

* [Unload](/en/official/Reference/Core/Unload) -- removes an object (typically a form) from memory

* [While ... Wend](/en/official/Reference/Core/While-Wend) -- executes a series of statements as long as a given condition is **True**

* [With](/en/official/Reference/Core/With) -- executes a series of statements on a single object or a user-defined type

* [Write #](/en/official/Reference/Core/Write) -- writes raw, delimited data to a sequential file (paired with [**Input #**](/en/official/Reference/Core/Input))

* [#If ... Then ... Else](/en/official/Reference/Core/Topic-Preprocessor), [#Const](/en/official/Reference/Core/Topic-Preprocessor) -- compiler directives that conditionally include code blocks at compile time

---

## Deprecated

* [DefBool through DefVar](/en/official/Reference/Core/Deftype) -- set the default data type for variables whose names start with given letters; superseded by explicit **As** *type* declarations
