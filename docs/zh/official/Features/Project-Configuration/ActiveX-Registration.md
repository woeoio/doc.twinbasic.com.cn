---
title: "ActiveX 注册"
parent: Project Configuration
nav_order: 3
permalink: /Features/Project-Configuration/ActiveX-Registration
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '83818556-35a8-4f86-9fbd-9e96e0d2db32'
  PropagateID: '83818556-35a8-4f86-9fbd-9e96e0d2db32'
  ReservedCode1: '2bf425f0-0944-4a7f-818e-4cf172916008'
  ReservedCode2: '2bf425f0-0944-4a7f-818e-4cf172916008'
---

# ActiveX 注册选项

## 注册位置

将 ActiveX 构建注册到 `HKEY_LOCAL_MACHINE` 或 `HKEY_CURRENT_USER` 的选项。虽然现代应用程序使用 `HKEY_CURRENT_USER`，但为了 VBx 兼容性，组件必须注册到 `HKEY_LOCAL_MACHINE`。注意这需要在注册时以管理员身份运行。

## 构建时注册

构建时注册是可选的。tB 提供了"Project: Register DLL after build"选项，因此你可以禁用自动注册，例如你想先移动文件时。