---
title: 通用对话框控件（CommonDialog）
description: 通用对话框控件（CommonDialog） - VBCCR 开发手册，基于源码的完整 API 参考
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'f95bca1f-d15f-4e37-a545-d5ff2342e82f'
  PropagateID: 'f95bca1f-d15f-4e37-a545-d5ff2342e82f'
  ReservedCode1: '8809c0f2-d29c-4c43-a30d-bf269fae4889'
  ReservedCode2: '8809c0f2-d29c-4c43-a30d-bf269fae4889'
---

# 通用对话框控件（CommonDialog）

提供 Windows 标准对话框（打开、保存、颜色、字体、打印、帮助、页面设置、文件夹浏览、查找、替换）的封装类。

## 枚举

### CdlErrorConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlCancel | 32755 | 用户选择了"取消" |
| CdlBufferTooSmall | 20476 | 文件名缓冲区太小 |
| CdlInvalidFileName | 20477 | 文件名无效 |
| CdlSubclassFailure | 20478 | 子类化失败 |
| CdlMaxLessThanMin | 24573 | 最小值大于最大值 |
| CdlNoFonts | 24574 | 没有可用字体 |
| CdlPrinterNotFound | 28660 | 未找到打印机 |
| CdlCreateICFailure | 28661 | 创建信息上下文失败 |
| CdlDndmMismatch | 28662 | DEVMODE 不匹配 |
| CdlNoDefaultPrn | 28663 | 没有默认打印机 |
| CdlNoDevices | 28664 | 没有打印设备 |
| CdlInitFailure | 28665 | 打印对话框初始化失败 |
| CdlGetDevModeFail | 28666 | 获取 DEVMODE 失败 |
| CdlLoadDrvFailure | 28667 | 加载打印机驱动失败 |
| CdlRetDefFailure | 28668 | 返回默认 DEVMODE 失败 |
| CdlParseFailure | 28669 | 解析失败 |
| CdlHelp | 32751 | 帮助请求 |
| CdlBufferLengthZero | 36848 | 缓冲区长度为零 |

### CdlPRORConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRORPortrait | vbPRORPortrait | 纵向 |
| CdlPRORLandscape | vbPRORLandscape | 横向 |

### CdlPRPSConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRPSLetter | vbPRPSLetter | Letter |
| CdlPRPSLetterSmall | vbPRPSLetterSmall | Letter Small |
| CdlPRPSTabloid | vbPRPSTabloid | Tabloid |
| CdlPRPSLedger | vbPRPSLedger | Ledger |
| CdlPRPSLegal | vbPRPSLegal | Legal |
| CdlPRPSStatement | vbPRPSStatement | Statement |
| CdlPRPSExecutive | vbPRPSExecutive | Executive |
| CdlPRPSA3 | vbPRPSA3 | A3 |
| CdlPRPSA4 | vbPRPSA4 | A4 |
| CdlPRPSA4Small | vbPRPSA4Small | A4 Small |
| CdlPRPSA5 | vbPRPSA5 | A5 |
| CdlPRPSB4 | vbPRPSB4 | B4 |
| CdlPRPSB5 | vbPRPSB5 | B5 |
| CdlPRPSFolio | vbPRPSFolio | Folio |
| CdlPRPSQuarto | vbPRPSQuarto | Quarto |
| CdlPRPS10x14 | vbPRPS10x14 | 10x14 |
| CdlPRPS11x17 | vbPRPS11x17 | 11x17 |
| CdlPRPSNote | vbPRPSNote | Note |
| CdlPRPSEnv9 | vbPRPSEnv9 | Envelope #9 |
| CdlPRPSEnv10 | vbPRPSEnv10 | Envelope #10 |
| CdlPRPSEnv11 | vbPRPSEnv11 | Envelope #11 |
| CdlPRPSEnv12 | vbPRPSEnv12 | Envelope #12 |
| CdlPRPSEnv14 | vbPRPSEnv14 | Envelope #14 |
| CdlPRPSCSheet | vbPRPSCSheet | C Sheet |
| CdlPRPSDSheet | vbPRPSDSheet | D Sheet |
| CdlPRPSESheet | vbPRPSESheet | E Sheet |
| CdlPRPSEnvDL | vbPRPSEnvDL | Envelope DL |
| CdlPRPSEnvC5 | vbPRPSEnvC5 | Envelope C5 |
| CdlPRPSEnvC3 | vbPRPSEnvC3 | Envelope C3 |
| CdlPRPSEnvC4 | vbPRPSEnvC4 | Envelope C4 |
| CdlPRPSEnvC6 | vbPRPSEnvC6 | Envelope C6 |
| CdlPRPSEnvC65 | vbPRPSEnvC65 | Envelope C65 |
| CdlPRPSEnvB4 | vbPRPSEnvB4 | Envelope B4 |
| CdlPRPSEnvB5 | vbPRPSEnvB5 | Envelope B5 |
| CdlPRPSEnvB6 | vbPRPSEnvB6 | Envelope B6 |
| CdlPRPSEnvItaly | vbPRPSEnvItaly | Envelope Italy |
| CdlPRPSEnvMonarch | vbPRPSEnvMonarch | Envelope Monarch |
| CdlPRPSEnvPersonal | vbPRPSEnvPersonal | Envelope Personal |
| CdlPRPSFanfoldUS | vbPRPSFanfoldUS | Fanfold US |
| CdlPRPSFanfoldStdGerman | vbPRPSFanfoldStdGerman | Fanfold Std German |
| CdlPRPSFanfoldLglGerman | vbPRPSFanfoldLglGerman | Fanfold Lgl German |
| CdlPRPSUser | vbPRPSUser | 用户自定义 |

### CdlPRBNConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRBNUpper | vbPRBNUpper | 上层纸盒 |
| CdlPRBNLower | vbPRBNLower | 下层纸盒 |
| CdlPRBNMiddle | vbPRBNMiddle | 中层纸盒 |
| CdlPRBNManual | vbPRBNManual | 手动送纸 |
| CdlPRBNEnvelope | vbPRBNEnvelope | 信封纸盒 |
| CdlPRBNEnvManual | vbPRBNEnvManual | 信封手动送纸 |
| CdlPRBNAuto | vbPRBNAuto | 自动送纸 |
| CdlPRBNTractor | vbPRBNTractor | 连续送纸 |
| CdlPRBNSmallFmt | vbPRBNSmallFmt | 小格式纸盒 |
| CdlPRBNLargeFmt | vbPRBNLargeFmt | 大格式纸盒 |
| CdlPRBNLargeCapacity | vbPRBNLargeCapacity | 大容量纸盒 |
| CdlPRBNCassette | vbPRBNCassette | 盒式纸盒 |

### CdlPRPQConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRPQHigh | vbPRPQHigh | 高质量 |
| CdlPRPQMedium | vbPRPQMedium | 中等质量 |
| CdlPRPQLow | vbPRPQLow | 低质量 |
| CdlPRPQDraft | vbPRPQDraft | 草稿质量 |

### CdlPRCMConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRCMMonochrome | vbPRCMMonochrome | 单色打印 |
| CdlPRCMColor | vbPRCMColor | 彩色打印 |

### CdlPRDPConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPRDPSimplex | vbPRDPSimplex | 单面打印 |
| CdlPRDPHorizontal | vbPRDPHorizontal | 双面水平翻转 |
| CdlPRDPVertical | vbPRDPVertical | 双面垂直翻转 |

### CdlOFNConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlOFNReadOnly | &H1 | 显示只读复选框 |
| CdlOFNOverwritePrompt | &H2 | 覆盖文件前提示 |
| CdlOFNHideReadOnly | &H4 | 隐藏只读复选框 |
| CdlOFNNoChangeDir | &H8 | 不改变当前目录 |
| CdlOFNHelpButton | &H10 | 显示帮助按钮 |
| CdlOFNNoValidate | &H100 | 不验证文件名 |
| CdlOFNAllowMultiSelect | &H200 | 允许多选 |
| CdlOFNExtensionDifferent | &H400 | 扩展名不同 |
| CdlOFNPathMustExist | &H800 | 路径必须存在 |
| CdlOFNFileMustExist | &H1000 | 文件必须存在 |
| CdlOFNCreatePrompt | &H2000 | 创建文件提示 |
| CdlOFNShareAware | &H4000 | 忽略共享错误 |
| CdlOFNNoReadOnlyReturn | &H8000& | 不返回只读文件 |
| CdlOFNNoNetworkButton | &H20000 | 隐藏网络按钮 |
| CdlOFNExplorer | &H80000 | 使用资源管理器风格 |
| CdlOFNNoDereferenceLinks | &H100000 | 不解除快捷方式 |
| CdlOFNDontAddToRecent | &H2000000 | 不添加到最近使用 |
| CdlOFNForcesShowHidden | &H10000000 | 显示隐藏文件 |

### CdlOFNShareViResultConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlOFNShareViResultWarn | &H0 | 警告共享冲突 |
| CdlOFNShareViResultNoWarn | &H1 | 不警告共享冲突 |
| CdlOFNShareViResultFallThrough | &H2 | 忽略共享冲突 |

### CdlCCConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlCCRGBInit | &H1 | 使用初始颜色 |
| CdlCCFullOpen | &H2 | 完全打开对话框 |
| CdlCCPreventFullOpen | &H4 | 禁止完全打开 |
| CdlCCHelpButton | &H8 | 显示帮助按钮 |
| CdlCCSolidColor | &H80 | 仅纯色 |
| CdlCCAnyColor | &H100 | 任意颜色 |

### CdlCFConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlCFScreenFonts | &H1 | 屏幕字体 |
| CdlCFPrinterFonts | &H2 | 打印机字体 |
| CdlCFHelpButton | &H4 | 显示帮助按钮 |
| CdlCFEffects | &H100 | 启用效果选项 |
| CdlCFApply | &H200 | 启用应用按钮 |
| CdlCFScriptsOnly | &H400 | 仅脚本字体 |
| CdlCFNoVectorFonts | &H800 | 排除矢量字体 |
| CdlCFLimitSize | &H2000 | 限制字体大小 |
| CdlCFFixedPitchOnly | &H4000 | 仅等宽字体 |
| CdlCFForceFontExist | &H10000 | 字体必须存在 |
| CdlCFScalableOnly | &H20000 | 仅可缩放字体 |
| CdlCFTTOnly | &H40000 | 仅 TrueType 字体 |
| CdlCFNoFaceSel | &H80000 | 无字体名选择 |
| CdlCFNoStyleSel | &H100000 | 无样式选择 |
| CdlCFNoSizeSel | &H200000 | 无大小选择 |
| CdlCFSelectScript | &H400000 | 选择脚本 |
| CdlCFNoScriptSel | &H800000 | 无脚本选择 |
| CdlCFNoVertFonts | &H1000000 | 排除垂直字体 |

### CdlPDConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPDAllPages | &H0 | 全部页面 |
| CdlPDSelection | &H1 | 选定范围 |
| CdlPDPageNums | &H2 | 页码范围 |
| CdlPDNoSelection | &H4 | 禁用选定范围 |
| CdlPDNoPageNums | &H8 | 禁用页码范围 |
| CdlPDCollate | &H10 | 逐份打印 |
| CdlPDPrintToFile | &H20 | 打印到文件 |
| CdlPDPrintSetup | &H40 | 显示打印设置 |
| CdlPDNoWarning | &H80 | 无警告 |
| CdlPDReturnDC | &H100 | 返回设备上下文 |
| CdlPDReturnIC | &H200 | 返回信息上下文 |
| CdlPDReturnDefault | &H400 | 返回默认打印机 |
| CdlPDHelpButton | &H800 | 显示帮助按钮 |
| CdlPDUseDevModeCopies | &H40000 | 使用 DEVMODE 副本数 |
| CdlPDUseDevModeCopiesAndCollate | &H40000 | 使用 DEVMODE 副本和逐份 |
| CdlPDDisablePrintToFile | &H80000 | 禁用打印到文件 |
| CdlPDCurrentPage | &H400000 | 当前页 |
| CdlPDHidePrintToFile | &H100000 | 隐藏打印到文件 |
| CdlPDNoNetworkButton | &H200000 | 隐藏网络按钮 |
| CdlPDNoCurrentPage | &H800000 | 禁用当前页 |

### CdlPDResultConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPDResultCancel | &H0 | 用户取消 |
| CdlPDResultPrint | &H1 | 用户打印 |
| CdlPDResultApply | &H2 | 用户应用 |

### CdlHelpConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlHelpContext | &H1 | 上下文帮助 |
| CdlHelpQuit | &H2 | 退出帮助 |
| CdlHelpIndex | &H3 | 帮助索引 |
| CdlHelpContents | &H3 | 帮助目录 |
| CdlHelpHelpOnHelp | &H4 | 关于帮助的帮助 |
| CdlHelpSetIndex | &H5 | 设置帮助索引 |
| CdlHelpSetContents | &H5 | 设置帮助目录 |
| CdlHelpContextPopup | &H8 | 弹出上下文帮助 |
| CdlHelpForceFile | &H9 | 强制帮助文件 |
| CdlHelpKey | &H101 | 关键字帮助 |
| CdlHelpCommandHelp | &H102 | 命令帮助 |
| CdlHelpPartialKey | &H105 | 部分关键字帮助 |

### CdlPSDConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlPSDDefaultMinMargins | &H0 | 默认最小边距 |
| CdlPSDMinMargins | &H1 | 允许设置最小边距 |
| CdlPSDMargins | &H2 | 允许设置边距 |
| CdlPSDInThousandthsOfInches | &H4 | 以千分之一英寸为单位 |
| CdlPSDInHundredthsOfMillimeters | &H8 | 以百分之一毫米为单位 |
| CdlPSDDisableMargins | &H10 | 禁用边距 |
| CdlPSDDisablePrinter | &H20 | 禁用打印机按钮 |
| CdlPSDNoWarning | &H80 | 无警告 |
| CdlPSDDisableOrientation | &H100 | 禁用方向 |
| CdlPSDDisablePaper | &H200 | 禁用纸张 |
| CdlPSDReturnDefault | &H400 | 返回默认设置 |
| CdlPSDHelpButton | &H800 | 显示帮助按钮 |
| CdlPSDDisablePagePainting | &H80000 | 禁用页面绘制 |
| CdlPSDNoNetworkButton | &H200000 | 隐藏网络按钮 |

### CdlBIFConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlBIFReturnOnlyFSDirs | &H1 | 仅返回文件系统目录 |
| CdlBIFDontGoBelowDomain | &H2 | 不浏览域以下 |
| CdlBIFStatusText | &H4 | 包含状态文本 |
| CdlBIFReturnFSAncestors | &H8 | 返回文件系统祖先 |
| CdlBIFEditBox | &H10 | 包含编辑框 |
| CdlBIFValidate | &H20 | 验证输入 |
| CdlBIFNewDialogStyle | &H40 | 新对话框样式 |
| CdlBIFBrowseIncludeURLs | &H80 | 包含 URL |
| CdlBIFUseNewUI | &H50 | 使用新 UI |
| CdlBIFUAHint | &H100 | 用户提示 |
| CdlBIFNoNewFolderButton | &H200 | 隐藏新建文件夹按钮 |
| CdlBIFNoTranslateTargets | &H400 | 不翻译目标 |
| CdlBIFBrowseForComputer | &H1000 | 仅浏览计算机 |
| CdlBIFBrowseForPrinter | &H2000 | 仅浏览打印机 |
| CdlBIFBrowseIncludeFiles | &H4000 | 包含文件 |
| CdlBIFShareable | &H8000& | 可共享 |
| CdlBIFBrowseFileJunctions | &H10000 | 浏览文件联结点 |

### CdlFRConstants

| 常量 | 值 | 说明 |
|------|-----|------|
| CdlFRDown | &H1 | 向下搜索 |
| CdlFRWholeWord | &H2 | 全字匹配 |
| CdlFRMatchCase | &H4 | 区分大小写 |
| CdlFRFindNext | &H8 | 查找下一个 |
| CdlFRReplace | &H10 | 替换 |
| CdlFRReplaceAll | &H20 | 全部替换 |
| CdlFRHelpButton | &H80 | 显示帮助按钮 |
| CdlFRNoUpDown | &H400 | 禁用方向选择 |
| CdlFRNoMatchCase | &H800 | 禁用大小写选择 |
| CdlFRNoWholeWord | &H1000 | 禁用全字选择 |
| CdlFRHideUpDown | &H4000 | 隐藏方向选择 |
| CdlFRHideMatchCase | &H8000& | 隐藏大小写选择 |
| CdlFRHideWholeWord | &H10000 | 隐藏全字选择 |

## 属性

### Object

`Property Get Object() As Object`

返回对象自身的实例。

### CancelError

`Property Get/Let CancelError() As Boolean`

指示用户选择"取消"时是否产生错误。

### HookEvents

`Property Get/Let HookEvents() As Boolean`

指示对话框是否可以引发需要钩子回调的事件。

### Tag

`Property Get/Let Tag() As String`

存储程序所需的附加数据。

### hDC

`Property Get hDC() As LongPtr`

返回设备上下文句柄（只读）。

### Flags

`Property Get/Let Flags() As Long`

返回/设置对话框选项标志。

### DialogTitle

`Property Get/Let DialogTitle() As String`

设置对话框标题栏显示的字符串。

### MaxFileSize

`Property Get/Let MaxFileSize() As Long`

返回/设置打开文件名的最大大小。

### FileName

`Property Get/Let FileName() As String`

返回/设置所选文件的路径和文件名。

### FileTitle

`Property Get FileTitle() As String`

返回所选文件的文件名（不含路径，只读）。

### FileOffset

`Property Get FileOffset() As Integer`

返回从路径开头到文件名的零偏移量（只读）。

### Filter

`Property Get/Let Filter() As String`

返回/设置对话框类型列表框中显示的过滤器。

### FilterIndex

`Property Get/Let FilterIndex() As Long`

返回/设置默认过滤器索引。

### InitDir

`Property Get/Let InitDir() As String`

返回/设置初始文件目录。

### DefaultExt

`Property Get/Let DefaultExt() As String`

返回/设置默认文件扩展名。

### Color

`Property Get/Let Color() As Long`

返回/设置所选颜色。

### CustomColors

`Property Get/Let CustomColors() As Variant`

返回/设置用户可选择的自定义颜色。

### FontName

`Property Get/Let FontName() As String`

返回/设置字体名称。

### FontSize

`Property Get/Let FontSize() As Single`

返回/设置字体大小（磅值）。

### FontBold

`Property Get/Let FontBold() As Boolean`

返回/设置粗体字体样式。

### FontItalic

`Property Get/Let FontItalic() As Boolean`

返回/设置斜体字体样式。

### FontStrikethru

`Property Get/Let FontStrikethru() As Boolean`

返回/设置删除线字体样式。

### FontUnderline

`Property Get/Let FontUnderline() As Boolean`

返回/设置下划线字体样式。

### FontCharset

`Property Get/Let FontCharset() As Integer`

返回/设置字体字符集。

### FontWeight

`Property Get/Let FontWeight() As Integer`

返回/设置字体粗细（0=Don'tCare, 100=Thin, 200=ExtraLight, 300=Light, 400=Normal, 500=Medium, 600=SemiBold, 700=Bold, 800=ExtraBold, 900=Heavy）。

### Min

`Property Get/Let Min() As Long`

返回/设置最小字体大小（字体对话框）或最小打印页范围（打印对话框）。

### Max

`Property Get/Let Max() As Long`

返回/设置最大字体大小（字体对话框）或最大打印页范围（打印对话框）。

### FromPage

`Property Get/Let FromPage() As Long`

返回/设置打印起始页。

### ToPage

`Property Get/Let ToPage() As Long`

返回/设置打印终止页。

### Orientation

`Property Get/Let Orientation() As CdlPRORConstants`

返回/设置打印方向。

### PaperSize

`Property Get/Let PaperSize() As CdlPRPSConstants`

返回/设置打印纸张大小。

### Copies

`Property Get/Let Copies() As Integer`

返回/设置打印份数。

### PaperBin

`Property Get/Let PaperBin() As CdlPRBNConstants`

返回/设置默认送纸器。

### PrintQuality

`Property Get/Let PrintQuality() As CdlPRPQConstants`

返回/设置打印分辨率。

### ColorMode

`Property Get/Let ColorMode() As CdlPRCMConstants`

返回/设置打印机颜色模式。

### Duplex

`Property Get/Let Duplex() As CdlPRDPConstants`

返回/设置双面打印模式。

### PrinterDefault

`Property Get/Let PrinterDefault() As Boolean`

返回/设置用户选择是否更改默认打印机。

### PrinterDefaultInit

`Property Get/Let PrinterDefaultInit() As Boolean`

返回/设置是否始终初始化默认打印机。

### PrinterDriver

`Property Get/Let PrinterDriver() As String`

返回/设置非默认打印机驱动名称。

### PrinterName

`Property Get/Let PrinterName() As String`

返回/设置非默认打印机设备名称。

### PrinterPort

`Property Get/Let PrinterPort() As String`

返回/设置非默认打印机端口名称。

### HelpFile

`Property Get/Let HelpFile() As String`

返回/设置与项目关联的帮助文件名。

### HelpCommand

`Property Get/Let HelpCommand() As CdlHelpConstants`

返回/设置联机帮助类型。

### HelpContext

`Property Get/Let HelpContext() As LongPtr`

返回/设置帮助主题的上下文 ID。

### HelpKey

`Property Get/Let HelpKey() As String`

返回/设置标识帮助主题的关键字。

### PageLeftMargin

`Property Get/Let PageLeftMargin() As Long`

返回/设置纸张左边距（设备单位）。

### PageTopMargin

`Property Get/Let PageTopMargin() As Long`

返回/设置纸张上边距（设备单位）。

### PageRightMargin

`Property Get/Let PageRightMargin() As Long`

返回/设置纸张右边距（设备单位）。

### PageBottomMargin

`Property Get/Let PageBottomMargin() As Long`

返回/设置纸张下边距（设备单位）。

### PageLeftMinMargin

`Property Get/Let PageLeftMinMargin() As Long`

返回/设置纸张最小左边距（设备单位）。

### PageTopMinMargin

`Property Get/Let PageTopMinMargin() As Long`

返回/设置纸张最小上边距（设备单位）。

### PageRightMinMargin

`Property Get/Let PageRightMinMargin() As Long`

返回/设置纸张最小右边距（设备单位）。

### PageBottomMinMargin

`Property Get/Let PageBottomMinMargin() As Long`

返回/设置纸张最小下边距（设备单位）。

### RootFolder

`Property Get/Let RootFolder() As Variant`

返回/设置文件夹浏览对话框的根文件夹。

### FindWhat

`Property Get/Let FindWhat() As String`

返回/设置查找对话框的搜索字符串。

### ReplaceWith

`Property Get/Let ReplaceWith() As String`

返回/设置替换对话框的替换字符串。

### Action

`Property Let Action() As Integer`

设置要显示的对话框类型（只写，1=打开, 2=保存, 3=颜色, 4=字体, 5=打印, 6=帮助, 7=页面设置, 8=文件夹浏览, 9=查找, 10=替换）。

## 方法

### ShowOpen

`Public Function ShowOpen() As Boolean`

显示"打开"对话框。成功返回 True。

### ShowSave

`Public Function ShowSave() As Boolean`

显示"保存"对话框。成功返回 True。

### ShowColor

`Public Function ShowColor() As Boolean`

显示"颜色"对话框。成功返回 True。

### ShowFont

`Public Function ShowFont() As Boolean`

显示"字体"对话框。成功返回 True。

### ShowPrinter

`Public Function ShowPrinter() As Boolean`

显示"打印"对话框。成功返回 True。

### ShowPrinterEx

`Public Function ShowPrinterEx() As Boolean`

显示"打印"扩展对话框（PrintDlgEx）。成功返回 True。

### ShowHelp

`Public Sub ShowHelp()`

显示帮助。

### ShowPageSetup

`Public Function ShowPageSetup() As Boolean`

显示"页面设置"对话框。成功返回 True。

### ShowFolderBrowser

`Public Function ShowFolderBrowser() As Boolean`

显示"文件夹浏览"对话框。成功返回 True。

### ShowFind

`Public Function ShowFind() As Boolean`

显示"查找"对话框。成功返回 True。

### ShowReplace

`Public Function ShowReplace() As Boolean`

显示"替换"对话框。成功返回 True。

## 事件

### InitDialog

`Public Event InitDialog(ByVal Action As Integer, ByVal hDlg As Long)`

对话框完成初始化时发生。

### Help

`Public Event Help(ByRef Handled As Boolean, ByVal Action As Integer, ByVal hDlg As Long)`

用户在对话框中点击帮助按钮时发生。

### FileShareViolation

`Public Event FileShareViolation(ByVal FileName As String, ByRef Result As CdlOFNShareViResultConstants, ByVal hDlg As Long)`

在打开或保存对话框中用户点击确定且发生网络共享冲突时发生。

### FileValidate

`Public Event FileValidate(ByVal FileName As String, ByVal FileTitle As String, ByVal FileOffset As Integer, ByRef Cancel As Boolean, ByVal hDlg As Long)`

在打开或保存对话框中用户点击确定时发生。

### ColorValidate

`Public Event ColorValidate(ByRef RGBColor As Long, ByRef Cancel As Boolean, ByVal hDlg As Long)`

在颜色对话框中用户点击确定时发生。

### FontApply

`Public Event FontApply(ByVal Flags As Long, ByVal FontName As String, ByVal FontSize As Single, ByVal FontBold As Boolean, ByVal FontItalic As Boolean, ByVal FontStrikethru As Boolean, ByVal FontUnderline As Boolean, ByVal FontCharset As Integer, ByVal RGBColor As Long, ByVal hDlg As Long)`

在字体对话框中用户点击"应用"按钮时发生。

### FolderBrowserValidateFailed

`Public Event FolderBrowserValidateFailed(ByVal Text As String, ByRef Cancel As Boolean, ByVal hDlg As Long)`

在文件夹浏览对话框中用户输入无效名称时发生。

### FindNext

`Public Event FindNext()`

在查找或替换对话框中用户点击"查找下一个"按钮时发生。

### Replace

`Public Event Replace()`

在替换对话框中用户点击"替换"按钮时发生。

### ReplaceAll

`Public Event ReplaceAll()`

在替换对话框中用户点击"全部替换"按钮时发生。

## 代码示例

### 基本用法

```vb
Private Sub cmdOpen_Click()
    Dim dlg As CommonDialog
    Set dlg = New CommonDialog
    
    dlg.Filter = "文本文件 (*.txt)|*.txt|所有文件 (*.*)|*.*"
    dlg.FilterIndex = 1
    dlg.CancelError = True
    
    On Error GoTo Cancelled
    If dlg.ShowOpen() Then
        MsgBox "已选择: " & dlg.FileName
    End If
    Exit Sub
Cancelled:
    If Err.Number = CdlCancel Then Exit Sub
    MsgBox "错误: " & Err.Description
End Sub
```

### 使用事件钩子

```vb
Private WithEvents dlg As CommonDialog

Private Sub cmdFont_Click()
    Set dlg = New CommonDialog
    dlg.HookEvents = True
    dlg.Flags = CdlCFScreenFonts Or CdlCFEffects Or CdlCFLimitSize
    dlg.Min = 8
    dlg.Max = 72
    dlg.ShowFont
End Sub

Private Sub dlg_FontApply(ByVal Flags As Long, ByVal FontName As String, _
    ByVal FontSize As Single, ByVal FontBold As Boolean, ByVal FontItalic As Boolean, _
    ByVal FontStrikethru As Boolean, ByVal FontUnderline As Boolean, _
    ByVal FontCharset As Integer, ByVal RGBColor As Long, ByVal hDlg As Long)
    Me.Font.Name = FontName
    Me.Font.Size = FontSize
    Me.Font.Bold = FontBold
    Me.Font.Italic = FontItalic
End Sub
```