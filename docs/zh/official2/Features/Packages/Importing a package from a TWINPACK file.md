---
title: 从 TWINPACK 文件导入包
parent: 包
nav_order: 3
permalink: /Features/Packages/Importing-TWINPACK
redirect_from:
  - /Packages/Importing-TWINPACK
---

# 从 TWINPACK 文件导入包

要直接从 TWINPACK 文件导入包（而不是使用 TWINSERV），请按照以下步骤操作。

- 打开要使用包的项目
- 打开其中的`Settings`文件
- 导航到引用部分
- 选择"可用包"按钮
![image](Images/d9f1e4d9-1805-47e5-93aa-251151b4e914.png)

- 按"从文件导入..."按钮：

![image](Images/e35d5955-9e70-4d6e-abd7-748558da75ba.png)



- 选择要导入的 TWINPACK 文件，然后它应该出现在引用列表中（已勾选）：

![image](Images/4e4b8e4d-2a1c-42e5-8f4b-5a9b3f523ee8.png)

<br>
<br>

- 保存`Settings`并根据需要重新启动编译器

现在您已准备好使用包！在上面的示例中，我添加了对 CSharpishStringFormater 包的引用，现在我可以确认我可以在代码中访问包中的组件：

![image](Images/e9a3fd21-8e6a-4485-b52c-0c041600826b.png)
<br>
<br>