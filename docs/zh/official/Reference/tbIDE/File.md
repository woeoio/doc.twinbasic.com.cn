---
title: File
parent: tbIDE Package
permalink: /tB/Packages/tbIDE/File
---

# File class

A file inside the IDE's virtual file system. Extends [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) with content accessors --- raw bytes via [**Data**](#data) / [**DataLen**](#datalen), a decoded text view via [**Text**](#text), a text-with-options accessor via [**ReadText**](#readtext), plus an [**IsDirty**](#isdirty) flag indicating unsaved changes.

A **File** also inherits the universal [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) members --- [**Name**](/official/Reference/tbIDE/FileSystemItem#name), [**Path**](/official/Reference/tbIDE/FileSystemItem#path), [**Type**](/official/Reference/tbIDE/FileSystemItem#type), [**Parent**](/official/Reference/tbIDE/FileSystemItem#parent). The [**Type**](/official/Reference/tbIDE/FileSystemItem#type) value tells the addin what encoding the file is in and whether the text accessors are applicable; see [**FileSystemItemType**](/official/Reference/tbIDE/FileSystemItem#filesystemitemtype) for the list.

```vb
' Read every source file's text:
Private Sub WalkAllFiles(ByVal folder As Folder)
    Dim item As FileSystemItem
    For Each item In folder
        If TypeOf item Is Folder Then
            WalkAllFiles item
        Else
            Dim file As File = item
            If file.Type <> FileOTHER Then
                ProcessText file.Path, file.ReadText(ReadTextFlags.CommentsToWhitespace)
            End If
        End If
    Next
End Sub
```

::: info
File **content is currently read-only** from the addin's perspective. The interface declares `Property Let` accessors for [**Data**](#data) and [**Text**](#text) but they are tagged `[Unimplemented]`. Use [**Editor.Save**](/official/Reference/tbIDE/Editor#save) on an active editor pane to persist text changes made through that pane, or [**CodeEditor.Text**](/official/Reference/tbIDE/CodeEditor#text) / [**CodeEditor.SelectedText**](/official/Reference/tbIDE/CodeEditor#selectedtext) for in-editor edits.
:::


## Properties

### Data

The raw on-disk bytes of the file. Read returns a **Byte()** of the current content. The `Property Let` form is declared but marked `[Unimplemented]` --- writes are not currently supported.

Syntax: *file*.**Data** **As Byte()**

### DataLen

The length in bytes of the current content --- equivalent to `UBound(file.Data) + 1` but without copying the array. **LongLong**, read-only. Useful for size displays and quick file-size comparisons.

### IsDirty

**True** if the file has unsaved changes in the IDE. **Boolean**, read-only.

### Text

The file's content decoded as a **String**, with the appropriate UTF-16 conversion for the underlying encoding ([**FileTWIN**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileTWIN) → UTF-8 → UTF-16; [**FileBAS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileBAS) / [**FileCLS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileCLS) → System-ANSI → UTF-16; [**FileVIRTUALDOC**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileVIRTUALDOC) / [**FileUIDESIGNER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileUIDESIGNER) / [**FileJSON**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileJSON) → UTF-8 → UTF-16). Calling on a [**FileOTHER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileOTHER) is not supported.

Read returns the decoded text. The `Property Let` form is declared but marked `[Unimplemented]` --- writes are not currently supported.

Syntax: *file*.**Text** **As String**

## Methods

### ReadText

A text-with-options accessor --- the [**Text**](#text) view, but with optional transforms applied. Currently the only option strips comments and replaces them with whitespace; future versions may add more.

Syntax: *file*.**ReadText**( *Options* ) **As String**

*Options*
: *required* A [**ReadTextFlags**](#readtextflags) value. Pass `0` for raw text equivalent to reading [**Text**](#text); pass [**CommentsToWhitespace**](#ReadTextFlags_CommentsToWhitespace) to mask out comments while preserving line and column positions of every non-comment character.

Valid on every text file kind ([**FileTWIN**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileTWIN), [**FileBAS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileBAS), [**FileCLS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileCLS), [**FileVIRTUALDOC**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileVIRTUALDOC), [**FileUIDESIGNER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileUIDESIGNER), [**FileJSON**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileJSON)); calling on a [**FileOTHER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileOTHER) is not supported.

The line and column structure of the returned text matches the original file --- `CommentsToWhitespace` only blanks the comment characters, never moves the surrounding code. The option is therefore suitable for indexers / search tools that need both "find non-comment occurrences" and "report the position in the original file".

## ReadTextFlags

The option flags consumed by [**ReadText**](#readtext). A `[Flags]`-tagged enum --- values can be `Or`'ed in future versions.

| Constant | Value | Description |
|----------|-------|-------------|
| **CommentsToWhitespace** | 1 | Replace every byte that is part of a comment with a space. Line / column positions of every non-comment character are preserved. |
