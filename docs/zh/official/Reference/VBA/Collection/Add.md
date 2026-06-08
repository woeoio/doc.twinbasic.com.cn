---
title: "Add 方法"
parent: Collection
permalink: /tB/Modules/Collection/Add
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '2f66396e-10b5-4698-a733-c1f497f513d8'
  PropagateID: '2f66396e-10b5-4698-a733-c1f497f513d8'
  ReservedCode1: 'a0fb2742-89af-4591-abff-fb2529d84cd1'
  ReservedCode2: 'a0fb2742-89af-4591-abff-fb2529d84cd1'
---

# Add

向 **Collection** 对象添加一个成员。

语法：*object*.**Add** *item* [ **,** *key* ] [ **,** *before* ] [ **,** *after* ]

*object*
: *必需* 一个计算结果为 **Collection** 对象的对象表达式。

*item*
: *必需* 任意类型的表达式，指定要添加到集合中的成员。

*key*
: *可选* 一个唯一的字符串表达式，指定一个键字符串，可用于代替位置索引来访问集合中的成员。

*before*
: *可选* 一个指定集合中相对位置的表达式。要添加的成员将放置在由 *before* 参数标识的成员之前。如果是数值表达式，*before* 必须是从 1 到集合的 [**Count**](/official/Reference/VBA/Collection/Count) 属性值之间的数字。如果是字符串表达式，*before* 必须与被引用成员添加到集合时指定的 *key* 相对应。指定 *before* 位置或 *after* 位置，但不能同时指定两者。

*after*
: *可选* 一个指定集合中相对位置的表达式。要添加的成员将放置在由 *after* 参数标识的成员之后。与 *before* 相同的数值和字符串键约束适用。指定 *before* 位置或 *after* 位置，但不能同时指定两者。

如果既未指定 *before* 也未指定 *after*，则新项添加到集合末尾。

无论 *before* 还是 *after* 是字符串表达式还是数值表达式，它都必须引用集合中现有的成员，否则将发生错误。

如果指定的 *key* 与集合中现有成员的 *key* 重复，也会发生错误。键比较由 [**KeyCompareMode**](/official/Reference/VBA/Collection/KeyCompareMode) 属性控制。

### 示例

此示例使用 **Add** 方法将 `Inst` 对象（名为 `Class1` 的类的实例，该类包含一个 **Public** 变量 `InstanceName`）添加到名为 `MyClasses` 的集合中。要运行此代码，请插入一个类模块，并在 `Class1` 的模块级别声明一个名为 `InstanceName` 的公共变量（类型为 `Public InstanceName`），以保存每个实例的名称。保留默认名称为 `Class1`。

```vb
Dim MyClasses As New Collection    ' Create a Collection object.
Dim Num As Integer                 ' Counter for individualizing keys.
Dim Msg As String
Dim TheName As Variant             ' Holder for names user enters.
Do
    Dim Inst As New Class1         ' Create a new instance of Class1.
    Num = Num + 1                  ' Increment Num, then get a name.
    Msg = "Please enter a name for this object." & vbNewLine _
        & "Press Cancel to see names in collection."
    TheName = InputBox(Msg, "Name the Collection Items")
    Inst.InstanceName = TheName    ' Put name in object instance.
    ' If user entered name, add it to the collection.
    If Inst.InstanceName <> "" Then
        ' Add the named object to the collection.
        MyClasses.Add Item := Inst, Key := CStr(Num)
    End If
    ' Clear the current reference in preparation for next one.
    Set Inst = Nothing
Loop Until TheName = ""
Dim x As Variant
For Each x In MyClasses
    MsgBox x.InstanceName, , "Instance Name"
Next
```

### 另请参阅

- [Count](/official/Reference/VBA/Collection/Count) 属性
- [Item](/official/Reference/VBA/Collection/Item) 方法
- [Remove](/official/Reference/VBA/Collection/Remove) 方法
- [Exists](/official/Reference/VBA/Collection/Exists) 方法