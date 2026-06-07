---
title: LogModeConstants
parent: Constants Module
permalink: /tB/Packages/VBRUN/Constants/LogModeConstants
---
# LogModeConstants

Destination and behaviour flags for the application log, used with **App.StartLogging**.

| Constant | Value | Description |
|----------|-------|-------------|
| **vbLogAuto** | 0 | Choose a destination automatically based on the platform. |
| **vbLogOff** | 1 | Disable logging. |
| **vbLogToFile** | 2 | Log to a file. |
| **vbLogToNT** | 3 | Log to the Windows Event Log. |
| **vbLogOverwrite** | 16 | When logging to a file, truncate it first instead of appending. |
| **vbLogThreadID** | 32 | Include the thread ID in each log entry. |
