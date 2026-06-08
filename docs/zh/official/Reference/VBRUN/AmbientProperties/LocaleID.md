---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '05b18f66-9c19-4c2b-8033-4e77c17309d2'
  PropagateID: '05b18f66-9c19-4c2b-8033-4e77c17309d2'
  ReservedCode1: '7049cf6e-abdb-47d5-a791-20689d0670f2'
  ReservedCode2: '7049cf6e-abdb-47d5-a791-20689d0670f2'
---

---
title: LocaleID
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/LocaleID
---
# LocaleID

返回容器的区域设置ID，类型为**Long**。只读。

语法：*object*.**LocaleID**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

区域设置ID（LCID）是命名语言和区域格式约定的32位Windows标识符——例如`&H0409&`表示英语（美国），`&H0407&`表示德语（德国）。控件在格式化数字、日期、货币和消息文本时应使用此值，使其输出与宿主应用程序呈现给用户的语言和约定匹配。

### 示例

此示例缓存环境**LocaleID**，用于格式化数字和日期。

```vb
Private mLocaleID As Long

Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "LocaleID"
            mLocaleID = Ambient.LocaleID
    End Select
End Sub
```

### 另见

- [DisplayName](/official/Reference/VBRUN/AmbientProperties/DisplayName) 属性
- [RightToLeft](/official/Reference/VBRUN/AmbientProperties/RightToLeft) 属性