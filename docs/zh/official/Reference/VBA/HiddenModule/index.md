---
title: (Default) Module
parent: VBA Package
permalink: /tB/Modules/HiddenModule/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '73c4ff42-0878-48be-8062-4f8147a555fb'
  PropagateID: '73c4ff42-0878-48be-8062-4f8147a555fb'
  ReservedCode1: '93ebab81-fe63-4456-a140-9a8fa2fb5392'
  ReservedCode2: '93ebab81-fe63-4456-a140-9a8fa2fb5392'
---

# (Default)模块

**(Default)**模块——内部称为**\_HiddenModule**——汇集了编译器生成调用的未限定内联过程，这些过程也可以直接调用：原始内存辅助函数、原子操作、编译时反射、代码生成和栈检查原语，以及一大堆运行时实用工具。此模块的成员无需限定符即可引用，与**MsgBox**和**CStr**的使用方式相同。

这些过程大多有意对IntelliSense隐藏，仅在高级或低级场景下使用；仅当**[Math](/official/Reference/VBA/Math/)**、**[Strings](/official/Reference/VBA/Strings/)**、**[Information](/official/Reference/VBA/Information/)**或**[Interaction](/official/Reference/VBA/Interaction/)**中的高级替代方案不适用时才使用。有几个还有此处未列出的仅限内部使用的成员。

指针函数[**ObjPtr**](/official/Reference/VBA/Information/ObjPtr)、[**StrPtr**](/official/Reference/VBA/Information/StrPtr)和[**VarPtr**](/official/Reference/VBA/Information/VarPtr)以及[**Array**](/official/Reference/VBA/Information/Array)构造函数记录在[**Information**](/official/Reference/VBA/Information/)模块下；[**Input**](/official/Reference/VBA/FileSystem/Input)、[**InputB**](/official/Reference/VBA/FileSystem/InputB)和[**Width**](/official/Reference/VBA/FileSystem/Width)记录在[**FileSystem**](/official/Reference/VBA/FileSystem/)下。

## 读写内存

已知地址的内存使用**GetMem***/**PutMem***系列一次一个机器字地读取和写入——[**GetMem1**](/official/Reference/VBA/HiddenModule/GetMem1)、[**GetMem2**](/official/Reference/VBA/HiddenModule/GetMem2)、[**GetMem4**](/official/Reference/VBA/HiddenModule/GetMem4)、[**GetMem8**](/official/Reference/VBA/HiddenModule/GetMem8)和[**GetMemPtr**](/official/Reference/VBA/HiddenModule/GetMemPtr)用于读取，对应的[**PutMem1**](/official/Reference/VBA/HiddenModule/PutMem1)、[**PutMem2**](/official/Reference/VBA/HiddenModule/PutMem2)、[**PutMem4**](/official/Reference/VBA/HiddenModule/PutMem4)、[**PutMem8**](/official/Reference/VBA/HiddenModule/PutMem8)和[**PutMemPtr**](/official/Reference/VBA/HiddenModule/PutMemPtr)用于写入。[**vbaCopyBytes**](/official/Reference/VBA/HiddenModule/vbaCopyBytes)和[**vbaCopyBytesZero**](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero)移动块；[**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem)和[**FreeMem**](/official/Reference/VBA/HiddenModule/FreeMem)管理堆分配。为这些辅助函数提供指针的构造函数——[**ObjPtr**](/official/Reference/VBA/Information/ObjPtr)、[**StrPtr**](/official/Reference/VBA/Information/StrPtr)、[**VarPtr**](/official/Reference/VBA/Information/VarPtr)——位于[**Information**](/official/Reference/VBA/Information/)中。

```vb
Dim Buffer As LongPtr = AllocMem(16)
PutMem4 Buffer, &HDEADBEEF
Dim Magic As Long
GetMem4 Buffer, Magic
FreeMem Buffer
```

[**vbaRefVarAry**](/official/Reference/VBA/HiddenModule/vbaRefVarAry)和[**vbaAryMove**](/official/Reference/VBA/HiddenModule/vbaAryMove)是在与C端数组布局交互时使用的低级辅助函数。

## 对象引用和转换

[**vbaObjAddref**](/official/Reference/VBA/HiddenModule/vbaObjAddref)、[**vbaObjSet**](/official/Reference/VBA/HiddenModule/vbaObjSet)和[**vbaObjSetAddref**](/official/Reference/VBA/HiddenModule/vbaObjSetAddref)直接操作COM引用计数。[**vbaCastObj**](/official/Reference/VBA/HiddenModule/vbaCastObj)根据给定IID返回重新解释为另一个COM接口的对象。[**CreateGUID**](/official/Reference/VBA/HiddenModule/CreateGUID)生成新的GUID并以注册表格式字符串返回。

## 原子操作

**Interlocked***系列封装了对应的Windows内核原子操作——无锁计数器和指针交换的基础构建块：[**InterlockedExchangePointer**](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer)、[**InterlockedCompareExchangePointer**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer)、[**InterlockedCompareExchange32**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32)、[**InterlockedCompareExchange64**](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64)、[**InterlockedIncrement32**](/official/Reference/VBA/HiddenModule/InterlockedIncrement32)和[**InterlockedDecrement32**](/official/Reference/VBA/HiddenModule/InterlockedDecrement32)。

## 编译时反射

一些内联函数询问周围类型的问题而不运行任何东西；它们由编译器解析并作为常量嵌入。[**GetDeclaredTypeProgId**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId)、[**GetDeclaredTypeClsid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid)、[**GetDeclaredTypeIid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid)和[**GetDeclaredTypeEventIid**](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid)报告类型的COM标识符。[**GetDeclaredMinEnumValue**](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue)和[**GetDeclaredMaxEnumValue**](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue)返回已声明枚举的最小值和最大值。

## 代码生成注入和栈检查

[**Emit**](/official/Reference/VBA/HiddenModule/Emit)和[**EmitAny**](/official/Reference/VBA/HiddenModule/EmitAny)将原始字节或类型化字面值拼接到封闭过程的代码生成输出中——内联汇编的载体。[**StackOffset**](/official/Reference/VBA/HiddenModule/StackOffset)和[**StackArgsSize**](/official/Reference/VBA/HiddenModule/StackArgsSize)报告当前调用点的布局信息；[**UnprotectedAccess**](/official/Reference/VBA/HiddenModule/UnprotectedAccess)返回绕过私有成员常规访问检查的对象引用。

## 运行时表达式求值

[**Eval**](/official/Reference/VBA/HiddenModule/Eval)编译并计算以字符串形式提供的twinBASIC表达式，使用配置了标准库绑定器的新构建的[**TbExpressionService**](/official/Reference/VBA/TbExpressionService/)。

## 图片、位图和图标

[**PictureToByteArray**](/official/Reference/VBA/HiddenModule/PictureToByteArray)将**IPicture**序列化为字节数组；[**CreateStdPictureFromHandle**](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle)将GDI句柄包装在**stdole.StdPicture**中；[**ConvertIconToBitmap**](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap)执行图标到位图的转换。

## 其他辅助函数

[**GetInheritedOwner**](/official/Reference/VBA/HiddenModule/GetInheritedOwner)返回控件的继承所有者对象。[**GetShortcutTextByEnum**](/official/Reference/VBA/HiddenModule/GetShortcutTextByEnum)返回内置键盘快捷键的本地化显示文本。[**SetThreadGlobalErrorTrap**](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap)注册一个回调，当未处理的运行时错误逃离调用线程上的活动错误处理程序链时触发。

## 成员

- [AllocMem](/official/Reference/VBA/HiddenModule/AllocMem) —— 分配本机内存块并返回其地址
- [ConvertIconToBitmap](/official/Reference/VBA/HiddenModule/ConvertIconToBitmap) —— 将图标图片转换为位图图片
- [CreateGUID](/official/Reference/VBA/HiddenModule/CreateGUID) —— 生成新的GUID并以注册表格式字符串返回
- [CreateStdPictureFromHandle](/official/Reference/VBA/HiddenModule/CreateStdPictureFromHandle) —— 将GDI位图或图标句柄包装在**stdole.StdPicture**中
- [Emit](/official/Reference/VBA/HiddenModule/Emit) —— 将自定义**Byte**值注入封闭过程的代码生成流
- [EmitAny](/official/Reference/VBA/HiddenModule/EmitAny) —— 将自定义类型化值注入封闭过程的代码生成流
- [Eval](/official/Reference/VBA/HiddenModule/Eval) —— 编译并计算以字符串形式提供的twinBASIC表达式
- [FreeMem](/official/Reference/VBA/HiddenModule/FreeMem) —— 释放使用[**AllocMem**](/official/Reference/VBA/HiddenModule/AllocMem)分配的内存
- [GetDeclaredMaxEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMaxEnumValue) —— 返回已声明枚举类型的最大值，在编译时解析
- [GetDeclaredMinEnumValue](/official/Reference/VBA/HiddenModule/GetDeclaredMinEnumValue) —— 返回已声明枚举类型的最小值，在编译时解析
- [GetDeclaredTypeClsid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeClsid) —— 返回与已声明类型关联的COM CLSID，在编译时解析
- [GetDeclaredTypeEventIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeEventIid) —— 返回与已声明类型关联的COM事件接口IID，在编译时解析
- [GetDeclaredTypeIid](/official/Reference/VBA/HiddenModule/GetDeclaredTypeIid) —— 返回与已声明类型关联的COM接口IID，在编译时解析
- [GetDeclaredTypeProgId](/official/Reference/VBA/HiddenModule/GetDeclaredTypeProgId) —— 返回与已声明类型关联的COM ProgID，在编译时解析
- [GetInheritedOwner](/official/Reference/VBA/HiddenModule/GetInheritedOwner) —— 返回控件的继承所有者对象
- [GetMem1](/official/Reference/VBA/HiddenModule/GetMem1) —— 从内存地址读取一个字节到**Byte**变量中
- [GetMem2](/official/Reference/VBA/HiddenModule/GetMem2) —— 从内存地址读取两个字节到**Integer**变量中
- [GetMem4](/official/Reference/VBA/HiddenModule/GetMem4) —— 从内存地址读取四个字节到**Long**变量中
- [GetMem8](/official/Reference/VBA/HiddenModule/GetMem8) —— 从内存地址读取八个字节到**Currency**变量中
- [GetMemPtr](/official/Reference/VBA/HiddenModule/GetMemPtr) —— 从内存地址读取指针大小的值到**LongPtr**变量中
- [GetShortcutTextByEnum](/official/Reference/VBA/HiddenModule/GetShortcutTextByEnum) —— 根据枚举ID返回内置键盘快捷键的本地化文本
- [InterlockedCompareExchange32](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange32) —— 原子地比较并交换32位值
- [InterlockedCompareExchange64](/official/Reference/VBA/HiddenModule/InterlockedCompareExchange64) —— 原子地比较并交换64位值
- [InterlockedCompareExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedCompareExchangePointer) —— 原子地比较并交换指针大小的值
- [InterlockedDecrement32](/official/Reference/VBA/HiddenModule/InterlockedDecrement32) —— 原子地将32位值减一并返回新值
- [InterlockedExchangePointer](/official/Reference/VBA/HiddenModule/InterlockedExchangePointer) —— 原子地交换指针大小的值并返回之前的值
- [InterlockedIncrement32](/official/Reference/VBA/HiddenModule/InterlockedIncrement32) —— 原子地将32位值加一并返回新值
- [PictureToByteArray](/official/Reference/VBA/HiddenModule/PictureToByteArray) —— 将**IPicture**序列化为**Byte**数组
- [PutMem1](/official/Reference/VBA/HiddenModule/PutMem1) —— 向内存地址写入一个字节
- [PutMem2](/official/Reference/VBA/HiddenModule/PutMem2) —— 向内存地址写入两个字节
- [PutMem4](/official/Reference/VBA/HiddenModule/PutMem4) —— 向内存地址写入四个字节
- [PutMem8](/official/Reference/VBA/HiddenModule/PutMem8) —— 向内存地址写入八个字节
- [PutMemPtr](/official/Reference/VBA/HiddenModule/PutMemPtr) —— 向内存地址写入指针大小的值
- [RuntimeCreateGetMessageHook](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook) —— 创建用于过滤窗口消息的[**IGetMessageHook**](./#igetmessagehook-interface)
- [SetThreadGlobalErrorTrap](/official/Reference/VBA/HiddenModule/SetThreadGlobalErrorTrap) —— 注册在调用线程上引发未处理错误时调用的全局回调
- [StackArgsSize](/official/Reference/VBA/HiddenModule/StackArgsSize) —— 返回当前过程栈帧上参数的总大小（以字节为单位）
- [StackOffset](/official/Reference/VBA/HiddenModule/StackOffset) —— 返回变量的栈帧偏移量
- [UnprotectedAccess](/official/Reference/VBA/HiddenModule/UnprotectedAccess) —— 返回绕过私有成员访问检查的对象引用
- [vbaAryMove](/official/Reference/VBA/HiddenModule/vbaAryMove) —— 将一个数组变量的内容移动到另一个中
- [vbaCastObj](/official/Reference/VBA/HiddenModule/vbaCastObj) —— 返回重新解释为另一个COM接口的对象
- [vbaCopyBytes](/official/Reference/VBA/HiddenModule/vbaCopyBytes) —— 将一个字节块从一个地址复制到另一个地址
- [vbaCopyBytesZero](/official/Reference/VBA/HiddenModule/vbaCopyBytesZero) —— 将一个字节块从一个地址复制到另一个地址，然后清零源
- [vbaObjAddref](/official/Reference/VBA/HiddenModule/vbaObjAddref) —— 递增给定地址对象的COM引用计数
- [vbaObjSet](/official/Reference/VBA/HiddenModule/vbaObjSet) —— 将对象指针赋值给对象变量，释放任何先前的引用
- [vbaObjSetAddref](/official/Reference/VBA/HiddenModule/vbaObjSetAddref) —— 将对象指针赋值给对象变量，添加引用并释放任何先前的引用
- [vbaRefVarAry](/official/Reference/VBA/HiddenModule/vbaRefVarAry) —— 返回**Variant**数组内部**SAFEARRAY**描述符的指针

## IGetMessageHook接口

**IGetMessageHook**接口钩入选定窗口——以及可选的其后代——的Windows消息流，并将选定类型的消息转发到用户提供的回调。使用[**RuntimeCreateGetMessageHook**](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook)获取实例；使用[**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage)连接回调；然后调用[**Start**](/official/Reference/VBA/HiddenModule/Start)激活所有已注册订阅，调用[**Stop**](/official/Reference/VBA/HiddenModule/Stop)移除订阅。

该接口直接继承自**stdole.IUnknown**（非基于分派），提供给**RegisterMessage**的回调类型为[**GetMessageHookHelper.GetMessageHandler**](#getmessagehandler)。

```vb
Const WM_LBUTTONDOWN = &H201

Sub Demo()
    Dim Hook As IGetMessageHook = RuntimeCreateGetMessageHook
    Hook.RegisterMessage Me.hWnd, AllDescendants, _
                         WM_LBUTTONDOWN, AddressOf OnLButtonDown
    Hook.Start
End Sub

Function OnLButtonDown(ByRef msg As GetMessageHookHelper.HookMSG) As LongPtr
    Debug.Print "Click at"; msg.pt.x, msg.pt.y
    ' Return zero to let the message continue normal processing.
End Function
```

### 成员

- [RegisterMessage](/official/Reference/VBA/HiddenModule/RegisterMessage) —— 为窗口和选定的后代范围订阅单个消息类型的回调
- [Start](/official/Reference/VBA/HiddenModule/Start) —— 激活所有已注册订阅
- [Stop](/official/Reference/VBA/HiddenModule/Stop) —— 停用所有已注册订阅

### EnumDescendantsModeFlags

选择传递给[**RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage)的窗口范围：

| 常量                                | 值  | 描述 |
|-------------------------------------|-----|------|
| **ExactWindow**                     | 1   | 仅钩住指定窗口。 |
| **AllDescendants**                  | 2   | 钩住指定窗口及所有后代——子级、孙级等。 |
| **DirectChildren**                  | 4   | 仅钩住指定窗口及其直接子级。 |

## GetMessageHookHelper模块

**GetMessageHookHelper**模块是[**IGetMessageHook**](#igetmessagehook-interface)的小型伴随模块，包含其回调使用的结构和委托类型。无需构造任何内容；这些名称仅用于声明。

### HookMSG

Windows `MSG`结构的副本，按引用传递给[**GetMessageHandler**](#getmessagehandler)回调。

```vb
Type HookMSG
    hwnd As LongPtr             ' Window the message is destined for.
    message As Long             ' The WM_* identifier.
    wParam As LongPtr           ' Message-specific parameter.
    lParam As LongPtr           ' Message-specific parameter.
    time As Long                ' Time the message was posted, in milliseconds since system start.
    pt As HookPOINT             ' Cursor position when the message was posted.
End Type
```

### HookPOINT

具有**Long**坐标的2D点，[**HookMSG**](#hookmsg)使用它来保存光标位置。

```vb
Type HookPOINT
    x As Long
    y As Long
End Type
```

### GetMessageHandler

[**IGetMessageHook.RegisterMessage**](/official/Reference/VBA/HiddenModule/RegisterMessage)接受的回调签名。返回零通常让消息继续正常处理。

```vb
Public Delegate Function GetMessageHandler (ByRef msg As HookMSG) As LongPtr
```