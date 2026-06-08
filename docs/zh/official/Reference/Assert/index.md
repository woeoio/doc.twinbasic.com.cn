---
title: "Assert 包"
parent: Packages
nav_order: 4
permalink: /tB/Packages/Assert/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '497c31f1-041c-4fac-89b0-927156392b12'
  PropagateID: '497c31f1-041c-4fac-89b0-927156392b12'
  ReservedCode1: 'c623c7cc-bff7-410c-b51c-ac12c85ffa3f'
  ReservedCode2: 'c623c7cc-bff7-410c-b51c-ac12c85ffa3f'
---

# Assert 包

**Assert** 内置包提供了用于编写 twinBASIC 代码单元测试的断言函数。每个断言检查一个预期条件；失败时，它会记录测试失败以及调用位置和可选消息。测试运行器---twinBASIC IDE 的测试资源管理器或任何等效的工具---收集这些结果，决定哪些测试通过、失败或被跳过，并进行报告。

该包的三个模块---[**Exact**](/official/Reference/Assert/Exact)、[**Strict**](/official/Reference/Assert/Strict) 和 [**Permissive**](/official/Reference/Assert/Permissive)---公开了相同的十五个断言函数；只有*比较语义*不同。每种风格对应相等性评估的不同严格级别。

| 模块                       | 字符串比较 | 数值及其他比较                                                                                                                              |
|------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**Exact**](/official/Reference/Assert/Exact)           | 区分大小写     | 无隐式转换；数据类型必须完全匹配（`5` ≠ `5.0`）；`vbNullString` 与 `""` 不同；`Empty` 与 `0`、`False` 和 `""` 不同；不评估对象默认成员 |
| [**Strict**](/official/Reference/Assert/Strict)         | 区分大小写     | 按照比较直接写在 twinBASIC 代码中的方式评估；不评估对象默认成员                                         |
| [**Permissive**](/official/Reference/Assert/Permissive) | 不区分大小写   | 按照比较直接写在 twinBASIC 代码中的方式评估                                                                                     |

在三种风格中，`Null` 永远不被认为等于任何值---甚至不等于自身。要显式测试 **Null**，请使用 [**IsNull**](/official/Reference/Assert/Exact#isnull) / [**IsNotNull**](/official/Reference/Assert/Exact#isnotnull) 断言，而不是 `AreEqual(..., Null)`。

```vb
Sub TestStringReverse()
    Strict.AreEqual "olleh", StrReverse("hello")
    Strict.AreEqual "", StrReverse("")
End Sub
```

## 调用约定

每个模块的每个成员都标记了 `[MustBeQualified(True)]`---调用*必须*带有模块名称，即使是在已导入 **Assert** 包的项目内部：

```vb
Strict.IsTrue x > 0          ' 正确
IsTrue x > 0                 ' 编译错误——需要模块限定符
```

如果一个项目引用了多个暴露名为 **Strict** 的模块的包，还需使用包名进一步限定：**Assert.Strict.IsTrue** *x*。

## 仅调试模式

每个断言都标记了 `[DebugOnly(True)]`---调用在发布构建中编译为*空*，与 [**Debug.Print**](/official/Reference/Core/Print) 和 **Debug.Assert** 语句的方式相同。因此测试运行器需要在启用调试的情况下构建项目。

## 模块

- [Exact](/official/Reference/Assert/Exact) -- 最严格的比较；数据类型必须匹配且不会发生转换
- [Strict](/official/Reference/Assert/Strict) -- 区分大小写字符串，但相等性其他方面与 twinBASIC 代码中的直接比较一致
- [Permissive](/official/Reference/Assert/Permissive) -- 不区分大小写字符串；其他方面相等性与 twinBASIC 代码中的直接比较一致

## 成员

每个模块公开相同的十五个函数，按用途分组：

- **诊断结果** --- **Succeed**、**Fail**、**Inconclusive**
- **相等性** --- **AreEqual** / **AreNotEqual**、**AreSame** / **AreNotSame**
- **布尔** --- **IsTrue**、**IsFalse**
- **引用和值状态** --- **IsNothing** / **IsNotNothing**、**IsNull** / **IsNotNull**
- **序列** --- **SequenceEquals** / **NotSequenceEquals**

详见各模块页面了解完整签名和适用于每个成员的比较语义。