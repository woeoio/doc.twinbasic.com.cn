---
title: "Hello World"
parent: Tutorials
permalink: /Tutorials/Hello-World
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '841d9b11-96db-403e-81f7-a6805eb8d918'
  PropagateID: '841d9b11-96db-403e-81f7-a6805eb8d918'
  ReservedCode1: 'a9a90d51-8199-4951-9943-c7e4f22bdda3'
  ReservedCode2: 'a9a90d51-8199-4951-9943-c7e4f22bdda3'
---

# Hello World

在本教程中，你将创建一个标准EXE项目，在窗体上放置一个按钮，编写一行代码，使得点击按钮时显示一个消息框。完成后你将构建并运行你的第一个twinBASIC应用程序。


## 创建项目

打开twinBASIC，选择**文件 → 新建项目 → 标准EXE**。IDE会创建一个新项目，其中包含一个已在设计器中打开的窗体 `Form1`。

<!-- screenshot: New Project dialog with Standard EXE selected -->

标准EXE是最常见的项目类型。它生成一个带有基于窗体用户界面的Windows可执行文件——正是VB6开发者数十年来构建的同类应用程序。

## 添加按钮

查看IDE左侧的工具箱面板。它列出了当前项目中可用的所有控件。如果工具箱不可见，通过**视图 → 工具箱**打开它。

在工具箱中找到**CommandButton**条目并双击。一个按钮出现在 `Form1` 上，默认名称为 `Command1`，标题为 `Command1`。

<!-- screenshot: Form1 with a CommandButton in the designer -->

你可以拖动按钮来重新定位，或拖动其手柄来调整大小。本教程中使用默认大小和位置即可。

## 编写点击处理程序

在设计器中双击按钮。IDE切换到代码编辑器，并为按钮的**Click**事件生成一个框架：

```vb
Private Sub Command1_Click()

End Sub
```

将光标放在Sub内的空行上，输入：

```vb
MsgBox "Hello, World!"
```

完整的处理程序如下：

```vb
Private Sub Command1_Click()
    MsgBox "Hello, World!"
End Sub
```

[**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)显示一个标准的Windows消息框，内容为你传递给它的文本。它会暂停执行，直到用户关闭对话框。

## 运行应用程序

按**F5**（或选择**运行 → 启动**）。窗体以常规窗口的形式出现在桌面上。点击**Command1**按钮。一个消息框弹出，显示文本"Hello, World!"。

<!-- screenshot: MsgBox dialog showing "Hello, World!" -->

点击**确定**关闭消息框，然后关闭窗体以停止应用程序并返回IDE。

## 刚才发生了什么

当你在设计器中双击按钮时，IDE创建了一个以控件和事件命名的处理程序Sub——`Command1_Click`。每当按钮收到来自Windows的Click消息时，twinBASIC会自动调用此Sub。

**MsgBox**是[VBA运行时库](/official/Reference/VBA/Interaction/MsgBox)中的函数，默认包含在每个twinBASIC项目中。它封装了Win32 `MessageBox` API并为你处理对话框生命周期。

窗体本身是一个操作系统窗口。**CommandButton**等控件是托管在其中的子窗口。IDE的设计器让你可以可视化地定位和配置这些控件；代码编辑器是你编写响应其事件逻辑的地方。

## 下一步

- [**窗体基础**](/official/Tutorials/Forms) —— 添加多个控件、设置属性、编写事件处理程序，并构建一个温度转换器。
- [**数组**](/official/Tutorials/Arrays) —— 固定数组和动态数组、边界和多维结构。