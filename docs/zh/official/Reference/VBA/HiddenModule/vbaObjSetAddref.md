---
title: vbaObjSetAddref
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/vbaObjSetAddref
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8e1762b9-ae03-4529-acf1-3b9cef9a8f6d'
  PropagateID: '8e1762b9-ae03-4529-acf1-3b9cef9a8f6d'
  ReservedCode1: '11c0865c-a281-4bc3-9475-88253e59ce22'
  ReservedCode2: '11c0865c-a281-4bc3-9475-88253e59ce22'
---

# vbaObjSetAddref

将原始对象指针赋值给**Object**变量，对新指针执行addref并释放任何先前的引用。

语法：**vbaObjSetAddref(** *DstObject* **,** *SrcObjPtr* **)** **As LongPtr**

*DstObject*
: *必需* **IUnknown**。接收指针的变量。先释放任何先前的引用。

*SrcObjPtr*
: *必需* **LongPtr**。*DstObject*应引用的COM对象指针。对该指针调用**IUnknown::AddRef**。

这是带addref复制原语——当*obj*仅作为原始**LongPtr**持有时，等效于常规的`Set DstObject = obj`。

返回值反映赋值的指针。

### 另请参阅

- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet)函数 —— 无addref移动对应
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref)过程
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr)函数