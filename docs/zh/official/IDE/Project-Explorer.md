---
title: "项目资源管理器"
parent: IDE
permalink: /tB/IDE/Project/Explorer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '318b5ecc-7503-49d8-8b52-d410ecc3a4ab'
  PropagateID: '318b5ecc-7503-49d8-8b52-d410ecc3a4ab'
  ReservedCode1: 'aa82672c-89ac-4145-af59-c4f064057f92'
  ReservedCode2: 'aa82672c-89ac-4145-af59-c4f064057f92'
---

# 项目资源管理器

![项目资源管理器](Images/ProjectExplorer.png "项目资源管理器")
![项目资源管理器示例](Images/ProjectExplorer_Sample.png "项目资源管理器示例")

![文件夹](Images/Folder.png "文件夹") 导入的类型库
![文件夹](Images/Folder.png "文件夹") 杂项
![文件夹](Images/Folder.png "文件夹") 包
![文件夹](Images/Folder.png "文件夹") 引用
![文件夹](Images/Folder.png "文件夹") 资源
![文件夹](Images/Folder.png "文件夹") 源文件

项目打开时会出现上下文图标。

![项目资源管理器标题栏](Images/ProjectExplorer_Header.png "项目资源管理器标题栏")

## ![](Images/Settings.png) 项目设置

- [信息](/official/IDE/Project-Settings)

## ![](Images/Toggle.png) 切换文件视图 (<kbd>CTRL</kbd> + <kbd>R</kbd>)


## ![](Images/Add.png) 添加...

与右键相同

## 右键 - 添加

![右键 - 添加](Images/RightClick-Add.png "右键 - 添加")

- ![文件夹](Images/Folder.png "文件夹") 添加文件夹
- ![](Images/tB-Green.png) 添加 Windows 窗体
- ![](Images/tB-Green.png) 添加 Windows MDI 窗体
- ![](Images/tB-Green.png) 添加 Windows UserControl
- ![](Images/tB-Green.png) 添加 Windows 属性页
- ![](Images/tB-Green.png) 添加 Windows 报表

---

- ![](Images/tB-Green.png) 添加 CustomControls 窗体

---

- ![模块](Images/tB-Red.png "模块") 添加模块 (.TWIN 支持 Unicode)
- ![类](Images/tB-Red.png "类") 添加类 (.TWIN 支持 Unicode)

---

- ![模块](Images/tB-Blue.png "模块 (BAS)") 添加模块 (.BAS)
- ![类](Images/tB-Orange.png "类 (CLS)") 添加类 (.CLS)

---

- ![文件](Images/File-Green.png "文件") 添加其他文件

---

- ![文件](Images/File-Green.png "文件") 导入

---

- 添加资源：视觉样式清单
- 添加资源：字符串表
- 添加资源：MESSAGETABLE

## ![](Images/Folder.png) 文件夹
## ![](Images/tB-Green.png) Windows 窗体
[tbForm](/official/IDE/tbForm)

## ![](Images/tB-Green.png) Windows MDI 窗体
## ![](Images/UserControl.png) Windows UserControl
## ![](Images/tB-Green.png) Windows 属性页
## ![](Images/tB-Green.png) Windows 报表
[tbReport](/official/IDE/tbReport)

## ![](Images/tB-Green.png) CustomControls 窗体
![添加 CustomControls 窗体弹窗](Images/RightClick-Add-CustomControlsForm-Popup.png "添加 CustomControls 窗体弹窗")

## ![](Images/tB-Red.png) 模块
## ![](Images/tB-Red.png) 类
## ![](Images/File-Green.png) 其他文件
## ![](Images/File-Green.png) 导入
## 资源：视觉样式清单

参见 ![文件夹](Images/Folder.png "文件夹") `/.../Resources/MANIFEST/#1.xml`

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
   <assemblyIdentity
      type="win32"
      processorArchitecture="*"
      name="My_twinBASIC_Application"
      version="1.0.0.0"
   />
   <description>Application description here</description>
   <dependency>
      <dependentAssembly>
         <assemblyIdentity
            type="win32"
            processorArchitecture="*"
            name="Microsoft.Windows.Common-Controls"
            version="6.0.0.0"
            publicKeyToken="6595b64144ccf1df"
            language="*"
         />
      </dependentAssembly>
   </dependency>
</assembly>
```

## 资源：字符串表

参见 ![文件夹](Images/Folder.png "文件夹") `/.../Resources/STRING/Strings.json`

```json
[
    {
        "id": 101,
        "name": "MyLocalizedString1",
        "LCID_0000": "This is my NEUTRAL text for MyLocalizedString1",
        "LCID_0409": "This is my USA text for MyLocalizedString1",
        "LCID_0407": "This is my GERMAN text for MyLocalizedString1",
        "LCID_0809": "This is my UK text for MyLocalizedString1"
    },
    {
        "id": 102,
        "name": "MyLocalizedString2",
        "LCID_0000": "This is my NEUTRAL text for MyLocalizedString2",
        "LCID_0409": "This is my USA text for MyLocalizedString2",
        "LCID_0407": "This is my GERMAN text for MyLocalizedString2",
        "LCID_0809": "This is my UK text for MyLocalizedString2"
    }
]
```

## 资源：MESSAGETABLE

参见 ![文件夹](Images/Folder.png "文件夹") `/.../Resources/MESSAGETABLE/Strings.json`

```json
{
    "events": 
    [
        {
            "id": -1073610751,
            "name": "service_started",
            "LCID_0000": "%1 service started"
        },
        {
            "id": -1073610750,
            "name": "service_startup_failed",
            "LCID_0000": "%1 service startup failed"
        },
        {
            "id": -1073610749,
            "name": "service_ended",
            "LCID_0000": "%1 service ended"
        },
        {
            "id": -1073610748,
            "name": "service_stopping",
            "LCID_0000": "%1 service stopping"
        }
    ],
    "categories": 
    [
        {
            "id": 1,
            "name": "status_changed",
            "LCID_0000": "Status Changed"
        }
    ]
}
```