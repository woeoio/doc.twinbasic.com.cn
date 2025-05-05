# 属性表和对象序列化
窗体设计器属性表将获取您通过自定义控件类公开的任何**_public_**自定义属性（字段）。例如，添加一个字段 `Public MyField As Long` 将自动显示在窗体设计器的控件属性表中：

![CustomControl MyField propertySheet](https://www.twinbasic.com/images/wiki/ccMyFieldPropertySheet1a.png)

这然后会作为属性保存在您的项目的窗体 JSON 结构中：

![CustomControl MyField JSON](https://www.twinbasic.com/images/wiki/ccMyFieldJson1a.png)

使其工作的关键是您的序列化构造函数，它可能看起来像这样：

    Public Sub New(Serializer As SerializationInfo)
       If Not Serializer.Deserialize(Me) Then
          InitializeDefaultValues  ' 您实现这个
       End If
    End Sub
如果 `Deserialize(Me)` 返回 `True`，那么您的类属性已与通过窗体设计器设置的属性同步。如果它返回 `False`，则表示控件刚刚被添加到窗体中，这给您一个机会为您的自定义公共属性设置任何合适的默认值。窗体设计器会注意到您在序列化构造函数中设置的默认值，以便您的属性表保持同步。
***
### 默认值
设置默认值的另一种方法是将它们内联到类字段定义中：

![CustomControl MyField = 42](https://www.twinbasic.com/images/wiki/ccMyFieldPropertySheet1b.png)

如果控件正在从持久化的属性表数据同步，序列化构造函数中的 `Deserialize(Me)` 调用将覆盖属性值。
***
### 枚举
支持您在 twinBASIC 项目中定义的枚举。只需使用枚举公开一个类字段：

![CustomControl enumeration property sheet example](https://www.twinbasic.com/images/wiki/ccMyEnumFieldPropertySheet.png)

注意：枚举作为字符串持久化到窗体 JSON 结构中，所以在对自定义控件进行更改/更新时请记住这一点，以免通过重命名枚举值引入破坏性更改。
***
### 对象
支持您在 twinBASIC 项目中定义的类对象。您***必须***为任何公开的对象提供 ClassId 特性，以便序列化可以识别它。

![CustomControl class property sheet example](https://www.twinbasic.com/images/wiki/ccMyFieldClass.png)
***
### 数组
支持数组。窗体设计器允许添加新元素、删除元素和重新排序元素（通过拖放）。

![CustomControl array property sheet example](https://www.twinbasic.com/images/wiki/ccMyFieldArray.png)
***
### Property Get / Let
支持自定义属性过程。如果您希望属性更改触发控件重绘，您会发现需要使用 Property Get / Let 过程。

![CustomControl custom property example](https://www.twinbasic.com/images/wiki/ccMyFieldCustomProperty.png)

请注意，_**private**_ 字段和属性不属于序列化的一部分，因此不会出现在属性表中。
***
### 避免使用 Variants
序列化不支持 Variants 或通用 Objects。始终使用强类型数据类型。
***
### 事件
您在类中定义的事件将在事件属性表中公开：

![CustomControl attribute](https://www.twinbasic.com/images/wiki/ccEvents.png)

目前，窗体设计器还不支持代码隐藏窗体，所以这个功能还不完整。
***
### 提示
- 如果您对自定义控件类进行更改，例如公开新属性或更改控件的绘制方式，这些更改将立即反映到任何打开的窗体设计器中。当您返回窗体设计器时，它们会显示一个"resync"按钮，按下后更改就会显现。

- 序列化在 IDE 中运行时通过 JSON 进行，但在编译的 DLL/EXE 中运行时通过二进制格式进行。传递给您的序列化构造函数的 `SerializationInfo` 对象在 IDE 中运行时是一个不同的实现，但作为自定义控件实现者，这对您来说应该是透明的。

- 在对自定义控件进行更改或更新时，始终要考虑向后兼容性。例如，如果您重命名了一个公开的属性，通过属性表存储的旧属性值将不会反序列化到您的新属性中。