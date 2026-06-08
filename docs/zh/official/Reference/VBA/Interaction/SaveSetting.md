---
title: SaveSetting
parent: Interaction Module
permalink: /tB/Modules/Interaction/SaveSetting
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '7848ea85-b19b-429f-b5de-b9784549f94e'
  PropagateID: '7848ea85-b19b-429f-b5de-b9784549f94e'
  ReservedCode1: '21e2ea03-8cbe-4d1a-a2ec-e2e3ad961109'
  ReservedCode2: '21e2ea03-8cbe-4d1a-a2ec-e2e3ad961109'
---

# SaveSetting

在Windows注册表中应用程序条目保存或创建应用程序条目。

语法：**SaveSetting** *appname*, *section*, *key*, *setting*

*appname*

: 字符串表达式，包含设置适用的应用程序或项目的名称。

*section*

: 字符串表达式，包含保存键设置的节的名称。

*key*

: 字符串表达式，包含保存的键设置的名称。

*setting*

: 字符串表达式，包含键被设置的值。

如果因任何原因无法保存键设置，则会产生错误。

这些注册表设置的根路径为：`Computer\HKEY_CURRENT_USER\Software\VB and VBA Program Settings`。

### 示例

以下示例首先使用**SaveSetting**语句在Windows注册表中为应用程序创建条目，然后使用[**DeleteSetting**](/official/Reference/VBA/Interaction/DeleteSetting)语句将其删除。

```vb
' Place some settings in the registry. 
SaveSetting appname := "MyApp", section := "Startup", _ 
 key := "Top", setting := 75 
SaveSetting "MyApp","Startup", "Left", 50 
' Remove section and all its settings from registry. 
DeleteSetting "MyApp", "Startup" 
```