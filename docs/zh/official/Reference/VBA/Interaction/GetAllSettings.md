---
title: GetAllSettings
parent: Interaction Module
permalink: /tB/Modules/Interaction/GetAllSettings
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '950bbc0c-caa7-4978-80f7-e0543cc5d38b'
  PropagateID: '950bbc0c-caa7-4978-80f7-e0543cc5d38b'
  ReservedCode1: 'd01db37d-874e-4082-8d15-89afd1b09ba4'
  ReservedCode2: 'd01db37d-874e-4082-8d15-89afd1b09ba4'
---

# GetAllSettings

返回Windows注册表中应用程序条目某个节中的每个键及其值。

语法：**GetAllSettings(** *appname* **,** *section* **)**

*appname*
: *必需* 字符串表达式，包含请求其键设置的应用程序或项目的名称。

*section*
: *必需* 字符串表达式，包含请求其键设置的节的名称。

返回一个**Variant**，其内容为二维字符串数组：每行包含一个键及其值，分别在第0列和第1列。如果*appname*或*section*不存在，**GetAllSettings**返回未初始化的**Variant**。

这些注册表设置的根路径为：`Computer\HKEY_CURRENT_USER\Software\VB and VBA Program Settings`。

### 示例

本示例首先使用[**SaveSetting**](/official/Reference/VBA/Interaction/SaveSetting)在Windows注册表中为应用程序创建条目，然后使用**GetAllSettings**显示某个节中的所有键值对，最后使用[**DeleteSetting**](/official/Reference/VBA/Interaction/DeleteSetting)删除应用程序的条目。注意*appname*和*section*名称本身不会被检索。

```vb
' Place some settings in the registry.
SaveSetting AppName := "MyApp", Section := "Startup", _
            Key := "Top", Setting := "75"
SaveSetting "MyApp", "Startup", "Left", "50"

' Retrieve them.
Dim MySettings As Variant, IntSettings As Long
MySettings = GetAllSettings(AppName := "MyApp", Section := "Startup")
For IntSettings = LBound(MySettings, 1) To UBound(MySettings, 1)
    Debug.Print MySettings(IntSettings, 0), MySettings(IntSettings, 1)
Next IntSettings

DeleteSetting "MyApp", "Startup"
```

### 另请参阅

- [DeleteSetting](/official/Reference/VBA/Interaction/DeleteSetting)语句
- [GetSetting](/official/Reference/VBA/Interaction/GetSetting)函数
- [SaveSetting](/official/Reference/VBA/Interaction/SaveSetting)语句