---
title: Toolbar
parent: "tbIDE 包"
permalink: /tB/Packages/tbIDE/Toolbar
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '159a26ef-d550-4afa-9ddd-7325945380c0'
  PropagateID: '159a26ef-d550-4afa-9ddd-7325945380c0'
  ReservedCode1: 'b183ee5e-b5bb-44e1-918b-adb45a758019'
  ReservedCode2: 'b183ee5e-b5bb-44e1-918b-adb45a758019'
---

# Toolbar 类

一个 IDE 工具栏——沿 IDE 窗口顶部延伸的按钮条。插件在启动期间向其添加自己的按钮和分隔符。通过 `Host.Toolbars(0)` 访问（当前唯一工具栏）。

```vb
Private Sub Host_OnProjectLoaded()
    With Host.Toolbars(0)
        .AddSplitter
        Set Button1 = .AddButton("MyAddInButton1", "Action 1", LoadResData("icon.png", "ICONS"))
        Set Button2 = .AddButton("MyAddInButton2", "Action 2")
    End With
End Sub
```

工具栏与 IDE 自身的命令和所有其他已加载的插件共享——选择能唯一标识插件的按钮 ID，以避免多个插件的冲突。


## 方法

### AddButton

向工具栏右端添加新按钮，并返回 [**Button**](/official/Reference/tbIDE/Button) 对象，供插件通过 `WithEvents` 附加。

语法：*toolbar*.**AddButton**( *Id*, *Caption* [, *IconData* ] ) **As** [**Button**](/official/Reference/tbIDE/Button)

*Id*
: *必需* 标识按钮的唯一字符串。**String**。选择带插件前缀的值（例如 `"MyAddIn.RefreshButton"`），以避免多个已加载插件的冲突。

*Caption*
: *必需* 按钮的标签。**String**。当提供了 *IconData* 时，标题仅显示为工具提示；当省略 *IconData* 时，标题以内联方式显示为按钮文本。

*IconData*
: *可选* 按钮图标，为 **Byte()** 数组——通常是通过 `LoadResData` 加载的嵌入 PNG / ICO 资源的字节。**Variant**。传入空值/ **Empty** 以省略图标并以内联方式显示标题。

```vb
Dim icon() As Byte
icon = LoadResData("button1.png", "ICONS")
Set Button1 = Host.Toolbars(0).AddButton("MyAddIn.Button1", "Refresh Project", icon)
```

### AddSplitter

向工具栏添加垂直分隔条——按钮组之间的视觉分隔符。

语法：*toolbar*.**AddSplitter**

传统插件启动模式：一个 **AddSplitter** 调用将插件的按钮与 IDE 原生按钮分隔，然后一系列 [**AddButton**](#addbutton) 调用。