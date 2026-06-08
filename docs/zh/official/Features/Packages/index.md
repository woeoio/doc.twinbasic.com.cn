---
title: "包管理"
parent: Features
nav_order: 6
permalink: /Features/Packages/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a4b250a6-6338-49a1-ab22-53f5e7150dd4'
  PropagateID: 'a4b250a6-6338-49a1-ab22-53f5e7150dd4'
  ReservedCode1: '5523c65b-cefd-464c-ab9b-c9f6a8a8410c'
  ReservedCode2: '5523c65b-cefd-464c-ab9b-c9f6a8a8410c'
---

# 包管理

在 twinBASIC 中，*包* 是一组可以从另一个 twinBASIC 项目引用的组件。组件可以是模块、类或接口。

twinBASIC 内置了一个名为 TWINSERV[^1] 的包管理器服务，允许你向其他 twinBASIC 开发者共享和分发 TWINPACK 包。

twinBASIC 包以 TWINPACK 文件分发，包含该包中组件所需的一切。引用 TWINPACK 包的项目会将整个包导入根项目的文件系统中，不会产生外部依赖。

通过 TWINPACK 包，你可以将常用组件组合到自己的命名空间中，同时允许便捷的代码重用，而无需面对使用外部 DLL 库时常见的问题。

请注意，TWINPACK 文件目前包含打包组件的完整源代码。计划在将来允许持有 twinBASIC 终极版许可证的开发者创建二进制（已编译）TWINPACK 文件。

## 主题

- [创建 TWINPACK 包](/official/Features/Packages/Creating-a-TWINPACK-package) -- 将 twinBASIC 组件打包为可分发的 TWINPACK 文件。
- [从 TWINSERV 导入包](/official/Features/Packages/Importing-a-package-from-TWINSERV) -- 浏览和安装 TWINSERV 在线仓库中的包。
- [从 TWINPACK 文件导入包](/official/Features/Packages/Importing-a-package-from-a-TWINPACK-file) -- 从本地 TWINPACK 文件安装包。
- [链接包](/official/Features/Packages/Linked-Packages) -- 将包存储在共享位置而非嵌入每个项目文件中。
- [更新包](/official/Features/Packages/Updating-a-package) -- 移除过时的包并从 TWINSERV 安装更新版本。

[^1]: TWINBASIC LTD 向用户社区提供的服务。