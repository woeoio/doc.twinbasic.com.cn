---
title: 无窗口控件与有窗口控件
parent: GUI 组件
nav_order: 3
permalink: /Features/GUI-Components/Windowless
redirect-from:
  - /Features/Windowless
---

# 无窗口控件与常规（有窗口）控件

| 功能 | **无窗口控件** | **常规控件** |
| --- | --- | --- |
| **窗口句柄 (hWnd)** | 无 hWnd；直接绘制在容器的设备上下文 (DC) 上 | 每个控件都有自己的 hWnd |
| **性能** | 开销较低，渲染更快<sup>3</sup> | 由于窗口管理导致开销较高 |
| **透明度和形状** | 支持透明背景和非矩形区域 | 限于矩形、不透明区域 |
| **Z 顺序行为** | 始终渲染在有窗口控件下方<sup>4</sup> | 可以浮动在其他控件上方 |
| **输入处理** | 需要通过容器手动路由输入（键盘、鼠标） | 操作系统原生处理输入 |
| **可访问性** | 需要通过接口（如 `IAccessibleWindowlessSite`）明确支持<sup>1</sup> | 内置可访问性支持 |
| **已知问题** | 可能需要自定义处理来解决 twinBASIC 中的已知问题（例如，事件不触发）<sup>2</sup> | 更完整和稳定 |
| **用例适配** | 适合轻量级、静态 UI 元素（例如，标签、图像） | 最适合交互或可聚焦控件（例如，文本框、按钮） |

---

### ✅ **无窗口控件的好处**

- **性能提升**：没有 hWnd 意味着更少的 GDI 开销——非常适合具有许多静态元素的窗体。<sup>3</sup>
- **视觉灵活性**：启用透明或成形 UI 元素（例如，圆角按钮、覆盖层）。
- **资源效率**：有助于避免在控件繁重的 UI 中达到系统句柄限制。

---

### ⚠️ **缺点**

- **复杂的输入处理**：您必须手动从容器转发焦点、鼠标和键盘事件。
- **Z 顺序限制**：不能出现在有窗口控件上方——对于覆盖层或工具提示有问题。<sup>4</sup>
- **怪癖**：twinBASIC 在无窗口控件事件和其他功能方面存在一些已知问题。<sup>2</sup>
- **可访问性开销**：需要额外工作来暴露可访问性接口。<sup>1</sup>

---

<sup>1</sup> [Microsoft Learn 上的 IAccessibleWindowlessSite 接口](https://learn.microsoft.com/en-us/windows/win32/api/oleacc/nn-oleacc-iaccessiblewindowlesssite)

<sup>2</sup> 最初在 [twinBASIC GitHub 问题 #1310 – 无窗口锚定调整大小错误](https://github.com/twinbasic/twinbasic/issues/1310) 中报告。在 BETA 162 中修复。

<sup>3</sup> Windows UI 架构中 [GDI 对象句柄](https://learn.microsoft.com/en-us/windows/win32/sysinfo/gdi-objects) 和 [hWnd 用户对象句柄](https://learn.microsoft.com/en-us/windows/win32/sysinfo/user-objects) 的概述：[MSDN – 窗口资源](https://learn.microsoft.com/en-us/windows/win32/winmsg/window-resources)

<sup>4</sup> Z 顺序渲染和 Windows 控件分层的背景：[Windows 控件 - Z 顺序](https://learn.microsoft.com/en-us/windows/win32/winmsg/window-features#z-order)

---

## 用例示例

### 何时选择无窗口控件

- **静态 UI 元素**：非常适合标签、装饰图像或非交互式覆盖层，其中性能和视觉灵活性是关键。
- **透明或成形元素**：圆角按钮、自定义形状覆盖层或透明背景的完美选择。
- **控件繁重的窗体**：在可能超过系统句柄限制的场景中有用，例如具有数百个静态元素的控制面板。

### 何时选择常规（有窗口）控件

- **交互元素**：最适合文本框、按钮、下拉菜单或任何需要用户输入或焦点的控件。
- **分层 UI 组件**：工具提示、模态对话框或任何需要浮动在其他控件上方的元素必需。
- **可访问性要求**：在内置可访问性支持至关重要的应用程序中推荐。

### 混合布局

- **组合两种类型**：对静态元素使用无窗口控件，对交互元素使用常规控件，以平衡性能和功能。
- **示例场景**：带有静态标签和图形（无窗口）以及交互过滤器和按钮（有窗口）的控制面板。

---

## 真实世界示例

### 🪟 无窗口控件示例

- **[SweetIceLolly/VB6-MemoryDC](https://github.com/SweetIceLolly/VB6-MemoryDC)** – 一个 VB6 项目，演示使用内存设备上下文进行离屏渲染。非常适合说明自定义绘制的无窗口 UI 元素。
- **[fafalone/WinDevLib](https://github.com/fafalone/WinDevLib)** – 一个具有低级 Win32 API 包装器的 twinBASIC 库。包括绕过 hWnd 的自定义渲染和控件逻辑的示例。
- **[fafalone/EventTrace](https://github.com/fafalone/EventTrace)** – 一个 ETW 文件活动监视器的 twinBASIC 移植。为性能使用轻量级、非窗口 UI 元素。

### 🧱 有窗口控件示例

- **[fafalone/UIRibbonDemos](https://github.com/fafalone/UIRibbonDemos)** – Windows 功能区 UI 框架的 twinBASIC 演示。展示了具有完整可访问性和 Z 顺序行为的交互式、支持 hWnd 的控件。
- **[SweetIceLolly/DragControlsIDE](https://github.com/SweetIceLolly/DragControlsIDE)** – 一个具有可拖动、有窗口控件的基于 VB6 的类似 IDE 的界面。对演示布局和锚定行为有用。
- **[SweetIceLolly/DragControlsIDE-v2](https://github.com/SweetIceLolly/DragControlsIDE-v2)** - 上述的更新版本。
- **[bclothier/TwinBasicSevenZip](https://github.com/bclothier/TwinBasicSevenZip)** – 7-Zip COM 集成的 twinBASIC 包装器。包括用于文件选择和进度的标准有窗口控件的 UI。

---

### 🖨️ 在 VBx/twinBASIC 中打印混合控件窗体

#### ✅ 开箱即用的功能

* **有窗口控件**（例如，`TextBox`、`CommandButton`）通常可以使用 VB6 中的 `Form.DrawToDC` 或 `PrintForm` 捕获，或通过 twinBASIC 中渲染窗体的 `hDC` 捕获。
* **无窗口控件**，然而，没有自己的 `hWnd` 或设备上下文，因此除非您明确绘制它们，否则它们不会出现。

---

#### 🧰 推荐策略

1. **将整个窗体渲染为位图**

   * 在 VB6 中：使用 `BitBlt` 或 `PaintPicture` 复制窗体的可见区域。
   * 在 TwinBASIC 中：使用窗体的 `Canvas` 或 `ICustomControl.Paint` 逻辑手动将无窗口元素渲染到位图。

2. **确保绘制无窗口控件**

   * 对于使用 `ICustomControl.Paint` 的自定义控件，手动调用它们的绘制例程到相同的位图或 `DC`。
   * 如果使用 `Canvas.AddElement`，使用运行时使用的相同布局逻辑模拟绘制过程。

3. **将位图发送到打印机**

   * 在 VB6 中使用 `Printer.PaintPicture` 或在 twinBASIC 中使用 `Printer.Canvas.DrawImage`（如果可用）。
   * 或者，使用 `GDI` 或 `GDI+` API 将位图发送到打印机的 `DC`。

---

#### 🧪 准确性提示

* **Z 顺序很重要**：由于无窗口控件渲染在有窗口控件后面，首先绘制它们。
* **DPI 感知**：将打印机的 DPI 与窗体的布局比例匹配，以避免模糊输出。
* **离屏渲染**：考虑在打印前渲染到内存 `DC` 或 `StdPicture` 对象，以避免闪烁或部分绘制。

---

#### twinBASIC 代码片段

``` vb
' 示例：在 twinBASIC 中打印混合控件窗体
Dim bmp As StdPicture
Set bmp = CreateCompatibleBitmap(Me.Width, Me.Height)

' 渲染无窗口控件
For Each ctrl In Me.Controls
    If TypeOf ctrl Is ICustomControl Then
        ctrl.Paint bmp.Canvas
    End If
Next

' 渲染有窗口控件
Me.DrawToDC bmp.Canvas

' 发送到打印机
Printer.Canvas.DrawImage bmp, 0, 0
Printer.EndDoc
```
---

对于 DPI 感知、多显示器布局工作，无窗口控件可以是一个强大的工具——特别是对于静态或装饰元素——但当涉及交互或分层时，它们需要更多的协调。如果您正在构建混合布局，两种类型的组合可能会给您带来两全其美的效果。