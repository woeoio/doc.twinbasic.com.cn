---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '636d33b5-f08d-4587-a48a-27ac5fb0b5aa'
  PropagateID: '636d33b5-f08d-4587-a48a-27ac5fb0b5aa'
  ReservedCode1: '31bee10a-13da-4a4a-858b-310a58bb3289'
  ReservedCode2: '31bee10a-13da-4a4a-858b-310a58bb3289'
---

---
title: DisplayName
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/DisplayName
---
# DisplayName

返回容器分配给控件的名称，类型为**String**。只读。

语法：*object*.**DisplayName**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

宿主通常返回用户标识控件的名称——例如设计器中的`"Form1!Command1"`，或运行时选择的任何标签。控件可将此字符串包含在错误消息、日志条目或属性浏览器中，使用户能够知道消息指向哪个实例。

### 示例

此示例响应**DisplayName**更改并更新控件的工具提示。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "DisplayName"
            ToolTipText = Ambient.DisplayName
    End Select
End Sub
```

### 另见

- [LocaleID](/official/Reference/VBRUN/AmbientProperties/LocaleID) 属性
- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) 属性