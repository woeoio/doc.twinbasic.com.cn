---
title: Clear
parent: ErrObject
permalink: /tB/Modules/ErrObject/Clear
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7275aba3-87f3-4e54-a166-0a292d1dbb7b'
  PropagateID: '7275aba3-87f3-4e54-a166-0a292d1dbb7b'
  ReservedCode1: 'f9946a97-f196-4683-b826-49f64e6b6f75'
  ReservedCode2: 'f9946a97-f196-4683-b826-49f64e6b6f75'
---

# Clear

清除 **Err** 对象的所有属性设置——[**Number**](/official/Reference/VBA/ErrObject/Number) 重置为 **0**，字符串属性重置为零长度字符串，[**HelpContext**](/official/Reference/VBA/ErrObject/HelpContext) 重置为 **0**。

语法：**Err**.**Clear**

在处理错误后使用 **Clear** 显式重置 **Err** 对象，例如在使用 **On Error Resume Next** 进行延迟错误处理时。在执行以下任一语句时，也会自动调用 **Clear**：

- 任何形式的 **Resume**
- **Exit Sub**、**Exit Function**、**Exit Property**
- 任何 **On Error** 语句

::: info

当处理访问其他对象时产生的错误时，**On Error Resume Next** 构造可能比 **On Error GoTo** 更可取。在与对象每次交互后检查 **Err** 可消除错误来源的歧义——将代码放入 [**Err.Number**](/official/Reference/VBA/ErrObject/Number) 的对象和最初生成错误的对象（在 [**Err.Source**](/official/Reference/VBA/ErrObject/Source) 中指定）都可以被识别，它们可能是不同的。
:::

### 示例

此示例使用 **Err.Clear** 在循环的每次迭代之间将 **Err** 对象的数值属性重置为零，字符串属性重置为零长度字符串。如果省略 **Clear**，则在首次发生错误后的每次迭代中都会显示错误消息对话框——无论下一次计算是否实际产生了错误。

```vb
Dim result(10) As Integer    ' Declare an array whose elements 
                             ' will overflow.
Dim idx As Long
On Error Resume Next         ' Defer error trapping.
Do Until idx = 10
    ' Generate an occasional error, or store the result if no error.
    result(idx) = Rnd * idx * 20000
    If Err.Number <> 0 Then
        MsgBox Err, , "Error generated: ", Err.HelpFile, Err.HelpContext
        Err.Clear            ' Clear Err object properties.
    End If
    idx = idx + 1
Loop
```

### 另请参阅

- [Number](/official/Reference/VBA/ErrObject/Number) 属性
- [Description](/official/Reference/VBA/ErrObject/Description) 属性
- [Source](/official/Reference/VBA/ErrObject/Source) 属性
- [Raise](/official/Reference/VBA/ErrObject/Raise) 方法