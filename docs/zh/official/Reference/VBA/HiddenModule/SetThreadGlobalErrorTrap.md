---
title: SetThreadGlobalErrorTrap
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/SetThreadGlobalErrorTrap
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '95673232-a2be-43e8-a17f-16bc686ccbe5'
  PropagateID: '95673232-a2be-43e8-a17f-16bc686ccbe5'
  ReservedCode1: 'd293e6d6-a87d-4e0b-b73b-58858cc59845'
  ReservedCode2: 'd293e6d6-a87d-4e0b-b73b-58858cc59845'
---

# SetThreadGlobalErrorTrap

注册一个全局回调，当调用线程上引发未处理的运行时错误时触发。

语法：**SetThreadGlobalErrorTrap** *CallbackAddress*

*CallbackAddress*
: *必需* **LongPtr**。回调过程的地址，通常通过**AddressOf**获取。传递`0`以清除陷阱。

该陷阱补充了普通的`On Error`处理：它能看到在注册线程上逃离活动错误处理程序链的错误，并在运行时决定下一步操作（显示未处理错误对话框、结束程序等）之前被调用。适用于连接应用程序范围的日志记录或崩溃报告。

每个线程只有一个活动陷阱；设置新的会替换之前的。

### 另请参阅

- [On Error](/official/Reference/Core/On-Error)语句
- [Err对象](/official/Reference/VBA/ErrObject/)