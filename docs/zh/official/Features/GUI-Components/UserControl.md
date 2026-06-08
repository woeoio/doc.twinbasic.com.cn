---
title: "UserControl 增强"
parent: GUI Components
nav_order: 7
permalink: /Features/GUI-Components/UserControl
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4b5a1906-5065-4b38-9537-9760a5f88389'
  PropagateID: '4b5a1906-5065-4b38-9537-9760a5f88389'
  ReservedCode1: '1c3860cd-2bed-4125-b86d-4e5e54cbc85a'
  ReservedCode2: '1c3860cd-2bed-4125-b86d-4e5e54cbc85a'
---

# UserControl 增强

UserControl 对象现在提供了新功能以实现更好的控件处理。

## PreKeyEvents 属性

UserControl 对象现在提供了新的布尔属性 `PreKeyEvents`，启用相应的新事件 `PreKeyDown` 和 `PreKeyUp`。这些允许在不使用 OS 或 COM 钩子的情况下处理特殊按键（如 Tab、方向键等）（例如，基于 `IOleInPlaceActiveObject` 接口）。

这些适用于 UserControl 内的所有子窗口，包括由 `CreateWindowEx` 创建的。

## 访问原始消息数据

你可以在 `PreKeyDown`/`PreKeyUp` 事件处理程序中使用新的 `PreKeyWParam`/`PreKeyLParam` 和 `PreKeyTargetHwnd` UserControl 属性访问原始消息数据。

## 示例

```vb
Private Sub UserControl_Initialize()
    PreKeyEvents = True
End Sub

Private Sub UserControl_PreKeyDown(KeyCode As Integer, Shift As Integer)
    If KeyCode = vbKeyTab Then
        Debug.Print "Tab intercepted; lParam=" & CStr(PreKeyLParam)
    End If
End Sub
```