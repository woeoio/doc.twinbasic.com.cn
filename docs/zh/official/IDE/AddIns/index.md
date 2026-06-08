---
title: 外接程序
parent: IDE
permalink: /tB/IDE/AddIns/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'c36e46f4-68c6-4bb3-9f22-a3823c718216'
  PropagateID: 'c36e46f4-68c6-4bb3-9f22-a3823c718216'
  ReservedCode1: '15fd0456-57ac-404a-b85a-c56c784b195c'
  ReservedCode2: '15fd0456-57ac-404a-b85a-c56c784b195c'
---

# 外接程序

外接程序是一个标准 DLL，导出 `tbCreateCompilerAddin` 并返回实现 [**AddIn**](/official/Reference/tbIDE/AddIn) 接口的对象。通过 IDE 启动时传递的 [**Host**](/official/Reference/tbIDE/Host) 对象，外接程序可以访问工具栏、工具窗口、调试控制台、当前项目、键盘快捷键和主题。[**tbIDE 包**](/official/Reference/tbIDE/) 文档提供了完整的 API 说明。

新建项目对话框包含外接程序模板（示例 10 至 16），涵盖从简单工具栏按钮到 HTML DOM 支持的工具窗口等多种模式。社区外接程序列在[**社区**](/official/IDE/AddIns/Community/)页面。

twinBASIC 支持两个外接程序安装位置。IDE 安装目录对所有用户账户可用，但 IDE 更新后可能需要重新安装。每用户应用数据文件夹在 IDE 升级后持久保留，无需管理员权限。

要通过 IDE 安装目录安装外接程序，解压并将每种架构的 DLL 复制到对应文件夹：

`\twinBASIC_IDE_BETA_xxx\addins\win32\`

`\twinBASIC_IDE_BETA_xxx\addins\win64\`