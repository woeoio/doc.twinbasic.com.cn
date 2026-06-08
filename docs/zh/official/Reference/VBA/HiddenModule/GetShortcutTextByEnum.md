---
title: GetShortcutTextByEnum
parent: (Default) Module
permalink: /tB/Modules/HiddenModule/GetShortcutTextByEnum
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4528cfca-c74d-4702-8290-399220ce5e24'
  PropagateID: '4528cfca-c74d-4702-8290-399220ce5e24'
  ReservedCode1: '3c2b4dea-47ba-43b0-ade0-e10961e3da27'
  ReservedCode2: '3c2b4dea-47ba-43b0-ade0-e10961e3da27'
---

# GetShortcutTextByEnum

根据枚举ID返回内置键盘快捷键的本地化显示文本。

语法：**GetShortcutTextByEnum(** *ShortcutEnumId* **)** **As String**

*ShortcutEnumId*
: *必需* **Long**。快捷键的数字标识符，与菜单和工具栏项的**Shortcut**属性使用的相同。

返回的字符串是快捷键面向用户的标签——例如`"Ctrl+S"`、`"Ctrl+Shift+P"`、`"F5"`——以系统UI语言格式化。未知标识符返回空字符串。

### 另请参阅

- [RuntimeCreateGetMessageHook](/official/Reference/VBA/HiddenModule/RuntimeCreateGetMessageHook)函数