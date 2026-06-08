---
title: "Compilation 模块"
parent: VBA Package
permalink: /tB/Modules/Compilation/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bec71f62-cdb0-46b3-983c-76f92227c532'
  PropagateID: 'bec71f62-cdb0-46b3-983c-76f92227c532'
  ReservedCode1: '5b5f8928-53f9-464d-8221-9d8ee6fa780a'
  ReservedCode2: '5b5f8928-53f9-464d-8221-9d8ee6fa780a'
---

# Compilation 模块

**Compilation** 模块汇集了报告运行中代码的构建方式和来源的内部函数。其大多数成员是*编译时*内部函数：它们在运行时不查找任何内容，而是在调用点将字面值嵌入到编译后的代码中，记录编译器运行时的项目、组件、过程或源文件。

## 构建标识

[**CompilerVersion**](/official/Reference/VBA/Compilation/CompilerVersion) 返回生成运行中代码的 twinBASIC 编译器的构建号，[**ProcessorArchitecture**](/official/Reference/VBA/Compilation/ProcessorArchitecture) 返回一个 [**VbArchitecture**](/official/Reference/VBA/Constants/VbArchitecture) 常量——**vbArchWin32** 或 **vbArchWin64**——标识二进制文件是为 32 位还是 64 位执行而构建的。两者共同描述了是*哪个*编译器生成了运行中的代码，以及它运行在*什么类型*的进程中。

```vb
Debug.Print "twinBASIC build #" & CompilerVersion()
If ProcessorArchitecture() = vbArchWin64 Then
    Debug.Print "64-bit process"
Else
    Debug.Print "32-bit process"
End If
```

## 词法上下文

`Current...` 系列函数将调用点的源位置记录为字面字符串，在源代码编译时捕获。[**CurrentProjectName**](/official/Reference/VBA/Compilation/CurrentProjectName) 命名拥有该调用的项目（可执行文件或库），[**CurrentComponentName**](/official/Reference/VBA/Compilation/CurrentComponentName) 命名包含调用的模块、类或窗体，[**CurrentProcedureName**](/official/Reference/VBA/Compilation/CurrentProcedureName) 命名包含调用的 **Sub**、**Function** 或 **Property**，[**CurrentSourceFile**](/official/Reference/VBA/Compilation/CurrentSourceFile) 返回源文件在构建机器上的完整路径。对于 COM 类，[**CurrentComponentCLSID**](/official/Reference/VBA/Compilation/CurrentComponentCLSID) 返回由类的 [`[ClassId(...)]`](/official/Reference/Core/Attributes#classid) 属性提供的 GUID，未设置时返回全零 GUID。

由于每个值在编译时固定，将调用包装在辅助函数中会记录*辅助函数的*名称而非其调用者的名称。这些内部函数在诊断输出（日志、跟踪、断言）中最有用，它们可以替代硬编码的标识符字符串，避免代码重命名时产生不一致。

```vb
Public Sub Log(Message As String)
    Debug.Print CurrentProjectName() & "!" & _
                CurrentComponentName() & "." & _
                CurrentProcedureName() & ": " & Message
End Sub
```

## 成员

- [CompilerVersion](/official/Reference/VBA/Compilation/CompilerVersion) -- 返回 twinBASIC 编译器版本号
- [CurrentComponentCLSID](/official/Reference/VBA/Compilation/CurrentComponentCLSID) -- 返回当前类的 Class ID (CLSID)
- [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) -- 返回当前组件（模块或类）的名称
- [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) -- 返回函数被调用时所在过程的名称
- [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) -- 返回当前项目的名称
- [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) -- 返回当前源文件的完整路径
- [ProcessorArchitecture](/official/Reference/VBA/Compilation/ProcessorArchitecture) -- 返回运行中应用程序的处理器架构