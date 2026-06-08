---
title: UBound
parent: Information Module
permalink: /tB/Modules/Information/UBound
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '50c9db04-aa7c-4de4-95b9-ee4a6fc5a5c4'
  PropagateID: '50c9db04-aa7c-4de4-95b9-ee4a6fc5a5c4'
  ReservedCode1: '0d5e9dea-0700-4cc7-b264-d48a69c6356f'
  ReservedCode2: '0d5e9dea-0700-4cc7-b264-d48a69c6356f'
---

# UBound

返回一个**Long**，包含数组指定维度的最大可用下标。

语法：**UBound(** *arrayname* [ **,** *dimension* ] **)**

*arrayname*
: *必需* 数组变量的名称；遵循标准变量命名约定。

*dimension*
: *可选* **Long**，指示返回哪个维度的上界。1表示第一维，2表示第二维，以此类推。如果省略*dimension*，则假定为1。

**UBound**与[**LBound**](/official/Reference/VBA/Information/LBound)一起用于确定数组的大小。

对于数组`Dim A(1 To 100, 0 To 3, -3 To 4)`，**UBound**返回：

| 语句 | 返回值 |
|------|--------|
| `UBound(A, 1)` | 100 |
| `UBound(A, 2)` | 3 |
| `UBound(A, 3)` | 4 |

### 示例

本示例使用**UBound**返回数组指定维度的最大可用下标。

```vb
Dim Upper As Long
Dim MyArray(1 To 10, 5 To 15, 10 To 20)    ' Multidimensional array.
Dim AnyArray(10)
Upper = UBound(MyArray, 1)                 ' Returns 10.
Upper = UBound(MyArray, 3)                 ' Returns 20.
Upper = UBound(AnyArray)                   ' Returns 10.
```

### 另请参阅

- [LBound](/official/Reference/VBA/Information/LBound)函数
- [IsArray](/official/Reference/VBA/Information/IsArray)、[IsArrayInitialized](/official/Reference/VBA/Information/IsArrayInitialized)函数