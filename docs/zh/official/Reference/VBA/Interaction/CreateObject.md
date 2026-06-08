---
title: CreateObject
parent: Interaction Module
permalink: /tB/Modules/Interaction/CreateObject
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '03d52897-e00c-4995-a51e-0b191afece23'
  PropagateID: '03d52897-e00c-4995-a51e-0b191afece23'
  ReservedCode1: '688b3d56-fccc-45b3-862f-477d25d365d0'
  ReservedCode2: '688b3d56-fccc-45b3-862f-477d25d365d0'
---

# CreateObject

创建并返回对COM/Automation对象新实例的引用。

语法：**CreateObject(** *class* [ **,** *servername* ] **)**

*class*
: *必需* **Variant**（**String**）。要创建的对象的应用程序名称和类，格式为*appname*.*objecttype*——例如`"Excel.Application"`。也可以CLSID形式提供，格式为`"new:{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}"`。

*servername*
: *可选* **Variant**（**String**）。要在其上创建对象的网络服务器名称——与UNC共享名的*Machine Name*部分相同。对于名为`\\MyServer\Public`的共享，*servername*为`"MyServer"`。如果省略*servername*或提供为零长度字符串(`""`)，则在本地机器上创建对象。

要使用返回的对象，请将其赋给对象变量。将变量声明为`As Object`会导致后期绑定（绑定在运行时发生）；使用特定类类型声明会产生早期绑定（绑定在编译时发生），速度更快并且可以访问对象成员的IntelliSense，但将变量限制为该一种类型。

```vb
Dim ExcelApp As Object
Set ExcelApp = CreateObject("Excel.Application")
ExcelApp.Visible = True
```

如果提供了远程*servername*但远程机器不存在或不可达，则会产生运行时错误。如果对象注册为单实例，则无论调用**CreateObject**多少次，都只会创建一个实例。

::: info
**CreateObject**获取对象的新实例。[**GetObject**](/official/Reference/VBA/Interaction/GetObject)附加到*已运行的*实例——或启动对象的应用程序并加载特定文件。
:::

### 示例

本示例创建Microsoft Excel **Application**对象，使其可见，然后通过**Quit**关闭它，最后释放引用。

```vb
Dim XlApp As Object
Set XlApp = CreateObject("Excel.Application")
XlApp.Visible = True
' ... work with Excel through XlApp ...
XlApp.Quit
Set XlApp = Nothing
```

### 另请参阅

- [GetObject](/official/Reference/VBA/Interaction/GetObject)函数