---
title: Button
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Button
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b127d289-556c-4096-bcc1-72a0794a80ff'
  PropagateID: 'b127d289-556c-4096-bcc1-72a0794a80ff'
  ReservedCode1: '0f09564d-6f7a-46d4-a491-1c4c62e5fad3'
  ReservedCode2: '0f09564d-6f7a-46d4-a491-1c4c62e5fad3'
---

# Button 类

一个由插件创建的工具栏按钮。由 [**Toolbar.AddButton**](/official/Reference/tbIDE/Toolbar#addbutton) 返回；通过 `WithEvents` 持有以接收 [**OnClick**](#onclick) 通知。按钮的 [**Caption**](#caption) 和 [**IconData**](#icondata) 在运行时可变——标题可以反映状态，图标可以反映切换。

```vb
Private WithEvents RefreshButton As Button

Private Sub Host_OnProjectLoaded()
    Set RefreshButton = Host.Toolbars(0).AddButton("MyAddIn.Refresh", "Refresh project", _
                                                    LoadResData("refresh.png", "ICONS"))
End Sub

Private Sub RefreshButton_OnClick()
    Host.CurrentProject.Save
End Sub
```


## 属性

### Caption

按钮的标题。**String**。当设置了 [**IconData**](#icondata) 时，标题在悬停时显示为工具提示。当 [**IconData**](#icondata) 为空时，标题以内联方式显示为按钮文本。可读/写。

语法：*button*.**Caption** [ = *value* ]

### IconData

图标图形，为 **Byte()** 数组——通常是嵌入的 PNG / ICO 资源的字节。传入 **Empty** 以移除图标并回退到以内联方式显示 [**Caption**](#caption)。可读/写。

语法：*button*.**IconData** [ = *bytes* ]

*bytes*
: 一个 **Byte()** 数组（或 **Empty**）。**Variant**。

### ID

通过 [**Toolbar.AddButton**](/official/Reference/tbIDE/Toolbar#addbutton) 创建按钮时分配的唯一 ID。**String**，只读。

## 事件

### OnClick

当用户点击按钮时触发。

语法：*button*_**OnClick**()