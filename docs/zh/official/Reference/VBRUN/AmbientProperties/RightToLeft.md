---
title: RightToLeft
parent: AmbientProperties
permalink: /tB/Packages/VBRUN/AmbientProperties/RightToLeft
---
# RightToLeft

返回容器是否为从右到左语言布局，类型为**Boolean**。只读。

语法：*object*.**RightToLeft**

*object*
: *必需* 求值为**AmbientProperties**对象的对象表达式。

当宿主为从右到左语言（如阿拉伯语或希伯来语）渲染UI时，此属性为**True**；为从左到右语言时为**False**。显示文本或方向性装饰（滚动条、树形展开器、对齐默认值）的控件应在此属性为**True**时镜像其布局，使其在RTL容器内自然阅读。

### 示例

此示例响应**RightToLeft**更改，触发重绘以镜像布局。

```vb
Private Sub UserControl_AmbientChanged(PropertyName As String)
    Select Case PropertyName
        Case "RightToLeft"
            UserControl.Refresh    ' 为RTL语言使用镜像布局重绘
    End Select
End Sub
```

### 另见

- [LocaleID](/official/Reference/VBRUN/AmbientProperties/LocaleID) 属性
- [TextAlign](/official/Reference/VBRUN/AmbientProperties/TextAlign) 属性