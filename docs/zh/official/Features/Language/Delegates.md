---
title: 委托类型
parent: 语言语法
nav_order: 4
permalink: /Features/Language/Delegates
---

# 用于间接调用的委托类型

原生支持通过指针调用函数，通过 `Delegate` 语法。twinBASIC 中的委托是一个与 LongPtr 兼容的函数指针类型。`AddressOf` 返回一个委托类型，也与 `LongPtr` 向后兼容。

## 基本用法

语法如下所示：

```vb
Private Delegate Function Delegate1 (ByVal A As Long, ByVal B As Long) As Long

Private Sub Command1_Click()
    Dim myDelegate As Delegate1 = AddressOf Addition
    MsgBox "答案: " & myDelegate(5, 6)
End Sub

Public Function Addition(ByVal A As Long, ByVal B As Long) As Long
    Return A + B
End Function
```

## 高级用法

委托类型也可以用于接口/API 声明和作为用户定义类型的成员。例如，`ChooseColor` API：

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
    lpfnHook As CCHookProc '委托函数指针类型而不是 LongPtr
    lpTemplateName As LongPtr
End Type
```

如果您已经有代码将 `Long`/`LongPtr` 赋值给 `lpfnHook` 成员，它将继续正常工作，但现在您还可以获得将其设置为匹配委托的方法的类型安全优势：

```vb
Dim tCC As CHOOSECOLOR
tCC.lpfnHook = AddressOf ChooseColorHookProc

'...

Public Function ChooseColorHookProc(ByVal hwnd As LongPtr, ByVal uMsg As Long, ByVal wParam As LongPtr, ByVal lParam As LongPtr) As LongPtr

End Function
```