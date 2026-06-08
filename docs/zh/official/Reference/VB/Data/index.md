---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'db6ee4ed-b437-4c26-be57-d1782d9ac2b1'
  PropagateID: 'db6ee4ed-b437-4c26-be57-d1782d9ac2b1'
  ReservedCode1: 'e69cc9a1-abe3-428c-9106-54f73d7dabe0'
  ReservedCode2: 'e69cc9a1-abe3-428c-9106-54f73d7dabe0'
---

---
title: "Data 数据控件"
parent: VB Package
permalink: /tB/Packages/VB/Data/
---

# Data 类

**Data**控件是一个Win32原生控件，用于打开DAO数据库并通过数据绑定向窗体上的其他控件公开单个记录集。它绘制一条包含四个箭头按钮的条——**Move-First**、**Move-Previous**、**Move-Next**、**Move-Last**——中间居中显示[**Caption**](#caption)，允许用户用鼠标浏览记录集。该控件通常在设计时放置在**Form**或**UserControl**上。设置[**DatabaseName**](#databasename)和[**RecordSource**](#recordsource)即可填充控件；记录集在控件首次创建时自动打开。默认事件是[**Validate**](#validate)；该控件没有可用的默认属性。

```vb
Private Sub Form_Load()
    With Data1
        .DatabaseName = App.Path & "\biblio.mdb"
        .RecordSource = "Authors"
        .Caption = "Authors"
    End With
    Set Text1.DataSource = Data1
    Text1.DataField = "Author"
End Sub

Private Sub Data1_Reposition()
    Me.Caption = "Author " & (Data1.Recordset.AbsolutePosition + 1)
End Sub
```


## 连接数据库

[**DefaultType**](#defaulttype)选择数据库引擎（[**DatabaseTypeConstants**](/official/Reference/VBRUN/Constants/DatabaseTypeConstants)）：

| 常量            | 值 | 引擎                                             |
|-----------------|-----|--------------------------------------------------|
| **vbUseJet**    | 2   | Microsoft Jet（经典VB6默认值）。                   |
| **vbUseODBC**   | 1   | ODBC数据源。                                      |
| **vbUseACE**    | 3   | Microsoft Access ACE引擎。twinBASIC新增。           |

[**DatabaseName**](#databasename)提供数据库文件路径（用于Jet/ACE）或DSN（用于ODBC）；[**Connect**](#connect)是连接字符串。Jet风格的默认值`"Access 2000;"`在数据库打开前被改写为`"MS Access;"`，与VB6行为匹配。[**Exclusive**](#exclusive)和[**ReadOnly**](#readonly)传递给**OpenDatabase**，[**Options**](#options)是DAO选项位掩码。[**DefaultCursorType**](#defaultcursortype)仅在**DefaultType**为**vbUseODBC**时使用。

[**RecordSource**](#recordsource)是针对数据库打开的表名（或SQL语句），[**RecordsetType**](#recordsettype)在表、动态集和快照之间选择（[**RecordsetTypeConstants**](/official/Reference/VBRUN/Constants/RecordsetTypeConstants)）。调用[**Refresh**](#refresh)使用这些属性的当前值重新打开记录集——通常在运行时更改其中一个属性后调用。

打开的对象以只读方式通过[**Database**](#database)公开，以读写方式通过[**Recordset**](#recordset)公开。为**Recordset**赋新值会断开与当前数据库的连接，采用新的记录集，并重新绑定所有依赖控件。

## 绑定控件

其他控件通过将其**DataSource**设置为此**Data**控件、将其**DataField**设置为[**Recordset**](#recordset)中的字段名来成为*数据绑定*控件。绑定控件在当前记录更改时从该字段读取值，并在下次保存时将用户编辑写回字段。**Data**控件调解双向操作，在绑定控件重新同步后引发[**Reposition**](#reposition)，在丢弃未保存编辑的操作之前引发[**Validate**](#validate)。

```vb
' 设计时这些通常在属性窗口中设置，
' 但也可以在代码中赋值：
Set txtTitle.DataSource = Data1
txtTitle.DataField = "Title"
Set chkInPrint.DataSource = Data1
chkInPrint.DataField = "InPrint"
```

## 导航和文件末尾行为

四个按钮通过**MoveFirst**、**MovePrevious**、**MoveNext**和**MoveLast**浏览记录集。[**BOFAction**](#bofaction)控制用户移过第一条记录时发生什么（[**DataBOFconstants**](/official/Reference/VBRUN/Constants/DataBOFconstants)）：**vbMoveFirst**（默认）跳回第一条记录；**vbBOF**让记录集停留在BOF标记上。[**EOFAction**](#eofaction)控制移过最后一条记录时发生什么（[**DataEOFConstants**](/official/Reference/VBRUN/Constants/DataEOFConstants)）：**vbMoveLast**（默认）、**vbEOF**或**vbAddNew**——后者清除所有绑定控件并开始新记录。

## 验证/保存周期

每当控件即将离开当前记录——通过导航按钮、编程移动、**Refresh**、**Update**、**Delete**或卸载窗体——它会引发[**Validate**](#validate)，带有来自[**DataValidateConstants**](/official/Reference/VBRUN/Constants/DataValidateConstants)的*Action*参数和指示绑定控件是否持有未保存编辑的*Save*标志。将*Action*设置为**vbDataActionCancel** (0)取消操作并保留当前记录。如果返回时*Save*非零且操作继续执行，绑定控件会在移动发生前将数据写回记录集。

[**Reposition**](#reposition)在成功移动后引发，此时绑定控件已显示新记录。[**UpdateControls**](#updatecontrols)在不引发**Reposition**的情况下将当前记录重新拉取到绑定控件中，[**UpdateRecord**](#updaterecord)保留用于显式保存而不移动（当前未实现）。

## 属性

### Appearance

确定操作系统如何绘制控件的边框。[**AppearanceConstants**](/official/Reference/VBRUN/Constants/AppearanceConstants)的成员：**vbAppearFlat**或**vbAppear3d**（默认）。

### BackColor

[**Caption**](#caption)后面条带的填充颜色，类型为**OLE_COLOR**。默认为系统窗口背景色。

### BOFAction

控制用户移过记录集开头时发生什么。[**DataBOFconstants**](/official/Reference/VBRUN/Constants/DataBOFconstants)的成员：**vbMoveFirst** (0，默认——跳回第一条记录)或**vbBOF** (1——让记录集停留在文件开头标记上，绑定控件保持清空)。

### Caption

导航按钮之间条带中绘制的文本。**String**，默认`"Data"`。字符串直接从底层窗口读取——赋值给**Caption**会立即反映。

语法：*object*.**Caption** [ = *string* ]

### CausesValidation

确定先前获得焦点的控件的**Validate**事件是否在此控件获得焦点之前运行。**Boolean**，默认**True**。这指的是*先前*控件的验证；关于**Data**控件自身的[**Validate**](#validate)事件，请参见上方的[验证/保存周期](#the-validate--save-cycle)部分。

### Connect

传递给**OpenDatabase**的连接字符串。**String**，默认`"Access 2000;"`。默认值在数据库打开前被改写为`"MS Access;"`，与VB6行为匹配。与[**DatabaseName**](#databasename)、[**Exclusive**](#exclusive)、[**ReadOnly**](#readonly)和[**Options**](#options)一起使用。

### ControlType

只读的[**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)值，将此控件标识为Data控件。始终为**vbDataControl**。

### Database

当前打开的DAO数据库。只读——赋值给[**Recordset**](#recordset)或调用[**Refresh**](#refresh)来更改。

### DatabaseName

数据库文件路径（用于**vbUseJet**和**vbUseACE**）或DSN（用于**vbUseODBC**）。**String**。与[**Connect**](#connect)、[**Exclusive**](#exclusive)、[**ReadOnly**](#readonly)和[**Options**](#options)组合使用，在控件首次实例化或调用[**Refresh**](#refresh)时打开数据库。

### DefaultCursorType

当[**DefaultType**](#defaulttype)为**vbUseODBC**时使用的游标驱动程序。[**DefaultCursorTypeConstants**](/official/Reference/VBRUN/Constants/DefaultCursorTypeConstants)的成员：**vbUseDefaultCursor** (0，默认)、**vbUseODBCCursor** (1)或**vbUseServersideCursor** (2)。Jet和ACE连接忽略此属性。

### DefaultType

要使用的数据库引擎。[**DatabaseTypeConstants**](/official/Reference/VBRUN/Constants/DatabaseTypeConstants)的成员：**vbUseJet** (2，默认)、**vbUseODBC** (1)或**vbUseACE** (3——twinBASIC新增，使用Access ACE引擎)。在记录集打开时读取一次。

### DragIcon

控件被拖放时用作鼠标光标的**StdPicture**（参见[**Drag**](#drag)和[**DragMode**](#dragmode)）。

### DragMode

控件是否应在用户按住鼠标时自动拖动。[**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants)的成员：**vbManual** (0，默认——从代码调用[**Drag**](#drag))或**vbAutomatic** (1)。

### Enabled

确定控件是否接受用户输入。禁用的**Data**控件仍显示标题，但将导航按钮绘制为变暗状态并忽略键盘和鼠标交互。**Boolean**，默认**True**。

### EOFAction

控制用户移过记录集末尾时发生什么。[**DataEOFConstants**](/official/Reference/VBRUN/Constants/DataEOFConstants)的成员：**vbMoveLast** (0，默认——跳回最后一条记录)、**vbEOF** (1——停留在文件末尾标记上)或**vbAddNew** (2——清除所有绑定控件并开始新记录以便编辑)。

### Exclusive

当为**True**时，数据库以独占方式打开（其他进程或**Data**控件无法打开它）。**Boolean**，默认**False**。

### Font

用于渲染[**Caption**](#caption)的**StdFont**。便捷属性**FontName**、**FontSize**、**FontBold**、**FontItalic**、**FontStrikethru**和**FontUnderline**读写此对象的相应成员。

### ForeColor

标题的文本颜色，类型为**OLE_COLOR**。默认为系统窗口文本色。禁用的控件使用系统灰色文本色绘制标题。

### Height

控件的高度，默认以缇为单位（或使用容器的**ScaleMode**单位）。**Single**。

### hWnd

底层控件的Win32窗口句柄，类型为**LongPtr**。只读。可用于传递给API函数。

### Index

当控件是控件数组的一部分时，此实例在数组中的从零开始的**Long**索引。运行时只读。

### Left

从容器的左边缘到控件左边缘的水平距离。**Single**。

### MouseIcon

当[**MousePointer**](#mousepointer)为**vbCustom**且指针位于控件上时用作鼠标光标的**StdPicture**。

### MousePointer

指针位于控件上时显示的鼠标光标。[**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants)的成员。

### Name

控件在其父窗体上的唯一设计时名称。运行时只读。

### Negotiate

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### OLEDropMode

控件如何响应OLE放置。[**OLEDropConstants**](/official/Reference/VBRUN/Constants/OLEDropConstants)的受限成员：**vbOLEDropNone**或**vbOLEDropManual**。**Data**控件不支持自动放置模式。

### Options

DAO **OpenRecordset**选项的位掩码（如`dbReadOnly`、`dbAppendOnly`、`dbDenyWrite`）。**Long**，默认`0`。在记录集打开时读取一次。

### Parent

对包含此控件的**Form**（或**UserControl**）的引用。只读。

### ReadOnly

当为**True**时，数据库以只读方式打开，阻止对绑定字段的编辑。**Boolean**，默认**False**。注意这是twinBASIC中的保留字，必须通过成员访问（`Data1.ReadOnly`）或在声明中转义（`[ReadOnly]`）来引用。

### Recordset

当前填充绑定控件的DAO记录集。**Object**（运行时为`DAO.Recordset`）。

语法：*object*.**Recordset** [ = *recordset* ]

读取**Recordset**返回打开的记录集，如果控件尚未连接则返回**Nothing**。使用**Set**设置**Recordset**会断开与当前数据库的连接，采用提供的记录集（及其父数据库），将其[**DatabaseName**](#databasename)、[**Connect**](#connect)、[**ReadOnly**](#readonly)、[**RecordsetType**](#recordsettype)和[**RecordSource**](#recordsource)值复制回控件，重新绑定所有依赖字段，并引发[**Reposition**](#reposition)。

### RecordsetType

要打开的记录集类型。[**RecordsetTypeConstants**](/official/Reference/VBRUN/Constants/RecordsetTypeConstants)的成员：**vbRSTypeTable** (0)、**vbRSTypeDynaset** (1，默认)或**vbRSTypeSnapShot** (2)。在记录集打开时读取一次。

### RecordSource

提供记录集的表名、查询名或SQL语句。**String**。在记录集打开时读取一次。

### RightToLeft

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

### TabIndex

控件在窗体TAB键导航顺序中的位置。**Long**。

### TabStop

用户是否可以通过按**TAB**键到达控件。**Boolean**，默认**True**。禁用的控件无论此设置如何都会被跳过。

### Tag

应用程序可用于将自定义数据与控件关联的自由格式**String**。框架忽略此属性。

### ToolTipText

当用户将鼠标悬停在控件上时作为工具提示显示的多行**String**。

### Top

从容器顶部到控件顶部的垂直距离。**Single**。

### Visible

控件是否显示。**Boolean**，默认**True**。

### VisualStyles

绘制导航按钮时是否使用操作系统主题引擎。**Boolean**，默认**True**。

### WhatsThisHelpID

标识应用程序帮助文件中"这是什么？"弹出帮助主题的**Long**值。参见[**ShowWhatsThis**](#showwhatsthis)。

### Width

控件的宽度。**Single**。

## 方法

### Drag

开始、完成或取消手动拖放操作。通常在[**DragMode**](#dragmode)为**vbManual**时从[**MouseDown**](#mousedown)处理程序中调用。

语法：*object*.**Drag** [ *Action* ]

*Action*
: *可选* [**DragConstants**](/official/Reference/VBRUN/Constants/DragConstants)的成员：**vbCancel** (0)、**vbBeginDrag** (1，默认)或**vbEndDrag** (2)。

### Move

在单次调用中重新定位并可选地调整控件大小。

语法：*object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

*Left*
: *必需* 给出新水平位置的**Single**值。

*Top*、*Width*、*Height*
: *可选* 对应属性的新值。省略的值保持不变。

### OLEDrag

从控件发起OLE拖动操作，引发[**OLEStartDrag**](#olestartdrag)事件以便应用程序填充**DataObject**。

语法：*object*.**OLEDrag**

### Refresh

保存绑定控件中所有未保存的编辑，关闭当前记录集，并使用[**DatabaseName**](#databasename)、[**Connect**](#connect)、[**RecordSource**](#recordsource)、[**RecordsetType**](#recordsettype)、[**Exclusive**](#exclusive)、[**ReadOnly**](#readonly)和[**Options**](#options)的当前值重新打开。绑定控件随后重新同步并引发[**Reposition**](#reposition)。

语法：*object*.**Refresh**

### SetFocus

将输入焦点移至控件。控件必须同时[**Visible**](#visible)和[**Enabled**](#enabled)，否则引发运行时错误5（*Invalid procedure call or argument*）。

语法：*object*.**SetFocus**

### ShowWhatsThis

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。
:::

以"这是什么？"弹出的方式显示由[**WhatsThisHelpID**](#whatsthishelpid)标识的主题。

语法：*object*.**ShowWhatsThis**

### UpdateControls

将当前记录的值重新读入所有绑定控件，丢弃任何未保存的编辑。当验证拒绝编辑时作为手动"还原"很有用。不引发[**Reposition**](#reposition)。

语法：*object*.**UpdateControls**

### UpdateRecord

::: info
保留用于与VB6兼容；目前在twinBASIC中未实现。在VB6中，这会将绑定控件的编辑保存到记录集而不引发[**Validate**](#validate)。在实现之前，可通过直接调用**Recordset.Update**强制保存，或触经过[验证/保存周期](#the-validate--save-cycle)的导航/刷新。
:::

语法：*object*.**UpdateRecord**

### ZOrder

将控件置于其同级堆栈的前面或后面。

语法：*object*.**ZOrder** [ *Position* ]

*Position*
: *可选* [**ZOrderConstants**](/official/Reference/VBRUN/Constants/ZOrderConstants)的成员：**vbBringToFront** (0，默认)或**vbSendToBack** (1)。

## 事件

### DragDrop

手动拖动操作在目标控件上结束时在目标控件上引发。

语法：*object*\_**DragDrop**( *Source* **As Control**, *X* **As Single**, *Y* **As Single** )

### DragOver

手动拖动操作进行中时在光标下方的控件上引发。

语法：*object*\_**DragOver**( *Source* **As Control**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### Error

::: info
保留用于与VB6兼容；目前在twinBASIC中不会引发。在VB6中，当异步DAO操作在应用程序可拦截的代码路径之外失败时引发此事件；通过正常的`On Error`处理产生的同步错误不需要此事件。
:::

语法：*object*\_**Error**( *DataErr* **As Integer**, *Response* **As Integer** )

### Initialize

在底层窗口创建后且记录集打开前立即引发一次。用于从代码及时设置[**DatabaseName**](#databasename)、[**RecordSource**](#recordsource)或[**Connect**](#connect)以进行首次连接。twinBASIC新增——VB6在**Data**控件上没有等效功能。

语法：*object*\_**Initialize**( )

### MouseDown

用户在控件上按下任意鼠标按钮时引发。

语法：*object*\_**MouseDown**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseMove

光标在控件上移动时引发。

语法：*object*\_**MouseMove**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseUp

用户在控件上释放鼠标按钮时引发。

语法：*object*\_**MouseUp**( *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### MouseWheel

鼠标滚轮在控件上滚动时引发。twinBASIC新增。

语法：*object*\_**MouseWheel**( *Delta* **As Integer**, *Horizontal* **As Boolean** )

### OLECompleteDrag

OLE拖动操作完成时在源控件上引发，指示目标接受了哪种效果（复制、移动、无）。

语法：*object*\_**OLECompleteDrag**( *Effect* **As Long** )

### OLEDragDrop

用户将数据放置到目标控件上时在目标控件上引发。

语法：*object*\_**OLEDragDrop**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single** )

### OLEDragOver

OLE拖动经过目标控件时在目标控件上引发。

语法：*object*\_**OLEDragOver**( *Data* **As DataObject**, *Effect* **As Long**, *Button* **As Integer**, *Shift* **As Integer**, *X* **As Single**, *Y* **As Single**, *State* **As Integer** )

### OLEGiveFeedback

拖动期间在源控件上引发，以便应用程序调整光标或其他视觉反馈。

语法：*object*\_**OLEGiveFeedback**( *Effect* **As Long**, *DefaultCursors* **As Boolean** )

### OLESetData

当目标请求已注册但尚未提供的数据格式时在源控件上引发。

语法：*object*\_**OLESetData**( *Data* **As DataObject**, *DataFormat* **As Integer** )

### OLEStartDrag

OLE拖动开始时在源控件上引发，以便应用程序填充**DataObject**并选择允许的效果。

语法：*object*\_**OLEStartDrag**( *Data* **As DataObject**, *AllowedEffects* **As Long** )

### Reposition

在当前记录更改后引发——通过导航按钮、对[**Recordset**](#recordset)的编程移动、对**Recordset**的赋值或[**Refresh**](#refresh)——且每个绑定控件已重新同步到新记录之后。这是更新派生UI（如"第 *n* 条，共 *m* 条"标题）的时机。

语法：*object*\_**Reposition**( )

### Resize

::: info
保留用于与VB6兼容；目前在twinBASIC中不会引发。
:::

语法：*object*\_**Resize**( )

### Validate

在任何将离开当前记录的操作之前引发——导航按钮、编程移动、**Update**、**Delete**、**Refresh**、**Find**、**AddNew**、显式关闭或卸载窗体。**默认事件。**

语法：*object*\_**Validate**( *Action* **As Integer**, *Save* **As Integer** )

*Action*
: [**DataValidateConstants**](/official/Reference/VBRUN/Constants/DataValidateConstants)的成员，标识触发验证的操作。将*Action*设置为**vbDataActionCancel** (0)取消操作并保留当前记录。

*Save*
: 进入时，当绑定控件持有未保存编辑时为非零。返回前将其设置为零可丢弃这些编辑而不写回；保持非零可在操作继续执行前将编辑写入记录集。