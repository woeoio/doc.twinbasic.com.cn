---
title: FileSystem
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/FileSystem
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cf3e658d-7202-4925-815b-2478d0a15cd7'
  PropagateID: 'cf3e658d-7202-4925-815b-2478d0a15cd7'
  ReservedCode1: '1ea9ef9d-aebf-40f9-af38-0bd752132d34'
  ReservedCode2: '1ea9ef9d-aebf-40f9-af38-0bd752132d34'
---

# FileSystem 类

IDE 虚拟文件系统的句柄——让插件能够在不触及磁盘路径的情况下遍历和读取源文件的抽象。通过 [**Host.FileSystem**](/official/Reference/tbIDE/Host#filesystem) 访问。对于更常见的每项目场景，[**Host.CurrentProject.RootFolder**](/official/Reference/tbIDE/Project#rootfolder) 也是一个 [**Folder**](/official/Reference/tbIDE/Folder)，通常是正确的入口点——当插件需要访问项目自身根目录之外的文件时，全局 **FileSystem** 才有意义。

```vb
Dim item As FileSystemItem = Host.FileSystem.ResolvePath("twinbasic:/Sources/MainModule.twin")
```

## 属性

### RootFolder

虚拟文件系统的根。**As** [**Folder**](/official/Reference/tbIDE/Folder)。只读。

## 方法

### ResolvePath

查找给定路径处的 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)。路径使用 IDE 的 `twinbasic:/` URI 方案——与 [**FileSystemItem.Path**](/official/Reference/tbIDE/FileSystemItem#path) 和 [**Editor.Path**](/official/Reference/tbIDE/Editor#path) 返回的方案相同。

语法：*fileSystem*.**ResolvePath**( *Path* ) **As** [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)

*Path*
: *必需* 一个虚拟文件系统路径。**String**。必须包含 `twinbasic:/` 前缀。

返回的对象是 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)，但通常可转换为其具体类型——常规文件为 [**File**](/official/Reference/tbIDE/File)，文件夹为 [**Folder**](/official/Reference/tbIDE/Folder)。当路径的类型在静态上未知时，在转换前用 `TypeOf … Is Folder` 测试。