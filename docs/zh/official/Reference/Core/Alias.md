---
title: Alias
parent: Statements
permalink: /tB/Core/Alias
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9573361a-7b6a-407c-baa1-039e7ce2635b'
  PropagateID: '9573361a-7b6a-407c-baa1-039e7ce2635b'
  ReservedCode1: 'd69efc33-fdea-4529-9f61-d83edad5fc9c'
  ReservedCode2: 'd69efc33-fdea-4529-9f61-d83edad5fc9c'
---

# Alias

为内部类型、用户自定义 [**Type**](/official/Reference/Core/Type)、[**Interface**](/official/Reference/Core/Interface) 或另一个 **Alias** 声明替代名称。别名与原始类型可互换——它们之间赋值不会产生类型不匹配。类似于C/C++中的 `typedef`。

::: info
**Alias** 语句是twinBASIC扩展。经典VBA中没有等价功能，VBA中 **Alias** 关键字的唯一用途是在 [**Declare**](/official/Reference/Core/Declare) 语句中命名DLL入口点。
:::

语法：
> [ **Public** \| **Private** ] **Alias** *aliasname* **As** *type*

**Public**
: *可选* 别名导出到ActiveX DLL或控件的类型库，因此其他项目的使用者可以看到 *aliasname* 本身。

**Private**
: *可选* 别名仅在项目内可见。**Private** 别名的使用在编译时会被替换为底层 *type*，因此 *aliasname* 不会出现在项目的类型库中。

*aliasname*
: 别名的名称。必须是有效的twinBASIC标识符。

*type*
: 原始类型。可以是内部类型、用户自定义 [**Type**](/official/Reference/Core/Type)、[**Interface**](/official/Reference/Core/Interface) 或另一个 **Alias**。

**Alias** 语句仅在 `.twin` 源文件中有效（不支持传统 `.bas` 或 `.cls` 文件），且必须出现在文件作用域——在 [**Module**](/official/Reference/Core/Module) 和 [**Class**](/official/Reference/Core/Class) 块之外，与 [**Interface**](/official/Reference/Core/Interface) 和 [**CoClass**](/official/Reference/Core/CoClass) 声明并列。

### 示例

为内部类型和用户自定义类型创建别名：

```vb
Public Type POINT
    x As Long
    y As Long
End Type

Public Alias POINTAPI As POINT

Public Alias CBoolean As Byte

Public Alias KAFFINITY As LongPtr
```

使用别名声明的变量与使用原始类型声明的变量可以互换：

```vb
Dim p As POINT
Dim q As POINTAPI
p = q   ' OK — no type mismatch.
```

### 另请参阅

- [**Type** 语句](/official/Reference/Core/Type)
- [**Interface** 语句](/official/Reference/Core/Interface)
- [**CoClass** 语句](/official/Reference/Core/CoClass)
- [别名类型](/official/Features/Language/Alias-Types)