---
title: FileSystemItem
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/FileSystemItem
---

# FileSystemItem 类

IDE 虚拟文件系统中所有内容的基础接口。[**File**](/official/Reference/tbIDE/File) 和 [**Folder**](/official/Reference/tbIDE/Folder) 都扩展 **FileSystemItem** 并继承其四个通用成员（[**Name**](#name)、[**Path**](#path)、[**Type**](#type)、[**Parent**](#parent)）。从 [**Folder**](/official/Reference/tbIDE/Folder) 枚举或 [**FileSystem.ResolvePath**](/official/Reference/tbIDE/FileSystem#resolvepath) 返回的项通常可转换为其具体类型——[**Type**](#type) 属性或 `TypeOf` 可在它们之间进行区分。

```vb
Dim item As FileSystemItem
For Each item In Host.CurrentProject.RootFolder
    If TypeOf item Is Folder Then
        ' …递归
    Else
        Dim file As File = item
        ' …读取
    End If
Next
```


## 属性

### Name

项的名称（其 [**Path**](#path) 的最后一段）。**String**，只读。对于文件，包括扩展名。

### Parent

包含此项的文件夹。**As** [**Folder**](/official/Reference/tbIDE/Folder)。只读。根文件夹的 **Parent** 为 **Nothing**。

### Path

项的完整虚拟文件系统路径——例如 `"twinbasic:/Sources/MainModule.twin"`。**String**，只读。可用作 [**Editors.Open**](/official/Reference/tbIDE/Editors#open) 和 [**FileSystem.ResolvePath**](/official/Reference/tbIDE/FileSystem#resolvepath) 的 *Path* 参数。

### Type

项的类型。**As** [**FileSystemItemType**](#filesystemitemtype)（见下文）。只读。对于文件夹，值始终为 [**Folder**](#FileSystemItemType_Folder)；对于文件，它标识文件的编码和角色。

## FileSystemItemType

由 [**Type**](#type) 返回的类型判别值。

| 常量 | 值 | 描述 |
|------|-----|------|
| **Folder**                  | 0 | 一个文件夹。 |
| **FileVIRTUALDOC**  | 1 | 只读虚拟文档——IDE 为无法识别的文件类型渲染的占位内容。Unicode (UTF-16)。 |
| **FileOTHER**            | 2 | IDE 识别为二进制的文件或无法确定其编码的文件。[**File.ReadText**](/official/Reference/tbIDE/File#readtext) 不支持此类型。 |
| **FileTWIN**              | 3 | twinBASIC 源文件（`.twin`）。磁盘上为 UTF-8 编码。 |
| **FileBAS**                | 4 | VB6 兼容的标准模块文件（`.bas`）。磁盘上为系统 ANSI 编码。 |
| **FileCLS**                | 5 | VB6 兼容的类模块文件（`.cls`）。磁盘上为系统 ANSI 编码。 |
| **FileUIDESIGNER**  | 6 | 窗体的 UI 设计器表面，以 JSON 表示。UTF-8 编码。 |
| **FileJSON**              | 7 | JSON 文件——通常是项目的 `Settings` 或其他 JSON 项目数据。UTF-8 编码。 |