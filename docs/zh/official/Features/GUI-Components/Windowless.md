---
title: "无窗口控件与有窗口控件"
parent: GUI Components
nav_order: 3
permalink: /Features/GUI-Components/Windowless
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '84abd8e1-3ffb-4b4e-9b09-db12794b3f6f'
  PropagateID: '84abd8e1-3ffb-4b4e-9b09-db12794b3f6f'
  ReservedCode1: '43698fbe-22af-4b62-bf49-c75eb01fef8a'
  ReservedCode2: '43698fbe-22af-4b62-bf49-c75eb01fef8a'
---

# 无窗口控件与普通（有窗口）控件

| 特性 | **无窗口控件** | **普通控件** |
| --- | --- | --- |
| **窗口句柄 (hWnd)** | 无 hWnd；直接绘制在容器的设备上下文 (DC) 上 | 每个都有自己的 hWnd |
| **性能** | 开销更低，渲染更快[^3] | 由于窗口管理，开销更高 |
| **透明和形状** | 支持透明背景和非矩形区域 | 限于不透明的矩形区域 |
| **Z 序行为** | 始终渲染在有窗口控件下方[^4] | 可以浮在其他控件上方 |
| **输入处理** | 需要通过容器手动路由输入（键盘、鼠标） | 操作系统原生处理输入 |
| **无障碍** | 需要通过 `IAccessibleWindowlessSite` 等接口显式支持[^1] | 内置无障碍支持 |
| **已知问题** | 可能需要自定义处理来解决 twinBASIC 中的已知问题（例如，事件不触发）[^2] | 更完整和稳定 |
| **适用场景** | 适合轻量级、静态 UI 元素（例如标签、图像） | 适合交互式或可聚焦控件（例如文本框、按钮） |

---

### 无窗口控件的优势

- **性能提升**：无 hWnd 意味着更少的 GDI 开销——适合包含大量静态元素的窗体。<sup>3</sup>
- **视觉灵活性**：支持透明或自定义形状的 UI 元素（例如圆角按钮、覆盖层）。
- **资源效率**：有助于避免在控件密集的 UI 中达到系统句柄限制。

---

### 缺点

- **复杂的输入处理**：你必须从容器手动转发焦点、鼠标和键盘事件。
- **Z 序限制**：不能出现在有窗口控件上方——对于覆盖层或工具提示有问题。<sup>4</sup>
- **怪癖**：twinBASIC 在无窗口控件事件和其他功能方面存在一些已知问题。<sup>2</sup>
- **无障碍开销**：需要额外工作来暴露无障碍接口。<sup>1</sup>

---

[^1]: [IAccessibleWindowlessSite 接口 - Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/api/oleacc/nn-oleacc-iaccessiblewindowlesssite)
[^2]: 最初报告于 [twinBASIC GitHub Issue #1310 -- 无窗口锚定调整大小 Bug](https://github.com/twinbasic/twinbasic/issues/1310)。已在 BETA 162 中修复。
[^3]: Windows UI 架构中 [GDI 对象句柄](https://learn.microsoft.com/en-us/windows/win32/sysinfo/gdi-objects)和 [hWnd 用户对象句柄](https://learn.microsoft.com/en-us/windows/win32/sysinfo/user-objects)概述：[MSDN -- 窗口资源](https://learn.microsoft.com/en-us/windows/win32/winmsg/about-windows)
[^4]: Z 序渲染和 Windows 控件分层背景：[Windows 控件 - Z 序](https://learn.microsoft.com/en-us/windows/win32/winmsg/window-features#z-order)

---

## 使用场景示例

### 何时选择无窗口控件

- **静态 UI 元素**：适合标签、装饰图像或非交互式覆盖层，此时性能和视觉灵活性是关键。
- **透明或自定义形状元素**：适合圆角按钮、自定义形状覆盖层或透明背景。
- **控件密集的窗体**：在可能超过系统句柄限制的场景中很有用，如包含数百个静态元素的仪表板。

### 何时选择普通（有窗口）控件

- **交互式元素**：适合文本框、按钮、下拉菜单或任何需要用户输入或焦点的控件。
- **分层 UI 组件**：适合工具提示、模态对话框或任何需要浮在其他控件上方的元素。
- **无障碍要求**：适合内置无障碍支持至关重要的应用程序。

### 混合布局

- **结合两种类型**：使用无窗口控件用于静态元素，使用普通控件用于交互式元素，以平衡性能和功能。
- **示例场景**：一个仪表板，静态标签和图表（无窗口）旁边是交互式筛选器和按钮（有窗口）。

---

## 实际示例

### 无窗口控件示例

- **[SweetIceLolly/VB6-MemoryDC](https://github.com/SweetIceLolly/VB6-MemoryDC)** — 一个使用内存设备上下文进行离屏渲染的 VB6 项目。非常适合说明自定义绘制的无窗口 UI 元素。
- **[fafalone/WinDevLib](https://github.com/fafalone/WinDevLib)** — 一个具有底层 Win32 API 封装的 twinBASIC 库。包括绕过 hWnd 的自定义渲染和控件逻辑示例。
- **[fafalone/EventTrace](https://github.com/fafalone/EventTrace)** — ETW 文件活动监视器的 twinBASIC 移植。使用轻量级的非窗口 UI 元素以提升性能。

### 有窗口控件示例

- **[fafalone/UIRibbonDemos](https://github.com/fafalone/UIRibbonDemos)** — Windows Ribbon UI 框架的 twinBASIC 演示。展示具有完整无障碍支持和 Z 序行为的交互式 hWnd 支持的控件。
- **[SweetIceLolly/DragControlsIDE](https://github.com/SweetIceLolly/DragControlsIDE)** — 基于 VB6 的类 IDE 接口，具有可拖动的有窗口控件。用于演示布局和锚定行为。
- **[SweetIceLolly/DragControlsIDE-v2](https://github.com/SweetIceLolly/DragControlsIDE-v2)** — 上述项目的更新版本。
- **[bclothier/TwinBasicSevenZip](https://github.com/bclothier/TwinBasicSevenZip)** — 7-Zip COM 集成的 twinBASIC 封装。包含使用标准有窗口控件的文件选择和进度 UI。

---

### 在 VBx/twinBASIC 中打印混合控件窗体

#### 开箱即用的功能

* **有窗口控件**（例如 `TextBox`、`CommandButton`）通常可以在 VB6 中使用 `Form.DrawToDC` 或 `PrintForm` 捕获，或在 twinBASIC 中通过渲染窗体的 `hDC` 来捕获。
* **无窗口控件**没有自己的 `hWnd` 或设备上下文，因此除非你显式绘制它们，否则它们不会出现。

---

#### 推荐策略

1. **将整个窗体渲染到位图**

   * 在 VB6 中：使用 `BitBlt` 或 `PaintPicture` 复制窗体的可见区域。
   * 在 TwinBASIC 中：使用窗体的 [`Canvas`](/official/Reference/CustomControls/Framework/Canvas) 或 [`ICustomControl.Paint`](/official/Reference/CustomControls/Framework/ICustomControl#paint) 逻辑手动将无窗口元素渲染到位图。参见 [CustomControls 包参考](/official/Reference/CustomControls/) 获取完整框架 API。

2. **确保无窗口控件被绘制**

   * 对于使用 [`ICustomControl.Paint`](/official/Reference/CustomControls/Framework/ICustomControl#paint) 的[自定义控件](/official/Reference/CustomControls/)，手动调用其绘制例程到同一个位图或 `DC`。
   * 如果使用 [`Canvas.RuntimeUICCCanvasAddElement`](/official/Reference/CustomControls/Framework/Canvas#runtimeuicccanvasaddelement)，使用与运行时相同的布局逻辑模拟一次绘制。

3. **将位图发送到打印机**

   * 在 VB6 中使用 `Printer.PaintPicture` 或在 twinBASIC 中使用 `Printer.Canvas.DrawImage`（如果可用）。
   * 或者，使用 `GDI` 或 `GDI+` API 将位图发送到打印机的 `DC`。

---

#### 精度提示

* **Z 序很重要**：由于无窗口控件在有窗口控件后面渲染，应先绘制它们。
* **DPI 感知**：将打印机的 DPI 与窗体的布局比例匹配以避免模糊输出。
* **离屏渲染**：考虑在打印前先渲染到内存 `DC` 或 `StdPicture` 对象以避免闪烁或部分绘制。

---

#### twinBASIC 代码片段

```vb
' Example: Printing a Mixed-Control Form in twinBASIC
Dim bmp As StdPicture
Set bmp = CreateCompatibleBitmap(Me.Width, Me.Height)

' Render windowless controls
For Each ctrl In Me.Controls
    If TypeOf ctrl Is ICustomControl Then
        ctrl.Paint bmp.Canvas
    End If
Next

' Render windowed controls 
Me.DrawToDC bmp.Canvas

' Send to printer 
Printer.Canvas.DrawImage bmp, 0, 0
Printer.EndDoc
```
---

对于 DPI 感知的多显示器布局工作，无窗口控件很有用——尤其是用于静态或装饰元素——但在涉及交互性或分层时需要更多手动处理。如果你正在构建混合布局，结合两种类型可能给你两全其美的效果。