### 更新包

当您加载项目时，如果 TWINSERV 上有项目中某个包的新版本可用，编译器会通知您：

![image](https://github.com/user-attachments/assets/db4636f6-d988-4e31-94a2-c4c170418e81)


如果您发现 TWINSERV 上有可用的更新包，您必须首先通过取消选择来从项目中移除旧包。打开 Settings 到 References 并取消勾选该复选框。然后系统会提示您从文件系统中移除它：

![415937809-87a11bc3-9a9c-4551-86c2-69d206d95087](https://github.com/user-attachments/assets/a1331a0e-3ba3-45cf-8dc3-2e24f0fa1fe6)
<br/>
<br/>
<br/>

选择"Remove it"。

然后转到 Available Packages 标签页，勾选最新版本的复选框，并**在下载完成后**（由于某些包有几 MB 大小，可能需要几秒钟）保存更改。在调试控制台中，您首先会看到：

`[PACKAGES] downloading package '{1FCDB98D-617D-4995-9736-2ED0E4746A10}/8/7/0/498' from the online database... `

然后当出现第二条消息说：

`[PACKAGES] downloading package '{1FCDB98D-617D-4995-9736-2ED0E4746A10}/8/7/0/498' from the online database... [DONE]`

时就完成了，可以保存了。它还会从复选框旋转变为条目移到顶部（在内置包下面），并在前面加上 `[IMPORTED]`。

如果保存后编译器没有自动重启，请手动重启编译器，但通常它会自动重启。

**注意：** 将来会有一个简单的更新选项。请留意该变更。