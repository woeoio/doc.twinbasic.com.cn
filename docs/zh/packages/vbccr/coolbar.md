# CoolBar Control (VBCCRCoolBar)

CoolBar 控件是一个现代化的工具栏容器控件，它允许用户通过拖动来重新排列和调整工具栏的大小。每个工具栏可以包含其他控件，如按钮、组合框等。

## 属性

### 基本属性
- `Bands` - CoolBar 带集合
- `BandCount` - 带的数量
- `BackColor` - 背景颜色
- `ForeColor` - 前景颜色
- `Enabled` - 是否启用控件
- `Font` - 字体设置
- `Visible` - 是否可见

### 带属性
- `Band(Index).Text` - 带的标题文本
- `Band(Index).Width` - 带的宽度
- `Band(Index).MinWidth` - 带的最小宽度
- `Band(Index).MinHeight` - 带的最小高度
- `Band(Index).NewRow` - 是否在新行显示
- `Band(Index).ImageIndex` - 图像索引
- `Band(Index).Style` - 带的样式
  - `RBBS_NORMAL` (0) - 普通样式
  - `RBBS_BREAK` (1) - 换行
  - `RBBS_FIXEDSIZE` (2) - 固定大小
  - `RBBS_GRIPPERALWAYS` (4) - 始终显示抓取器
  - `RBBS_NOGRIPPER` (8) - 不显示抓取器
- `Band(Index).Child` - 子控件
- `Band(Index).ChildEdge` - 是否显示子控件边框
- `Band(Index).Visible` - 是否可见

## 事件

- `BeginBandResize` - 开始调整带大小时触发
- `BeginBandMove` - 开始移动带时触发
- `EndBandResize` - 结束调整带大小时触发
- `EndBandMove` - 结束移动带时触发
- `BandClick` - 点击带时触发
- `BandDblClick` - 双击带时触发
- `HeightChanged` - 高度改变时触发
- `Change` - 任何改变发生时触发

## 代码示例

### 基本用法

```vb
Private Sub InitCoolBar()
    With CoolBar1
        ' 添加第一个带（工具栏）
        With .Bands.Add
            .Text = "文件"
            .MinWidth = 200
            .Width = 250
            Set .Child = ToolBar1
            .ChildEdge = True
        End With
        
        ' 添加第二个带（组合框）
        With .Bands.Add
            .Text = "搜索"
            .MinWidth = 150
            .Width = 200
            Set .Child = ComboBox1
            .ChildEdge = True
        End With
    End With
End Sub
```

### 带管理器

```vb
Private Type BandInfo
    Index As Long
    Text As String
    Width As Long
    MinWidth As Long
    MinHeight As Long
    NewRow As Boolean
    Style As Long
    Visible As Boolean
    Position As Long
End Type

Private Type BandManager
    Bands() As BandInfo
    Count As Long
End Type

Private Manager As BandManager

Private Sub InitBandManager()
    With Manager
        ReDim .Bands(1 To 100)
        .Count = 0
        
        ' 保存当前带信息
        SaveBandInfo
    End With
End Sub

Private Sub SaveBandInfo()
    With Manager
        .Count = CoolBar1.BandCount
        
        Dim i As Long
        For i = 1 To .Count
            With .Bands(i)
                .Index = i
                .Text = CoolBar1.Bands(i).Text
                .Width = CoolBar1.Bands(i).Width
                .MinWidth = CoolBar1.Bands(i).MinWidth
                .MinHeight = CoolBar1.Bands(i).MinHeight
                .NewRow = CoolBar1.Bands(i).NewRow
                .Style = CoolBar1.Bands(i).Style
                .Visible = CoolBar1.Bands(i).Visible
                .Position = i
            End With
        Next i
    End With
End Sub

Private Sub RestoreBandInfo()
    With Manager
        Dim i As Long
        For i = 1 To .Count
            With .Bands(i)
                CoolBar1.Bands(.Position).Text = .Text
                CoolBar1.Bands(.Position).Width = .Width
                CoolBar1.Bands(.Position).MinWidth = .MinWidth
                CoolBar1.Bands(.Position).MinHeight = .MinHeight
                CoolBar1.Bands(.Position).NewRow = .NewRow
                CoolBar1.Bands(.Position).Style = .Style
                CoolBar1.Bands(.Position).Visible = .Visible
            End With
        Next i
    End With
End Sub

Private Sub MoveBand(ByVal FromIndex As Long, ByVal ToIndex As Long)
    With Manager
        If FromIndex < 1 Or FromIndex > .Count Or _
           ToIndex < 1 Or ToIndex > .Count Then
            Exit Sub
        End If
        
        ' 保存移动的带信息
        Dim MovedBand As BandInfo
        MovedBand = .Bands(FromIndex)
        
        ' 调整其他带的位置
        If FromIndex < ToIndex Then
            ' 向下移动
            Dim i As Long
            For i = FromIndex To ToIndex - 1
                .Bands(i) = .Bands(i + 1)
                .Bands(i).Position = i
            Next i
        Else
            ' 向上移动
            For i = FromIndex To ToIndex + 1 Step -1
                .Bands(i) = .Bands(i - 1)
                .Bands(i).Position = i
            Next i
        End If
        
        ' 放置移动的带
        .Bands(ToIndex) = MovedBand
        .Bands(ToIndex).Position = ToIndex
        
        ' 应用新布局
        RestoreBandInfo
    End With
End Sub
```

### 布局管理器

```vb
Private Type BandLayout
    Name As String
    Bands() As BandInfo
    Count As Long
End Type

Private Type LayoutManager
    Layouts() As BandLayout
    Count As Long
End Type

Private Layouts As LayoutManager

Private Sub InitLayoutManager()
    With Layouts
        ReDim .Layouts(1 To 10)
        .Count = 0
    End With
End Sub

Private Sub SaveLayout(ByVal Name As String)
    With Layouts
        .Count = .Count + 1
        If .Count > UBound(.Layouts) Then
            ReDim Preserve .Layouts(1 To .Count + 10)
        End If
        
        With .Layouts(.Count)
            .Name = Name
            .Count = CoolBar1.BandCount
            ReDim .Bands(1 To .Count)
            
            ' 保存每个带的信息
            Dim i As Long
            For i = 1 To .Count
                With .Bands(i)
                    .Index = i
                    .Text = CoolBar1.Bands(i).Text
                    .Width = CoolBar1.Bands(i).Width
                    .MinWidth = CoolBar1.Bands(i).MinWidth
                    .MinHeight = CoolBar1.Bands(i).MinHeight
                    .NewRow = CoolBar1.Bands(i).NewRow
                    .Style = CoolBar1.Bands(i).Style
                    .Visible = CoolBar1.Bands(i).Visible
                    .Position = i
                End With
            Next i
        End With
    End With
End Sub

Private Sub LoadLayout(ByVal Name As String)
    With Layouts
        Dim i As Long
        For i = 1 To .Count
            If .Layouts(i).Name = Name Then
                ' 应用布局
                With .Layouts(i)
                    Dim j As Long
                    For j = 1 To .Count
                        With .Bands(j)
                            CoolBar1.Bands(.Position).Text = .Text
                            CoolBar1.Bands(.Position).Width = .Width
                            CoolBar1.Bands(.Position).MinWidth = .MinWidth
                            CoolBar1.Bands(.Position).MinHeight = .MinHeight
                            CoolBar1.Bands(.Position).NewRow = .NewRow
                            CoolBar1.Bands(.Position).Style = .Style
                            CoolBar1.Bands(.Position).Visible = .Visible
                        End With
                    Next j
                End With
                Exit Sub
            End If
        Next i
    End With
End Sub
```

### 状态保存和恢复

```vb
Private Sub SaveCoolBarState()
    With Manager
        Dim i As Long
        For i = 1 To CoolBar1.BandCount
            SaveSetting App.Title, "CoolBar\Band" & i, "Text", CoolBar1.Bands(i).Text
            SaveSetting App.Title, "CoolBar\Band" & i, "Width", CStr(CoolBar1.Bands(i).Width)
            SaveSetting App.Title, "CoolBar\Band" & i, "MinWidth", CStr(CoolBar1.Bands(i).MinWidth)
            SaveSetting App.Title, "CoolBar\Band" & i, "MinHeight", CStr(CoolBar1.Bands(i).MinHeight)
            SaveSetting App.Title, "CoolBar\Band" & i, "NewRow", CStr(CoolBar1.Bands(i).NewRow)
            SaveSetting App.Title, "CoolBar\Band" & i, "Style", CStr(CoolBar1.Bands(i).Style)
            SaveSetting App.Title, "CoolBar\Band" & i, "Visible", CStr(CoolBar1.Bands(i).Visible)
            SaveSetting App.Title, "CoolBar\Band" & i, "Position", CStr(i)
        Next i
        
        SaveSetting App.Title, "CoolBar", "BandCount", CStr(CoolBar1.BandCount)
    End With
End Sub

Private Sub RestoreCoolBarState()
    Dim BandCount As Long
    BandCount = CLng(GetSetting(App.Title, "CoolBar", "BandCount", "0"))
    
    If BandCount > 0 Then
        Dim i As Long
        For i = 1 To BandCount
            With CoolBar1.Bands(i)
                .Text = GetSetting(App.Title, "CoolBar\Band" & i, "Text", "")
                .Width = CLng(GetSetting(App.Title, "CoolBar\Band" & i, "Width", "100"))
                .MinWidth = CLng(GetSetting(App.Title, "CoolBar\Band" & i, "MinWidth", "50"))
                .MinHeight = CLng(GetSetting(App.Title, "CoolBar\Band" & i, "MinHeight", "20"))
                .NewRow = CBool(GetSetting(App.Title, "CoolBar\Band" & i, "NewRow", "False"))
                .Style = CLng(GetSetting(App.Title, "CoolBar\Band" & i, "Style", "0"))
                .Visible = CBool(GetSetting(App.Title, "CoolBar\Band" & i, "Visible", "True"))
            End With
        Next i
    End If
End Sub
```

## 最佳实践

1. 错误处理
```vb
Private Function SafeAddBand() As Object
    On Error GoTo ErrorHandler
    
    Set SafeAddBand = CoolBar1.Bands.Add
    Exit Function
    
ErrorHandler:
    Debug.Print "添加带失败: " & Err.Description
    Set SafeAddBand = Nothing
End Function
```

2. 带操作
```vb
Private Sub ResizeBand(ByVal Index As Long, _
                      ByVal NewWidth As Long, _
                      Optional ByVal MinWidth As Long)
    On Error Resume Next
    
    With CoolBar1.Bands(Index)
        If MinWidth > 0 Then
            .MinWidth = MinWidth
        End If
        .Width = NewWidth
    End With
End Sub

Private Sub ToggleBandVisibility(ByVal Index As Long)
    On Error Resume Next
    
    With CoolBar1.Bands(Index)
        .Visible = Not .Visible
    End With
End Sub

Private Sub MoveBandToNewRow(ByVal Index As Long)
    On Error Resume Next
    
    With CoolBar1.Bands(Index)
        .NewRow = True
    End With
End Sub
```

3. 子控件管理
```vb
Private Function GetBandChild(ByVal Index As Long) As Object
    On Error Resume Next
    
    Set GetBandChild = CoolBar1.Bands(Index).Child
End Function

Private Sub SetBandChild(ByVal Index As Long, _
                        ByVal Child As Object)
    On Error Resume Next
    
    Set CoolBar1.Bands(Index).Child = Child
End Sub
```

CoolBar 控件提供了灵活的工具栏容器功能，支持用户通过拖动来自定义布局。通过合理的管理，可以实现布局保存、恢复和多种布局切换等功能。上述示例展示了 CoolBar 控件的多种用法，开发者可以根据具体需求选择合适的实现方式。
