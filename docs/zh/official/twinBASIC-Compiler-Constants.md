本文是 twinBASIC 内置编译器常量的指南。它包含了 VBA 文档中列出的常量，即使某些常量未定义，因为未定义的编译器常量始终可以使用，但其值将为 0。

## `Win16`

**用途：** 表示 16 位 Windows 兼容平台。\
**值：** 始终为 0（False）；不支持 16 位 Windows。

## `Win32` 

**用途：** 表示 32 位兼容 Windows 平台。\
**值：** 在受支持的 Windows 平台上，对于 32 位和 64 位，始终为 1（True）。

## `Win64`

**用途：** 表示 64 位 Windows AMD64 平台。\
**值：** 当编译器处于 32 位模式时为 0（False），处于 64 位模式时为 1（True）。

## `VBA6`

**用途：** 表示与 VBA6 语法兼容。\
**值：** 始终为 1（True）。

## `VBA7`

**用途：** 表示与 VBA7 语法兼容。\
**值：** 始终为 1（True）。

## `MAC`
**用途：** 表示在 MacOS 平台上运行。\
**值：** 始终为 0（False）。目前不支持 Mac，但这将在未来改变。

## `TWINBASIC`

**用途：** 表示与 twinBASIC 语法兼容。\
**值：** 始终为 1（True）。

## `TWINBASIC_BUILD`

**用途：** 提供一个 `Long` 值，表示当前的 twinBASIC 构建版本号。\
**值：** 目前与"BETA"版本号相同，例如对于 Beta 610，它的值将为 610。

# 用法

这些常量的使用遵循标准语法，即在标准的 `If/Else/ElseIf` 条件语句前使用井号。例如，要区分 32 位和 64 位 VBA 与 64 位 twinBASIC：

```vb6
#If VBA7 Then
    '我们在 VBA7 或 twinBASIC 中
    #If Win64 Then
        '我们在 64 位 VBA7 或 64 位 twinBASIC 中
        #If TWINBASIC Then
            '我们在 64 位 twinBASIC 中
        #Else
            '我们在 64 位 VBA7 中
        #End If
    #Else
        '我们在 32 位 VBA7 或 32 位 twinBASIC 中
        #If TWINBASIC Then
            '我们在 32 位 twinBASIC 中
        #Else
            '我们在 32 位 VBA7 中
        #End If
    #End If
#Else
    '我们在 VB6 或 VBA6 中。Win64 默认始终为 False。TWINBASIC 默认始终为 False。
#End If
```

或者更简单地，要确定是否使用 `PtrSafe` 然后使用 `DeclareWide` 或其他 tB 功能：

```vb6
#If VBA7 Then
    #If TWINBASIC Then
        '如果需要，使用 PtrSafe DeclareWide 声明，也可以使用行内注释和 `[ TypeHint() ]`，以及函数属性
    #Else
        '使用 PtrSafe 声明，但不使用 DeclareWide 或任何新语法
    #End If
#Else
    '经典 VB6/VBA6 声明，不使用 PtrSafe 或其他新语法
#End If
```

>[!重要]
>提醒：编译器常量不是 `Boolean` 值，所以您不应该使用像 `#If Not Win64 Then` 这样的语法，因为结果可能不是您想要的。例如，当您可能期望在 64 位下为 `False` 以便使用仅 32 位代码时，该示例在 32 位和 64 位模式下都会计算为 `True`。\
如果您希望将这些作为 `Boolean` 处理，可以使用 `CBool()` 函数，例如 `#If Not CBool(Win64) Then`。

# 外观

tB 编辑器具有实时显示哪些编译器常量处于活动状态的有用功能。`#If` 块中的代码如果在当前设置下不会执行，则处于非活动状态并显示为灰色。请注意，与 VBx 不同，非活动代码不会进行错误评估。

例如，在 32 位模式下：\
![image](https://i.imgur.com/oHpCiV1.png)

然后切换到 64 位模式：\
![image](https://i.imgur.com/TYizrRW.png)


---
*VB6、VBA、VBA6 和 VBA7 是 Microsoft Corporation 的商标。*\
*MacOS 是 Apple, Inc. 的商标。*