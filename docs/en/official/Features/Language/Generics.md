---
title: Generics
parent: Language Syntax
nav_order: 5
permalink: /Features/Language/Generics
---

# Generics

::: warning
Generics are syntactic sugar for copy-pasting code followed by a search-and-replace of type names.

Everything that the generic syntax provides can be achieved without it by writing repetitive code.
:::

This repetition is error-prone and tedious, however, and thus the generic syntax keeps the code DRY[^1].

The generic syntax introduces _type parameters_ / _type variables_ whose _type-values_ exist during compilation, as opposed to regular parameters and their values that exist during run-time only.

Procedures, **Class**es and **Type**s (UDTs) can be made generic.

::: warning
Generic **Type**s (UDTs) don't yet support member procedures (error TB5124).
:::

## Generic Procedures

Syntax:

- **Definition**  
  ( **Function** | ... ) _name_ **(Of** _type-variable-list_ **)** **(** _parameter-list_ **)** **As** _return-type_
- In detail:  
  ( **Function** | **Sub** | **Property** (**Get** | **Let** | **Set**) ) _name_ **(Of** _type-var1_ [ **,** *type-var2* ...]**)** **(** _parameter-list_ **)** **As** _return-type_  
  The _parameter-list_ can reference any of the type variables, e.g.  
  `Sub MyPrint(Of T)(ByVal file&, value As T)`
- **Invocation** or **Call Site**  
  _name_ [ **(Of** *type-argument-list* **)** ] [ **(** *argument-list* **)** ]
- In detail:  
  _name_ [ **(Of** _type-arg1_ [ **,** *type-arg2* ] **)** ] [ **(** *argument-list* **)** ]  
  The type variables from the definition's _parameter-list_ are substituted with concrete or arguments types provided in the _argument-list_, unless provided explicitly as a type argument in the _type-argument-list_.  
  The type variables that were not referenced in the _parameter-list_ have to be provided in the _type-argument-list_ as _type-arguments_.

In the definition, the _type-variable-list_, i.e. **(Of** _type-var_ ... **)**, introduces genericity. The type variables (_type-var_) introduce identifiers of arbitrary types that can be referenced within:

- _parameter-list_,
- _return-type_, and
- the body of the procedure.

In the invocation, the _type-argument-list_, i.e. **(Of** _type-arg_ ... **)**, is optional as needed to provide types arguments for those type variables that don't appear in the _parameter-list_ of the definition. The type variables that are used within the _parameter-list_ are assigned type values of the respective arguments at the call site _unless their values are explicitly provided_ in the _type-argument-list_.

### Call site type arguments

Type variables that correspond to types that could be deduced from the call argument types must form a trailer of the _type-variable-list_:

```vb
Sub MySub1(Of T, U, V)(argu As U, argv As V): End Sub
MySub1(Of Long)(33%, 42%)                ' Valid: deduced U, V = Integer
MySub1(Of Long, Single)(33%, 42%)        ' Valid: provided U = Single, deduced V = Integer
MySub1(Of Long, Single, Double)(33%, 42%)' Valid: provided U = Single, provided V = Double
MySub1(Of Long, , Double)(33%, 42%)      ' Invalid: omitted deduced type must be trailing
```

Thus, to suppress deduction, put the type variable in the type list _before_ the non-deducible type parameters:

```vb
' T must be provided, it won't be deduced
Function MyFn1(Of T, U)(argu As T) As U: End Function
MyFn1(Of Single, String)(10%)   ' Valid: provided T = Single, U = String
MyFn1(Of, String)(10%)          ' Invalid: T is not trailing so it can't be omitted
                                ' Effectively, the definition of MyFn1
                                ' suppresses deduction of T
```

Only the unused type variables may have their arguments omitted at positions _after the first_ in the _type-variable-list_.:

```vb
Sub MySub2(Of T, U, V)(argt As T, argv As V): End Sub
Sub MySub3(Of U, V)(argv As V): End Sub

MySub2(Of Single, , Double)(1%, 2%) ' Valid: unused U can be omitted as it's not the first
                                    ' in the type-parameter-list
MySub3(Of, Single)(22%)             ' Invalid: unused U can't be omitted as it's the first
                                    ' variable in the type-parameter-list
```

### Example 1

In this example, the invocations of the generic **First** and **Last** subs don't need to explicitly provide type argument values using the _type-argument-list_, i.e. **(Of** ... **)**, since they can be deduced from the argument types.

```vb
Public Function First(Of T)(Array() As T) As T
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Public Function Last(Of T)(Array() As T) As T
    If IsArrayInitialized(Array) Then Return Array(UBound(Array))
End Function

Sub Test()
    Dim data() As String = Array("A", "B", "C")
    Debug.Assert First(data) = "A"
    Debug.Assert Last(data) = "C"
End Sub
```

Without the generic syntax, the procedure would have had to be written for every type _T_ it's used on. In the example below, that would be `T=String` and `T=Integer`:

```vb
Public Function First(Array() As String) As String
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Public Function First(Array() As Integer) As Integer
    If IsArrayInitialized(Array) Then Return Array(LBound(Array))
End Function

Sub Test()
    Dim strings() As String = Array("A", "B", "C")
    Dim ints() As Integer = Array(1, 2, 3)
    Debug.Assert First(strings) = "A" AndAlso First(ints) = 1
End Sub
```

### Example 2 with some type variables not appearing in the _parameter-list_

There are two common cases when a type variable might not appear in the _parameter-list_:

- when it is the _result-type_, and/or
- when it is used in the body of the procedure.

The example below illustrates those possibilities:

```vb
Public Function Caster(Of R, U, T)(value As T) As R
    Dim intermediate As U = CType(Of U)(value)
    Return CType(Of R)(intermediate)
End Function

Sub Test()
    ' Type T is deduced to be Single, from the argument 1.23!
    Debug.Assert Example(Of String, Integer)(1.23!) = "1"
    ' Type T is explicitly provided as Double. The argument is cast to that type.
    Debug.Print Example(Of String, Integer, Double)(1.23!) = "1"
End Sub
```

The function **Caster** introduces three type variables within its scope:

- **T** is by default deduced from the type of the **value** argument, or can be provided on invocation,
- **R** is the result type and must be provided on invocation,
- **U** is a type used in the body of the function and must be provided on invocation.

::: tip
The order of the type variables in the definition can be chosen so that the trailing variable(s) are used in the _parameter-list_. The type-values of those type variable can thus be omitted if the types inferred from the argument types at the call site are appropriate.
:::

1. In the invocation `Example(Of String, Integer)(1.23!)`,  
   _T_ is deduced to be **Single**, _U_ is provided and set to **Integer**, and **R** is provided and set to **String**.

2. In the invocation `Example(Of String, Integer, Double)(1.23!)`,  
    _T_ is provided and set to **Double**, _U_ is provided and set to **Integer**, and _R_ is provided and set to **String**.
   - First, the compiler will cast `1.23!` to the type of the formal parameter, that is to a **Double** `1.23#`.
   - Then, in the body of the function, the _value_ is cast to **Integer** when it's assigned to **intermediate**.
   - Finally, also in the body, the **intermediate** is cast to the result type of **String**, and returned.

## Generic Classes And UDTs

Syntax:

- **Definition**  
  [ **Class** | ... ] _name_ **(Of** _type-variable-list_ **)**
- In Detail:  
  [ **Class** | **Type** ] _name_ **(Of** _type-var1_ [ **,** *type-var2* ... ] **)**
- **Instantiation**  
  _name_ **(Of** _type-argument-list_ **)**
- In Detail:  
  _name_ **(Of** _type-arg1_ [ **,** *type-arg2* ... ] **)**

The type variables (_type-var_) introduce identifiers of arbitrary types that can be referenced anywhere within the body of the class.

::: warning
When instantiating generic classes and UDTs, **all of the type arguments** have to be provided.

If they aren't, code generation errors and silent failures at runtime may occur.
:::

### Example of correct and incorrect instantiation

```vb
Class MyClass(Of T, U)
    Function DumpT%(value As T): Debug.Print value: End Function
    Function DumpU%(value As U): Debug.Print value: End Function
End Class

Dim i As New MyClass(Of Integer) ' Invalid, U is not provided, silent error
i.DumpT(12)     ' Valid, uses T = Integer
i.DumpU(12)     ' Invalid, uses undefined U, causes a codegen/silent error

Dim j As New MyClass(Of Integer, Single)   ' Correct instantiation
j.DumpU(12)     ' Valid, uses U = Single
```

### Type-instances vs object-instances

A generic class enables substitution of type variables with type arguments provided in an instantiation. Every utterance of a generic class name with type arguments instantiates the generic class type into a regular class type.

::: info
Compile Time: A generic class is instantiated by calling out its name with arguments.

Run Time: Objects of those instantiated types can be created.
:::

In the example below, two class types are instantiated: **MyClass**(**Integer**) and **MyClass**(**String**). This happens at compile time. No instances of **MyClass** are created at runtime, since both variables default to **Nothing**:

```vb
Class MyClass(Of T) ' ...

Sub Test()
    Dim intVar As MyClass(Integer)
    Dim strVar As MyClass(String)
    Debug.Assert intVar Is Nothing AndAlso strVar Is Nothing
End Sub
```

### List Class Example

A Class generic allows the type in methods throughout the class. The following example shows this to make a generic List class:

```vb
[COMCreatable(False)]
Class List(Of T)
    Private mData() As T

    Sub New(preset() As T)
        mData = preset
    End Sub

    [DefaultMember]
    Function GetAt(ByVal index&) As T
        Return mData(index)
    End Function
End Class

Sub Test()
    Dim li As Any = New List(Of Integer)(Array(5, 6, 7))
    Debug.Assert li(0) = 5 AndAlso li(2) = 7
End Sub

```

### List UDT Example

While generic UDTs don't support member procedures yet in twinBASIC, the data members are supported:

```vb
Type ListU(Of T)
    value() As T
End Type

Sub Test()
    Dim lu As ListU(Of Long)
    ReDim lu.value(10)
    lu.value(0) = 5
End Sub
```

[^1]: DRY = Don't Repeat Yourself
