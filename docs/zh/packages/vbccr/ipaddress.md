# IPAddress Control (VBCCRIPAddress)

VBCCRIPAddress 控件是一个专门用于输入和显示 IP 地址的控件。它将 IP 地址分为四个字段，每个字段可以输入 0-255 的数值，并提供了方便的验证和格式化功能。

## 属性

### 关键属性

- `Text`: IP 地址字符串
- `Address`: IP 地址值（长整型）
- `Field1`, `Field2`, `Field3`, `Field4`: 各字段值
- `Enabled`: 启用/禁用状态
- `ReadOnly`: 是否只读
- `BorderStyle`: 边框样式
- `BackColor`: 背景颜色
- `ForeColor`: 前景颜色
- `Font`: 字体设置

## 方法

### 主要方法

- `Clear()`: 清除所有字段
- `SetAddress(Address As Long)`: 设置 IP 地址
- `GetAddress(Address As Long)`: 获取 IP 地址
- `SetRange(Field As Long, Min As Long, Max As Long)`: 设置字段范围
- `SetFocus(Field As Long)`: 设置焦点到指定字段

## 事件

- `Change()`: IP 地址改变事件
- `FieldChange(Field As Long)`: 字段值改变事件
- `KeyDown(KeyCode As Integer, Shift As Integer)`
- `KeyPress(KeyAscii As Integer)`
- `KeyUp(KeyCode As Integer, Shift As Integer)`
- `GotFocus()`: 获得焦点事件
- `LostFocus()`: 失去焦点事件

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置 IP 地址控件
    With IPAddress1
        .Clear
        .Text = "192.168.1.1"  ' 设置默认 IP
        .Enabled = True
        .ReadOnly = False
    End With
End Sub
```

### IP 地址验证

```vb
Private Function ValidateIPAddress() As Boolean
    With IPAddress1
        ' 检查是否为空
        If .Text = "..." Then
            MsgBox "请输入 IP 地址！", vbExclamation
            ValidateIPAddress = False
            Exit Function
        End If
        
        ' 验证各字段
        If .Field1 = 0 Then
            MsgBox "第一字段不能为 0！", vbExclamation
            ValidateIPAddress = False
            Exit Function
        End If
        
        ' 验证私有网段
        If .Field1 = 192 And .Field2 = 168 Then
            ValidateIPAddress = True
        Else
            MsgBox "IP 地址必须在 192.168.x.x 网段！", vbExclamation
            ValidateIPAddress = False
        End If
    End With
End Function
```

### 地址范围设置

```vb
Private Sub SetupIPRanges()
    With IPAddress1
        ' 设置第一字段范围
        .SetRange 1, 192, 192  ' 只允许 192
        
        ' 设置第二字段范围
        .SetRange 2, 168, 168  ' 只允许 168
        
        ' 设置第三字段范围
        .SetRange 3, 0, 255  ' 允许 0-255
        
        ' 设置第四字段范围
        .SetRange 4, 1, 254  ' 不允许 0 和 255
    End With
End Sub

Private Sub IPAddress1_FieldChange(Field As Long)
    ' 处理字段变化
    Select Case Field
        Case 1
            If IPAddress1.Field1 <> 192 Then
                MsgBox "第一字段必须是 192！", vbExclamation
                IPAddress1.Field1 = 192
            End If
            
        Case 2
            If IPAddress1.Field2 <> 168 Then
                MsgBox "第二字段必须是 168！", vbExclamation
                IPAddress1.Field2 = 168
            End If
    End Select
End Sub
```

## 常见用例

### 网络配置界面

```vb
Private Type NetworkConfig
    IPAddress As String
    Subnet As String
    Gateway As String
    DNS1 As String
    DNS2 As String
End Type

Private Config As NetworkConfig

Private Sub CreateNetworkConfigUI()
    ' IP 地址
    With ipAddress
        .Text = "192.168.1.100"
        .Tag = "IP"
    End With
    
    ' 子网掩码
    With ipSubnet
        .Text = "255.255.255.0"
        .Tag = "Subnet"
    End With
    
    ' 网关
    With ipGateway
        .Text = "192.168.1.1"
        .Tag = "Gateway"
    End With
    
    ' DNS 服务器
    With ipDNS1
        .Text = "8.8.8.8"
        .Tag = "DNS1"
    End With
    
    With ipDNS2
        .Text = "8.8.4.4"
        .Tag = "DNS2"
    End With
End Sub

Private Sub SaveNetworkConfig()
    ' 保存配置
    With Config
        .IPAddress = ipAddress.Text
        .Subnet = ipSubnet.Text
        .Gateway = ipGateway.Text
        .DNS1 = ipDNS1.Text
        .DNS2 = ipDNS2.Text
    End With
    
    ' 应用网络设置
    ApplyNetworkSettings
End Sub
```

### IP 地址列表管理

```vb
Private Type IPRange
    StartIP As String
    EndIP As String
    Description As String
End Type

Private IPRanges() As IPRange
Private RangeCount As Long

Private Sub AddIPRange()
    ' 获取起始和结束 IP
    Dim Start As String, EndIP As String
    Start = ipStart.Text
    EndIP = ipEnd.Text
    
    ' 验证范围
    If Not ValidateIPRange(Start, EndIP) Then
        Exit Sub
    End If
    
    ' 添加到列表
    RangeCount = RangeCount + 1
    ReDim Preserve IPRanges(1 To RangeCount)
    
    With IPRanges(RangeCount)
        .StartIP = Start
        .EndIP = EndIP
        .Description = txtDescription.Text
    End With
    
    ' 更新显示
    UpdateIPRangeList
End Sub

Private Function ValidateIPRange(ByVal StartIP As String, _
                               ByVal EndIP As String) As Boolean
    ' 转换为长整型进行比较
    Dim Start As Long, EndAddr As Long
    
    ipStart.GetAddress Start
    ipEnd.GetAddress EndAddr
    
    If Start > EndAddr Then
        MsgBox "起始 IP 不能大于结束 IP！", vbExclamation
        ValidateIPRange = False
    Else
        ValidateIPRange = True
    End If
End Function
```

## 最佳实践

1. IP 地址格式化
```vb
Private Function FormatIPAddress(ByVal Address As Long) As String
    Dim Bytes(0 To 3) As Byte
    
    ' 分解 IP 地址
    CopyMemory Bytes(0), Address, 4
    
    ' 格式化为字符串
    FormatIPAddress = Bytes(3) & "." & _
                     Bytes(2) & "." & _
                     Bytes(1) & "." & _
                     Bytes(0)
End Function
```

2. 错误处理
```vb
Private Function SafeSetAddress(ByVal IPString As String) As Boolean
    On Error GoTo ErrorHandler
    
    IPAddress1.Text = IPString
    SafeSetAddress = True
    Exit Function
    
ErrorHandler:
    Debug.Print "设置 IP 地址错误: " & Err.Description
    SafeSetAddress = False
End Function
```

## 已知问题和解决方案

1. 格式验证
```vb
Private Function IsValidIPFormat(ByVal IPString As String) As Boolean
    ' 检查格式
    If Len(IPString) = 0 Then Exit Function
    
    Dim Parts() As String
    Parts = Split(IPString, ".")
    
    If UBound(Parts) <> 3 Then Exit Function
    
    Dim i As Long
    For i = 0 To 3
        If Not IsNumeric(Parts(i)) Then Exit Function
        If Val(Parts(i)) < 0 Or Val(Parts(i)) > 255 Then Exit Function
    Next i
    
    IsValidIPFormat = True
End Function
```

2. 字段限制
```vb
Private Sub IPAddress1_KeyPress(KeyAscii As Integer)
    ' 只允许数字和点
    Select Case KeyAscii
        Case vbKey0 To vbKey9
            ' 允许数字
        Case Asc(".")
            ' 允许点
        Case vbKeyBack
            ' 允许退格
        Case Else
            KeyAscii = 0
    End Select
End Sub
```

## 高级特性

### IP 地址计算器

```vb
Private Type IPCalc
    Address As Long
    Subnet As Long
    NetworkAddress As Long
    BroadcastAddress As Long
    HostMin As Long
    HostMax As Long
    HostCount As Long
End Type

Private Sub CalculateIPRange()
    Dim Calc As IPCalc
    
    ' 获取 IP 地址和子网掩码
    ipAddress.GetAddress Calc.Address
    ipSubnet.GetAddress Calc.Subnet
    
    ' 计算网络地址
    Calc.NetworkAddress = Calc.Address And Calc.Subnet
    
    ' 计算广播地址
    Calc.BroadcastAddress = Calc.NetworkAddress Or (Not Calc.Subnet)
    
    ' 计算可用主机范围
    Calc.HostMin = Calc.NetworkAddress + 1
    Calc.HostMax = Calc.BroadcastAddress - 1
    
    ' 计算可用主机数
    Calc.HostCount = Calc.BroadcastAddress - Calc.NetworkAddress - 1
    
    ' 显示结果
    DisplayIPCalcResults Calc
End Sub

Private Sub DisplayIPCalcResults(Calc As IPCalc)
    With lstResults
        .Clear
        .AddItem "网络地址: " & FormatIPAddress(Calc.NetworkAddress)
        .AddItem "广播地址: " & FormatIPAddress(Calc.BroadcastAddress)
        .AddItem "第一个可用主机: " & FormatIPAddress(Calc.HostMin)
        .AddItem "最后一个可用主机: " & FormatIPAddress(Calc.HostMax)
        .AddItem "可用主机数: " & Format$(Calc.HostCount, "#,##0")
    End With
End Sub
```

### CIDR 计算器

```vb
Private Type CIDRInfo
    Prefix As Long
    Subnet As String
    Hosts As Long
End Type

Private CIDRTable(0 To 32) As CIDRInfo

Private Sub InitializeCIDRTable()
    Dim i As Long
    For i = 0 To 32
        With CIDRTable(i)
            .Prefix = i
            .Subnet = CalculateSubnetMask(i)
            .Hosts = IIf(i = 32, 0, (2 ^ (32 - i)) - 2)
        End With
    Next i
End Sub

Private Function CalculateSubnetMask(ByVal Prefix As Long) As String
    Dim Mask As Long
    
    If Prefix = 0 Then
        Mask = 0
    Else
        Mask = &HFFFFFFFF - ((2 ^ (32 - Prefix)) - 1)
    End If
    
    CalculateSubnetMask = FormatIPAddress(Mask)
End Function

Private Sub cboPrefix_Click()
    ' 显示选中前缀的信息
    Dim Prefix As Long
    Prefix = Val(cboPrefix.Text)
    
    If Prefix >= 0 And Prefix <= 32 Then
        With CIDRTable(Prefix)
            ipSubnet.Text = .Subnet
            lblHosts.Caption = "可用主机数: " & _
                Format$(.Hosts, "#,##0")
        End With
    End If
End Sub
```

### 自动 IP 分配器

```vb
Private Type IPPool
    StartAddress As Long
    EndAddress As Long
    UsedAddresses() As Boolean
    Count As Long
End Type

Private Pool As IPPool

Private Sub InitializeIPPool(ByVal StartIP As String, ByVal EndIP As String)
    ' 初始化 IP 地址池
    ipStart.Text = StartIP
    ipEnd.Text = EndIP
    
    ipStart.GetAddress Pool.StartAddress
    ipEnd.GetAddress Pool.EndAddress
    
    Pool.Count = Pool.EndAddress - Pool.StartAddress + 1
    ReDim Pool.UsedAddresses(1 To Pool.Count)
End Sub

Private Function AllocateIP() As String
    Dim i As Long
    
    ' 查找未使用的 IP
    For i = 1 To Pool.Count
        If Not Pool.UsedAddresses(i) Then
            Pool.UsedAddresses(i) = True
            AllocateIP = FormatIPAddress(Pool.StartAddress + i - 1)
            Exit Function
        End If
    Next i
    
    AllocateIP = ""  ' 没有可用 IP
End Function

Private Sub ReleaseIP(ByVal IPAddress As String)
    Dim Address As Long
    IPAddress1.Text = IPAddress
    IPAddress1.GetAddress Address
    
    ' 计算索引
    Dim Index As Long
    Index = Address - Pool.StartAddress + 1
    
    If Index >= 1 And Index <= Pool.Count Then
        Pool.UsedAddresses(Index) = False
    End If
End Sub
```
