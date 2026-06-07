---
title: ClipboardConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/ClipboardConstants
---
# ClipboardConstants

Standard clipboard format identifiers used by the [**DataObject**](/official/Reference/VBRUN/DataObject/) and **Clipboard** objects to choose how a value is stored or retrieved.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbCFText** | 1 | ANSI text. |
| **vbCFBitmap** | 2 | Device-dependent bitmap (`HBITMAP`). |
| **vbCFMetafile** | 3 | Windows metafile. |
| **vbCFDIB** | 8 | Device-independent bitmap. |
| **vbCFPalette** | 9 | Colour palette. |
| **vbCFUnicodeText** | 13 | Unicode (UTF-16) text. |
| **vbCFEMetafile** | 14 | Enhanced metafile. |
| **vbCFFiles** | 15 | A list of file paths (typically from a Windows shell drag-drop). |
| **vbCFLink** | &HFFFFBF00 | A DDE link reference. |
| **vbCFRTF** | &HFFFFBF01 | Rich Text Format. |
