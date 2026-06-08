---
title: Interaction模块
parent: VBA Package
permalink: /tB/Modules/Interaction/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '22a07079-ec79-4caa-a2a2-e6103bfd226d'
  PropagateID: '22a07079-ec79-4caa-a2a2-e6103bfd226d'
  ReservedCode1: '447746f2-f2f1-478e-9dbe-c9eeee0c7c4a'
  ReservedCode2: '447746f2-f2f1-478e-9dbe-c9eeee0c7c4a'
---

# Interaction模块

**Interaction**模块将程序边缘发生的所有独立过程组合在一起——与用户交互、根据值分支、启动另一个进程、读取环境变量或注册表、创建/调用/引发COM对象上的事件。

## 向用户提问

[**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)显示一个包含消息、图标和选定按钮集的模式对话框；它返回一个[**VbMsgBoxResult**](/official/Reference/VBA/Constants/VbMsgBoxResult)值，标识被点击的按钮。[**InputBox**](/official/Reference/VBA/Interaction/InputBox)显示一个带有文本输入字段的类似对话框，返回用户输入的字符串（如果用户取消则返回空字符串）。[**Beep**](/official/Reference/VBA/Interaction/Beep)发出系统提示音——在长时间运行的操作完成时作为声音提示很有用。

```vb
Dim Answer As VbMsgBoxResult
Answer = MsgBox("Save changes before closing?", vbYesNoCancel + vbQuestion, "Confirm")
```

## 选择值

该模块提供四种内联选择值的方式：

- [**If**](/official/Reference/VBA/Interaction/If)是短路内联条件——twinBASIC新增。只评估匹配条件的分支，因此`If(Divisor <> 0, 100 / Divisor, "n/a")`即使*Divisor*为零也是安全的。
- [**IIf**](/official/Reference/VBA/Interaction/IIf)是历史VBA内联条件。*truepart*和*falsepart*始终都会被评估，因此无法防止未使用分支中的错误。
- [**Choose**](/official/Reference/VBA/Interaction/Choose)从值列表中返回第*index*项——对于固定长度参数列表，等效于基于1的数组索引。
- [**Switch**](/official/Reference/VBA/Interaction/Switch)遍历*(条件, 值)*参数对，返回与第一个**True**条件配对的值——**If...ElseIf**阶梯的紧凑替代。

```vb
Dim Status As Variant
Status = Switch(Age < 13, "Child", _
                Age < 20, "Teenager", _
                Age < 65, "Adult", _
                True,     "Senior")
```

[**Partition**](/official/Reference/VBA/Interaction/Partition)是相关工具：返回一个可打印标签，标识某个值落入一系列等宽数值范围中的哪一个。

## 启动和操控其他进程

[**Shell**](/official/Reference/VBA/Interaction/Shell)异步启动另一个程序并返回新进程的任务ID；[**AppActivate**](/official/Reference/VBA/Interaction/AppActivate)通过标题或任务ID将已运行应用程序的窗口带到前台。[**SendKeys**](/official/Reference/VBA/Interaction/SendKeys)向当前具有焦点的窗口发送按键，[**DoEvents**](/official/Reference/VBA/Interaction/DoEvents)将控制权交还给消息循环，以便在长时间计算期间分派绘制、输入和定时器事件。

## 环境变量和命令行

[**Command$**](/official/Reference/VBA/Interaction/Command)和[**Command**](/official/Reference/VBA/Interaction/Command)返回程序启动时传入的命令行参数。[**Environ$**](/official/Reference/VBA/Interaction/Environ)和[**Environ**](/official/Reference/VBA/Interaction/Environ)返回进程环境变量的值，可按名称或环境块中基于1的索引查找。

## 每用户应用程序设置

注册表设置辅助函数在`HKEY_CURRENT_USER\Software\VB and VBA Program Settings`下读写每用户的值，映射VB6使用的存储约定。[**SaveSetting**](/official/Reference/VBA/Interaction/SaveSetting)写入单个键，[**GetSetting**](/official/Reference/VBA/Interaction/GetSetting)读回（对缺失键可提供可选默认值），[**GetAllSettings**](/official/Reference/VBA/Interaction/GetAllSettings)返回某个节中所有键值对作为两列**Variant**数组，[**DeleteSetting**](/official/Reference/VBA/Interaction/DeleteSetting)删除一个键、整个节或应用程序的所有设置。

```vb
SaveSetting    "MyApp", "Window", "Maximised", "True"
Debug.Print GetSetting("MyApp", "Window", "Maximised", "False")     ' "True"
DeleteSetting  "MyApp", "Window", "Maximised"
```

## COM对象和动态调度

[**CreateObject**](/official/Reference/VBA/Interaction/CreateObject)根据ProgID或CLSID实例化新的COM/Automation对象——当提供*servername*时可选择在远程机器上创建。[**GetObject**](/official/Reference/VBA/Interaction/GetObject)是其对偶：它可以绑定到文件（加载拥有该文件的应用程序）或附加到已运行的对象类实例。

获得对象引用后，[**CallByName**](/official/Reference/VBA/Interaction/CallByName)和[**CallByDispId**](/official/Reference/VBA/Interaction/CallByDispId)在运行时动态调用对象上的方法或属性——前者按名称查找，后者按原始IDispatch调度ID查找。[**RaiseEventByName**](/official/Reference/VBA/Interaction/RaiseEventByName)和[**RaiseEventByName2**](/official/Reference/VBA/Interaction/RaiseEventByName2)按事件名字符串在对象上引发事件——**RaiseEvent**语句的运行时等价物，当引发的事件在编译时未知时非常有用。两种形式的区别仅在于事件参数的提供方式：作为打包的**Variant**数组，或作为可变长度参数列表。

## 成员

- [AppActivate](/official/Reference/VBA/Interaction/AppActivate) -- 激活应用程序窗口
- [Beep](/official/Reference/VBA/Interaction/Beep) -- 通过计算机扬声器发出提示音
- [CallByDispId](/official/Reference/VBA/Interaction/CallByDispId) -- 通过IDispatch调度ID动态调用对象上的方法或属性
- [CallByName](/official/Reference/VBA/Interaction/CallByName) -- 通过名称动态调用对象上的方法或属性
- [Choose](/official/Reference/VBA/Interaction/Choose) -- 从列表中按基于1的索引返回一个值
- [Command$, Command](/official/Reference/VBA/Interaction/Command) -- 返回传给程序的命令行参数
- [CreateObject](/official/Reference/VBA/Interaction/CreateObject) -- 创建COM/Automation对象的新实例
- [DeleteSetting](/official/Reference/VBA/Interaction/DeleteSetting) -- 从Windows注册表中应用程序条目删除节或键设置
- [DoEvents](/official/Reference/VBA/Interaction/DoEvents) -- 将控制权交还给消息循环以处理挂起事件
- [Environ$, Environ](/official/Reference/VBA/Interaction/Environ) -- 返回进程环境变量的值
- [GetAllSettings](/official/Reference/VBA/Interaction/GetAllSettings) -- 返回应用程序注册表条目某个节中的所有键值对
- [GetObject](/official/Reference/VBA/Interaction/GetObject) -- 返回从文件加载或已运行的Automation对象的引用
- [GetSetting](/official/Reference/VBA/Interaction/GetSetting) -- 从Windows注册表中应用程序条目返回键设置值
- [If](/official/Reference/VBA/Interaction/If) -- 求值表达式并返回两个值之一，采用短路求值
- [IIf](/official/Reference/VBA/Interaction/IIf) -- 求值表达式并返回两个值之一；两个分支始终都被评估
- [InputBox](/official/Reference/VBA/Interaction/InputBox) -- 提示用户输入一行文本并返回所输入内容
- [MsgBox](/official/Reference/VBA/Interaction/MsgBox) -- 显示模式消息对话框并返回用户点击的按钮
- [Partition](/official/Reference/VBA/Interaction/Partition) -- 返回标识数字所属范围的字符串
- [RaiseEventByName](/official/Reference/VBA/Interaction/RaiseEventByName) -- 按名称在对象上引发事件，参数作为**Variant**数组传入
- [RaiseEventByName2](/official/Reference/VBA/Interaction/RaiseEventByName2) -- 按名称在对象上引发事件，接受可变长度参数列表
- [SaveSetting](/official/Reference/VBA/Interaction/SaveSetting) -- 在Windows注册表中应用程序条目保存或创建键设置
- [SendKeys](/official/Reference/VBA/Interaction/SendKeys) -- 向活动窗口发送按键
- [Shell](/official/Reference/VBA/Interaction/Shell) -- 异步运行另一个程序并返回其任务ID
- [Switch](/official/Reference/VBA/Interaction/Switch) -- 返回(条件, 值)对列表中与第一个**True**条件配对的值