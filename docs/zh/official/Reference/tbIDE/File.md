---
title: File
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/File
---

# File 类

IDE 虚拟文件系统中的文件。扩展 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem)，增加了内容访问器——通过 [**Data**](#data) / [**DataLen**](#datalen) 的原始字节、通过 [**Text**](#text) 的解码文本视图、通过 [**ReadText**](#readtext) 的带选项文本访问器，以及指示未保存更改的 [**IsDirty**](#isdirty) 标志。

**File** 还继承了通用的 [**FileSystemItem**](/official/Reference/tbIDE/FileSystemItem) 成员——[**Name**](/official/Reference/tbIDE/FileSystemItem#name)、[**Path**](/official/Reference/tbIDE/FileSystemItem#path)、[**Type**](/official/Reference/tbIDE/FileSystemItem#type)、[**Parent**](/official/Reference/tbIDE/FileSystemItem#parent)。[**Type**](/official/Reference/tbIDE/FileSystemItem#type) 值告诉插件文件使用什么编码以及文本访问器是否适用；参见 [**FileSystemItemType**](/official/Reference/tbIDE/FileSystemItem#filesystemitemtype) 的列表。

```vb
' 读取每个源文件的文本：
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
文件**内容目前从插件角度是只读的**。接口声明了 [**Data**](#data) 和 [**Text**](#text) 的 `Property Let` 访问器，但它们标记为 `[Unimplemented]`。使用活动编辑器窗格上的 [**Editor.Save**](/official/Reference/tbIDE/Editor#save) 来持久保存通过该窗格所做的文本更改，或使用 [**CodeEditor.Text**](/official/Reference/tbIDE/CodeEditor#text) / [**CodeEditor.SelectedText**](/official/Reference/tbIDE/CodeEditor#selectedtext) 进行编辑器内编辑。
:::


## 属性

### Data

文件的原始磁盘字节。读取返回当前内容的 **Byte()**。`Property Let` 形式已声明但标记为 `[Unimplemented]`——当前不支持写入。

语法：*file*.**Data** **As Byte()**

### DataLen

当前内容的字节长度——等同于 `UBound(file.Data) + 1` 但无需复制数组。**LongLong**，只读。适用于大小显示和快速文件大小比较。

### IsDirty

如果文件在 IDE 中有未保存的更改则为 **True**。**Boolean**，只读。

### Text

文件内容解码为 **String**，根据底层编码进行适当的 UTF-16 转换（[**FileTWIN**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileTWIN) → UTF-8 → UTF-16；[**FileBAS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileBAS) / [**FileCLS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileCLS) → 系统 ANSI → UTF-16；[**FileVIRTUALDOC**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileVIRTUALDOC) / [**FileUIDESIGNER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileUIDESIGNER) / [**FileJSON**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileJSON) → UTF-8 → UTF-16）。对 [**FileOTHER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileOTHER) 调用不受支持。

读取时返回解码文本。`Property Let` 形式已声明但标记为 `[Unimplemented]`——当前不支持写入。

语法：*file*.**Text** **As String**

## 方法

### ReadText

带选项的文本访问器——[**Text**](#text) 视图，但应用了可选变换。当前唯一选项是去除注释并用空白替换；未来版本可能添加更多。

语法：*file*.**ReadText**( *Options* ) **As String**

*Options*
: *必需* 一个 [**ReadTextFlags**](#readtextflags) 值。传入 `0` 获取等同于读取 [**Text**](#text) 的原始文本；传入 [**CommentsToWhitespace**](#ReadTextFlags_CommentsToWhitespace) 以在保留每个非注释字符的行和列位置的同时屏蔽注释。

适用于所有文本文件类型（[**FileTWIN**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileTWIN)、[**FileBAS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileBAS)、[**FileCLS**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileCLS)、[**FileVIRTUALDOC**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileVIRTUALDOC)、[**FileUIDESIGNER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileUIDESIGNER)、[**FileJSON**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileJSON)）；对 [**FileOTHER**](/official/Reference/tbIDE/FileSystemItem#FileSystemItemType_FileOTHER) 调用不受支持。

返回文本的行和列结构与原始文件匹配——`CommentsToWhitespace` 仅将注释字符空白化，从不移动周围的代码。因此该选项适用于需要同时"查找非注释出现"和"报告在原始文件中的位置"的索引器/搜索工具。

## ReadTextFlags

由 [**ReadText**](#readtext) 消费的选项标志。标记为 `[Flags]` 的枚举——未来版本中值可以 `Or` 组合。

| 常量 | 值 | 描述 |
|------|-----|------|
| **CommentsToWhitespace** | 1 | 将注释中的每个字节替换为空格。每个非注释字符的行/列位置被保留。 |