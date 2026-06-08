---
title: "从 TWINPACK 文件导入包"
parent: Package Management
nav_order: 3
permalink: /Features/Packages/Importing-TWINPACK
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '037a8687-c08b-4ad2-9a76-b704f0698bbb'
  PropagateID: '037a8687-c08b-4ad2-9a76-b704f0698bbb'
  ReservedCode1: '3ba8dacd-6961-4bf0-a3c5-03e1ea710953'
  ReservedCode2: '3ba8dacd-6961-4bf0-a3c5-03e1ea710953'
---

# 从 TWINPACK 文件导入包

要直接从 TWINPACK 文件（而非通过 TWINSERV）导入包，请按照以下步骤操作。

- 打开要使用包的项目
- 打开其中的 `Settings` 文件
- 导航到 References 部分
- 选择"Available Packages"按钮
![image](Images/d9f1e4d9-1805-47e5-93aa-251151b4e914.png)
- 按"Import from file..."按钮：
![image](Images/e35d5955-9e70-4d6e-abd7-748558da75ba.png)
- 选择要导入的 TWINPACK 文件，然后它应该出现在引用列表中（已勾选）：
![image](Images/4e4b8e4d-2a1c-42e5-8f4b-5a9b3f523ee8.png)
- 保存 `Settings` 并在需要时重启编译器

<br>

现在你可以使用该包了！在上面的示例中，我添加了对 CSharpishStringFormater 包的引用，现在我可以确认可以在代码中访问该包的组件：

![image](Images/e9a3fd21-8e6a-4485-b52c-0c041600826b.png)
<br>
<br>