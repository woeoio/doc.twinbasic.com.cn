---
title: ServiceCreator
parent: "WinServicesLib 包"
permalink: /tB/Packages/WinServicesLib/ServiceCreator
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'ee4ecdda-c82e-4f04-a2a3-572e0dc34c7e'
  PropagateID: 'ee4ecdda-c82e-4f04-a2a3-572e0dc34c7e'
  ReservedCode1: 'a6694f3b-ffa4-48f9-949b-5d522e5d8e37'
  ReservedCode2: 'a6694f3b-ffa4-48f9-949b-5d522e5d8e37'
---

# ServiceCreator(Of T) 类

**WinServicesLib** 调度器在SCM启动服务时用于实例化用户服务类的通用工厂。*T* 是用户的 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 实现；**ServiceCreator(Of T)** 将 `New T` 包装在调度器可以按接口持有的工厂中。

语法：**New ServiceCreator(Of** *T* **)**

*T*
: *必需* 实现 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 的用户类。约束是*实际性的*而非语法性的——源代码中没有 `Where T : ITbService` 子句，但工厂的 `CreateInstance` 返回 `New T As ITbService`，编译器仅在 *T* 实现 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 时才接受。

该类是通常赋给 [**ServiceManager.InstanceCreator**](/official/Reference/WinServicesLib/ServiceManager#instancecreator) 的值：

```vb
With Services.ConfigureNew
    .Name             = "MyService"
    .InstanceCreator  = New ServiceCreator(Of MyService)    ' MyService Implements ITbService
End With
```

包通过引用持有工厂；调度器跳板每次服务启动调用 [**CreateInstance**](#createinstance) 一次，在SCM生成服务线程之后。返回的实例是包将路由其 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)、[**StartupFailed**](/official/Reference/WinServicesLib/ITbService#startupfailed) 和 [**ChangeState**](/official/Reference/WinServicesLib/ITbService#changestate) 方法的对象。

参见包[概述](/official/Reference/WinServicesLib/)了解 **ServiceCreator** 在更广泛生命周期中的位置。

## 方法

### CreateInstance

返回一个转换为 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 的新 `New T`。

语法：*creator*.**CreateInstance** **As** [**ITbService**](/official/Reference/WinServicesLib/ITbService)

用户代码很少直接调用 **CreateInstance**；包的调度器跳板每次服务启动调用一次。返回的实例由调度器在服务的整个生命周期内拥有——当服务停止或调度器退出时释放。

该方法没有参数；如果用户的服务类需要配置，应从传递给 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint) 的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 中读取，而非从构造函数参数中读取。

## 为什么使用工厂而非类引用

`ServiceCreator(Of T)` 的存在是因为SCM调度模型需要*延迟*实例化。配置阶段在SCM决定启动哪些服务之前运行于 `Sub Main` 中；在那里急切地构造服务类会为SCM可能永远不会启动（或只在很久之后才启动）的服务创建不必要的实例。工厂将 `New T` 调用推迟到服务实际启动时。

同样的间接性让调度器将 [**ITbService**](/official/Reference/WinServicesLib/ITbService) 实例与 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 一对一配对——跳板可以将特定服务的 [**ServiceManager**](/official/Reference/WinServicesLib/ServiceManager) 传入 [**EntryPoint**](/official/Reference/WinServicesLib/ITbService#entrypoint)，而服务类无需在构造时了解管理器。

## 另见

- [WinServicesLib 包](/official/Reference/WinServicesLib/) -- 概述、生命周期、双线程分离
- [ITbService 接口](/official/Reference/WinServicesLib/ITbService) -- *T* 必须实现的契约
- [ServiceManager 类](/official/Reference/WinServicesLib/ServiceManager) -- 每服务配置；**ServiceCreator** 实例被赋给其 [**InstanceCreator**](/official/Reference/WinServicesLib/ServiceManager#instancecreator) 字段