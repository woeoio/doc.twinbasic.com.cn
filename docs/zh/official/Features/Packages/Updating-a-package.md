---
title: "更新包"
parent: Package Management
nav_order: 4
permalink: /Features/Packages/Updating
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b20500ac-5872-4475-ba1e-2ad7afd5ada8'
  PropagateID: 'b20500ac-5872-4475-ba1e-2ad7afd5ada8'
  ReservedCode1: 'ca430a48-ac0c-4493-b7dc-bcbb6dba2ef2'
  ReservedCode2: 'ca430a48-ac0c-4493-b7dc-bcbb6dba2ef2'
---

# 更新包

当加载项目时，编译器会通知你 TWINSERV 上是否有项目中的包的新版本可用：

![image](Images/db4636f6-d988-4e31-94a2-c4c170418e81.png)


如果你发现 TWINSERV 上有更新的包可用，必须先通过取消勾选来移除项目中的旧包。打开 Settings 到 References，取消勾选框。然后你将被提示从文件系统中移除它：

![415937809-87a11bc3-9a9c-4551-86c2-69d206d95087](Images/a1331a0e-3ba3-45cf-8dc3-2e24f0fa1fe6.png)
<br/>
<br/>
<br/>

选择"Remove it"。

然后转到 Available Packages 选项卡，勾选最新版本的框，**等下载完成后**（可能需要几秒钟，因为有些包有数 MB），保存更改。在调试控制台中你会首先看到

`[PACKAGES] downloading package '{1FCDB98D-617D-4995-9736-2ED0E4746A10}/8/7/0/498' from the online database... `

然后当第二条消息

`[PACKAGES] downloading package '{1FCDB98D-617D-4995-9736-2ED0E4746A10}/8/7/0/498' from the online database... [DONE]`

出现时，表示完成并可以保存了。复选框也会从旋转状态变为条目移到顶部（在内置包下方），并在前面加上 `[IMPORTED]`。

如果保存后编译器没有自动重启，手动重启编译器，但通常会自动重启。

**注意：** 将来会有简单的更新选项。请留意该变化。