---
title: 64位编译
parent: 功能
nav_order: 9
permalink: /Features/64bit
---

# 64位编译
twinBASIC 除了可以编译 32 位可执行文件外，还可以编译原生 64 位可执行文件。语法与此处的 VBA7 兼容：`LongPtr` 数据类型和标记 API 的 `PtrSafe` 标准。

## 语法示例

```vb
Public Declare PtrSafe Sub foo Lib "bar" (ByVal hWnd As LongPtr)
```

## 重要注意事项

> [!重要]
> 要使大多数 32 位应用程序正确工作为 64 位，需要做的远不止这些。只有一部分 `Long` 变量需要更改，这取决于它们的 C/C++ 数据类型，而这样的类型有很多。需要改为 `LongPtr` 的示例包括句柄如 `HWND, HBITMAP, HICON,` 和 `HANDLE`；指针如 `void*, PVOID, ULONG_PTR, DWORD_PTR,` 和 `LPWSTR/PWSTR/LPCWSTR/WCHAR*`（当作为 `Long` 传递时）；以及在 CopyMemory 和内存分配函数中发现的 `SIZE_T` 类型。

虽然 `PtrSafe` 关键字不是强制性的，但这些更改仍然必须进行。此外，任何处理内存指针的代码都必须考虑到所有提到的类型（以及许多未提及的类型），以及 v-table 条目，现在都是 4 或 8 字节，而大多数程序员传统上都硬编码为 4 字节。还有更频繁的 UDT 对齐问题。这都非常复杂，在向 64 位迁移时应该寻求资源和指导（但请记住，32 位仍然受支持，所以这不是必需项）。

对于常见的 Windows API 和 COM 接口，有一个社区开发的包提供了 64 位兼容定义：[适用于 twinBASIC 的 Windows 开发库 (WinDevLib)](https://github.com/fafalone/WinDevLib)。