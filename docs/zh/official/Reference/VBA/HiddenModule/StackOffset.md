---
title: StackOffset
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/StackOffset
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9fcf7019-f36b-47ce-aef9-6d2bf0ce2cdb'
  PropagateID: '9fcf7019-f36b-47ce-aef9-6d2bf0ce2cdb'
  ReservedCode1: 'f913eb8b-cfe1-434d-b1b2-2b6d9980c533'
  ReservedCode2: 'f913eb8b-cfe1-434d-b1b2-2b6d9980c533'
---

# StackOffset

返回变量的栈帧偏移量。

语法：**StackOffset(** *Variable* **)** **As Long**

*Variable*
: *必需* 局部变量、参数或其他栈驻留引用。传递的值按**As Any**接收，因此调用适用于任何类型。

结果是从过程的栈帧基到*Variable*存储位置的偏移量（以字节为单位）。通常在**Naked**过程中使用，用于计算使用[**Emit**](/official/Reference/VBA/HiddenModule/Emit)或[**EmitAny**](/official/Reference/VBA/HiddenModule/EmitAny)发出的内联汇编的地址。偏移量在编译时解析并作为数值常量折叠。

### 另请参阅

- [StackArgsSize](/official/Reference/VBA/HiddenModule/StackArgsSize)函数
- [Emit](/official/Reference/VBA/HiddenModule/Emit)、[EmitAny](/official/Reference/VBA/HiddenModule/EmitAny)过程
- [直接汇编插入](/official/Features/Advanced/Assembly)