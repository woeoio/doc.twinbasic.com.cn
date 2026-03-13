---
title: 编译器常量
parent: 参考部分
nav_order: 4
permalink: /zh/Reference/Compiler-Constants
---

这是twinBASIC中内置编译器常量的指南。它包括VBA文档中列出的常量，即使它们未定义，因为未定义的编译器常量始终可以使用，但值为0。

## `Win16`

**用途：** 指示16位Windows兼容平台。\
**值：** 始终为0（False）；不支持16位Windows。

## `Win32`

**用途：** 指示32位兼容Windows平台\
**值：** 在支持的Windows平台上始终为1（True），对于32位和64位都是如此。

## `Win64`

**用途：** 指示64位Windows AMD64平台。\
**值：** 编译器在32位模式时为0（False），在64位模式时为1（True）。

## `VBA6`

**用途：** 指示与VBA6语法的兼容性。\
**值：** 始终为1（True）。

## `VBA7`

**用途：** 指示与VBA7语法的兼容性。\
**值：** 始终为1（True）。

## `MAC`
**用途：** 指示在MacOS平台上运行。\
**值：** 始终为0（False）。目前不支持Mac，尽管将来会有所改变。

## `TWINBASIC`

**用途：** 指示与twinBASIC语法的兼容性。\
**值：** 始终为1（True）。

## `TWINBASIC_BUILD`

**用途：** 提供给出当前twinBASIC构建号的`Long`值。\
**值：** 目前这与"BETA"号相同，例如对于Beta 610，其值为610。

## `TWINBASIC_BUILD_TYPE`
**用途：** 允许根据项目是exe、dll还是ocx进行条件编译。\
**值：** 一个`String`，可以是"Standard EXE"、"Standard DLL"、"ActiveX DLL"或"ActiveX Control"之一，由项目设置中的"构建类型"选项确定。


# 用法

这些的使用遵循在标准`If/Else/ElseIf`条件之前使用井号的标准语法。例如，要区分32位和64位VBA与64位twinBASIC，

``` vb
#If VBA7 Then
    '我们在VBA7或twinBASIC中
    #If Win64 Then
        '我们在64位VBA7或64位twinBASIC中
        #If TWINBASIC Then
            '我们在64位twinBASIC中
            #If TWINBASIC_BUILD_TYPE = "ActiveX Control" Then
                '我们正在构建OCX
            #End If
        #Else
            '我们在64位VBA7中
        #End If
    #Else
        '我们在32位VBA7或32位twinBASIC中
        #If TWINBASIC Then
            '我们在32位twinBASIC中
        #Else
            '我们在32位VBA7中
        #End If
    #End If
#Else
    '我们在VB6或VBA6中。Win64默认为False。TWINBASIC默认为False。
#End If
```

或者更简单地说，要确定是否使用`PtrSafe`，然后使用`DeclareWide`或其他tB功能：

``` vb
#If VBA7 Then
    #If TWINBASIC Then
        'PtrSafe DeclareWide声明，如果需要，也包括内联注释和`[ TypeHint() ]`，以及函数属性。
    #Else
        '不使用DeclareWide或任何新语法的PtrSafe声明
    #End If
#Else
    '没有PtrSafe或其他新语法的经典VB6/VBA6声明
#End If
```

> [!IMPORTANT]
> 提醒：编译器常量不是`Boolean`值，所以您不应该使用类似`#If Not Win64 Then`的语法，因为结果可能不是期望的，例如该示例在32位和64位模式下都计算为`True`，而您可能期望在64位下为`False`以便使用仅限32位的代码。\
如果您希望将这些视为`Boolean`，可以使用`CBool()`函数，例如`#If Not CBool(Win64) Then`。

# 外观

tB编辑器具有实时显示哪些编译器常量处于活动状态的有用功能。`#If`块中的代码是不活动的，如果它不会在当前设置下执行，则会显示为灰色。请注意，与VBx不同，不活动代码不会被评估错误。

例如，在32位模式下：\
![image](Images/oHpCiV1.png)

然后切换到64位模式：\
![image](Images/TYizrRW.png)


---
*VB6、VBA、VBA6和VBA7是Microsoft Corporation的商标。*\
*MacOS是Apple, Inc.的商标。*