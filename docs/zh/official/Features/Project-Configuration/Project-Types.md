---
title: "项目类型"
parent: Project Configuration
nav_order: 1
permalink: /Features/Project-Configuration/Project-Types
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f5f6ede2-af8c-42e9-a61b-1d39d5ef7094'
  PropagateID: 'f5f6ede2-af8c-42e9-a61b-1d39d5ef7094'
  ReservedCode1: '950654b2-c257-4391-b7cc-c26e25a3d0c3'
  ReservedCode2: '950654b2-c257-4391-b7cc-c26e25a3d0c3'
---

# 项目类型

twinBASIC 为传统 EXE 和 ActiveX DLL/Control 之外的多种项目类型提供内置支持。

## 标准 DLL

虽然以前可以通过变通方法实现，但 tB 将其作为内置项目类型提供。你可以在启动时选择此项目类型，然后只需在需要导出时用 `[DllExport]` 标记函数。名称将原样使用，不会被修饰。`CDecl` 调用约定使用正常语法支持，例如 `Public Function foo CDecl(bar As Long) As Long`。

twinBASIC 中的标准 DLL 仍然可以指定启动点；每个导出将检查此代码是否已运行，如果没有则运行它。

```vb
[DllExport]
Public Function Add(ByVal a As Long, ByVal b As Long) As Long
    Add = a + b
End Function

[DllExport]
Public Function Multiply CDecl(ByVal a As Long, ByVal b As Long) As Long
    Multiply = a * b
End Function
```

## 控制台应用程序

此项目类型允许创建真正的控制台项目而非 GUI 项目。它还会添加一个默认的 `Console` 类用于读写控制台 IO 和提供的调试控制台。

## Windows 服务

tB 有一个服务包（WinServicesLib），使创建功能完整的真正服务变得轻松。它简化了 MESSAGETABLE 资源的使用、每个 exe 中的多个服务、用于 IPC 的命名管道等。参见示例 21-22。

## 内核模式驱动

内核模式驱动只能访问非常有限的 API 子集，不能像运行时那样调用用户模式 DLL。因此在以前的 BASIC 产品中，这通常需要复杂的变通方法，并大幅限制你能做的事情（如果可能的话）。当然，内核模式没有 WOW64 层，所以 tB 是第一个支持为 64 位 Windows 创建驱动的 BASIC 产品。这通过"Project: Native subsystem"选项以及以下两个功能控制：

### 覆盖入口点

BASIC 应用程序通常有一个隐藏的入口点，它在 `Sub Main` 或启动窗体的 `Form_Load` 之前最先运行。它设置应用程序的功能，如初始化 COM。twinBASIC 支持覆盖此入口点，将你自己的过程设置为真正的入口点。这主要用于内核模式项目，它们必须有特定类型的入口点，且不能在默认情况下调用正常的 API。但还有其他可能使用此选项的原因，不过请注意：如果不自己执行初始化过程或不精确了解你不能使用什么，许多东西在普通应用程序中会出错。

### 将 API 声明放入 IAT

tB 可以选择将所有 API 声明放入导入地址表，而不是像 VBx 那样在运行时通过 `LoadLibrary/GetProcAddress` 调用（VBx 将 TLB 声明的 API 放入导入表；tB 也复制了这一点，但进一步为项目内声明提供了选项）。

这在性能上有小幅优势，因为它在启动时加载和绑定，而非首次调用时。但主要用途是内核模式，它不能调用 `LoadLibrary` 和其他用户模式 API 来使用后期绑定。