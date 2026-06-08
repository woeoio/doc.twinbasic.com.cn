---
title: "常量模块"
parent: VBRUN Package
permalink: /tB/Packages/VBRUN/Constants/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '169e14d0-d918-49c6-a549-23f4783af798'
  PropagateID: '169e14d0-d918-49c6-a549-23f4783af798'
  ReservedCode1: '6dedd432-a6e6-45a9-8810-fd5d0b9f253a'
  ReservedCode2: '6dedd432-a6e6-45a9-8810-fd5d0b9f253a'
---

# Constants 模块

VBRUN **Constants**模块收集了经典VB6窗体、内在控件和运行时服务用于指定其选项值的命名整数枚举 --- 颜色、鼠标指针、键码、拖放状态、OLE容器行为、打印机设置值等。此模块中没有独立常量；所有内容都分组到枚举中，以便**IntelliSense**在每个属性或参数处提供正确的选项。

某些枚举在源代码中标记为**\[MustBeQualified\]** --- 其成员必须通过枚举名引用（例如`ControlBorderStyleConstantsCustom.vbCustomBorder`），以避免与类似命名枚举的成员冲突。这在相应枚举页面上有注明。

## 枚举

- [AlignConstants](/official/Reference/VBRUN/Constants/AlignConstants) -- **Align**属性的对齐值（无、顶部、底部、左侧、右侧）
- [AlignmentConstants](/official/Reference/VBRUN/Constants/AlignmentConstants) -- 文本对齐值（左、右、居中）
- [AlignmentConstantsNoCenter](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- 不含居中选项的文本对齐值
- [AppearanceConstants](/official/Reference/VBRUN/Constants/AppearanceConstants) -- 控件的平面或三维绘图样式
- [ApplicationStartConstants](/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- 应用程序是独立启动还是通过Automation启动
- [AspectTypeConstants](/official/Reference/VBRUN/Constants/AspectTypeConstants) -- OLE对象的呈现方面（内容、缩略图、图标、打印）
- [AsyncReadConstants](/official/Reference/VBRUN/Constants/AsyncReadConstants) -- **UserControl.AsyncRead**的标志
- [AsyncStatusCodeConstants](/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- **AsyncReadProgress**事件报告的状态代码
- [AsyncTypeConstants](/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- **UserControl.AsyncRead**中正在读取的数据类型
- [BackFillStyleConstants](/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- 控件背景填充是不透明还是透明
- [BorderStyleConstants](/official/Reference/VBRUN/Constants/BorderStyleConstants) -- 绘制形状的线条样式（实线、虚线、点线、透明...）
- [ButtonConstants](/official/Reference/VBRUN/Constants/ButtonConstants) -- 标准或图形按钮样式
- [CheckBoxConstants](/official/Reference/VBRUN/Constants/CheckBoxConstants) -- 复选框的状态（未选中、选中、灰色）
- [ClipboardConstants](/official/Reference/VBRUN/Constants/ClipboardConstants) -- 剪贴板格式标识符（`vbCFText`、`vbCFBitmap`...）
- [ColorConstants](/official/Reference/VBRUN/Constants/ColorConstants) -- 常用命名颜色（`vbBlack`、`vbBlue`、`vbRed`...）
- [ComboBoxConstants](/official/Reference/VBRUN/Constants/ComboBoxConstants) -- 组合框样式（下拉、简单、下拉列表）
- [ControlBorderStyleConstants](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- 单一边框样式（无或固定单线）
- [ControlBorderStyleConstantsCustom](/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- 带自定义绘制选项的单一边框样式
- [ControlTypeConstants](/official/Reference/VBRUN/Constants/ControlTypeConstants) -- 标准内在控件类型的标识符
- [DataBOFconstants](/official/Reference/VBRUN/Constants/DataBOFconstants) -- Data控件到达记录集开头时的操作
- [DataEOFConstants](/official/Reference/VBRUN/Constants/DataEOFConstants) -- Data控件到达记录集末尾时的操作
- [DataErrorConstants](/official/Reference/VBRUN/Constants/DataErrorConstants) -- 对数据绑定操作错误的响应
- [DataValidateConstants](/official/Reference/VBRUN/Constants/DataValidateConstants) -- Data控件**Validate**事件中报告的操作
- [DatabaseTypeConstants](/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- Data控件使用的数据库引擎（ODBC、Jet、ACE）
- [DefaultCursorTypeConstants](/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- Data控件连接的游标类型
- [DockModeConstants](/official/Reference/VBRUN/Constants/DockModeConstants) -- 窗体和工具栏的停靠边缘值
- [DragConstants](/official/Reference/VBRUN/Constants/DragConstants) -- **DragDrop**/**DragOver**报告的状态
- [DragModeConstants](/official/Reference/VBRUN/Constants/DragModeConstants) -- 自动或手动拖动模式
- [DragOverConstants](/official/Reference/VBRUN/Constants/DragOverConstants) -- 拖动悬停事件期间的进入/离开/悬停状态值
- [DrawModeConstants](/official/Reference/VBRUN/Constants/DrawModeConstants) -- **PSet**/**Line**/**Circle**绘图的光栅操作
- [DrawStyleConstants](/official/Reference/VBRUN/Constants/DrawStyleConstants) -- 绘制线条和形状轮廓的线条样式
- [FillStyleConstants](/official/Reference/VBRUN/Constants/FillStyleConstants) -- 填充形状的填充图案
- [FillStyleConstantsEx](/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- 带twinBASIC渐变扩展的填充图案
- [FormArrangeConstants](/official/Reference/VBRUN/Constants/FormArrangeConstants) -- MDI子窗体排列模式（层叠、平铺...）
- [FormBorderStyleConstants](/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- 窗体窗口边框样式（可调整大小、固定对话框、工具窗口...）
- [FormShowConstants](/official/Reference/VBRUN/Constants/FormShowConstants) -- 窗体是模态还是非模态显示
- [FormWindowStateConstants](/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- 正常、最小化或最大化窗口状态
- [HitResultConstants](/official/Reference/VBRUN/Constants/HitResultConstants) -- **UserControl** **HitTest**事件的返回值
- [KeyCodeConstants](/official/Reference/VBRUN/Constants/KeyCodeConstants) -- **KeyDown**/**KeyUp**的虚拟键代码值
- [LinkModeConstants](/official/Reference/VBRUN/Constants/LinkModeConstants) -- DDE链接模式（无、自动、手动、通知）
- [ListBoxConstants](/official/Reference/VBRUN/Constants/ListBoxConstants) -- 列表框样式（标准、复选框、色块）
- [LoadPictureColorConstants](/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- **LoadPicture**的颜色深度标志
- [LoadPictureSizeConstants](/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- **LoadPicture**的大小选择器
- [LoadResConstants](/official/Reference/VBRUN/Constants/LoadResConstants) -- **LoadResPicture**的资源类型
- [LogEventTypeConstants](/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- **LogEvent**的严重级别（错误、警告、信息）
- [LogModeConstants](/official/Reference/VBRUN/Constants/LogModeConstants) -- 应用程序日志的目标和行为标志
- [MenuAccelConstants](/official/Reference/VBRUN/Constants/MenuAccelConstants) -- 菜单项的键盘快捷键代码
- [MenuControlConstants](/official/Reference/VBRUN/Constants/MenuControlConstants) -- 弹出菜单的对齐和触发选项
- [MouseButtonConstants](/official/Reference/VBRUN/Constants/MouseButtonConstants) -- 按下鼠标按钮的位标志（左、右、中）
- [MousePointerConstants](/official/Reference/VBRUN/Constants/MousePointerConstants) -- **MousePointer**属性的光标形状
- [MultiSelectConstants](/official/Reference/VBRUN/Constants/MultiSelectConstants) -- 列表框的多选模式
- [NegotiatePositionConstants](/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- OLE协商菜单的定位
- [OLEContainerActivateConstants](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- **OLE**容器何时激活其嵌入对象
- [OLEContainerConstants](/official/Reference/VBRUN/Constants/OLEContainerConstants) -- 所有**OLE**容器选项值的组合枚举
- [OLEContainerDisplayTypeConstants](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- 显示内容还是图标
- [OLEContainerSizeModeConstants](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- 嵌入**OLE**对象的大小调整规则
- [OLEContainerTypesAllowedConstants](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- 链接、嵌入或任一对象类型
- [OLEContainerUpdateOptionsConstants](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- **OLE**链接对象的更新模式
- [OLEDragConstants](/official/Reference/VBRUN/Constants/OLEDragConstants) -- 自动或手动**OLE**拖动
- [OLEDropConstants](/official/Reference/VBRUN/Constants/OLEDropConstants) -- 无/手动/自动**OLE**放置目标
- [OLEDropEffectConstants](/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- **OLE**放置的效果（复制、移动、链接、滚动）
- [OldLinkModeConstants](/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- 旧式DDE链接模式（热、冷、服务器）
- [PaletteModeConstants](/official/Reference/VBRUN/Constants/PaletteModeConstants) -- 窗体和控件的调色板来源
- [ParentControlsType](/official/Reference/VBRUN/Constants/ParentControlsType) -- [**ParentControls**](/official/Reference/VBRUN/ParentControls/)是否将项包装在其**Extender**中
- [PictureTypeConstants](/official/Reference/VBRUN/Constants/PictureTypeConstants) -- **StdPicture**的类型（位图、图标、元文件、增强元文件）
- [PrinterObjectConstants](/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- 所有打印机设置值的组合枚举
- [PrinterObjectConstants_ColorMode](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- 彩色或单色打印
- [PrinterObjectConstants_Duplex](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- 单面或双面打印模式
- [PrinterObjectConstants_Orientation](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- 纵向或横向纸张方向
- [PrinterObjectConstants_PaperBin](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- 打印机的纸张来源标识符
- [PrinterObjectConstants_PaperSize](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- 打印机的纸张大小标识符
- [PrinterObjectConstants_PrintQuality](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- 草稿/低/中/高打印质量
- [QueryUnloadConstants](/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- 窗体**QueryUnload**事件中报告的原因代码
- [RasterOpConstants](/official/Reference/VBRUN/Constants/RasterOpConstants) -- **PaintPicture**的光栅操作代码
- [RecordsetTypeConstants](/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- 表/动态集/快照记录集类型
- [ScaleModeConstants](/official/Reference/VBRUN/Constants/ScaleModeConstants) -- 窗体或容器**Scale**属性的测量单位
- [ScrollBarConstants](/official/Reference/VBRUN/Constants/ScrollBarConstants) -- 控件应显示哪些滚动条（无、水平、垂直、两者）
- [ShapeConstants](/official/Reference/VBRUN/Constants/ShapeConstants) -- **Shape**控件的几何形状选择器
- [ShiftConstants](/official/Reference/VBRUN/Constants/ShiftConstants) -- 鼠标和键盘事件中**Shift**、**Ctrl**和**Alt**的位标志
- [ShortcutConstants](/official/Reference/VBRUN/Constants/ShortcutConstants) -- 菜单项的快捷键标识符
- [StartUpPositionConstants](/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- 窗体的初始位置（手动、所有者、屏幕、默认）
- [StorageTypeContants](/official/Reference/VBRUN/Constants/StorageTypeContants) -- **OLE**数据存储介质（`HGLOBAL`、文件、`IStream`、`IStorage`...）
- [SystemColorConstants](/official/Reference/VBRUN/Constants/SystemColorConstants) -- 引用系统调色板条目的高值
- [VariantTypeConstants](/official/Reference/VBRUN/Constants/VariantTypeConstants) -- DAO字段类型标签（旧式）
- [VerticalAlignmentConstants](/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- 垂直文本对齐（顶部、中间、底部）
- [ZOrderConstants](/official/Reference/VBRUN/Constants/ZOrderConstants) -- **BringToFront**/**SendToBack**的选择器

::: info
枚举名称`StorageTypeContants`（注意缺少`s`）在此按运行时暴露的方式原样保留；此拼写错误是VB6的长期遗留问题。
:::