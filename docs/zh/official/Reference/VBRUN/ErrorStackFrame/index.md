---
title: ErrorStackFrame
parent: VBRUN Package
nav_order: 15
permalink: /tB/Packages/VBRUN/ErrorStackFrame/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c9f657e4-80af-4471-8166-cafa83a178a7'
  PropagateID: 'c9f657e4-80af-4471-8166-cafa83a178a7'
  ReservedCode1: '073918cf-62cd-4a06-bbec-0682418c2dce'
  ReservedCode2: '073918cf-62cd-4a06-bbec-0682418c2dce'
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