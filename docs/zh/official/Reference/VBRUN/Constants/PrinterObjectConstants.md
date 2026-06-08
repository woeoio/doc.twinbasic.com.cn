---
title: PrinterObjectConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/PrinterObjectConstants
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'b5182f10-5fbc-4401-aa2b-b6b6f070db36'
  PropagateID: 'b5182f10-5fbc-4401-aa2b-b6b6f070db36'
  ReservedCode1: 'd32e2d60-3813-42ea-b196-b03ce435c0a7'
  ReservedCode2: 'd32e2d60-3813-42ea-b196-b03ce435c0a7'
---

# PrinterObjectConstants

包含**Printer**对象使用的所有选项值的组合枚举 --- 颜色模式、双面模式、方向、纸盒、纸张大小和打印质量。每组逻辑值也有更具体的枚举 --- 参见另见部分。

## 颜色模式

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRCMMonochrome** | 1 | 单色打印。 |
| **vbPRCMColor** | 2 | 彩色打印。 |

## 双面模式

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRDPSimplex** | 1 | 仅单面打印。 |
| **vbPRDPHorizontal** | 2 | 双面打印，长边装订。 |
| **vbPRDPVertical** | 3 | 双面打印，短边装订。 |

## 方向

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRORPortrait** | 1 | 纵向。 |
| **vbPRORLandscape** | 2 | 横向。 |

## 打印质量

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRPQDraft** | -1 | 草稿质量。 |
| **vbPRPQLow** | -2 | 低质量。 |
| **vbPRPQMedium** | -3 | 中等质量。 |
| **vbPRPQHigh** | -4 | 高质量。 |

## 纸盒

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRBNUpper** | 1 | 上层纸盒。 |
| **vbPRBNLower** | 2 | 下层纸盒。 |
| **vbPRBNMiddle** | 3 | 中层纸盒。 |
| **vbPRBNManual** | 4 | 手动送纸。 |
| **vbPRBNEnvelope** | 5 | 信封托盘。 |
| **vbPRBNEnvManual** | 6 | 手动信封送纸。 |
| **vbPRBNAuto** | 7 | 自动选择纸源。 |
| **vbPRBNTractor** | 8 | 履带式送纸。 |
| **vbPRBNSmallFmt** | 9 | 小尺寸纸盒。 |
| **vbPRBNLargeFmt** | 10 | 大尺寸纸盒。 |
| **vbPRBNLargeCapacity** | 11 | 大容量纸盒。 |
| **vbPRBNCassette** | 14 | 盒式送纸。 |

## 纸张大小

| 常量 | 值 | 说明 |
|----------|-------|-------------|
| **vbPRPSLetter** | 1 | US Letter（8½ × 11英寸）。 |
| **vbPRPSLetterSmall** | 2 | Letter Small。 |
| **vbPRPSTabloid** | 3 | Tabloid（11 × 17英寸）。 |
| **vbPRPSLedger** | 4 | Ledger（17 × 11英寸）。 |
| **vbPRPSLegal** | 5 | US Legal（8½ × 14英寸）。 |
| **vbPRPSStatement** | 6 | Statement（5½ × 8½英寸）。 |
| **vbPRPSExecutive** | 7 | Executive（7¼ × 10½英寸）。 |
| **vbPRPSA3** | 8 | A3（297 × 420毫米）。 |
| **vbPRPSA4** | 9 | A4（210 × 297毫米）。 |
| **vbPRPSA4Small** | 10 | A4 Small。 |
| **vbPRPSA5** | 11 | A5（148 × 210毫米）。 |
| **vbPRPSB4** | 12 | B4（250 × 354毫米）。 |
| **vbPRPSB5** | 13 | B5（182 × 257毫米）。 |
| **vbPRPSFolio** | 14 | Folio（8½ × 13英寸）。 |
| **vbPRPSQuarto** | 15 | Quarto（215 × 275毫米）。 |
| **vbPRPS10x14** | 16 | 10 × 14英寸。 |
| **vbPRPS11x17** | 17 | 11 × 17英寸。 |
| **vbPRPSNote** | 18 | Note（8½ × 11英寸）。 |
| **vbPRPSEnv9** | 19 | #9信封（3⅞ × 8⅞英寸）。 |
| **vbPRPSEnv10** | 20 | #10信封（4⅛ × 9½英寸）。 |
| **vbPRPSEnv11** | 21 | #11信封（4½ × 10⅜英寸）。 |
| **vbPRPSEnv12** | 22 | #12信封（4¾ × 11英寸）。 |
| **vbPRPSEnv14** | 23 | #14信封（5 × 11½英寸）。 |
| **vbPRPSCSheet** | 24 | C尺寸图纸。 |
| **vbPRPSDSheet** | 25 | D尺寸图纸。 |
| **vbPRPSESheet** | 26 | E尺寸图纸。 |
| **vbPRPSEnvDL** | 27 | DL信封（110 × 220毫米）。 |
| **vbPRPSEnvC5** | 28 | C5信封（162 × 229毫米）。 |
| **vbPRPSEnvC3** | 29 | C3信封（324 × 458毫米）。 |
| **vbPRPSEnvC4** | 30 | C4信封（229 × 324毫米）。 |
| **vbPRPSEnvC6** | 31 | C6信封（114 × 162毫米）。 |
| **vbPRPSEnvC65** | 32 | C65信封（114 × 229毫米）。 |
| **vbPRPSEnvB4** | 33 | B4信封（250 × 353毫米）。 |
| **vbPRPSEnvB5** | 34 | B5信封（176 × 250毫米）。 |
| **vbPRPSEnvB6** | 35 | B6信封（176 × 125毫米）。 |
| **vbPRPSEnvItaly** | 36 | 意大利信封（110 × 230毫米）。 |
| **vbPRPSEnvMonarch** | 37 | Monarch信封（3⅞ × 7½英寸）。 |
| **vbPRPSEnvPersonal** | 38 | 个人信封（3⅝ × 6½英寸）。 |
| **vbPRPSFanfoldUS** | 39 | US折叠纸（14⅞ × 11英寸）。 |
| **vbPRPSFanfoldStdGerman** | 40 | 德国标准折叠纸（8½ × 12英寸）。 |
| **vbPRPSFanfoldLglGerman** | 41 | 德国法律折叠纸（8½ × 13英寸）。 |
| **vbPRPSUser** | 256 | 用户自定义纸张大小。 |

### 另见

- [PrinterObjectConstants_ColorMode](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode)
- [PrinterObjectConstants_Duplex](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex)
- [PrinterObjectConstants_Orientation](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation)
- [PrinterObjectConstants_PaperBin](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin)
- [PrinterObjectConstants_PaperSize](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize)
- [PrinterObjectConstants_PrintQuality](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality)