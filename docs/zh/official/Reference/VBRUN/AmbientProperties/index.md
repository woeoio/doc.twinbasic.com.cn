---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'fe89b4b9-4456-49b5-a377-6c43fdc9c29b'
  PropagateID: 'fe89b4b9-4456-49b5-a377-6c43fdc9c29b'
  ReservedCode1: '97dbc616-4b9e-4505-99de-918881490109'
  ReservedCode2: '97dbc616-4b9e-4505-99de-918881490109'
---

---
title: AmbientProperties
parent: VBRUN Package
nav_order: 19
permalink: /tB/Packages/VBRUN/AmbientProperties/
---

# AmbientProperties 类

**AmbientProperties**对象公开控件宿主环境的信息。容器——窗体、属性页、IDE设计器表面——填充此对象，提供有关其外观、区域设置和操作模式的提示，使嵌入控件能够自行适应。每个属性均为只读：由容器而非控件决定这些值。

## 检测设计时与运行时

控件在设计器表面上放置时通常需要与在应用程序中实际运行时表现不同。[**UserMode**](/official/Reference/VBRUN/AmbientProperties/UserMode)在IDE设计器中返回**False**，在运行时返回**True**；[**UIDead**](/official/Reference/VBRUN/AmbientProperties/UIDead)在调试器暂停执行时变为**True**，使控件知道不要重绘或响应输入。[**ShowGrabHandles**](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles)和[**ShowHatching**](/official/Reference/VBRUN/AmbientProperties/ShowHatching)告诉控件容器是否希望它在被编辑时绘制常规的选择装饰。

``vb
Sub AdaptToHost(ByVal Host As AmbientProperties)
    If Host.UserMode Then
        ' 在宿主应用程序中运行——正常渲染。
    Else
        ' 嵌入在设计器中——改为显示编辑时装饰。
    End If
End Sub
``

## 容器的视觉默认值

容器建议默认配色方案和字体，使嵌入控件与周围环境协调。[**BackColor**](/official/Reference/VBRUN/AmbientProperties/BackColor)和[**ForeColor**](/official/Reference/VBRUN/AmbientProperties/ForeColor)以**OLE_COLOR**值提供建议的背景色和前景色，[**Font**](/official/Reference/VBRUN/AmbientProperties/Font)返回建议的**stdole.IFontDisp**，[**Palette**](/official/Reference/VBRUN/AmbientProperties/Palette)以**stdole.IPictureDisp**返回提示调色板。[**TextAlign**](/official/Reference/VBRUN/AmbientProperties/TextAlign)报告容器首选的文本对齐方式，[**RightToLeft**](/official/Reference/VBRUN/AmbientProperties/RightToLeft)在容器为从右到左语言布局时为**True**。

## 布局和其他UI提示

[**ScaleUnits**](/official/Reference/VBRUN/AmbientProperties/ScaleUnits)命名容器用于自身尺寸的度量单位——例如"Twip"或"Pixel"。[**SupportsMnemonics**](/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics)在容器将键盘助记符——&后的带下划线字母——分派给控件时为**True**。[**DisplayAsDefault**](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault)在容器将此控件视为其默认控件时为**True**，控件可以用更粗的边框绘制自身。[**MessageReflect**](/official/Reference/VBRUN/AmbientProperties/MessageReflect)指示容器是否将发送给控件的窗口消息反射回控件自身的消息处理器。

## 区域设置和标识

[**LocaleID**](/official/Reference/VBRUN/AmbientProperties/LocaleID)返回容器的区域设置ID，使控件可以与其宿主一致地格式化文本和数字。[**DisplayName**](/official/Reference/VBRUN/AmbientProperties/DisplayName)返回容器分配给控件的名称——用于错误消息或属性浏览器的实用字符串。

## 成员

- [BackColor](/official/Reference/VBRUN/AmbientProperties/BackColor) -- 返回容器建议的背景色
- [DisplayAsDefault](/official/Reference/VBRUN/AmbientProperties/DisplayAsDefault) -- 返回容器是否将此控件视为默认控件
- [DisplayName](/official/Reference/VBRUN/AmbientProperties/DisplayName) -- 返回容器分配给控件的名称
- [Font](/official/Reference/VBRUN/AmbientProperties/Font) -- 返回容器建议的字体
- [ForeColor](/official/Reference/VBRUN/AmbientProperties/ForeColor) -- 返回容器建议的前景色
- [LocaleID](/official/Reference/VBRUN/AmbientProperties/LocaleID) -- 返回容器的区域设置ID
- [MessageReflect](/official/Reference/VBRUN/AmbientProperties/MessageReflect) -- 返回容器是否将窗口消息反射回控件
- [Palette](/official/Reference/VBRUN/AmbientProperties/Palette) -- 返回容器建议的调色板
- [RightToLeft](/official/Reference/VBRUN/AmbientProperties/RightToLeft) -- 返回容器是否为从右到左布局
- [ScaleUnits](/official/Reference/VBRUN/AmbientProperties/ScaleUnits) -- 返回容器使用的度量单位
- [ShowGrabHandles](/official/Reference/VBRUN/AmbientProperties/ShowGrabHandles) -- 返回容器是否要求控件绘制选择抓取手柄
- [ShowHatching](/official/Reference/VBRUN/AmbientProperties/ShowHatching) -- 返回容器是否要求控件绘制选择阴影图案
- [SupportsMnemonics](/official/Reference/VBRUN/AmbientProperties/SupportsMnemonics) -- 返回容器是否将键盘助记符分派给控件
- [TextAlign](/official/Reference/VBRUN/AmbientProperties/TextAlign) -- 返回容器首选的文本对齐方式
- [UIDead](/official/Reference/VBRUN/AmbientProperties/UIDead) -- 返回用户界面是否无响应（例如在调试器中暂停）
- [UserMode](/official/Reference/VBRUN/AmbientProperties/UserMode) -- 运行时返回**True**，在设计器中宿主时返回**False**