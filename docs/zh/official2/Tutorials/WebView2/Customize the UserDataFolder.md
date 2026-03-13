## 自定义 UserDataFolder

在运行时，WebView2 需要一个工作文件夹来存储会话期间使用的数据。默认情况下，会在您的可执行文件所在的文件夹中创建一个名为 `<FileName>.WebView2` 的文件夹（例如 `MyApp.Exe.WebView2`）。如果无法创建此文件夹，WebView2 控件将无法工作（您可以在运行时捕获控件的 Error 事件来确定这一点）。

这种默认行为并不总是合适的。例如，如果您正在为 Microsoft Access 创建插件，那么几乎肯定不允许您在系统 Program Files 文件夹的 Office 子文件夹中创建名为 `MSACCESS.EXE.WebView2` 的文件夹。

**强烈建议**您覆盖默认行为，而是提供一个被认为可以安全用于存储此类数据的路径。要在运行时覆盖 UserDataFolder 路径，请处理 WebView2 控件的 Create 事件。请参阅此处 `示例 9. ActiveX 控件 WebView2 + Monaco` 中的示例，其中我们使用 `%APPDATA%\Local` 系统路径：

<img src="https://twinbasic.com/images/wiki/tbWebView2CreateEvent.png" alt="创建包" width="80%">
<br>
<br>

将 `EnvironmentOptions.UserDataFolder` 属性设置为包含要使用的输出路径的字符串（如有必要将创建文件夹）。
