---
title: "Constants 模块"
parent: VBA Package
permalink: /tB/Modules/Constants/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'dae1fb0b-1de8-4549-9916-9e363d0d2e39'
  PropagateID: 'dae1fb0b-1de8-4549-9916-9e363d0d2e39'
  ReservedCode1: '4308bd1d-328f-4ca0-bf8d-4a650f9177e4'
  ReservedCode2: '4308bd1d-328f-4ca0-bf8d-4a650f9177e4'
---

# Constants 模块

## 常量

**vbBack**
: 退格字符——**Chr(8)**。

**vbCr**
: 回车字符——**Chr(13)**。

**vbCrLf**
: 回车+换行组合——**Chr(13) & Chr(10)**。

**vbFormFeed**
: 换页字符——**Chr(12)**。

**vbLf**
: 换行字符——**Chr(10)**。

**vbNewLine**
: 平台适用的换行字符。在 twinBASIC 中，与 **vbCrLf** 相同。

**vbNullChar**
: 空字符——**Chr(0)**。

**vbNullPtr**
: **LongPtr** 类型的空指针（零），用于接受指针或句柄参数的 API 声明。

**vbNullString**
: 空字符串指针。与零长度字符串 `""` 不同；用于调用需要区分空指针和空字符串的外部过程。

**vbObjectError**
: 用户自定义错误号的基础值——**&H80040000** (-2147221504)。用户自定义错误号应大于此值；例如 `Err.Raise vbObjectError + 1000`。

**vbTab**
: 制表符——**Chr(9)**。

**vbVerticalTab**
: 垂直制表符——**Chr(11)**。

## 枚举

- [VbAppWinStyle](/official/Reference/VBA/Constants/VbAppWinStyle) -- **Shell** 函数的窗口样式值
- [VbArchitecture](/official/Reference/VBA/Constants/VbArchitecture) -- 处理器架构标识符
- [VbCalendar](/official/Reference/VBA/Constants/VbCalendar) -- 日历类型值（公历或回历）
- [VbCallType](/official/Reference/VBA/Constants/VbCallType) -- **CallByName** 的过程调用类型值
- [VbCompareMethod](/official/Reference/VBA/Constants/VbCompareMethod) -- 字符串函数的文本比较模式
- [VbDateTimeFormat](/official/Reference/VBA/Constants/VbDateTimeFormat) -- **FormatDateTime** 的格式代码
- [VbDayOfWeek](/official/Reference/VBA/Constants/VbDayOfWeek) -- 日期函数的星期常量
- [VbFileAttribute](/official/Reference/VBA/Constants/VbFileAttribute) -- **Dir**、**GetAttr** 和 **SetAttr** 的文件属性标志
- [VbFirstWeekOfYear](/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- 日期函数的年份首周选择器
- [VbIMEStatus](/official/Reference/VBA/Constants/VbIMEStatus) -- 输入法编辑器状态值
- [VbMsgBoxResult](/official/Reference/VBA/Constants/VbMsgBoxResult) -- **MsgBox** 返回的值
- [VbMsgBoxStyle](/official/Reference/VBA/Constants/VbMsgBoxStyle) -- **MsgBox** 的按钮、图标和行为标志
- [VbStrConv](/official/Reference/VBA/Constants/VbStrConv) -- **StrConv** 的转换类型标志
- [VbTriState](/official/Reference/VBA/Constants/VbTriState) -- 用于替代 **Boolean** 参数的三态值
- [VbVarType](/official/Reference/VBA/Constants/VbVarType) -- **VarType** 返回的变体子类型代码