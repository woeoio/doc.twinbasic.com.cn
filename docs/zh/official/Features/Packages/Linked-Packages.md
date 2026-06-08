---
title: "链接包"
parent: Package Management
nav_order: 5
permalink: /Features/Packages/Linked
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'cf745c0d-5e9b-4483-8526-caabeceedef6'
  PropagateID: 'cf745c0d-5e9b-4483-8526-caabeceedef6'
  ReservedCode1: 'b86b41ec-3c61-4ad7-bb14-65410dd45487'
  ReservedCode2: 'b86b41ec-3c61-4ad7-bb14-65410dd45487'
---

# 链接包

除了本节到目前为止描述的标准用法外，包还可以被**链接**。当包被链接时，它不会嵌入在 .twinproj 文件中——而是存储在所有项目都可以访问的公共位置。这有多个好处。有些包非常大，不在每个 .twinproj 文件中存储副本使它们更容易共享。此外，它允许多个项目共享相同文件，至少以只读形式。虽然内置编译器包是链接的，但本文讨论的是第三方包。

## 首次下载包

当你首次在当前机器上勾选某个包时，它默认是**Embedded**。你会在包名称旁边看到一列名为 Embedded：

<img width="670" height="169" alt="image" src="https://github.com/user-attachments/assets/1f7e3574-f3c8-4aee-972a-ff161c0e51ac" />

取消勾选 Embedded 列，它将被转换为链接包。该包的 .twinpack 文件会创建在 `%APPDATA%\Roaming\twinBASIC\packages`，在那里它可以跨 tB IDE 更新保持可用。

## 添加已链接的包

一旦你在一个项目中执行了上述步骤，链接包就可以被所有项目使用。你通过 Available Packages 以相同方式添加引用，只是现在你会被提示选择使用系统上已有的链接版本，还是从 TWINSERV 重新下载：

<img width="641" height="439" alt="image" src="https://github.com/user-attachments/assets/f48a7254-e5c9-48c5-8099-725c0951ae5f" />

此提示提供了两个版本的版本号，允许在需要时更新包。如果你选择重新下载，你需要再次取消勾选 Embed 以保持为链接包。这样做时，你会被提示确认要用从包服务器新下载的版本覆盖本地链接副本：

<img width="635" height="214" alt="image" src="https://github.com/user-attachments/assets/8cf72685-1188-4607-a55a-df16d4280474" />

## 打开缺少链接包的项目

有时你可能想打开一个引用了你当前没有副本的链接包的 .twinproj。如果发生这种情况，你会看到标准的缺少引用提示：

<img width="539" height="63" alt="image" src="https://github.com/user-attachments/assets/f66fb240-dcb7-46ee-896d-78c3789a7876" />

处理方式相同。**取消勾选引用**——"Fix" 目前尚未实现。然后，转到 Available Packages 选项卡并选择该包——如上所述，取消勾选 Embed 以转换为链接包。

## 手动管理

你可以通过链接包文件夹手动管理包：`%APPDATA%\Roaming\twinBASIC\packages`

你可以使包可用、删除它们、备份它们等。如果你将 .twinpack 文件（或 .twinproj）复制到该位置，它将作为链接包可用，无需从包服务器下载。它不需要存在于服务器上，允许完全私有的本地链接包。