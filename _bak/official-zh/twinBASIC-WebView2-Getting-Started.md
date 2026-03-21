# 入门指南

## 包要求

要创建使用 WebView2 的项目，您的项目必须同时包含 `WinNativeForms` 包和 `WebView2` 包。

这两个包都可以通过 `Project` > `References` 菜单选项，并选择 `TWINPACK PACKAGES` 按钮来添加。确保两个包都被勾选，然后关闭并保存 Settings 文件并重启编译器。

<img src="/images/official/webview2/1.png" alt="Create Package" >
<br>
<br>

一旦您添加了包引用，您应该会发现 WebView2 控件现在可以在窗体设计器中使用：

<img src="/images/official/webview2/2.png" alt="Create Package">
<br>
<br>

## 创建 WebView2 控件

我们像使用任何普通控件一样使用 WebView2 控件：

<img src="/images/official/webview2/3.png" alt="Create Package">
<br>
<br>

## 编写代码
<img src="/images/official/webview2/4.png" alt="Create Package">

## 运行看看
现在你得到了一个纯webui的程序，
<img src="/images/official/webview2/5.png" alt="Create Package">

## WebView2 控件属性

有许多 WebView2 属性和事件可供试验。

<br>
<br>
注意，切换任何属性都会在属性列表底部显示额外信息，为您提供更多详细说明。要获取特定属性的更多信息，请尝试搜索官方 <a href="https://docs.microsoft.com/en-us/microsoft-edge/webview2/">WebView2 文档</a>

## 示例

如果您更喜欢从示例开始，可以查看新建项目对话框中的 `Sample 0.  WebView2 Examples`：
