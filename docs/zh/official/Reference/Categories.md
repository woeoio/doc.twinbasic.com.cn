---
title: "分类"
parent: Reference Section
nav_order: 1
permalink: /Reference/Categories
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7b148a2a-21c1-488a-adef-0d776687e46d'
  PropagateID: '7b148a2a-21c1-488a-adef-0d776687e46d'
  ReservedCode1: '457962e9-e7ed-40c9-b36b-2984a01310f1'
  ReservedCode2: '457962e9-e7ed-40c9-b36b-2984a01310f1'
---

本章列出了构成twinBASIC语言核心的全局语句和过程。

# 分类列表

## 编译器控制

* [Option](/official/Reference/Core/Option) - 配置编译器选项
* [#If ... Then ... Else](/official/Reference/Core/Topic-Preprocessor) - 启用或禁用所包含代码的编译
* [#Const](/official/Reference/Core/Topic-Preprocessor) - 定义模块私有的条件编译常量

## 声明和定义

* [Class](/official/Reference/Core/Class), [Module](/official/Reference/Core/Module) - 定义类或模块
* [Interface](/official/Reference/Core/Interface), [CoClass](/official/Reference/Core/CoClass) - (twinBASIC) 使用twinBASIC语法定义COM接口或组件类
* [Sub](/official/Reference/Core/Sub) - 定义过程
* [Function](/official/Reference/Core/Function) - 定义函数
* [Property](/official/Reference/Core/Property) - 定义属性
* [ParamArray](/official/Reference/Core/ParamArray) - 将过程的最后一个参数声明为可变参数列表
* [Enum](/official/Reference/Core/Enum) - 定义具有关联常量的枚举类型
* [Type](/official/Reference/Core/Type) - 声明用户自定义数据类型(UDT)/结构体
* [Declare](/official/Reference/Core/Declare) - 声明外部/库过程或函数
* [Event](/official/Reference/Core/Event) - 声明事件
* [Implements](/official/Reference/Core/Implements) - 指定类实现给定接口
* [End](/official/Reference/Core/End) - 终止执行，结束Function、Sub、Property或Enum定义，结束Type声明，结束Class或Module，结束If、Select或With块

## 流程控制

语句：

* [Call](/official/Reference/Core/Call) - 调用过程或函数
* [Do ... Loop](/official/Reference/Core/Do-Loop), [For ... Next](/official/Reference/Core/For-Next), [For Each ... Next](/official/Reference/Core/For-Each-Next), [While ... Wend](/official/Reference/Core/While-Wend) - 循环
* [If ... Then ... Else](/official/Reference/Core/If-Then-Else) - 条件执行代码
* [Continue](/official/Reference/Core/Continue) - 跳到循环的下一次迭代
* [Exit](/official/Reference/Core/Exit) - 退出循环、过程、函数或属性
* [Return](/official/Reference/Core/Return) - 从**GoSub**子程序返回，或(twinBASIC)从**Function**或**Property Get**返回值并退出
* [Select Case](/official/Reference/Core/Select-Case) - 根据表达式选择执行代码块
* [With](/official/Reference/Core/With) - 将变量或表达式引入作用域
* [Goto](/official/Reference/Core/GoTo), [GoSub ... Return](/official/Reference/Core/GoSub-Return) - 将执行转移到另一位置
* [On ... GoTo](/official/Reference/Core/On-GoTo), [On ... GoSub](/official/Reference/Core/On-GoSub) - 根据表达式选择将执行转移到指定位置
* [Stop](/official/Reference/Core/Stop) - 中断执行

内联条件函数 --- 上述**If...Then...Else**和**Select Case**语句在表达式级别的替代方案：

* [If](/official/Reference/VBA/Interaction/If) - 计算表达式并返回两个值之一；仅计算所选分支(twinBASIC新增)
* [IIf](/official/Reference/VBA/Interaction/IIf) - 计算表达式并返回两个值之一；两个分支始终都会被计算
* [Choose](/official/Reference/VBA/Interaction/Choose) - 根据1起始索引从列表中返回一个值
* [Switch](/official/Reference/VBA/Interaction/Switch) - 在(条件, 值)对列表中返回第一个**True**条件对应的值

另见：

* [End](/official/Reference/Core/End) - 终止执行。
* [On Error](/official/Reference/Core/On-Error), [Resume](/official/Reference/Core/Resume) - 运行时错误的流程控制（参见[错误处理](#error-handling)）

## 错误处理

语句：

* [On Error](/official/Reference/Core/On-Error) - 指定发生错误时的处理方式
* [Resume](/official/Reference/Core/Resume) - 在捕获错误后恢复执行
* [Error](/official/Reference/Core/Error) 语句 - 模拟错误的发生（旧式；建议使用**Err.Raise**）

过程：

* [Err](/official/Reference/VBA/Information/Err) - 返回描述当前运行时错误状态的**ErrObject**
* [Erl](/official/Reference/VBA/Information/Erl) - 返回最近运行时错误发生的行号
* [Error$, Error](/official/Reference/VBA/Conversion/Error) 函数 - 返回与给定错误号对应的错误消息
* [CVErr](/official/Reference/VBA/Conversion/CVErr) - 将数值表达式包装为**Error**子类型的**Variant**
* [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) - 注册一个回调，当未处理的运行时错误逃逸调用线程上的活动错误处理链时触发

## 变量声明

语句：

* [Dim](/official/Reference/Core/Dim) - 声明类型化标量或数组变量
* [Const](/official/Reference/Core/Const) - 声明常量
* [Public](/official/Reference/Core/Public) - 在类或模块中声明公共变量
* [Private](/official/Reference/Core/Private) - 在类或模块中声明私有变量
* [Protected](/official/Reference/Core/Protected) - (twinBASIC) 声明可在类及其派生类中访问的类成员
* [Static](/official/Reference/Core/Static) - 声明静态持续期的变量

## 变量赋值和修改

语句：

- [Let](/official/Reference/Core/Let) - 设置变量的值
- [Set](/official/Reference/Core/Set) - 更改变量引用的对象
- [New](/official/Reference/Core/New) - 创建类的新实例
- [LSet](/official/Reference/Core/LSet) - 赋值用户自定义类型，或左对齐字符串
- [RSet](/official/Reference/Core/RSet) - 右对齐字符串

运算符：

- [Is](/official/Reference/Core/Is) - 比较两个对象引用是否同一
- [IsNot](/official/Reference/Core/IsNot) - (twinBASIC) **Is**的逻辑反运算

## 数组

语句：

* [ReDim](/official/Reference/Core/ReDim) - 分配或更改动态数组的大小
* [Erase](/official/Reference/Core/Erase) - 用默认值填充固定大小数组，或使动态数组无效

过程：

* [LBound](/official/Reference/VBA/Information/LBound) - 数组某一维的最小有效下标
* [UBound](/official/Reference/VBA/Information/UBound) - 数组某一维的最大有效下标
* [IsArray](/official/Reference/VBA/Information/IsArray) - 返回变量是否为数组
* [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) - 返回数组是否已分配维度

另见：

* [Dim](/official/Reference/Core/Dim) - 分配标量或数组变量
* [Array](/official/Reference/VBA/Information/Array), [Filter](/official/Reference/VBA/Strings/Filter), [Join](/official/Reference/VBA/Strings/Join), [Split](/official/Reference/VBA/Strings/Split) - 数组辅助函数
* [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove), [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) - 底层**Variant**数组辅助函数（参见[内存和指针](#memory-and-pointers)）

## 文件I/O

语句：

- [Open](/official/Reference/Core/Open), [Close](/official/Reference/Core/Close) - 打开/关闭文件进行I/O操作
- [Get](/official/Reference/Core/Get), [Put](/official/Reference/Core/Put) - 从打开的随机访问文件读取/写入数据
- [Line Input](/official/Reference/Core/Line-Input), [Print](/official/Reference/Core/Print) - 从/向打开的文本文件读取/写入一行
- [Input](/official/Reference/Core/Input), [Write](/official/Reference/Core/Write) - 从/向打开的顺序访问文件读取/写入数据
- [Seek](/official/Reference/Core/Seek) - 更改打开文件中的当前访问位置
- [Lock](/official/Reference/Core/Lock), [Unlock](/official/Reference/Core/Unlock) - 锁定/解锁打开文件中的记录范围

过程：

* [Reset](/official/Reference/Core/Reset) - 关闭所有打开的磁盘文件
* [Width](/official/Reference/VBA/FileSystem/Width) - 设置打印时的行长度限制
* [Input, Input$](/official/Reference/VBA/FileSystem/Input) - 从顺序文件读取固定数量的字符
* [InputB, InputB$](/official/Reference/VBA/FileSystem/InputB) - 从顺序文件读取固定数量的字节
* [ChDir](/official/Reference/Core/ChDir), [ChDrive](/official/Reference/Core/ChDrive) - 更改当前工作目录和磁盘驱动器
* [MkDir](/official/Reference/Core/MkDir), [RmDir](/official/Reference/Core/RmDir) - 创建/删除磁盘上的目录
* [Name](/official/Reference/Core/Name) - 重命名磁盘上的文件或目录
* [SetAttr](/official/Reference/Core/SetAttr) - 设置磁盘文件的属性
* [FileCopy](/official/Reference/Core/FileCopy) - 复制磁盘上的文件
* [Kill](/official/Reference/Core/Kill) - 从磁盘删除文件
* [SavePicture](/official/Reference/Core/SavePicture) - 将`Picture`或`Image`写入磁盘文件
* [MacID](/official/Reference/VBA/Conversion/MacID) - 转换4字符Mac文件类型代码（旧式）

## 状态管理

过程：

* [Load](/official/Reference/Core/Load), [Unload](/official/Reference/Core/Unload) - 将窗体或控件加载/卸载到内存
* [GetSetting](/official/Reference/VBA/Interaction/GetSetting), [SaveSetting](/official/Reference/VBA/Interaction/SaveSetting) - 从/向系统注册表检索/存储字符串值
* [GetAllSettings](/official/Reference/VBA/Interaction/GetAllSettings) - 检索应用程序注册表项中某个节的所有键值对
* [DeleteSetting](/official/Reference/VBA/Interaction/DeleteSetting) - 从系统注册表删除值

## 事件

语句：

* [RaiseEvent](/official/Reference/Core/RaiseEvent) - 引发可由事件处理器处理的事件

过程：

* [RaiseEventByName](/official/Reference/VBA/Interaction/RaiseEventByName) - 按名称在对象上引发事件，以**Variant**数组形式接收参数
* [RaiseEventByName2](/official/Reference/VBA/Interaction/RaiseEventByName2) - 按名称在对象上引发事件，以可变长度参数列表接收参数
* [RuntimeCreateGetMessageHook](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook) - 创建**IGetMessageHook**用于过滤发往窗口（及其后代，可选）的Windows消息

另见

* [Event](/official/Reference/Core/Event) - 声明事件
* [IGetMessageHook 接口](/official/Reference/VBA/HiddenModule/#igetmessagehook-interface) - 订阅Windows消息类型的回调，然后开始/停止消息传送

## 用户对话框

过程：

* [MsgBox](/official/Reference/VBA/Interaction/MsgBox) - 显示模态消息对话框并返回用户点击的按钮
* [InputBox](/official/Reference/VBA/Interaction/InputBox) - 提示用户输入一行文本并返回所输入的内容
* [Beep](/official/Reference/VBA/Interaction/Beep) - 发出系统提示音

## 进程控制

过程：

* [Shell](/official/Reference/VBA/Interaction/Shell) - 异步运行另一个程序并返回其任务ID
* [AppActivate](/official/Reference/VBA/Interaction/AppActivate) - 将焦点切换到命名窗口或激活该窗口
* [SendKeys](/official/Reference/VBA/Interaction/SendKeys) - 向活动窗口发送按键
* [DoEvents](/official/Reference/VBA/Interaction/DoEvents) - 让出控制权到消息循环，以便处理挂起的事件

## COM和自动化

过程：

* [CreateObject](/official/Reference/VBA/Interaction/CreateObject) - 创建COM/Automation对象的新实例
* [GetObject](/official/Reference/VBA/Interaction/GetObject) - 获取从文件加载或正在运行的Automation对象的引用
* [CallByName](/official/Reference/VBA/Interaction/CallByName) - 按名称动态调用对象的方法或属性
* [CallByDispId](/official/Reference/VBA/Interaction/CallByDispId) - 按 IDispatch 调度ID动态调用对象的方法或属性(twinBASIC新增)
* [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) - 生成新的GUID并以注册表格式字符串返回
* [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj) - 将对象重新解释为另一个COM接口（类型化的`QueryInterface`）
* [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet), [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) - 将原始对象指针赋值给**Object**变量，可选是否增加引用计数
* [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) - 递增给定地址处对象的COM引用计数

另见：

* [ObjPtr](/official/Reference/VBA/Information/ObjPtr) - 返回对象的COM标识地址（参见[内存和指针](#memory-and-pointers)）

## 命令行和环境

过程：

* [Command$, Command](/official/Reference/VBA/Interaction/Command) - 返回传递给程序的命令行参数
* [Environ$, Environ](/official/Reference/VBA/Interaction/Environ) - 返回进程环境变量的值

## 颜色

过程：

* [RGB](/official/Reference/VBA/Information/RGB) - 从红、绿、蓝分量构建RGB颜色值
* [RGBA](/official/Reference/VBA/Information/RGBA) - 从红、绿、蓝和Alpha分量构建RGBA颜色值
* [RGB_R](/official/Reference/VBA/Information/RGB_R), [RGB_G](/official/Reference/VBA/Information/RGB_G), [RGB_B](/official/Reference/VBA/Information/RGB_B), [RGBA_A](/official/Reference/VBA/Information/RGBA_A) - 提取各个颜色分量
* [QBColor](/official/Reference/VBA/Information/QBColor) - 返回QuickBASIC颜色索引对应的RGB颜色值
* [TranslateColor](/official/Reference/VBA/Information/TranslateColor) - 将OLE颜色值转换为普通RGB颜色值

## 数学

过程：

* [Atn](/official/Reference/VBA/Math/Atn), [Cos](/official/Reference/VBA/Math/Cos), [Sin](/official/Reference/VBA/Math/Sin), [Tan](/official/Reference/VBA/Math/Tan) - 三角函数
* [Sqr](/official/Reference/VBA/Math/Sqr) - 求平方根
* [Exp](/official/Reference/VBA/Math/Exp) - 计算以$e$为底的指数
* [Log](/official/Reference/VBA/Math/Log) - 计算数的自然（以$e$为底）对数
* [Sgn](/official/Reference/VBA/Math/Sgn) - 返回数的符号
* [Abs](/official/Reference/VBA/Math/Abs) - 返回数的绝对值
* [Round](/official/Reference/VBA/Math/Round) - 将数舍入到指定小数位数
* [Rnd](/official/Reference/VBA/Math/Rnd) - 生成[0.0, 1.0)范围内的随机数
* [Randomize](/official/Reference/VBA/Math/Randomize) - 为随机数生成器设置种子
* [Partition](/official/Reference/VBA/Interaction/Partition) - 返回字符串标签，标识值落入哪个等宽数值范围（直方图式分桶）

另见：

* [Fix](/official/Reference/VBA/Conversion/Fix), [Int](/official/Reference/VBA/Conversion/Int) - 提取数的整数部分
* [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr) - 强制转换为整数类型（四舍五入到偶数）

## 类型转换

将表达式强制转换为特定类型的过程：

* [CBool](/official/Reference/VBA/Conversion/CBool), [CByte](/official/Reference/VBA/Conversion/CByte), [CCur](/official/Reference/VBA/Conversion/CCur), [CDbl](/official/Reference/VBA/Conversion/CDbl), [CDec](/official/Reference/VBA/Conversion/CDec), [CInt](/official/Reference/VBA/Conversion/CInt), [CLng](/official/Reference/VBA/Conversion/CLng), [CLngLng](/official/Reference/VBA/Conversion/CLngLng), [CLngPtr](/official/Reference/VBA/Conversion/CLngPtr), [CSng](/official/Reference/VBA/Conversion/CSng) - 强制转换为特定数值类型
* [CStr](/official/Reference/VBA/Conversion/CStr) - 强制转换为**String**（识别区域设置；优于[Str](/official/Reference/VBA/Conversion/Str)）
* [CVar](/official/Reference/VBA/Conversion/CVar) - 强制转换为**Variant**
* [CDate](/official/Reference/VBA/Conversion/CDate) - 强制转换为**Date**；[CVDate](/official/Reference/VBA/Conversion/CVDate)返回**Date**子类型的**Variant**（旧式）
* [CType](/official/Reference/VBA/Conversion/CType) - 具有调用方提供目标类型的显式强制转换运算符(twinBASIC扩展)

在数值和字符串之间转换的过程：

* [Hex$, Hex](/official/Reference/VBA/Conversion/Hex) - 数值的十六进制字符串表示
* [Oct$, Oct](/official/Reference/VBA/Conversion/Oct) - 数值的八进制字符串表示
* [Str$, Str](/official/Reference/VBA/Conversion/Str) - 数值的十进制字符串表示
* [Val](/official/Reference/VBA/Conversion/Val) - 将字符串解析为**Double**
* [ValDec](/official/Reference/VBA/Conversion/ValDec) - 将字符串解析为**Decimal**

提取数的整数部分的过程：

* [Fix](/official/Reference/VBA/Conversion/Fix) - 向零截断
* [Int](/official/Reference/VBA/Conversion/Int) - 向负无穷舍入

其他：

* [Nz](/official/Reference/VBA/Conversion/Nz) - 用默认值替换**Null**

另见：

* [Format$, Format](/official/Reference/VBA/Strings/Format) - 识别区域设置的数值格式化
* [FormatNumber](/official/Reference/VBA/Strings/FormatNumber), [FormatPercent](/official/Reference/VBA/Strings/FormatPercent), [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency), [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - 类型化格式化函数
* [CVErr](/official/Reference/VBA/Conversion/CVErr), [Error$, Error](/official/Reference/VBA/Conversion/Error) 函数 - 错误辅助函数（参见[错误处理](#error-handling)）

## 类型检查

命名或标识变量子类型的过程：

* [VarType](/official/Reference/VBA/Information/VarType) - 返回标识变量子类型的**VbVarType**代码
* [TypeName](/official/Reference/VBA/Information/TypeName) - 以**String**形式返回变量数据类型的名称

测试值状态或子类型的过程：

* [IsDate](/official/Reference/VBA/Information/IsDate) - 返回表达式是否可作为日期计算
* [IsEmpty](/official/Reference/VBA/Information/IsEmpty) - 返回**Variant**是否未初始化
* [IsError](/official/Reference/VBA/Information/IsError) - 返回表达式是否为错误子类型
* [IsMissing](/official/Reference/VBA/Information/IsMissing) - 返回可选参数是否已提供
* [IsNull](/official/Reference/VBA/Information/IsNull) - 返回变量是否包含**Null**值
* [IsNumeric](/official/Reference/VBA/Information/IsNumeric) - 返回表达式是否可作为数值计算
* [IsObject](/official/Reference/VBA/Information/IsObject) - 返回变量是否引用对象

另见：

* [IsArray](/official/Reference/VBA/Information/IsArray), [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) - 见[数组](#arrays)

## 字符串处理

修改字符串的语句：

* [Mid =](/official/Reference/Core/Mid-equals), [MidB =](/official/Reference/Core/MidB-equals) - 赋值或替换字符或宽/窄字符串段

检查字符串属性的过程：

* [Len](/official/Reference/VBA/Strings/Len), [LenB](/official/Reference/VBA/Strings/Len) - 字符串的长度
* [Asc](/official/Reference/VBA/Strings/Asc), [AscB](/official/Reference/VBA/Strings/Asc), [AscW](/official/Reference/VBA/Strings/Asc) - 返回字符串中第一个字母的字符代码
* [StrComp](/official/Reference/VBA/Strings/StrComp) - 比较两个字符串
* [InStr$](/official/Reference/VBA/Strings/InStr), [InStrB](/official/Reference/VBA/Strings/InStr), [InStr](/official/Reference/VBA/Strings/InStr) - 在字符串中查找给定子字符串的位置

创建字符串的过程：

* [Chr\$](/official/Reference/VBA/Strings/Chr), [Chr](/official/Reference/VBA/Strings/Chr), [ChrB\$](/official/Reference/VBA/Strings/Chr), [ChrB](/official/Reference/VBA/Strings/Chr), [ChrW\$](/official/Reference/VBA/Strings/Chr), [ChrW](/official/Reference/VBA/Strings/Chr) - 返回具有给定代码的字符
* [Space$](/official/Reference/VBA/Strings/Space), [Space](/official/Reference/VBA/Strings/Space) - 返回由空格组成的字符串
* [String\$](/official/Reference/VBA/Strings/String), [String](/official/Reference/VBA/Strings/String) - 返回由指定字符组成的字符串

返回修改后字符串的过程：

* [Left\$](/official/Reference/VBA/Strings/Left), [Left](/official/Reference/VBA/Strings/Left), [LeftB$](/official/Reference/VBA/Strings/Left), [LeftB](/official/Reference/VBA/Strings/Left) - 提取字符串的左侧子串
* [Mid$](/official/Reference/VBA/Strings/Mid), [Mid](/official/Reference/VBA/Strings/Mid), [MidB\$](/official/Reference/VBA/Strings/Mid), [MidB](/official/Reference/VBA/Strings/Mid) - 提取字符串的子串
* [Right\$](/official/Reference/VBA/Strings/Right), [Right](/official/Reference/VBA/Strings/Right), [RightB\$](/official/Reference/VBA/Strings/Right), [RightB](/official/Reference/VBA/Strings/Right) - 提取字符串的右侧子串
* [LTrim\$](/official/Reference/VBA/Strings/LTrim), [LTrim](/official/Reference/VBA/Strings/LTrim), [RTrim\$](/official/Reference/VBA/Strings/RTrim), [RTrim](/official/Reference/VBA/Strings/RTrim) - 删除字符串的前导/尾随空格
* [Trim$](/official/Reference/VBA/Strings/Trim), [Trim](/official/Reference/VBA/Strings/Trim) - 删除字符串的前导和尾随空格
* [StrReverse](/official/Reference/VBA/Strings/StrReverse) - 反转字符串中的字符顺序
* [LCase\$](/official/Reference/VBA/Strings/LCase), [LCase](/official/Reference/VBA/Strings/LCase), [UCase\$](/official/Reference/VBA/Strings/UCase), [UCase](/official/Reference/VBA/Strings/UCase) - 将字符串转换为大写或小写
* [StrConv](/official/Reference/VBA/Strings/StrConv) - 将字符串转换为指定格式
* [Join](/official/Reference/VBA/Strings/Join) - 使用给定分隔符连接字符串数组
* [Split](/official/Reference/VBA/Strings/Split) - 将字符串拆分为字符串数组
* [Replace](/official/Reference/VBA/Strings/Replace) - 替换字符串中的子串
* [Filter](/official/Reference/VBA/Strings/Filter) - 根据条件将字符串数组过滤为子集
* [InStrRev](/official/Reference/VBA/Strings/InStrRev) - 从末尾搜索，返回子字符串在字符串中的位置
* [Format\$](/official/Reference/VBA/Strings/Format), [Format](/official/Reference/VBA/Strings/Format) - 以特定方式格式化数值表达式
* [FormatNumber](/official/Reference/VBA/Strings/FormatNumber) - 将表达式格式化为数值字符串
* [FormatPercent](/official/Reference/VBA/Strings/FormatPercent) - 将表达式格式化为百分比字符串

在数值和字符串之间转换的过程：

* [CStr](/official/Reference/VBA/Conversion/CStr) - 将值强制转换为**String**（识别区域设置）
* [Hex$, Hex](/official/Reference/VBA/Conversion/Hex) - 数值的十六进制字符串表示
* [Oct$, Oct](/official/Reference/VBA/Conversion/Oct) - 数值的八进制字符串表示
* [Str$, Str](/official/Reference/VBA/Conversion/Str) - 数值的十进制字符串表示
* [Val](/official/Reference/VBA/Conversion/Val) - 将字符串解析为**Double**
* [ValDec](/official/Reference/VBA/Conversion/ValDec) - 将字符串解析为**Decimal**

另见：

* [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) - 将表达式格式化为货币字符串
* [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - 将表达式格式化为日期/时间字符串

## 日期和时间

过程：

* [Date](/official/Reference/Core/Date), [Time](/official/Reference/Core/Time) - 设置当前日期和时间
* [FormatDateTime](/official/Reference/VBA/Strings/FormatDateTime) - 将表达式格式化为日期/时间字符串
* [MonthName](/official/Reference/VBA/Strings/MonthName) - 返回指定月份的名称
* [WeekdayName](/official/Reference/VBA/Strings/WeekdayName) - 返回指定星期几的名称

另见：

* [CDate](/official/Reference/VBA/Conversion/CDate), [CVDate](/official/Reference/VBA/Conversion/CVDate) - 将表达式强制转换为**Date**或**Variant**（子类型**Date**）

## 自省

过程：

* [CurrentProjectName](/official/Reference/VBA/Compilation/CurrentProjectName) - 返回当前项目的名称
* [CurrentComponentName](/official/Reference/VBA/Compilation/CurrentComponentName) - 返回当前组件（模块或类）的名称
* [CurrentComponentCLSID](/official/Reference/VBA/Compilation/CurrentComponentCLSID) - 返回当前类的类ID(CLSID)
* [CurrentProcedureName](/official/Reference/VBA/Compilation/CurrentProcedureName) - 返回调用该函数所在的过程名称
* [CurrentSourceFile](/official/Reference/VBA/Compilation/CurrentSourceFile) - 返回当前源文件的完整路径
* [ProcessorArchitecture](/official/Reference/VBA/Compilation/ProcessorArchitecture) - 返回运行应用程序的处理器架构
* [CompilerVersion](/official/Reference/VBA/Compilation/CompilerVersion) - 返回twinBASIC编译器版本号
* [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId), [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid), [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid), [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) - 返回已声明类型的COM ProgID/CLSID/IID/事件IID，在编译时解析
* [GetDeclaredMinEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue), [GetDeclaredMaxEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue) - 返回已声明枚举的最小/最大值，在编译时解析

另见：

* [IMEStatus](/official/Reference/VBA/Information/IMEStatus) - 当前输入法编辑器模式（仅限东亚Windows）

## 内存和指针

过程：

* [ObjPtr](/official/Reference/VBA/Information/ObjPtr) - 返回对象的COM标识地址
* [StrPtr](/official/Reference/VBA/Information/StrPtr) - 返回**String**底层缓冲区的地址
* [VarPtr](/official/Reference/VBA/Information/VarPtr) - 返回变量的地址
* [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem), [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem) - 分配/释放本机内存块
* [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1), [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2), [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4), [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8), [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) - 从内存地址读取N字节到类型化变量
* [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1), [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2), [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4), [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8), [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) - 将N字节的类型化值写入内存地址
* [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes), [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) - 复制字节块；*Zero*形式在复制后清除源

另见：

* [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove), [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) - 底层**Variant**数组辅助函数（参见[数组](#arrays)）
* [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet), [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref), [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) - 对象指针赋值和引用计数（参见[COM和自动化](#com-and-automation)）

## 线程和原子操作

过程：

* [InterlockedExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer) - 原子交换指针大小的值
* [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer) - 原子比较并交换指针大小的值
* [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32), [InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64) - 原子32位/64位比较并交换
* [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32), [InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32) - 原子32位递增/递减

另见：

* [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) - 每线程错误陷阱（参见[错误处理](#error-handling)）

## 内联汇编和代码生成

过程：

* [Emit](/official/Reference/VBA/HiddenModule/Emit) - 将自定义**Byte**值注入到所在过程的代码生成中
* [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) - 将自定义类型化值注入到所在过程的代码生成中（大小从每个值的数据类型推断）
* [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset) - 返回变量的栈帧偏移量，在编译时解析
* [StackArgsSize](/official/Reference/VBA/HiddenModule/StackArgsSize) - 返回所在过程的栈传参数总大小
* [UnprotectedAccess](/official/Reference/VBA/HiddenModule/UnprotectedAccess) - 返回绕过私有成员访问检查的对象引用

另见：

* [直接汇编插入](/official/Features/Advanced/Assembly) - `Naked`修饰符和示例

## 表达式求值

过程：

* [Eval](/official/Reference/VBA/HiddenModule/Eval) - 编译并求值以字符串形式提供的twinBASIC表达式

另见：

* [ExpressionService 模块](/official/Reference/VBA/TbExpressionService/) - 底层引擎，当需要对绑定器或已编译表达式复用进行更多控制时使用

## 财务

过程：

* [DDB](/official/Reference/VBA/Financial/DDB) - 使用双倍余额递减法计算资产折旧
* [FV](/official/Reference/VBA/Financial/FV) - 具有恒定存款和利率的投资的未来值
* [Pmt](/official/Reference/VBA/Financial/Pmt) - 具有恒定付款和利率的贷款的每期付款额
* [IPmt](/official/Reference/VBA/Financial/IPmt) - 具有恒定付款和利率的贷款的每期利息付款额
* [PPmt](/official/Reference/VBA/Financial/PPmt) - 具有恒定付款和利率的贷款的每期本金付款额
* [SYD](/official/Reference/VBA/Financial/SYD) - 年数总和法计算资产折旧
* [SLN](/official/Reference/VBA/Financial/SLN) - 在一个期间内的直线折旧
* [PV](/official/Reference/VBA/Financial/PV) - 投资的现值
* [IRR](/official/Reference/VBA/Financial/IRR) - 一系列现金流的内部收益率
* [MIRR](/official/Reference/VBA/Financial/MIRR) - 一系列现金流的修正内部收益率
* [Rate](/official/Reference/VBA/Financial/Rate) - 年金的每期利率
* [NPV](/official/Reference/VBA/Financial/NPV) - 投资的净现值
* [NPer](/official/Reference/VBA/Financial/NPer) - 具有恒定存款和利率的投资的期数
* [FormatCurrency](/official/Reference/VBA/Strings/FormatCurrency) - 将表达式格式化为货币字符串

## 单元测试

[Assert](/official/Reference/Assert/)包的模块：

* [Exact](/official/Reference/Assert/Exact) - 最严格的比较语义；数据类型必须匹配且不进行隐式转换
* [Strict](/official/Reference/Assert/Strict) - 区分大小写的字符串比较，否则使用标准twinBASIC相等比较
* [Permissive](/official/Reference/Assert/Permissive) - 不区分大小写的字符串比较，否则使用标准twinBASIC相等比较

每个模块公开相同的十五个断言：**Succeed**、**Fail**、**Inconclusive**、**AreEqual** / **AreNotEqual**、**AreSame** / **AreNotSame**、**IsTrue** / **IsFalse**、**IsNothing** / **IsNotNothing**、**IsNull** / **IsNotNull**、**SequenceEquals** / **NotSequenceEquals**。所有断言均标记`[DebugOnly(True)]`，在发布版本中不编译。

## 已弃用

语句：

* [DefBool, DefByte, DefInt, DefLng, DefCur, DefSng, DefDbl, DefDec, DefDate, DefStr, DefObj, DefVar](/official/Reference/Core/Deftype) - 用于为单字母变量赋予隐式类型