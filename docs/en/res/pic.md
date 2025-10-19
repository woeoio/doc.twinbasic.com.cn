# Resource Files: Using Images

This article explains how to use resource files to store images in twinbasic and load them directly from memory as image data.

> PNG images are directly supported

## Storing Resource Files

In twinbasic, resource files can be accessed as raw binary data using the `LoadResData` function, as shown below:

![Raw Binary Data](/images/res/bin.jpg)

[Group Admin] 2025/9/7 10:37:50

Like this

[Group Admin] 2025/9/7 10:37:56

You can get any file

## Converting Binary Content to Picture Objects

```vb
Dim b() As Byte
b = LoadResData("car3.png", "PICTURE")
Set Picture1.Picture = Global.LoadPicture(b)
Picture1.Refresh()
```

Or, in a single line:

```vb
Set Picture1.Picture = Global.LoadPicture(LoadResData("car1.bmp", "ICON"))
```

Result:

![Result](/images/res/pic.jpg)

[Group Admin] 2025/9/7 10:51:30

Now you can store any images

[Member] 2025/9/7 10:51:44

During compilation, it's combined with the EXE directly, right? No need to carry the images around anymore

[Group Admin] 2025/9/7 10:51:52

Yes

[Group Admin] 2025/9/7 10:51:58

Resource files are automatically embedded

[Member] 2025/9/7 10:52:10

Nice, nice, this feature alone outperforms VB6

[Group Admin] 2025/9/7 10:54:08

Well, VB6 is the same, it can use res resource files, which are also embedded

[Group Admin] 2025/9/7 10:54:19

The difference is that VB6 doesn't directly support PNG, while TB can

[Group Admin] 2025/9/7 10:56:46

Moreover, TB's resource management allows for excellent directory categorization, while in VB although categorization is possible, you need to rewrite directory names manually each time