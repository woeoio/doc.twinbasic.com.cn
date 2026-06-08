---
title: "控件现代化"
parent: GUI Components
nav_order: 4
permalink: /Features/GUI-Components/Modernization
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '4c191416-5906-419c-85a0-446a97dbbcd5'
  PropagateID: '4c191416-5906-419c-85a0-446a97dbbcd5'
  ReservedCode1: '3c010567-5a96-4a63-acc5-daf6626c3924'
  ReservedCode2: '3c010567-5a96-4a63-acc5-daf6626c3924'
---

# 控件现代化

tB 最终将替换你习惯的所有内置控件，目前可用的有：基本集中的 CommandButton、TextBox、ComboBox、CheckBox、OptionButton、Label、Frame、PictureBox、Line、Shape、VScrollBar、HScrollBar、Timer、DriveListBox、DirListBox、FileListBox、Image 和 Data；以及通用控件中的 ListView、TreeView、ProgressBar、DTPicker、MonthView、Slider 和 UpDown。

## 主要现代化特性

- **64 位支持**：每个控件都可以同时编译为 32 位和 64 位，无需任何更改。
- **DPI 感知**：当应用程序启用 DPI 感知时，它们会自动正确调整大小。
- **视觉样式**：控件逐个支持视觉样式。可通过 `.VisualStyles` 属性逐个控件地应用或不应用 Comctl6 样式。

## 未实现控件的替代方案

最佳选择是 Krool 的 VBCCR 和 VBFlexGrid 项目。这些现在可以[从包服务器](/official/Features/Packages/Importing-a-package-from-TWINSERV)获取 x64 兼容版本，并且也是 DPI 感知的，支持视觉样式。

此外，Microsoft 提供的原始 OCX 控件也能正常工作；但它们大多仅支持 32 位。`MSComCtl.ocx` 的 x64 版本不随 Windows 附带，且在法律上不可再分发，但如果你安装了 64 位 Office，它在 tB 中可以使用。