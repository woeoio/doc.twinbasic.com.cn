# 锚定

twinBASIC 窗体设计器中的一个新特性是"Anchors"属性：

![image](https://github.com/twinbasic/documentation/assets/7834493/b26da59b-4e98-40b7-b97b-bb3cef4ca1d0)

点击左侧的箭头会展开提供 4 个选项：

![image](https://github.com/twinbasic/documentation/assets/7834493/d5dff8f5-c5fa-4620-ba11-430d06276b27)

这些选项控制在调整窗体大小时是否保持每个点相对于其父窗体或控件容器边界的位置。默认情况下，它表现出预期的行为：top 和 left 保持不变，除非您通过代码手动操作（通常在 `Form_Resize` 事件中），否则控件不会随窗体调整大小或移动。这些选项提供了自动处理大小调整和移动的替代方案。

如果一个控件在所有 4 个位置都锚定，它将随窗体在两个维度上调整大小：

![image](https://github.com/twinbasic/documentation/assets/7834493/fddbffa9-2b71-47f5-b925-e67fc66b9e5c)

如您所见，所有锚点都与边缘保持恒定距离，导致控件调整了大小。如果您只锚定 Top、Left 和 Bottom，它将在垂直方向调整大小，但不会在水平方向调整：

![image](https://github.com/twinbasic/documentation/assets/7834493/3fa1cf2b-0af5-44ae-ae6a-3c0662f51f57)

Right 没有锚定到边缘，所以它不会随边缘移动。

如果您移除 Top 和 Left 的锚定（False）但保持 Right 和 Bottom 的锚定（True），控件将随 Bottom 和 Right 移动：

![image](https://github.com/twinbasic/documentation/assets/7834493/0aeb25f6-d864-4ebb-a9f5-bbd7b5d242e8)

控件保持相同的大小，由于 Right 和 Bottom 锚定到边缘，它们随窗体移动，导致整个控件移动。

### 控件容器

上面的示例说明了这在直接放置在窗体上的控件中如何工作。但如果它们在 Frame 或其他控件容器内部呢？锚点是相对于它们的父级的，所以调整窗体大小不会调整或移动 Frame 内的控件，除非 Frame 也以会改变其大小/位置的方式锚定。

例如，如果一个 TextBox 在所有 4 个点都锚定，并且位于一个在所有 4 个点都锚定的 Frame 内，那么它将随 Frame 调整大小：

![image](https://github.com/twinbasic/documentation/assets/7834493/4829696d-788b-40ee-bebd-5afa44477460)

如果我们移除 TextBox 的 Bottom 锚定，但不移除 Frame 的，Frame 将沿底部调整大小，但 TextBox 不会：

![image](https://github.com/twinbasic/documentation/assets/7834493/bc9f3756-a14b-4ee7-b819-6822497b640a)


使用这 4 个点，您可以自动维护相对大小、位置或两者，而无需手动编写任何代码。

> [!提示]
> 提醒一下，twinBASIC 还为窗体添加了 `MinWidth`、`MinHeight`、`MaxWidth` 和 `MaxHeight` 属性，所以这些也可以与控件锚点结合使用进行自动管理。您可能需要设置最小大小以防止控件消失。

# 停靠

与锚定类似但略有不同，tB 还提供了"Dock"属性：

![image](https://github.com/twinbasic/documentation/assets/7834493/4c8b881e-1216-4819-a558-d2ce20f47fcd)

您可能已经熟悉状态栏控件如何锁定在窗体底部；这就是此属性控制的定位类型。控件可以停靠在任何一侧，它将保持窗体或父容器该侧的全宽度或高度，并随之移动。例如，一个设置了 `vbDockBottom` 的命令按钮：

![image](https://github.com/twinbasic/documentation/assets/7834493/599a66ad-31d5-449f-bbf5-00963fe9aa2a)

除了四个边之外，还有一个最终选项：`vbDockFill`。这将使控件填充其整个父区域。当与 PictureBox 或 Frame 等容器一起使用时最有用 -- 当它是该容器的子项时，它将只填充该容器，而不是整个窗体。

`vbDockFill` 将排除其他已停靠的控件，所以您可以例如让一个控件使用 `vbDockRight`，另一个使用 `vbDockFill` 覆盖窗体或容器的其余部分，而第一个控件保持在右侧位置。

### 多个控件

正如上一节末尾所暗示的，可以将多个控件停靠在同一位置，例如将命令按钮和文本框停靠在底部。以下示例还显示了一个带有上面提到的 `vbDockRight` + `vbDockFill` 的 PictureBox 控件：

![image](https://github.com/twinbasic/documentation/assets/7834493/80185a8d-2952-415f-bc02-ec3ddea89568)

> [!提示]
> 在同一位置停靠的两个（或更多）控件的顺序由哪个先设置决定。目前不能通过拖动重新排列，但您可以将停靠属性设回 none，然后按所需顺序重新设置。