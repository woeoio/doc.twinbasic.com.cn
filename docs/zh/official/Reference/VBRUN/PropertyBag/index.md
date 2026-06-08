---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'd8557781-7f5a-4cb5-a1fe-c77799eaa7f9'
  PropagateID: 'd8557781-7f5a-4cb5-a1fe-c77799eaa7f9'
  ReservedCode1: '54ec1a10-e8c9-47f1-8938-48ddbff4b1a7'
  ReservedCode2: '54ec1a10-e8c9-47f1-8938-48ddbff4b1a7'
---

---
title: PropertyBag
parent: VBRUN Package
nav_order: 18
permalink: /tB/Packages/VBRUN/PropertyBag/
---

# PropertyBag 类

**PropertyBag**是为跨会话持久化对象状态而设计的小型键/值存储。每个条目是一个名称和一个**Variant**值；读取和写入条目是对称的，因此启动时加载包状态的代码可以在关闭时再次存储。整个包也可以通过[**Contents**](#contents)作为单个字节数组检索或替换，使得将状态保存到文件、数据库列或另一个**PropertyBag**变得简单。

新的**PropertyBag**使用**New**创建，初始为空：

``vb
Dim Bag As New PropertyBag
Bag.WriteProperty "Caption", Me.Caption, "Untitled"
Bag.WriteProperty "Width", Me.Width, 800

' 将包持久化到磁盘。
Dim Stream As Integer
Stream = FreeFile
Open "settings.bin" For Binary Access Write As #Stream
Put #Stream, , Bag.Contents
Close #Stream
``

运行时也将**PropertyBag**传递给**UserControl**的**WriteProperties**和**ReadProperties**事件；与用户代码中使用的相同API可通过宿主存储持久化控件的设计时和运行时状态。

## 成员

### Contents

返回或设置包的完整状态，类型为保存**Byte**数组的单个**Variant**。

语法：*object*.**Contents** [ **=** *value* ]

*object*
: *必需* 求值为**PropertyBag**对象的对象表达式。

*value*
: 包含先前从另一个**PropertyBag**的**Contents**获取的**Byte**数组的**Variant**。

读取**Contents**将整个包——当前其中的每个名称/值对——序列化为自包含的字节数组，适合写入文件、通过网络发送或存储到其他介质。对**Contents**赋值将丢弃当前状态，替换为*value*中编码的状态；字节数组必须是由兼容**PropertyBag**先前生成的。

### ReadProperty

返回先前以给定名称存储在包中的值。

语法：*object*.**ReadProperty(** *Name* [ **,** *DefaultValue* ] **)**

*object*
: *必需* 求值为**PropertyBag**对象的对象表达式。

*Name*
: *必需* 给出值写入时的键的**String**。名称按不区分大小写匹配。

*DefaultValue*
: *可选* 当包不包含名为*Name*的条目时返回的值。可以是可赋值给**Variant**的任何类型。如果省略，缺失条目的**ReadProperty**返回**Null**。

在控件的**ReadProperties**事件内部，约定向**ReadProperty**传递与[**WriteProperty**](#writeproperty)相同的默认值，使控件在未持久化值时回退到其设计时默认值。

### WriteProperty

以给定名称在包中存储值。

语法：*object*.**WriteProperty** *Name* **,** *Value* [ **,** *DefaultValue* ]

*object*
: *必需* 求值为**PropertyBag**对象的对象表达式。

*Name*
: *必需* 给出存储值所用键的**String**。如果先前已以相同名称存储了值，则替换。

*Value*
: *必需* 要存储的值。可以是可赋值给**Variant**的任何表达式。

*DefaultValue*
: *可选* 消费者在读取属性时将视为默认的值。如果*Value*等于*DefaultValue*，包可以完全跳过写入条目——读取端会回退到相同的默认值——从而保持序列化形式精简。传递与匹配的[**ReadProperty**](#readproperty)调用相同的默认值。