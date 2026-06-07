---
title: PrinterObjectConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/PrinterObjectConstants
---
# PrinterObjectConstants

A combined enumeration containing every option value used by the **Printer** object --- colour mode, duplex mode, orientation, paper bin, paper size, and print quality. Each logical group also has a more specific enumeration of its own --- see the See Also section.

## Colour mode

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRCMMonochrome** | 1 | Print in monochrome. |
| **vbPRCMColor** | 2 | Print in colour. |

## Duplex mode

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRDPSimplex** | 1 | Print on one side only. |
| **vbPRDPHorizontal** | 2 | Two-sided printing, with pages bound on the long edge. |
| **vbPRDPVertical** | 3 | Two-sided printing, with pages bound on the short edge. |

## Orientation

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRORPortrait** | 1 | Portrait orientation. |
| **vbPRORLandscape** | 2 | Landscape orientation. |

## Print quality

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRPQDraft** | -1 | Draft quality. |
| **vbPRPQLow** | -2 | Low quality. |
| **vbPRPQMedium** | -3 | Medium quality. |
| **vbPRPQHigh** | -4 | High quality. |

## Paper bin

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRBNUpper** | 1 | Upper bin. |
| **vbPRBNLower** | 2 | Lower bin. |
| **vbPRBNMiddle** | 3 | Middle bin. |
| **vbPRBNManual** | 4 | Manual feed. |
| **vbPRBNEnvelope** | 5 | Envelope tray. |
| **vbPRBNEnvManual** | 6 | Manual envelope feed. |
| **vbPRBNAuto** | 7 | Automatic source selection. |
| **vbPRBNTractor** | 8 | Tractor feed. |
| **vbPRBNSmallFmt** | 9 | Small-format paper bin. |
| **vbPRBNLargeFmt** | 10 | Large-format paper bin. |
| **vbPRBNLargeCapacity** | 11 | Large-capacity paper bin. |
| **vbPRBNCassette** | 14 | Cassette feed. |

## Paper size

| Constant | Value | Description |
|----------|-------|-------------|
| **vbPRPSLetter** | 1 | US Letter (8½ × 11 in). |
| **vbPRPSLetterSmall** | 2 | Letter Small. |
| **vbPRPSTabloid** | 3 | Tabloid (11 × 17 in). |
| **vbPRPSLedger** | 4 | Ledger (17 × 11 in). |
| **vbPRPSLegal** | 5 | US Legal (8½ × 14 in). |
| **vbPRPSStatement** | 6 | Statement (5½ × 8½ in). |
| **vbPRPSExecutive** | 7 | Executive (7¼ × 10½ in). |
| **vbPRPSA3** | 8 | A3 (297 × 420 mm). |
| **vbPRPSA4** | 9 | A4 (210 × 297 mm). |
| **vbPRPSA4Small** | 10 | A4 Small. |
| **vbPRPSA5** | 11 | A5 (148 × 210 mm). |
| **vbPRPSB4** | 12 | B4 (250 × 354 mm). |
| **vbPRPSB5** | 13 | B5 (182 × 257 mm). |
| **vbPRPSFolio** | 14 | Folio (8½ × 13 in). |
| **vbPRPSQuarto** | 15 | Quarto (215 × 275 mm). |
| **vbPRPS10x14** | 16 | 10 × 14 in. |
| **vbPRPS11x17** | 17 | 11 × 17 in. |
| **vbPRPSNote** | 18 | Note (8½ × 11 in). |
| **vbPRPSEnv9** | 19 | #9 envelope (3⅞ × 8⅞ in). |
| **vbPRPSEnv10** | 20 | #10 envelope (4⅛ × 9½ in). |
| **vbPRPSEnv11** | 21 | #11 envelope (4½ × 10⅜ in). |
| **vbPRPSEnv12** | 22 | #12 envelope (4¾ × 11 in). |
| **vbPRPSEnv14** | 23 | #14 envelope (5 × 11½ in). |
| **vbPRPSCSheet** | 24 | C-size sheet. |
| **vbPRPSDSheet** | 25 | D-size sheet. |
| **vbPRPSESheet** | 26 | E-size sheet. |
| **vbPRPSEnvDL** | 27 | DL envelope (110 × 220 mm). |
| **vbPRPSEnvC5** | 28 | C5 envelope (162 × 229 mm). |
| **vbPRPSEnvC3** | 29 | C3 envelope (324 × 458 mm). |
| **vbPRPSEnvC4** | 30 | C4 envelope (229 × 324 mm). |
| **vbPRPSEnvC6** | 31 | C6 envelope (114 × 162 mm). |
| **vbPRPSEnvC65** | 32 | C65 envelope (114 × 229 mm). |
| **vbPRPSEnvB4** | 33 | B4 envelope (250 × 353 mm). |
| **vbPRPSEnvB5** | 34 | B5 envelope (176 × 250 mm). |
| **vbPRPSEnvB6** | 35 | B6 envelope (176 × 125 mm). |
| **vbPRPSEnvItaly** | 36 | Italy envelope (110 × 230 mm). |
| **vbPRPSEnvMonarch** | 37 | Monarch envelope (3⅞ × 7½ in). |
| **vbPRPSEnvPersonal** | 38 | Personal envelope (3⅝ × 6½ in). |
| **vbPRPSFanfoldUS** | 39 | US fanfold (14⅞ × 11 in). |
| **vbPRPSFanfoldStdGerman** | 40 | German standard fanfold (8½ × 12 in). |
| **vbPRPSFanfoldLglGerman** | 41 | German legal fanfold (8½ × 13 in). |
| **vbPRPSUser** | 256 | A user-defined paper size. |

### See Also

- [PrinterObjectConstants_ColorMode](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode)
- [PrinterObjectConstants_Duplex](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex)
- [PrinterObjectConstants_Orientation](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation)
- [PrinterObjectConstants_PaperBin](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin)
- [PrinterObjectConstants_PaperSize](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize)
- [PrinterObjectConstants_PrintQuality](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality)
