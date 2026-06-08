---
title: Printers
parent: VB Package
permalink: /tB/Packages/VB/Printers/
---

# Printers 类

**Printers**对象是系统上安装的所有打印机的只读集合。它通过隐式**Printers**全局对象公开——没有用户可调用的构造函数——并为每个设备产生一个[**Printer**](/official/Reference/VB/Printer/)，以**DeviceName**为键。使用它枚举已安装的设备，或通过`Set Printer = Printers(name)`切换活动打印机。

```vb
Dim p As Printer
For Each p In Printers
    Debug.Print p.DeviceName, p.DriverName, p.Port
Next

Set Printer = Printers("HP LaserJet")    ' 将此设为活动打印机
```


## 集合包含的内容

每个条目是绑定到相应设备的[**Printer**](/official/Reference/VB/Printer/)。这些实例是**不可变**描述符——用于标识和传递给`Set Printer = …`，而不是直接运行打印作业。对其任何设置属性赋值会引发运行时错误383（*属性为只读*）；调用[**EndDoc**](/official/Reference/VB/Printer/#enddoc)、[**KillDoc**](/official/Reference/VB/Printer/#killdoc)、[**NewPage**](/official/Reference/VB/Printer/#newpage)、[**Print**](/official/Reference/VB/Printer/#print)或其他文档控制方法会引发运行时错误438（*对象不支持此属性或方法*）。[**TrackDefault**](/official/Reference/VB/Printer/#trackdefault)在这些实例上始终为**False**。

在多个端口上公告单个设备的驱动程序会为每个端口产生一个[**Printer**](/official/Reference/VB/Printer/)条目；只有第一个条目以**DeviceName**为键，其余只能通过数字索引访问。

## 实时枚举

此集合**不被缓存**。每次调用[**Count**](#count)、[**Item**](#item)或`For Each`都会从Windows注册表的配置文件部分重新读取系统的已安装打印机列表，并重建一批新的[**Printer**](/official/Reference/VB/Printer/)实例。因此，在**设置→打印机**中添加或移除的打印机会在下次访问集合时出现，无需从代码刷新。代价是连续访问并不廉价——枚举时，如果需要大量查找，请缓存结果：

```vb
Dim snapshot As Variant : snapshot = Array()      ' 或使用Collection
For Each p In Printers
    snapshot = Array(snapshot, p.DeviceName)      ' （示意）
Next
```

## 索引

数字索引是**从0开始的**，与大多数VB6集合从1开始不同。第一个已安装的打印机是`Printers(0)`；最后一个是`Printers(Printers.Count - 1)`。超出此范围的索引会引发运行时错误9（*下标越范围*）。

字符串索引按**DeviceName**查找——twinBASIC新增；VB6的**Printers**仅支持数字访问。不存在的名称会引发底层集合的运行时错误5（*无效的过程调用或参数*）。

## 属性

### Count

已安装打印机条目的数量。**Long**，只读。每次访问时重新计数——参见[实时枚举](#live-enumeration)。

语法：*object*.**Count**

### Item

返回给定索引处的[**Printer**](/official/Reference/VB/Printer/)。**默认属性**——`Printers(0)`是`Printers.Item(0)`的简写。

语法：*object*.**Item**( *Index* ) **As Printer**

*Index*
: *必需* **Variant**。作为**Long**，集合中从0开始的位置（`0`到`Count - 1`）；超出范围的值引发运行时错误9。作为**String**，打印机的**DeviceName**；未知名称引发运行时错误5。

## 另见

- [Printer](/official/Reference/VB/Printer/) -- 打印机对象本身以及隐式**Printer**全局对象。