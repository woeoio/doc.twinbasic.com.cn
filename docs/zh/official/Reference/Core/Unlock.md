---
title: Unlock
parent: Statements
permalink: /tB/Core/Unlock
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '5c401468-700d-43a9-8fa2-a2193c3588ac'
  PropagateID: '5c401468-700d-43a9-8fa2-a2193c3588ac'
  ReservedCode1: '3efa9180-78cd-48f9-a54b-076e0701fc2f'
  ReservedCode2: '3efa9180-78cd-48f9-a54b-076e0701fc2f'
---

# Unlock

释放通过[**Lock**](/official/Reference/Core/Lock)语句获取的锁，恢复其他进程对已打开文件先前锁定区域的访问。

**Unlock**语句与**Lock**一起记录在[**Lock, Unlock**](/official/Reference/Core/Lock)页面上。

语法：
> **Unlock** [ **#** ] *filenumber* **,** [ *recordrange* ]

**Unlock**的参数必须与相应**Lock**语句的参数完全匹配。完整详情见[**Lock, Unlock**](/official/Reference/Core/Lock)。

::: important
务必在关闭文件或退出程序之前用**Unlock**语句移除所有锁。未移除锁会产生不可预测的结果。
:::

### 另请参阅

- [**Lock** 语句](/official/Reference/Core/Lock)
- [**Open** 语句](/official/Reference/Core/Open)
- [**Close** 语句](/official/Reference/Core/Close)