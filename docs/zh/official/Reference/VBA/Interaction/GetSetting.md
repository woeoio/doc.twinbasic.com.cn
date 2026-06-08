---
title: GetSetting
parent: Interaction Module
permalink: /tB/Modules/Interaction/GetSetting
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'a161ba6b-6cd3-4b17-89a5-4997172fe426'
  PropagateID: 'a161ba6b-6cd3-4b17-89a5-4997172fe426'
  ReservedCode1: '98374588-1907-48c1-b41d-2a0d58aec637'
  ReservedCode2: '98374588-1907-48c1-b41d-2a0d58aec637'
---

# GetSetting

从Windows注册表中应用程序条目返回字符串键设置值。

语法：**GetSetting(** *appname* **,** *section* **,** *key* [ **,** *default* ] **)**

*appname* 

: 字符串表达式，包含请求其键设置的应用程序或项目的名称。

*section*

:  字符串表达式，包含键设置所在节的名称。

*key*

:  字符串表达式，包含要返回的键设置的名称。

*default*

: *可选* Variant表达式，包含当键设置中没有设置值时要返回的值。如果省略，*default*假定为零长度字符串("")。

如果**GetSetting**参数中命名的任何项不存在，**GetSetting**返回*default*的值。

这些注册表设置的根路径为：`Computer\HKEY_CURRENT_USER\Software\VB and VBA Program Settings`。

### 示例

本示例首先使用[**SaveSetting**](/official/Reference/VBA/Interaction/SaveSetting)语句在Windows注册表中为指定为*appname*的应用程序创建条目，然后使用**GetSetting**函数显示其中一个设置。由于指定了*default*参数，保证会返回某个值。注意*section*名称不能用**GetSetting**检索。最后，[**DeleteSetting**](/official/Reference/VBA/Interaction/DeleteSetting)语句删除所有应用程序条目。

```vb
' Variant to hold 2-dimensional array returned by GetSetting.
Dim MySettings As Variant
' Place some settings in the registry.
SaveSetting "MyApp","Startup", "Top", 75
SaveSetting "MyApp","Startup", "Left", 50

Debug.Print GetSetting(appname := "MyApp", section := "Startup", _
                       key := "Left", default := "25")

DeleteSetting "MyApp", "Startup"
```