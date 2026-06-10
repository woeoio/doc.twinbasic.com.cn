---
title: "64位编译"
parent: Features
nav_order: 9
permalink: /Features/64bit
AIGC:
  ContentProducer: "001191110102MAD55U9H0F10002"
  ContentPropagator: "001191110102MAD55U9H0F10002"
  Label: "1"
  ProduceID: "1d0aeb0e-2488-4f33-a84f-cb31d7938f7b"
  PropagateID: "1d0aeb0e-2488-4f33-a84f-cb31d7938f7b"
  ReservedCode1: "805c34a9-8efa-446d-8bfb-fa443c4d3240"
  ReservedCode2: "805c34a9-8efa-446d-8bfb-fa443c4d3240"
---

# 64位编译

twinBASIC 除了编译 32 位外，还能编译原生 64 位可执行文件。其语法兼容 VBA7：使用 `LongPtr` 数据类型和标记 API 的标准关键字 `PtrSafe`。

使用 [Fusion](/official/Features/Fusion) 功能，还可以在 32 位*和* 64 位项目中同时使用 32 位和 64 位 ActiveX 控件。

## 示例语法

```vb
Public Declare PtrSafe Sub foo Lib "bar" (ByVal hWnd As LongPtr)
```

## 重要注意事项

::: warning
要让大多数 32 位应用程序在 64 位下正常工作，还需要做更多工作。只有部分 `Long` 变量需要更改，这取决于它们对应的 C/C++ 数据类型（种类繁多）。需要改为 `LongPtr` 的示例包括：`HWND, HBITMAP, HICON` 和 `HANDLE` 等句柄；`void*, PVOID, ULONG_PTR, DWORD_PTR` 以及以 `Long` 传递时的 `LPWSTR/PWSTR/LPCWSTR/WCHAR*` 等指针；以及 CopyMemory 和内存分配函数中出现的 `SIZE_T` 类型。
:::

虽然 `PtrSafe` 关键字并非强制要求，但这些更改仍然是必须的。此外，任何处理内存指针的代码都必须考虑到，所有上述类型（以及更多未提及的类型）以及 v-table 条目，现在可能是 4 或 8 字节，而大多数程序员传统上硬编码为 4 字节。UDT 对齐问题也更加频繁出现。这一切都非常复杂，在迁移到 64 位时应寻求资源和建议（不过请记住，32 位仍然受支持，因此这不是强制要求）。

对于常见的 Windows API 和 COM 接口，社区开发了一个提供 64 位兼容定义的包：[Windows Development Library for twinBASIC (WinDevLib)](https://github.com/fafalone/WinDevLib)。
