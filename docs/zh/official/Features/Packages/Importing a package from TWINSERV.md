---
title: 从 TWINSERV 导入包
parent: 包
nav_order: 2
permalink: /Features/Packages/Importing-TWINSERV
redirect_from:
  - /Packages/Importing-TWINSERV
---

# 从 TWINSERV 导入包

打开要使用包的项目，打开其中的`Settings`文件并导航到引用部分。选择"可用包"按钮，服务器上所有包都应该显示：

![432410211-d9f1e4d9-1805-47e5-93aa-251151b4e914](Images/e749e10f-e361-4f15-a977-d756fcb3b5dd.png)
<br>
<br>

如果您勾选其中一个可用包，它将被下载并导入到项目中：

![432416432-4e4b8e4d-2a1c-42e5-8f4b-5a9b3f523ee8](Images/f2fd8374-fe46-40b0-8c66-2443df4dc5b3.png)
<br>
<br>

完成后，保存并关闭 Settings 文件，这将导致编译器重新启动。现在您已准备好使用包！在上面的示例中，我添加了对 CSharpishStringFormater 包的引用，现在我可以确认我可以在代码中访问包中的组件：

![432417844-e9a3fd21-8e6a-4485-b52c-0c041600826b](Images/e2a65dfe-4a9d-4524-b6d6-7a6d1bc35cdb.png)
<br>
<br>

注意：如果您有任何已发布的私有包，它们仅在登录时可用。如果您尚未登录，您将看到一个可以点击登录的警告链接：

![image](Images/0fa1272d-41d6-4d0f-b19c-f47f24a47c4d.png)
<br>
<br>

登录后，再次按"可用"按钮刷新列表。