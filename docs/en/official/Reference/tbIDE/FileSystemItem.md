---
title: FileSystemItem
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/FileSystemItem
---

# FileSystemItem class

The base interface for everything inside the IDE's virtual file system. Both [**File**](/en/official/Reference/tbIDE/File) and [**Folder**](/en/official/Reference/tbIDE/Folder) extend **FileSystemItem** and inherit its four universal members ([**Name**](#name), [**Path**](#path), [**Type**](#type), [**Parent**](#parent)). An item returned from a [**Folder**](/en/official/Reference/tbIDE/Folder) enumeration or from [**FileSystem.ResolvePath**](/en/official/Reference/tbIDE/FileSystem#resolvepath) is normally castable to its specific kind --- the [**Type**](#type) property or `TypeOf` discriminates between them.

```vb
Dim item As FileSystemItem
For Each item In Host.CurrentProject.RootFolder
    If TypeOf item Is Folder Then
        ' …recurse
    Else
        Dim file As File = item
        ' …read
    End If
Next
```


## Properties

### Name

The item's name (the last segment of its [**Path**](#path)). **String**, read-only. For files, includes the extension.

### Parent

The folder that contains this item. **As** [**Folder**](/en/official/Reference/tbIDE/Folder). Read-only. The root folder's **Parent** is **Nothing**.

### Path

The item's full virtual-FS path --- e.g. `"twinbasic:/Sources/MainModule.twin"`. **String**, read-only. Suitable as the *Path* argument to [**Editors.Open**](/en/official/Reference/tbIDE/Editors#open) and [**FileSystem.ResolvePath**](/en/official/Reference/tbIDE/FileSystem#resolvepath).

### Type

The kind of item. **As** [**FileSystemItemType**](#filesystemitemtype) (see below). Read-only. For folders the value is always [**Folder**](#FileSystemItemType_Folder); for files it identifies the file's encoding and role.

## FileSystemItemType

A type discriminator returned by [**Type**](#type).

| Constant | Value | Description |
|----------|-------|-------------|
| **Folder**                  | 0 | A folder. |
| **FileVIRTUALDOC**  | 1 | A read-only virtual document --- the placeholder content the IDE renders for unrecognised file types. Unicode (UTF-16). |
| **FileOTHER**            | 2 | A file the IDE recognises as binary or whose encoding it cannot determine. [**File.ReadText**](/en/official/Reference/tbIDE/File#readtext) is not supported on this kind. |
| **FileTWIN**              | 3 | A twinBASIC source file (`.twin`). UTF-8 encoded on disk. |
| **FileBAS**                | 4 | A VB6-compatible standard module file (`.bas`). System ANSI encoded on disk. |
| **FileCLS**                | 5 | A VB6-compatible class module file (`.cls`). System ANSI encoded on disk. |
| **FileUIDESIGNER**  | 6 | A UI-designer surface for a Form, expressed as JSON. UTF-8 encoded. |
| **FileJSON**              | 7 | A JSON file --- typically the project's `Settings` or other JSON project data. UTF-8 encoded. |
