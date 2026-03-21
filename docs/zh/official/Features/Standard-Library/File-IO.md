---
title: 文件 I/O
parent: 标准库
nav_order: 2
---

# 文件 I/O 的编码选项

`Open`语句通过使用新的`Encoding`关键字和变量支持 Unicode，并允许您指定除标准 Unicode 选项之外的广泛编码选项。

## 使用示例

```vb
Open "C:\MyFile.txt" For Input Encoding utf-8 As #1
```

## 支持的编码

当前定义的编码选项完整列表（不用担心，这些会在智能感知中出现）是：

- `default_system_ansi`
- `utf_7`、`utf_7_bom`
- `utf_8`、`utf_8_bom`
- `utf_16`、`utf_16_bom`
- `us_ascii`
- `koi8_u`、`koi8_r`
- `big5`
- `iso_8859_1_latin1`、`iso_8859_2_latin2`、`iso_8859_3_latin3`、`iso_8859_4_latin4`
- `iso_8859_5_cyrillic`、`iso_8859_6_arabic`、`iso_8859_7_greek`、`iso_8859_8_hebrew`
- `iso_8859_9_latin5_turkish`、`iso_8859_10_latin6_nordic`、`iso_8859_11_thai`
- `iso_8859_13_latin8_baltic`、`iso_8859_14_latin8_celtic`
- `iso_8859_15_latin9_euro`、`iso_8859_16_latin10_balkan`
- `windows_1250_central_europe`、`windows_1251_cyrillic`、`windows_1252_western`
- `windows_1253_greek`、`windows_1254_turkish`、`windows_1255_hebrew`、`windows_1256_arabic`
- `windows_1257_baltic`、`windows_1258_vietnamese`
- `ibm_850_western_europe`、`ibm_852_central_and_eastern_europe`
- `ibm_855_cyrillic`、`ibm_856_hebrew`、`ibm_857_turkish`、`ibm_858_western_europe`
- `ibm_860_portuguese`、`ibm_861_icelandic`、`ibm_862_hebrew`
- `ibm_863_canadian`、`ibm_865_danish`、`ibm_866_cyrillic`、`ibm_869_greek`
- `ibm_932_japanese`和`ibm_949_korean`

根据系统支持，应接受具有类似格式的其他编码。