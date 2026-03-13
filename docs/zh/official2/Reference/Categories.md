---
title: 类别
parent: 参考部分
nav_order: 1
permalink: /zh/Reference/Categories
---

本章列出了构成twinBASIC语言核心的全局语句和过程。

> [!WARNING]
> 以下内容正在编写中

# 分类列表

## 编译器控制

* [Option](../tB/Core/Option) - 配置编译器选项
* [#If ... Then ... Else](../tB/Core/Topic-Preprocessor) - 启用或禁用封闭代码的编译

## 声明和定义

* [Class](../tB/Core/Class), [Module](../tB/Core/Module) - 定义类或模块
* [Sub](../tB/Core/Sub) - 定义过程
* [Function](../tB/Core/Function) - 定义函数
* [Property](../tB/Core/Property) - 定义属性
* [Enum](../tB/Core/Enum) - 定义带有相关常量的枚举类型
* [Type](../tB/Core/Type) - 声明用户定义的数据类型（UDT）/结构
* [Declare](../tB/Core/Declare) - 声明外部/库过程或函数
* [Event](../tB/Core/Event) - 声明事件
* [Implements](../tB/Core/Implements) - 指定类实现给定接口
* [End](../tB/Core/End) - 终止执行，结束函数、子程序、属性或枚举定义，结束类型声明；结束类或模块，结束If、Select或With块

## 流程控制

语句：

* [Call](../tB/Core/Call) - 调用过程或函数
* [Do ... Loop](../tB/Core/Do-Loop), [For ... Next](../tB/Core/For-Next), [For Each ... Next](../tB/Core/For-Each-Next), [While ... Wend](../tB/Core/While-Wend) - 循环
* [If ... Then ... Else](../tB/Core/If-Then-Else) - 条件执行代码
* [Continue](../tB/Core/Continue) - 跳到循环的下一次迭代
* [Exit](../tB/Core/Exit) - 退出循环、过程、函数或属性
* [Select Case](../tB/Core/Select-Case) - 执行由表达式选择的代码块
* [With](../tB/Core/With) - 将变量或表达式引入作用域
* [Goto](../tB/Core/GoTo), [GoSub ... Return](../tB/Core/GoSub-Return) - 将执行转移到另一个位置
* [Resume](../tB/Core/Resume) - 在捕获错误后恢复执行
* [On Error](../tB/Core/On-Error) - 指定发生错误时的操作
* [On ... GoTo](../tB/Core/On-GoTo), [On ... GoSub](../tB/Core/On-GoSub) - 将执行转移到由表达式选择的位置
* [Stop](../tB/Core/Stop) - 中断执行

另见：

* [End](../tB/Core/End) - 终止执行。

## 变量声明

语句：

* [Dim](../tB/Core/Dim) - 声明类型化标量或数组变量
* [Const](../tB/Core/Const) - 声明常量
* [Public](../tB/Core/Public) - 在类或模块中声明公共变量
* [Private](../tB/Core/Private) - 在类或模块中声明私有变量
* [Static](../tB/Core/Static) - 声明静态持续时间的变量

另见：

* [Erase](../tB/Core/Erase) - 清除/填充数组
* [ReDim](../tB/Core/ReDim) - 更改数组大小

## 变量赋值和修改

语句：

- [Let](../tB/Core/Let) - 设置变量的值
- [Set](../tB/Core/Set) - 更改变量引用的对象
- [Erase](../tB/Core/Erase) - 用默认值填充固定大小数组，或使动态数组无效
- [LSet](../tB/Core/LSet) - 分配用户定义类型，或左对齐字符串
- [RSet](../tB/Core/RSet) - 右对齐字符串
- [ReDim](../tB/Core/ReDim) - 更改动态大小数组的大小

## 文件I/O

语句：

- [Open](../tB/Core/Open), [Close](../tB/Core/Close) - 为I/O操作打开/关闭文件
- [Get](../tB/Core/Get), [Put](../tB/Core/Put) - 从打开的随机访问文件读取/写入数据
- [Line Input](../tB/Core/Line-Input), [Print](../tB/Core/Print) - 从打开的文本文件读取/写入行
- [Input](../tB/Core/Input), [Write](../tB/Core/Write) - 从打开的顺序访问文件读取/写入数据
- [Seek](../tB/Core/Seek) - 更改打开文件中的当前访问位置
- [Lock](../tB/Core/Lock), [Unlock](../tB/Core/Unlock) - 锁定/解锁打开文件中的记录范围

过程：

* [Reset](../tB/Core/Reset) - 关闭所有打开的磁盘文件
* [Width](../tB/Core/Width) - 设置打印时行长度的限制
* [ChDir](../tB/Core/ChDir), [ChDrive](../tB/Core/ChDrive) - 更改当前工作目录和磁盘驱动器
* [MkDir](../tB/Core/MkDir), [RmDir](../tB/Core/RmDir) - 在磁盘上创建/删除目录
* [Name](../tB/Core/Name) - 重命名磁盘上的文件或目录
* [SetAttr](../tB/Core/SetAttr) - 设置磁盘上文件的属性
* [FileCopy](../tB/Core/FileCopy) - 复制磁盘上的文件
* [Kill](../tB/Core/Kill) - 从磁盘删除文件
* [SavePicture](../tB/Core/SavePicture) - 将`Picture`或`Image`写入磁盘文件

## 状态管理

过程：

* [Load](../tB/Core/Load), [Unload](../tB/Core/Unload) - 将窗体或控件加载/卸载到内存中
* [GetSetting](../tB/Core/GetSetting), [SaveSetting](../tB/Core/SaveSetting) - 从系统注册表检索/存储字符串值
* [DeleteSetting](../tB/Core/DeleteSetting) - 从系统注册表删除值

## 事件和交互

语句：

* [RaiseEvent](../tB/Core/RaiseEvent) - 引发可能由事件处理程序处理的事件

另见：

* [Event](../tB/Core/Event) - 声明事件

过程：

* [AppActivate](../tB/Core/AppActivate) - 将焦点更改为或激活命名窗口
* [Beep](../tB/Core/Beep) - 发出系统蜂鸣声
* [SendKeys](../tB/Core/SendKeys) - 向活动窗口发送击键

## 数学

过程：

* [Atn](../tB/Modules/Math#atn), [Cos](../tB/Modules/Math#cos), [Sin](../tB/Modules/Math#sin), [Tan](../tB/Modules/Math#tan) - 三角函数
* [Sqr](../tB/Modules/Math#sqr) - 求平方根
* [Exp](../tB/Modules/Math#exp) - 计算以$e$为底的指数
* [Log](../tB/Modules/Math#log) - 计算数字的自然（以$e$为底）对数
* [Sgn](../tB/Modules/Math#sgn) - 返回数字的符号
* [Abs](../tB/Modules/Math#abs) - 返回数字的绝对值
* [Round](../tB/Modules/Math#round) - 将数字四舍五入到指定的小数位数
* [Rnd](../tB/Modules/Math#rnd) - 生成[0.0, 1.0)范围内的随机数
* [Randomize](../tB/Modules/Math#randomize) - 为随机数生成器设置种子

## 字符串处理

修改字符串的语句：

* [Mid =](../tB/Core/Mid-equals), [MidB =](../tB/Core/MidB-equals) - 赋值或替换字符或宽/窄字符串部分

检查字符串属性的过程：

* [Len\$](../tB/Modules/Strings#len-1), [Len](../tB/Modules/Strings#len), [LenB\$](../tB/Modules/Strings#lenb-1), [LenB](../tB/Modules/Strings#lenb) - 字符串的长度
* [Asc](../tB/Modules/Strings#asc), [AscB](../tB/Modules/Strings#ascb), [AscW](../tB/Modules/Strings#ascw) - 返回字符串中第一个字母的字符代码
* [StrComp](../tB/Modules/Strings#strcomp) - 比较两个字符串
* [InStr$](../tB/Modules/Strings#instr-1), [InStrB](../tB/Modules/Strings#instrb), [InStr](../tB/Modules/Strings#instr) - 查找给定子字符串在字符串中的位置

创建字符串的过程：

* [Chr\$](../tB/Modules/Strings#chr-1), [Chr](../tB/Modules/Strings#chr), [ChrB\$](../tB/Modules/Strings#chrb-1), [ChrB](../tB/Modules/Strings#chrb), [ChrW\$](../tB/Modules/Strings#chrw-1), [ChrW](../tB/Modules/Strings#chrw) - 返回具有给定代码的字符
* [Space$](../tB/Modules/Strings#space-1), [Space](../tB/Modules/Strings#space) - 返回空格字符串
* [String\$](../tB/Modules/Strings#string-1), [String](../tB/Modules/Strings#string) - 返回指定字符的字符串

返回修改后字符串的过程：

* [Left\$](../tB/Modules/Strings#left-1), [Left](../tB/Modules/Strings#left), [LeftB$](../tB/Modules/Strings#leftb-1), [LeftB](../tB/Modules/Strings#leftb) - 提取字符串的左子字符串
* [Mid$](../tB/Modules/Strings#mid-1), [Mid](../tB/Modules/Strings#mid), [MidB\$](../tB/Modules/Strings#midb-1), [MidB](../tB/Modules/Strings#midb)- 提取字符串的子字符串
* [Right\$](../tB/Modules/Strings#right-1), [Right](../tB/Modules/Strings#right), [RightB\$](../tB/Modules/Strings#rightb-1), [RightB](../tB/Modules/Strings#rightb) - 提取字符串的右子字符串
* [LTrim\$](../tB/Modules/Strings#ltrim-1), [LTrim](../tB/Modules/Strings#ltrim), [RTrim\$](../tB/Modules/Strings#rtrim-1), [RTrim](../tB/Modules/Strings#rtrim) - 从字符串中删除前导/尾随空格
* [Trim$](../tB/Modules/Strings#trim-1), [Trim](../tB/Modules/Strings#trim) - 从字符串中删除前导和尾随空格
* [StrReverse](../tB/Modules/Strings#strreverse) - 反转字符串中字符的顺序
* [LCase\$](../tB/Modules/Strings#lcase-1), [LCase](../tB/Modules/Strings#lcase), [RCase\$](../tB/Modules/Strings#rcase-1), [RCase](../tB/Modules/Strings#rcase) - 大写或小写字符串
* [StrConv](../tB/Modules/Strings#strconv) - 将字符串转换为指定格式
* [Join](../tB/Modules/Strings#join) - 使用给定分隔符连接字符串数组
* [Split](../tB/Modules/Strings#split) - 将字符串拆分为字符串数组
* [Replace](../tB/Modules/Strings#replace) - 替换字符串中的子字符串
* [Filter](../tB/Modules/Strings#filter) - 根据条件将字符串数组过滤为子集
* [InStrRev](../tB/Modules/Strings#instrrev) - 根据条件将字符串数组过滤为子集
* [Format\$](../tB/Modules/Strings#format-1), [Format](../tB/Modules/Strings#format) - 以特定方式格式化数字表达式
* [FormatNumber](../tB/Modules/Strings#formatnumber) - 将表达式格式化为数字字符串
* [FormatPercent](../tB/Modules/Strings#formatpercent) - 将表达式格式化为百分比字符串

另见：

* [FormatCurrency](../tB/Modules/Strings#formatcurrency) - 将表达式格式化为货币字符串
* [FormatDateTime](../tB/Modules/Strings#formatdatetime) - 将表达式格式化为日期/时间字符串

## 日期和时间

过程：

* [Date](../tB/Core/Date), [Time](../tB/Core/Time) - 设置当前日期和时间
* [FormatDateTime](../tB/Modules/Strings#formatdatetime) - 将表达式格式化为日期/时间字符串
* [MonthName](../tB/Modules/Strings#monthname) - 返回指定月份的名称
* [WeekdayName](../tB/Modules/Strings#weekdayname) - 返回指定星期几的名称

## 财务

过程：

* [DDB](../tB/Modules/Financial#ddb) - 通过双倍余额递减法计算资产折旧
* [FV](../tB/Modules/Financial#fv) - 具有定期存款和利息的投资的未来价值
* [Pmt](../tB/Modules/Financial#pmt) - 具有定期付款和利息的贷款付款
* [IPmt](../tB/Modules/Financial#ipmt) - 具有定期付款和利息的贷款利息付款
* [PPmt](../tB/Modules/Financial#ppmt) - 具有定期付款和利息的贷款本金付款
* [SYD](../tB/Modules/Financial#syd) - 资产的年数总和折旧
* [SLN](../tB/Modules/Financial#sln) - 一个期间的资产直线折旧
* [PV](../tB/Modules/Financial#pv) - 投资现值
* [IRR](../tB/Modules/Financial#irr) - 一系列现金流量的内部收益率
* [MIRR](../tB/Modules/Financial#mirr) - 一系列现金流量的修正内部收益率
* [Rate](../tB/Modules/Financial#rate) - 年金的每期利率
* [NPV](../tB/Modules/Financial#npv) - 投资的净现值
* [NPer](../tB/Modules/Financial#nper) - 具有定期存款和利息的投资期数
* [FormatCurrency](../tB/Modules/Strings#formatcurrency) - 将表达式格式化为货币字符串

## 已弃用

语句：

* [DefBool, DefByte, DefInt, DefLng, DefCur, DefSng, DefDbl, DefDec, DefDate, DefStr, DefObj, DefVar](../tB/Core/Deftype) - 用于为单字母变量赋予隐式类型
* [Error](../tB/Core/Error) - 引发错误