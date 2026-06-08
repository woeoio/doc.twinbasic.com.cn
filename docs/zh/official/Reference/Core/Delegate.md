---
title: Delegate
parent: Statements
permalink: /tB/Core/Delegate
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4bcec2ef-ab03-496c-8fa3-1dd0f4719ab7'
  PropagateID: '4bcec2ef-ab03-496c-8fa3-1dd0f4719ab7'
  ReservedCode1: '9cee2987-c3ce-44a1-be7b-48a0deeaade3'
  ReservedCode2: '9cee2987-c3ce-44a1-be7b-48a0deeaade3'
---

# Delegate

声明函数指针类型——一种命名的签名，变量、参数和UDT成员可以持有对匹配的可调用对象的*引用*。委托值在位级别与 **LongPtr** 兼容，但在赋值、传递或调用时增加了编译时签名检查。

::: info
**Delegate** 语句是twinBASIC扩展。在经典VBA中，函数指针是由 **AddressOf** 产生的无类型 **LongPtr** 值，通过自定义机制（`DispCallFunc`、`CallWindowProc` 垫片等）间接调用。
:::

语法：
> [ **Public** \| **Private** ] **Delegate Function** *name* [ **CDecl** ] **(** [ *arglist* ] **)** **As** *type*

**Public**
: *可选* 在ActiveX项目中，将委托类型导出到类型库，使其他项目的使用者可以看到 *name*。

**Private**
: *可选* 不将委托导出到类型库；仅在项目内可用。

*name*
: 命名委托类型的标识符。必须是有效的twinBASIC标识符。

**CDecl**
: *可选* 将委托标记为使用C调用约定（`cdecl`——调用者清理栈），用于建模C运行时API（如 `qsort`）所期望的回调。默认为 `stdcall`。参见[API声明](/official/Features/Advanced/API-Declarations#cdecl-callbacks)。

*arglist*
: *可选* 参数签名，与 [**Sub**](/official/Reference/Core/Sub) 或 [**Function**](/official/Reference/Core/Function) 的写法完全相同——逗号分隔的 `[ ByVal | ByRef ] [ Optional ] *varname* [ As *type* ]` 部分。

*type*
: 委托签名的返回类型。

声明之后，*name* 可在允许类型的任何地方使用：声明函数指针类型的变量和参数、作为 [**Type**](/official/Reference/Core/Type)（UDT）成员的类型、或作为 [**Declare**](/official/Reference/Core/Declare) 语句或 [**Interface**](/official/Reference/Core/Interface) 成员的参数类型。

委托值通常由 **AddressOf** 产生，它产生一个对具有匹配签名的常规过程的委托类型引用。为向后兼容，委托变量也可以接受通过其他方式获得的普通 **LongPtr** 地址——该值不经检查直接通过。委托变量的调用方式与函数相同：`result = myDelegate(arg1, arg2)`。

### 示例

一个基本委托，声明、赋值并调用：

```vb
Private Delegate Function Operation (ByVal A As Long, ByVal B As Long) As Long

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function

Private Sub Command1_Click()
    Dim op As Operation = AddressOf Addition
    MsgBox "Answer: " & op(5, 6)
End Sub
```

委托用作UDT成员，建模Windows `CHOOSECOLOR` 结构的 `lpfnHook` 字段。将 **Long**/**LongPtr** 赋值给 `lpfnHook` 的现有代码继续工作；新代码可以直接赋值 **AddressOf** *Handler* 并在编译时检查签名：

```vb
Public Delegate Function CCHookProc (ByVal hwnd As LongPtr, ByVal uMsg As Long, _
    ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc       ' Typed function pointer instead of LongPtr.
    lpTemplateName As LongPtr
End Type

Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc
```

**CDecl** 委托，用作C运行时 `qsort` API的比较器参数：

```vb
Private Delegate Function LongComparator CDecl ( _
    ByRef a As Long, _
    ByRef b As Long _
) As Long

Private Declare PtrSafe Sub qsort CDecl Lib "msvcrt" ( _
    ByRef pFirst As Any, _
    ByVal lNumber As Long, _
    ByVal lSize As Long, _
    ByVal pfnComparator As LongComparator _
)
```

### 另请参阅

- [**Declare** 语句](/official/Reference/Core/Declare)
- [**Type** 语句](/official/Reference/Core/Type)
- [**Interface** 语句](/official/Reference/Core/Interface)
- [**Alias** 语句](/official/Reference/Core/Alias)
- [委托类型](/official/Features/Language/Delegates)
- [API声明](/official/Features/Advanced/API-Declarations)
- [增强指针功能](/official/Features/Language/Pointers)