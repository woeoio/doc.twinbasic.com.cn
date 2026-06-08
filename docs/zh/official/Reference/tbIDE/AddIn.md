---
title: AddIn
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/AddIn
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ce8022c3-e2db-41fe-bc0a-c941ba86b132'
  PropagateID: 'ce8022c3-e2db-41fe-bc0a-c941ba86b132'
  ReservedCode1: '6d164f6d-1069-4f7a-8cba-6c37eac22fd2'
  ReservedCode2: '6d164f6d-1069-4f7a-8cba-6c37eac22fd2'
---

# AddIn 类

每个插件的主类必须实现的契约。一个只读属性——[**Name**](#name)——IDE 读取它来在错误消息、日志行和日后可能添加的插件管理 UI 中标注插件。IDE 永远不会自己创建 **AddIn**；插件 DLL 在 [`tbCreateCompilerAddin`](/official/Reference/tbIDE/#构建和加载插件) 内部构造该对象并返回它。

```vb
Private Class MyAddIn
    Implements AddIn

    Private WithEvents Host As Host

    Public Sub New(ByVal Host As Host)
        Set Me.Host = Host
    End Sub

    Private Property Get AddIn_Name() As String
        Return "My AddIn"
    End Property
End Class
```

实现 **AddIn** 的类也是存放插件使用的所有其他 `WithEvents` 引用（[**Host**](/official/Reference/tbIDE/Host)、每个 [**Button**](/official/Reference/tbIDE/Button)、每个 [**ToolWindow**](/official/Reference/tbIDE/ToolWindow)、可选的 [**AddinTimer**](/official/Reference/tbIDE/AddinTimer) 等）的自然位置——其生命周期与插件的加载状态绑定。

## 属性

### Name

插件的一个简短可读名称。**String**，只读。IDE 在加载插件时捕获此值一次。

语法：*addIn*.**Name** **As String**