---
title: 调试
parent: 编译器和 IDE 功能
nav_order: 2
permalink: /Features/Compiler-IDE/Debugging
---

# 调试功能
twinBASIC 包含多个有助于调试的功能。

## 调试跟踪日志记录器

调试体验中的新功能是一个强大的跟踪日志记录功能，可以自动创建详细日志到调试控制台或文件。可以使用 `Debug.TracePrint` 将消息输出到新系统。日志记录器在从 IDE 运行和编译的可执行文件中都有效。

![image](../Images/4fc2bf99-2bec-4943-837d-21038d791574.png)

## 陈旧/悬空指针检测

在使用已释放的 Strings 和 Variants 后会产生错误。如果内存尚未被覆盖，可能不会立即注意到，但这有时很难检测，并可能导致问题，如 String 显示其先前的值或垃圾数据。此调试选项检测释放后使用，并用指示问题的特殊符号替换数据。

下面显示了一个示例，其中 ListView ColumnHeader 文本已由先前释放的字符串设置，并被此功能检测到：

![image](../Images/021f6cbf-acce-445d-ade7-3fcad0af4927.png)

以前，它在某些情况下为每个列显示相同的文本——但这导致问题被忽视很长时间。