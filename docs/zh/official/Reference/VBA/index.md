---
title: VBA Package
parent: Packages
nav_order: 2
permalink: /tB/Packages/VBA
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'efa4a5e6-7116-4f4b-9b82-c89be76b8320'
  PropagateID: 'efa4a5e6-7116-4f4b-9b82-c89be76b8320'
  ReservedCode1: 'c0c13940-fa59-44da-a80d-b6cc632b13c9'
  ReservedCode2: 'c0c13940-fa59-44da-a80d-b6cc632b13c9'
---

# VBA包

VBA内置包汇集了标准运行时库——将独立过程（**MsgBox**、**CStr**、**Mid**、**Format**等）分组的模块，以及少量内联类（**Collection**、**Err**）和twinBASIC的运行时表达式引擎。

## 类

- [Collection](/official/Reference/VBA/Collection/) —— 值或对象引用的有序集合，通过1起始索引或可选字符串键访问
- [ErrObject](/official/Reference/VBA/ErrObject/) —— 单例**Err**对象，保存最近运行时错误的信息
- [TbExpressionService](/official/Reference/VBA/TbExpressionService/) —— 运行时表达式引擎——解析和计算以字符串形式提供的twinBASIC语法表达式

## 模块

- [(Default)](/official/Reference/VBA/HiddenModule/) —— 未限定的低级内联函数——**GetMem**/**PutMem**系列、**AllocMem**、原子操作、编译时反射、代码生成和栈检查原语等
- [Compilation](/official/Reference/VBA/Compilation/) —— 编译时内联函数，记录调用位置的项目、组件、过程和源文件
- [Constants](/official/Reference/VBA/Constants/) —— 无需限定即可访问的全局字符、指针和错误基常量（**vbCrLf**、**vbNullString**、**vbObjectError**等）
- [Conversion](/official/Reference/VBA/Conversion/) —— 类型强制转换（**CBool**、**CDate**、**CType**等）、数字与字符串解析、进制转换和**Variant**错误构造
- [DateTime](/official/Reference/VBA/DateTime/) —— 读取系统时钟、从组件构建**Date**值、从字符串解析、按选定单位偏移
- [FileSystem](/official/Reference/VBA/FileSystem/) —— 基于路径名和文件号的文件和目录操作
- [Financial](/official/Reference/VBA/Financial/) —— 年金计算、可变现金流的内部收益率分析和资产折旧
- [Information](/official/Reference/VBA/Information/) —— **Is…**谓词、**VarType**/**TypeName**、数组边界和构造、原始指针（**ObjPtr**、**StrPtr**、**VarPtr**）和**RGB**颜色辅助函数
- [Interaction](/official/Reference/VBA/Interaction/) —— 对话框（**MsgBox**、**InputBox**）、内联条件（**Choose**、**Switch**、**IIf**）、进程启动、注册表辅助、环境和动态分派原语
- [Math](/official/Reference/VBA/Math/) —— 符号和绝对值、三角函数、指数和对数、平方根、舍入和伪随机数
- [Strings](/official/Reference/VBA/Strings/) —— 测量、搜索、切片、填充、连接、拆分和格式化**String**值

::: info

上面列出的模块用于文档分组，它们并不总是与VBA包的实现细节完全匹配。
:::