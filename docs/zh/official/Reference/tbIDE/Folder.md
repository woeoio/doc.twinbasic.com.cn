---
title: Folder
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/Folder
---

# Folder class

A folder inside the IDE's virtual file system. Extends [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) with child-enumeration capability --- [**Count**](#count), [**Item**](#item), and standard **For Each** iteration that yields each child as a [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) (use `TypeOf` to discriminate folders from files).

A **Folder** also inherits the universal [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) members --- [**Name**](/official/Reference/tbIDE/FileSystemItem#name), [**Path**](/official/Reference/tbIDE/FileSystemItem#path), [**Type**](/official/Reference/tbIDE/FileSystemItem#type), [**Parent**](/official/Reference/tbIDE/FileSystemItem#parent). The most common entry point is [**Host.CurrentProject.RootFolder**](/official/Reference/tbIDE/Project#rootfolder), and the most common operation is a **For Each** recursive traversal.

```vb
Private Sub WalkAllFiles(ByVal folder As Folder)
    Dim item As FileSystemItem
    For Each item In folder
        If TypeOf item Is Folder Then
            WalkAllFiles item
        Else
            Dim file As File = item
            ' …process the file
        End If
    Next
End Sub
```

::: important
The twinBASIC IDE is multi-threaded. The same folder can change while an addin holds a reference to it --- files arrive, files disappear, indices renumber. The supported way to traverse a folder is **For Each**; index-based access through [**Count**](#count) / [**Item**](#item) races against the IDE's own threads and will sometimes miss or duplicate entries. Always prefer **For Each** for traversal.
:::


## Properties

### Count

Number of items currently in the folder. **Long**, read-only.

::: important
The value can change between two reads --- the IDE is multi-threaded. **Do not** use this as a `For i = 0 To Count - 1` loop bound; use **For Each** instead.
:::

### IsPackagesFolder

**True** if this folder is the project's special `Packages` folder (the one that contains every referenced package's source tree). **Boolean**, read-only.

Useful when traversing the project for source-search purposes --- an addin that searches user code will usually want to *skip* the package sources:

```vb
If folder.IsPackagesFolder And Not searchInsidePackages Then Exit Sub
```

### Item

Indexed or named access to a child item. **DefaultMember** --- so `folder(0)` is equivalent to `folder.Item(0)`, and `folder("MainModule.twin")` is equivalent to `folder.Item("MainModule.twin")`.

Syntax: *folder*( *IndexOrName* ) **As** [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)

*IndexOrName*
: A **Variant** --- either a zero-based **Long** index or a **String** child name.

::: important
Numeric indices race against the IDE's own threads --- the item at index `n` may have changed identity by the time the call returns. Named lookup is safer; **For Each** traversal is safer still.
:::
