---
title: LastDllError
parent: ErrObject
permalink: /tB/Modules/ErrObject/LastDllError
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '796ad4b0-e34d-4a50-a63f-1a22bedfc73d'
  PropagateID: '796ad4b0-e34d-4a50-a63f-1a22bedfc73d'
  ReservedCode1: '2ac2227c-e415-4a70-9ab1-b375d4bc4e19'
  ReservedCode2: '2ac2227c-e415-4a70-9ab1-b375d4bc4e19'
---

# LastDllError

返回调用动态链接库 (DLL) 时产生的最后一个系统错误代码。只读。

语法：**Err**.**LastDllError**

**LastDllError** 属性适用于通过 [**Declare**](/official/Reference/Core/Declare) 语句进行的 DLL 调用。当进行此类调用时，被调用函数通常返回一个指示成功或失败的代码，而 **LastDllError** 填充为操作系统的最后错误代码（`GetLastError`）的值。设置 **LastDllError** 时不会引发异常。

该值仅保留到下一次外部调用。应在失败的调用之后立即读取，以确保结果正确。

::: info

**LastDllError** 是 Windows 特有的。
:::

请查阅 DLL 函数的文档以确定指示成功或失败的返回值。每当返回失败代码时，应用程序应立即检查 **LastDllError** 属性。

### 示例

以下代码使用无效参数调用 DLL 函数以使调用失败。调用后的代码检查返回值，然后显示 **Err** 对象的 **LastDllError** 属性以揭示操作系统错误代码。

```vb
Private Declare PtrSafe Function SQLCancel Lib "ODBC32.dll" _
    (ByVal hstmt As LongPtr) As Integer

Private Sub Demo()
    Dim retVal As Integer
    ' Call with invalid handle.
    retVal = SQLCancel(0)
    If retVal = -2 Then
        ' Display the underlying OS error code.
        MsgBox "Error code is: " & Err.LastDllError
    End If
End Sub
```

### 另请参阅

- [LastHresult](/official/Reference/VBA/ErrObject/LastHresult) 属性
- [Number](/official/Reference/VBA/ErrObject/Number) 属性