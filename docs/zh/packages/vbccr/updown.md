# UpDown Control (VBCCRUpDown)

VBCCRUpDown 控件是一个上下调节控件，通常与文本框或其他控件配合使用，用于调整数值。它提供了一个直观的界面来增加或减少数值。

## 属性

### 关键属性

- `Value`: 当前值
- `Min`: 最小值
- `Max`: 最大值
- `Increment`: 步进值
- `Buddy`: 关联控件
- `BuddyProperty`: 关联控件的属性
- `Wrap`: 是否循环
- `Orientation`: 方向（垂直/水平）
- `AutoBuddy`: 是否自动关联相邻控件
- `Enabled`: 启用/禁用状态
- `Thousands`: 是否显示千分位分隔符

## 方法

### 主要方法

- `Value = NewValue`: 设置当前值
- `GetValue()`: 获取当前值
- `SetRange(Min As Long, Max As Long)`: 设置值范围
- `GetRange(Min As Long, Max As Long)`: 获取值范围
- `SetBuddy(ByVal hWndBuddy As Long)`: 设置关联控件
- `GetBuddy() As Long`: 获取关联控件句柄

## 事件

- `Change()`: 值改变事件
- `Changing(Cancel As Boolean)`: 值即将改变事件
- `Delta(ByVal Delta As Long)`: 值改变量事件
- `MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)`
- `MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)`

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置 UpDown 控件
    With UpDown1
        .Min = 0
        .Max = 100
        .Value = 50
        .Increment = 1
        .Wrap = False
        
        ' 关联文本框
        Set .Buddy = Text1
        .BuddyProperty = "Text"
    End With
End Sub
```

### 配合文本框使用

```vb
Private Sub SetupNumericInput()
    ' 配置文本框
    With Text1
        .Text = "0"
        .Alignment = vbCenter
    End With
    
    ' 配置 UpDown
    With UpDown1
        .SetRange 0, 1000
        .Value = 0
        .Increment = 10
        Set .Buddy = Text1
        .Thousands = True  ' 显示千分位
    End With
End Sub

Private Sub Text1_Change()
    ' 验证输入
    If Not IsNumeric(Text1.Text) Then
        Text1.Text = UpDown1.Value
    End If
End Sub

Private Sub UpDown1_Change()
    ' 更新显示
    lblValue.Caption = "当前值: " & Format$(UpDown1.Value, "#,##0")
End Sub
```

### 范围控制

```vb
Private Sub CreateRangeControl()
    ' 最小值控制
    With upMin
        .SetRange 0, 1000
        .Value = 0
        .Increment = 10
        Set .Buddy = txtMin
    End With
    
    ' 最大值控制
    With upMax
        .SetRange 0, 1000
        .Value = 100
        .Increment = 10
        Set .Buddy = txtMax
    End With
End Sub

Private Sub ValidateRange()
    ' 确保最小值不大于最大值
    If upMin.Value > upMax.Value Then
        upMin.Value = upMax.Value
    End If
    
    ' 更新显示
    UpdateRangeDisplay
End Sub

Private Sub UpdateRangeDisplay()
    lblRange.Caption = "范围: " & upMin.Value & " - " & upMax.Value
End Sub
```

## 常见用例

### 数量选择器

```vb
Private Type ProductInfo
    Name As String
    Price As Currency
    Stock As Long
End Type

Private Product As ProductInfo

Private Sub CreateQuantitySelector()
    ' 初始化商品信息
    With Product
        .Name = "示例商品"
        .Price = 99.99
        .Stock = 100
    End With
    
    ' 配置数量选择器
    With UpDown1
        .SetRange 1, Product.Stock
        .Value = 1
        .Increment = 1
        Set .Buddy = txtQuantity
    End With
    
    UpdateTotal
End Sub

Private Sub UpDown1_Change()
    UpdateTotal
End Sub

Private Sub UpdateTotal()
    ' 计算总价
    Dim Total As Currency
    Total = Product.Price * UpDown1.Value
    
    lblTotal.Caption = "总价: " & Format$(Total, "货币格式")
End Sub
```

### 时间选择器

```vb
Private Sub CreateTimeSelector()
    ' 小时选择器
    With upHour
        .SetRange 0, 23
        .Value = Hour(Now)
        .Increment = 1
        .Wrap = True
        Set .Buddy = txtHour
    End With
    
    ' 分钟选择器
    With upMinute
        .SetRange 0, 59
        .Value = Minute(Now)
        .Increment = 1
        .Wrap = True
        Set .Buddy = txtMinute
    End With
    
    UpdateTimeDisplay
End Sub

Private Sub upHour_Change()
    UpdateTimeDisplay
End Sub

Private Sub upMinute_Change()
    UpdateTimeDisplay
End Sub

Private Sub UpdateTimeDisplay()
    lblTime.Caption = Format$(upHour.Value, "00") & ":" & _
                     Format$(upMinute.Value, "00")
End Sub
```

## 最佳实践

1. 值验证
```vb
Private Function ValidateValue(ByVal NewValue As Long) As Long
    ' 确保值在有效范围内
    If NewValue < UpDown1.Min Then
        ValidateValue = UpDown1.Min
    ElseIf NewValue > UpDown1.Max Then
        ValidateValue = UpDown1.Max
    Else
        ValidateValue = NewValue
    End If
End Function
```

2. 错误处理
```vb
Private Sub SafeUpdateValue(ByVal NewValue As Long)
    On Error GoTo ErrorHandler
    
    UpDown1.Value = ValidateValue(NewValue)
    Exit Sub
    
ErrorHandler:
    Debug.Print "更新值错误: " & Err.Description
    UpDown1.Value = UpDown1.Min
End Sub
```

## 已知问题和解决方案

1. 文本同步问题
```vb
Private Sub SynchronizeBuddy()
    ' 确保关联控件显示正确的值
    If Not UpDown1.Buddy Is Nothing Then
        Dim Value As String
        Value = Format$(UpDown1.Value, "#,##0")
        
        If UpDown1.Buddy.Text <> Value Then
            UpDown1.Buddy.Text = Value
        End If
    End If
End Sub
```

2. 键盘处理
```vb
Private Sub txtBuddy_KeyPress(KeyAscii As Integer)
    ' 只允许数字和控制键
    Select Case KeyAscii
        Case vbKey0 To vbKey9
            ' 允许数字
        Case vbKeyBack, vbKeyDelete
            ' 允许删除和退格
        Case Else
            ' 禁止其他字符
            KeyAscii = 0
    End Select
End Sub
```

## 高级特性

### 自定义格式化

```vb
Private Type FormatSettings
    UseThousands As Boolean
    Prefix As String
    Suffix As String
    DecimalPlaces As Long
End Type

Private Format As FormatSettings

Private Sub SetupCustomFormat()
    ' 配置格式化选项
    With Format
        .UseThousands = True
        .Prefix = "$"
        .Suffix = " USD"
        .DecimalPlaces = 2
    End With
    
    ' 配置控件
    With UpDown1
        .Increment = 1
        .SetRange 0, 10000
        .Value = 0
        Set .Buddy = txtValue
    End With
End Sub

Private Sub FormatValue(ByVal Value As Double)
    Dim FormattedValue As String
    
    ' 应用格式化
    With Format
        If .UseThousands Then
            FormattedValue = FormatNumber(Value, .DecimalPlaces)
        Else
            FormattedValue = Format$(Value, "0" & _
                IIf(.DecimalPlaces > 0, "." & String$(.DecimalPlaces, "0"), ""))
        End If
        
        FormattedValue = .Prefix & FormattedValue & .Suffix
    End With
    
    ' 更新显示
    If Not UpDown1.Buddy Is Nothing Then
        UpDown1.Buddy.Text = FormattedValue
    End If
End Sub
```

### 范围联动

```vb
Private Sub CreateLinkedUpDowns()
    ' 创建多个联动的 UpDown 控件
    
    ' 第一级控制
    With upLevel1
        .SetRange 0, 100
        .Value = 0
        .Increment = 10
        Set .Buddy = txtLevel1
    End With
    
    ' 第二级控制
    With upLevel2
        .SetRange 0, 10
        .Value = 0
        .Increment = 1
        Set .Buddy = txtLevel2
    End With
    
    ' 第三级控制
    With upLevel3
        .SetRange 0, 100
        .Value = 0
        .Increment = 5
        Set .Buddy = txtLevel3
    End With
End Sub

Private Sub upLevel1_Change()
    ' 调整第二级范围
    Dim MaxValue As Long
    MaxValue = 10 - Int(upLevel1.Value / 10)
    
    With upLevel2
        .SetRange 0, MaxValue
        If .Value > MaxValue Then
            .Value = MaxValue
        End If
    End With
    
    UpdateTotal
End Sub

Private Sub upLevel2_Change()
    ' 调整第三级范围
    Dim MaxValue As Long
    MaxValue = 100 - (upLevel1.Value * 10 + upLevel2.Value * 5)
    
    With upLevel3
        .SetRange 0, MaxValue
        If .Value > MaxValue Then
            .Value = MaxValue
        End If
    End With
    
    UpdateTotal
End Sub

Private Sub UpdateTotal()
    ' 计算总值
    Dim Total As Long
    Total = upLevel1.Value * 100 + _
           upLevel2.Value * 10 + _
           upLevel3.Value
           
    lblTotal.Caption = "总计: " & Format$(Total, "#,##0")
End Sub
```

### 高级动画

```vb
Private Declare Function SetTimer Lib "user32" ( _
    ByVal hwnd As Long, _
    ByVal nIDEvent As Long, _
    ByVal uElapse As Long, _
    ByVal lpTimerFunc As Long) As Long

Private Declare Function KillTimer Lib "user32" ( _
    ByVal hwnd As Long, _
    ByVal nIDEvent As Long) As Long

Private TimerID As Long
Private TargetValue As Long
Private StepSize As Long

Private Sub StartAnimation(ByVal Target As Long)
    ' 开始动画
    TargetValue = Target
    StepSize = (Target - UpDown1.Value) / 10
    
    If TimerID = 0 Then
        TimerID = SetTimer(Me.hwnd, 1, 50, AddressOf TimerProc)
    End If
End Sub

Private Sub TimerProc()
    ' 更新值
    Dim NewValue As Long
    NewValue = UpDown1.Value + StepSize
    
    If Abs(NewValue - TargetValue) <= Abs(StepSize) Then
        ' 到达目标
        UpDown1.Value = TargetValue
        KillTimer Me.hwnd, TimerID
        TimerID = 0
    Else
        UpDown1.Value = NewValue
    End If
End Sub
```
