---
title: 定义自定义控件
parent: 自定义控件
permalink: /zh/tB/Tutorials/CustomControls/Defining-a-CustomControl
---

# 定义自定义控件
{: .no_toc }

本教程将详细介绍如何在twinBASIC中创建和定义自定义控件，从基础概念到实际实现。

## 创建第一个自定义控件

### 新建控件项目

1. 启动twinBASIC IDE
2. 选择"文件" → "新建项目"
3. 选择"ActiveX控件"项目模板
4. 输入项目名称，如"MyFirstControl"
5. 点击"确定"创建项目

### 理解控件结构

创建的项目包含以下主要组件：

- **UserControl** - 控件的主容器
- **属性页** - 设计时的属性配置界面（可选）
- **模块文件** - 包含常量和辅助函数
- **资源文件** - 包含图标和其他资源

## 控件基础

### UserControl对象

UserControl是自定义控件的基础，提供了：

```vb
' 控件的基本结构
Public Class MyCustomControl
    Inherits UserControl

    ' 控件的属性和方法将在这里定义

End Class
```

### 控件生命周期

理解控件的生命周期对正确实现至关重要：

1. **初始化** - 控件创建时
2. **加载** - 控件被添加到容器时
3. **激活** - 控件获得焦点时
4. **停用** - 控件失去焦点时
5. **卸载** - 控件被移除时
6. **销毁** - 控件被销毁时

```vb
' 生命周期事件处理
Private Sub UserControl_Initialize()
    ' 初始化控件
    Debug.Print "控件初始化"
End Sub

Private Sub UserControl_InitProperties()
    ' 初始化属性
    Debug.Print "初始化属性"
End Sub

Private Sub UserControl_ReadProperties(PropBag As PropertyBag)
    ' 读取持久化属性
    Debug.Print "读取属性"
End Sub

Private Sub UserControl_WriteProperties(PropBag As PropertyBag)
    ' 写入持久化属性
    Debug.Print "写入属性"
End Sub
```

## 定义控件属性

### 创建属性

属性是控件的特征，可以在设计时和运行时访问：

```vb
' 私有变量存储属性值
Private m_BackColor As OLE_COLOR
Private m_Caption As String
Private m_Enabled As Boolean

' 属性定义
Public Property Get BackColor() As OLE_COLOR
    BackColor = m_BackColor
End Property

Public Property Let BackColor(ByVal New_BackColor As OLE_COLOR)
    m_BackColor = New_BackColor
    PropertyChanged "BackColor" ' 通知属性已更改
    Redraw ' 重绘控件
End Property

Public Property Get Caption() As String
    Caption = m_Caption
End Property

Public Property Let Caption(ByVal New_Caption As String)
    m_Caption = New_Caption
    PropertyChanged "Caption"
    Redraw
End Property
```

### 属性分类

#### 外观属性
- BackColor - 背景颜色
- ForeColor - 前景颜色
- Font - 字体设置
- BorderStyle - 边框样式

#### 行为属性
- Enabled - 是否启用
- Visible - 是否可见
- TabStop - 是否参与Tab键顺序

#### 自定义属性
- Caption - 显示文本
- Value - 控件值
- Style - 显示样式

## 实现控件方法

### 公共方法

方法是控件可以执行的操作：

```vb
' 公共方法示例
Public Sub SetFocus()
    ' 设置控件焦点
    If m_Enabled And m_Visible Then
        ' 实现焦点设置逻辑
    End If
End Sub

Public Function GetText() As String
    ' 返回控件文本
    GetText = m_Caption
End Function

Public Sub Refresh()
    ' 刷新控件显示
    Redraw
End Sub
```

### 私有方法

私有方法用于内部实现：

```vb
' 私有方法
Private Sub Redraw()
    ' 重绘控件
    UserControl.Paint
End Sub

Private Sub UpdateDisplay()
    ' 更新显示内容
    ' 实现具体的显示逻辑
End Sub
```

## 处理控件事件

### 定义事件

事件是控件通知外部的重要机制：

```vb
' 定义事件
Public Event Click()
Public Event DblClick()
Public Event Change()
Public Event KeyPress(KeyAscii As Integer)

' 触发事件
Private Sub UserControl_Click()
    ' 处理点击事件
    RaiseEvent Click
End Sub

Private Sub UserControl_KeyPress(KeyAscii As Integer)
    ' 处理按键事件
    RaiseEvent KeyPress(KeyAscii)
End Sub
```

### 标准事件

- **Click** - 鼠标单击
- **DblClick** - 鼠标双击
- **MouseDown/MouseUp** - 鼠标按下/释放
- **MouseMove** - 鼠标移动
- **KeyDown/KeyUp** - 键盘按下/释放
- **KeyPress** - 字符按键
- **GotFocus/LostFocus** - 获得/失去焦点

## 实际示例：简单按钮控件

### 完整实现

```vb
' MyButton控件的完整实现

' 私有变量
Private m_Caption As String
Private m_Enabled As Boolean
Private m_Down As Boolean

' 初始化
Private Sub UserControl_Initialize()
    m_Caption = "按钮"
    m_Enabled = True
    m_Down = False
    UserControl.BackColor = vbButtonFace
    UserControl.ForeColor = vbButtonText
End Sub

' Caption属性
Public Property Get Caption() As String
    Caption = m_Caption
End Property

Public Property Let Caption(ByVal New_Caption As String)
    m_Caption = New_Caption
    PropertyChanged "Caption"
    UserControl.Paint
End Property

' Enabled属性
Public Property Get Enabled() As Boolean
    Enabled = m_Enabled
End Property

Public Property Let Enabled(ByVal New_Enabled As Boolean)
    m_Enabled = New_Enabled
    PropertyChanged "Enabled"
    UserControl.Paint
End Property

' 鼠标事件处理
Private Sub UserControl_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If m_Enabled And Button = vbLeftButton Then
        m_Down = True
        UserControl.Paint
        UserControl.SetFocus
    End If
End Sub

Private Sub UserControl_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If m_Enabled And m_Down And Button = vbLeftButton Then
        m_Down = False
        UserControl.Paint
        ' 检查鼠标是否仍在控件内
        If X >= 0 And X < UserControl.ScaleWidth And Y >= 0 And Y < UserControl.ScaleHeight Then
            RaiseEvent Click
        End If
    End If
End Sub

Private Sub UserControl_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
    If m_Down Then
        Dim wasDown As Boolean
        wasDown = (X >= 0 And X < UserControl.ScaleWidth And Y >= 0 And Y < UserControl.ScaleHeight)
        If wasDown <> m_Down Then
            m_Down = wasDown
            UserControl.Paint
        End If
    End If
End Sub

' 绘制控件
Private Sub UserControl_Paint()
    Dim rc As RECT
    Dim hBrush As Long, hOldBrush As Long
    Dim hPen As Long, hOldPen As Long

    ' 设置绘制区域
    rc.Left = 0
    rc.Top = 0
    rc.Right = UserControl.ScaleWidth
    rc.Bottom = UserControl.ScaleHeight

    ' 绘制背景
    If m_Enabled Then
        If m_Down Then
            UserControl.FillStyle = vbFSSolid
            UserControl.FillColor = RGB(192, 192, 192)
        Else
            UserControl.FillStyle = vbFSSolid
            UserControl.FillColor = RGB(240, 240, 240)
        End If
    Else
        UserControl.FillStyle = vbFSSolid
        UserControl.FillColor = RGB(224, 224, 224)
    End If

    UserControl.Line (0, 0)-(UserControl.ScaleWidth - 1, UserControl.ScaleHeight - 1), , BF

    ' 绘制边框
    If m_Down Then
        ' 凹下效果
        UserControl.Line (0, 0)-(UserControl.ScaleWidth - 1, 0), RGB(128, 128, 128)
        UserControl.Line (0, 0)-(0, UserControl.ScaleHeight - 1), RGB(128, 128, 128)
        UserControl.Line (UserControl.ScaleWidth - 1, 1)-(UserControl.ScaleWidth - 1, UserControl.ScaleHeight - 1), RGB(255, 255, 255)
        UserControl.Line (1, UserControl.ScaleHeight - 1)-(UserControl.ScaleWidth - 1, UserControl.ScaleHeight - 1), RGB(255, 255, 255)
    Else
        ' 凸起效果
        UserControl.Line (0, 0)-(UserControl.ScaleWidth - 1, 0), RGB(255, 255, 255)
        UserControl.Line (0, 0)-(0, UserControl.ScaleHeight - 1), RGB(255, 255, 255)
        UserControl.Line (UserControl.ScaleWidth - 1, 1)-(UserControl.ScaleWidth - 1, UserControl.ScaleHeight - 1), RGB(128, 128, 128)
        UserControl.Line (1, UserControl.ScaleHeight - 1)-(UserControl.ScaleWidth - 1, UserControl.ScaleHeight - 1), RGB(128, 128, 128)
    End If

    ' 绘制文本
    If m_Enabled Then
        UserControl.ForeColor = vbButtonText
    Else
        UserControl.ForeColor = RGB(128, 128, 128)
    End If

    UserControl.CurrentX = (UserControl.ScaleWidth - UserControl.TextWidth(m_Caption)) / 2
    UserControl.CurrentY = (UserControl.ScaleHeight - UserControl.TextHeight(m_Caption)) / 2
    UserControl.Print m_Caption
End Sub
```

## 测试和调试

### 测试控件

1. **设计时测试** - 在IDE中直接测试
2. **运行时测试** - 创建测试程序
3. **边界测试** - 测试极端情况
4. **兼容性测试** - 测试不同环境

### 调试技巧

- 使用Debug.Print输出调试信息
- 设置断点检查执行流程
- 使用立即窗口检查变量值
- 添加错误处理代码

## 部署控件

### 编译控件

1. 选择"生成" → "生成控件"
2. 选择输出格式（DLL或OCX）
3. 设置版本信息
4. 编译项目

### 分发控件

- 提供安装程序
- 包含必要的依赖文件
- 提供使用文档
- 提供示例代码

> [!TIP]
>
> 从简单的控件开始，逐步添加复杂功能。始终关注用户体验和性能表现。

> [!NOTE]
>
> 自定义控件是twinBASIC的强大功能，可以创建专业级的用户界面组件。