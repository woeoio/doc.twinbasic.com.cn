---
url: /zh/official/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization.md
---
# 属性表和对象序列化

窗体设计器属性表将获取您通过 CustomControl 类公开的***公共***自定义属性（字段）。例如，添加字段 `Public MyField As Long` 将自动在窗体设计器的控件属性表中显示：

![CustomControl MyField 属性表](/images/official/ccMyFieldPropertySheet1a.png)

然后这会作为您窗体 JSON 结构中的属性持久化到项目中：

![CustomControl MyField JSON](/images/official/ccMyFieldJson1a.png)

使其工作的关键是您的序列化构造函数，它可能看起来像这样：

```
Public Sub New(Serializer As SerializationInfo)
   If Not Serializer.Deserialize(Me) Then
      InitializeDefaultValues  ' 您需要实现这个
   End If
End Sub
```

如果 `Deserialize(Me)` 返回 `True`，那么您的类属性与通过窗体设计器设置的属性同步。如果返回 `False`，则表示控件刚刚添加到窗体中，这给您提供了为自定义公共属性设置任何合适默认值的机会。窗体设计器会注意到您在序列化构造函数中设置的默认值，以便保持属性表同步。

***

### 默认值

设置默认值的替代方法是将它们内联到类字段定义中：

![CustomControl MyField = 42](/images/official/ccMyFieldPropertySheet1b.png)

序列化构造函数中的 `Deserialize(Me)` 调用将覆盖属性值，如果控件正在与持久化的属性表数据同步。

***

### 枚举

您在 twinBASIC 项目中定义的枚举得到支持。只需使用枚举公开一个类字段：

![CustomControl 枚举属性表示例](/images/official/ccMyEnumFieldPropertySheet.png)

注意：枚举作为字符串持久化到窗体 JSON 结构中，因此在对 CustomControl 进行更改/更新时，请记住这一点，以免通过重命名枚举值引入破坏性更改。

***

### 对象

您在 twinBASIC 项目中定义的类对象得到支持。对于任何公开的对象，您***必须***提供 ClassId 属性，以便序列化可以识别它。

![CustomControl 类属性表示例](/images/official/ccMyFieldClass.png)

***

### 数组

数组得到支持。窗体设计器允许添加新元素、删除元素和重新排序元素（通过拖放）。

![CustomControl 数组属性表示例](/images/official/ccMyFieldArray.png)

***

### 属性 Get / Let

支持自定义属性过程。如果您希望属性更改触发控件重绘，您会发现需要使用 Property Get / Let 过程。

![CustomControl 自定义属性示例](/images/official/ccMyFieldCustomProperty.png)

注意***私有***字段和属性不会成为序列化的一部分，因此不会出现在属性表中。

***

### 避免变体

序列化不支持变体或通用对象。始终使用强类型数据类型。

***

### 事件

您在类中定义的事件将在事件属性表中公开：

![CustomControl 属性](/images/official/ccEvents.png)

目前，窗体设计器还不支持窗体背后的代码，因此此功能尚未完成。

***

### 提示

* 如果您对 CustomControl 类进行更改，例如公开新属性或更改控件的绘制方式，这些更改将立即反映到任何打开的窗体设计器中。当您返回到窗体设计器时，它们会显示一个"重新同步"按钮，一旦按下，更改就会显现。

* 在 IDE 中运行时，序列化通过 JSON 进行，但在编译的 DLL/EXE 中运行时，通过二进制格式进行。传递给序列化构造函数的 `SerializationInfo` 对象在 IDE 中运行时是不同的实现，但作为 CustomControl 实现者，这对您应该是透明的。

* 在对 CustomControl 进行更改或更新时，始终考虑向后兼容性。例如，如果您重命名公开属性，通过属性表存储的旧属性值将不会反序列化到您的新属性中。
