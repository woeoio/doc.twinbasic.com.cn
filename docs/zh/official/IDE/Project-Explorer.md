---
title: "项目资源管理器"
parent: IDE
permalink: /tB/IDE/Project/Explorer
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '401ec886-c346-4cd1-ac7a-53c40334ba14'
  PropagateID: '401ec886-c346-4cd1-ac7a-53c40334ba14'
  ReservedCode1: '8a9d783b-520f-4abd-8fab-e8c8a4bf7c18'
  ReservedCode2: '8a9d783b-520f-4abd-8fab-e8c8a4bf7c18'
---

# 项目资源管理器

![Project Explorer](Images/ProjectExplorer.png "Project Explorer")
![Project Explorer Sample](Images/ProjectExplorer_Sample.png "Project Explorer Sample")

![Folder](Images/Folder.png "Folder") ImportedTypeLibraries
![Folder](Images/Folder.png "Folder") Miscellaneous
![Folder](Images/Folder.png "Folder") Packages
![Folder](Images/Folder.png "Folder") References
![Folder](Images/Folder.png "Folder") Resources
![Folder](Images/Folder.png "Folder") Sources

项目打开时会出现上下文图标。

![Project Explorer Header](Images/ProjectExplorer_Header.png "Project Explorer Header")

## ![](Images/Settings.png) 项目设置

- [信息](/official/IDE/Project-Settings)

## ![](Images/Toggle.png) 切换文件视图 (<kbd>CTRL</kbd> + <kbd>R</kbd>)


## ![](Images/Add.png) 添加...

与右键相同

## 右键 - 添加

![Right-Click Add](Images/RightClick-Add.png "Right-Click Add")

- ![Folder](Images/Folder.png "Folder") 添加文件夹
- ![](Images/tB-Green.png) 添加 Windows 窗体
- ![](Images/tB-Green.png) 添加 Windows MDI 窗体
- ![](Images/tB-Green.png) 添加 Windows UserControl
- ![](Images/tB-Green.png) 添加 Windows 属性页
- ![](Images/tB-Green.png) 添加 Windows 报表

---

- ![](Images/tB-Green.png) 添加 CustomControls 窗体

---

- ![Module](Images/tB-Red.png "Module") 添加模块 (.TWIN 支持 Unicode)
- ![Class](Images/tB-Red.png "Class") 添加类 (.TWIN 支持 Unicode)

---

- ![Module](Images/tB-Blue.png "Module (BAS)") 添加模块 (.BAS)
- ![Class](Images/tB-Orange.png "Class (CLS)") 添加类 (.CLS)

---

- ![File](Images/File-Green.png "File") 添加其他文件

---

- ![File](Images/File-Green.png "File") 导入

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
![Add CustomControls Form Popup](Images/RightClick-Add-CustomControlsForm-Popup.png "Add CustomControls Form Popup")

## ![](Images/tB-Red.png) 模块
## ![](Images/tB-Red.png) 类
## ![](Images/File-Green.png) 其他文件
## ![](Images/File-Green.png) 导入
## 资源：视觉样式清单

参见 ![Folder](Images/Folder.png "Folder") `/.../Resources/MANIFEST/#1.xml`

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

参见 ![Folder](Images/Folder.png "Folder") `/.../Resources/STRING/Strings.json`

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

参见 ![Folder](Images/Folder.png "Folder") `/.../Resources/MESSAGETABLE/Strings.json`

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