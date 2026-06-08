---
title: COREWEBVIEW2_PHYSICAL_KEY_STATUS
parent: Types
permalink: /tB/Packages/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS
---
# COREWEBVIEW2_PHYSICAL_KEY_STATUS
Win32 `WM_KEYDOWN` / `WM_KEYUP` 消息族打包到其 `lParam` 中的位字段，解码为记录。控件在每次快捷键击键时读取运行时的 `COREWEBVIEW2_PHYSICAL_KEY_STATUS` 结构，并将其分发到 [**AcceleratorKeyPressed**](/official/Reference/WebView2/WebView2/#acceleratorkeypressed) 事件的各个参数——应用程序代码通常不直接创建此类型的实例。

```vb
Public Type COREWEBVIEW2_PHYSICAL_KEY_STATUS
    RepeatCount As Long
    ScanCode As Long
    IsExtendedKey As Long
    IsMenuKeyDown As Long
    WasKeyDown As Long
    IsKeyReleased As Long
End Type
```

## 成员

*RepeatCount*
: 击键在消息保持在队列中时自动重复的次数。

*ScanCode*
: 所按键的硬件扫描码。

*IsExtendedKey*
: 当键是*扩展*键时非零——右侧 **Alt** / **Ctrl**、方向键 / **Home** / **End** / **Page Up** / **Page Down** / **Insert** / **Delete** 区、**NumLock**，以及数字小键盘的 **Enter** 和 **/**。

*IsMenuKeyDown*
: 生成消息时 **Alt** 被按住时非零。

*WasKeyDown*
: 在此消息之前键已经按下时非零——区分初次击键和后续自动重复。

*IsKeyReleased*
: 在报告键抬起的转换消息上非零；在键按下消息上为零。

### 另见

- [AcceleratorKeyPressed](/official/Reference/WebView2/WebView2/#acceleratorkeypressed)
- [wv2KeyEventKind](/official/Reference/WebView2/Enumerations/wv2KeyEventKind)