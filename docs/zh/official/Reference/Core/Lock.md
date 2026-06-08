---
title: Lock, Unlock
parent: Statements
permalink: /tB/Core/Lock
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e7828a2e-e447-405f-b96b-43623deb4850'
  PropagateID: 'e7828a2e-e447-405f-b96b-43623deb4850'
  ReservedCode1: '2036f6b6-9df6-426e-9298-d813a0156a06'
  ReservedCode2: '2036f6b6-9df6-426e-9298-d813a0156a06'
---

# Lock, Unlock

控制其他进程对使用 [**Open**](/official/Reference/Core/Open) 语句打开的文件的全部或部分的访问。

语法：
- > **Lock** [ **#** ] *filenumber* **,** [ *recordrange* ]
- > **Unlock** [ **#** ] *filenumber* **,** [ *recordrange* ]

*filenumber*
: 任何有效的文件号。

*recordrange*
: *可选* 要锁定或解锁的记录范围。*recordrange* 设置为：

  > *recnumber* \| [ *start* ] **To** *end*

  *recnumber*
  : 开始锁定或解锁的记录号（**Random** 模式文件）或字节号（**Binary** 模式文件）。

  *start*
  : 要锁定或解锁的第一条记录或字节的编号。

  *end*
  : 要锁定或解锁的最后一条记录或字节的编号。

**Lock** 和 **Unlock** 语句用于多个进程可能需要访问同一文件的环境。

**Lock** 和 **Unlock** 语句总是成对使用。**Lock** 和 **Unlock** 的参数必须完全匹配。

文件中的第一条记录或字节位于位置1，第二条位于位置2，依此类推。当只指定一条记录时，仅锁定或解锁该记录。当指定记录范围且省略起始记录（*start*）时，从第一条记录到范围末尾（*end*）的所有记录被锁定或解锁。使用不带 *recnumber* 的 **Lock** 锁定整个文件；使用不带 *recnumber* 的 **Unlock** 解锁整个文件。

如果文件已为顺序输入或输出打开，**Lock** 和 **Unlock** 影响整个文件，无论 *start* 和 *end* 指定的范围如何。

::: important
在关闭文件或退出程序之前，务必用 **Unlock** 语句移除所有锁定。未能移除锁定会产生不可预测的结果。
:::

### 示例

本示例说明 **Lock** 和 **Unlock** 语句的使用。当记录被修改时，其他进程对该记录的访问被拒绝。本示例假设 `TESTFILE` 是包含用户自定义类型 `Record` 的五条记录的文件。

```vb
Type Record    ' Define user-defined type.
    ID As Integer
    Name As String * 20
End Type

Dim MyRecord As Record, RecordNumber    ' Declare variables.
' Open sample file for random access.
Open "TESTFILE" For Random Shared As #1 Len = Len(MyRecord)
RecordNumber = 4    ' Define record number.
Lock #1, RecordNumber    ' Lock record.
Get #1, RecordNumber, MyRecord    ' Read record.
MyRecord.ID = 234    ' Modify record.
MyRecord.Name = "John Smith"
Put #1, RecordNumber, MyRecord    ' Write modified record.
Unlock #1, RecordNumber    ' Unlock current record.
Close #1    ' Close file.
```

### 另请参阅

- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)
- [**Get** 语句](/official/Reference/Core/Get)
- [**Put** 语句](/official/Reference/Core/Put)