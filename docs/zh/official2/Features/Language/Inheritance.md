---
title: 继承
parent: 语言语法
nav_order: 3
permalink: /Features/Language/Inheritance
---

# 继承
twinBASIC 提供了几种继承机制来支持简单和完整的面向对象编程模式：**Implements**、**Implements Via** 和 **Inherits**。

## **Implements** 的增强功能

twinBASIC 中的`Implements`有几个增强功能：

### 继承的接口

twinBASIC 中的`Implements`允许在继承的接口上使用——例如，如果您有`Interface IFoo2 Extends IFoo`，然后您可以在类中使用`Implements IFoo2`，而在 VBx 中这是不允许的。您需要为所有继承的接口提供方法（除了`IDispatch`和`IUnknown`）。该类将标记所有接口为可用——您不需要为`IFoo`单独声明，它将自动通过`Set`语句（及其底层的`QueryInterface`调用）传递。

### 多重实现

如果您有一个接口被多个其他接口扩展，您可以编写多个实现，或为所有接口指定一个实现。例如：

```vb
IOleWindow_GetWindow() As LongPtr _
    Implements IOleWindow.GetWindow, IShellBrowser.GetWindow, IShellView2.GetWindow
```

### 接口中的 'As Any' 参数

`Implements`允许在具有 'As Any' 参数的接口上使用：在 VBx 中，如果您尝试使用包含具有`As Any`参数的成员的任何接口，会得到错误。使用 twinBASIC，如果您用`As LongPtr`替换`As Any`，这是允许的，例如：

```vb
Interface IFoo Extends IUnknown
    Sub Bar(ppv As Any)
End Interface

Class MyClass
    Implements IFoo

    Private Sub IFoo_Bar(ppv As LongPtr) Implements IFoo.Bar

    End Sub
```

## 基本继承的 **Implements Via**
tB 允许类之间的简单继承。例如，如果您有实现包含 Honk 方法的 IVehicle 的 cVehicle 类，您可以创建继承原始方法子类，如 cCar 或 cTruck，这样您就可以调用 cCar.Honk 而无需编写单独的实现。

![image](../Images/b0724fe2-636d-47db-a8fc-531a585ddaf9.png)

您可以看到 Honk 方法仅由父类实现，然后当您单击 CodeLens 按钮从 IDE 就地运行子程序时，从子类调用。

## 完整 OOP 的 **Inherits**

这是完整继承和 OOP 的更强大选项。它支持对派生类可访问但外部调用者不可访问的`Protected`方法和变量，`Overridable`和`Overrides`语法，多重继承，以及显式基类构造函数。

### 示例：动物类层次结构

从基类开始：

```vb
Private Class Animal
    Protected _name As String
    Protected _dob As Date  ' 出生日期

    Public Event Spoke(ByVal sound As String)

    Public Sub New(name As String, dob As Date)
        _name = name
        _dob = dob
    End Sub

    Public Property Get Name() As String
        Name = _name
    End Property

    Public Property Get DOB() As Date
        DOB = _dob
    End Property

    ' 基于 DOB 和今天日期的整年年龄
    Public Function AgeYears() As Long
        Dim y As Long
        y = DateDiff("yyyy", _dob, Date)
        If DateSerial(Year(Date), Month(_dob), Day(_dob)) > Date Then y = y - 1
        AgeYears = y
    End Function

    Public Sub Speak()
        Dim s As String
        s = GetSound()
        RaiseEvent Spoke(s)
        Debug.Print _name & " 说: " & s
    End Sub

    ' --- 派生类的可重写钩子 ---
    Protected Overridable Function GetSound() As String
        GetSound = ""
    End Function
End Class
```

其他类可以继承：

```vb
' ===== 派生：Dog =====
Private Class Dog
    Inherits Animal

    Protected _breed As String

    Public Sub New(name As String, dob As Date, breed As String)
        Animal.New(name, dob)               ' 我们可以在构造函数中显式调用基类构造函数
        _breed = breed
    End Sub

    Public Property Get Breed() As String
        Breed = _breed
    End Property

    ' 重写：
    Protected Overridable Function GetSound() As String Overrides Animal.GetSound
        GetSound = "汪汪"
    End Function
End Class

' ===== 进一步派生：GuardDog (Dog → GuardDog) =====
Private Class GuardDog
    Inherits Dog

    Protected _onDuty As Boolean

    Public Sub New(name As String, dob As Date, breed As String)
        Dog.New(name, dob, breed)           ' 我们可以在构造函数中显式调用基类构造函数
        _onDuty = True
    End Sub

    Public Property Get OnDuty() As Boolean
        OnDuty = _onDuty
    End Property
    Public Property Let OnDuty(ByVal v As Boolean)
        _onDuty = v
    End Property

    ' 多级重写（重写 Dog 的重写）：
    Protected Function GetSound() As String Overrides Dog.GetSound
        If _onDuty Then
            GetSound = "汪汪！"
        Else
            GetSound = "汪汪"
        End If
    End Function
End Class
```

这只是摘录，请参阅完整示例 23 以获取其他类、用法和有关 twinBASIC 中继承的信息。