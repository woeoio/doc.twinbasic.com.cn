---
title: Return
parent: Statements
permalink: /tB/Core/Return
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '3322aab2-deeb-49b2-a0f9-d418af42e797'
  PropagateID: '3322aab2-deeb-49b2-a0f9-d418af42e797'
  ReservedCode1: '555f695e-b22e-4f38-91a1-b11c4568de31'
  ReservedCode2: '555f695e-b22e-4f38-91a1-b11c4568de31'
---

# Return

将控制从当前执行点返回给调用者。**Return**关键字有两种不同的用法，通过形式和上下文区分：

- **裸`Return`**——仅作为[**GoSub**](/official/Reference/Core/GoSub-Return)的配套使用。在**GoSub**子例程中，**Return**分支回到最近执行的**GoSub**之后紧接着的语句。
- **`Return` *expression***——仅在[**Function**](/official/Reference/Core/Function)或[**Property Get**](/official/Reference/Core/Property)过程内部有效（twinBASIC扩展）。它以*expression*作为返回值退出过程。

要在*不*返回值的情况下退出[**Sub**](/official/Reference/Core/Sub)、[**Function**](/official/Reference/Core/Function)、[**Property Get**](/official/Reference/Core/Property)、[**Property Let**](/official/Reference/Core/Property)或[**Property Set**](/official/Reference/Core/Property)过程，请使用[**Exit Sub**](/official/Reference/Core/Exit)、**Exit Function**或**Exit Property**——没有裸`Return`的过程退出形式。

语法：
- > **Return**
- > **Return** *expression*

*expression*
: 在[**Function**](/official/Reference/Core/Function)或**Property Get**过程中，返回给调用者的值。*expression*的类型必须与过程声明的返回类型兼容。此形式中*expression*必须存在——不能省略。

::: info
**Return** *expression*形式是twinBASIC扩展。经典VBA将**Return**专门保留给[**GoSub...Return**](/official/Reference/Core/GoSub-Return)构造，设置函数返回值的唯一方式是赋值给函数名（例如`MyFunc = expr`）。twinBASIC支持两种风格。
:::

### 示例

使用**Return** *expression*从**Function**返回值：

```vb
Function Square(N As Double) As Double
    Return N * N
End Function

Debug.Print Square(7)   ' 49
```

提前退出**Sub**——注意使用**Exit Sub**，而非裸**Return**：

```vb
Sub LogIfEnabled(ByVal Message As String)
    If Not LoggingEnabled Then Exit Sub
    Debug.Print Now & ": " & Message
End Sub
```

从**GoSub**子例程返回——此处的裸**Return**在**GoSub**之后的语句处恢复执行。完整模式见[**GoSub...Return**](/official/Reference/Core/GoSub-Return)。

```vb
Sub GosubDemo()
    Dim Num As Double
    Num = 10
    GoSub Halve
    Debug.Print Num     ' 5
    Exit Sub
Halve:
    Num = Num / 2
    Return              ' Return to the GoSub call site.
End Sub
```

### 另请参阅

- [**GoSub...Return** 语句](/official/Reference/Core/GoSub-Return)
- [**Exit** 语句](/official/Reference/Core/Exit)
- [**Sub** 语句](/official/Reference/Core/Sub)
- [**Function** 语句](/official/Reference/Core/Function)
- [**Property** 语句](/official/Reference/Core/Property)