---
title: Partition
parent: Interaction Module
permalink: /tB/Modules/Interaction/Partition
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bc8ad254-7bef-4c04-bba0-dcbc6c0a8b59'
  PropagateID: 'bc8ad254-7bef-4c04-bba0-dcbc6c0a8b59'
  ReservedCode1: '25b374c0-1cca-4253-979b-df5541a5b8a4'
  ReservedCode2: '25b374c0-1cca-4253-979b-df5541a5b8a4'
---

# Partition

返回一个**Variant**（**String**），标记某个值落入一系列等宽数值范围中的哪一个。

语法：**Partition(** *number* **,** *start* **,** *stop* **,** *interval* **)**

*number*
: *必需* 要针对范围评估的值。

*start*
: *必需* 开始整体范围的数字。不得小于0。

*stop*
: *必需* 结束整体范围的数字。不得小于或等于*start*。

*interval*
: *必需* 每个单独范围的宽度。不得小于1。

返回值标识*number*落入的特定范围，格式为`"<lowervalue>: <uppervalue>"`。**Partition**在查询中最有用——例如按运费成本区间分组订单的SQL `SELECT`。

下表显示了三组*start*、*stop*和*interval*的示例范围确定方式。*Before First*列是**Partition**对*number*低于*start*时返回的内容；*After Last*列是对*number*高于*stop*时返回的内容。

| *start* | *stop* | *interval* | Before First | First Range | Last Range | After Last |
|--------:|-------:|-----------:|:-------------|:------------|:-----------|:-----------|
| 0       | 99     | 5          | `" :-1"`     | `"  0:  4"` | `" 95: 99"`| `" 100:   "` |
| 20      | 199    | 10         | `"   : 19"`  | `"  20: 29"`| `" 190:199"`| `" 200:   "` |
| 100     | 1010   | 20         | `"   : 99"`  | `" 100: 119"`| `"1000:1010"`| `"1011:   "` |

在第三行中，*start*和*stop*不能被*interval*整除：最后一个范围扩展到*stop*（覆盖11个数字），即使*interval*为20。

如有必要，**Partition**在范围的每一端填充前导空格，使冒号左右两侧的字符数与*stop*中的字符数加一相同。这使标签在纯文本排序下保持正确顺序。

如果*interval*为1，范围折叠为*number:number*，无论*start*和*stop*如何。

任何参数都可以是十进制值，但在处理前四舍五入到最接近的偶数整数。如果任何参数为**Null**，**Partition**返回**Null**。

### 示例

本示例在SQL `SELECT`中使用**Partition**统计运费落入每个范围的订单数量。*start* = 0，*stop* = 500，*interval* = 50，第一个范围为`"  0: 49"`，依此类推到500。

```sql
SELECT DISTINCTROW Partition([Freight], 0, 500, 50) AS Range,
                   Count(Orders.Freight)            AS [Count]
FROM Orders
GROUP BY Partition([Freight], 0, 500, 50);
```