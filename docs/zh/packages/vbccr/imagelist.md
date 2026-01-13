# ImageList Control (VBCCRImageList)

VBCCRImageList 控件是一个图像容器控件，用于存储和管理多个相同大小的图像。它通常与其他控件（如 TreeView、ListView、Toolbar 等）配合使用，为这些控件提供图标和图像支持。

## 属性

### 关键属性

- `ListImages`: 图像集合
- `ImageWidth`: 图像宽度
- `ImageHeight`: 图像高度
- `ColorDepth`: 颜色深度
- `BackColor`: 背景颜色（透明色）
- `MaskColor`: 掩码颜色
- `UseMaskColor`: 是否使用掩码色
- `ImageCount`: 图像数量

## 方法

### 主要方法

- `ListImages.Add(Key As String, [Picture As Picture])`: 添加图像
- `Remove(Index As Variant)`: 移除图像
- `Clear()`: 清除所有图像
- `Overlay(Image1 As ListImage, Image2 As ListImage)`: 叠加图像
- `Extract(Key As Variant) As Picture`: 提取图像

## 事件

ImageList 控件没有事件。

## 代码示例

### 基本用法

```vb
Private Sub Form_Load()
    ' 配置图像列表
    With ImageList1
        .ImageWidth = 16
        .ImageHeight = 16
        .ColorDepth = cdPalette
        
        ' 加载图标
        .ListImages.Add "NEW", LoadPicture(App.Path & "\Icons\new.ico")
        .ListImages.Add "OPEN", LoadPicture(App.Path & "\Icons\open.ico")
        .ListImages.Add "SAVE", LoadPicture(App.Path & "\Icons\save.ico")
    End With
    
    ' 关联到工具栏
    Toolbar1.ImageList = ImageList1
End Sub
```

### 从资源加载图标

```vb
Private Sub LoadIconsFromResource()
    ' 从资源文件加载图标
    With ImageList1
        .ListImages.Clear
        
        ' 加载标准图标
        .ListImages.Add "FILE", LoadResPicture(1, vbResIcon)
        .ListImages.Add "FOLDER", LoadResPicture(2, vbResIcon)
        .ListImages.Add "DRIVE", LoadResPicture(3, vbResIcon)
    End With
End Sub
```

### 动态图像管理

```vb
Private Sub ManageImages()
    With ImageList1
        ' 添加图像
        Dim Image As ListImage
        Set Image = .ListImages.Add(, "ICON1", Picture1.Picture)
        
        ' 设置图像属性
        With Image
            .Tag = "自定义数据"
            .Key = "NEWKEY"  ' 更改键名
        End With
        
        ' 移除图像
        .ListImages.Remove "OLDKEY"
        
        ' 清除所有图像
        .ListImages.Clear
    End With
End Sub
```

## 常见用例

### 文件类型图标管理

```vb
Private Type FileTypeInfo
    Extension As String
    Description As String
    IconKey As String
End Type

Private FileTypes() As FileTypeInfo
Private TypeCount As Long

Private Sub InitializeFileTypes()
    ' 初始化文件类型
    With ImageList1
        ' 加载常用文件类型图标
        .ListImages.Add "DEFAULT", LoadPicture(App.Path & "\Icons\file.ico")
        .ListImages.Add "FOLDER", LoadPicture(App.Path & "\Icons\folder.ico")
        .ListImages.Add "TXT", LoadPicture(App.Path & "\Icons\text.ico")
        .ListImages.Add "DOC", LoadPicture(App.Path & "\Icons\doc.ico")
        .ListImages.Add "XLS", LoadPicture(App.Path & "\Icons\excel.ico")
        .ListImages.Add "PDF", LoadPicture(App.Path & "\Icons\pdf.ico")
    End With
    
    ' 注册文件类型
    AddFileType "txt", "文本文档", "TXT"
    AddFileType "doc", "Word 文档", "DOC"
    AddFileType "xls", "Excel 工作簿", "XLS"
    AddFileType "pdf", "PDF 文档", "PDF"
End Sub

Private Sub AddFileType(ByVal Extension As String, _
                       ByVal Description As String, _
                       ByVal IconKey As String)
    TypeCount = TypeCount + 1
    ReDim Preserve FileTypes(1 To TypeCount)
    
    With FileTypes(TypeCount)
        .Extension = LCase$(Extension)
        .Description = Description
        .IconKey = IconKey
    End With
End Sub

Private Function GetFileIcon(ByVal FileName As String) As ListImage
    Dim Extension As String
    Extension = LCase$(GetFileExtension(FileName))
    
    ' 查找文件类型
    Dim i As Long
    For i = 1 To TypeCount
        If FileTypes(i).Extension = Extension Then
            Set GetFileIcon = ImageList1.ListImages(FileTypes(i).IconKey)
            Exit Function
        End If
    Next i
    
    ' 返回默认图标
    Set GetFileIcon = ImageList1.ListImages("DEFAULT")
End Function
```

### 状态图标管理

```vb
Private Enum ItemStatus
    stNormal = 0
    stNew = 1
    stModified = 2
    stDeleted = 3
End Enum

Private Sub SetupStatusIcons()
    With ImageList1
        ' 加载状态图标
        .ListImages.Add "NORMAL", LoadPicture(App.Path & "\Icons\normal.ico")
        .ListImages.Add "NEW", LoadPicture(App.Path & "\Icons\new.ico")
        .ListImages.Add "MODIFIED", LoadPicture(App.Path & "\Icons\modified.ico")
        .ListImages.Add "DELETED", LoadPicture(App.Path & "\Icons\deleted.ico")
        
        ' 设置叠加图标
        .ListImages("NEW").Overlay = 1
        .ListImages("MODIFIED").Overlay = 2
        .ListImages("DELETED").Overlay = 3
    End With
End Sub

Private Sub UpdateItemStatus(ByVal Item As ListItem, ByVal Status As ItemStatus)
    Select Case Status
        Case stNormal
            Item.Icon = ImageList1.ListImages("NORMAL").Index
        Case stNew
            Item.Icon = ImageList1.ListImages("NORMAL").Index
            Item.OverlayIndex = 1
        Case stModified
            Item.Icon = ImageList1.ListImages("NORMAL").Index
            Item.OverlayIndex = 2
        Case stDeleted
            Item.Icon = ImageList1.ListImages("NORMAL").Index
            Item.OverlayIndex = 3
    End Select
End Sub
```

## 最佳实践

1. 图像加载优化
```vb
Private Sub LoadImagesOptimized()
    ' 禁用重绘
    LockWindowUpdate ListView1.hWnd
    
    ' 临时断开 ImageList
    Set ListView1.ImageList = Nothing
    
    ' 批量加载图像
    With ImageList1
        .ListImages.Clear
        
        Dim File As String
        File = Dir(App.Path & "\Icons\*.ico")
        
        Do While File <> ""
            .ListImages.Add , GetFileBaseName(File), _
                LoadPicture(App.Path & "\Icons\" & File)
            File = Dir()
        Loop
    End With
    
    ' 重新连接 ImageList
    Set ListView1.ImageList = ImageList1
    
    ' 启用重绘
    LockWindowUpdate 0
End Sub
```

2. 错误处理
```vb
Private Function SafeLoadImage(ByVal FilePath As String, _
                             ByVal Key As String) As Boolean
    On Error GoTo ErrorHandler
    
    ImageList1.ListImages.Add Key, LoadPicture(FilePath)
    SafeLoadImage = True
    Exit Function
    
ErrorHandler:
    Debug.Print "加载图像错误: " & Err.Description
    SafeLoadImage = False
End Function
```

## 已知问题和解决方案

1. 内存管理
```vb
Private Sub CleanupImageList()
    ' 清理图像
    ImageList1.ListImages.Clear
    
    ' 断开关联
    Set ListView1.ImageList = Nothing
    Set TreeView1.ImageList = Nothing
    Set Toolbar1.ImageList = Nothing
    
    ' 强制垃圾回收
    Dim tmp As String
    tmp = Space$(1)
    Set ImageList1.Picture = Nothing
End Sub
```

2. 图像质量
```vb
Private Sub OptimizeImageQuality()
    ' 设置最佳颜色深度
    With ImageList1
        .ColorDepth = cdBitDepth24  ' 24位颜色
        
        ' 设置透明色
        .MaskColor = vbWhite
        .UseMaskColor = True
    End With
End Sub
```

## 高级特性

### 图像合成器

```vb
Private Type CompositeImage
    BaseImage As String
    OverlayImage As String
    ResultKey As String
    OffsetX As Long
    OffsetY As Long
End Type

Private Sub CreateCompositeImage(Composite As CompositeImage)
    ' 创建临时图片框
    Dim picTemp As PictureBox
    Set picTemp = Controls.Add("VB.PictureBox", "picTemp")
    
    With picTemp
        .AutoRedraw = True
        .Width = ImageList1.ImageWidth * Screen.TwipsPerPixelX
        .Height = ImageList1.ImageHeight * Screen.TwipsPerPixelY
        .Visible = False
        
        ' 绘制基础图像
        .Picture = ImageList1.ListImages(Composite.BaseImage).Picture
        
        ' 叠加图像
        PaintPicture ImageList1.ListImages(Composite.OverlayImage).Picture, _
                    Composite.OffsetX, Composite.OffsetY
        
        ' 添加到图像列表
        ImageList1.ListImages.Add Composite.ResultKey, .Image
    End With
    
    ' 清理
    Controls.Remove "picTemp"
    Set picTemp = Nothing
End Sub
```

### 动态图标生成器

```vb
Private Type IconInfo
    Size As Long
    Color As Long
    Text As String
    Font As String
End Type

Private Sub GenerateTextIcon(Icon As IconInfo)
    ' 创建临时图片框
    Dim picTemp As PictureBox
    Set picTemp = Controls.Add("VB.PictureBox", "picTemp")
    
    With picTemp
        .AutoRedraw = True
        .Width = Icon.Size * Screen.TwipsPerPixelX
        .Height = Icon.Size * Screen.TwipsPerPixelY
        .BackColor = vbWhite
        .ForeColor = Icon.Color
        .FontName = Icon.Font
        .FontSize = Icon.Size / 2
        .Visible = False
        
        ' 居中绘制文本
        Dim X As Long, Y As Long
        X = (.Width - .TextWidth(Icon.Text)) / 2
        Y = (.Height - .TextHeight(Icon.Text)) / 2
        
        picTemp.CurrentX = X
        picTemp.CurrentY = Y
        picTemp.Print Icon.Text
        
        ' 添加到图像列表
        ImageList1.ListImages.Add Icon.Text, .Image
    End With
    
    ' 清理
    Controls.Remove "picTemp"
    Set picTemp = Nothing
End Sub
```

### 图像缓存管理器

```vb
Private Type CacheInfo
    Key As String
    LastUsed As Date
    UseCount As Long
End Type

Private ImageCache() As CacheInfo
Private CacheCount As Long
Private MaxCacheSize As Long

Private Sub InitializeCache()
    MaxCacheSize = 100  ' 最大缓存数量
    ReDim ImageCache(1 To MaxCacheSize)
    CacheCount = 0
End Sub

Private Sub CacheImage(ByVal Key As String)
    ' 检查是否已在缓存中
    Dim i As Long
    For i = 1 To CacheCount
        If ImageCache(i).Key = Key Then
            ' 更新使用信息
            With ImageCache(i)
                .LastUsed = Now
                .UseCount = .UseCount + 1
            End With
            Exit Sub
        End If
    Next i
    
    ' 添加到缓存
    If CacheCount < MaxCacheSize Then
        ' 直接添加
        CacheCount = CacheCount + 1
        With ImageCache(CacheCount)
            .Key = Key
            .LastUsed = Now
            .UseCount = 1
        End With
    Else
        ' 替换最少使用的项
        Dim LeastUsed As Long
        LeastUsed = GetLeastUsedIndex()
        
        With ImageCache(LeastUsed)
            ' 移除旧图像
            On Error Resume Next
            ImageList1.ListImages.Remove .Key
            On Error GoTo 0
            
            ' 添加新图像
            .Key = Key
            .LastUsed = Now
            .UseCount = 1
        End With
    End If
End Sub

Private Function GetLeastUsedIndex() As Long
    Dim MinUse As Long
    Dim OldestDate As Date
    Dim Index As Long
    
    MinUse = &H7FFFFFFF
    OldestDate = Now
    
    Dim i As Long
    For i = 1 To CacheCount
        With ImageCache(i)
            If .UseCount < MinUse Or _
               (.UseCount = MinUse And .LastUsed < OldestDate) Then
                MinUse = .UseCount
                OldestDate = .LastUsed
                Index = i
            End If
        End With
    Next i
    
    GetLeastUsedIndex = Index
End Function
```
