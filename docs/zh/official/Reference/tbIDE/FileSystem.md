---
title: FileSystem
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/FileSystem
---

# FileSystem class

A handle into the IDE's virtual file system --- the abstraction that lets an addin traverse and read source files without touching the on-disk paths. The **FileSystem** is reached through [**Host.FileSystem**](/official/Reference/tbIDE/Host#filesystem). For the more common per-project case, [**Host.CurrentProject.RootFolder**](/official/Reference/tbIDE/Project#rootfolder) is also a [**Folder**](/official/Reference/tbIDE/Folder) and is usually the right entry point --- the global **FileSystem** matters when an addin needs to address files outside the project's own root.

```vb
Dim item As FileSystemItem = Host.FileSystem.ResolvePath("twinbasic:/Sources/MainModule.twin")
```

## Properties

### RootFolder

The root of the virtual file system. **As** [**Folder**](/official/Reference/tbIDE/Folder). Read-only.

## Methods

### ResolvePath

Looks up the [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) at a given path. The path uses the IDE's `twinbasic:/` URI scheme --- the same scheme that [**FileSystemItem.Path**](/official/Reference/tbIDE/FileSystemItem#path) and [**Editor.Path**](/official/Reference/tbIDE/Editor#path) return.

Syntax: *fileSystem*.**ResolvePath**( *Path* ) **As** [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)

*Path*
: *required* A virtual-FS path. **String**. Must include the `twinbasic:/` prefix.

The returned object is a [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) but is usually castable to its specific kind --- a [**File**](/official/Reference/tbIDE/File) for regular files, a [**Folder**](/official/Reference/tbIDE/Folder) for folders. Test with `TypeOf … Is Folder` before casting when the path's kind is not known statically.
