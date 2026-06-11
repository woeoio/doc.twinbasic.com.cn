---
title: 通用控件替代包【官方文档】
description: 通用控件替代包【官方文档】 - VBCCR 开发手册，基于源码的完整 API 参考
---
# 通用控件替代包【官方文档】

本页文档翻译自官方作者写的文档，使用ai把原始的word文档转为md，然后ai翻译为中文。

翻译：（邓伟）

## 工具说明

注意：本文件适用于 StdEXE 工具 3.3 版。工具的更新日志见本文档末尾的表格。3.3 版增加了对 VBCCRxx.OCX（最高至 1.7 版）和 VBFLXGRDxx.OCX（最新为 1.6 版）的支持。

自 2012 年 11 月以来，VBForums 用户 Krool 一直在开发一套用于替换 Windows 通用控件的控件包。虽然很多人讨论过替换这些控件，但直到现在都没有人真正成功实现。Krool 主要凭借个人力量，在论坛中不断调试和收集反馈。2017 年中，Krool 又着手开发 MSFlexGrid 控件的替代品，虽然与其他替代控件类似，但他选择在论坛的独立主题中进行开发。

本包希望为您提供一些设置和使用这些控件的技巧，并指导您减少或消除对除自身代码以外的任何文件的依赖。

Krool 的控件会像下图一样出现在 VB6 的工具箱中。它们的使用方式与 VB6 内置控件完全一致，只需拖放到窗体或其他控件上即可。下方展示了可添加的控件。

<!-- ![](data:image/png;base64...) -->

这些新控件能为您和您的程序带来什么？

* 支持 Unicode。网上虽然能找到一些支持 Unicode 的控件，但 Krool 的两个包可以让您一次性获得 34 个 Windows 通用控件的 Unicode 支持。
* 功能增强，超越了 VB6 和 VBA 程序员多年来使用的常规控件。
* 支持主题（视觉样式），让您的程序拥有现代化外观，不再像 Windows 95 时代的风格。相关配置在本包中有简化说明。
* 控件可以嵌入到您的代码中，最终生成的 EXE 文件无任何依赖，仅需一个可执行文件，无需注册或安装（例如可直接从 U 盘运行）。也可以使用传统的 .OCX 控件文件，并通过“并排”方式让 .OCX 文件无需在用户电脑上注册，只需与程序放在同一文件夹即可。这两种方式都能让您的程序真正实现便携分发。
* Krool 的代码日益稳定，作者和用户社区也会持续提供问题解答和新功能建议。
* 本包包含了一份用户指南（即本文档），介绍控件包的整体用法，而非每个控件的详细用法。
* 附带了一个名为 OCX2StdEXE 的工具，帮助您及时获取最新控件，并支持在开发阶段使用 OCX 版本，最终编译时自动切换为 StdEXE 版本，实现无依赖的可执行文件。
  + 生成的 EXE 文件完全自包含，无任何外部依赖。无需在用户电脑上安装，也无需随程序分发和注册 .OCX 控件文件。
  + 在 IDE 中使用 Krool 的 StdEXE 控件（即非传统 .OCX 控件文件）并非完全安全，尽管 Krool 已尽力减少 IDE 崩溃风险。开发时建议使用 .OCX 版本，既安全又高效，最终编译时再用本工具切换为 StdEXE 版本，将所有控件嵌入程序，无需任何依赖。
  + 在 IDE 中使用 StdEXE 控件不仅有稳定性风险，还会导致每次编译都要重新编译控件代码（以我电脑为例，使用 .OCX 版本编译典型程序只需 3 秒，而 StdEXE 版本需 25 秒）。开发阶段频繁编译会非常耗时。借助 OCX2StdEXE 工具，您可以在开发时用 .OCX 版本（速度快、稳定），最终编译时用 StdEXE 版本，兼得体积小和无依赖的优点。

## 用户指南

Krool有一个包含大量功能的程序包,但程序员需要理解很多内容才能充分利用这些包。涉及的内容包括:

* 安装
* 两种不同的方法:已编译的.OCX控件和嵌入程序中每次编译的控件。如何选择使用哪个版本以及为什么?您能否或应该同时使用两者?
* 设置
* 如何设置频繁更新,以最小化错误修复和功能添加带来的频繁更新的麻烦。
* 必需的类型库。
* 您还需要什么来使用这些控件包?
* 什么是视觉主题,我应该使用它们吗?如何使用?
* "并排"是什么意思?我应该使用它吗,如何使用它?
* 清单文件是什么,我应该使用它们吗,应该如何使用它们?

## 简介

VB6控件有两个版本。最简单的是控件的源代码在您的程序中,当您的代码编译时,控件的代码与之一起编译。控件的已编译代码成为您程序的一部分。您的程序是独立的,除了Windows中包含的文件外,不依赖于任何外部文件来运行,也不需要将任何文件复制到用户的PC上或在用户的PC上注册。这种方法的缺点是,当您在开发程序时,每次编译代码时都必须编译控件的代码。此外,大多数编写控件的公司不希望放弃他们的代码,所以他们不会分发每个控件的源代码。因此,这种制作控件的方法并不常见。

另一种方式是将一个或多个控件编译到扩展名为OCX的文件中(代表OLE控件扩展或ActiveX控件)。使用OCX文件的程序员永远不会看到源代码,而且代码不需要一遍又一遍地编译。这种类型的控件包的一个缺点是,控件不是程序的一部分,必须发送给每个最终用户,而且由于超出本文档范围的原因,OCX文件必须在每个用户的计算机上注册(我们稍后会讲到并排)。

Krool在2012年底发布了通用控件替代品的第一个版本。这些是源代码的未编译版本,您会将其包含在代码中。他称这个版本为StdEXE,这可能意味着这些控件的标准版本被编译到您的EXE文件中。大约5年后(2017年1月),他开始提供相同的控件,但是采用预编译的OCX版本。所以现在我们程序员可以两种形式使用相同的控件。

没有关于如何使用每个控件的用户指南,但由于每个控件都是其他通用控件的增强替代品,可以说这种手把手的指导对于大多数非常资深的VB6程序员来说并不需要。然而,这些控件集的其他几个方面如果没有一些支持,会使它们比必要的更难完全使用。希望本文档能解决其中的一些问题。

在Krool开发了他的通用控件包之后,他决定添加另一个在他的包中遗漏的控件,即MSFlexGrid控件的替代品。他决定,尽管它与第一个包有很多共同点,但它是一个单独的包,可以与原始包一起使用,但可能会令人困惑。

当使用任一组控件的StdEXE版本时,您需要在IDE中使用一个类型库,"OLEGuids和接口定义"。此外,当使用FlexGrid控件的StdEXE版本时,还需要另一个类型库。OCX版本不需要类型库,因为它们实际上包含在OCX文件中。

Krool控件的一个主要优势是它们设计时就考虑到了使用"视觉样式"的能力,这样您的程序就不会看起来像来自Windows 95。但是,为了使用这些样式,您需要知道如何打开这个功能,对我们许多人来说这并不直观。不过,一旦打开,它确实令人印象深刻。

如果您使用控件的OCX版本,您必须将OCX文件与您的程序一起分发给用户。在VB6出现之前,Windows的设计是这样的:这些预编译的控件、动态链接库、设备驱动程序等都会在每个用户的系统上注册,每个版本(据说是最新的)只会在每个用户的系统上存在一个,这样一旦安装和注册,许多程序就可以使用相同的注册代码。这样设计是为了节省硬盘空间、减少内存使用等,但它造成的问题比解决的问题还多。到VB6出来的时候,一个新的系统已经设计出来并正在实施,它使程序能够使用集中注册的文件,或者让程序拥有自己的支持文件,这些文件不会复制到中央存储库(Windows系统文件夹)并注册,而是与程序"并排"放在一起。如果您使用StdEXE版本的控件,则不需要这个(至少对于这些控件来说),因为所有代码都编译到您的代码中,但如果您使用OCX版本,这个并排解决方案可能是可取的,因为它使您能够分发不需要安装且没有必须安装和注册的组件的程序。

如果您使用StdEXE版本的控件,没有"版本"之说,当Krool发布更新时,您只需将新文件复制到旧文件上即可继续。但是,OCX版本确实有版本(就像所有预编译代码一样,请参见上面的长段落),修改每个程序以使用较新版本并不是一件小事。我的工具可以为您处理这个问题。

由于Krool同时提供了控件的OCX和StdEXE版本,因此可以通过使您能够在开发过程中使用OCX版本(更易于使用且编译时间更短)来改善您的编程体验,但随后使用StdEXE版本进行最终编译,以将所有控件代码包含在程序中,这样就不需要将OCX文件包含在程序中,您也不必处理并排的复杂性。我的工具也可以为您处理这个问题。

## 概述

每组控件都有两个版本;一个是具有OCX扩展名的单个文件,其中包含控件的预编译版本。这需要在您(程序员)的计算机上注册。它可以在VBForums上[这里](https://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))找到。

您在程序中引用它,然后就可以访问所有控件。从程序员的角度来看这很简单,但是当您分发完成的EXE或DLL文件时,您必须包含OCX文件。此外,此文件需要是"并排"解决方案的一部分,或者需要复制到用户的PC上并注册。

另一种方法Krool称之为StdEXE版本。在这个版本中,所有代码都在一个大型文件组中(当前在38个文件夹中有162个),这些都是未编译的,必须作为模块添加到您的程序中。此包的最新版本可以在VBForums上[这里](https://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))找到。

每次编译程序时,所有这些控件也会被编译。即使知道哪些文件要包含在程序中以用于哪些控件也是一个大麻烦,子程序、函数和变量的某些名称可能与您使用的名称冲突,并且每次编译所有这些控件代码都需要很长时间。我的电脑相当快,但仅仅编译Krool提供的ComCtlsDemo程序就需要超过25秒。在VB6中编码时我经常编译,部分原因是只是为了检查语法和逻辑错误,而25+秒的编译时间是非常令人恼火的,特别是当我知道我可以在OCX版本中在3秒内编译相同的代码时。我喜欢最终可执行文件中没有外部依赖项的事实,但我讨厌编译时间。要是有办法可以在开发过程中使用OCX版本及其快速的编译时间,但在最终编译时使用内部控件,这样就不需要有单独的OCX文件与程序一起分发就好了。我的工具就是这样做的。

此外,这些控件有许多更新。未编译文件(StdEXE版本)实际上没有版本号,只要您将最新文件复制到相同位置的早期文件上,就不会有任何问题。然而,OCX版本并非如此。我将我的放在C:\Windows\SysWOW64中,只要我们有相同的版本,我们就可以将新的OCX文件复制到旧的文件上。但随着时间的推移,已经添加了新功能,所以我们有了1.1、1.2、1.3、1.4、1.5、1.6和现在的1.7版本。如果您使用1.6版本的控件开发了一个程序,那么使用1.7版本的控件时会遇到问题,因为需要对使用Krool控件的每个项目文件、每个控件文件以及清单文件(如果您使用的话)进行更改。我的工具可以处理这些问题,允许您从任何OCX版本切换到安装在PC上的CommonControls的任何其他OCX版本(包括独立的FlexGrid控件)。

## 包含的控件

以下是Krool包中的控件列表。除了VBFlexGrid(在VBFlexGrid Control包中)外,所有控件都在Common Controls替代包中。

|  |  |  |  |
| --- | --- | --- | --- |
| Animation(动画) | FrameW(框架) | MCIWnd(多媒体) | SysInfo(系统信息) |
| CheckBoxW(复选框) | HotKey(热键) | MonthView(月历) | TabStrip(标签条) |
| ComboBoxW(组合框) | ImageCombo(图像组合框) | OptionButtonW(选项按钮) | TextBoxW(文本框) |
| CommandButtonW(命令按钮) | ImageList(图像列表) | Pager(分页器) | ToolBar(工具栏) |
| CommandLink(命令链接) | IPAddress(IP地址) | ProgressBar(进度条) | TreeView(树形视图) |
| CommonDialog(通用对话框) | LabelW(标签) | RichTextBox(富文本框) | UpDown(上下调节器) |
| CoolBar(冷工具栏) | LinkLabel(链接标签) | Slider(滑块) | VirtualBoxCombo(虚拟组合框) |
| DTPicker(日期时间选择器) | ListBoxW(列表框) | SpinBox(数值调节器) | VListBox(虚拟列表框) |
| FontCombo(字体组合框) | ListView(列表视图) | StatusBar(状态栏) | VBFlexGrid(灵活网格) |

如果您有任何编程经验,您无疑已经看到并使用过这些控件中的许多。一旦安装好Krool的系统,使用起来相当容易,因为控件的行为与现有控件非常相似。我们主要讨论如何安装和设置每个系统以供使用。

## 术语

Krool的控件很棒,但在他的包内部和周围使用的许多术语可能会令人非常困惑(至少对我来说是这样)。以下是我对一些术语的解释。

**ActiveX** - 维基百科[文章](https://en.wikipedia.org/wiki/ActiveX)。这是Microsoft在1996年使用早期OLE和COM技术制定的软件框架。对于本文档,我们将把ActiveX视为我们控件的基础。

**Control(控件)** - 在工具箱中由图标表示的组件,可以放置在窗体上。大多数是可见的,但有些(如计时器)是不可见的。VB6中最简单的控件包含在已安装的VB6程序包中。其他的,如Krool的控件和来自Microsoft和其他供应商的许多控件,必须添加。有关制作自己的控件的更多信息,请参见[这个](https://pages.cpsc.ucalgary.ca/~saul/vb_examples/index.html)网页,特别是教程#10。

**OCX** - 通常,我们都使用已预编译到扩展名为.OCX的文件中的控件(代表OLE控件扩展或ActiveX控件)。这些文件必须在开发人员的PC上注册,并且必须分发给开发人员程序的每个用户并在其PC上注册。一个.OCX文件可以包含多个控件。程序员(您)需要在其系统上安装并注册OCX,但用户也需要在其系统上拥有OCX文件,通常是注册的,但有时是与正在运行的已编译程序"并排"使用该OCX控件。

**StdEXE** - Krool使用这个术语来指定在程序中包含ActiveX控件的另一种方法。有许多源代码文件,包括标准模块和类模块、属性页文件等,它们被编译成OCX控件。另外,所有这些都可以由作者分发并作为源代码放入我们每个程序中。通常,控件包的作者出于各种原因不想分发其控件的源代码,但Krool选择对他的包这样做。这样做的好处是您的程序中包含了所有编译在其中的控件代码,因此不需要分发或注册文件就可以使它工作。所有内容都包含在您编译的代码中。从程序员的角度来看,这样做的一个缺点是,在开发程序并一遍又一遍地编译时,所有控件代码都必须重新编译。

**VBCCRxx** - VBCCR代表Visual Basic Common Controls Replacement(Visual Basic通用控件替代品),而"xx"指的是OCX版本,目前可以是1.1(xx=11)、1.2、1.3、1.4、1.5或1.6(xx=16)。随着以编译形式分发的代码随时间的推移被修改和扩展,作者(Krool)必须发布不同的版本,每个版本都必须在用户的PC(和程序员的PC)上存在。例如,假设您编写了一个使用VBCCR16.ocx的程序,并将其发送给一个安装了VBCCR13.ocx但没有VBCCR16.ocx的同事。它将无法运行,因为它在启动时会寻找其他ocx文件。这就是OCX文件的缺点。如果您使用StdEXE版本,代码会直接编译到您的代码中,您不必分发、安装或注册任何外部文件即可使用控件。OCX版本相对于StdExE版本的主要优点是a)程序的编译时间几乎快10倍,因为每次不需要重新编译窗体代码,b)构成每个控件的各种.BAS、.CTL、.PAG文件不会使程序员的文件列表变得混乱。

**ComCtlsDemo** - 这是一个展示Krool每个控件的示例程序。这个文件会定期更新,总是可以在VBForums上[这个](http://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))主题的第一个帖子底部找到。这个包使用StdEXE概念,将所有控件的代码编译到可执行文件中。

这不仅仅是一个示例文件。这个文件中的源代码就是他的包的全部内容,当您制作自己的使用他的控件的程序时,您将使用它(或其中的大部分)。

它不像OCX版本那样需要版本号,因为没有文件需要在开发人员或用户的PC上注册(它是每次编译程序时都要嵌入的源代码)。我下载了大多数更新,为了避免混淆,我将每个.zip文件重命名为我硬盘上带有文件日期的文件名。由于VBForum的大小限制,他发布的文件带有.docx扩展名,但它实际上是一个.zip文件,所以当您下载它时,您要执行另存为并删除文件名中的.docx。在撰写本文时,Krool发布的最新版本是2018年11月11日(看看帖子底部下载链接下方的小斜体行),要下载的文件名为ComCtlsDemo.zip.docx,所以当我下载该文件时,我在我的硬盘上将其重命名为ComCtlsDemo 2018-11-11.zip。

**VBCCR OCX版本** - 在只有StdEXE版本大约4年之后,Krool发布了一个名为VBCCRxx.OCX的预编译版本,其中xx是版本号。最早的版本是1.1,所以第一个文件是VBCCR11.ocx。截至本文撰写时,最新版本是1.6.13,所以文件是VBCCR16.ocx。最新版本总是在VBForums上[这个](http://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-%28Replacement-of-the-MS-common-controls%29&p=5129155#post5129155)主题的第1个帖子底部。在线.zip文件包含.ocx文件以及一些资源文件(下面讨论),这些文件与程序员的EXE文件的"并排"执行以及使您的程序主题化(这样您在屏幕上显示的内容看起来不像来自Windows 95)有关。我保存.zip文件时将其重命名以包含版本号。例如,最新的一个叫做'VBCCR16.OCX.rar.docx'被复制到我的硬盘上,名为'VBCCR.OCX v1.6.13.rar'(请参见上面关于为什么文件带有.docx扩展名的说明)。除了包含.ocx文件外,.zip文件还包含所有代码,以防您想要制作自己的.ocx文件(不推荐)或只是从Krool所做的工作中学习。

将.ocx文件复制到Windows系统文件夹中。如果运行32位Windows,这通常是C:\Windows\System32,但如果运行64位Windows,那么所有64位DLL、类型库和控件都进入system32文件夹(?),因此Microsoft将所有32位文件放入名为'SysWOW64'(**W**indows 32-bit **O**n **W**indows **64**-bit)的文件夹中。(如果您将Windows放在C:\Windows以外的位置,那么请使用该路径)。由于您要复制到系统文件夹,因此需要提升权限。如果xx相同(在我的示例中xx是16,所以我可以覆盖1.6.12或1.6.11版本),那么可以覆盖以前的版本,如果xx是新的(如1.6.0版本),那么没有覆盖,但您应该使用regsvr32向系统注册此控件。

在VB6 IDE中使用Ctrl-T(或Project|Components)并选择适当的控件,将此OCX文件加载到您的项目中。对于1.6版本,您需要通过单击旁边的复选标记来选择'VB Common Controls Replacement 1.6 Library'。

通过引用此OCX,所有控件都将显示在工具箱中,供您像使用可以放在窗体上的任何其他控件一样使用。因为控件的.OCX版本是预编译的,所以控件不会像使用StdEXE版本那样在每次编译程序时编译,在StdEXE版本中,控件会嵌入到您的代码中。另一方面,缺点是.OCX文件必须随EXE或DLL文件一起分发,因为它没有编译到其中。

**Type Library(类型库)** - 要在StdEXE版本(不是OCX版本)中使用Krool的VBCCR和VBFlexGrid控件,您需要使用他提供的名为'OLEGuids.tlb'的类型库,该库在他随每个控件包分发的'OLDGuids'文件夹中。我将oleguids.tlb复制到我的系统目录中,然后可以使用Project|References通过单击'OLE Guid and interface definitions'旁边的复选框来指定它。他目前分发的文件带有2017年6月9日的日期戳,所以它已经有一段时间没有改变了。此文件仅在使用StdEXE版本进行代码开发时才需要。它不需要与最终编译的程序一起分发。(注意-如果您在VBA中使用Krool的控件,则***不***需要此文件,因为您必须使用已经将此类型库编译到其中的OCX版本。)

**Visual Styles(视觉样式)(主题)** - 这从XP就开始了,但直到Vista及以后才真正得到广泛使用。使用视觉样式,您可以获得更现代的窗体外观,但由于这些样式是在VB6推出之后才流行起来的,所以在VB6程序中使用它们并没有简单的方法。Krool的代码设置为使用这些视觉样式,但如果没有几个有趣的步骤,您将无法获得它们。无论如何,他的代码与原始控件相比提供了Unicode和一些增强功能,但要获得视觉样式,您必须在清单中指定这一点,然后将清单嵌入到程序引用的资源文件中。这听起来比实际操作要难,我稍后会介绍如何做到这一点。(注意- VBA不支持样式)

**Side-by-Side Assemblies(并排程序集)** - 如果您的程序需要DLL或OCX文件才能运行,它可以使用已经存在于用户系统上、已注册且版本正确的文件。从VB6发布时起,就有一个运动要摆脱这个系统,以避免许多人称之为"DLL地狱"的情况(谷歌一下这个词会很有趣)。长话短说,Windows允许程序在不必注册支持文件的情况下运行,只要支持文件位于EXE或DLL文件旁边(或其子文件夹中)即可。许多企业用户通过阻止注册这些支持文件来设置他们的PC不允许安装任何新程序,这是一种解决方法。为了指定支持文件是并排的,您必须在清单中指定这一点(见下文)。以前,将清单放在可执行文件的同一文件夹中或嵌入到文件中是可以的,但后来的Windows版本强烈建议将清单文件包含在资源文件中。这一切听起来很疯狂,但Krool为所有的复杂性提供了一些支持,而我的工具(希望)可以消除其余部分的痛苦。

**Manifest File(清单文件)** - 清单文件基于XML,可以为Windows指定许多要执行的事情来控制程序。一个例子是,您可以在清单中指定程序需要以提升的权限运行。但是,对于我们的情况,清单文件有两个用途:1)我们可以告诉Windows我们想要使用Microsoft的CommonControls dll文件的6.0版本,这是使用Krool代码给我们视觉样式的版本,2)我们可以给出信息,使OCX文件(如果您使用它而不是StdEXE版本)与您将制作的可执行文件并排。这本身就够糟糕的,但Windows现在希望这个清单文件包含在程序的资源文件中。

**Resource File(资源文件)** - 您可以将许多内容放入VB6资源文件(扩展名.RES)中,包括图标、图形图像、国际化字符串等。您还可以放入清单文件,而且您会这样做以获得视觉样式和/或并排功能。Krool在OCX版本中提供了两个资源文件,一个仅用于并排,一个用于并排加视觉样式。在StdEXE包中,Resources文件夹中有一个提供视觉样式的资源文件(如果不使用.OCX版本,则不需要并排)。一个名叫LaVolpe的用户在VBForums上有一个工具([这里](http://www.vbforums.com/showthread.php?845909-VB6-Manifest-Creator-II)),使您能够从资源文件中提取清单信息,编辑它,然后把它放回去。希望您不必使用该工具(我在我的工具中使用了LaVolpe代码的一部分,稍后会讨论)。在这里定义它的要点是确保程序员知道并排和视觉样式需要指定资源文件,而资源文件需要在内部指定这些。

**Windows System Folder(Windows系统文件夹)** - Windows系统文件夹包含许多系统相关文件,包括DLL、类型库、注册控件等。对于32位VB6和32位VBA,此文件夹可以是两个中的一个。如果您使用32位操作系统,此文件夹将是'C:\Windows\System32'。不幸的是,如果您使用64位Windows操作系统,所有64位DLL、类型库和控件都进入system32文件夹(?),因此Microsoft将所有32位文件放入名为'SysWOW64'(**W**indows 32-bit **O**n **W**indows **64**-bit)的文件夹中。所有32位文件都进入'C:\Windows\SysWOW64'。

如果您在64位VBA中使用所有这些,您只会处理64位Windows文件夹,该文件夹始终是'C:\Windows\System32'。

**VBFlexGrid** - Krool的原始控件包括35个控件,但不包括MSFlexGrid控件的替代品(Microsoft提供了一个MSFLXGRD.OCX文件,Krool的包对其进行了升级和替换)。他采取的方法与他对其他控件所做的非常相似。有独立版本,就像VBCCR ComCtlsDemo包一样,这个叫做VBFlexGridDemo,可以在[这里](http://www.vbforums.com/showthread.php?848839-VBFlexGrid-Control-(Replacement-of-the-MSFlexGrid-control))找到,以及它对应的OCX版本,VBFLXGRD12.OCX,可以在[这里](http://www.vbforums.com/showthread.php?855931-VB6-ActiveX-VBFlexGrid-%28Replacement-of-the-MSFlexGrid-control%29&p=5236525#post5236525)找到。这两个版本都独立于VBCCRxx控件。我的工具将这些和VBCCR控件视为同一个包的一部分来处理。

## 程序员用户指南

下面是每个版本的使用说明。之后是我推荐的使用方法的讨论,这是每个选项的简单混合,它(希望)利用了每个选项的最佳功能,然后还有一些其他功能。

VBCCR - 这组33个控件(除了最后一个之外的表中的所有控件)存在两个版本。到目前为止,程序员必须决定是使用StdEXE还是OCX版本;没有办法同时使用这两个版本。在介绍两个版本的用户指南之后,我将向您展示另一种希望更好的使用这些控件的方法,这样您就可以利用OCX版本更简单和更快的开发优势,同时用StdEXE版本生产最终的可执行文件,使控件成为您控制代码的一部分。

### VBCCR - StdEXE版本

这是将所有控件代码编译到程序中的版本。您将在程序中包含适当的源代码,当您编译时,控件成为程序的一部分。

获取最新版本 - 您可能会认为有一个可下载的包,其中包含所有控件、用户指南等,但事实并非如此。Krool在VBForums网站上有一个演示项目,从中您可以访问他的所有控件(有趣的方法,但它确实有效)。Krool的演示项目和所有控件从2012年11月10日起就在[这里](http://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))。该主题中有超过78页的评论和讨论。大多数涉及各种错误、用户问题和功能添加请求,因为Krool在过去9年中一直在处理这个包。

重要的是,在第一个帖子的底部有一个名为'**ComCtlsDemo.zip.docx**'的可下载文件,这始终是要下载的最新版本。它具有.DOCX扩展名,因为VBForums对.ZIP文件的大小限制比.DOCX文件低,而此文件超过了.ZIP文件的大小限制。它实际上是一个.ZIP文件,所以当您下载它时(或之后),通过去掉名称的.DOCX部分来重命名它,留下文件ComCtlsDemo.zip。

这个文件在网站上的名称始终相同。我建议您查看第一个帖子的最后一行并注意日期,然后将日期放在文件名中。例如,我正在查看第一个帖子,在底部它说Krool在2018年11月11日最后编辑,所以当我右键单击链接时,我告诉它将其保存到一组我保存所有下载存档文件的文件夹中,我用名称'**ComCtlsDemo 2018-11-11.zip**'保存它,这样我就可以将其与之前下载的副本区分开。

现在有一个重要的观察。ComCtlsDemo包含所有控件文件,这些文件不应该被更改,所以您可以将这些文件放在所有程序都可以访问的中心位置(一个库)。这个位置不需要改变,您总是可以删除现有文件并将最新版本的文件放在相同的文件夹中。此外,您的所有程序都可以在它们所在的位置访问所有这些文件,因此您不需要将所有这些文件复制到您的个人项目文件夹中。这大大简化了使用和更新较新版本的过程。

解压时将下载的文件放在哪里 - 我有一个库文件夹,我将各种可在程序中使用的文件放在其中。我不会在这里放置会更改的文件。这包含我可以在所有程序中使用的文件,而不需要修改。在我的Library文件夹中,我有一个用于Controls & Forms的子文件夹。在其中,我有一个名为VBCCR的文件夹,用于Krool的控件,在其中我创建了一个名为'Current'的子文件夹。每当我从Krool下载最新更新时,我首先删除Current中的所有文件和文件夹,然后将新文件解压到Current中。这很重要,因为已经使用这些控件的程序将继续在相同的位置找到这些控件,甚至不知道它们是新版本。幸运的是,Krool在调试和添加控件功能时保持他的文件和文件夹名称相同。

所以现在我们在PC上的一个位置有了文件,我们可以将它们用于所有程序,我们就可以开始使用它们了。对吗?嗯,差不多。为了使用他的控件,还需要采取一些额外的步骤。请按照以下步骤操作,以创建或修改任何程序。

类型库 - 您需要能够访问一个名为'OLEGuids.tlb'的类型库,该库包含在Krool的示例程序中。这个文件在Current的一个名为'OLEGuids'的子文件夹中。在编辑和编译期间您需要这个文件,但您编译的程序不需要它,您也不用将它与可执行文件一起分发。我将我的放入Windows系统文件夹中,这样我总是知道它在哪里,我在Windows 10中用regsvr32注册它。幸运的是,这个类型库文件不经常更改,所以您不必经常执行此步骤。OLEGuids.tlb的日期是2017年6月9日,所以18个月来它没有改变。

在VB6中,您将使用Project | References命令来选择这个类型库。如果您已经使用regsvr32注册了这个文件,那么您可以在Available References列表中找到名为'OLE Guid and interface definitions'的文件,但如果您还没有注册它,您可以单击'Browse'并找到它。

视觉样式 - 为了在程序中使用视觉样式(主题),使它们看起来不像旧的Windows程序,您必须指定使用Windows Common Controls库版本6.0,因为它支持视觉样式。实现这一点的方法是在清单文件中包含这个规范。过去,您制作一个包含可执行文件名称且扩展名为'.Manifest'的文件,当分发程序时,您将此文件包含在与可执行文件相同的文件夹中。后来的Windows版本不鼓励这样做,而是建议将清单作为嵌入资源文件的一部分包含在EXE文件中。VB6可以使用资源文件来保存许多不同的内容,如国际化字符串、图标等,除了清单之外。

所以我们必须将视觉样式规范放入清单中,然后将清单文件放入VB6资源文件中。在Krool的包中,查看Current\Resources中名为'Resources.res'的文件,这是Krool制作的包含启用视觉样式(或主题)指令的资源文件。如果您没有将资源文件用于其他任何内容,您可以简单地将这个Resources.res文件复制到项目文件(.VBP)所在的位置。稍后我会向您展示如何将其嵌入到您的项目中。但现在让我们考虑一下如果您已经有一个资源文件,我们想要将我们的清单信息添加到该资源文件中(无论它是否已经包含清单信息)该怎么办。

请注意,VB6 IDE并不是为了使用视觉样式而设计的。[这里](http://www.vbforums.com/showthread.php?693111-VB6-IDE-solving-UAC-and-Visual-Style-issues&highlight=)是Krool在VBForums上的一个帖子,展示了如何获取带有嵌入清单的资源文件,该文件将以提升的UAC运行VB6,同时合并视觉样式。您不需要这个来使用Krool的控件,但如果您想看到"更漂亮的"窗体,那么这对您可能有价值。请注意,它涉及使用另一个名为ResourceHacker的工具将资源文件放入VB6.EXE文件中。

一个更简单的方法是从[这里](http://www.vbaccelerator.com/home/VB/Code/Libraries/XP_Visual_Styles/Using_XP_Visual_Styles_in_VB/article.asp)获取vb6.exe.manifest文件,并将其放入与vb6相同的文件夹中(通常是C:\Program Files (x86)\Microsoft Visual Studio\VB98\)。

关于在程序中使用视觉样式,我觉得很奇怪的是使用视觉样式的说明是清单文件的一部分,我们必须将其嵌入到资源文件中,然后将其嵌入到我们的可执行文件中。Krool在Current下的Resources文件夹中提供了一个带有视觉样式的资源文件,您可以将其复制到您的项目中并嵌入。

高级资源/清单/视觉样式注意事项 - 您可能希望在资源文件中添加视觉样式设置之外的其他内容。处理这些文件并不是一件小事。清单部分是XML,它包含在非XML资源文件中。我在VBForums上发现了另一个由名为LaVolpe的用户提供的工具([这里](http://www.vbforums.com/showthread.php?845909-VB6-Manifest-Creator-II)),让我们可以从头开始或从清单文件中创建或编辑清单,或从资源文件中提取,这样我们就可以编辑它,然后我们可以指定将其放入资源文件中。下面是LaVolpe的工具运行时加载Resources.res的屏幕截图。我突出显示了指定使用Windows Common Controls版本6.0.0.0的部分。这就是指定视觉样式的内容。通常对于新程序,您应该能够只将Resources.res复制到您的项目文件夹并使用它,而无需编辑它。顺便说一句,您不*需要*这个文件,但如果没有它,您的程序中将不会获得任何现代外观的控件。

<!-- ![](data:image/png;base64...) -->

所以现在您有了一个指定使用视觉样式的资源文件。我们如何将它放入我们的项目中?在VB6中,转到AddIns | AddIn Manager,您将看到类似以下内容。

<!-- ![](data:image/png;base64...) -->

选择'VB6 Resource Editor',并确保'Loaded/Unloaded'和'Load On Startup'都被选中。然后,回到您的主项目,转到Project | Add New Resource File,然后从弹出的对话框中选择您的.res文件。现在您的资源文件应该在导航窗格中的Related Documents下显示出来。

Side-by-Side(并排) - 使用StdEXE版本的一个原因是,除非您使用其他专门的控件或其他文件,否则您的可执行文件没有依赖项,因此无需担心并排。我将在OCX版本的用户指南中详细讨论它。

要包含在您的项目中的文件 - 每个控件都有一些特定于该控件的文件,需要如下所示插入到您的项目中。

| **控件** | **Current文件夹中的文件** |
| --- | --- |
| Animation(动画) | Builds\Animation\Animation.ctl |
|  | Builds\Animation\PPAnimationGeneral.pag |
| CheckBoxW(复选框) | Builds\CheckBoxW\CheckBoxW.ctl |
| ComboBoxW(组合框) | Builds\ComboBoxW\ComboBoxW.ctl |
| CommandButtonW(命令按钮) | Builds\CommandButtonW\CommandButtonW.ctl |
| CommandLink(命令链接) | Builds\CommandLink\CommandLink.ctl |
|  | Builds\CommandLink\PPCommandLinkGeneral.pag |
| CoolBar(冷工具栏) | Builds\CoolBar\CbrBand.cls |
|  | Builds\CoolBar\CbrBandProperties.cls |
|  | Builds\CoolBar\CbrBands.cls |
|  | Builds\CoolBar\CoolBar.ctl |
|  | Builds\CoolBar\PPCoolBarBands.pag |
|  | Builds\CoolBar\PPCoolBarGeneral.pag |
| DTPicker(日期时间选择器) | Builds\DTPicker\DTPicker.ctl |
|  | Builds\DTPicker\PPDTPickerGeneral.pag |
| FontCombo(字体组合框) | Builds\FontCombo\FontCombo.ctl |
| FrameW(框架) | Builds\FrameW\FrameW.ctl |
| HotKey(热键) | Builds\HotKey\HotKey.ctl |
| ImageCombo(图像组合框) | Builds\ImageCombo\ImageCombo.ctl |
|  | Builds\ImageCombo\ImcComboItem.cls |
|  | Builds\ImageCombo\ImcComboItems.cls |
|  | Builds\ImageCombo\PPImageComboGeneral.pag |
| ImageList(图像列表) | Builds\ImageList\ImageList.ctl |
|  | Builds\ImageList\ImlListImage.cls |
|  | Builds\ImageList\ImlListImages.cls |
|  | Builds\ImageList\PPImageListGeneral.pag |
|  | Builds\ImageList\PPImageListImages.pag |
| IPAddress(IP地址) | Builds\IPAddress\IPAddress.ctl |
| LabelW(标签) | Builds\LabelW\LabelW.ctl |
| LinkLabel(链接标签) | Builds\LinkLabel\LinkLabel.ctl |
|  | Builds\LinkLabel\LlbLink.cls |
|  | Builds\LinkLabel\LlbLinks.cls |
|  | Builds\LinkLabel\PPLinkLabelGeneral.pag |
| ListBoxW(列表框) | Builds\ListBoxW\ListBoxW.ctl |
| ListView(列表视图) | Builds\ListView\ListView.ctl |
|  | Builds\ListView\LvwColumnHeader.cls |
|  | Builds\ListView\LvwColumnHeaders.cls |
|  | Builds\ListView\LvwGroup.cls |
|  | Builds\ListView\LvwGroups.cls |
|  | Builds\ListView\LvwListItem.cls |
|  | Builds\ListView\LvwListItems.cls |
|  | Builds\ListView\LvwListSubItem.cls |
|  | Builds\ListView\LvwListSubItems.cls |
|  | Builds\ListView\LvwVirtualListItem.cls |
|  | Builds\ListView\LvwVirtualListItems.cls |
|  | Builds\ListView\PPListViewGeneral.pag |
|  | Builds\ListView\PPListViewImageLists.pag |
|  | Builds\ListView\PPListViewSorting.pag |
| MCIWnd(多媒体窗口) | Builds\MCIWnd\MCIWnd.ctl |
| MonthView(月历) | Builds\MonthView\MonthView.ctl |
|  | Builds\MonthView\PPMonthViewGeneral.pag |
| OptionButtonW(选项按钮) | Builds\OptionButtonW\OptionButtonW.ctl |
| Pager(分页器) | Builds\Pager\Pager.ctl |
|  | Builds\Pager\PPPagerGeneral.pag |
| ProgressBar(进度条) | Builds\ProgressBar\PPProgressBarGeneral.pag |
|  | Builds\ProgressBar\ProgressBar.ctl |
| RichTextBox(富文本框) | Builds\RichTextBox\PPRichTextBoxGeneral.pag |
|  | Builds\RichTextBox\RichTextBox.ctl |
|  | Builds\RichTextBox\RichTextBoxBase.bas |
| Slider(滑块) | Builds\Slider\PPSliderAppearance.pag |
|  | Builds\Slider\PPSliderGeneral.pag |
|  | Builds\Slider\Slider.ctl |
| SpinBox(数值调节器) | Builds\SpinBox\PPSpinBoxGeneral.pag |
|  | Builds\SpinBox\SpinBox.ctl |
| StatusBar(状态栏) | Builds\StatusBar\PPStatusBarGeneral.pag |
|  | Builds\StatusBar\PPStatusBarPanels.pag |
|  | Builds\StatusBar\SbrPanel.cls |
|  | Builds\StatusBar\SbrPanelProperties.cls |
|  | Builds\StatusBar\SbrPanels.cls |
|  | Builds\StatusBar\StatusBar.ctl |
| SysInfo(系统信息) | Builds\SysInfo\SysInfo.ctl |
| TabStrip(标签条) | Builds\TabStrip\PPTabStripGeneral.pag |
|  | Builds\TabStrip\PPTabStripTabs.pag |
|  | Builds\TabStrip\TabStrip.ctl |
|  | Builds\TabStrip\TbsTab.cls |
|  | Builds\TabStrip\TbsTabs.cls |
| TextBoxW(文本框) | Builds\TextBoxW\PPTextBoxWText.pag |
|  | Builds\TextBoxW\TextBoxW.ctl |
| ToolBar(工具栏) | Builds\ToolBar\PPToolBarButtons.pag |
|  | Builds\ToolBar\PPToolBarGeneral.pag |
|  | Builds\ToolBar\TbrButton.cls |
|  | Builds\ToolBar\TbrButtonMenu.cls |
|  | Builds\ToolBar\TbrButtonMenus.cls |
|  | Builds\ToolBar\TbrButtonProperties.cls |
|  | Builds\ToolBar\TbrButtons.cls |
|  | Builds\ToolBar\ToolBar.ctl |
| TreeView(树形视图) | Builds\TreeView\PPTreeViewGeneral.pag |
|  | Builds\TreeView\TreeView.ctl |
|  | Builds\TreeView\TvwNode.cls |
|  | Builds\TreeView\TvwNodes.cls |
| UpDown(上下调节器) | Builds\UpDown\PPUpDownGeneral.pag |
|  | Builds\UpDown\UpDown.ctl |
| VirtualCombo(虚拟组合框)  (2020年8月15日或之后) | Builds\VirtualCombo.ctl  Builds\VirtualCombo.ctx  Builds\VirtualComboBase.bas |
| VListBox(虚拟列表框)  (2020年8月15日或之后) | Builds\VListBox\VListBox.ctl  Buids\VListBox\VListBox.ctx |

如果您希望任何单个控件在项目中可用,在IDE中按Ctrl-D,然后导航到适当的文件夹并突出显示要导入的文件夹中的所有文件,然后按Enter。

一个挑战是Krool的包包含所有控件,而您不太可能需要所有控件。演示程序利用了所有控件,由此产生的EXE文件大小为4.2 MB,因此如果您在程序中包含所有控件,将增加大约4 MB的文件大小。在这些多千兆字节RAM和硬盘的日子里,这可能不像以前那样重要。

还有一些文件,无论您使用一个控件还是所有控件都必须存在。这些是:

|  |
| --- |
| Builds\ComCtlsBase.bas |
| Builds\VTableHandle.bas |
| Builds\VTableSubclass.cls (仅限2020年1月5日之前) |
| Builds\ISubclass.cls |
| Common\Common.bas |
| Common\VisualStyles.bas |

最后,如果您使用MCIWnd.ctl控件或CoolBar、Imagelist、RichTextBox或StatusBar的属性页,您还必须在项目中包含文件'Builds\CommonDialog.cls'。

您可能会倾向于不包含您不使用的控件的代码。您确实可以在最终可执行文件中节省一些大小,但要知道,如果不包含上述控件的代码,这些控件甚至不会出现在工具箱中供可能使用。如果您确定不会使用给定的控件,可以将其排除。每个控件都独立于其他控件。

Krool的ComCtlsDemo包中还有一个文件,Common\Startup.bas,这实际上是用于演示程序的。您不需要这个文件,但该文件中的一些概念需要成为您程序的一部分。

Sub Main - Krool的控件依赖于一些Microsoft代码,这些代码需要在加载或显示任何窗体之前运行。要使用新控件,您必须将启动对象指定为Sub Main而不是任何Form,并且必须在引用任何控件之前在Sub main中有正确的启动代码。这在General选项卡的Project | Properties中设置。如果您没有名为Main的Sub中的启动例程,则需要在程序中放入一个。

您需要调用Krool的一个例程,为他的程序中内置的回调等提供保护,这样您就不会在IDE中崩溃。此外,您的程序需要一些启动代码才能使用通过使用Microsoft的Common Controls 6.0启用的视觉样式。因此,Sub Main中的前两行应该是:
```vb
Call ComCtlsInitIDEStopProtection ' 在Builds\ComCtlsBase.bas中

' 以上仅在使用2020年8月13日之前的Krool包时需要)

Call InitVisualStyles ' 在Common\VisualStyles.bas中
```
现在您可以放入其余的代码来显示窗体、进行计算等。除非您使用其他.OCX控件文件,否则您的最终可执行文件将包含所有代码,包括控件,因此可执行文件是独立的,除了Microsoft随Windows提供的标准VB6支持文件外,不需要任何其他内容。

您可能会遇到子例程和变量的名称与您使用的名称相同的问题。如果您使用控件的.OCX版本,大多数这些都是隐藏的,不是问题。然而,当您在程序中包含所有各种控件文件以在程序中编译时,您现在有153个新文件,并且可能有一些命名冲突。如果您决定保留您的名称并更改Krool的名称,只需知道每次下载和使用更新时,您都必须编辑他的文件来重命名这些(不仅仅是子例程的名称,还有调用它的每个其他例程)。我不情愿地决定更改我代码中的一些冲突名称,这样我就不必不断更新他的文件。我不喜欢这样,但这是使用这些控件的一个小代价。

注意 - 我不使用上述方法,因为我不喜欢长时间的编译,尽管我确实喜欢完全独立的可执行文件。这就是我编写后面要讨论的工具的部分原因。它允许您使用.OCX版本进行开发(编译速度快得多),然后通过我的工具使用StdEXE版本进行最终编译,这样您就有了独立的可执行文件。

### VBCCR OCX 版本指南

Krool 提供了 VBCCR 控件的预编译 OCX 版本，等价于 StdEXE 包，但更符合传统 ActiveX 控件的使用方式。你可以在 [这里](http://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-%28Replacement-of-the-MS-common-controls%29&p=5129155#post5129155) 下载。与 StdEXE 版本相比，OCX 版本的优点有：1）只需一个 .OCX 文件而不是 153 个单独文件，使用更简单；2）编译速度更快，因为 OCX 已经预编译好；3）大多数程序员都熟悉 OCX 控件的用法。缺点是：1）OCX 文件需要和可执行文件一起分发给用户；2）OCX 文件必须在用户电脑上注册，或者采用更复杂的并排（side-by-side）方案。

获取最新版——从上述链接进入，下载首帖底部的文件。目前控件的 OCX 版本为 1.6，下载文件名通常为“VBCCR16.OCX.rar.docx”。由于 VBForums 限制，文件扩展名为 .docx，实际上是 RAR 压缩包。建议下载时将文件重命名为如“VBCCR16.OCX v1.6.13.rar”，方便管理不同版本。解压后可获得 .OCX 文件和包含源代码的 zip 文件（不建议自行编译 OCX，否则会与 Krool 官方包分离，内容与 StdEXE 版本类似）。

在程序中使用——在新建程序中，按 Ctrl-T 或通过 Project | Components，选择“VB Common Controls Replacement 1.6 Library”（即 vbccr16.ocx 文件）。在 VBA 项目中，可通过“工具 | 其他控件”添加。

最后，你需要设置包含清单（manifest）的资源文件，以启用视觉样式和可选的并排功能（仅 VB6，VBA 不适用）。VBForums 首帖还提供了两个资源文件：“VBCCR16SideBySide.res”和“VBCCR16SideBySideAndVisualStyles.res”，分别用于并排和并排+视觉样式。这些文件无需解压，直接保存使用即可。后文会介绍如何使用这些资源文件。

项目设置——与 StdEXE 版本一样，程序启动不能直接用窗体，必须先用 Sub Main 作为入口，以便在调用第一个窗体前运行必要的初始化代码。最简单的做法是从 StdEXE 包中包含 VisualStyles.bas 模块，然后在 Project | Properties 的 General 选项卡中设置启动对象为 Sub Main，并在 Sub Main 中，在加载、引用或显示任何窗体前加入如下代码：

```vb
InitVisualStyles
```

这样就可以正常使用所有控件，控件会出现在工具箱中，供窗体使用。

注意：StdEXE 版本中 Krool 提供了 IDE 崩溃保护代码，OCX 版本同样需要这些保护，但已编译进 OCX 文件，无需手动调用。

编译代码——只需确保 Sub Main 中有上述初始化过程即可。Krool 声称其代码 IDE 安全，实际使用中也确实如此。

你可以选择使用清单文件来指定两个常用功能：一是启用主题/视觉样式（Krool 的控件已内置支持，配置简单）；二是指定“并排程序集”。通常，ActiveX 控件和 DLL 需要注册到系统目录，但有些组织不允许注册外部依赖。自 VB6 时代起，Windows 支持通过清单文件让 OCX/DLL 与程序放在同一目录，无需注册即可使用。虽然不如 StdEXE 版本将代码直接嵌入程序那样彻底无依赖，但已是次优选择。

清单文件还可以包含其他内容，但本用户指南只关注对 Krool 控件包有影响的两项。过去，您可以将清单文件与 EXE 文件放在一起分发给用户，但新版 Windows 更推荐将清单嵌入到程序内部。实际上，清单是通过资源文件（resource file）嵌入的，这也是 VB6 等多种编程语言的常用做法。

清单文件是 XML 格式，并且文件大小必须正好是 4 的倍数。幸运的是，Krool 已经提供了两个资源文件（前文已介绍），可以直接包含到您的程序中。一个用于并排（side-by-side），另一个用于启用视觉样式和并排。例如，假设您从 Krool 网站下载了 `VBCCR16SideBySideAndVisualStyles.res` 文件并希望使用它。显然，这个文件同时支持视觉样式和并排。您无需编辑此文件，只需在项目中引用即可。

注意：资源文件可以放在公共位置，作为多个程序共享的库文件。但如果您修改了该文件，所有引用它的程序都会受到影响。如果担心这一点，可以将资源文件复制到项目文件夹（即 .vbp 文件所在的文件夹）并单独引用。

那么，如何将资源文件添加到项目中？在 VB6 中，依次点击菜单 AddIns | AddIn Manager，您会看到如下界面：

<!-- ![](data:image/png;base64...) -->

选择“VB6 Resource Editor”，确保“Loaded/Unloaded”和“Load On Startup”都已勾选。然后回到主项目，点击 Project | Add New Resource File，从弹出的对话框中选择您的 .res 文件。此时，资源文件会显示在导航窗格的 Related Documents 下方。

现在，您就可以编译并使用您的程序了。

关于 EXE 或 DLL 的分发：由于清单已嵌入资源文件，无需再单独分发清单文件。

您需要将 VBCCRxx.OCX 文件与程序一起分发。如果采用并排方式，只需将 OCX 文件放在 EXE 文件同一目录或其子目录下。请注意，采用并排时，Windows 会优先在可执行文件所在目录查找 OCX 文件，即使您已将其复制到系统目录并注册（实际测试如此）。因此建议不要将 OCX 文件从系统目录移走，而是在 EXE 所在目录再复制一份。建议在采用并排前先参考我的工具。我的方案是：开发阶段使用 OCX 版本控件，最终用工具命令行编译为 StdEXE 版本，这样无需任何并排方案，所有代码都嵌入到可执行文件中（仅限 Krool 控件；如果用到其他人的 OCX 控件，仍可采用并排方式）。

如果不采用并排，开发机上已注册 OCX 文件无需额外操作，但分发时需让安装程序将 OCX 文件复制到用户系统目录并注册。

### VBFlexGrid 用户指南

Krool 的 MSFlexGrid 替代控件包与前述 33 个 Common Controls 替代控件几乎完全一致。由于该控件发布较晚，Krool 将其单独分离。未来可能会合并，但目前请将 VBFLXGRD 理解为和 VBCCR 类似，只是它只有一个控件。

StdEXE 版本可在 VBForums [这里](http://www.vbforums.com/showthread.php?848839-VBFlexGrid-Control-(Replacement-of-the-MSFlexGrid-control)) 下载，OCX 版本在 [这里](http://www.vbforums.com/showthread.php?855931-VB6-ActiveX-VBFlexGrid-%28Replacement-of-the-MSFlexGrid-control%29&p=5236525#post5236525)。所有与 VBCCR 相关的问题在 FlexGrid 控件上同样适用。

我的工具可以帮助您无缝管理这两类控件。

### VBA 使用说明

VBCCR 和 VBFLXGRD 控件的 StdEXE 版本无法在 VBA 中使用，因为 VBA 不允许将控件直接嵌入代码。VBA 只能使用 ActiveX 控件（即 OCX 版本）。

OCX 版本可以在 VBA 中正常使用。类型库无需单独引用，因为已编译进 OCX 文件。每位用户都需在其电脑上注册 OCX 文件，并在 VBA 项目中引用。

另外，VBA 不支持视觉样式，因此该功能不可用。如果您的 VBA 窗体外观较旧，这些控件无法改善。

这些控件可为 VBA 用户带来 Unicode 支持（尽管近年来很多 VBA 控件本身已支持 Unicode 显示，但设计时属性仍不支持 Unicode）。注意，这不会让 VBA 的代码编辑器支持 Unicode，编辑器始终是 ANSI。最后，Krool 的控件功能通常比微软自带控件更强大，这对 VBA 用户是个优势。

## OCX2StdExe 工具

我在实际使用中总结了如何高效管理这些控件，避免混乱并提升开发效率。常见痛点包括：

* StdEXE 版本可生成无依赖的独立可执行文件，但编译速度很慢。
* OCX 版本编译速度快，但每个可执行文件都要分发和注册 OCX。
* OCX 包更新频繁，带来大量 bug 修复和新功能，但每次升级都很麻烦。每个项目都要手动查找和替换 .vbp、窗体、资源文件中的 OCX 名称和 GUID，非常繁琐。
* Krool 的 OCX 包没有示例文件，如何让 OCX 版本支持视觉样式并不直观，即使清单/资源文件已引用，仍需初始化代码（OCX 包未包含，可从 StdEXE 版本提取）。
* 我有很多自定义初始化代码，不希望与 Krool 的代码混在一起。

为此，我写了一个 VB6 工具来统一管理这些问题：

* 开发阶段使用 OCX 版本，因其简单（1 个文件而非 153 个），编译速度快。
* 可同时支持 VBCCRxx.OCX 和 VBFLXGRDxx.OCX。我的工具将两者视为同一类控件包（预计未来 Krool 也会合并）。
* 每当有新版本发布，只需下载、复制到系统目录并注册。如果覆盖同名旧文件（如 VBCCR17.OCX），无需额外操作；如果是跨版本升级（如 1.6 升级到 1.7），可用本工具自动升级项目引用，自动修改 .vbp、窗体、资源文件中的所有相关内容。所有原始文件会备份，便于回退（不推荐）。工具也支持降级到旧版本（如 1.7 降到 1.1）。
* 项目开发和维护流程与普通 OCX 控件项目一致。需要生成无依赖单文件时，可用工具切换为 StdEXE 版本命令行编译，生成独立可执行文件，且不会修改原始文件。只需一次慢编译即可。
* 使用 StdEXE 命令行编译时，最终 EXE 只包含实际用到的控件，体积更小。原始文件不变，工具会生成临时文件，引用 StdEXE 控件（153 个文件），而不是单一 OCX。可选择保留这些临时文件（文件名与 OCX 版本不同），便于后续重新编译。属性页文件可选不包含，进一步减小 EXE 体积（命令行编译不需要属性页，IDE 才需要）。
* 工具还可自动在项目目录下创建 StdExe 子文件夹，便于管理和编译。

这个工具(希望)易于使用。本文档涵盖了为VB6编写的工具版本;如果您愿意,还有一个几乎相同的Excel版本。Excel版本与VB6版本一起包含在包中。以下是VB6版本的屏幕截图。在窗体顶部是要更新或编译的VB6项目文件。您可以在文本框中输入路径,或单击左侧的按钮搜索它。项目文件需要是使用Krool控件的OCX版本(任一版本或两者)的项目。OCX版本有版本号,从一个版本更改到较新版本并不简单,因为要使用的OCX文件的引用嵌入在使用控件的窗体代码、资源文件(如果有嵌入的清单)和项目文件本身中。如果您指定的项目文件是不使用Krool控件或使用StdEXE版本的项目,那么您将无法执行OCX升级或命令行编译。

<!-- ![](data:image/png;base64...) -->

**更新OCX引用**

我们的窗体会告诉您在项目中使用的VBCCRxx.OCX和/或VBFLXGRD.OCX的当前版本。上面的示例显示指定的项目正在使用VBCCR15.OCX和VBFLXGRD12.OCX。它还显示您在运行此工具的PC上安装的每个版本,默认为最新版本。在上面的示例中,显示的是VBCCR17.OCX和VBFLXGRD14.OCX,这是本文档编写时的最新可用版本。虽然从图片中看不到,但下拉列表也包含一些早期版本。

升级后您可以选择保留或删除旧版本文件。通常您不需要保留旧文件,但如果选择保留,可以在与新文件相同的文件夹中找到它们,但扩展名添加的是旧OCX版本号而不是文件名。例如,如果您在'myForm.frm'上使用了Krool的控件,当它从版本15转换到16时,可以保留旧文件,如果保留,它将被命名为'myForm.frm.ocxCCR15ocxFlex12',这样您可以清楚地将其识别为升级后留下的旧文件。我建议一旦您对此工具有了信任,确信它不会删除不应该删除的文件,就没有理由保存旧版本,因此您可以选择删除旧文件。

如果较旧的OCX文件已在PC上注册,您实际上可以转到控件的较早版本。通常,较新版本有更多功能,但更重要的是它们也有错误修复,所以我不建议回到较早版本。另外要考虑的是,VBCCR16添加了一个新控件(ComboFont),VBCCR17添加了在较早版本中不存在的VirtualCombo和VListBox,因此如果您指定从1.6或更高版本转到1.5或更早版本,对这些控件的引用必须被删除,这可能不是您想要的(假设您已经使用了它)。

一旦您选择了要转到的版本以及是否保存旧文件,只需单击'Update .OCX References'即可更改您的项目。所有控件的设置将与升级到新版本之前相同。

**注意** - 此工具不使用任何Krool的控件,因此a)它只是ANSI的,b)您在PC上安装的OCX版本无关紧要。

**不带OCX文件编译**

主菜单中的这个选项允许您将程序与StdEXE文件一起编译到程序中,这样编译后就不再需要OCX文件。它不会更改您一直在使用OCX版本控件进行开发的任何文件。

此选项应该在您让程序使用OCX版本编译和运行*之后*使用。使用OCX版本开发程序要容易得多,效率也更高,然后使用StdEXE版本制作可以分发的可执行文件。请注意,所有这些都假设您已下载并注册了VBCCR和VBFlexGrid的OCX版本,并且还下载并解压了StdEXE版本的等效版本。

如果您单击主窗体上的Options按钮,将看到以下内容：

<!-- ![](data:image/png;base64...) -->

窗体顶部是选项,用于选择要包含的Krool支持文件(不是每个控件的一部分)。其中一些是许多单独控件使用的通用文件,有些只是通用支持文件。例如,Common.bas是一个通用模块,其例程被许多控件使用。我总是选中这个,因为它对所有功能都很核心。另一方面,VisualStyles.bas包含的代码我已经合并到我的核心模块中,所以我不在上面的选项中使用它。

类模块CommonDialog.cls很有趣。只有一个控件使用它(MCIWnd.ctl),IDE中使用的4个.pag文件也使用它(CoolBar、ImageList、RichTextBox和StatusBar)。我有代码来查看是否使用了这些,如果没有,它会自动被排除,所以我的建议是,除非您专门在代码中包含CommonDialog.cls用于其他用途,否则只需在上面选中它即可。

请注意,有一个名为VTableSubClass.bas的模块选项,但如果您使用2020年1月5日或之后的ComCtrlsDemo版本,则不需要此选项,也不会显示。

窗体中间是编译文件位置的选择。工具不会影响您现有的项目文件,但需要修改它们以将引用从.OCX控件更改为StdEXE控件。您有两种选择:1)复制所有受影响的文件,并在新复制文件的名称前面加上XXX,或2)将所有项目文件复制到单独的文件夹,在那里您可以进行适当的更改来编译。我建议复制到单独文件夹的选项,因为您不会在整个编程系统中留下散乱的XXX文件。

**将所有文件复制到StdEXE子文件夹然后编译** - 如果您选择此选项,与您项目相关的所有文件都会被复制到项目文件所在文件夹的名为StdEXE的子文件夹中。项目文件的副本会放入此子文件夹,所有引用都会调整到现在此子文件夹中的文件。编译后,EXE文件将位于此文件夹中。这个项目与父项目的不同之处在于OCX引用不见了,被替换为对StdEXE控件文件的引用。但是,除了将项目提供给命令行VB6编译器外,它也可以像普通项目一样在VB6 IDE中打开。如果您想要删除此项目,只需删除子文件夹的内容即可。注意- Krool的控件文件被视为库,因此在编译时不会以任何方式更改,所以它们不会被复制到StdEXE文件夹中。它们是从您放置它们的位置引用的。

**在编译前用XXX前缀重命名所有支持文件然后'** - 当您选择此选项时,您会在其下方得到3个子选项。为了保护原始项目,我们通过在名称前面加上'XXX_'来复制所有更改的文件,包括从命令行编译器生成的EXE。您可以告诉程序在编译后删除这些支持文件;您可以保存这些XXX_文件,以便以后可以重新编译新项目文件(其名称也以XXX_为前缀);或者您可以选择保留Krool所有控件的所有支持文件,即使是那些在项目中未使用的。(注意 - 如果您使用此工具的Excel版本,前缀是YYY_而不是XXX_。)

注意 - 如果您选择保存支持文件以便可以在VB6 IDE中打开StdEXE版本,我必须进行一些对您来说透明但重要的修改,这样您就不会感到意外。例如,我不包含任何控件属性页文件(.pag扩展名),因为这些只在IDE中使用,而我们在命令行编译时跳过IDE。但是,如果您想保存支持文件以便以后可以在IDE中打开,那么我们需要确保调整您的项目文件以引用适当的.PAG文件,这样您就可以在IDE中打开它。因此,在命令行编译之后,.PAG文件的引用被放入.VBP项目文件中。

直到2020年8月初,Krool在StdEXE文件集中内置了一个机制,试图确保在IDE中使用这些控件的安全性。在2020年8月13日之后,他删除了这些保护措施。如果您仍在使用之前的StdEXE版本(强烈不建议),那么我们有一些代码可以帮助您在编译后将这个尝试的保护措施放入代码中,在.OCX版本中不需要它,但在早期的StdEXE版本中需要。

**包含哪些控件**

当您进行命令行编译时,只有您实际使用的控件才会包含在编译的代码中。这使得生成的.EXE文件尽可能小,因为您不包含对未使用控件的引用。但是,如果您想稍后编辑此StdEXE版本,可能您希望有选项将更多或所有当前未使用的控件添加到项目中。在Options窗体上有一个选项,可以指定将所有控件包含到新项目中,或者您可以单击'Special'并包含特定的控件。一般来说,我不建议这样做,因为继续使用引用.OCX文件的原始项目(您可以使用所有控件)更容易,然后只需在想要生成包含在.EXE中的控件的.EXE文件时重新运行此工具即可。

<!-- ![](data:image/png;base64...) -->

有一个特殊情况必须使用'Special'按钮。如果您在运行时定义控件,并且控件名称在变量中,我的工具无法看到它,追踪字符串的所有可能赋值会变得非常复杂。由于您编写编程代码,您应该知道在运行时添加哪些控件,因此您可以指定要包含的其他控件(如果有)。如果您的程序中已经使用了特定控件,则甚至不需要这样做,因为该使用已经使该控件包含在编译中。

**基本文件位置**

在Compile Options窗体底部是'Base File Locations'部分。为了进行命令行编译,我们需要知道VB6的位置以及Krool的控件文件的位置。

如果您要通过将OCX版本替换为临时StdEXE版本来编译项目,那么您需要知道VB6.EXE的位置,因为当您在主窗体中单击'Compile w/o .OCX's'时,此工具将稍后执行它。当您单击'VB6.EXE'按钮时,我们将尝试自动为您定位VB6。如果找不到,您可以导航到它或手动输入它。

窗体底部有两个位置,用于指定Krool的StdEXE版本(ComCtlsDemo和VBFlexGridDemo)的位置。您不需要这些来指定OCX版本的更新,但如果您希望使用StdExE控件而不是OCX版本的控件进行命令行编译,则需要指定这些。这些文件永远不会被修改,所以我把它们放在我的库中,我总是把最新版本保存在名为'Current'的文件夹中。您不需要将文件夹命名为那个名字,但您确实需要某个地方来放置为VBCCRxx和/或VBFLXGRDxx下载的新文件。

在您对此编译选项窗体做出任何想要的更改后,如果您单击'Accept changes & return',您的所有输入都将保存在INI文件中,以供下次运行StdEXE工具时重用。INI文件保存在保存StdEXE工具的同一文件夹中。我假设作为程序员,您不会将其安装到'Program Files'中,因此将您的设置与程序一起保存更方便,因为您不必担心尝试保存到'Program Files'需要UAC提升。

**编译**

当您在主窗体上单击'Compile w/o .OCX's'按钮时,工具将查看您的项目文件、所有控件、模块和清单/资源文件中对OCX控件的引用,并将它们更改为StdEXE控件,StdEXE控件的引用被放入.vbp文件中,然后使用VB6.EXE程序从命令行编译(我们切换到提升的命令提示符)。

您的原始项目文件不会被修改。

**注意** - 请知道,在最初几次使用此工具进行命令行编译时,您可能会遇到一些命名冲突。所有控件、页面属性、类文件等的名称(基本上是Builds文件夹中的所有内容)在OCX中都是"隐藏"的,但当您的程序编译时包含所有这些控件时,所有文件名和所有公共变量、类型、过程枚举等都是可见的。在这一点上,您可以决定是重命名您的代码还是Krool的代码。我本想保留我的并重命名Krool的(我有2个冲突),但我没有这样做,因为我不想追踪他每次使用的内容,也不想每次下载和更新时都要经历重命名的麻烦。但无论哪种方式都可以。

下面是两个屏幕截图,一个是成功编译的,一个是失败的。

<!-- ![](data:image/png;base64...) -->

<!-- ![](data:image/png;base64...) -->

### 使用命令行选项运行OCX2StdEXE

现在有一个工具的命令行版本,可以执行OCX版本升级或使用StdEXE版本进行OCX编译,就像上面描述的那样,但没有输入窗体。请注意,在这两种情况下,如果项目的完整路径中有任何空格,那么完整路径必须用引号括起来。

**通过命令行编译**

OCX2StdExe ProjectPathAndName [/s[1][2][3]] [/A[-][+]]

这意味着使用StdEXE版本编译使用OCX版本的项目,将代码嵌入到可执行文件中。如果指定/S,则编译后除了可执行文件外不保存任何文件(假设编译成功)。如果指定/S1,则保存使用的控件的支持文件,如果指定/S2,则保存所有控件的所有支持文件,无论项目中是否使用这些控件。指定/S3表示在StdEXE子文件夹中制作整个项目的副本,然后编译该副本。如果不指定/S开关,则重用上次使用对话框时保存的值。

您还可以指定在命令行编译中是否使用所有StdEXE控件(这与编译后是否保存任何文件不同)。指定/A或/A+表示使用所有控件,/A-表示不使用所有控件。如果不指定/A开关,则使用上次运行时当前保存的/A值。

开关大小写无关。/S与/s相同。

程序的编译版本(如果编译成功)将在2个地方之一找到。如果指定/S3,则StdEXE子文件夹不仅包含所有项目文件的副本,还包含编译的.EXE文件。另一方面,使用任何其他SaveControls选项将使编译的EXE与原始项目文件位于同一文件夹中,并且可执行文件名称前面将附加'XXX_'。

**更新项目中的.OCX版本**

OCX2StdExe ProjectPathAndName /u [/CCRxx] [/FLEXxx] [/d]

这将使指定项目的OCX控件更改为/CCRxx或/FLExxx开关中指定的值。'xx'指定要使用的版本(必须首先在此PC上注册)。如果未指定'xx',则使用运行工具的PC上注册的最新版本。与常规版本的OCX2STDExe一样,旧文件使用新扩展名保存。指定/d或/D将导致删除所有包含旧OCX引用的那些旧文件。

## 我如何管理Krool的系统

正如您可能已经发现的那样,我在开发期间使用Krool的OCX版本控件,然后使用我的工具切换到使用Krool的StdEXE版本进行编译,这样我就有了一个可以分发的独立可执行文件。我学到了一些技巧,希望能使整个过程变得非常简单。

* OCX版本的控件
  + 我总是使用[这里](http://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-%28Replacement-of-the-MS-common-controls%29&p=5129155#post5129155)的VBCCRxx和[这里](http://www.vbforums.com/showthread.php?855931-VB6-ActiveX-VBFlexGrid-%28Replacement-of-the-MSFlexGrid-control%29&p=5236525#post5236525)的VBFLXGRDxx的最新OCX文件版本。最新版本在第1个帖子的末尾。保存VBCCRxx文件时注意使用"另存为"并删除.docx扩展名,因为这是Krool用来避免VBForums对zip文件大小限制的技巧。我建议将文件保存到硬盘时在文件名中包含当前版本。当前VBCCRxx文件是1.7.0版本,所以我将文件'VBCCR17.OCX.rar.docx'保存为'VBCCR16.OCX v1.7.0.rar'。最新的VBFLXGRDxx版本是1.4.27,目前文件大小足够小,仍然使用.zip扩展名。我会将'VBFLXGRD14.OCX.zip'这个文件保存为'VBFLXGRD12.OCX v1.4.27.zip'。在网页上获取OCX文件时,您还应该获取.RES文件(资源文件),因为稍后会用到这些文件。
  + 现在您需要将.RAR和.ZIP文件中的OCX文件放入系统文件夹以使用它们。如果使用32位Windows版本,您需要将OCX文件放入C:\Windows\System32,如果使用64位Windows版本,则放入C:\Windows\SysWOW64。请注意,OCX文件名中没有次要版本。例如,最近的两个VBCCRxx.OCX版本是1.7.12和1.7.13,但每个都是名为VBCCR17.OCX的文件。如果系统文件夹中已经有旧版本,您可以直接覆盖它。请注意,对于XP之后的任何操作系统,您都需要使用提升的CMD提示符或像Directory Opus(我最喜欢的)这样的文件管理器来处理提升。您不必将OCX文件放在系统文件夹中,但我总是这样做,如果不是别的原因,至少我知道它在哪里。
  + 如果您从未使用过Krool的OCX控件,或者您有更新的版本(比如1.7而不是1.5),那么您需要使用提升的命令提示符中的regsver32注册OCX文件(如果您只是覆盖了同名的旧文件则不需要)。
  + 如果您有更新的OCX版本(例如从1.5到1.7),那么您需要为使用早期版本的每个项目运行我的工具,并更新到最新的OCX版本。
* StdEXE版本的控件
  + StdEXE版本控件的一个令人困惑的方面是,它们没有像OCX版本控件那样的版本号。当Krool更新他的StdEXE控件时,我下载该包并在下载文件名中放入发布日期。然后我将文件提取到之前使用的相同文件夹结构中,这样我总是可以使用最新版本的控件。Krool警告不要使用这些控件进行开发,因为它们不是IDE安全的,但通过使用这个编译工具,您可以使用稳定的.OCX版本进行开发,然后使用stdEXE版本进行命令行编译,将您使用的控件包含到EXE文件中,这样您就不需要.OCX文件与.EXE程序一起分发。
  + 您需要查看VBCCRxx或VBFLXGRDxx的OLEGuids文件夹,并将类型库OLEGuids.tlb复制到系统文件夹并注册它。幸运的是,这个文件不经常更改(当前版本日期为2020年4月15日),但值得时不时检查一下,以确保您不使用过时的类型库。请注意,OCX版本不需要此类型库,因为它实际上已编译到OCX文件中,但StdEXE版本需要它。
  + 在您的程序中,您必须通过Project | References在IDE中引用类型库,并在'OLE Guid and interface definitions'旁边打勾。再次说明,这只是StdEXE版本需要的。当您使用此工具并修改使用OCX版本的项目副本以改用StdEXE版本时,我会为您处理这个问题。
  + 通过Project | Components(或Ctrl-T)在IDE中启用控件,然后选择适当的控件文件。对于VBCCR 1.7版本,您需要在'VB Common Controls Replacement 1.7 Library'旁边打勾。对于VBFLXGRD 1.4版本,您需要在'VB FlexGrid Control 1.4'旁边打勾。所有控件现在应该出现在IDE的工具箱中。
* VB6程序的默认启动操作是加载和显示窗体。您不能用这些控件这样做,因为在引用、加载或显示任何窗体之前需要运行一些初始化代码。首先,您需要在项目中的标准模块中有一个Sub Main。然后您需要在Project | Properties的General选项卡中更改设置,使Startup Object成为调用Sub Main而不是任何窗体。然后在Sub Main中,您需要一些初始化代码,这样在调用第一个窗体时就不会崩溃。有两种方法可以做到这一点。
  + 第一种是直接使用Krool的代码,尽管方式有点奇怪。OCX控件包不包含任何关于如何使用它的指南或代码(它在后来的版本中确实有一些代码,可以让您从源代码制作自己的OCX文件,但这与使用指南不同)。如果您下载StdEXE版本,您会找到一个名为'Common'的文件夹,其中有文件'Common.bas'和'VisualStyles.bas'。VisualStyles.bas中有一个名为'InitVisualStyles'的子程序,这是您在调用窗体之前需要运行的,但如果您只是将VisualStyles.bas包含在程序中,您会发现它需要Common.bas中的一些例程,所以您也必须加载它。因此,如果您在项目中包含这两个文件,您的Sub Main中的第一行应该是调用InitVisualStyles,然后您就可以调用您的窗体了。
  + 我使用的方法(正如您在我的工具源代码中看到的那样),我在库中有一个名为mVB6Core.bas的通用标准模块,其中我放入了足够的来自Common.bas和VisualStyles.bas的代码,这样我就可以运行InitVisualStyles子程序,并且可以做很多我经常做的其他事情(检查我们是否在IDE中还是运行编译代码、当前Windows版本等)。以下是我在名为UCCoreInit的通用初始化例程中的代码(第1971行)：
```vb
If OSVer >= Vista Then
    Dim ICC As InitCC
    If App.LogMode <> 0 Then Call InitReleaseVisualStyles(AddressOf ReleaseVisualStyles)
    ICC.dwSize = LenB(ICC)
    ICC.dwICC = &H4000&
    InitCommonControlsEx ICC
Else
    InitCommonControls
End If
```
* 您可能认为可以开始了。还不行。当加载每个窗体上的每个控件时,我们必须设置视觉样式。在每个窗体的初始化代码中的某个地方,您需要调用SetupVisualStyles并将窗体传递给子程序。这段代码在VisualStyles.bas中,也是我的mVB6Core.bas库的一部分。这个SetupVisualStyles子程序确保窗体上的所有控件都可以使用视觉样式。所以您可以在使用的每个窗体的Form_Load子程序中放置这个调用。我的方法与此接近。我总是让我的窗体使用我的类库clResizer.cls,即使我关闭窗体的调整大小功能,我仍然在窗体的初始化代码中有对这个类模块的调用,该模块反过来调用SetupVisualStyles子程序。这样我就不必让该调用成为每个新窗体代码的一部分,因为我的类库处理它。但两种方式都可以。
* 关于清单（manifest）和资源文件。Krool 的控件本身与资源文件没有直接关系，资源文件只是用来容纳清单文件。如果你不需要视觉样式、并排（side-by-side）或高 DPI 显示器，则不必使用清单或资源文件。但如果你想让程序支持视觉样式、并排或高 DPI，则必须使用清单，并将其嵌入到资源文件中，再将该资源文件加载到可执行文件中。如果你打算一直使用 OCX 版本而不是最终用 StdEXE 版本编译控件，通常会希望启用并排选项。但我个人***不***这样做。在开发机上指定并排没有任何好处，反而会带来麻烦——因为如果你在开发机上用 OCX 版本生成 EXE，并且指定了并排，那么运行 EXE 时必须把 OCX 文件和 EXE 放在同一目录下，即使该 OCX 已经注册在系统目录中。

我为所有新项目都使用一个名为 OCX2StdEXE.res 的资源文件（随我的工具提供），它只指定了视觉样式和高 DPI 支持，并未指定并排。如果你有其他文件需要并排，可以把它们写进资源文件，但 Krool 的 OCX 控件没必要这样做。

注意：即使你指定了并排，后来又用我的工具进行最终编译，也不会有任何问题。我的工具会自动从资源文件中移除并排相关的内容，因为当所有控件代码都已编译进可执行文件时，并排就没有意义了。和往常一样，你用于开发的原始文件不会被修改。

* 下面要为后续做一些准备。如果你用的是 2020 年 8 月 13 日之后的 Krool ComCtrlDemo 项目 StdEXE 控件版本，可以跳过以下内容，因为 Krool 的新代码已经不再需要这些处理。如果你还在用旧版本，建议尽快升级，因为 Krool 的控件是免费的，没理由继续用旧版。

* 开发阶段我们用 OCX 版本控件，不用担心 IDE 崩溃，因为 Krool 的 OCX 已经处理了相关问题。命令行编译时我也做了处理。唯一需要注意的是：如果你用命令行编译并选择“保留支持文件以便后续在 IDE 打开”，这时就涉及 IDE Stop 保护代码。Krool 通过条件编译常量 `ImplementIDEStopProtection` 控制 IDE 保护。在 StdEXE 演示项目的 ComCtlsBase 文件第 3 行有这个常量，设为 True 时会编译 IDE 保护代码。命令行编译时我们不希望启用它，所以我会用一份注释掉该常量的 ComCtlsBase.bas 副本。命令行编译后，如果你选择保留支持文件，新的项目文件会自动加上 `ImplementIDEStopProtection = -1`（True），并且需要调用 `ComCtlsInitIDEStopProtection` 子程序来启用 IDE 保护。我的工具自带的 mVB6Core.bas 标准模块会自动处理这些。如果你查看第 1980 行，会看到如下代码：

```vb
#If ImplementIDEStopProtection = True Then

' 如果你用 Krool 的控件，OCX 版本不需要 IDE 保护，
' 但 StdEXE 版本需要。如果你用 OCX 版本开发，
' 然后用本工具命令行切换为 StdEXE 并选择保留支持文件，
' 需要执行如下子程序。命令行编译结束后，
' 我会在新的 .vbp 项目文件（引用单独控件而非 OCX）中
' 添加 ImplementIDEStopProtection = True 编译常量。
' 下面的子程序在 ComCtlsBase.bas 中。

ComCtlsInitIDEStopProtection ' 命令行编译时常量为 False

#End If
```

通常情况下，这个条件编译常量为 0（OCX 版本下不可见），所以不会调用 ComCtlsInitIDEStopProtection。但如果你用工具保留了支持文件，保存的项目文件会加上 ImplementIDEStopProtection = -1（True）。只有在命令行编译后保留支持文件、并用 IDE 打开时才需要这个过程。一般情况下你不会用到这些支持文件，也不需要关心。如果你有自己的初始化代码，想让命令行编译后的支持文件能在 IDE 打开，也需要类似的处理。实际上，这不是必须的——如果你的程序能用 OCX 版本编译通过，那么用 StdEXE 版本命令行编译也极大概率能成功，通常不会用到这些支持文件。

* 现在你可以正常开发程序了，使用 OCX 版本控件（VBCCRxx.OCX 和/或 VBFLXGRDxx.OCX）。

* 如果有新版本 OCX 发布（[VBCCRxx 下载地址](http://www.vbforums.com/showthread.php?841929-VB6-ActiveX-CommonControls-%28Replacement-of-the-MS-common-controls%29&p=5129155#post5129155)，[VBFLXGRDxx 下载地址](http://www.vbforums.com/showthread.php?855931-VB6-ActiveX-VBFlexGrid-%28Replacement-of-the-MSFlexGrid-control%29&p=5236525#post5236525)），主版本号不变（如 1.7.10 升级到 1.7.13），直接覆盖 OCX 文件即可。如果主版本号升级（如 1.7 升到 1.8），复制新 OCX 到系统目录并用 regsvr32 注册，然后用本工具批量升级所有项目的引用。

* 同时关注 Krool ComCtlsDemo（StdEXE 版）和 VBFlexGridDemo 的更新（[ComCtlsDemo 下载](http://www.vbforums.com/showthread.php?698563-CommonControls-(Replacement-of-the-MS-common-controls))，[VBFlexGridDemo 下载](http://www.vbforums.com/showthread.php?848839-VBFlexGrid-Control-(Replacement-of-the-MSFlexGrid-control))）。虽然没有严格的版本号，但网站上的最新版本通常和 OCX 版本保持同步。过去 OCX 版本有时会落后于 StdEXE 版，但最近几年 Krool 已经做到了同步更新。

* 每当你要发布可执行文件时，运行本工具，选择“无 OCX 编译”选项即可。

* 命令行编译时，每个控件都需要相应的文件。工具会自动判断并包含所需文件。Common 和 Builds 文件夹下有一些通用文件是否包含，由你在工具的 Options 窗体中设置。你可以自由选择是否包含这些文件。相关代码在 zVBandVBA 模块的 DoCompile 函数（第 191 行起）。我的默认设置如下所示。

```vb
Public IncludeStartupbas As Boolean

Public IncludeCommonbas As Boolean

Public IncludeVisualStylesbas As Boolean

Public IncludeISubclasscls As Boolean

Public IncludeVTableHandlebas As Boolean

Public IncludeVTableSubclasscls As Boolean

Public IncludeCommonDialogcls As Boolean
```

我在自己的程序中不包含 Startup.bas，因为它是特定于 Krool 的演示程序的，尽管我在自己的程序中使用了他的部分例程。

我不包含 VisualStyles.bas，因为我已将该代码集成到 OCX 和 StdEXE 版本的初始化例程中。VisualStyles 需要 Common.bas 中的一些函数和子程序，但我只采用了其中的一部分，并将它们与 VisualStyles 一起设为私有，这样在命令行编译时我就可以引入整个 Common.bas。最后，指定可以包含 CommonDialog.bas。请注意，它不会自动包含。只有在使用 MCIWnd.ctl 控件或使用 CoolBar、ImageList、RichtextBox 或 StatusBar 的一个或多个属性页时才会包含它。属性页不用于命令行编译选项，但如果您选择保存支持文件以供以后重新编译，则会包含属性页文件。

## 版本历史

| **版本** | **日期** | **说明** |
| --- | --- | --- |
| 0.9.0 | 2017年7月2日 | * VB6 和 Excel 初始版本发布用于测试。 |
| 0.9.1 | 2017年7月4日 | * 可以在没有控件但有一个或多个 CommonDialog 引用的情况下工作 * .vbp 文件中的比较使用大写 * 如果 .vbp 文件已有 stdol2.tlb 引用，则不包含该引用。 |
| 0.9.2 | 2017年7月9日 | * 正确处理没有使用控件但在窗体中调用 CommonDialog 的情况（之前只在类和标准模块中检查）。 |
| 0.9.3 | 2017年7月31日 | * 修复新 .vbp 文件中窗体的路径错误 |
| 0.9.4 | 2017年8月23日 | * 重新处理一些相对路径问题 |
| 0.9.6 | 2018年7月11日 | * 调整以适应 mUCCore 中函数名称从 myQuickOpen 改为 FileCreateOrOpen 的变化。 |
| 0.9.7 | 2018年10月1日 | * 添加 VBCCR16 支持 * 将 VB6 核心代码拆分到独立的 mVB6Core.bas 中，与 VBA 的 mUCCore 并行 |
| 0.9.8 | 2018年11月24日 | * 大量更改 |
| 0.9.9 | 2018年12月1日 | * 添加对 VBFLXGRD.OCX 和 VBFlexGridDemo.vbp (StdEXE) 的支持 * VB6 版本中将所有输入合并到一个窗体 * 为编译后支持文件保存数量添加三个选项按钮（无、使用的控件、所有控件） * 修改逻辑以在编译中包含或排除 Common 和 Builds 中的各种模块 * 修改围绕条件编译常量 ImplementIDEStopProtection 的逻辑，特别是针对编译后重用 * 编译和/或编译后支持文件保存中包含或排除 CommonDialog.cls 的新逻辑 * 使用枚举来帮助管理特定项目中是否使用 VBCCRxx 和/或 VBFLXGRDxx 的代码 * 添加升级或编译的命令行选项。 |
| 0.9.10 | 2018年12月11日 | * 修复如果未安装/注册 VBCCRxx 或 VBFLXGRDxx 时 DoCompile 中的错误 * 修复当资源文件没有嵌入清单时 DoCompile 从资源文件提取清单的错误 |
| 0.9.11 | 2018年12月12日 | * 在 DoCompile 中查找类和标准模块中对 VBCCRxx 和/或 VBFLXGRDxx 的引用（之前只处理窗体和资源文件，但未处理 .bas 和 .cls 文件） * 在 fmInput 上，当对话框中已有当前文件时，cbutProjFile 默认为该文件的文件夹，而不是程序的路径。 |
| 0.9.12 | 2018年12月13日 | * fmInput 上的 DoCompile 新增复选框，强制在编译中使用所有 StdEXE 控件，这通常不需要，但如果有人在基于 OCX 的项目中引用了控件的属性，我们可以看到它是 VBCCRxx 的一部分，但如果不遍历每个控件的每个属性，我们就不知道它与哪个控件相连。我认为这种情况不常见，所以我把它放在那里以防有人在基于 OCX 的代码中这样做。 |
| 0.9.13 | 2018年12月19日 | * 代码清理 * 将所有编译选项移至第二个窗体 |
| 2.0.0 | 2020年7月1日 | * 支持 VBFlexGrid OCX 版本 1.4。 * Krool 的控件已被标准 VB6 控件替代。这听起来似乎适得其反，但更新工具不应该依赖于控件的特定版本。变化的一小部分是清单和并行编译已被移除。 * 似乎 Krool 即将发布 VBCCR.OCX 1.7 版和 VBFlexGrid 1.5 版的重大更新，此工具现已设置为可快速添加更新到这些新版本的功能。 * 该工具使用新的类模块 clINI.cls，在 INI 文件中保存和恢复工具多次运行之间的设置。上一版本将设置保存到注册表。这仍然是一个选项，但出于各种原因，我已完全不使用注册表，因此需要一些代码修改。目前，该工具会将 INI 文件保存到程序文件复制到的同一文件夹中。 * 集成了 VBForums 上 The Trick 的工具提示模块。 |
| 2.1.0 | 2020年7月2日 | * 各种错误修复。 |
| 2.1.1 | 2020年7月3日 | * 上传的版本没有工具提示模块的本地版本。 |
| 2.2.0 | 2020年8月20日 | * clResize.cls 中包含了新的工具提示方法，并从 VB6Core.bas 中移除旧的 * 支持 VBCCR17.OCX * 改进了几处注册表读取。 |
| 2.3.0 | 2020年8月28日 | * 现在包含一个选项，可以首先将项目文件（及其所有模块等）复制到项目的 StdEXE 子文件夹中，以供以后使用。 * 大量小错误修复。 |
| 2.3.1 | 2020年8月31日 | * 错误修复 - 如果您在项目中有自己的 UserControl 和/或 PropertyPage（不是 Krool 的控件，而是您自己的），这些不会被复制到用于独立项目编译的 StdExe 文件夹中。现已修复。 |
| 3.0.0 | 2021年3月27日 | * 您可以指定在使用 StdExe 编译时要包含的单个控件。添加此功能是因为帖子 #34 中的示例，他想在标准模块中添加一个控件，控件名称在变量中。我不想在您的代码中追踪变量赋值，所以现在有一个功能来处理这个问题（您应该知道您添加了哪些这样的控件，这样您就可以打开这些控件以包含在 EXE 文件中）。以前这是一个全有或全无的选择。 * StdExe 编译选项包括在所有项目文件（包括 .BAS 文件）中查找对 Krool 控件的引用。 * 修复了 StdExe 编译部分的错误 * 实际上忽略了 VirtualCombo 和 VirtualListbox。 * 即使指定要包含，CommonDialog.cls 也被遗漏。 * 有时会遗漏用户项目文件中的条件编译常量。 * 在"复制到子文件夹"选项中，最终的 .VBP 文件中没有引用 .PAG 文件。 * 改进了 MS 编译器/链接器的命令行编译输出处理。 * 在从命令行使用 StdExe 选项编译之前，现在需要基本文件位置。如果您尚未输入这些文件位置值，系统会在您继续之前提示您输入。 |
| 3.1.0 | 2021年11月17日 | * 处理 VBCCR17.OCX 版本 1.1（之前只处理 1.0） * Set\_xx\_CCR 和 Set\_xx\_Flex 现在只调用一次 * 数组 GUIDxxCCR() 和 GUIDccFlex() 现在是公共的（之前嵌入在 Set\_xx\_CCR 和 Set\_xx\_Flex 中） |
| 3.2.0 | 2021年12月20日 | * 处理 VBCCRxx.OCX 直至 1.7 版。处理所有 VBFLXGRDxx.OCX 版本，包括刚发布的 v1.5。 |
| 3.3.0 | 2023年6月24日 | * 现在支持 VBFleGrd16 * 每个 OCX 版本都是独立的。VBCCR16.OCX 与 VBCCR17.OCX 等完全分开。这些版本很少有多个版本，所以有 1.0、1.2 版，现在是 1.2。这个版本号出现在 VBP 文件和所有 .FRM 文件中。我之前假设每个 .OCX 的版本号都是 1.0，因为它们都只有 1.0，但现在 VBCCR17.OCX 有 1.0、1.1 和 1.2。未能识别大于 1.0 的版本导致了一些问题。现在已修复。* 琐事 - VBCCR11.OCX 有一个 1.1 版本，但那是在 2015 年，我很确定没有人再使用它了。 |