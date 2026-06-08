---
title: ErrObject
parent: VBA Package
nav_order: 11
permalink: /tB/Modules/ErrObject/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '683e9db4-df45-4d24-8b92-8c4d6631266a'
  PropagateID: '683e9db4-df45-4d24-8b92-8c4d6631266a'
  ReservedCode1: '2699fe59-1eba-4122-a666-93f90203601f'
  ReservedCode2: '2699fe59-1eba-4122-a666-93f90203601f'
---

# ErrObject 类

**Err** 对象保存有关最近运行时错误的信息。它是一个全局的内在单例——无需声明或使用 **New** 构造，直接引用 **Err** 即可。默认属性为 [**Number**](/official/Reference/VBA/ErrObject/Number)，因此单独的 **Err** 等效于 `Err.Number`。

## 检查错误

当在使用 [**On Error**](/official/Reference/Core/On-Error) 安装了活动错误处理程序的过程内发生运行时错误时，执行跳转到处理程序，**Err** 对象的属性已填充。处理程序读取 [**Number**](/official/Reference/VBA/ErrObject/Number) 以标识错误，读取 [**Description**](/official/Reference/VBA/ErrObject/Description) 获取可读消息，读取 [**Source**](/official/Reference/VBA/ErrObject/Source) 了解错误来源。

```vb
Sub Demo()
    On Error GoTo Handler
    Err.Raise 6                    ' Generate an Overflow error.
    Exit Sub
Handler:
    Debug.Print Err.Number         ' 6
    Debug.Print Err.Description    ' "Overflow"
End Sub
```

当处理程序通过 **Resume**、**Resume Next** 或任何 **Exit** 语句退出，或显式调用 [**Clear**](/official/Reference/VBA/ErrObject/Clear) 时，属性将重置为零值。

## 引发自定义错误

代码可以通过调用 [**Raise**](/official/Reference/VBA/ErrObject/Raise) 来生成自己的运行时错误。自定义错误号应加上 [**vbObjectError**](/official/Reference/VBA/Constants/#vbObjectError) 偏移，以避免与 twinBASIC 的内置编号冲突。在调用处设置 [**Source**](/official/Reference/VBA/ErrObject/Source) 和 [**Description**](/official/Reference/VBA/ErrObject/Description) 可为错误处理程序提供有用的检查或显示信息。

```vb
Public Sub WithdrawCash(ByVal Amount As Currency)
    If Amount > Balance Then
        Err.Raise vbObjectError + 1001, _
                  Source:="Account.WithdrawCash", _
                  Description:="Insufficient funds."
    End If
    ' ...
End Sub
```

## 成员

- [Clear](/official/Reference/VBA/ErrObject/Clear) -- 将 **Err** 对象的所有属性重置为零值
- [Description](/official/Reference/VBA/ErrObject/Description) -- 返回或设置描述错误的字符串
- [HelpContext](/official/Reference/VBA/ErrObject/HelpContext) -- 返回或设置与错误关联的帮助主题上下文 ID
- [HelpFile](/official/Reference/VBA/ErrObject/HelpFile) -- 返回或设置与错误关联的帮助文件路径
- [LastDllError](/official/Reference/VBA/ErrObject/LastDllError) -- 返回 DLL 调用的最后一个系统错误代码
- [LastHresult](/official/Reference/VBA/ErrObject/LastHresult) -- 返回 COM 对象方法调用返回的最后一个 HRESULT
- [Number](/official/Reference/VBA/ErrObject/Number) -- 返回或设置错误号；**Err** 的默认成员
- [Raise](/official/Reference/VBA/ErrObject/Raise) -- 生成运行时错误
- [ReturnHResult](/official/Reference/VBA/ErrObject/ReturnHResult) -- 设置从当前方法返回的自定义 HRESULT
- [Source](/official/Reference/VBA/ErrObject/Source) -- 返回或设置生成错误的对象或应用程序名称