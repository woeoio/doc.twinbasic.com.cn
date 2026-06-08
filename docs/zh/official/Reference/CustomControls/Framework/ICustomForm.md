---
title: ICustomForm
parent: Framework
permalink: /tB/Packages/CustomControls/Framework/ICustomForm
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '17ac44cc-b0db-4ee5-82f6-0bfa1ca7bdc3'
  PropagateID: '17ac44cc-b0db-4ee5-82f6-0bfa1ca7bdc3'
  ReservedCode1: '5d32a067-d8d7-47e4-85e4-2051602497c6'
  ReservedCode2: '5d32a067-d8d7-47e4-85e4-2051602497c6'
---

# ICustomForm 接口
[**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl) 的窗体类对应接口。自定义*窗体*类——承载其他自定义控件的顶级窗口——实现此接口。形状与 **ICustomControl** 相同，只是 **Initialize** 回调接收 [**CustomFormContext**](/official/Reference/CustomControls/Framework/CustomFormContext)（它扩展了 [**CustomControlContext**](/official/Reference/CustomControls/Framework/CustomControlContext) 的 **Show** 和 **Close**）而非普通的 **CustomControlContext**。

[**WaynesForm**](/official/Reference/CustomControls/WaynesForm/)——包中唯一的具体窗体类——实际上实现了 [**ICustomControl**](/official/Reference/CustomControls/Framework/ICustomControl) 并在内部将上下文转换为 **CustomFormContext**——**ICustomForm** 接口的发布是为了与 **ICustomControl** 对等，但目前没有被包中任何类使用。

## 方法

### Destroy

窗体被释放时调用一次。参见 [**ICustomControl.Destroy**](/official/Reference/CustomControls/Framework/ICustomControl#destroy)。

语法：*object*.**Destroy** ( )

### Initialize

在框架构建窗体并将设计器设置的属性值反序列化到其中后调用一次。

语法：*object*.**Initialize** ( *Context* )

*Context*
: *必需* 此窗体实例的 [**CustomFormContext**](/official/Reference/CustomControls/Framework/CustomFormContext)。

### Paint

每次框架需要重绘窗体客户区域时调用。参见 [**ICustomControl.Paint**](/official/Reference/CustomControls/Framework/ICustomControl#paint)。

语法：*object*.**Paint** ( *Canvas* )

*Canvas*
: *必需* 此绘制过程的 [**Canvas**](/official/Reference/CustomControls/Framework/Canvas) 绘图表面。