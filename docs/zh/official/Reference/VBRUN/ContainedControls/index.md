---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f9ff6cce-8549-42d8-bcbe-e77cd5790925'
  PropagateID: 'f9ff6cce-8549-42d8-bcbe-e77cd5790925'
  ReservedCode1: '84f04caa-d686-48b9-b058-6d6b2b405a28'
  ReservedCode2: '84f04caa-d686-48b9-b058-6d6b2b405a28'
---

---
title: ContainedControls
parent: VBRUN Package
nav_order: 10
permalink: /tB/Packages/VBRUN/ContainedControls/
---

# ContainedControls 类

**ContainedControls**对象是一个集合，公开放置在设置为控件容器的**UserControl**实例内部的控件。**UserControl**的作者使用此集合在运行时枚举或检查这些组成控件。**UserControl**的作者只能看到消费者添加的内容——作者本人在设计时放置在**UserControl**上的控件不属于此集合。

此集合为只读：不能通过它添加或移除项，索引器仅返回现有控件。要使用它，**UserControl**的**ControlContainer**属性必须已设计时设置为**True**。

``vb
' 在承载其他控件的UserControl内部。
Private Sub UserControl_Resize()
    Dim ctl As Object
    For Each ctl In UserControl.ContainedControls
        ' 在UserControl中布局每个消费者放置的控件。
    Next ctl
End Sub
``

## 成员

### Count

返回集合中的控件数量。

语法：*object*.**Count**

*object*
: *必需* 求值为**ContainedControls**对象的对象表达式。

值为**Long**。[**Item**](#item)的有效索引范围从1到**Count**。

### Item

按从一开始的位置从集合中返回单个控件。

语法：*object*.**Item(** *index* **)**

*object*
: *必需* 求值为**ContainedControls**对象的对象表达式。

*index*
: *必需* 给出要返回的控件从一开始位置的**Long**。必须在1和[**Count**](#count)之间；否则将发生错误。

**Item**是**ContainedControls**的默认成员，因此以下两行等效：

``vb
Set ctl = UserControl.ContainedControls.Item(1)
Set ctl = UserControl.ContainedControls(1)
``

结果类型为**Object**，因为消费者可能放置了任何类型的控件。使用[**TypeName**](/official/Reference/VBA/Information/TypeName)或**TypeOf**在绑定到特定控件属性前发现具体类型。

### For Each 迭代

**ContainedControls**对象可以使用[**For Each...Next**](/official/Reference/Core/For-Each-Next)语句进行迭代，按消费者添加的顺序依次产生每个控件。隐藏的_NewEnum成员提供枚举器，不从用户代码直接调用。

``vb
Dim ctl As Object
For Each ctl In UserControl.ContainedControls
    Debug.Print TypeName(ctl)
Next ctl
``