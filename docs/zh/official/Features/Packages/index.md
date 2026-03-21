---
title: 包
parent: 功能
nav_order: 6
permalink: /Features/Packages/
redirect_from:
  - /Packages
  - /Packages/What-Is
---

# 包

在 twinBASIC 中，*包*是您可以从另一个 twinBASIC 项目引用的组件集合。组件可以是模块、类或接口。

twinBASIC 包以 TWINPACK 文件分发，包含该包中组件所需的一切。引用 TWINPACK 包的项目将整个包导入根项目的文件系统，从而没有外部依赖项。

使用 TWINPACK 包，您可以将常见组件分组到它们自己的命名空间中，同时允许方便地代码重用，而没有任何与使用外部 DLL 库相关的常见问题。

twinBASIC 配有称为 TWINSERV 的包管理器服务，使您可以轻松地与其他 twinBASIC 开发人员共享和分发 TWINPACK 包。

请注意，TWINPACK 文件目前包含您打包组件的完整源代码。计划将来将允许为持有 twinBASIC 终极版许可证的开发人员创建二进制（已编译）TWINPACK 文件。