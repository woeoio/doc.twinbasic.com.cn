---
title: "常见问题"
nav_order: 2
permalink: /FAQ
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bc006fdd-58d3-4040-9efc-e251e647390d'
  PropagateID: 'bc006fdd-58d3-4040-9efc-e251e647390d'
  ReservedCode1: '44743f84-4dea-4861-b972-61fce5a118e1'
  ReservedCode2: '44743f84-4dea-4861-b972-61fce5a118e1'
---

# 常见问题

### [常规](#general) - [安装](#install-section) - [使用 twinBASIC](#using-twinbasic)

## 常规

::: details 什么是 twinBASIC？

twinBASIC 是一种新的 BASIC 语言和开发环境（IDE），目标是与 VB6/VBA 100% 向后兼容。

:::

::: details 谁在开发 twinBASIC？

twinBASIC 是 Wayne Phillips 的作品，他运营着 [Everything Access](https://www.everythingaccess.com/) 公司，这是一家成熟的 Microsoft Access 和 VBA 专业工具和服务提供商，包括流行的 vbWatchdog 软件。

:::

::: details 我在哪里可以获取 twinBASIC？

最新版本可以从 [主 twinBASIC GitHub 仓库](https://github.com/twinbasic/twinbasic)的 [Releases 部分](https://github.com/twinbasic/twinbasic/releases)下载。有关安装的更多信息，请参见[如何安装 twinBASIC](#installation)。

:::

::: details 项目当前状态如何？

twinBASIC 目前处于 **Beta** 阶段后期，仍在开发中，尚未达到稳定的 1.0 版本。所有 VB6/VBA7 语法和内置函数已实现。所有基本控件（除 OLE 控件外）以及约一半的通用控件已实现。它支持窗体、类和 UserControl——既作为编译的 OCX/DLL 控件，也作为项目内代码（即类似 .ctl 文件）。但是，并非所有属性、事件和方法已完成。此外，ActiveX EXE 和 VBG 项目组支持尚未实现，还有相当数量的 bug。

不过，**tB 已经可以运行许多现有项目**，甚至是相当复杂和大型项目。许多社区成员已成功让他们的应用和其他开源项目运行起来，并从头创建了新项目。查看以下示例可以很好地了解项目进展：
Krool 的 [VBCCR](https://github.com/Kr00l/VBCCR) 和 [VBFlexGrid](https://github.com/Kr00l/VBFLXGRD) 控件、Ben Clothier 的 [TwinBasicSevenZip](https://github.com/bclothier/TwinBasicSevenZip)、Carles PV 的 [Lemmings](https://github.com/fafalone/Lems64)、Don Jarrett 的 [basicNES](https://github.com/fafalone/basicNES) 任天堂模拟器，以及 Jon Johnson 的 [ucShellBrowse/ucShellTree](https://github.com/fafalone/ShellControls)、[FileActivityMon ETW 事件跟踪器](https://github.com/fafalone/EventTrace)、[cTaskDialog](https://github.com/fafalone/cTaskDialog64) 和[更多](https://github.com/fafalone)。

:::

::: details 是否有预期功能的可用时间表？

是的，请参见 Issues 部分中的 [twinBASIC 路线图](https://github.com/twinbasic/twinbasic/issues/335) 获取时间表的最新更新。此路线图仅涵盖主要组件；较小的功能以不太正式的方式实现，通常在处理相关代码库部分时一并完成。

:::

::: details twinBASIC 相比 VB6 有哪些新功能？

**非常多！** 它有 64 位编译（使用兼容 VBA7x64 的语法）、泛型、重载、多线程（目前仅 API 方式，内置语法即将推出）、继承、使用 BASIC 风格语法定义接口和 coclass、所有控件和编辑器中的 Unicode 支持（仅 .twin 文件）、现代图像格式支持、对 _Implements_ 的多项增强、创建标准 DLL 和内核模式驱动的能力、设置 UDT 对齐的能力等数十种功能，**现在就可使用**，未来还有更多计划。

有关目前所有新功能的完整列表，请参阅 Wiki 文章 [twinBASIC 新功能概览](/official/Features/)。

:::

::: details 我在哪里可以了解更多 twinBASIC 信息、查找文档和参与社区？

[twinBASIC 主页](https://twinbasic.com)

twinBASIC GitHub：[主仓库](https://github.com/twinbasic/twinbasic) | [Issues](https://github.com/twinbasic/twinbasic/issues) | [讨论](https://github.com/twinbasic/twinbasic/discussions) | [语言设计](https://github.com/twinbasic/lang-design) | [语言规范](https://github.com/twinbasic/lang-spec) | [文档](https://docs.twinbasic.com)

[twinBASIC Discord](https://discord.gg/UaW9GgKKuE)

[VBForums 上的 twinBASIC 论坛](https://www.vbforums.com/forumdisplay.php?108-TwinBASIC)

:::

::: details twinBASIC 是开源的吗？

虽然未来可能采用开源模式，但编译器目前不是。IDE 的开源正在计划中。为解决由此带来的一些主要顾虑，一旦 tB 达到首个正式版本，源代码将被放入托管，以便在作者消失或因死亡或严重疾病/伤害无法继续工作时释放给社区。

:::

::: details twinBASIC 多少钱？

twinBASIC 有 3 个版本：社区版是免费的。编译的 64 位二进制文件会放置启动画面，某些功能如高级优化编译和未来的跨平台编译不可用，但对核心语言功能没有限制，也不收取版税。要获取这些功能，专业版和终极版提供订阅。有关更多详情，包括当前定价，[请参见此页面](https://twinbasic.com/preorder.html)。

**注意：** 你可以随时更改订阅级别，社区版始终可用。不会锁定（参见[前面关于托管的声明](#open-source)），因此你始终能够开发、测试和编译。

:::

::: details 我可以一次性付费获取永久许可证吗？

由于需要持续收入来开发 twinBASIC，订阅是高级版本的主要模式，提供[按月或按年](https://twinbasic.com/preorder.html)选项。但目前限时提供一次性购买的永久许可证，形式为 [VIP Gold 终身许可证计划](https://twinbasic.com/vip.html)。这不仅提供包括更新和新版本在内的 twinBASIC 终身许可证，还有仅限购买此许可证的用户的众多额外福利。

:::

::: details twinBASIC 可以用于开发商业产品吗？需要支付版税吗？

任何版本的 twinBASIC 都没有限制；它们都可以用于开发商业产品，**免版税**。使用 twinBASIC 创建的程序或其他产品的销售不需要支付任何费用。但 twinBASIC 软件本身未经适当许可不得再分发。

:::

::: details "100% 向后兼容"在技术上是什么意思？

向后兼容性是指匹配所有公开记录的语法、包含的控件、组件和控件行为以及控件外观。不包括未记录的、专有的内部实现细节。因此，例如所有语言关键字、函数和方法都存在且应给出相同结果，窗体/类/UserControl 应实现所有相同的公开记录接口，但 twinBASIC 可执行文件的内部结构并不相同，并且与可执行文件中未记录的 VB 项目信息结构不兼容（其内容多年来已被社区逆向工程）。

目前，所有基本控件在 twinBASIC 中都有支持 Unicode 和 64 位编译的重新实现，除了 OLE 控件；还有一些主要通用控件也已重新实现。最终，VB6 企业版附带的所有控件都将被重新实现。在此之前，原始控件仍然可以在 32 位构建中工作，社区成员也提供了一些替代方案，例如 Krool 的 VBCCR 控件和 VBFlexGrid 控件都能工作并有 64 位兼容的 twinBASIC 版本。

:::

::: details 那么我的一些项目不能工作了？

大多数项目不使用这些逆向工程的内部机制，但有些确实使用：最常见的是窗体/类/UserControl 内部的自子类化和回调；以及多线程和内联汇编。这些例程在 twinBASIC 中有原生支持，无需内部技巧，因此替换少数程序中的这些小部分非常简单：`AddressOf` 支持类成员，所以你可以使用常规子类化和回调方法，就像它们在 .bas 模块中一样。`CreateThread` 可以直接调用，无需任何特殊步骤。tB 还支持静态链接的 .obj 文件，允许从其他语言整合代码，通过 `Emit()`/`EmitAny()` 形式的内联汇编插入指令，未来还有更多支持计划。

此外，twinBASIC 重定向了用户最常使用的作为 `Declare` 语句的 msvbvm60.dll（也包括 msvbvm50.dll/vbe6.dll/vbe7.dll）函数，所有这些也都在 x64 中工作，只要你像其他 DLL 定义一样添加 `PtrSafe` 关键字。以下函数目前有重定向：`VarPtr, GetMem1, GetMem2, GetMem4, GetMem8, PutMem1, PutMem2, PutMem4, PutMem8, __vbaObjSet, __vbaObjSetAddRef, __vbaObjAddRef, __vbaCastObj, __vbaCopyBytes, __vbaCopyBytesZero, __vbaRefVarAry` 和 `__vbaAryMove`。你可以继续使用带 `Declare` 语句的这些函数来支持你偏好的特定签名。此外，olepro32.dll 的声明被重定向到 oleaut32.dll 中的相同函数，因为 olepro32 被 NT4 弃用且没有 64 位版本。

除了这些特殊情况外，项目依赖逆向工程内部机制的情况极为罕见。因此绝大多数项目可以零修改运行。

:::

::: details 我如何报告 bug 或其他问题？

最好的方式是在 twinBASIC GitHub 仓库中[创建 Issue](https://github.com/twinbasic/twinbasic/issues)。

你也可以在 [twinBASIC Discord 服务器](https://discord.gg/UaW9GgKKuE)的 #bugs 频道发帖。

:::

::: details twinBASIC IDE 是否支持其他语言？

IDE 目前基本支持前端 UI 的本地化，翻译由社区成员提供。可以从 [tB Discord 服务器的 #langpacks 频道](https://discord.com/channels/927638153546829845/1329533568376115282)获取，目前大约有 10 种，包括法语、德语、意大利语、葡萄牙语、俄语、简体中文、繁体中文、日语、瑞典语、匈牙利语、希腊语、加泰罗尼亚语、印尼语（Bahasa）和马拉雅拉姆语。自撰写此文后可能已发布更多；请查看该频道。

内部文本如悬停信息尚不支持本地化，但这是未来的计划。

:::

## 安装

::: details twinBASIC 的系统要求是什么？

twinBASIC IDE 支持 Windows 7 到 Windows 11。安装是便携式的；你只需解压下载的 zip 文件然后运行即可，没有安装程序。

需要 WebView2。这在较新版本的 Windows 上通常已预装，如果你安装了 Edge 浏览器也会一起安装。你也可以从 [Microsoft 网站](https://developer.microsoft.com/en-us/microsoft-edge/webview2?form=MA13LH#download-section)获取。选择 Standalone Evergreen x86 版本：

![image](Images/94490c87-fafe-4d5b-ae39-d3cedba1c21d.png)

:::

::: details twinBASIC 无法运行；提示无效入口点。

此问题有时出现在 Windows 7 上。要在 Windows 7 上使用，操作系统必须完全更新；此错误是由一个或多个缺少的更新导致的。运行 Windows Update 确保安装了所有最新更新。如果仍有问题，你可以到 Discord 或在 GitHub 上提交 Issue（参见[如何报告 bug 或其他问题？](#bug-reporting)）。

:::

::: details 启动 IDE 时报告缺少文件。

如果在启动 twinBASIC IDE 时收到缺少文件的通知，最可能的原因是你电脑上安装的杀毒软件将 twinBASIC 需要的一些文件隔离了，误认为它们包含病毒或其他恶意软件。这种错误检测在新发布的软件中很常见，所以请放心这只是误报——另请参见[上一条](#false-scanner-alerts)了解背景。

要使 twinBASIC IDE 成功启动，请配置杀毒软件忽略根目录及其 `bin` 子文件夹中的 twinBASIC 可执行文件（EXE 和 DLL）。这通常意味着将根目录和 `bin` 子文件夹添加到杀毒软件的"例外列表"中。

恢复缺少的 EXE 和 DLL 文件后，通过 `twinBASIC.exe` 文件启动 IDE 应该可以正常工作。

请将所有负面情绪指向你过于敏感的杀毒软件供应商 :)

:::

::: details 如何安装 twinBASIC？

tB 不需要完整的安装过程，你只需解压 ZIP 文件。从 [Releases 页面](https://github.com/twinbasic/twinbasic/releases)下载最新版本，名为 `twinBASIC_IDE_BETA_xxx.zip`（其中 xxx 是版本号；点击 'Assets' 展开文件列表（如果尚未展开））。

![img](Images/ac019c1a-dcef-4964-a730-bc5b86c644ba.png)

下载 zip 并将其解压到**空**文件夹中。不要简单地覆盖以前的版本；要么删除文件夹中的所有内容，要么使用不同的文件夹。否则可能会出现奇怪的错误。它将从此文件夹运行；一些设置会放在 AppData 中。

:::

::: details twinBASIC 安装有多大？

IDE 非常小，目前只有 25MB 下载，解压后约 80MB，其中一半是因为 LLVM 库。

:::

::: details twinBASIC IDE 数据存储在哪里？

除了你解压 IDE 的目录外，twinBASIC 在以下几个位置存储文件和设置：

- `%APPDATA%\Local\twinBASIC`

- `%APPDATA%\Local\twinBASIC_Admin`

- `%APPDATA%\Local\twinBASIC_WebPanel`

- `%APPDATA%\Local\twinBASIC_WebPanel_Admin`

  （WebView2 用户文件夹，这是 IDE 本身的，与你交互的文件/设置不直接相关。其中一些文件夹可能不存在。）

- `%APPDATA%\Roaming\twinBASIC`

  （存储主题、链接包以及在删除以前的安装时你想保留的其他文件）

- 以及注册表中的 `HKEY_CURRENT_USER\Software\VB and VBA Program Settings\twinBASIC_IDE`

  （当前 IDE 配置信息；最近项目列表、面板布局、许可证信息、选择的主题、键盘快捷键等）

:::

::: details twinBASIC 安全吗？（某个扫描器）说它是恶意的。

任何曾用多种 AV 引擎测试过自己程序的人都知道，除非你的 exe 是 64 位并用高级证书签名（也许即使如此，在被手动添加到信任列表之前），少数误报简直就是家常便饭。twinBASIC 的 IDE 和编译器可执行文件，像所有处于这种情况的应用一样，可能会在 VirusTotal 等服务上触发少量误报，特别是 32 位应用。这些几乎都不是来自主要供应商和/或基于"AI"的算法检测。

:::

## 使用 twinBASIC

::: details 如何将 VB6 项目导入 twinBASIC？

最简单的方式是通过导入向导。当你首次启动 twinBASIC IDE 时，会显示新建项目对话框——其中包含"Import from VBP"选项：

![image](Images/7e1cb69c-6db3-4f3f-aea1-c1fae25938a2.png)

你可以通过 Add 菜单中的 Import 选项单独导入 .bas/.cls 文件，来自 VB 项目或任何类型，在 Project 下或右键点击项目资源管理器中所需的文件夹：

![img](Images/2b32ab8c-fabc-4f42-9e6b-06e85574eaf4.png)

**注意：** 你可以单独选择 .bas/.cls 文件，但要导入窗体、UserControl、属性页和资源文件，目前必须选择它们关联的 .vbp 文件。然后你会看到可以导入的文件列表（及其新的 twinBASIC 扩展名 .tbform/.twin 等——确保两者都导入，例如对于 Form1.frm 你会看到 Form1.frm.tbform 和 Form1.frm.twin：

![img](Images/16833fae-4bd7-418f-bb16-691a611a5b01.png):::

::: details 为什么我看到很多错误说我的变量无法识别？

![image](Images/e409ea37-96ad-44c5-8017-3699ef04b53d.png)

虽然强烈推荐使用并被认为是最佳实践，twinBASIC **不**要求 `Option Explicit`。如果你看到这些错误，可能是你忽略了 twinBASIC 的一个新功能：自动启用项目范围的 `Option Explicit`。当你导入 VB6 项目或创建新项目时，会弹出一个小对话框：

![image](Images/05306a72-4ff6-427d-8970-969ef0c582e6.png)

如果保持"Option Explicit ON"勾选，意味着它将在项目范围内强制执行，无论窗体/模块等本身是否使用 `Option Explicit`。如果你取消勾选，你不会因此收到错误，只是一个警告："This variable has been auto-declared by the compiler due to Option Explicit being OFF"。如果你想，可以在项目设置中禁用该警告：

![image](Images/2a1c71fd-f81c-4bd3-b61a-0f2979e8961f.png)

对于现有项目，项目范围 Option Explicit 可以在项目设置中打开或关闭，在"Project: Option Explicit On"下：

![image](Images/01009879-fdbc-4a8e-8683-353aab6193df.png)

:::

::: details twinBASIC 支持外接程序吗？

VB6 和 VBA 的外接程序不被 twinBASIC IDE 支持。但是 tB 有基于现代 Web 技术的自己的外接程序基础设施。参见新建项目对话框"Samples"选项卡中的示例 10 到 16：

![image](Images/0e24eb5c-c9af-49a9-a908-03968b211554.png)

twinBASIC 支持**创建** VBA 外接程序。它目前是唯一支持使用 100% 兼容语法的语言为 64 位 Office 创建这些外接程序的工具。参见示例 4 和示例 5。

外接程序可以安装到两个位置：

1. `%appdata%\twinBASIC\addins\` - 这是首选位置，因为 TwinBASIC 发行版本身不会被修改，升级到新版本时外接程序不会丢失。
2. `<twinbasic 解压文件夹>\addins` - 如果你想修改你的 TwinBASIC 安装。一般不建议这样做。

:::

::: details 如何在 twinBASIC 中使用资源？

目前 tB 没有专用的资源编辑器；相反，资源通过项目资源管理器管理。在树中，你会看到一个 Resources 文件夹；默认情况下，标准 EXE 会包含 ICON，如果你选择启用视觉样式，还会有 MANIFEST：

![image](Images/71ddde83-a091-47e3-b5b8-681954b0639d.png)

你可以在此创建其他文件夹，使用标准名称。例如可以添加 BITMAP 组，然后与 `LoadResImage` 一起使用。与其前任不同，tB 不限制资源类型：你可以创建任何类型的文件夹，并向其中导入二进制数据。例如，一些社区项目插入了 `UIFILE` 资源用于 Ribbon 控件和 `DIALOG` 资源用于属性表。资源可以通过右键点击你想要放入的文件夹，然后从菜单选择 Add->Import file... 来导入。

如果你导入项目，链接的 .res 文件中的资源将自动导入。

#### 字符串

字符串表资源目前被特殊处理；在 IDE 中以 JSON 编辑。如果你从带 .res 的 VBP 导入，字符串资源将自动转换。如果你右键点击'Resources'文件夹并进入'Add'子菜单，在底部你会找到"Add resource: String table"来添加一个填充了示例字符串的字符串表：

![image](Images/97cc8655-7a8b-47f3-b52c-eb1ddfce662f.png)

#### 组名

如果你为标准资源类型创建新文件夹，twinBASIC 目前识别以下名称，你应在 Resources 下使用这些名称创建文件夹：

BITMAP  
CUSTOM  
CURSOR  
ICON  
MANIFEST  
RCDATA  
STRING  
MESSAGETABLE

对于其他标准类型，你必须使用 #（井号）后跟其数字。例如，对于 DIALOG (RT*DIALOG) 资源，不要将文件夹命名为 dialog，必须命名为 `#5`。ANICURSOR 应命名为 `#21`。依此类推，对于有 `RT*` 常量的[标准类型](https://learn.microsoft.com/en-us/windows/win32/menurc/resource-types)。对于任何其他类型，你可以使用任何你想要的名称，例如 UIFILE 可以直接命名为 UIFILE。

**注意：** 目前 .res 文件只能作为 VBP 的一部分导入。

:::

::: details 如何为我的程序设置自己的图标？

默认情况下，新创建的项目使用 twinBASIC logo。导入的项目使用设置中选择的窗体的图标。这可以在所有项目中以相同方式修改或设置：在项目设置对话框中，有一个"Icon Form"选项，你可以选择哪个窗体的图标将用于你的 exe。

如果你没有设置该选项，或者你的项目没有窗体，图标可以通过 Resources 文件夹手动管理。
如果你不熟悉在 twinBASIC 中使用资源，请参见上面紧邻此条目。在这种场景下，你的应用程序在资源管理器中使用的图标是 Resources\ICON 文件夹中按字母顺序排在第一位的那个。如果你的项目中没有 ICON 文件夹，可以通过右键点击 Resources 文件夹并选择 Add->Add folder 来创建一个。

![image](Images/8611d12a-d7a6-48cc-9544-cb27c5299aa5.png)

在上图中，MyOwnIcon.ico 将被资源管理器和其他应用用来表示你的 .exe，因为它在字母顺序上排在 twinBASIC.ico 之前。

**注意：** 这不会设置为任何窗体的图标；窗体的图标通过属性列表中的"Icon"属性设置。

你可以同时设置 Icon Form 选项并包含额外的 ICON 资源。在这种情况下，Icon Form 优先——它将被插入为 #1，使其成为第一个可能的条目，因此被资源管理器使用。在这种情况下，不要在 Resources 中为你的任何额外图标使用 #1，结果可能不可预测。

:::

::: details twinBASIC 产生的 EXE/二进制文件的运行时要求是什么？

twinBASIC 产生的程序和模块/控件除了标准 Windows 系统 DLL 外没有原生依赖，完全独立/可移植，当然不包括你的代码可能使用的第三方文件。不需要运行时。目前支持的最低 Windows 版本是 **Windows XP**，Windows 2000 支持可能在将来。目前没有计划支持 Windows ME、98、95、NT4 或更早版本，因为这些缺少 tB 提供的基本现代化所需的关键功能。某些新的 tB 独有功能（如子控件透明度）只有在较新版本上使用时才需要。所有功能在 WINE 和 ReactOS 下也应该工作，但测试虽然成功，数量有限。如果你尝试了，请分享你的经验。

:::

::: details 为什么 twinBASIC 产生的 EXE 比 VB6 大？

VB6 应用程序/组件的大部分功能（包括窗体引擎等重要部分）由 msvbvm60.dll 运行时提供，一个 1.4MB 的文件。twinBASIC 应用程序/组件没有这种外部依赖；窗体引擎和所有其他功能都包含在单个 exe 中，所以合并大小不会差太多。随着 LLVM 优化编译的引入，EXE 大小预计将显著减小，即将推出。

:::