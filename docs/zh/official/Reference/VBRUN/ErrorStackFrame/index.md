---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a9c4b125-01bf-443e-b534-bc9d47791bdd'
  PropagateID: 'a9c4b125-01bf-443e-b534-bc9d47791bdd'
  ReservedCode1: 'f23a6a80-db2e-46ab-b569-ee544a244214'
  ReservedCode2: 'f23a6a80-db2e-46ab-b569-ee544a244214'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '509ccf9e-fe2c-413d-a5fb-44051dc7c635'
  PropagateID: '509ccf9e-fe2c-413d-a5fb-44051dc7c635'
  ReservedCode1: '5fd0b4e6-c1d2-415a-ba4a-7b212c2220ec'
  ReservedCode2: '5fd0b4e6-c1d2-415a-ba4a-7b212c2220ec'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '902e49ce-b07b-4683-95e6-6d6fdbe2bf92'
  PropagateID: '902e49ce-b07b-4683-95e6-6d6fdbe2bf92'
  ReservedCode1: '7cabcb69-7298-4c31-8e93-86982f34afe2'
  ReservedCode2: '7cabcb69-7298-4c31-8e93-86982f34afe2'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e69884b9-927f-492d-b256-86effe027fad'
  PropagateID: 'e69884b9-927f-492d-b256-86effe027fad'
  ReservedCode1: '12abe529-c73d-49f7-a08b-f84a02794913'
  ReservedCode2: '12abe529-c73d-49f7-a08b-f84a02794913'
---

---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '786974eb-78ea-4273-8b51-84be106ac955'
  PropagateID: '786974eb-78ea-4273-8b51-84be106ac955'
  ReservedCode1: '3318a211-d090-4c60-aa06-fa879c56c4cc'
  ReservedCode2: '3318a211-d090-4c60-aa06-fa879c56c4cc'
---

---
title: ErrorStackFrame
parent: VBRUN Package
nav_order: 15
permalink: /tB/Packages/VBRUN/ErrorStackFrame/
---

# ErrorStackFrame 类

**ErrorStackFrame**描述引发运行时错误时调用堆栈上活动的一个过程——其所属项目、包含它的模块及其自身名称。帧通过迭代[**ErrorCallstack**](/official/Reference/VBRUN/ErrorCallstack/)快照产生，而快照可从[**ErrorContext**](/official/Reference/VBRUN/ErrorContext/)的[**Callstack**](/official/Reference/VBRUN/ErrorContext/#callstack)属性获取。每个属性均为只读。

```vb
Sub LogStackTrace(ByVal Stack As ErrorCallstack)
    Dim i As Long
    For i = 1 To Stack.Count
        Dim Frame As ErrorStackFrame
        Set Frame = Stack.Items(i)
        Debug.Print Frame.ProjectName & "." & Frame.ModuleName & "." & Frame.ProcedureName
    Next i
End Sub
```

## 成员

### ModuleName

返回包含此帧过程的标准模块、类模块、窗体或用户控件的模块名称，类型为**String**。

语法：*object*.**ModuleName**

*object*
: *必需* 求值为**ErrorStackFrame**对象的对象表达式。

### ProcedureName

返回此帧的过程名称，类型为**String**。

语法：*object*.**ProcedureName**

*object*
: *必需* 求值为**ErrorStackFrame**对象的对象表达式。

对于属性访问器，这是不带Get/Let/Set前缀的属性名称；对于事件处理器，是编译器生成的处理器名称，采用惯用的`<Object>_<Event>`格式。

### ProjectName

返回包含此帧过程的twinBASIC项目名称，类型为**String**。

语法：*object*.**ProjectName**

*object*
: *必需* 求值为**ErrorStackFrame**对象的对象表达式。

对于来自引用包或已编译DLL的帧，这是原始项目的名称。