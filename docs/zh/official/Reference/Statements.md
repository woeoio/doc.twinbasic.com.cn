---
title: "语句"
parent: Reference Section
nav_order: 2
permalink: /Reference/Statements
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bc0c80d8-c64b-430a-bf57-113514075f6e'
  PropagateID: 'bc0c80d8-c64b-430a-bf57-113514075f6e'
  ReservedCode1: 'b86b2d1e-a69a-4f7c-9657-b9513518df9e'
  ReservedCode2: 'b86b2d1e-a69a-4f7c-9657-b9513518df9e'
---

# 语句

这些语句内置于语言本身。它们由编译器理解，不在可见的运行时库中显式声明或定义。

## 字母顺序列表

* [Alias](/official/Reference/Core/Alias) -- (twinBASIC) 为内部类型、用户定义类型或接口声明替代名称

* [Call](/official/Reference/Core/Call) -- 将控制权转移给过程

* [Class](/official/Reference/Core/Class) -- 定义类

* [CoClass](/official/Reference/Core/CoClass) -- (twinBASIC) 定义可创建COM类，作为一个或多个**Interface**块的契约

* [Close](/official/Reference/Core/Close) -- 终止使用**Open**语句打开的文件的输入/输出(I/O)

* [Const](/official/Reference/Core/Const) -- 声明常量以替代字面值

* [Continue](/official/Reference/Core/Continue) -- 立即开始封闭循环的下一次迭代

* [Declare](/official/Reference/Core/Declare) -- 声明对动态链接库(DLL)中外部过程的引用

* [Delegate](/official/Reference/Core/Delegate) -- (twinBASIC) 声明函数指针类型 --- 用于间接调用的命名签名

* [Dim](/official/Reference/Core/Dim) -- 声明变量并分配存储空间

* [Do ... Loop](/official/Reference/Core/Do-Loop) -- 在条件为**True**时或直到条件变为**True**时重复语句块

* [End](/official/Reference/Core/End) -- 结束过程或块

* [Enum](/official/Reference/Core/Enum) -- 声明枚举类型

* [Erase](/official/Reference/Core/Erase) -- 重新初始化固定大小数组的元素，或释放动态数组存储空间

* [Error](/official/Reference/Core/Error) -- 模拟错误的发生

* [Event](/official/Reference/Core/Event) -- 声明用户定义事件

* [Exit](/official/Reference/Core/Exit) -- 退出**Do…Loop**、**For…Next**、**Function**、**Sub**或**Property**代码块

* [For ... Next](/official/Reference/Core/For-Next) -- 在循环计数器趋近终值时重复一组语句

* [For Each...Next](/official/Reference/Core/For-Each-Next) -- 对数组或集合中的每个元素重复一组语句

* [Function](/official/Reference/Core/Function) -- 声明**Function**过程的名称、参数和代码体

* [Get](/official/Reference/Core/Get) -- 从打开的磁盘文件读取数据到变量

* [GoSub ... Return](/official/Reference/Core/GoSub-Return) -- 在过程中分支到子程序并返回

* [GoTo](/official/Reference/Core/GoTo) -- 无条件分支到过程中的指定行

* [Handles](/official/Reference/Core/Handles) -- (twinBASIC) 将过程绑定为命名事件的事件处理程序

* [If ... Then ... Else](/official/Reference/Core/If-Then-Else) -- 根据表达式值有条件地执行一组语句

* [Input #](/official/Reference/Core/Input) -- 从打开的顺序文件读取数据并赋值给变量

* [Implements](/official/Reference/Core/Implements) -- 指定将在出现它的类中实现的接口或类

* [Interface](/official/Reference/Core/Interface) -- (twinBASIC) 使用twinBASIC语法定义COM接口

* [Kill](/official/Reference/Core/Kill) -- 从磁盘中删除文件

* [Let](/official/Reference/Core/Let) -- 将表达式的值赋给变量或属性

* [Line Input #](/official/Reference/Core/Line-Input) -- 从打开的顺序文件读取一行到字符串变量

* [Load](/official/Reference/Core/Load) -- 将对象（通常是窗体）加载到内存但不显示

* [Lock](/official/Reference/Core/Lock)、[Unlock](/official/Reference/Core/Unlock) -- 控制其他进程对打开文件的全部或部分的访问

* [LSet](/official/Reference/Core/LSet) -- 在字符串变量中左对齐字符串，或将一个用户定义类型变量复制到另一个

* [Mid =](/official/Reference/Core/Mid-equals) -- 替换字符串变量中指定数量的字符

* [MidB =](/official/Reference/Core/MidB-equals) -- **Mid =**的字节定位形式

* [Module](/official/Reference/Core/Module) -- 定义模块：不可实例化的过程、常量、类型和模块级变量容器

* [Name](/official/Reference/Core/Name) -- 重命名磁盘文件、目录或文件夹

* [New](/official/Reference/Core/New) -- 创建类的新实例

* [On Error](/official/Reference/Core/On-Error) -- 启用错误处理例程并指定其位置，或禁用错误处理

* [On ... GoTo](/official/Reference/Core/On-GoTo)、[On ... GoSub](/official/Reference/Core/On-GoSub) -- 根据表达式的值分支到多个行之一

* [Open](/official/Reference/Core/Open) -- 启用对文件的输入/输出(I/O)

* [Option](/official/Reference/Core/Option) -- 配置编译器选项

* [ParamArray](/official/Reference/Core/ParamArray) -- 将过程的最后一个参数声明为可变参数列表

* [Print #](/official/Reference/Core/Print) -- 向顺序文件写入显示格式的数据

* [Private](/official/Reference/Core/Private) -- 声明仅在声明模块内可访问的模块级变量

* [Property](/official/Reference/Core/Property) -- 声明构成属性体的**Get**、**Let**或**Set**过程

* [Protected](/official/Reference/Core/Protected) -- (twinBASIC) 声明在类及其派生类中可访问的类成员

* [Public](/official/Reference/Core/Public) -- 声明所有模块中所有过程都可访问的模块级变量

* [Put](/official/Reference/Core/Put) -- 将变量中的数据写入磁盘文件

* [RaiseEvent](/official/Reference/Core/RaiseEvent) -- 触发在类、窗体或文档的模块级声明的事件

* [Randomize](/official/Reference/VBA/Math/Randomize) -- 初始化随机数生成器

* [ReDim](/official/Reference/Core/ReDim) -- 重新分配动态数组的存储空间

* [Resume](/official/Reference/Core/Resume) -- 在错误处理例程完成后恢复执行

* [Return](/official/Reference/Core/Return) -- 从**GoSub**子程序返回，或(twinBASIC)带可选值退出过程

* [RSet](/official/Reference/Core/RSet) -- 在字符串变量中右对齐字符串

* [SavePicture](/official/Reference/Core/SavePicture) -- 将**Picture**或**Image**中的图形保存到文件

* [Seek](/official/Reference/Core/Seek) -- 设置使用**Open**语句打开的文件中的读/写位置

* [Select Case](/official/Reference/Core/Select-Case) -- 根据表达式的值执行多组语句中的一组

* [Set](/official/Reference/Core/Set) -- 将对象引用赋给变量或属性

* [Static](/official/Reference/Core/Static) -- 声明在调用之间保留值的过程局部变量

* [Stop](/official/Reference/Core/Stop) -- 暂停执行

* [Sub](/official/Reference/Core/Sub) -- 声明**Sub**过程的名称、参数和代码体

* [Type](/official/Reference/Core/Type) -- 定义包含一个或多个元素的用户定义数据类型

* [Unload](/official/Reference/Core/Unload) -- 从内存中移除对象（通常是窗体）

* [While ... Wend](/official/Reference/Core/While-Wend) -- 在给定条件为**True**时执行一系列语句

* [With](/official/Reference/Core/With) -- 在单个对象或用户定义类型上执行一系列语句

* [Write #](/official/Reference/Core/Write) -- 向顺序文件写入原始的、带分隔符的数据（与[**Input #**](/official/Reference/Core/Input)配对使用）

* [#If ... Then ... Else](/official/Reference/Core/Topic-Preprocessor)、[#Const](/official/Reference/Core/Topic-Preprocessor) -- 在编译时条件性地包含代码块的编译器指令

---

## 已弃用

* [DefBool到DefVar](/official/Reference/Core/Deftype) -- 为名称以给定字母开头的变量设置默认数据类型；已被显式**As** *type*声明取代