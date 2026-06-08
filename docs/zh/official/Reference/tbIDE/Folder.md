---
title: Folder
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Folder
---

# Folder 类

IDE 虚拟文件系统中的文件夹。扩展 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)，增加了子项枚举能力——[**Count**](#count)、[**Item**](#item)，以及标准的 **For Each** 迭代，将每个子项作为 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) 产出（使用 `TypeOf` 区分文件夹和文件）。

**Folder** 还继承了通用的 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) 成员——[**Name**](/official/Reference/tbIDE/FileSystemItem#name)、[**Path**](/official/Reference/tbIDE/FileSystemItem#path)、[**Type**](/official/Reference/tbIDE/FileSystemItem#type)、[**Parent**](/official/Reference/tbIDE/FileSystemItem#parent)。最常见的入口点是 [**Host.CurrentProject.RootFolder**](/official/Reference/tbIDE/Project#rootfolder)，最常见的操作是 **For Each** 递归遍历。

```vb
Private Sub WalkAllFiles(ByVal folder As Folder)
    Dim item As FileSystemItem
    For Each item In folder
        If TypeOf item Is Folder Then
            WalkAllFiles item
        Else
            Dim file As File = item
            ' …处理文件
        End If
    Next
End Sub
```

::: important
twinBASIC IDE 是多线程的。当插件持有对文件夹的引用时，同一文件夹可能发生变化——文件到达、文件消失、索引重新编号。遍历文件夹的支持方式是 **For Each**；通过 [**Count**](#count) / [**Item**](#item) 的基于索引的访问与 IDE 自身线程竞争，有时会遗漏或重复条目。遍历时始终优先使用 **For Each**。
:::


## 属性

### Count

文件夹中当前的项数。**Long**，只读。

::: important
该值可能在两次读取之间发生变化——IDE 是多线程的。**不要**将其用作 `For i = 0 To Count - 1` 的循环边界；应使用 **For Each**。
:::

### IsPackagesFolder

如果此文件夹是项目的特殊 `Packages` 文件夹（包含每个引用包的源代码树），则为 **True**。**Boolean**，只读。

在为源代码搜索而遍历项目时很有用——搜索用户代码的插件通常希望*跳过*包源代码：

```vb
If folder.IsPackagesFolder And Not searchInsidePackages Then Exit Sub
```

### Item

子项的索引或命名访问。**DefaultMember**——因此 `folder(0)` 等同于 `folder.Item(0)`，`folder("MainModule.twin")` 等同于 `folder.Item("MainModule.twin")`。

语法：*folder*( *IndexOrName* ) **As** [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)

*IndexOrName*
: 一个 **Variant** —— 基于 0 的 **Long** 索引或 **String** 子项名称。

::: important
数字索引与 IDE 自身线程竞争——索引 `n` 处的项在调用返回时可能已改变身份。命名查找更安全；**For Each** 遍历更加安全。
:::