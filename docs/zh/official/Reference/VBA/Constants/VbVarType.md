---
title: VbVarType
parent: Constants Module
permalink: /tB/Modules/Constants/VbVarType
---
# VbVarType

Variant subtype codes returned by the **VarType** function. Most calls return a single value from the table below. Arrays are reported as **vbArray** added to the element subtype --- for example, an array of **Long** returns `vbArray + vbLong` = 8195.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbEmpty** | 0 | Empty (uninitialized). |
| **vbNull** | 1 | **Null** (no valid data). |
| **vbInteger** | 2 | **Integer**. |
| **vbLong** | 3 | **Long** integer. |
| **vbSingle** | 4 | Single-precision floating-point number. |
| **vbDouble** | 5 | Double-precision floating-point number. |
| **vbCurrency** | 6 | **Currency** value. |
| **vbDate** | 7 | **Date** value. |
| **vbString** | 8 | **String**. |
| **vbObject** | 9 | Object reference. |
| **vbError** | 10 | Error value. |
| **vbBoolean** | 11 | **Boolean** value. |
| **vbVariant** | 12 | **Variant** (used only with arrays of variants). |
| **vbDataObject** | 13 | A data access object. |
| **vbDecimal** | 14 | **Decimal** value. |
| **vbByte** | 17 | **Byte** value. |
| **vbLongLong** | 20 | **LongLong** integer (64-bit only). |
| **vbUserDefinedType** | 36 | **Variant** containing a user-defined type. |
| **vbArray** | 8192 | Array. Always added to another value when returned. |
