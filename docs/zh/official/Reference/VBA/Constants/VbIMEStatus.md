---
title: VbIMEStatus
parent: Constants Module
permalink: /tB/Modules/Constants/VbIMEStatus
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'bbd07c79-f662-49e0-ae57-400757c179e3'
  PropagateID: 'bbd07c79-f662-49e0-ae57-400757c179e3'
  ReservedCode1: '7086a6ac-8f6f-4d65-9bb5-62ca90a1de3e'
  ReservedCode2: '7086a6ac-8f6f-4d65-9bb5-62ca90a1de3e'
---

# VbIMEStatus

输入法编辑器模式常量。每个值同时以旧版 `vbIME...` 名称和较新的 `vbIMEMode...` 名称公开；具有相同值的两个名称可互换使用。

适用于给定模式的常量取决于系统区域设置。值 4--8 适用于日语区域，值 9 和 10 适用于韩语区域。

| 常量 | 值 | 描述 |
|------|-----|------|
| **vbIMENoOp** / **vbIMEModeNoControl** | 0 | 不控制 IME（默认）。 |
| **vbIMEOn** / **vbIMEModeOn** | 1 | IME 开启。 |
| **vbIMEOff** / **vbIMEModeOff** | 2 | IME 关闭。 |
| **vbIMEDisable** / **vbIMEModeDisable** | 3 | IME 禁用。 |
| **vbIMEHiragana** / **vbIMEModeHiragana** | 4 | 全角平假名模式。 |
| **vbIMEKatakanaDbl** / **vbIMEModeKatakana** | 5 | 全角片假名模式。 |
| **vbIMEKatakanaSng** / **vbIMEModeKatakanaHalf** | 6 | 半角片假名模式。 |
| **vbIMEAlphaDbl** / **vbIMEModeAlphaFull** | 7 | 全角字母数字模式。 |
| **vbIMEAlphaSng** / **vbIMEModeAlpha** | 8 | 半角字母数字模式。 |
| **vbIMEModeHangulFull** | 9 | 全角韩文模式。 |
| **vbIMEModeHangul** | 10 | 半角韩文模式。 |