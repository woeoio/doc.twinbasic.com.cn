---
title: "委托类型"
parent: Language Syntax
nav_order: 4
permalink: /Features/Language/Delegates
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a5b78759-d446-475a-8b69-d994e313c029'
  PropagateID: 'a5b78759-d446-475a-8b69-d994e313c029'
  ReservedCode1: '6aab486b-a1d4-483a-8bff-077cf8ae69f9'
  ReservedCode2: '6aab486b-a1d4-483a-8bff-077cf8ae69f9'
---

# 用于间接调用的委托类型

twinBASIC 原生支持通过指针调用函数，使用 `Delegate` 语法。twinBASIC 中的委托是与 LongPtr 兼容的函数指针类型。`AddressOf` 返回委托类型，也与 `LongPtr` 向后兼容。

## 基本用法

语法如下：

```vb
Private Delegate Function Delegate1 (ByVal A As Long, ByVal B As Long) As Long

Private Sub Command1_Click()
    Dim myDelegate As Delegate1 = AddressOf Addition
    MsgBox "Answer: " & myDelegate(5, 6)
End Sub

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function
```

## 高级用法

委托类型也可以在接口/API 声明中以及作为用户定义类型的成员使用。例如 `ChooseColor` API：

```vb
Public Delegate Function CCHookProc (ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

Public Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As LongPtr
    hInstance As LongPtr
    rgbResult As Long
    lpCustColors As LongPtr
    Flags As ChooseColorFlags
    lCustData As LongPtr
    lpfnHook As CCHookProc 'Delegate function pointer type instead of LongPtr
    lpTemplateName As LongPtr
End Type
```

如果你已有代码将 `Long`/`LongPtr` 赋值给 `lpfnHook` 成员，它将继续正常工作，但现在你还可以获得类型安全的好处，将其设置为匹配委托的方法：

```vb
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

'...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```