# twinBASIC 常见问题解答

### [常规问题](#常规问题) - [安装说明](#安装说明) - [使用指南](#使用指南)

## 常规问题

### twinBASIC 是什么？

twinBASIC 是一个新的 BASIC 语言和开发环境（IDE），旨在实现与 VB6 100% 向后兼容。

### 谁在开发 twinBASIC？

twinBASIC 是由 Wayne Phillips 开发的，他经营着 [Everything Access](https://www.everythingaccess.com/) 公司，这是一家知名的 Microsoft Access 和 VBA 工具与服务提供商，其著名产品包括 vbWatchdog 软件。

### 在哪里可以获取 twinBASIC？

最新版本可以从 [twinBASIC GitHub 仓库](https://github.com/twinbasic/twinbasic) 的 [发布区](https://github.com/twinbasic/twinbasic/releases) 下载。

### 项目目前的状态如何？

twinBASIC 目前处于 **Beta** 后期阶段，正在开发中，尚未发布稳定的 1.0 版本。所有的 VB6/VBA7 语法和内置函数都已实现。除了 OLE 控件外的所有基本控件，以及约一半的通用控件已经实现。它支持窗体、类和用户控件——既可以编译为 OCX/DLL 控件，也可以作为项目内代码（类似于 .ctl 文件）。然而，这些功能的某些特性，如属性、事件和方法尚未完全实现。此外，ActiveX EXE 和 VBG 项目组支持尚未实现，还存在一些 bug。

但是，**tB 已经可以运行许多现有项目**，甚至是相当复杂和大型的项目。许多社区成员已经成功地运行了他们的应用程序和其他开源应用，几乎没有遇到困难，并且从头开始创建了新项目。以下是一些很好的实际例子，展示了项目的发展程度：
Krool 的 [VBCCR](https://github.com/Kr00l/VBCCR) 和 [VBFlexGrid](https://github.com/Kr00l/VBFLXGRD) 控件，Ben Clothier 的 [TwinBasicSevenZip](https://github.com/bclothier/TwinBasicSevenZip)，Carles PV 的 [Lemmings](https://github.com/fafalone/Lems64)，Don Jarrett 的任天堂模拟器 [basicNES](https://github.com/fafalone/basicNES)，以及 Jon Johnson 的 [ucShellBrowse/ucShellTree](https://github.com/fafalone/ShellControls)、[FileActivityMon ETW Event Tracer](https://github.com/fafalone/EventTrace)、[cTaskDialog](https://github.com/fafalone/cTaskDialog64) 等[众多项目](https://github.com/fafalone)。

### 是否有预期功能的发布时间表？

是的，请查看 Issues 区域中的 [twinBASIC 路线图](https://github.com/twinbasic/twinbasic/issues/335) 获取最新的时间表更新。这个路线图仅涵盖主要组件；较小的功能以较为非正式的方式实现，通常是在处理相关代码库时进行。

### 与 VB6 相比，twinBASIC 有哪些新特性？

**非常多！** 它支持 64 位编译（使用 VBA7x64 兼容语法）、泛型、重载、多线程（目前仅支持 API，内置语法即将推出）、继承、使用 BASIC 风格语法在项目中定义接口和 coclass、所有控件和编辑器中的 Unicode 支持（仅限 .twin 文件）、支持现代图像格式、对 *Implements* 的众多增强、能够创建标准 DLL 和内核模式驱动程序、能够设置 UDT 打包对齐等等，这些都是**现在就可以使用**的功能，未来还计划添加更多功能。

查看 Wiki 文章 [twinBASIC 的新特性概述](https://github.com/twinbasic/documentation/wiki/twinBASIC-Features) 获取当前可用的所有新功能的完整列表。

### 在哪里可以了解更多关于 twinBASIC 的信息、找到文档并参与社区？

[twinBASIC 主页](https://twinbasic.com)

twinBASIC GitHub：[主区域](https://github.com/twinbasic/twinbasic) | [问题](https://github.com/twinbasic/twinbasic/issues) | [讨论](https://github.com/twinbasic/twinbasic/discussions) | [语言设计](https://github.com/twinbasic/lang-design) | [语言规范](https://github.com/twinbasic/lang-spec) | [文档](https://github.com/twinbasic/documentation/wiki)

[twinBASIC Discord](https://discord.gg/UaW9GgKKuE)

[VBForums 上的 twinBASIC 论坛](https://www.vbforums.com/forumdisplay.php?108-TwinBASIC)

### twinBASIC 是开源的吗？

虽然未来可能采用开源模式，但目前编译器不是开源的。有计划开源 IDE。为了解决这带来的主要担忧，一旦 tB 发布第一个主要版本，源代码将被托管，如果作者失联或因死亡、严重疾病/伤害而无法继续工作，代码将被释放给社区。

### twinBASIC 的价格如何？

twinBASIC 有 3 个版本：社区版是免费的。编译的 64 位二进制文件会添加启动画面，某些功能（如高级优化编译和未来的跨平台编译）不可用，但核心语言功能没有限制，也不收取版税。要获得这些功能，可以订阅专业版和旗舰版。有关更多详情，包括专业版和旗舰版的当前定价，请[查看此页面](https://twinbasic.com/preorder.html)。

请注意，您可以随时更改订阅级别，社区版始终可用。不会有锁定（参见[之前关于托管的说明](https://github.com/twinbasic/documentation/wiki/twinBASIC-Frequently-Asked-Questions-(FAQs)#is-twinbasic-open-source)），因此您始终可以进行开发、测试和编译。

### 我可以一次性付费获得永久许可证吗？

由于需要持续的收入来开发 twinBASIC，订阅是高级版本的主要模式，可以[选择](https://twinbasic.com/preorder.html)按月或按年订阅。然而，目前限时提供一次性购买的永久许可证，即 [VIP Gold 终身许可证计划](https://twinbasic.com/vip.html)。这不仅提供了 twinBASIC 的终身许可证（包括更新和新版本），还提供了许多仅对购买此许可证的用户开放的额外福利。

### twinBASIC 可以用于开发商业产品吗？需要支付版税吗？

所有版本的 twinBASIC 都没有限制；它们都可以用于开发商业产品，而且是**免版税**的。销售使用 twinBASIC 创建的程序或其他产品不需要支付任何费用。但是，未经适当许可，不得重新分发 twinBASIC 软件本身。

### 从技术角度来说，"100% 向后兼容"是什么意思？

向后兼容指的是匹配所有公开记录的语法、包含的控件、组件和控件行为，以及控件外观。它不包括未公开的、专有的内部实现细节。例如，所有语言关键字、函数和方法都存在并应给出相同的结果，窗体/类/用户控件应实现所有相同的公开记录的接口，但 twinBASIC exe 文件的内部结构并不相同，也不与 exe 中未公开记录的 VB 项目信息结构兼容（这些内容多年来已被社区反向工程）。

目前，除了 OLE 控件外，twinBASIC 已经重新实现了所有支持 Unicode 和 64 位编译的基本控件；也重新实现了一些主要的通用控件。最终，将重新实现 VB6 企业版附带的所有控件。在此之前，原始控件仍可在 32 位构建中工作，社区成员也提供了一些替代方案，例如 Krool 的 VBCCR 控件和 VBFlexGrid 控件都可以工作，并有 64 位兼容的 twinBASIC 版本。

### 那么我的一些项目无法工作吗？

大多数项目不使用这些反向工程的内部实现，但有些使用：最常见的是窗体/类/用户控件中的自我子类化和回调；以及多线程和内联汇编。这些例程在 twinBASIC 中有原生支持，无需内部黑客技术，因此替换少数程序中的这些小部分非常简单：`AddressOf` 支持类成员，所以您可以像在 .bas 模块中一样使用常规子类化和回调方法。调用 `CreateThread` 不需要任何特殊步骤。而且 tB 支持静态链接的 .obj 文件，允许合并其他语言的代码，支持 `Emit()`/`EmitAny()` 形式的内联汇编以插入指令，未来还计划提供更多支持。

此外，twinBASIC 重定向了用户最常用的 msvbvm60.dll（以及 msvbvm50.dll/vbe6.dll/vbe7.dll）函数，这些函数都在 x64 中工作，如果您添加了 `PtrSafe` 关键字，就像任何其他 DLL 定义一样。以下函数目前有重定向：`VarPtr, GetMem1, GetMem2, GetMem4, GetMem8, PutMem1, PutMem2, PutMem4, PutMem8, __vbaObjSet, __vbaObjSetAddRef, __vbaObjAddRef, __vbaCastObj, __vbaCopyBytes, __vbaCopyBytesZero, __vbaRefVarAry` 和 `__vbaAryMove`。您可以继续使用这些带有 `Declare` 语句的函数来支持您偏好的特定签名。此外，olepro32.dll 的声明被重定向到 oleaut32.dll 中的相同函数，因为 olepro32 在 NT4 时就被弃用了，没有 64 位版本。

除了这些特殊情况，项目依赖反向工程的内部实现的情况极为罕见。因此，绝大多数项目无需修改就能运行。

### 如何报告 bug 或其他问题？

最好的方式是在 twinBASIC GitHub 仓库中[创建一个 issue](https://github.com/twinbasic/twinbasic/issues)。

您也可以在 [twinBASIC Discord 服务器](https://discord.gg/UaW9GgKKuE) 的 #bugs 频道中发帖。

### twinBASIC IDE 是否提供其他语言版本？

IDE 目前支持基本的前端 UI 本地化，翻译由社区成员提供。这些可以从 [tB Discord 服务器的 #langpacks 频道](https://discord.com/channels/927638153546829845/1329533568376115282)获得，目前有约 10 种语言，包括法语、德语、意大利语、俄语、简体中文、繁体中文、瑞典语、匈牙利语、希腊语、加泰罗尼亚语和印度尼西亚语（巴哈萨）。写作本文时可能有其他语言已发布；请查看该频道。

内部文本（如悬停信息）尚不支持本地化，但计划在未来支持。

## 安装说明

### twinBASIC 的系统要求是什么？

twinBASIC IDE 支持 Windows 7 到 Windows 11。安装是便携式的；您只需解压下载的 zip 文件然后运行即可；无需安装程序。

需要 WebView2。这通常在较新版本的 Windows 上预装，如果您安装了 Edge 浏览器，它也会随之安装。您也可以从 [Microsoft 网站](https://developer.microsoft.com/en-us/microsoft-edge/webview2?form=MA13LH#download-section)获取。选择独立常青版 x86 版本：

![image](https://github.com/twinbasic/documentation/assets/7834493/94490c87-fafe-4d5b-ae39-d3cedba1c21d)

### twinBASIC 无法运行；提示有无效的入口点。

这个问题有时在 Windows 7 上遇到。要在 Windows 7 上使用，操作系统必须完全更新；这个错误是由于一个或多个缺失的更新导致的。运行 Windows Update 以确保安装了所有最新更新。如果仍有问题，您可以加入 Discord 或在 GitHub 上提交问题（参见[`如何报告 bug 或其他问题？`](https://github.com/twinbasic/documentation/wiki/twinBASIC-Frequently-Asked-Questions-(FAQs)#how-do-i-report-bugs-or-other-problems)）

### 如何安装 twinBASIC？

tB 不需要完整的安装过程，您只需解压 ZIP 文件。从[发布页面](https://github.com/twinbasic/twinbasic/releases)下载最新版本，名为 `twinBASIC_IDE_BETA_xxx.zip`（其中 xxx 是版本号；如果文件列表未显示，点击"Assets"展开），并将 zip 内容解压到您选择的文件夹中。它将从这个文件夹运行；一些设置将放在 AppData 中。

> [!重要提示]
> 强烈建议您要么为每个新版本安装到新文件夹，要么先删除目标文件夹中的所有现有文件。一些异常的 bug 已被追踪到仅仅是试图用新文件覆盖旧安装。

### twinBASIC 的安装大小是多少？

IDE 相当小，目前只有 25MB 的下载量，解压后约 80MB，其中一半是由于 LLVM 库。

### twinBASIC IDE 数据存储在哪里？

除了您解压 IDE 的目录外，twinBASIC 会在 `%APPDATA%\Local\twinBASIC` 创建一个文件夹，并在注册表的 `HKCU\Software\VB and VBA Program Settings\twinBASIC_IDE` 下存储一些设置。

### twinBASIC 是安全的吗？(某些扫描器)说它是恶意的。

任何测试过自己程序的人都知道，除非您的 exe 是 64 位的并且用高级证书签名（甚至可能即使这样做了，直到手动添加到信任列表），在小部分扫描器中出现误报是很正常的。twinBASIC 的 IDE 和编译器可执行文件，像所有处于其位置的应用程序一样，可能会在 VirusTotal 等服务上触发少量报警，特别是 32 位应用程序。这些报警通常不是来自主要供应商，和/或基于"AI"的算法检测。

## 使用指南

### 如何将 VB6 项目导入到 twinBASIC 中？

最简单的方法是通过导入向导。当您首次启动 twinBASIC IDE 时，会看到新建项目对话框——其中包含"从 VBP 导入"选项：

![image](https://github.com/twinbasic/documentation/assets/7834493/7e1cb69c-6db3-4f3f-aea1-c1fae25938a2)

目前这是导入窗体、用户控件和 .res 资源文件的唯一方法。对于标准模块和类模块，您可以通过右键单击项目浏览器中的"Sources"文件夹，并选择导入文件来单独导入它们：

![image](https://github.com/twinbasic/documentation/assets/7834493/60335cfc-3573-489a-90e9-9dbec2b2113c)

>[!注意]
>如果您通过这种方法导入窗体或用户控件，它们目前会被作为纯文本处理，编译器不会识别它们。这将在未来修复。现在，请将这些作为 VBP 项目的一部分导入。

### twinBASIC 支持加载项吗？

twinBASIC IDE 不支持 VB6 和 VBA 的加载项。但是，tB 有自己基于现代 Web 技术的强大加载项基础架构。请参见新建项目对话框的"Samples"标签中的示例 10 到 16。

twinBASIC 支持**创建** VBA 的加载项。它目前是唯一一个支持使用 100% 兼容语法为 64 位 Office 创建这些加载项的工具。请参见示例 4 和示例 5。

### 如何在 twinBASIC 中使用资源？

目前 tB 没有专门的资源编辑器；相反，资源通过项目浏览器管理。在树中，您会看到一个 Resources 文件夹；默认情况下，它将在标准 EXE 中包含 ICON，如果您选择启用可视样式，则包含 MANIFEST：

![image](https://github.com/twinbasic/documentation/assets/7834493/71ddde83-a091-47e3-b5b8-681954b0639d)

您可以在这里创建其他文件夹，使用它们的标准名称。例如，可以添加 BITMAP 组，然后与 `LoadResImage` 一起使用。与其前身不同，tB 不限制资源类型：您可以创建任何类型的文件夹，并导入二进制数据。例如，一些社区项目已经插入了用于 Ribbon 控件的 `UIFILE` 资源和用于属性表的 `DIALOG` 资源。可以通过右键单击要导入资源的文件夹，并从菜单中选择 Add->Import file... 来导入资源。

如果您正在导入项目，链接的 .res 文件中的资源将自动导入。

#### 字符串

字符串表资源目前被特殊处理；它们在 IDE 中作为 JSON 编辑。如果您从带有 .res 的 VBP 导入，字符串资源将自动转换。如果您右键单击"Resources"文件夹，转到"Add"子菜单，在底部，您会找到"Add resource: String table"，它会添加一个填充了示例字符串的表：

![image](https://github.com/twinbasic/documentation/assets/7834493/97cc8655-7a8b-47f3-b52c-eb1ddfce662f)

#### 组名

如果您为标准资源类型创建新文件夹，twinBASIC 目前识别以下名称，您应该使用这些名称在 Resources 下创建文件夹：

BITMAP\
CUSTOM\
CURSOR\
ICON\
MANIFEST\
RCDATA\
STRING\
MESSAGETABLE

对于其他标准类型，您必须使用 #（井号）后跟其数字。例如，对于 DIALOG (RT_DIALOG) 资源，不要将文件夹命名为 dialog，必须命名为 `#5`。ANICURSOR 应命名为 `#21`。依此类推，对于带有 `RT_` 常量的[标准类型](https://learn.microsoft.com/en-us/windows/win32/menurc/resource-types)。对于其他任何类型，您可以使用任何想要的名称，例如 UIFILE 可以直接命名为 UIFILE。

>[!注意]
>目前，.res 文件只能作为 VBP 的一部分导入。

### 如何为我的程序设置自己的图标？

默认情况下，新创建的项目使用 twinBASIC 标志。\
导入的项目使用在设置中选择的窗体的图标。这可以通过相同的方式修改或为所有项目设置：在项目的设置对话框中，有一个"Icon Form"选项，您可以从中选择哪个窗体的图标将用于您的 exe。

如果您不设置该选项，或者您的项目不包含窗体，可以通过 Resources 文件夹手动管理图标。\
如果您还不熟悉在 twinBASIC 中使用资源，请参见上面的 FAQ 条目。在这种情况下，在资源管理器中用于您的应用程序的图标是 Resources\ICON 文件夹中按字母顺序排在第一位的图标。如果您的项目中没有 ICON 文件夹，可以通过右键单击 Resources 文件夹并选择 Add->Add folder 来创建一个。

![image](https://github.com/twinbasic/documentation/assets/7834493/8611d12a-d7a6-48cc-9544-cb27c5299aa5)

在上图中，MyOwnIcon.ico 将被资源管理器和其他应用程序用来表示您的 .exe，因为它在字母顺序上排在 twinBASIC.ico 之前。

请注意，这不会设置为任何窗体的图标；窗体的图标通过属性列表中的"Icon"属性设置。

您可以同时设置 Icon Form 选项并包含其他 ICON 资源。在这种情况下，Icon Form 将优先——它将作为 #1 插入，使其成为第一个可能的条目，因此被资源管理器使用。在这种情况下，不要为 Resources 中的任何其他图标使用 #1，结果可能是不可预测的。