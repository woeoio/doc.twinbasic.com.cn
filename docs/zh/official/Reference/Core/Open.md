---
title: Open
parent: Statements
permalink: /tB/Core/Open
---
# Open

启用对文件的输入/输出（I/O）。

语法：
> **Open** *pathname* **For** *mode* [ **Access** *access* ] [ *lock* ] [ **Encoding** *encoding* ] **As** [ **#** ] *filenumber* [ **Len** **=** *reclength* ]

*pathname*
: 指定文件名的字符串表达式；可以包含目录或文件夹以及驱动器。

*mode*
: 指定文件模式的关键字：**Append**、**Binary**、**Input**、**Output**或**Random**。如果未指定，文件以**Random**访问模式打开。

*access*
: *可选* 指定对打开文件允许的操作的关键字：**Read**、**Write**或**Read Write**。

*lock*
: *可选* 指定其他进程对打开文件受限操作的关键字：**Shared**、**Lock Read**、**Lock Write**或**Lock Read Write**。

*encoding*
: *可选* 编码标识符——例如**utf_8**、**utf_16**、**windows_1252_western**或**default_system_ansi**。完整列表见下面的[文本编码](#text-encodings)。**Encoding**子句适用于文本模式I/O（**Input**、**Output**、**Append**）；对**Binary**或**Random**模式文件无效。

*filenumber*
: 范围1到511（含）的有效文件号。使用[**FreeFile**](/official/Reference/VBA/FileSystem/FreeFile)函数获取下一个可用文件号。

*reclength*
: *可选* 小于或等于32,767（字节）的数字。对于以随机访问方式打开的文件，此值为记录长度。对于顺序文件，此值为缓冲的字符数。

在执行任何I/O操作之前，必须先打开文件。**Open**为文件I/O分配缓冲区并确定用于缓冲区的访问模式。

如果*pathname*指定的文件不存在，当以**Append**、**Binary**、**Output**或**Random**模式打开文件时会创建该文件。

如果文件已被其他进程打开，且不允许指定的访问类型，则**Open**操作失败并产生错误。

如果*mode*为**Binary**，则忽略**Len**子句。

::: important
在**Binary**、**Input**和**Random**模式下，可以在不先关闭文件的情况下用不同的文件号打开文件。在**Append**和**Output**模式下，必须先关闭文件才能用不同的文件号打开。
:::

::: info
**Encoding**子句是twinBASIC扩展。经典VBA没有等效功能，只能使用系统ANSI代码页读写文本。
:::

### 示例

本示例演示了**Open**语句启用文件输入和输出的各种用法。

以下代码以顺序输入模式打开文件。

```vb
Open "TESTFILE" For Input As #1
' Close before reopening in another mode.
Close #1
```

本示例以**Binary**模式打开文件，仅用于写操作。

```vb
Open "TESTFILE" For Binary Access Write As #1
' Close before reopening in another mode.
Close #1
```

以下示例以**Random**模式打开文件。该文件包含用户自定义类型的记录。

```vb
Type Record ' Define user-defined type.
    ID As Integer
    Name As String * 20
End Type

Dim MyRecord As Record ' Declare variable.
Open "TESTFILE" For Random As #1 Len = Len(MyRecord)
' Close before reopening in another mode.
Close #1
```

此代码示例以顺序输出方式打开文件；任何进程都可以读写该文件。

```vb
Open "TESTFILE" For Output Shared As #1
' Close before reopening in another mode.
Close #1
```

此代码示例以**Binary**模式打开文件用于读取；其他进程无法读取该文件。

```vb
Open "TESTFILE" For Binary Access Read Lock Read As #1
```

此示例读取UTF-8文本文件，指定[**utf_8**](#utf_8)编码标识符。

```vb
Open "C:\MyFile.txt" For Input Encoding utf_8 As #1
' Subsequent Line Input #, Input #, etc. interpret bytes as UTF-8.
Close #1
```

### 文本编码

以下标识符字符串被接受为**Encoding**参数。下面列出的常量命名了已知编码；运行时也接受具有类似标识符字符串的其他系统支持的编码。所有成员均标记为**[Hidden, Restricted]**——它们在常规IntelliSense中省略，但IDE在**Encoding**关键字后自动显示。

#### 默认和Unicode

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **default_system_ansi** | `"default"` | 系统默认ANSI代码页。 |
| **utf_7** | `"utf-7"` | UTF-7。 |
| **utf_7_bom** | `"utf-7 bom"` | 带字节顺序标记的UTF-7。 |
| **utf_8** | `"utf-8"` | UTF-8。 |
| **utf_8_bom** | `"utf-8 bom"` | 带字节顺序标记的UTF-8。 |
| **utf_16** | `"utf-16"` | UTF-16（小端序）。 |
| **utf_16_bom** | `"utf-16 bom"` | 带字节顺序标记的UTF-16。 |
| **us_ascii** | `"us-ascii"` | 7位US-ASCII。 |

#### KOI8（西里尔文）

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **koi8_r** | `"koi8_r"` | KOI8-R，俄语。 |
| **koi8_u** | `"koi8_u"` | KOI8-U，乌克兰语。 |

#### Big5

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **big5** | `"big5"` | Big5，繁体中文。 |

#### ISO 8859

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **iso_8859_1_latin1** | `"iso-8859-1"` | Latin-1，西欧。 |
| **iso_8859_2_latin2** | `"iso-8859-2"` | Latin-2，中欧。 |
| **iso_8859_3_latin3** | `"iso-8859-3"` | Latin-3，南欧（世界语、马耳他语）。 |
| **iso_8859_4_latin4** | `"iso-8859-4"` | Latin-4，北欧。 |
| **iso_8859_5_cyrillic** | `"iso-8859-5"` | 西里尔文。 |
| **iso_8859_6_arabic** | `"iso-8859-6"` | 阿拉伯语。 |
| **iso_8859_7_greek** | `"iso-8859-7"` | 希腊语。 |
| **iso_8859_8_hebrew** | `"iso-8859-8"` | 希伯来语。 |
| **iso_8859_9_latin5_turkish** | `"iso-8859-9"` | Latin-5，土耳其语。 |
| **iso_8859_10_latin6_nordic** | `"iso-8859-10"` | Latin-6，北欧。 |
| **iso_8859_11_thai** | `"iso-8859-11"` | 泰语。 |
| **iso_8859_13_latin8_baltic** | `"iso-8859-13"` | Latin-7，波罗的海地区。 |
| **iso_8859_14_latin8_celtic** | `"iso-8859-14"` | Latin-8，凯尔特语。 |
| **iso_8859_15_latin9_euro** | `"iso-8859-15"` | Latin-9，带欧元符号的西欧。 |
| **iso_8859_16_latin10_balkan** | `"iso-8859-16"` | Latin-10，东南欧。 |

#### Windows代码页

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **windows_1250_central_europe** | `"windows-1250"` | 中欧。 |
| **windows_1251_cyrillic** | `"windows-1251"` | 西里尔文。 |
| **windows_1252_western** | `"windows-1252"` | 西欧。 |
| **windows_1253_greek** | `"windows-1253"` | 希腊语。 |
| **windows_1254_turkish** | `"windows-1254"` | 土耳其语。 |
| **windows_1255_hebrew** | `"windows-1255"` | 希伯来语。 |
| **windows_1256_arabic** | `"windows-1256"` | 阿拉伯语。 |
| **windows_1257_baltic** | `"windows-1257"` | 波罗的海地区。 |
| **windows_1258_vietnamese** | `"windows-1258"` | 越南语。 |

#### IBM/OEM代码页

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **ibm_850_western_europe** | `"850"` | OEM多语言Latin-1，西欧。 |
| **ibm_852_central_and_eastern_europe** | `"852"` | OEM Latin-2，中东欧。 |
| **ibm_855_cyrillic** | `"855"` | OEM西里尔文（主要为Unicode前俄语）。 |
| **ibm_856_hebrew** | `"856"` | 希伯来语。 |
| **ibm_857_turkish** | `"857"` | OEM土耳其语（Latin-5）。 |
| **ibm_858_western_europe** | `"858"` | 带欧元符号的OEM多语言Latin-1。 |
| **ibm_860_portuguese** | `"860"` | 葡萄牙语。 |
| **ibm_861_icelandic** | `"861"` | 冰岛语。 |
| **ibm_862_hebrew** | `"862"` | 希伯来语。 |
| **ibm_863_canadian** | `"863"` | 法语加拿大。 |
| **ibm_865_danish** | `"865"` | 北欧（丹麦语、挪威语）。 |
| **ibm_866_cyrillic** | `"866"` | 俄语。 |
| **ibm_869_greek** | `"869"` | 现代希腊语。 |
| **ibm_932_japanese** | `"932"` | 日语（Shift-JIS，Microsoft变体）。 |
| **ibm_949_korean** | `"949"` | 韩语（统一Hangul码）。 |

### 另请参阅

- [**Close** 语句](/official/Reference/Core/Close)
- [**Get** 语句](/official/Reference/Core/Get)
- [**Put** 语句](/official/Reference/Core/Put)
- [**Input #** 语句](/official/Reference/Core/Input)
- [**Line Input #** 语句](/official/Reference/Core/Line-Input)
- [**Print #** 语句](/official/Reference/Core/Print)
- [**Write #** 语句](/official/Reference/Core/Write)
- [**Lock** / **Unlock** 语句](/official/Reference/Core/Lock)
- [**FreeFile** 函数](/official/Reference/VBA/FileSystem/FreeFile)