### 什么是包？

在 twinBASIC 中，*包*是一个组件集合，您可以从其他 twinBASIC 项目中引用这些组件。这些组件可以是模块、类或接口。

twinBASIC 包以 TWINPACK 文件的形式分发，其中包含该包中组件所需的所有内容。引用 TWINPACK 包的项目会将整个包导入到根项目的文件系统中，因此不会有外部依赖。

使用 TWINPACK 包，您可以将通用组件分组到它们自己的命名空间中，同时允许方便地重用代码，而不会出现通常与使用外部 DLL 库相关的任何问题。

twinBASIC 配备了一个名为 TWINSERV 的完整包管理服务，使您能够轻松地与其他 twinBASIC 开发人员共享和分发 TWINPACK 包。

请注意，TWINPACK 文件目前包含打包组件的完整源代码。计划在未来允许持有 twinBASIC 旗舰版许可证的开发人员创建二进制（已编译）TWINPACK 文件。