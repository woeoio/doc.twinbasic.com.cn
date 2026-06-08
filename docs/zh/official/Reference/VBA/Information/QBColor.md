---
title: QBColor
parent: Information Module
permalink: /tB/Modules/Information/QBColor
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f671f233-be5c-4c75-b830-1c3097b2ed1c'
  PropagateID: 'f671f233-be5c-4c75-b830-1c3097b2ed1c'
  ReservedCode1: 'd9151067-472a-495c-8f25-590cb391581c'
  ReservedCode2: 'd9151067-472a-495c-8f25-590cb391581c'
---

# QBColor

返回一个**Long**，表示与指定颜色编号对应的RGB颜色代码。

语法：**QBColor(** *color* **)**

*color*
: *必需* 0--15范围内的整数。

*color*参数设置如下：

| 编号 | 颜色 | 编号 | 颜色 |
|------|------|------|------|
| 0 | 黑色 | 8 | 灰色 |
| 1 | 蓝色 | 9 | 亮蓝色 |
| 2 | 绿色 | 10 | 亮绿色 |
| 3 | 青色 | 11 | 亮青色 |
| 4 | 红色 | 12 | 亮红色 |
| 5 | 品红色 | 13 | 亮品红色 |
| 6 | 黄色 | 14 | 亮黄色 |
| 7 | 白色 | 15 | 亮白色 |

*color*参数代表早期Basic版本——MS-DOS的Microsoft Visual Basic和QuickBASIC编译器——使用的颜色值。从最低有效字节开始，返回值指定了RGB系统中用于设置对应颜色的红、绿、蓝分量，就像用这些分量调用了[**RGB**](/official/Reference/VBA/Information/RGB)一样。

### 示例

本示例使用**QBColor**从数字颜色代码设置窗体的背景颜色。

```vb
Sub ChangeBackColor(ByVal ColorCode As Integer, ByVal MyForm As Form)
    MyForm.BackColor = QBColor(ColorCode)
End Sub
```

### 另请参阅

- [RGB](/official/Reference/VBA/Information/RGB)、[RGBA](/official/Reference/VBA/Information/RGBA)函数
- [TranslateColor](/official/Reference/VBA/Information/TranslateColor)函数