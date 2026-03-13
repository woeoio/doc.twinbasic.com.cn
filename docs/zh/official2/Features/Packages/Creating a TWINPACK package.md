---
title: 创建 TWINPACK 包
parent: 包
nav_order: 1
permalink: /Features/Packages/Creating-TWINPACK
redirect_from:
  - /Packages/Creating-TWINPACK
---

# 创建 TWINPACK 包

要创建新的 TWINPACK 包，请导航到 twinBASIC 新建项目对话框，在"示例"选项卡下，选择标记为"包"的选项：

![image](Images/6ad7a172-0e1b-4276-ac89-042681552507.png)
<br>
<br>

创建项目后，您应该会看到额外的"包发布"面板作为弹出窗口：

![image](Images/9eeffbcf-d73e-4a92-bce5-811ed60aba98.png)
<br>
<br>

您现在应该通过使用包管理器"编辑"链接适当编辑命名空间、描述、许可证和可见性属性，这将带您到`Settings`文件中的各个设置。编辑它们后，请记得关闭（并保存）`Settings`文件，以便您的更改反映在包管理器面板中。

- **命名空间：**这是将在引用您的包的项目中用于对您的组件进行分组的符号。例如，提供一系列不同对话框类的包可能使用命名空间`Dialogs`。
- **描述：**这是在`Settings`->`References`列表中出现的描述性文本。如果您计划共享此包，明智的做法是仔细考虑描述，以便其他人可以通过 TWINSERV 轻松找到您的包。
- **许可证：**这个简短文本出现在`Settings`->`References`列表中，与描述一起。如果您计划共享此包，输入此字段很重要，您在此处输入的值应适当匹配 LICENCE.md 文件的内容（例如"MIT"、"LGPL"等）。
- **可见性：**确定包是仅对您可见（私有）还是对所有人可见（公共）。此处设置的值仅在您使用"发布此包"按钮在包管理器服务 TWINSERV 中发布包时生效。

*如果您不计划在 TWINSERV 上发布包，则不需要填写**许可证**或**可见性**字段。*

您现在可以像平常一样在项目中创建组件（类、模块、接口），当您完成时，就到了最终确定包的时间。您有两个选择；

<br>

## 选项 1 - 将包最终确定为 TWINPACK 文件

如果您只想创建一个可以在其他项目中使用的本地 TWINPACK 文件，请使用此选项。为此，构建过程与任何普通 twinBASIC 构建相同...只需点击 TWINBASIC 工具栏中的构建按钮：

![image](Images/4d90f313-35d5-426d-8fc3-852ca03382fa.png)
<br>
<br>
![image](Images/8d74d820-9907-4e76-ac42-71d0233187f1.png)

您将在`调试控制台`中看到构建输出通知，如上所示。

工作完成。请参阅[从 TWINPACK 文件导入包](Importing-TWINPACK)以了解如何在其他 twinBASIC 项目中引用和使用 TWINPACK 文件。

<br>

## 选项 2 - 直接将包发布到包管理器服务（TWINSERV）

如果您要将包发布到 TWINSERV，则不需要手动创建 TWINPACK 文件。只需使用"发布此包"按钮：

![创建包](Images/packPublishButton.png){:style="width:45%; height:auto;"}
<br>
<br>

***将包发布到 TWINSERV 需要您首先创建发布者帐户。如果您还没有这样做，系统将提示您在此阶段进行。***

然后系统将提示您确认包详细信息：

![创建包](Images/packPublishPackage1.png){:style="width:65%; height:auto;"}
<br>
<br>

按`是`后，包将上传到 TWINSERV。检查`调试控制台`以获取完成通知：

![创建包](Images/packPublishComplete1.png){:style="width:85%; height:auto;"}

<br>
<br>

如果包成功上传，它应该在几分钟内通过 TWINSERV 可用。如果您创建了`公共`包，其他人现在将能够看到并下载它。

请参阅[从 TWINSERV 导入包](Importing-TWINSERV)以了解如何引用和使用上传的包。

<br>
<br>

## 特殊文件 LICENCE.md 和 CHANGELOG.md

创建新的包项目时，您会在项目文件系统中看到为您创建的两个附加文件：

![创建包](Images/packLicenceFiles.png){:style="width:55%; height:auto;"}
<br>
<br>

如果您要将`公共`包发布到包管理器服务，在发布前编辑这两个文件很重要。这两个都是 markdown 文件，将来对考虑从 TWINSERV 使用您的包的用户将更加可访问。