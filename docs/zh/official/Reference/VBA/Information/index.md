---
title: Information模块
parent: VBA Package
permalink: /tB/Modules/Information/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '53066118-ef33-4efa-ae7e-a54891b1fd4b'
  PropagateID: '53066118-ef33-4efa-ae7e-a54891b1fd4b'
  ReservedCode1: 'e0447ef6-05f7-4439-8af4-7b004f0c9eaa'
  ReservedCode2: 'e0447ef6-05f7-4439-8af4-7b004f0c9eaa'
---

# Information模块

**Information**模块将运行时查询值状态的独立过程组合在一起——子类型、是否已初始化、是否提供了可选参数——以及相关的用于查询数组边界、构建**Variant**数组、获取原始地址、分解颜色值和获取当前运行时错误状态的工具。

## 检查值

`Is...`系列函数测试表达式是否具有特定状态或子类型，返回**Boolean**：[**IsArray**](/official/Reference/VBA/Information/IsArray)、[**IsArrayInitialized**](/official/Reference/VBA/Information/IsArrayInitialized)、[**IsDate**](/official/Reference/VBA/Information/IsDate)、[**IsEmpty**](/official/Reference/VBA/Information/IsEmpty)、[**IsError**](/official/Reference/VBA/Information/IsError)、[**IsMissing**](/official/Reference/VBA/Information/IsMissing)、[**IsNull**](/official/Reference/VBA/Information/IsNull)、[**IsNumeric**](/official/Reference/VBA/Information/IsNumeric)和[**IsObject**](/official/Reference/VBA/Information/IsObject)。要获取更丰富的查询，[**VarType**](/official/Reference/VBA/Information/VarType)返回标识**Variant**子类型的[**VbVarType**](/official/Reference/VBA/Constants/VbVarType)枚举值，[**TypeName**](/official/Reference/VBA/Information/TypeName)返回其名称作为**String**。

```vb
Dim v As Variant
v = "1/1/2000"
Debug.Print IsDate(v)        ' True
Debug.Print VarType(v)       ' 8  (vbString)
Debug.Print TypeName(v)      ' "String"
```

## 数组边界

[**LBound**](/official/Reference/VBA/Information/LBound)和[**UBound**](/official/Reference/VBA/Information/UBound)返回数组指定维度的最小和最大有效下标。使用单个参数时报告第一维；传入显式的*Dimension*索引可查询多维数组。

```vb
Dim Grid(1 To 4, 0 To 9) As Long
Debug.Print LBound(Grid)        ' 1   — first dimension lower bound
Debug.Print UBound(Grid)        ' 4   — first dimension upper bound
Debug.Print LBound(Grid, 2)     ' 0   — second dimension lower bound
Debug.Print UBound(Grid, 2)     ' 9   — second dimension upper bound
```

## 构建Variant数组

[**Array**](/official/Reference/VBA/Information/Array)从逗号分隔的值列表创建**Variant**数组；下界遵循源文件的**Option Base**设置。作为特殊形式，同一名称还兼作解构`Property Let`，用于将右侧数组解包到左侧的各个变量中。

```vb
Dim a As Variant = Array("one", "two", "three")
Dim x As Variant, y As Variant, z As Variant
Array(x, y, z) = a              ' destructuring assignment
```

## 原始指针

三个函数返回用于API调用或非安全互操作的原始地址：[**ObjPtr**](/official/Reference/VBA/Information/ObjPtr)用于对象的COM标识，[**StrPtr**](/official/Reference/VBA/Information/StrPtr)用于**String**的底层缓冲区，[**VarPtr**](/official/Reference/VBA/Information/VarPtr)用于任何变量。结果是一个**LongPtr**，仅在底层对象、字符串或变量保持活动期间有效——获取指针不会持有自身的引用。要在已知地址读写内存，请将这些与[(Default)](/official/Reference/VBA/HiddenModule/)模块中的[**GetMem**](/official/Reference/VBA/HiddenModule/GetMem4)/[**PutMem**](/official/Reference/VBA/HiddenModule/PutMem4)系列函数配合使用。

```vb
Dim n As Long = &H12345678
Dim Bytes(0 To 3) As Byte
vbaCopyBytes 4, VarPtr(Bytes(0)), VarPtr(n)
Debug.Print Hex(Bytes(0))        ' "78" — little-endian
```

## 处理颜色值

[**RGB**](/official/Reference/VBA/Information/RGB)和[**RGBA**](/official/Reference/VBA/Information/RGBA)从单独的红、绿、蓝和（可选的）Alpha分量构建32位颜色值；[**RGB_R**](/official/Reference/VBA/Information/RGB_R)、[**RGB_G**](/official/Reference/VBA/Information/RGB_G)、[**RGB_B**](/official/Reference/VBA/Information/RGB_B)和[**RGBA_A**](/official/Reference/VBA/Information/RGBA_A)将这些分量提取出来。[**QBColor**](/official/Reference/VBA/Information/QBColor)返回十六个QuickBASIC颜色索引之一的RGB值，[**TranslateColor**](/official/Reference/VBA/Information/TranslateColor)将OLE颜色值（可能引用系统调色板中的条目）转换为普通RGB颜色。

```vb
Dim C As Long
C = RGB(255, 100, 150)
Debug.Print RGB_R(C)         ' 255
Debug.Print RGB_G(C)         ' 100
Debug.Print RGB_B(C)         ' 150
```

## 运行时错误状态

[**Err**](/official/Reference/VBA/Information/Err)返回描述当前运行时错误状态的[**ErrObject**](/official/Reference/VBA/ErrObject/)——其编号、描述、来源等。[**Erl**](/official/Reference/VBA/Information/Erl)返回引发最近错误的语句的行号（当作为数字标签提供时）。

## 成员

- [Array](/official/Reference/VBA/Information/Array) -- 从逗号分隔的值列表创建**Variant**数组，或在赋值左侧使用时进行解构
- [Erl](/official/Reference/VBA/Information/Erl) -- 返回最近运行时错误发生的行号
- [Err](/official/Reference/VBA/Information/Err) -- 返回描述当前运行时错误状态的[**ErrObject**](/official/Reference/VBA/ErrObject/)
- [IMEStatus](/official/Reference/VBA/Information/IMEStatus) -- 返回输入法编辑器的状态
- [IsArray](/official/Reference/VBA/Information/IsArray) -- 返回变量是否为数组
- [IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized) -- 返回数组是否已分配维度
- [IsDate](/official/Reference/VBA/Information/IsDate) -- 返回表达式是否可求值为日期
- [IsEmpty](/official/Reference/VBA/Information/IsEmpty) -- 返回**Variant**是否未初始化
- [IsError](/official/Reference/VBA/Information/IsError) -- 返回表达式是否为错误子类型
- [IsMissing](/official/Reference/VBA/Information/IsMissing) -- 返回是否提供了可选参数
- [IsNull](/official/Reference/VBA/Information/IsNull) -- 返回变量是否包含**Null**值
- [IsNumeric](/official/Reference/VBA/Information/IsNumeric) -- 返回表达式是否可求值为数字
- [IsObject](/official/Reference/VBA/Information/IsObject) -- 返回变量是否引用对象
- [LBound](/official/Reference/VBA/Information/LBound) -- 返回数组某一维度的最小有效下标
- [ObjPtr](/official/Reference/VBA/Information/ObjPtr) -- 返回对象的COM标识地址
- [QBColor](/official/Reference/VBA/Information/QBColor) -- 返回QuickBASIC颜色索引对应的RGB颜色值
- [RGB](/official/Reference/VBA/Information/RGB) -- 从红、绿、蓝分量构建RGB颜色值
- [RGBA](/official/Reference/VBA/Information/RGBA) -- 从红、绿、蓝和Alpha分量构建RGBA颜色值
- [RGBA_A](/official/Reference/VBA/Information/RGBA_A) -- 返回RGBA颜色值的Alpha分量
- [RGB_B](/official/Reference/VBA/Information/RGB_B) -- 返回RGB颜色值的蓝色分量
- [RGB_G](/official/Reference/VBA/Information/RGB_G) -- 返回RGB颜色值的绿色分量
- [RGB_R](/official/Reference/VBA/Information/RGB_R) -- 返回RGB颜色值的红色分量
- [StrPtr](/official/Reference/VBA/Information/StrPtr) -- 返回**String**底层缓冲区的地址
- [TranslateColor](/official/Reference/VBA/Information/TranslateColor) -- 将OLE颜色值转换为普通RGB颜色值
- [TypeName](/official/Reference/VBA/Information/TypeName) -- 返回变量数据类型的名称作为**String**
- [UBound](/official/Reference/VBA/Information/UBound) -- 返回数组某一维度的最大有效下标
- [VarPtr](/official/Reference/VBA/Information/VarPtr) -- 返回变量的地址
- [VarType](/official/Reference/VBA/Information/VarType) -- 返回标识变量子类型的[**VbVarType**](/official/Reference/VBA/Constants/VbVarType)枚举值