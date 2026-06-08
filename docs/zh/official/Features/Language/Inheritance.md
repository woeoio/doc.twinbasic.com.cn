---
title: 继承
parent: Language Syntax
nav_order: 3
permalink: /Features/Language/Inheritance
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '1e8c475f-f77a-4fc2-a6da-2011d13e9092'
  PropagateID: '1e8c475f-f77a-4fc2-a6da-2011d13e9092'
  ReservedCode1: '7facb7b3-1d52-47a4-b0e0-b469ba18476a'
  ReservedCode2: '7facb7b3-1d52-47a4-b0e0-b469ba18476a'
---

# 继承

twinBASIC 提供了几种继承机制以支持简单和完整的面向对象编程模式：**Implements**、**Implements Via** 和 **Inherits**。

## **Implements** 的增强

twinBASIC 中的 `Implements` 有多项增强：

### 继承的接口

twinBASIC 中的 `Implements` 允许用于继承的接口——例如，如果你有 `Interface IFoo2 Extends IFoo`，然后在类中使用 `Implements IFoo2`，而在 VBx 中这是不允许的。你需要为所有继承的接口（除 `IDispatch` 和 `IUnknown` 外）提供方法。类将标记所有接口为可用——你不需要为 `IFoo` 写单独的语句，它会通过 `Set` 语句（及其底层的 `QueryInterface` 调用）自动传递。

### 多重实现

如果你有一个被多个其他接口继承的接口，你可以编写多个实现，或为所有接口指定一个实现。例如：

```vb
IOleWindow_GetWindow() As LongPtr _
    Implements IOleWindow.GetWindow, IShellBrowser.GetWindow, IShellView2.GetWindow
```

### 接口中的 'As Any' 参数

`Implements` 允许用于包含 'As Any' 参数的接口：在 VBx 中，如果你尝试使用任何包含 `As Any` 参数成员的接口会报错。在 twinBASIC 中，如果你用 `As LongPtr` 替代 `As Any`，这是允许的，例如：

```vb
Interface IFoo Extends IUnknown
    Sub Bar(ppv As Any)
End Interface

Class MyClass
    Implements IFoo

    Private Sub IFoo_Bar(ppv As LongPtr) Implements IFoo.Bar

    End Sub
```

## **Implements Via** 实现基本继承

tB 允许类之间的简单继承。例如，如果你有一个实现了 IVehicle（包含方法 Honk）的类 cVehicle，你可以创建子类如 cCar 或 cTruck，继承原始类的方法，这样你可以调用 cCar.Honk 而无需编写单独的实现。

![image](../Images/b0724fe2-636d-47db-a8fc-531a585ddaf9.png)

你可以看到 Honk 方法只由父类实现，然后在你点击 CodeLens 按钮从 IDE 中就地运行 Sub 时从子类调用。

## **Inherits** 实现完整 OOP

此选项支持完整的继承和 OOP：派生类可访问（但外部调用者不可）的 `Protected` 方法和变量、`Overridable` 和 `Overrides` 语法、多重继承以及显式基类构造函数。

### 示例：Animal 类层次

从基类开始：

```vb
Private Class Animal
    Protected _name As String
    Protected _dob As Date  ' date of birth

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

    ' Age in whole years based on DOB and today's date
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
        Debug.Print _name & " says: " & s
    End Sub

    ' --- Overridable hook for derived classes ---
    Protected Overridable Function GetSound() As String
        GetSound = ""
    End Function
End Class
```

其他类可以继承：

```vb
' ===== Derived: Dog =====
Private Class Dog
    Inherits Animal

    Protected _breed As String

    Public Sub New(name As String, dob As Date, breed As String)
        Animal.New(name, dob)               ' we can explicitly call base constructors from within our constructor
        _breed = breed
    End Sub

    Public Property Get Breed() As String
        Breed = _breed
    End Property

    ' Override:
    Protected Overridable Function GetSound() As String Overrides Animal.GetSound
        GetSound = "woof"
    End Function
End Class

' ===== Further derived: GuardDog (Dog → GuardDog) =====
Private Class GuardDog
    Inherits Dog

    Protected _onDuty As Boolean

    Public Sub New(name As String, dob As Date, breed As String)
        Dog.New(name, dob, breed)           ' we can explicitly call base constructors from within our constructor
        _onDuty = True
    End Sub

    Public Property Get OnDuty() As Boolean
        OnDuty = _onDuty
    End Property
    Public Property Let OnDuty(ByVal v As Boolean)
        _onDuty = v
    End Property

    ' Multi-level override (overriding Dog's override):
    Protected Function GetSound() As String Overrides Dog.GetSound
        If _onDuty Then
            GetSound = "WOOF!"
        Else
            GetSound = "woof"
        End If
    End Function
End Class
```

这只是摘录，完整的示例 23 中有更多类、用法和关于 twinBASIC 中继承的说明。