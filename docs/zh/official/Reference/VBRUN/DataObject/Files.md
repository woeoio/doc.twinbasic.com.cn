---
title: Files
parent: DataObject
permalink: /tB/Packages/VBRUN/DataObject/Files
---
# Files

返回[**DataObjectFiles**](/official/Reference/VBRUN/DataObject/DataObjectFiles)集合，保存**DataObject**包含的文件路径。

语法：*object*.**Files**

*object*
: *必需* 求值为**DataObject**的对象表达式。

这是读取Windows Shell拖放有效负载的典型方式，以`vbCFFiles`剪贴板格式到达的完全限定路径列表。集合的每个元素是**String**。

源端也可以通过向此集合添加路径来填充**DataObject**的文件列表——参见[**DataObjectFiles.Add**](/official/Reference/VBRUN/DataObject/DataObjectFiles#add)。

### 示例

```vb
Private Sub Form_OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, _
                             Shift As Integer, X As Single, Y As Single)
    If Data.GetFormat(vbCFFiles) Then
        Dim Path As Variant
        For Each Path In Data.Files
            Debug.Print Path
        Next Path
    End If
End Sub
```

### 另见

- [DataObjectFiles](/official/Reference/VBRUN/DataObject/DataObjectFiles) 集合
- [GetFormat](/official/Reference/VBRUN/DataObject/GetFormat) 方法
- [SetData](/official/Reference/VBRUN/DataObject/SetData) 方法