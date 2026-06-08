---
title: StackArgsSize
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/StackArgsSize
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1a5d1a04-eb9a-439a-833d-4374e2fbf005'
  PropagateID: '1a5d1a04-eb9a-439a-833d-4374e2fbf005'
  ReservedCode1: 'a57e7034-0e5d-4ae5-9a94-cc109bd6a31b'
  ReservedCode2: 'a57e7034-0e5d-4ae5-9a94-cc109bd6a31b'
---

# StackArgsSize

返回封闭过程栈上传递的参数的总大小（以字节为单位）。

语法：**StackArgsSize()** **As Long**

结果在编译时解析，并作为数值常量折叠到生成的代码中。在**Naked**过程中使用，当汇编需要在返回时知道从栈上清除多少——例如，在`_stdcall`约定下发出正确的`ret n`操作码。

### 另请参阅

- [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset)函数
- [Emit](/official/Reference/VBA/HiddenModule/Emit)、[EmitAny](/official/Reference/VBA/HiddenModule/EmitAny)过程
- [直接汇编插入](/official/Features/Advanced/Assembly)