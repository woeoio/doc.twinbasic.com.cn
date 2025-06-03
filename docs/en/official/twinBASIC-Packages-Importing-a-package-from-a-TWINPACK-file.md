### Importing a package from a TWINPACK file

To import a package directly from a TWINPACK file (instead of using TWINSERV), follow these steps.

- open the project from which you want to use a package
- open the `Settings` file within it
- navigate to the References section
- select the 'Available Packages' button
![image](/images/official/9ba2115df1581847198f5f5c2b9314a3.png)

- press the 'Import from file...' button:

![image](/images/official/0d2f9a60cd924a02ac1e6e46a0d45e09.png)



- choose the TWINPACK file you want to import, and then it should appear in the references list (ticked):

![image](/images/official/e6ec4678b8ee3b325712c2a2e7b85f18.png)

<br>
<br>

- Save the `Settings` and if needed restart the compiler

Now you're ready to use the package!  In the example shown above I added a reference to the CSharpishStringFormater package, and I can now confirm that I can access components from the package in my code:

![image](/images/official/d5658d7720ab70866e8c7ee289783ba4.png)
<br>
<br>