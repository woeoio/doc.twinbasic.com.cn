---
title: "Financial 模块"
parent: VBA Package
permalink: /tB/Modules/Financial/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '8c322692-c31e-4087-a8b3-cf065f9ff1fd'
  PropagateID: '8c322692-c31e-4087-a8b3-cf065f9ff1fd'
  ReservedCode1: '69633da1-cb29-44d5-8920-173a8d1d256c'
  ReservedCode2: '69633da1-cb29-44d5-8920-173a8d1d256c'
---

# Financial 模块

**Financial** 模块将解决标准时间价值问题的过程组合在一起——固定周期现金流的贷款和储蓄计划的年金计算、不规则现金流系列的收益率和现值分析，以及三种不同会计惯例下的资产折旧。

## 年金

*年金*是一系列在等间隔期间进行的固定现金支付。模块的七个函数描述同一个基础年金模型，区别仅在于它们求解*哪个*量：[**FV**](/official/Reference/VBA/Financial/FV) 返回终值（最终付款后的现金余额），[**PV**](/official/Reference/VBA/Financial/PV) 返回现值（未来现金流的当前价值），[**Pmt**](/official/Reference/VBA/Financial/Pmt) 返回每期付款金额，[**NPer**](/official/Reference/VBA/Financial/NPer) 返回期数，[**Rate**](/official/Reference/VBA/Financial/Rate) 返回每期利率。[**IPmt**](/official/Reference/VBA/Financial/IPmt) 和 [**PPmt**](/official/Reference/VBA/Financial/PPmt) 将单笔付款分解为利息和本金部分。

这七个函数都采用相同的核心参数——*rate*、*nper*、*pmt*、*pv*、*fv*、*type*——以不同顺序排列，未知的参数省略。*rate* 是每期利率（年百分比除以每年期数）；*nper* 是总付款期数；*pmt* 是每期付款额；*pv* 和 *fv* 是现值和终值；*type* 为 `0` 表示期末付款，为 `1` 表示期初付款。**Rate** 额外接受 *guess* 参数——它通过迭代求解方程，当默认值 10% 无法在 20 个循环内收敛时，可以提供起始估计值。

```vb
Const APR As Double = 0.06
Dim Monthly As Double
Monthly = -Pmt(APR / 12, 30 * 12, 200000)   ' fixed monthly payment on a 30-year, $200,000 mortgage at 6 % APR
```

## 变动现金流

对于各期现金流不同的投资，三个函数接受值数组而非单一付款额。[**NPV**](/official/Reference/VBA/Financial/NPV) 返回按选定折现率折现的现金流净现值；[**IRR**](/official/Reference/VBA/Financial/IRR) 返回内部收益率——使 **NPV** 为零的折现率；[**MIRR**](/official/Reference/VBA/Financial/MIRR) 返回修正内部收益率，其中流出和再投资流入以不同利率折现。数组中值的顺序很重要——元素 *i* 是第 *i* 期的现金流——数组必须包含至少一个负值（付款）和一个正值（收入）。与 **Rate** 一样，**IRR** 和 **MIRR** 都通过迭代计算，接受可选的 *guess*。

```vb
Dim CashFlows(0 To 4) As Double
CashFlows(0) = -70000               ' initial outlay
CashFlows(1) = 22000 : CashFlows(2) = 25000
CashFlows(3) = 28000 : CashFlows(4) = 31000
Debug.Print IRR(CashFlows)          ' approximate internal rate of return
Debug.Print NPV(0.0625, CashFlows)  ' net present value at a 6.25 % discount rate
```

## 折旧

三个函数在三种不同会计惯例下返回资产在选定期间的折旧，全部以资产的初始*成本*、其使用寿命结束时的*残值*及其以期为单位的*寿命*为参数。[**SLN**](/official/Reference/VBA/Financial/SLN) 应用直线折旧法，将损耗价值均匀分摊到每期。[**DDB**](/official/Reference/VBA/Financial/DDB) 应用双倍余额递减法（或选定倍数），前期折旧最高，此后几何递减。[**SYD**](/official/Reference/VBA/Financial/SYD) 应用年数总和法——也是加速折旧，但线性递减。

**SLN** 每期返回相同值；**DDB** 和 **SYD** 因此都需要额外的 *period* 参数指定要报告哪一期。

## 符号约定和单位

两个约定贯穿整个模块。首先，**现金流有符号**：付出的钱（抵押贷款还款、储蓄存款、投资支出）用负数表示，收到的钱（贷款收入、储蓄提取、股息）用正数表示。无论值是作为单一参数（*pmt*、*pv*、*fv*）还是作为现金流数组的元素，都适用相同的约定——将付款输入为正数是导致意外结果的最常见原因。

其次，**利率和期数必须共享时间单位**。如果 *nper* 以月为单位，*rate* 必须是月利率（通常是年利率除以十二）；如果 *nper* 以年为单位，*rate* 必须是年利率。折旧也类似：资产的 *life* 和查询的 *period* 必须以相同单位表示。

## 成员

- [DDB](/official/Reference/VBA/Financial/DDB) -- 使用双倍余额递减法计算资产指定期间的折旧
- [FV](/official/Reference/VBA/Financial/FV) -- 基于定期固定付款和固定利率的年金终值
- [IPmt](/official/Reference/VBA/Financial/IPmt) -- 年金指定期间的利息付款
- [IRR](/official/Reference/VBA/Financial/IRR) -- 定期现金流的内部收益率
- [MIRR](/official/Reference/VBA/Financial/MIRR) -- 定期现金流的修正内部收益率
- [NPer](/official/Reference/VBA/Financial/NPer) -- 基于定期固定付款和固定利率的年金期数
- [NPV](/official/Reference/VBA/Financial/NPV) -- 基于定期现金流和折现率的投资净现值
- [Pmt](/official/Reference/VBA/Financial/Pmt) -- 基于定期固定付款和固定利率的年金付款
- [PPmt](/official/Reference/VBA/Financial/PPmt) -- 年金指定期间的本金付款
- [PV](/official/Reference/VBA/Financial/PV) -- 基于定期固定付款和固定利率的年金现值
- [Rate](/official/Reference/VBA/Financial/Rate) -- 年金每期利率
- [SLN](/official/Reference/VBA/Financial/SLN) -- 资产单期的直线折旧
- [SYD](/official/Reference/VBA/Financial/SYD) -- 资产指定期间的年数总和折旧