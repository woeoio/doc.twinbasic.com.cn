---
title: AsyncProperty
parent: VBRUN Package
nav_order: 20
permalink: /tB/Packages/VBRUN/AsyncProperty/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '9c3f69b1-1490-4ff9-851f-4f80430df64a'
  PropagateID: '9c3f69b1-1490-4ff9-851f-4f80430df64a'
  ReservedCode1: 'c90bc32c-9608-4a63-871a-1f27ae3b77ca'
  ReservedCode2: 'c90bc32c-9608-4a63-871a-1f27ae3b77ca'
---

# AsyncProperty 类

**AsyncProperty**对象保存由**UserControl.AsyncRead**启动的异步读取结果。它被传递给**AsyncReadComplete**和**AsyncReadProgress**事件，在其中标识此通知对应的读取，报告下载进度，并在完成时提供下载的值。每个属性均为只读：运行时在引发事件前填充此对象。

## 标识读取

用户控件可能同时有多个未完成的异步读取，因此传递给每个事件的**AsyncProperty**必须标识该事件对应的读取。[**PropertyName**](/official/Reference/VBRUN/AsyncProperty/PropertyName)返回启动请求时提供给**AsyncRead**的名称——通常是控件将要赋值的属性名称。[**Target**](/official/Reference/VBRUN/AsyncProperty/Target)返回正在下载的URL或文件路径。[**AsyncType**](/official/Reference/VBRUN/AsyncProperty/AsyncType)返回**AsyncTypeConstants**值，标识数据的传递方式——图片、文件或字节数组。

```vb
Private Sub UserControl_AsyncReadComplete(ByVal Prop As AsyncProperty)
    Select Case Prop.PropertyName
        Case "Picture"
            Set Picture = Prop.Value
        Case "DataFile"
            ' Prop.Value是下载的临时文件路径。
    End Select
End Sub
```

## 下载的值

读取完成后，[**Value**](/official/Reference/VBRUN/AsyncProperty/Value)保存结果。其具体子类型由**AsyncType**决定：请求数据为图片时为**stdole.IPictureDisp**，请求为文件时为包含下载临时文件路径的**String**，请求原始字节时为**Byte**数组。**Value**仅在**AsyncReadComplete**事件中有意义——在进度通知期间读取尚未完成。

## 跟踪进度

读取进行中时，运行时定期引发**AsyncReadProgress**，使控件能够更新进度指示器。[**BytesRead**](/official/Reference/VBRUN/AsyncProperty/BytesRead)报告目前已到达的字节数，[**BytesMax**](/official/Reference/VBRUN/AsyncProperty/BytesMax)报告预期总字节数——但当服务器未公布内容长度时**BytesMax**可能为零。[**Status**](/official/Reference/VBRUN/AsyncProperty/Status)返回当前步骤的人类可读描述（"正在连接"、"正在接收响应"等），[**StatusCode**](/official/Reference/VBRUN/AsyncProperty/StatusCode)返回对应的**AsyncStatusCodeConstants**值，供编程检查。

## 成员

- [AsyncType](/official/Reference/VBRUN/AsyncProperty/AsyncType) -- 返回正在读取的数据类型（图片、文件或字节数组）
- [BytesMax](/official/Reference/VBRUN/AsyncProperty/BytesMax) -- 返回读取的预期总字节数
- [BytesRead](/official/Reference/VBRUN/AsyncProperty/BytesRead) -- 返回目前已读取的字节数
- [PropertyName](/official/Reference/VBRUN/AsyncProperty/PropertyName) -- 返回执行读取的属性名称
- [Status](/official/Reference/VBRUN/AsyncProperty/Status) -- 返回当前读取状态的人类可读描述
- [StatusCode](/official/Reference/VBRUN/AsyncProperty/StatusCode) -- 返回当前读取状态的**AsyncStatusCodeConstants**值
- [Target](/official/Reference/VBRUN/AsyncProperty/Target) -- 返回正在读取的URL或路径
- [Value](/official/Reference/VBRUN/AsyncProperty/Value) -- 读取完成后返回下载的值