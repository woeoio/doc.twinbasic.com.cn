---
title: SendKeys
parent: Interaction Module
permalink: /tB/Modules/Interaction/SendKeys
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9a67bf24-f4d4-4055-96dd-e7eee0fc27c9'
  PropagateID: '9a67bf24-f4d4-4055-96dd-e7eee0fc27c9'
  ReservedCode1: '83f7115d-1a41-42d1-843e-76c8ada250bc'
  ReservedCode2: '83f7115d-1a41-42d1-843e-76c8ada250bc'
---

# SendKeys

向活动窗口发送一个或多个按键，如同从键盘输入。

语法：**SendKeys** *string* [ **,** *wait* ]

*string*
: *必需* 字符串表达式，指定要发送的按键。

*wait*
: *可选* **Boolean**，指定等待模式。如果为**False**（默认），按键入队后控制权立即返回给过程。如果为**True**，必须在接收窗口处理完按键后控制权才返回。

每个键由一个或多个字符表示。要指定单个键盘字符，使用字符本身——例如`"A"`表示字母A，或`"ABC"`表示依次输入A、B、C。

加号(`+`)、脱字符(`^`)、百分号(`%`)、波浪号(`~`)和括号`( )`对**SendKeys**有特殊含义。要发送这些字符本身，请用大括号括起来：例如`"{+}"`表示加号。方括号`[ ]`对**SendKeys**本身没有特殊含义，但必须用大括号括起来，因为其他应用程序在动态数据交换(DDE)期间可能特殊处理它们。要发送大括号字符，使用`"{​{"`和`"{}​}"`。

要发送不对应可打印字符的键，使用下表中的代码：

| 键 | 代码 |
|:--|:--|
| BACKSPACE | `{BACKSPACE}`、`{BS}`或`{BKSP}` |
| BREAK | `{BREAK}` |
| CAPS LOCK | `{CAPSLOCK}` |
| DEL或DELETE | `{DELETE}`或`{DEL}` |
| 下箭头 | `{DOWN}` |
| END | `{END}` |
| ENTER | `{ENTER}`或`~` |
| ESC | `{ESC}` |
| HELP | `{HELP}` |
| HOME | `{HOME}` |
| INS或INSERT | `{INSERT}`或`{INS}` |
| 左箭头 | `{LEFT}` |
| NUM LOCK | `{NUMLOCK}` |
| PAGE DOWN | `{PGDN}` |
| PAGE UP | `{PGUP}` |
| PRINT SCREEN | `{PRTSC}` |
| 右箭头 | `{RIGHT}` |
| SCROLL LOCK | `{SCROLLLOCK}` |
| TAB | `{TAB}` |
| 上箭头 | `{UP}` |
| F1--F16 | `{F1}` … `{F16}` |

要将键与SHIFT、CTRL或ALT组合，请在键代码前加上以下一个或多个修饰符代码：

| 键 | 代码 |
|:--|:--|
| SHIFT | `+` |
| CTRL | `^` |
| ALT | `%` |

要在按下一系列键时保持一个或多个修饰键按下，请将键用括号括起来。例如，`"+(EC)"`在按E和C时保持SHIFT按下。

要重复按键，使用`{key number}`形式——例如`"{LEFT 42}"`按LEFT 42次，或`"{h 10}"`输入`h`十次。*key*和*number*之间的空格是必需的。

::: info
**SendKeys**无法向不在Windows中运行的应用程序发送按键，也不能向任何应用程序发送PRINT SCREEN键(`{PRTSC}`)。
:::

### 示例

本示例使用[**Shell**](/official/Reference/VBA/Interaction/Shell)启动Windows计算器，并使用**SendKeys**控制它：将1到100的数字相加，取累计值，然后用ALT+F4关闭计算器。由于[**AppActivate**](/official/Reference/VBA/Interaction/AppActivate)会更改焦点，示例必须运行而非单步执行。

```vb
Dim TaskId As Double, I As Long
TaskId = Shell("CALC.EXE", vbNormalFocus)
AppActivate TaskId

For I = 1 To 100
    SendKeys I & "{+}", True
Next I

SendKeys "=", True
SendKeys "%{F4}", True
```

### 另请参阅

- [AppActivate](/official/Reference/VBA/Interaction/AppActivate)语句
- [Shell](/official/Reference/VBA/Interaction/Shell)函数