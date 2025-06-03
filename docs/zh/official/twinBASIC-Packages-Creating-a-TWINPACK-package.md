### 创建 TWINPACK 包

要创建新的 TWINPACK 包，请导航到 twinBASIC 新建项目对话框，在"Samples"标签下，选择标记为"Package"的选项：

![image](https://github.com/user-attachments/assets/6ad7a172-0e1b-4276-ac89-042681552507)
<br>
<br>

创建项目后，您应该能看到额外的"PACKAGE PUBLISHING"面板作为弹出窗口：

![image](https://github.com/user-attachments/assets/9eeffbcf-d73e-4a92-bce5-811ed60aba98)
<br>
<br>

现在您应该通过使用包管理器的"EDIT"链接适当编辑命名空间、描述、许可证和可见性属性，这些链接会将您带到 `Settings` 文件中的各个设置。编辑完后，记得关闭（并保存）`Settings` 文件，以便您的更改反映在包管理器面板中。

- **Namespace（命名空间）：** 这是将用于在引用您的包的项目中对组件进行分组的符号。例如，提供一系列不同对话框类的包可能使用命名空间 `Dialogs`。
- **Description（描述）：** 这是将出现在 `Settings`->`References` 列表中的描述性文本。如果您计划共享此包，最好仔细考虑描述，以便其他人可以通过 TWINSERV 轻松找到您的包。
- **Licence（许可证）：** 这段简短的文本与描述一起出现在 `Settings`->`References` 列表中。如果您计划共享此包，填写此字段很重要，并且您在此处输入的值应该与 LICENCE.md 文件的内容相匹配（例如"MIT"、"LGPL"等）。
- **Visibility（可见性）：** 确定包是仅对您可见（PRIVATE）还是对所有人可见（PUBLIC）。此处设置的值仅在您使用"PUBLISH THIS PACKAGE"按钮将包发布到包管理器服务 TWINSERV 时生效。

*如果您不打算在 TWINSERV 上发布您的包，则无需填写 **Licence** 或 **Visibility** 字段。*

现在您可以像往常一样在项目中创建组件（类、模块、接口），完成后就可以最终确定包了。您有两个选项：

<br>

### 选项 1 - 将包最终确定为 TWINPACK 文件

如果您只想创建可以在其他项目中使用的本地 TWINPACK 文件，请使用此选项。对此，构建过程与任何普通的 twinBASIC 构建相同...只需点击 TWINBASIC 工具栏中的构建按钮：

![image](https://github.com/user-attachments/assets/4d90f313-35d5-426d-8fc3-852ca03382fa)
<br>
<br>
![image](https://github.com/user-attachments/assets/8d74d820-9907-4e76-ac42-71d0233187f1)

您将在`DEBUG CONSOLE`中看到构建输出通知，如上所示。

工作完成。有关在其他 twinBASIC 项目中引用和使用 TWINPACK 文件的信息，请参见[从 TWINPACK 文件导入包](https://github.com/WaynePhillipsEA/twinbasic/wiki/twinBASIC-Packages-Importing-a-package-from-a-TWINPACK-file)。

<br>

### 选项 2 - 直接将包发布到包管理器服务（TWINSERV）

如果您要将包发布到 TWINSERV，则无需手动创建 TWINPACK 文件。只需使用"PUBLISH THIS PACKAGE"按钮：

<img src="https://twinbasic.com/images/wiki/packPublishButton.png" alt="Create Package" width="45%">
<br>
<br>

***在 TWINSERV 上发布包需要您先创建发布者账户。如果您尚未这样做，系统将在此阶段提示您创建。***

然后系统会提示您确认包的详细信息：

<img src="https://twinbasic.com/images/wiki/packPublishPackage1.png" alt="Create Package" width="65%">
<br>
<br>

按下"YES"后，包将上传到 TWINSERV。查看`DEBUG CONSOLE`中的完成通知：

<img src="https://twinbasic.com/images/wiki/packPublishComplete1.png" alt="Create Package" width="85%">
<br>
<br>

如果包上传成功，它应该在几分钟内通过 TWINSERV 可用。如果您创建了"PUBLIC"包，其他人此时将能够看到和下载它。

有关引用和使用已上传包的信息，请参见[从 TWINSERV 导入包](https://github.com/WaynePhillipsEA/twinbasic/wiki/twinBASIC-Packages-Importing-a-package-from-TWINSERV)。

<br>
<br>

### 特殊文件 LICENCE.md 和 CHANGELOG.md

当您创建新的包项目时，您会看到在项目文件系统中为您创建了两个额外的文件：

<img src="https://twinbasic.com/images/wiki/packLicenceFiles.png" alt="Create Package" width="55%">
<br>
<br>

如果您要将"PUBLIC"包发布到包管理器服务，在发布前编辑这两个文件很重要。这两个都是 markdown 文件，将来会更方便那些考虑从 TWINSERV 使用您的包的用户访问。