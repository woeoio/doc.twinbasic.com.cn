---
title: LBound
parent: Information Module
permalink: /tB/Modules/Information/LBound
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '376011f6-bc49-4276-aa31-2058763dde44'
  PropagateID: '376011f6-bc49-4276-aa31-2058763dde44'
  ReservedCode1: '385d8a5d-3327-41bf-9469-f8cf14a2047d'
  ReservedCode2: '385d8a5d-3327-41bf-9469-f8cf14a2047d'
---

# LBound

返回一个**Long**，包含数组指定维度的最小可用下标。

语法：**LBound(** *arrayname* [ **,** *dimension* ] **)**

*arrayname*
: *必需* 数组变量的名称；遵循标准变量命名约定。

*dimension*
: *可选* **Long**，指示返回哪个维度的下界。1表示第一维，2表示第二维，以此类推。如果省略*dimension*，则假定为1。

**LBound**与[**UBound**](/official/Reference/VBA/Information/UBound)一起用于确定数组的大小。

对于数组`Dim A(1 To 100, 0 To 3, -3 To 4)`，**LBound**返回：

| 语句 | 返回值 |
|------|--------|
| `LBound(A, 1)` | 1 |
| `LBound(A, 2)` | 0 |
| `LBound(A, 3)` | -3 |

任何维度的默认下界为0或1，取决于**Option Base**设置。使用[**Array**](/official/Reference/Core/Array)函数创建的数组无论**Option Base**如何，下界都为零。使用**Dim**、**Private**、**Public**、**ReDim**或**Static**中的**To**子句设置维度的数组可以具有任何整数下界。

### 示例

本示例使用**LBound**返回数组指定维度的最小可用下标。

```vb
Dim Lower As Long
Dim MyArray(1 To 10, 5 To 15, 10 To 20)    ' Multidimensional array.
Dim AnyArray(10)
Lower = LBound(MyArray, 1)                 ' Returns 1.
Lower = LBound(MyArray, 3)                 ' Returns 10.
Lower = LBound(AnyArray)                   ' Returns 0 or 1, per Option Base.
```

### 另请参阅

- [UBound](/official/Reference/VBA/Information/UBound)函数
- [IsArray](/official/Reference/VBA/Information/IsArray)、[IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized)函数