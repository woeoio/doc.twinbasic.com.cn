# 锚定

twinBASIC 窗体设计器中的一个新特性是"Anchors"属性：

![image](/images/official/6c64872cf8de2835e87116179947ca9f.png)

点击左侧的箭头会展开提供 4 个选项：

![image](/images/official/500f527e0b1bf7352d9043644e7f0bdd.png)

这些选项控制在调整窗体大小时是否保持每个点相对于其父窗体或控件容器边界的位置。默认情况下，它表现出预期的行为：top 和 left 保持不变，除非您通过代码手动操作（通常在 `Form_Resize` 事件中），否则控件不会随窗体调整大小或移动。这些选项提供了自动处理大小调整和移动的替代方案。

如果一个控件在所有 4 个位置都锚定，它将随窗体在两个维度上调整大小：

![image](/images/official/c83c6b02cbd567654b3371b7bd35791b.png)

如您所见，所有锚点都与边缘保持恒定距离，导致控件调整了大小。如果您只锚定 Top、Left 和 Bottom，它将在垂直方向调整大小，但不会在水平方向调整：

![image](/images/official/f4082702d270ccc09d1c435a544d26d5.png)

Right 没有锚定到边缘，所以它不会随边缘移动。

如果您移除 Top 和 Left 的锚定（False）但保持 Right 和 Bottom 的锚定（True），控件将随 Bottom 和 Right 移动：

![image](/images/official/d6366fbadfc961e72f0d0c0ac298a115.png)

控件保持相同的大小，由于 Right 和 Bottom 锚定到边缘，它们随窗体移动，导致整个控件移动。

### 控件容器

上面的示例说明了这在直接放置在窗体上的控件中如何工作。但如果它们在 Frame 或其他控件容器内部呢？锚点是相对于它们的父级的，所以调整窗体大小不会调整或移动 Frame 内的控件，除非 Frame 也以会改变其大小/位置的方式锚定。

例如，如果一个 TextBox 在所有 4 个点都锚定，并且位于一个在所有 4 个点都锚定的 Frame 内，那么它将随 Frame 调整大小：

![image](/images/official/bc5401fa2c558f56fc49b8b3fd4cc395.png)

如果我们移除 TextBox 的 Bottom 锚定，但不移除 Frame 的，Frame 将沿底部调整大小，但 TextBox 不会：

![image](/images/official/249ced710898c75f14f3d3c0d4aa21b1.png)


使用这 4 个点，您可以自动维护相对大小、位置或两者，而无需手动编写任何代码。

> [!提示]
> 提醒一下，twinBASIC 还为窗体添加了 `MinWidth`、`MinHeight`、`MaxWidth` 和 `MaxHeight` 属性，所以这些也可以与控件锚点结合使用进行自动管理。您可能需要设置最小大小以防止控件消失。

# 停靠

与锚定类似但略有不同，tB 还提供了"Dock"属性：

![image](/images/official/3d44d70d305a2a2806f6db2fa1a3a331.png)

您可能已经熟悉状态栏控件如何锁定在窗体底部；这就是此属性控制的定位类型。控件可以停靠在任何一侧，它将保持窗体或父容器该侧的全宽度或高度，并随之移动。例如，一个设置了 `vbDockBottom` 的命令按钮：

![image](/images/official/bdd901b9341b34e77d7421cc1477907e.png)

除了四个边之外，还有一个最终选项：`vbDockFill`。这将使控件填充其整个父区域。当与 PictureBox 或 Frame 等容器一起使用时最有用 -- 当它是该容器的子项时，它将只填充该容器，而不是整个窗体。

`vbDockFill` 将排除其他已停靠的控件，所以您可以例如让一个控件使用 `vbDockRight`，另一个使用 `vbDockFill` 覆盖窗体或容器的其余部分，而第一个控件保持在右侧位置。

### 多个控件

正如上一节末尾所暗示的，可以将多个控件停靠在同一位置，例如将命令按钮和文本框停靠在底部。以下示例还显示了一个带有上面提到的 `vbDockRight` + `vbDockFill` 的 PictureBox 控件：

![image](/images/official/02e2d7adf8f711a89a72f7e03c4d5975.png)

> [!提示]
> 在同一位置停靠的两个（或更多）控件的顺序由哪个先设置决定。目前不能通过拖动重新排列，但您可以将停靠属性设回 none，然后按所需顺序重新设置。