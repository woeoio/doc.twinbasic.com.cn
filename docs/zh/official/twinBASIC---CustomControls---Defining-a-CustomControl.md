# 定义自定义控件
自定义控件只是一个普通的 twinBASIC 类，但需要一些额外的特性标记和要求。

_**提示：强烈建议在尝试实现自己的自定义控件之前，先查看并试验 twinBASIC 提供的示例项目。**_

![CustomControl attribute](https://www.twinbasic.com/images/wiki/ccSampleProject.png)

***
### CustomControl() 特性
![CustomControl attribute](https://www.twinbasic.com/images/wiki/ccCustomControlAttribute.png)

这是所有自定义控件必需的特性。您必须提供项目中图像文件的相对路径，该图像将用于在窗体设计器工具箱中标识您的控件。我们建议您将图像文件放在项目的 Miscellaneous 文件夹中。

![CustomControl GridImage Folder](https://www.twinbasic.com/images/wiki/ccGridButtonImage.png)
***
### ClassId() 特性
![CustomControl ClassId Attribute](https://www.twinbasic.com/images/wiki/ccClassIdAttribute.png)

这是所有自定义控件必需的特性。您必须提供一个唯一的 CLSID (GUID)，以便窗体引擎能够使用您的控件。
##### 提示：如果您输入 ` [ ClassId () ] `，twinBASIC 会帮助您 - 只需点击"insert a randomly generated GUID"文本：

![CustomControl ClassId auto-generate](https://www.twinbasic.com/images/wiki/ccClassIdInsert.png)
***
### COMCreatable() 特性
![CustomControl COMCreatable attribute](https://www.twinbasic.com/images/wiki/ccCOMCreatable.png)

这是一个可选特性，但通常建议将此特性设置为 False，因为您不需要从外部 COM 环境实例化自定义控件。
***
### 必须实现 ICustomControl
![CustomControl ICustomControl interface](https://www.twinbasic.com/images/wiki/ccICustomControl.png)

所有自定义控件*必须*实现 CustomControls.ICustomControl。此接口目前有 3 个必须实现的方法：

    Sub Initialize(ByVal Context As CustomControlContext)
当您的控件附加到窗体时调用此方法。您必须在类字段中存储提供的 Context 对象，因为它提供了 `Repaint()` 方法，用于通知窗体引擎控件中的某些内容已更改并需要重绘。

    Sub Destroy()
当您的控件从窗体分离时调用此方法。这提供了一个打破循环引用的机会，以便您的对象实例能够正确销毁。如果您没有在对象中创建循环引用，这个实现通常可以留空。

    Sub Paint(ByVal Canvas As Canvas)
这是自定义控件最有趣的部分。它有自己的专门章节，请参见[绘制/绘画到您的控件](https://github.com/WaynePhillipsEA/twinbasic/wiki/twinBASIC---CustomControls---Painting---drawing-to-your-control)
***
### 最小属性集
由于 twinBASIC 尚不支持继承，您必须为所有自定义控件公开一组公共属性（类字段）：

    Public Name As String
    Public Left As CustomControls.PixelCount
    Public Top As CustomControls.PixelCount
    Public Width As CustomControls.PixelCount
    Public Height As CustomControls.PixelCount
    Public Anchors As Anchors = New Anchors
    Public Dock As CustomControls.DockMode
    Public Visible As Boolean
窗体设计器和窗体引擎使用这些属性，因此在您的自定义控件类中包含它们很重要。

注意，窗体设计器使用未经 DPI 缩放的像素值。因此，控件的 Left/Top/Width/Height 属性不反映 DPI 缩放。例如，如果您的控件宽度为 50 像素，那么在 DPI 150% 时，实际绘制宽度为 75 像素（参见[绘制/绘画到您的控件](https://github.com/WaynePhillipsEA/twinbasic/wiki/twinBASIC---CustomControls---Painting---drawing-to-your-control)）。
***
### 必须有一个序列化构造函数
自定义控件*必须*提供一个序列化构造函数：

    Public Sub New(Serializer As SerializationInfo)
传入的 Serializer 对象提供了一个 `Deserialize()` 方法，您可以调用该方法来加载通过窗体设计器为控件设置的属性。有关更多信息，请参见[属性表和对象序列化](https://github.com/WaynePhillipsEA/twinbasic/wiki/twinBASIC---CustomControls---Property-Sheet-&-Object-Serialization)。