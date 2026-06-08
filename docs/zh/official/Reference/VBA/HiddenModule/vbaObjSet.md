---
title: vbaObjSet
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjSet
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '0106f05c-f53e-4287-ba1a-1a0fbdaf17ba'
  PropagateID: '0106f05c-f53e-4287-ba1a-1a0fbdaf17ba'
  ReservedCode1: 'aed67b28-9a5d-4eb2-9945-a94ace4ac2c9'
  ReservedCode2: 'aed67b28-9a5d-4eb2-9945-a94ace4ac2c9'
---

# vbaObjSet

将原始对象指针赋值给**Object**变量，接收现有引用而不执行addref。

语法：**vbaObjSet(** *DstObject* **,** *SrcObjPtr* **)** **As LongPtr**

*DstObject*
: *必需* **IUnknown**。接收指针的变量。先释放任何先前的引用。

*SrcObjPtr*
: *必需* **LongPtr**。*DstObject*应引用的COM对象指针。指针的现有引用计数**不**增加。

这是无addref移动原语——用于将新获取的原始指针（例如从Win32的`IUnknown**`输出参数）包装到**Object**变量中而不泄漏引用。

返回值反映赋值的指针。

### 另请参阅

- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref)函数 —— 带addref复制对应
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref)过程
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数