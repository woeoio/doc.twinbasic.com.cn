---
title: "枚举"
parent: Reference Section
nav_order: 9
permalink: /Reference/Enumerations
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '047d89a3-db32-41d6-957b-2759ce745bfe'
  PropagateID: '047d89a3-db32-41d6-957b-2759ce745bfe'
  ReservedCode1: '49ada886-cac2-442f-80e0-ba98e6c31337'
  ReservedCode2: '49ada886-cac2-442f-80e0-ba98e6c31337'
---

# 枚举

*枚举*定义一组命名的整数常量。传递枚举成员而非裸整数使调用点自文档化，并允许IDE补全有效值。每个内置包将其枚举分组在专用子文件夹下；本页索引所有枚举。

以下各节[按包](#按包分组)列出枚举，之后是[字母顺序索引](#字母顺序索引)。

---

## 按包分组

### VBA包

15个枚举，涵盖窗口样式、比较模式、消息框选项、变量类型、日期时间常量、文件属性等。

- [**VbAppWinStyle**](/official/Reference/VBA/Constants/VbAppWinStyle) -- [**Shell**](/official/Reference/VBA/Interaction/Shell)的*windowstyle*参数的窗口样式值
- [**VbArchitecture**](/official/Reference/VBA/Constants/VbArchitecture) -- [**ProcessorArchitecture**](/official/Reference/VBA/Compilation/ProcessorArchitecture)返回的处理器架构值
- [**VbCalendar**](/official/Reference/VBA/Constants/VbCalendar) -- [**Calendar**](/official/Reference/Core/Calendar)属性的日历类型值
- [**VbCallType**](/official/Reference/VBA/Constants/VbCallType) -- **CallByName**的过程调用类型标志
- [**VbCompareMethod**](/official/Reference/VBA/Constants/VbCompareMethod) -- [**InStr**](/official/Reference/VBA/Strings/InStr)、[**Replace**](/official/Reference/VBA/Strings/Replace)、[**Split**](/official/Reference/VBA/Strings/Split)等的文本比较模式
- [**VbDateTimeFormat**](/official/Reference/VBA/Constants/VbDateTimeFormat) -- [**FormatDateTime**](/official/Reference/VBA/Strings/FormatDateTime)的格式代码
- [**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) -- [**DateAdd**](/official/Reference/VBA/DateTime/DateAdd)、[**DateDiff**](/official/Reference/VBA/DateTime/DateDiff)、[**Weekday**](/official/Reference/VBA/DateTime/Weekday)等的星期常量
- [**VbFileAttribute**](/official/Reference/VBA/Constants/VbFileAttribute) -- [**Dir**](/official/Reference/VBA/FileSystem/Dir)、[**GetAttr**](/official/Reference/VBA/FileSystem/GetAttr)和[**SetAttr**](/official/Reference/VBA/FileSystem/SetAttr)的属性标志
- [**VbFirstWeekOfYear**](/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- [**DateDiff**](/official/Reference/VBA/DateTime/DateDiff)、[**DatePart**](/official/Reference/VBA/DateTime/DatePart)和[**Weekday**](/official/Reference/VBA/DateTime/Weekday)的首周选择器
- [**VbIMEStatus**](/official/Reference/VBA/Constants/VbIMEStatus) -- 输入法编辑器模式常量
- [**VbMsgBoxResult**](/official/Reference/VBA/Constants/VbMsgBoxResult) -- 标识[**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)对话框中单击的按钮
- [**VbMsgBoxStyle**](/official/Reference/VBA/Constants/VbMsgBoxStyle) -- [**MsgBox**](/official/Reference/VBA/Interaction/MsgBox)的按钮、图标、模态等标志
- [**VbStrConv**](/official/Reference/VBA/Constants/VbStrConv) -- [**StrConv**](/official/Reference/VBA/Strings/StrConv)的转换类型标志
- [**VbTriState**](/official/Reference/VBA/Constants/VbTriState) -- [**FormatNumber**](/official/Reference/VBA/Strings/FormatNumber)和[**FormatCurrency**](/official/Reference/VBA/Strings/FormatCurrency)等格式化函数的三态值
- [**VbVarType**](/official/Reference/VBA/Constants/VbVarType) -- [**VarType**](/official/Reference/VBA/Information/VarType)返回的Variant子类型代码

### VBRUN包

86个枚举，涵盖经典VB6控件和窗体的各个方面 --- 对齐、边框样式、颜色、拖放、OLE容器选项、打印机设置、窗口状态等。

- [**AlignConstants**](/official/Reference/VBRUN/Constants/AlignConstants) -- 图片框、工具栏和数据控件的**Align**属性值
- [**AlignmentConstants**](/official/Reference/VBRUN/Constants/AlignmentConstants) -- 标签、文本框和选项按钮控件的文本对齐
- [**AlignmentConstantsNoCenter**](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- 不支持居中的左/右对齐值
- [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) -- **Appearance**属性的绘制样式
- [**ApplicationStartConstants**](/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- 独立启动与Automation调用启动模式
- [**AspectTypeConstants**](/official/Reference/VBRUN/Constants/AspectTypeConstants) -- **DataObjectFormat**的OLE渲染方面标识符
- [**AsyncReadConstants**](/official/Reference/VBRUN/Constants/AsyncReadConstants) -- **UserControl.AsyncRead**的*AsyncReadOptions*参数标志
- [**AsyncStatusCodeConstants**](/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- **AsyncReadProgress**期间报告的状态代码
- [**AsyncTypeConstants**](/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- **UserControl.AsyncRead**传递的数据类型
- [**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- 不透明与透明背景填充
- [**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants) -- Shape和Line控件**BorderStyle**属性的线条样式
- [**ButtonConstants**](/official/Reference/VBRUN/Constants/ButtonConstants) -- 命令按钮样式，可选基于图片的外观
- [**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants) -- 复选框**Value**属性的状态值
- [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants) -- **DataObject**和**Clipboard**的剪贴板格式标识符
- [**ColorConstants**](/official/Reference/VBRUN/Constants/ColorConstants) -- 常用命名RGB颜色
- [**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants) -- 组合框**Style**属性的样式值
- [**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- 文本框、图片框和标签的边框样式
- [**ControlBorderStyleConstantsCustom**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- 包含自绘边框的扩展边框样式
- [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) -- 标准内部控件类型标识符
- [**DatabaseTypeConstants**](/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- Data控件**DefaultType**属性的数据库引擎
- [**DataBOFconstants**](/official/Reference/VBRUN/Constants/DataBOFconstants) -- 用户移动超过记录集起始处时的操作
- [**DataEOFConstants**](/official/Reference/VBRUN/Constants/DataEOFConstants) -- 用户移动超过记录集末尾处时的操作
- [**DataErrorConstants**](/official/Reference/VBRUN/Constants/DataErrorConstants) -- Data控件**Error**事件的响应值
- [**DataValidateConstants**](/official/Reference/VBRUN/Constants/DataValidateConstants) -- **Validate**事件中的操作代码
- [**DefaultCursorTypeConstants**](/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- Data控件连接的游标驱动程序
- [**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants) -- 窗体和工具栏的停靠边缘值
- [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants) -- **Drag**方法的操作值
- [**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants) -- 控件的自动与手动拖动模式
- [**DragOverConstants**](/official/Reference/VBRUN/Constants/DragOverConstants) -- **DragOver**事件中的状态值
- [**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants) -- **DrawMode**属性的GDI光栅操作值
- [**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants) -- **DrawStyle**属性的线条样式
- [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants) -- **FillStyle**属性的填充图案
- [**FillStyleConstantsEx**](/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- 包含渐变填充的扩展填充图案
- [**FormArrangeConstants**](/official/Reference/VBRUN/Constants/FormArrangeConstants) -- MDI **Arrange**方法的排列模式
- [**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- 窗体**BorderStyle**属性的边框和框架样式
- [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants) -- **Show**的*Modal*参数的模态值
- [**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- 窗体**WindowState**属性的窗口状态值
- [**HitResultConstants**](/official/Reference/VBRUN/Constants/HitResultConstants) -- **UserControl**的**HitTest**事件返回值
- [**KeyCodeConstants**](/official/Reference/VBRUN/Constants/KeyCodeConstants) -- **KeyDown**和**KeyUp**事件的虚拟键代码
- [**LinkModeConstants**](/official/Reference/VBRUN/Constants/LinkModeConstants) -- **LinkMode**属性的DDE链接模式值
- [**ListBoxConstants**](/official/Reference/VBRUN/Constants/ListBoxConstants) -- 列表框**Style**属性的样式值
- [**LoadPictureColorConstants**](/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- **LoadPicture**的颜色深度
- [**LoadPictureSizeConstants**](/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- **LoadPicture**的大小选择器
- [**LoadResConstants**](/official/Reference/VBRUN/Constants/LoadResConstants) -- **LoadResPicture**的资源类型值
- [**LogEventTypeConstants**](/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- **LogEvent**的严重性值
- [**LogModeConstants**](/official/Reference/VBRUN/Constants/LogModeConstants) -- **App.StartLogging**的目标和行为标志
- [**MenuAccelConstants**](/official/Reference/VBRUN/Constants/MenuAccelConstants) -- 菜单项快捷键的键盘加速键代码
- [**MenuControlConstants**](/official/Reference/VBRUN/Constants/MenuControlConstants) -- **PopupMenu**的对齐和触发按钮标志
- [**MouseButtonConstants**](/official/Reference/VBRUN/Constants/MouseButtonConstants) -- 鼠标事件*Button*参数的位标志
- [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) -- **MousePointer**属性的光标形状值
- [**MultiSelectConstants**](/official/Reference/VBRUN/Constants/MultiSelectConstants) -- 列表框**MultiSelect**属性的多选模式
- [**NegotiatePositionConstants**](/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- OLE就地激活期间的菜单位置
- [**OldLinkModeConstants**](/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- 为兼容性保留的旧版DDE链接模式值
- [**OLEContainerActivateConstants**](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- **AutoActivate**属性的激活触发器
- [**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants) -- 所有OLE容器选项值的组合枚举
- [**OLEContainerDisplayTypeConstants**](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- OLE容器**DisplayType**属性的显示样式
- [**OLEContainerSizeModeConstants**](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- OLE容器**SizeMode**属性的大小调整规则
- [**OLEContainerTypesAllowedConstants**](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- **OLETypeAllowed**的对象类型筛选器
- [**OLEContainerUpdateOptionsConstants**](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- 链接OLE对象的更新模式
- [**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants) -- **OLEDragMode**的OLE拖动模式值
- [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants) -- **OLEDropMode**的OLE放置模式值
- [**OLEDropEffectConstants**](/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- OLE拖放事件*Effect*参数的位标志
- [**PaletteModeConstants**](/official/Reference/VBRUN/Constants/PaletteModeConstants) -- 窗体和UserControl的调色板来源值
- [**ParentControlsType**](/official/Reference/VBRUN/Constants/ParentControlsType) -- **ParentControls**集合的包装模式
- [**PictureTypeConstants**](/official/Reference/VBRUN/Constants/PictureTypeConstants) -- **stdole.IPictureDisp**的子类型值
- [**PrinterObjectConstants**](/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- 所有**Printer**对象选项值的组合枚举
- [**PrinterObjectConstants_ColorMode**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- **Printer.ColorMode**的颜色模式
- [**PrinterObjectConstants_Duplex**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- **Printer.Duplex**的双面模式
- [**PrinterObjectConstants_Orientation**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- **Printer.Orientation**的纸张方向
- [**PrinterObjectConstants_PaperBin**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- **Printer.PaperBin**的纸张来源
- [**PrinterObjectConstants_PaperSize**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- **Printer.PaperSize**的纸张大小
- [**PrinterObjectConstants_PrintQuality**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- **Printer.PrintQuality**的打印质量
- [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- 窗体**QueryUnload**事件的原因代码
- [**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants) -- **PaintPicture**的GDI光栅操作代码
- [**RecordsetTypeConstants**](/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- Data控件的记录集类型
- [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants) -- **ScaleMode**属性的度量单位
- [**ScrollBarConstants**](/official/Reference/VBRUN/Constants/ScrollBarConstants) -- 文本框等控件上显示的滚动条
- [**ShapeConstants**](/official/Reference/VBRUN/Constants/ShapeConstants) -- Shape控件**Shape**属性的几何形状值
- [**ShiftConstants**](/official/Reference/VBRUN/Constants/ShiftConstants) -- 鼠标和键盘事件的修饰键位标志
- [**ShortcutConstants**](/official/Reference/VBRUN/Constants/ShortcutConstants) -- 菜单项的快捷键标识符
- [**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- 窗体**StartUpPosition**属性的初始位置
- [**StorageTypeContants**](/official/Reference/VBRUN/Constants/StorageTypeContants) -- **DataObjectFormat**的OLE数据存储介质标识符
- [**SystemColorConstants**](/official/Reference/VBRUN/Constants/SystemColorConstants) -- 系统UI颜色引用（通过**TranslateColor**转换为纯RGB）
- [**VariantTypeConstants**](/official/Reference/VBRUN/Constants/VariantTypeConstants) -- 为兼容性保留的旧版DAO字段类型标签
- [**VerticalAlignmentConstants**](/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- 单元格样式控件的垂直文本对齐
- [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants) -- **ZOrder**方法的位置选择器

### WebView2包

10个枚举，涵盖导航错误、权限、下载位置、脚本对话框、打印方向和资源请求过滤。

- [**wv2DefaultDownloadCornerAlign**](/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) -- 将内置下载进度对话框锚定到控件的角落
- [**wv2ErrorStatus**](/official/Reference/WebView2/Enumerations/wv2ErrorStatus) -- 导航失败的原因（在**NavigationComplete**事件中传递）
- [**wv2HostResourceAccessKind**](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) -- 虚拟主机名映射的跨域访问策略
- [**wv2KeyEventKind**](/official/Reference/WebView2/Enumerations/wv2KeyEventKind) -- **AcceleratorKeyPressed**事件中的键盘消息类型
- [**wv2PermissionKind**](/official/Reference/WebView2/Enumerations/wv2PermissionKind) -- 页面正在请求的设备或浏览器功能
- [**wv2PermissionState**](/official/Reference/WebView2/Enumerations/wv2PermissionState) -- 宿主对权限请求的决定
- [**wv2PrintOrientation**](/official/Reference/WebView2/Enumerations/wv2PrintOrientation) -- **PrintToPdf**的页面方向
- [**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) -- 标识哪个WebView2进程失败
- [**wv2ScriptDialogKind**](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) -- 页面试图打开的JavaScript对话框类型
- [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) -- Web资源过滤器匹配的请求类型

### CustomControls包

13个枚举，控制`Waynes...`自定义控件的外观和行为。

- [**BorderStyle**](/official/Reference/CustomControls/Enumerations/BorderStyle) -- **WaynesForm**窗口的Win32框架样式
- [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) -- 32位ABGR颜色值类型别名
- [**CornerShape**](/official/Reference/CustomControls/Enumerations/CornerShape) -- 控件单个角的形状（方形、圆角、切角）
- [**Customtate**](/official/Reference/CustomControls/Enumerations/Customtate) -- 自定义状态绘制的控件状态标志
- [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) -- 控件相对于其容器的停靠方式
- [**FillPattern**](/official/Reference/CustomControls/Enumerations/FillPattern) -- **Fill**中颜色停止点如何应用于绘制区域
- [**FontWeight**](/official/Reference/CustomControls/Enumerations/FontWeight) -- 标准100--900 OpenType刻度上的字重
- [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount) -- 包中使用的像素度量类型别名
- [**PointSize**](/official/Reference/CustomControls/Enumerations/PointSize) -- 印刷点字体大小类型别名
- [**StartupPosition**](/official/Reference/CustomControls/Enumerations/StartupPosition) -- **WaynesForm**首次显示时的初始位置
- [**TextAlignment**](/official/Reference/CustomControls/Enumerations/TextAlignment) -- 控件内的水平和垂直文本对齐
- [**TextOverflowMode**](/official/Reference/CustomControls/Enumerations/TextOverflowMode) -- 不适合的文本如何截断
- [**WindowState**](/official/Reference/CustomControls/Enumerations/WindowState) -- **WaynesForm**的最小化、还原或最大化状态

### CEF包

2个枚举，涵盖日志详细程度和打印方向。

- [**CefLogSeverity**](/official/Reference/CEF/Enumerations/CefLogSeverity) -- CEF运行时记录消息到调试日志的最低严重性
- [**cefPrintOrientation**](/official/Reference/CEF/Enumerations/cefPrintOrientation) -- **PrintToPdf**的页面方向

### WinServicesLib包

4个枚举，涵盖服务类型、启动模式、控制代码和运行时状态。

- [**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- SCM可向运行中的服务传递的控制代码
- [**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) -- SCM何时以及如何启动服务
- [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- 服务向SCM报告的运行时状态值
- [**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- Win32服务类型值（独立进程、共享宿主、内核驱动）

### WinNativeCommonCtls包

10个枚举，用于八种原生通用控件。

- [**DTPickerFormatConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- **DTPicker**控件的显示格式
- [**ImlDrawConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- **ListImage.Draw**的渲染样式标志
- [**OrientationConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- **Slider**和**UpDown**的水平/垂直方向
- [**TreeBorderStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- **TreeView**和**ListView**共享的边框样式
- [**TreeLabelEditConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- **TreeView**上何时触发内联标签编辑
- [**TreeLineStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- **TreeView**是从根节点还是仅从子节点绘制连线
- [**TreeRelationshipConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- 新节点相对于现有节点的插入位置
- [**TreeSortOrderConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- **TreeView**和**Node**的升序或降序排序
- [**TreeSortTypeConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- 区分大小写或不区分大小写的排序比较
- [**TreeStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- **TreeView**的复合视觉样式（按钮、连线、图标）

---

## 字母顺序索引

**A**

- [**AlignConstants**](/official/Reference/VBRUN/Constants/AlignConstants) -- **Align**属性值（VBRUN）
- [**AlignmentConstants**](/official/Reference/VBRUN/Constants/AlignmentConstants) -- 标签和文本框的文本对齐（VBRUN）
- [**AlignmentConstantsNoCenter**](/official/Reference/VBRUN/Constants/AlignmentConstantsNoCenter) -- 不包含居中的左/右文本对齐（VBRUN）
- [**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants) -- **Appearance**属性的绘制样式（VBRUN）
- [**ApplicationStartConstants**](/official/Reference/VBRUN/Constants/ApplicationStartConstants) -- 独立与Automation启动模式（VBRUN）
- [**AspectTypeConstants**](/official/Reference/VBRUN/Constants/AspectTypeConstants) -- OLE渲染方面标识符（VBRUN）
- [**AsyncReadConstants**](/official/Reference/VBRUN/Constants/AsyncReadConstants) -- **UserControl.AsyncRead**选项标志（VBRUN）
- [**AsyncStatusCodeConstants**](/official/Reference/VBRUN/Constants/AsyncStatusCodeConstants) -- **AsyncReadProgress**状态代码（VBRUN）
- [**AsyncTypeConstants**](/official/Reference/VBRUN/Constants/AsyncTypeConstants) -- **UserControl.AsyncRead**的数据类型（VBRUN）

**B**

- [**BackFillStyleConstants**](/official/Reference/VBRUN/Constants/BackFillStyleConstants) -- 不透明与透明背景（VBRUN）
- [**BorderStyle**](/official/Reference/CustomControls/Enumerations/BorderStyle) -- **WaynesForm**的Win32框架样式（CustomControls）
- [**BorderStyleConstants**](/official/Reference/VBRUN/Constants/BorderStyleConstants) -- Shape和Line控件的线条样式（VBRUN）
- [**ButtonConstants**](/official/Reference/VBRUN/Constants/ButtonConstants) -- 图形命令按钮的样式（VBRUN）

**C**

- [**CefLogSeverity**](/official/Reference/CEF/Enumerations/CefLogSeverity) -- CEF调试日志最低严重性（CEF）
- [**cefPrintOrientation**](/official/Reference/CEF/Enumerations/cefPrintOrientation) -- **PrintToPdf**的页面方向（CEF）
- [**CheckBoxConstants**](/official/Reference/VBRUN/Constants/CheckBoxConstants) -- 复选框**Value**属性状态（VBRUN）
- [**ClipboardConstants**](/official/Reference/VBRUN/Constants/ClipboardConstants) -- 剪贴板格式标识符（VBRUN）
- [**ColorConstants**](/official/Reference/VBRUN/Constants/ColorConstants) -- 命名RGB颜色（VBRUN）
- [**ColorRGBA**](/official/Reference/CustomControls/Enumerations/ColorRGBA) -- 32位ABGR颜色类型别名（CustomControls）
- [**ComboBoxConstants**](/official/Reference/VBRUN/Constants/ComboBoxConstants) -- 组合框**Style**属性值（VBRUN）
- [**ControlBorderStyleConstants**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstants) -- 内部控件的边框样式（VBRUN）
- [**ControlBorderStyleConstantsCustom**](/official/Reference/VBRUN/Constants/ControlBorderStyleConstantsCustom) -- 包含自绘的扩展边框样式（VBRUN）
- [**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants) -- 标准内部控件类型标识符（VBRUN）
- [**CornerShape**](/official/Reference/CustomControls/Enumerations/CornerShape) -- 角形状（方形、圆角、切角）（CustomControls）
- [**Customtate**](/official/Reference/CustomControls/Enumerations/Customtate) -- 自定义绘制的控件状态标志（CustomControls）

**D**

- [**DatabaseTypeConstants**](/official/Reference/VBRUN/Constants/DatabaseTypeConstants) -- Data控件数据库引擎（VBRUN）
- [**DataBOFconstants**](/official/Reference/VBRUN/Constants/DataBOFconstants) -- 记录集开始处的操作（VBRUN）
- [**DataEOFConstants**](/official/Reference/VBRUN/Constants/DataEOFConstants) -- 记录集末尾处的操作（VBRUN）
- [**DataErrorConstants**](/official/Reference/VBRUN/Constants/DataErrorConstants) -- Data控件**Error**事件响应值（VBRUN）
- [**DataValidateConstants**](/official/Reference/VBRUN/Constants/DataValidateConstants) -- **Validate**事件中的操作代码（VBRUN）
- [**DefaultCursorTypeConstants**](/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants) -- Data控件连接的游标驱动程序（VBRUN）
- [**DockMode**](/official/Reference/CustomControls/Enumerations/DockMode) -- CustomControl如何停靠（CustomControls）
- [**DockModeConstants**](/official/Reference/VBRUN/Constants/DockModeConstants) -- 窗体和工具栏的停靠边缘值（VBRUN）
- [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants) -- **Drag**方法操作值（VBRUN）
- [**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants) -- 自动与手动拖动模式（VBRUN）
- [**DragOverConstants**](/official/Reference/VBRUN/Constants/DragOverConstants) -- **DragOver**事件中的状态值（VBRUN）
- [**DrawModeConstants**](/official/Reference/VBRUN/Constants/DrawModeConstants) -- **DrawMode**的GDI光栅操作（VBRUN）
- [**DrawStyleConstants**](/official/Reference/VBRUN/Constants/DrawStyleConstants) -- **DrawStyle**属性的线条样式（VBRUN）
- [**DTPickerFormatConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/DTPickerFormatConstants) -- **DTPicker**显示格式（WinNativeCommonCtls）

**F**

- [**FillPattern**](/official/Reference/CustomControls/Enumerations/FillPattern) -- **Fill**中颜色停止点如何应用（CustomControls）
- [**FillStyleConstants**](/official/Reference/VBRUN/Constants/FillStyleConstants) -- **FillStyle**属性的填充图案（VBRUN）
- [**FillStyleConstantsEx**](/official/Reference/VBRUN/Constants/FillStyleConstantsEx) -- 包含渐变填充的扩展填充图案（VBRUN）
- [**FontWeight**](/official/Reference/CustomControls/Enumerations/FontWeight) -- 100--900刻度上的字重（CustomControls）
- [**FormArrangeConstants**](/official/Reference/VBRUN/Constants/FormArrangeConstants) -- MDI子窗口排列模式（VBRUN）
- [**FormBorderStyleConstants**](/official/Reference/VBRUN/Constants/FormBorderStyleConstants) -- 窗体边框和框架样式（VBRUN）
- [**FormShowConstants**](/official/Reference/VBRUN/Constants/FormShowConstants) -- **Show**的模态性（VBRUN）
- [**FormWindowStateConstants**](/official/Reference/VBRUN/Constants/FormWindowStateConstants) -- 窗体窗口状态（VBRUN）

**H**

- [**HitResultConstants**](/official/Reference/VBRUN/Constants/HitResultConstants) -- **UserControl.HitTest**返回值（VBRUN）

**I**

- [**ImlDrawConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/ImlDrawConstants) -- **ListImage.Draw**渲染样式标志（WinNativeCommonCtls）

**K**

- [**KeyCodeConstants**](/official/Reference/VBRUN/Constants/KeyCodeConstants) -- 键盘事件的虚拟键代码（VBRUN）

**L**

- [**LinkModeConstants**](/official/Reference/VBRUN/Constants/LinkModeConstants) -- DDE链接模式值（VBRUN）
- [**ListBoxConstants**](/official/Reference/VBRUN/Constants/ListBoxConstants) -- 列表框**Style**属性值（VBRUN）
- [**LoadPictureColorConstants**](/official/Reference/VBRUN/Constants/LoadPictureColorConstants) -- **LoadPicture**颜色深度（VBRUN）
- [**LoadPictureSizeConstants**](/official/Reference/VBRUN/Constants/LoadPictureSizeConstants) -- **LoadPicture**大小选择器（VBRUN）
- [**LoadResConstants**](/official/Reference/VBRUN/Constants/LoadResConstants) -- **LoadResPicture**资源类型（VBRUN）
- [**LogEventTypeConstants**](/official/Reference/VBRUN/Constants/LogEventTypeConstants) -- **LogEvent**严重性值（VBRUN）
- [**LogModeConstants**](/official/Reference/VBRUN/Constants/LogModeConstants) -- **App.StartLogging**目标标志（VBRUN）

**M**

- [**MenuAccelConstants**](/official/Reference/VBRUN/Constants/MenuAccelConstants) -- 菜单项键盘加速键代码（VBRUN）
- [**MenuControlConstants**](/official/Reference/VBRUN/Constants/MenuControlConstants) -- **PopupMenu**对齐和触发标志（VBRUN）
- [**MouseButtonConstants**](/official/Reference/VBRUN/Constants/MouseButtonConstants) -- 鼠标事件*Button*参数位标志（VBRUN）
- [**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) -- **MousePointer**属性光标形状（VBRUN）
- [**MultiSelectConstants**](/official/Reference/VBRUN/Constants/MultiSelectConstants) -- 列表框多选模式（VBRUN）

**N**

- [**NegotiatePositionConstants**](/official/Reference/VBRUN/Constants/NegotiatePositionConstants) -- OLE就地激活期间的菜单位置（VBRUN）

**O**

- [**OldLinkModeConstants**](/official/Reference/VBRUN/Constants/OldLinkModeConstants) -- 旧版DDE链接模式值（VBRUN）
- [**OLEContainerActivateConstants**](/official/Reference/VBRUN/Constants/OLEContainerActivateConstants) -- OLE容器自动激活触发器（VBRUN）
- [**OLEContainerConstants**](/official/Reference/VBRUN/Constants/OLEContainerConstants) -- 组合的OLE容器选项值（VBRUN）
- [**OLEContainerDisplayTypeConstants**](/official/Reference/VBRUN/Constants/OLEContainerDisplayTypeConstants) -- OLE容器显示样式（VBRUN）
- [**OLEContainerSizeModeConstants**](/official/Reference/VBRUN/Constants/OLEContainerSizeModeConstants) -- OLE容器大小调整规则（VBRUN）
- [**OLEContainerTypesAllowedConstants**](/official/Reference/VBRUN/Constants/OLEContainerTypesAllowedConstants) -- OLE容器对象类型筛选器（VBRUN）
- [**OLEContainerUpdateOptionsConstants**](/official/Reference/VBRUN/Constants/OLEContainerUpdateOptionsConstants) -- OLE容器更新模式（VBRUN）
- [**OLEDragConstants**](/official/Reference/VBRUN/Constants/OLEDragConstants) -- **OLEDragMode**属性值（VBRUN）
- [**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants) -- **OLEDropMode**属性值（VBRUN）
- [**OLEDropEffectConstants**](/official/Reference/VBRUN/Constants/OLEDropEffectConstants) -- OLE拖放*Effect*位标志（VBRUN）
- [**OrientationConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/OrientationConstants) -- **Slider**和**UpDown**的水平/垂直（WinNativeCommonCtls）

**P**

- [**PaletteModeConstants**](/official/Reference/VBRUN/Constants/PaletteModeConstants) -- 窗体和UserControl的调色板来源（VBRUN）
- [**ParentControlsType**](/official/Reference/VBRUN/Constants/ParentControlsType) -- **ParentControls**集合包装模式（VBRUN）
- [**PictureTypeConstants**](/official/Reference/VBRUN/Constants/PictureTypeConstants) -- **IPictureDisp**子类型值（VBRUN）
- [**PixelCount**](/official/Reference/CustomControls/Enumerations/PixelCount) -- 像素度量类型别名（CustomControls）
- [**PointSize**](/official/Reference/CustomControls/Enumerations/PointSize) -- 印刷点字体大小类型别名（CustomControls）
- [**PrinterObjectConstants**](/official/Reference/VBRUN/Constants/PrinterObjectConstants) -- 组合的**Printer**对象选项值（VBRUN）
- [**PrinterObjectConstants_ColorMode**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_ColorMode) -- **Printer.ColorMode**值（VBRUN）
- [**PrinterObjectConstants_Duplex**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Duplex) -- **Printer.Duplex**值（VBRUN）
- [**PrinterObjectConstants_Orientation**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_Orientation) -- **Printer.Orientation**值（VBRUN）
- [**PrinterObjectConstants_PaperBin**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperBin) -- **Printer.PaperBin**值（VBRUN）
- [**PrinterObjectConstants_PaperSize**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PaperSize) -- **Printer.PaperSize**值（VBRUN）
- [**PrinterObjectConstants_PrintQuality**](/official/Reference/VBRUN/Constants/PrinterObjectConstants_PrintQuality) -- **Printer.PrintQuality**值（VBRUN）

**Q**

- [**QueryUnloadConstants**](/official/Reference/VBRUN/Constants/QueryUnloadConstants) -- **QueryUnload**事件原因代码（VBRUN）

**R**

- [**RasterOpConstants**](/official/Reference/VBRUN/Constants/RasterOpConstants) -- **PaintPicture**的GDI光栅操作代码（VBRUN）
- [**RecordsetTypeConstants**](/official/Reference/VBRUN/Constants/RecordsetTypeConstants) -- Data控件记录集类型（VBRUN）

**S**

- [**ScaleModeConstants**](/official/Reference/VBRUN/Constants/ScaleModeConstants) -- **ScaleMode**的度量单位（VBRUN）
- [**ScrollBarConstants**](/official/Reference/VBRUN/Constants/ScrollBarConstants) -- 控件上显示的滚动条（VBRUN）
- [**ServiceControlCodeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceControlCodeConstants) -- 运行中服务的SCM控制代码（WinServicesLib）
- [**ServiceStartConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStartConstants) -- 服务启动模式（WinServicesLib）
- [**ServiceStatusConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceStatusConstants) -- 服务运行时状态值（WinServicesLib）
- [**ServiceTypeConstants**](/official/Reference/WinServicesLib/Enumerations/ServiceTypeConstants) -- Win32服务类型（WinServicesLib）
- [**ShapeConstants**](/official/Reference/VBRUN/Constants/ShapeConstants) -- Shape控件的几何形状（VBRUN）
- [**ShiftConstants**](/official/Reference/VBRUN/Constants/ShiftConstants) -- 鼠标和键盘事件的修饰键位标志（VBRUN）
- [**ShortcutConstants**](/official/Reference/VBRUN/Constants/ShortcutConstants) -- 菜单项键盘快捷键标识符（VBRUN）
- [**StartupPosition**](/official/Reference/CustomControls/Enumerations/StartupPosition) -- **WaynesForm**的初始位置（CustomControls）
- [**StartUpPositionConstants**](/official/Reference/VBRUN/Constants/StartUpPositionConstants) -- 窗体**StartUpPosition**属性值（VBRUN）
- [**StorageTypeContants**](/official/Reference/VBRUN/Constants/StorageTypeContants) -- OLE数据存储介质标识符（VBRUN）
- [**SystemColorConstants**](/official/Reference/VBRUN/Constants/SystemColorConstants) -- 系统UI颜色引用（VBRUN）

**T**

- [**TextAlignment**](/official/Reference/CustomControls/Enumerations/TextAlignment) -- 水平和垂直文本对齐（CustomControls）
- [**TextOverflowMode**](/official/Reference/CustomControls/Enumerations/TextOverflowMode) -- 文本截断模式（CustomControls）
- [**TreeBorderStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeBorderStyleConstants) -- **TreeView**和**ListView**边框样式（WinNativeCommonCtls）
- [**TreeLabelEditConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLabelEditConstants) -- **TreeView**内联标签编辑触发器（WinNativeCommonCtls）
- [**TreeLineStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeLineStyleConstants) -- **TreeView**树线范围（WinNativeCommonCtls）
- [**TreeRelationshipConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeRelationshipConstants) -- **Nodes.Add**插入位置（WinNativeCommonCtls）
- [**TreeSortOrderConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortOrderConstants) -- **TreeView**/**Node**排序方向（WinNativeCommonCtls）
- [**TreeSortTypeConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeSortTypeConstants) -- **TreeView**/**Node**排序比较模式（WinNativeCommonCtls）
- [**TreeStyleConstants**](/official/Reference/WinNativeCommonCtls/Enumerations/TreeStyleConstants) -- **TreeView**复合视觉样式（WinNativeCommonCtls）

**V**

- [**VbAppWinStyle**](/official/Reference/VBA/Constants/VbAppWinStyle) -- **Shell**的窗口样式值（VBA）
- [**VbArchitecture**](/official/Reference/VBA/Constants/VbArchitecture) -- 处理器架构值（VBA）
- [**VbCalendar**](/official/Reference/VBA/Constants/VbCalendar) -- 日历类型值（VBA）
- [**VbCallType**](/official/Reference/VBA/Constants/VbCallType) -- **CallByName**调用类型标志（VBA）
- [**VbCompareMethod**](/official/Reference/VBA/Constants/VbCompareMethod) -- 字符串函数的文本比较模式（VBA）
- [**VbDateTimeFormat**](/official/Reference/VBA/Constants/VbDateTimeFormat) -- **FormatDateTime**格式代码（VBA）
- [**VbDayOfWeek**](/official/Reference/VBA/Constants/VbDayOfWeek) -- 日期函数的星期常量（VBA）
- [**VbFileAttribute**](/official/Reference/VBA/Constants/VbFileAttribute) -- 文件属性标志（VBA）
- [**VbFirstWeekOfYear**](/official/Reference/VBA/Constants/VbFirstWeekOfYear) -- 日期函数的首周选择器（VBA）
- [**VbIMEStatus**](/official/Reference/VBA/Constants/VbIMEStatus) -- 输入法编辑器模式常量（VBA）
- [**VbMsgBoxResult**](/official/Reference/VBA/Constants/VbMsgBoxResult) -- **MsgBox**按钮点击标识符（VBA）
- [**VbMsgBoxStyle**](/official/Reference/VBA/Constants/VbMsgBoxStyle) -- **MsgBox**按钮、图标和模态标志（VBA）
- [**VbStrConv**](/official/Reference/VBA/Constants/VbStrConv) -- **StrConv**转换类型标志（VBA）
- [**VbTriState**](/official/Reference/VBA/Constants/VbTriState) -- 格式化函数的三态值（VBA）
- [**VbVarType**](/official/Reference/VBA/Constants/VbVarType) -- **VarType** Variant子类型代码（VBA）
- [**VariantTypeConstants**](/official/Reference/VBRUN/Constants/VariantTypeConstants) -- 旧版DAO字段类型标签（VBRUN）
- [**VerticalAlignmentConstants**](/official/Reference/VBRUN/Constants/VerticalAlignmentConstants) -- 垂直文本对齐（VBRUN）

**W**

- [**WindowState**](/official/Reference/CustomControls/Enumerations/WindowState) -- **WaynesForm**窗口状态（CustomControls）
- [**wv2DefaultDownloadCornerAlign**](/official/Reference/WebView2/Enumerations/wv2DefaultDownloadCornerAlign) -- 下载对话框角对齐（WebView2）
- [**wv2ErrorStatus**](/official/Reference/WebView2/Enumerations/wv2ErrorStatus) -- 导航失败原因（WebView2）
- [**wv2HostResourceAccessKind**](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) -- 虚拟主机名跨域访问策略（WebView2）
- [**wv2KeyEventKind**](/official/Reference/WebView2/Enumerations/wv2KeyEventKind) -- 加速键事件类型（WebView2）
- [**wv2PermissionKind**](/official/Reference/WebView2/Enumerations/wv2PermissionKind) -- 权限请求功能标识符（WebView2）
- [**wv2PermissionState**](/official/Reference/WebView2/Enumerations/wv2PermissionState) -- 权限请求决定（WebView2）
- [**wv2PrintOrientation**](/official/Reference/WebView2/Enumerations/wv2PrintOrientation) -- **PrintToPdf**页面方向（WebView2）
- [**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) -- 失败的WebView2进程标识符（WebView2）
- [**wv2ScriptDialogKind**](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind) -- JavaScript对话框类型（WebView2）
- [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) -- Web资源过滤器请求类型（WebView2）

**Z**

- [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants) -- **ZOrder**方法位置选择器（VBRUN）

---

### 另见

- [语句](/official/Reference/Statements) -- 语言语句的字母顺序索引
- [过程和函数](/official/Reference/Procedures-and-Functions) -- 可调用运行时成员的字母顺序索引
- [运算符](/official/Reference/Operators) -- 算术、比较、逻辑和位运算符
- [包](/official/Reference/Packages) -- 全部12个内置包