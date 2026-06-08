---
title: CodeLens
parent: Compiler and IDE Features
nav_order: 3
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b2c240ec-5deb-4714-889e-69c61c19c2d2'
  PropagateID: 'b2c240ec-5deb-4714-889e-69c61c19c2d2'
  ReservedCode1: '19420ae5-e18d-40ad-a2aa-e62fe8d99ce4'
  ReservedCode2: '19420ae5-e18d-40ad-a2aa-e62fe8d99ce4'
---

# 从 IDE 运行 Sub

CodeLens 功能允许直接在编辑器中运行无参数的 Sub 和 Function（限模块中，不包括类/窗体/UserControl），而无需启动完整程序。它可以完全访问你的代码；可以访问常量、调用内置函数和自定义函数、调用 API，以及输出到调试控制台。

符合 CodeLens 运行条件的方法（启用时），上方会显示一个可点击的运行栏：

![image](../Images/351d0147-cad3-4e16-89e5-0a9e43496740.png)

### 示例

模块中无参数的 `Public Sub` 符合 CodeLens 条件：

```vb
Public Sub RunTest()
    Debug.Print "Hello from CodeLens"
End Sub
```