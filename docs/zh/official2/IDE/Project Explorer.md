---
title: 项目资源管理器
parent: IDE
# nav_order: 2
permalink: /tB/IDE/Project/Explorer
---

# 项目资源管理器

![项目资源管理器](Images/ProjectExplorer.png "项目资源管理器")
![项目资源管理器示例](Images/ProjectExplorer_Sample.png "项目资源管理器示例")

![文件夹](Images/Folder.png "文件夹") 导入的类型库
![文件夹](Images/Folder.png "文件夹") 其他
![文件夹](Images/Folder.png "文件夹") 包
  <!-- ![文件夹](Images/Folder.png "文件夹") VB   -->
  <!-- ![文件夹](Images/Folder.png "文件夹") VBA   -->
  <!-- ![文件夹](Images/Folder.png "文件夹") VBComDlg   -->
  <!-- ![文件夹](Images/Folder.png "文件夹") VBRUN   -->
  <!-- ![文件夹](Images/Folder.png "文件夹") WinNativeCommonCtls   -->
![文件夹](Images/Folder.png "文件夹") 引用
![文件夹](Images/Folder.png "文件夹") 资源
![文件夹](Images/Folder.png "文件夹") 源文件

当项目打开时，会显示上下文相关的图标。

![项目资源管理器标题栏](Images/ProjectExplorer_Header.png "项目资源管理器标题栏")

## ![](Images/Settings.png) 项目设置

- [信息](Settings)

## ![](Images/Toggle.png) 切换文件视图 (<kbd>CTRL</kbd> + <kbd>R</kbd>)


## ![](Images/Add.png) 添加...

与右键菜单相同

> [!注意]
>
>  待办：添加每个菜单项。

## 右键菜单 - 添加

![右键添加](Images/RightClick-Add.png "右键添加")

- ![文件夹](Images/Folder.png "文件夹") 添加文件夹
- ![](Images/tB-Green.png) 添加 Windows 窗体
- ![](Images/tB-Green.png) 添加 Windows MDI 窗体
- ![](Images/tB-Green.png) 添加 Windows 用户控件
- ![](Images/tB-Green.png) 添加 Windows 属性页
- ![](Images/tB-Green.png) 添加 Windows 报表

---

- ![](Images/tB-Green.png) 添加自定义控件窗体

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
- 添加资源：消息表

## ![](Images/Folder.png) 文件夹
{: #folder }

## ![](Images/tB-Green.png) Windows 窗体
{: #windows-form }

[tbForm](Editor/Form)

## ![](Images/tB-Green.png) Windows MDI 窗体
{: #windows-mdi-form }

## ![](Images/UserControl.png) Windows 用户控件
{: #windows-usercontrol }

## ![](Images/tB-Green.png) Windows 属性页
{: #windows-propertypage }

## ![](Images/tB-Green.png) Windows 报表
{: #windows-report }

[tbReport](Editor/Report)

## ![](Images/tB-Green.png) 自定义控件窗体
{: #customcontrols-forms }

![添加自定义控件窗体弹窗](Images/RightClick-Add-CustomControlsForm-Popup.png "添加自定义控件窗体弹窗")

## ![](Images/tB-Red.png) 模块
{: #module }

## ![](Images/tB-Red.png) 类
{: #class }

## ![](Images/File-Green.png) 其他文件
{: #other-file }

## ![](Images/File-Green.png) 导入
{: #import }

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
   <description>应用程序描述</description>
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
        "LCID_0000": "这是 MyLocalizedString1 的中性文本",
        "LCID_0409": "这是 MyLocalizedString1 的美国英语文本",
        "LCID_0407": "这是 MyLocalizedString1 的德语文本",
        "LCID_0809": "这是 MyLocalizedString1 的英国英语文本"
    },
    {
        "id": 102,
        "name": "MyLocalizedString2",
        "LCID_0000": "这是 MyLocalizedString2 的中性文本",
        "LCID_0409": "这是 MyLocalizedString2 的美国英语文本",
        "LCID_0407": "这是 MyLocalizedString2 的德语文本",
        "LCID_0809": "这是 MyLocalizedString2 的英国英语文本"
    }
]
```

## 资源：消息表

参见 ![文件夹](Images/Folder.png "文件夹") `/.../Resources/MESSAGETABLE/Strings.json`

```json
{
    "events":
    [
        {
            "id": -1073610751,
            "name": "service_started",
            "LCID_0000": "%1 服务已启动"
        },
        {
            "id": -1073610750,
            "name": "service_startup_failed",
            "LCID_0000": "%1 服务启动失败"
        },
        {
            "id": -1073610749,
            "name": "service_ended",
            "LCID_0000": "%1 服务已结束"
        },
        {
            "id": -1073610748,
            "name": "service_stopping",
            "LCID_0000": "%1 服务正在停止"
        }
    ],
    "categories":
    [
        {
            "id": 1,
            "name": "status_changed",
            "LCID_0000": "状态已更改"
        }
    ]
}
```