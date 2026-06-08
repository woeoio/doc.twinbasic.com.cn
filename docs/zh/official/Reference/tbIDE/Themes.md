---
title: Themes
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Themes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b8564c33-6f02-43d7-bdde-33efcafa6abf'
  PropagateID: 'b8564c33-6f02-43d7-bdde-33efcafa6abf'
  ReservedCode1: '13ab6816-5a97-489d-b9fb-f07bc3793312'
  ReservedCode2: '13ab6816-5a97-489d-b9fb-f07bc3793312'
---

# Themes 类

IDE 的活动主题状态——通过 [**Host.Themes**](/official/Reference/tbIDE/Host#themes) 访问。配合 [**Host.OnChangedTheme**](/official/Reference/tbIDE/Host#onchangedtheme) 事件刷新插件在其工具窗口内绘制的任何颜色敏感元素。

```vb
Private Sub Host_OnProjectLoaded()
    ApplyThemeColors                      ' 根据当前主题设置初始颜色
End Sub

Private Sub Host_OnChangedTheme(ByVal ThemeName As String)
    ApplyThemeColors                      ' 用户选择了新主题 — 重新应用
End Sub

Private Sub ApplyThemeColors()
    Select Case Host.Themes.ActiveThemeNameGroup
        Case "dark":  myToolWindow.ApplyCss "body { background: #1e1e1e; color: white; }"
        Case "light": myToolWindow.ApplyCss "body { background: white;   color: black; }"
    End Select
End Sub
```


## 属性

### ActiveThemeName

当前 IDE 主题的名称——例如 `"Classic"`、`"Dark"`、`"Light"`。**String**，只读。

可用主题集由 IDE 决定，可能在未来版本中增加；不要用穷尽式的 `Select Case` 切换此值。对于浅色/深色的二值颜色决策，改用 [**ActiveThemeNameGroup**](#activethemenamegroup)。

### ActiveThemeNameGroup

当前主题所属的高层"族"。**String**，只读——恰好为 `"dark"` 或 `"light"`。

适用于想要在深色浅底和浅色深底之间切换自身颜色，而无需解析 [**ActiveThemeName**](#activethemename) 的插件。