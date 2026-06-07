---
title: Public
parent: Statements
permalink: /tB/Core/Public
---
# Public

Used at the module level to declare public variables and allocate storage space.

Syntax:
> **Public** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ] [ **,** [ **WithEvents** ] *varname* [ **(** [ *subscripts* ] **)** ] [ **As** [ **New** ] *type* ]] **. . .**

**WithEvents**
: *optional* Keyword specifying that *varname* is an object variable used to respond to events triggered by an ActiveX object. **WithEvents** is valid only in class modules. Any number of individual variables may be declared by using **WithEvents**, but arrays cannot be declared with **WithEvents**, nor can **New** be combined with **WithEvents**.

*varname*
: Name of the variable; follows standard naming conventions.

*subscripts*
: *optional* Dimensions of an array variable; up to 60 multiple dimensions may be declared. The *subscripts* argument uses the following syntax: [ *lower* **To** ] *upper* [ , [ *lower* **To** ] *upper* ] **. . .**. When not explicitly stated in *lower*, the lower bound of an array is controlled by the [**Option Base**](/en/official/Reference/Core/Option#Base) statement. The lower bound is zero if no **Option Base** statement is present.

**New**
: *optional* Keyword that enables implicit creation of an object. When **New** is used to declare the object variable, a new instance of the object is created on first reference to it, so the **[Set](/en/official/Reference/Core/Set)** statement is not required to assign the object reference. The **New** keyword can't be used to declare variables of any intrinsic data type or to declare instances of dependent objects, and it can't be used with **WithEvents**.

*type*
: *optional* Data type of the variable; may be **Byte**, **Boolean**, **Integer**, **Long**, **Currency**, **Single**, **Double**, **Decimal**, **Date**, **String** (for variable-length strings), **String** *length* (for fixed-length strings), **Object**, **Variant**, a user-defined type, or an object type. Use a separate **As** *type* clause for each variable being defined.

Variables declared by using the **Public** statement are available to all procedures in all modules in all applications, unless **[Option Private Module](/en/official/Reference/Core/Option)** is in effect; in which case, the variables are public only within the project in which they reside.

The **Public** statement can't be used in a class module to declare a fixed-length string variable.

Use the **Public** statement to declare the data type of a variable. For example, the following statement declares a variable as an **Integer**:

```vb
Public NumberOfEmployees As Integer
```

Also use a **Public** statement to declare the object type of a variable. The following statement declares a variable for a new instance of a worksheet:

```vb
Public X As New Worksheet
```

If the **New** keyword is not used when declaring an object variable, the variable that refers to the object must be assigned an existing object by using the **Set** statement before it can be used. Until it is assigned an object, the declared object variable has the special value **Nothing**, which indicates that it doesn't refer to any particular instance of an object.

The **Public** statement with empty parentheses also declares a dynamic array. After declaring a dynamic array, use the **[ReDim](/en/official/Reference/Core/ReDim)** statement within a procedure to define the number of dimensions and elements in the array. Redeclaring a dimension for an array variable whose size was explicitly specified in a [**Private**](/en/official/Reference/Core/Private), **Public**, or [**Dim**](/en/official/Reference/Core/Dim) statement raises an error.

When no data type or object type is specified, and there is no [**Deftype**](/en/official/Reference/Core/Deftype) statement in the module, the variable is **Variant** by default.

When variables are initialized, a numeric variable is initialized to 0, a variable-length string is initialized to a zero-length string (""), and a fixed-length string is filled with zeros. **Variant** variables are initialized to **Empty**. Each element of a user-defined type variable is initialized as if it were a separate variable.

The **Public** keyword is also used as a procedure modifier on **[Sub](/en/official/Reference/Core/Sub)**, **[Function](/en/official/Reference/Core/Function)**, and **[Property](/en/official/Reference/Core/Property)** declarations to make those procedures accessible to all other procedures in all modules.

### Example

This example uses the **Public** statement at the module level (General section) of a standard module to explicitly declare variables as public; that is, they are available to all procedures in all modules in all applications unless **Option Private Module** is in effect.

```vb
Public Number As Integer ' Public Integer variable.
Public NameArray(1 To 5) As String ' Public array variable.
' Multiple declarations, two Variants and one Integer, all Public.
Public MyVar, YourVar, ThisVar As Integer
```

### See Also

- [**Dim** statement](/en/official/Reference/Core/Dim)
- [**Private** statement](/en/official/Reference/Core/Private)
- [**Static** statement](/en/official/Reference/Core/Static)
- [**Option** statement](/en/official/Reference/Core/Option)
- [**ReDim** statement](/en/official/Reference/Core/ReDim)
