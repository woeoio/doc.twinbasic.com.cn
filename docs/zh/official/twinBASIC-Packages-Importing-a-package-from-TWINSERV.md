### 从 TWINSERV 导入包

打开要使用包的项目，在其中打开 `Settings` 文件并导航到 References 部分。选择"Available Packages"按钮，服务器上的所有包都应该显示出来：

![432410211-d9f1e4d9-1805-47e5-93aa-251151b4e914](/images/official/2cbdfde0e3bf629040b3613f7e3f6b49.png)
<br>
<br>

如果您勾选其中一个可用的包，它将被下载并导入到项目中：

![432416432-4e4b8e4d-2a1c-42e5-8f4b-5a9b3f523ee8](/images/official/557f8aa9997a1931124a222b516896e6.png)
<br>
<br>

完成后，保存并关闭 Settings 文件，这将导致编译器重新启动。现在您已经可以使用这个包了！在上面显示的例子中，我添加了对 CSharpishStringFormater 包的引用，现在我可以确认我可以在代码中访问包中的组件：

![432417844-e9a3fd21-8e6a-4485-b52c-0c041600826b](/images/official/7d82fa07dbfb4e2b6b5c3e8ecde24e5f.png)
<br>
<br>

注意：如果您有任何已发布的 PRIVATE 包，它们只有在登录后才可用。如果您尚未登录，您将看到一个可以点击登录的警告链接：

![image](/images/official/8ca56580c3e54a3c30d88b24375c50a2.png)
<br>
<br>

登录后，再次按"Available"按钮刷新列表。