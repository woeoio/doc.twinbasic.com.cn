---
title: DeleteSetting
parent: Interaction Module
permalink: /tB/Modules/Interaction/DeleteSetting
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7a473994-3999-421e-b3fd-750f265f2c01'
  PropagateID: '7a473994-3999-421e-b3fd-750f265f2c01'
  ReservedCode1: '9dd37671-8b00-4aba-945d-d3c310e0f516'
  ReservedCode2: '9dd37671-8b00-4aba-945d-d3c310e0f516'
---

# DeleteSetting

从Windows注册表中应用程序条目删除节或键设置。

语法：**DeleteSetting** *appname*, *section*, [ *key* ]

*appname*

: 要删除其注册表设置的应用程序或项目的名称。

*section*

: *可选* *appname*条目中节的名称。如果省略，则删除整个*appname*节，包括其中的所有键。

*key*

: *可选* 要在指定*section*中删除的键的名称。如果省略，则删除整个**section**及其中的所有键。

对不存在的*appname*、*section*或*key*调用**DeleteSetting**时会产生运行时错误。

这些注册表设置的根路径为：`Computer\HKEY_CURRENT_USER\Software\VB and VBA Program Settings`。

## 示例

以下示例首先使用[**SaveSetting**](/official/Reference/VBA/Interaction/SaveSetting)语句在Windows注册表中为应用程序创建条目，然后使用**DeleteSetting**语句将其删除。由于未指定*key*参数，整个节被删除，包括节名称及其所有键。

```vb
' Place some settings in the registry. 
SaveSetting appname := "MyApp", section := "Startup", _ 
 key := "Top", setting := 75 
SaveSetting "MyApp", "Startup", "Left", 50 
' Remove section and all its settings from registry. 
DeleteSetting "MyApp", "Startup"
```