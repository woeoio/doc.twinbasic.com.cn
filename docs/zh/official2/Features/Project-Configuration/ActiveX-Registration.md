---
title: ActiveX 注册
parent: 项目配置
nav_order: 3
permalink: /Features/Project-Configuration/ActiveX-Registration
---

# ActiveX 注册选项

## 注册位置

将 ActiveX 构建注册到`HKEY_LOCAL_MACHINE`或`HKEY_CURRENT_USER`选项。虽然现代应用程序使用`HKEY_CURRENT_USER`，但为了 VBx 兼容性，组件必须注册到`HKEY_LOCAL_MACHINE`。请注意，注册时需要以管理员身份运行。

## 构建时注册

构建时注册是可选的。tB 提供项目：构建后注册 DLL 选项，因此您可以禁用自动注册，例如，如果您想先移动文件。