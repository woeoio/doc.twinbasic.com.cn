### 从 TWINPACK 文件导入包

要直接从 TWINPACK 文件导入包（而不是使用 TWINSERV），请按照以下步骤操作。

- 打开要使用包的项目
- 在其中打开 `Settings` 文件
- 导航到 References 部分
- 选择"Available Packages"按钮
![image](/images/official/9ba2115df1581847198f5f5c2b9314a3.png)

- 点击"Import from file..."按钮：

![image](/images/official/0d2f9a60cd924a02ac1e6e46a0d45e09.png)

- 选择要导入的 TWINPACK 文件，然后它应该出现在引用列表中（已勾选）：

![image](/images/official/e6ec4678b8ee3b325712c2a2e7b85f18.png)

<br>
<br>

- 保存 `Settings` 文件，如果需要的话重启编译器

现在您已经可以使用这个包了！在上面显示的例子中，我添加了对 CSharpishStringFormater 包的引用，现在我可以确认我可以在代码中访问包中的组件：

![image](/images/official/d5658d7720ab70866e8c7ee289783ba4.png)
<br>
<br>