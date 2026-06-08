---
title: CVErr
parent: Conversion Module
permalink: /tB/Modules/Conversion/CVErr
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'df37b331-e6ef-48d9-bf4d-6ab1f94a006b'
  PropagateID: 'df37b331-e6ef-48d9-bf4d-6ab1f94a006b'
  ReservedCode1: '6c06a608-9a48-4db5-94a7-791c1d4a5930'
  ReservedCode2: '6c06a608-9a48-4db5-94a7-791c1d4a5930'
---

# CVErr

返回一个子类型为 **Error** 且包含用户指定错误号的 **Variant**。

语法：**CVErr(** *errornumber* **)**

*errornumber*
: *必需* 任何有效的错误号。

使用 **CVErr** 函数在用户创建的过程中创建用户自定义错误。例如，一个接受多个参数并通常返回字符串的函数可以评估输入参数以确保它们在可接受的范围内。如果不在范围内，函数不太可能返回预期结果。在这种情况下，**CVErr** 返回一个错误号，告诉调用者应该采取什么操作。

注意，不允许对 **Error** 进行隐式转换。例如，**CVErr** 的返回值不能直接赋值给非 **Variant** 的变量。可以使用显式转换（如 [**CInt**](/official/Reference/VBA/Conversion/CInt)、[**CDbl**](/official/Reference/VBA/Conversion/CDbl) 等）将 **CVErr** 返回的值赋给适当数据类型的变量。

### 示例

此示例使用 **CVErr** 函数返回 **VarType** 为 **vbError** (10) 的 **Variant**。如果传递给用户自定义函数 `CalculateDouble` 的参数不是数字，则返回错误。使用 **CVErr** 从用户自定义过程返回用户自定义错误，或推迟处理运行时错误。使用 **IsError** 函数测试值是否表示错误。

```vb
' Call CalculateDouble with an error-producing argument.
Sub Test()
    Debug.Print CalculateDouble("345.45robert")
End Sub

' Define CalculateDouble Function procedure.
Function CalculateDouble(Number)
    If IsNumeric(Number) Then
        CalculateDouble = Number * 2    ' Return result.
    Else
        CalculateDouble = CVErr(2001)   ' Return a user-defined error number.
    End If
End Function
```

### 另请参阅

- [Error](/official/Reference/VBA/Conversion/Error) 函数