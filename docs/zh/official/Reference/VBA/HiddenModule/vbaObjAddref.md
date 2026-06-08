---
title: vbaObjAddref
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjAddref
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '884fc0cc-4039-4acd-a975-0049d261ac50'
  PropagateID: '884fc0cc-4039-4acd-a975-0049d261ac50'
  ReservedCode1: '896ff8f5-6387-4135-9cc1-6786f567a83c'
  ReservedCode2: '896ff8f5-6387-4135-9cc1-6786f567a83c'
---

# vbaObjAddref

对给定地址的COM对象调用**IUnknown::AddRef**。

语法：**vbaObjAddref** *Address*

*Address*
: *必需* **LongPtr**。**IUnknown**派生的COM对象的地址——通常是[**ObjPtr**](/official/Reference/VBA/Information/ObjPtr)返回的值。

对象的引用计数增加一。运行时不验证*Address*是否指向真正的COM对象；无效指针将导致宿主崩溃。

这是低级原语。普通代码不需要它——赋值给**Object**变量时已经执行了addref。

### 另请参阅

- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet)函数
- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref)函数
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数