---
title: Project
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Project
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'dccf92b2-628d-41da-b82a-e5e52691b89d'
  PropagateID: 'dccf92b2-628d-41da-b82a-e5e52691b89d'
  ReservedCode1: 'd4bc930d-e63a-454e-8d4a-7801b7627e57'
  ReservedCode2: 'd4bc930d-e63a-454e-8d4a-7801b7627e57'
---

# Project 类

当前加载的项目。通过 [**Host.CurrentProject**](/official/Reference/tbIDE/Host#currentproject) 访问；当用户切换项目时 IDE 交换底层实例，但插件持有的 **Project** 引用始终是稳定句柄，始终反映*当前*加载项目的状态。

该类包含四类功能：

- **标识** —— [**Name**](#name)、[**Path**](#path)、[**BaseFolderPath**](#basefolderpath)、[**ProjectID**](#projectid)、版本 + 架构 + 构建输出信息。
- **生命周期命令** —— [**Save**](#save)、[**Close**](#close)、[**Build**](#build)、[**Clean**](#clean)（与 IDE 文件菜单提供的操作相同）。
- **编程访问** —— [**Evaluate**](#evaluate) 在运行中的项目上下文中运行任意表达式（与调试控制台相同的引擎）；[**RootFolder**](#rootfolder) 是进入虚拟文件系统的入口。
- **持久存储** —— [**LoadMetaData**](#loadmetadata) / [**SaveMetaData**](#savemetadata) 在 `.twinproj` 文件内存储每插件的键值对。

```vb
With Host.CurrentProject
    Host.DebugConsole.PrintText "Project: " & .Name & " (" & .Path & ")"
    Host.DebugConsole.PrintText "Version: " & .VersionMajor & "." & .VersionMinor & "." & _
                                              .VersionBuild & "." & .VersionRevision
    Host.DebugConsole.PrintText "BuildType: " & .BuildType
End With
```


## 属性

### Architecture

项目的目标处理器架构。**As** [**VbArchitecture**](/official/Reference/VBA/Constants/VbArchitecture)（`vbX86` / `vbX64` / `vbARM` 等）。只读。

### BaseFolderPath

包含项目 `.twinproj` 文件的文件夹——即 [**Path**](#path) 的目录部分。**String**，只读。

### BuildFileExtension

构建输出的文件扩展名（`"exe"`、`"dll"`、`"ocx"`、`"twinpack"`）。**String**，只读。由 [**BuildType**](#buildtype) 隐含。

### BuildOutputPath

项目构建输出的完整路径，包括文件名和扩展名——[**Build**](#build) 写入（或将写入）的文件。**String**，只读。

### BuildType

项目构建的产物类型。**As** [**VbBuildType**](#vbbuildtype)（见下文）。只读。

### Name

项目的显示名称，在其 `Settings` 中配置。**String**，只读。

### Path

项目 `.twinproj` 文件的完整路径。**String**，只读。

### ProjectID

项目的 GUID 字符串——例如 `"{99DEC38C-75F6-4488-8EE7-2D52D83881D2}"`。**String**，只读。在重命名后保持稳定；可用作插件端每项目状态的键。

### RootFolder

项目虚拟文件系统的根——遍历源文件、资源、包和其他项目内容的入口。**As** [**Folder**](/official/Reference/tbIDE/Folder)。只读。

### VersionBuild, VersionMajor, VersionMinor, VersionRevision

项目当前版本的四个组成部分（`Major.Minor.Build.Revision`）。**Long**，只读。

## 方法

### Build

构建项目。等同于 IDE 的"文件 → 生成/构建…"命令。将输出写入 [**BuildOutputPath**](#buildoutputpath)；编译期间引发的错误以与用户发起的构建相同的方式显示在调试控制台中。

语法：*project*.**Build**

### Clean

注销并删除与项目相关的任何已构建可执行文件——先前 [**Build**](#build) 的逆操作。

语法：*project*.**Clean**

### Close

关闭项目。等同于"文件 → 关闭项目"。如果项目有未保存的更改，IDE 可能会在实际关闭前提示用户。

语法：*project*.**Close**

### Evaluate

在当前加载的项目上下文中求值表达式，如同用户在调试控制台中键入的一样。返回表达式的值为 **Variant**（从 `Long` 到序列化对象，取决于求值内容）。

语法：*project*.**Evaluate**( *EvalString* [, *Options* ] ) **As Variant**

*EvalString*
: *必需* 要求值的表达式。**String**。在调试控制台有效的任何表达式均可——算术（`10.5 * 4`）、属性读取（`MyForm.Caption`）、函数调用（`MyModule.MyFunc(42)`）等。

*Options*
: *可选* 一个 [**DebuggerEvaluateOptions**](/official/Reference/tbIDE/Host#debuggerevaluateoptions) 值。默认 [**NONE**](/official/Reference/tbIDE/Host#DebuggerEvaluateOptions_NONE)。

```vb
On Error Resume Next
Dim result As Variant = Host.CurrentProject.Evaluate("10.5 * 4")
If Err.Number = 0 Then
    Host.ShowMessageBox CStr(result), "OK", "Result"
Else
    Host.ShowMessageBox "ERROR " & Err.Number & vbCrLf & vbCrLf & Err.Description, "OK", "ERROR"
End If
```

使用与调试控制台相同的引擎，因此相同的标识符集、相同的可访问性规则和相同的错误语义适用——包括从求值表达式内部引发的运行时错误。当表达式可能引发错误时，用 `On Error Resume Next` 包裹。

### LoadMetaData

从 `.twinproj` 文件内的项目元数据区域读取先前存储的值。

语法：*project*.**LoadMetaData**( *Key* ) **As String**

*Key*
: *必需* 元数据键。**String**。如果在 *Key* 下未存储任何值，返回 `""`。

元数据与加载的项目关联，而非全局关联到插件。关闭项目也关闭存储；打开不同的项目会得到不同的存储。对于插件范围的持久性（例如应跨项目跟随用户的插件级选项），使用 `GetSetting` / `SaveSetting` 操作注册表——示例 15 演示了该模式。

### Save

保存项目。等同于"文件 → 保存项目"。

语法：*project*.**Save**

### SaveMetaData

在 `.twinproj` 文件内的项目元数据区域中，在指定键下存储字符串值。该值在项目重新打开后持久存在。

语法：*project*.**SaveMetaData** *Key*, *Value*

*Key*
: *必需* 元数据键。**String**。

*Value*
: *必需* 要存储的值。**String**。

```vb
' 持久保存应跟随项目的用户选择选项：
Host.CurrentProject.SaveMetaData "MyAddIn.LastUsedFilter", "*.bas"

' 下次项目加载时恢复：
Private Sub Host_OnProjectLoaded()
    Dim lastFilter As String = Host.CurrentProject.LoadMetaData("MyAddIn.LastUsedFilter")
    If Len(lastFilter) = 0 Then lastFilter = "*.twin"
    ' …
End Sub
```

## VbBuildType

由 [**BuildType**](#buildtype) 返回的产物类型枚举。在 **Project** 接口上内联声明。

| 常量 | 值 | 描述 |
|------|-----|------|
| **StandardEXE**                | 0 | 标准 Win32 可执行文件。 |
| **StandardDLL**                | 1 | 标准 Win32 DLL。插件本身就是标准 DLL 项目。 |
| **ActiveXDLL**                  | 2 | COM (ActiveX) DLL。 |
| **ActiveXControl**          | 3 | COM (ActiveX) 控件——`.ocx`。 |
| **PackageTWINPACK**        | 4 | twinBASIC 包（`.twinpack`）。 |