---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '39983ec8-b5f4-475f-b268-aa0891cfde81'
  PropagateID: '39983ec8-b5f4-475f-b268-aa0891cfde81'
  ReservedCode1: '50bb1572-b0b5-41cf-9dc0-98b160d91881'
  ReservedCode2: '50bb1572-b0b5-41cf-9dc0-98b160d91881'
---

# Jekyll → VitePress 文档迁移规则

## 1. 概述

将 `D:\code\tb\docs.twinbasic.com\docs` 下的 Jekyll 文档迁移到 `D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\en\official` 目录。

### 需要复制的子目录（8个）

```
Challenges, Features, IDE, Miscellaneous, Reference, Tutorials, Videos, Documentation
```

### 数据规模

- 源文档：874 个 md 文件，210 个图片文件
- 内部链接分布：
  - `tB/` 永久链接：1641 处
  - `../` 相对跨目录链接：1517 处
  - 同目录/子目录链接：3893 处
  - 锚点链接（#xxx）：3609 处
  - 外部链接（http/https）：156 处
- permalink 映射表：376 条（见 `ai/permalink-map.json`）

---

## 2. 文件处理规则

### 2.1 复制文件

- **md 文档**：复制到目标目录，保持相对目录结构
- **图片资源**：复制 `Images/` 目录下的所有图片（png/jpg/jpeg/gif/svg/bmp），保持目录结构
- **`_Images/` 目录**：里面的 `.af` 文件是 Affinity Designer 源文件，不需要复制；如果里面有图片则合并到 `Images/`

### 2.2 文件重命名

文件名含有空格的，空格替换为连字符 `-`。完整映射表：

| 原文件名                                                            | 新文件名                                    |
| ------------------------------------------------------------------- | ------------------------------------------- |
| Features/Packages/Creating a TWINPACK package.md                    | Creating-a-TWINPACK-package.md              |
| Features/Packages/Importing a package from a TWINPACK file.md       | Importing-a-package-from-a-TWINPACK-file.md |
| Features/Packages/Importing a package from TWINSERV.md              | Importing-a-package-from-TWINSERV.md        |
| Features/Packages/Linked Packages.md                                | Linked-Packages.md                          |
| Features/Packages/Updating a package.md                             | Updating-a-package.md                       |
| IDE/Call Stack.md                                                   | Call-Stack.md                               |
| IDE/Debug Console.md                                                | Debug-Console.md                            |
| IDE/New Project.md                                                  | New-Project.md                              |
| IDE/Open Editors.md                                                 | Open-Editors.md                             |
| IDE/Package Publishing.md                                           | Package-Publishing.md                       |
| IDE/Project Explorer.md                                             | Project-Explorer.md                         |
| IDE/Project Settings.md                                             | Project-Settings.md                         |
| IDE/Splash Screen.md                                                | Splash-Screen.md                            |
| IDE/Status Bar.md                                                   | Status-Bar.md                               |
| Reference/Compiler Constants.md                                     | Compiler-Constants.md                       |
| Reference/Procedures and Functions.md                               | Procedures-and-Functions.md                 |
| Tutorials/CEF/Building a browser shell.md                           | Building-a-browser-shell.md                 |
| Tutorials/CEF/Customize the UserDataFolder.md                       | Customize-the-UserDataFolder.md             |
| Tutorials/CEF/Driving Monaco.md                                     | Driving-Monaco.md                           |
| Tutorials/CEF/Getting started.md                                    | Getting-started.md                          |
| Tutorials/CEF/Hosting local web assets.md                           | Hosting-local-web-assets.md                 |
| Tutorials/CEF/JavaScript interop.md                                 | JavaScript-interop.md                       |
| Tutorials/CustomControls/Defining a CustomControl.md                | Defining-a-CustomControl.md                 |
| Tutorials/CustomControls/Notes about the form designer.md           | Notes-about-the-form-designer.md            |
| Tutorials/CustomControls/Painting-drawing to your control.md        | Painting-drawing-to-your-control.md         |
| Tutorials/CustomControls/Property sheet and object serialization.md | Property-sheet-and-object-serialization.md  |
| Tutorials/WebView2/Building a browser shell.md                      | Building-a-browser-shell.md                 |
| Tutorials/WebView2/Customize the UserDataFolder.md                  | Customize-the-UserDataFolder.md             |
| Tutorials/WebView2/Driving Monaco.md                                | Driving-Monaco.md                           |
| Tutorials/WebView2/Getting started.md                               | Getting-started.md                          |
| Tutorials/WebView2/Hosting local web assets.md                      | Hosting-local-web-assets.md                 |
| Tutorials/WebView2/JavaScript interop.md                            | JavaScript-interop.md                       |

### 2.3 水印处理

- 文档开头不能出现 `AIGC:` YAML 块
- 文档最后一行不能出现 `> AI生成`
- 这两个是系统自动注入的水印，我会自己处理清除

---

## 3. Front Matter 规则

**保留** front matter 块（`---` 之间的 YAML），但只保留以下字段：

| 字段              | 处理 |
| ----------------- | ---- |
| `title`           | 保留 |
| `parent`          | 保留 |
| `nav_order`       | 保留 |
| `permalink`       | 保留 |
| `redirect_from`   | 删除 |
| `has_toc`         | 删除 |
| `has_children`    | 删除 |
| `grand_parent`    | 删除 |
| `vba_attribution` | 删除 |
| 其他任何字段      | 删除 |

---

## 4. Jekyll 语法转换规则

### 4.1 Kramdown 属性列表

删除所有 Kramdown 行内属性语法 `{: ... }`：

| 源语法                              | 目标语法                           | 说明                          |
| ----------------------------------- | ---------------------------------- | ----------------------------- |
| `# Title\n{: .no_toc }`             | `# Title`                          | 删除属性行                    |
| `- TOC\n{:toc}`                     | 都删除                             | 删除 TOC 相关两行             |
| `{: #anchor-id }`                   | 删除                               | 删除整行                      |
| `![img](x.png){:style="width:50%"}` | `![img](x.png){style="width:50%"}` | `{: ` → `{` 供 VitePress 识别 |
| `{: .fs-6 .fw-300 }`                | 删除                               | 删除属性行                    |

### 4.2 GitHub 风格 Callouts → VitePress 容器

```
> [!NOTE]
> Some text
> More text
```

转换为：

```
::: info
Some text
More text
:::
```

完整映射：

| Jekyll (GitHub) | VitePress       |
| --------------- | --------------- |
| `[!NOTE]`       | `::: info`      |
| `[!IMPORTANT]`  | `::: important` |
| `[!WARNING]`    | `::: warning`   |
| `[!TIP]`        | `::: tip`       |
| `[!CAUTION]`    | `::: caution`   |

转换要点：

- `> [!TYPE]` 行替换为 `::: type`
- 后续 `> ` 开头的行去掉 `> ` 前缀
- 遇到第一个非 `> ` 行时，在前面插入 `:::` 关闭容器
- 如果 callout 块后面紧跟空行，`:::` 放在空行之前

### 4.3 Liquid 模板标签

| 源语法                       | 目标语法               |
| ---------------------------- | ---------------------- |
| `{% raw %}"{{}"{% endraw %}` | `"{{}"`                |
| `{% raw %}内容{% endraw %}`  | `内容`（保留内部内容） |
| `{% include xxx %}`          | 删除整行               |

### 4.4 代码块语言

| 源               | 目标      |
| ---------------- | --------- |
| ` ```tb `        | ` ```vb ` |
| ` ```twinbasic ` | ` ```vb ` |

---

## 5. 链接修正规则（核心）

### 5.1 核心原则

**所有内部链接统一转换为 VitePress 项目的绝对路径**，格式为 `/en/official/xxx`。

这样做的原因：

1. Jekyll 使用 `permalink` 路由系统，链接路径与文件实际路径不同
2. VitePress 项目的目录结构与 Jekyll 不同（多了 `en/official/` 层级）
3. 使用绝对路径可以彻底消除相对路径在各种层级嵌套下的解析错误

### 5.2 链接分类与处理

#### (1) 外部链接 `http://` / `https://`

**保留原样**，不做任何修改。

#### (2) 纯锚点链接 `#xxx`

**保留原样**。

#### (3) `tB/` 永久链接（约 1641 处）

这是 Jekyll 的永久链接系统，`tB/` 路径与文件实际路径不同。查找 `ai/permalink-map.json` 映射表进行转换。

**算法**：

1. 从链接中提取 `tB/` 路径部分，归一化为 `/tB/xxx` 格式
2. 在映射表中查找对应的实际文件路径
3. 拼接为 `/en/official/{实际路径}`

**示例**：

| 源链接（在 Reference/VBA/Strings/Len.md 中） | 提取的 tB 路径                   | 映射结果                           | 最终链接                                                  |
| -------------------------------------------- | -------------------------------- | ---------------------------------- | --------------------------------------------------------- |
| `[MsgBox](../tB/Modules/Interaction/MsgBox)` | `/tB/Modules/Interaction/MsgBox` | `Reference/VBA/Interaction/MsgBox` | `[MsgBox](/en/official/Reference/VBA/Interaction/MsgBox)` |
| `[Attributes](../../tB/Core/Attributes)`     | `/tB/Core/Attributes`            | `Reference/Attributes`             | `[Attributes](/en/official/Reference/Attributes)`         |
| `[App](./tB/Packages/VB/App)`                | `/tB/Packages/VB/App`            | `Reference/VB/App`                 | `[App](/en/official/Reference/VB/App)`                    |
| `[Editor](../tB/IDE/Project/Editor)`         | `/tB/IDE/Project/Editor`         | `IDE/Editor`                       | `[Editor](/en/official/IDE/Editor)`                       |

**带锚点的 tB/ 链接**：先解析路径部分，锚点保留。例如：

- `[Attributes](../tB/Core/Attributes#arrayboundschecks)` → `[Attributes](/en/official/Reference/Attributes#arrayboundschecks)`

**映射表中找不到的 tB/ 链接**：有些 tB/ 路径在映射表中没有对应条目。此时根据 Jekyll 路由约定推导：

- `/tB/Core/{Statement}` → `Reference/Core/{Statement}`
- `/tB/Modules/{Module}/{Symbol}` → `Reference/VBA/{Module}/{Symbol}`
- `/tB/Packages/VB/{Class}` → `Reference/VB/{Class}`
- `/tB/Packages/VBRUN/{Module}` → `Reference/VBRUN/{Module}`
- `/tB/Packages/WebView2/...` → `Reference/WebView2/...`
- `/tB/Packages/CustomControls/...` → `Reference/CustomControls/...`
- `/tB/Packages/CEF/...` → `Reference/CEF/...`
- `/tB/Packages/Assert/...` → `Reference/Assert/...`
- `/tB/Packages/tbIDE/...` → `Reference/tbIDE/...`
- `/tB/Packages/WinEventLogLib/...` → `Reference/WinEventLogLib/...`
- `/tB/Packages/WinNamedPipesLib/...` → `Reference/WinNamedPipesLib/...`
- `/tB/Packages/WinServicesLib/...` → `Reference/WinServicesLib/...`
- `/tB/Packages/WinNativeCommonCtls/...` → `Reference/WinNativeCommonCtls/...`
- `/tB/IDE/...` → `IDE/...`（需按 permalink 映射转写 IDE 子路径）
- `/tB/Gloss` → `Reference/Glossary`
- `/tB/Controls` → `Reference/Controls`
- `/tB/Packages/` → `Reference/Packages`（总览页）

如果通过推导也无法确定目标文件，且目标文件在 VitePress 项目中确实不存在，则**转为纯文本**（保留链接文字，去掉链接语法）。

#### (4) `../` 相对跨目录链接（约 1517 处）

这些链接使用 `../` 向上回溯再进入其他目录。在 Jekyll 中可能有效，但在 VitePress 中由于目录层级不同，需要转换。

**算法**：

1. 根据当前文件所在目录，解析 `../` 相对路径得到 Jekyll 的绝对路径
2. 在 permalink 映射表中查找该路径对应的实际文件路径
3. 如果映射表中没有，则根据目录结构推导
4. 拼接为 `/en/official/{实际路径}`

**示例**：

| 源链接                                      | 当前文件                                | 解析后的 Jekyll 路径             | 映射/推导结果                   | 最终链接                                              |
| ------------------------------------------- | --------------------------------------- | -------------------------------- | ------------------------------- | ----------------------------------------------------- |
| `[Forms](../Features/GUI-Components/Forms)` | IDE/Editor.md                           | `/Features/GUI-Components/Forms` | `Features/GUI-Components/Forms` | `[Forms](/en/official/Features/GUI-Components/Forms)` |
| `[Operators](../../Reference/Operators)`    | Features/Language/Operators.md          | `/Reference/Operators`           | `Reference/Operators`           | `[Operators](/en/official/Reference/Operators)`       |
| `[Packages](../Packages/)`                  | Features/Compiler-IDE/Package-Server.md | `/Features/Packages/`            | `Features/Packages/`            | `[Packages](/en/official/Features/Packages/)`         |

#### (5) 同目录/子目录链接（约 3893 处）

这些是不以 `../` 或 `tB/` 开头的相对链接，如 `[Fusion](Fusion)` 或 `[Language/](Language/)`。

**同样转换为绝对路径**，因为：

- 文件名可能被重命名（空格→连字符）
- 有些链接使用 Jekyll permalink 短名，与文件名不一致

**算法**：

1. 根据当前文件所在目录，拼接得到完整路径
2. 在 permalink 映射表中查找，或根据目录结构确认
3. 处理文件名中的空格（必须与重命名后的文件名一致）
4. 拼接为 `/en/official/{实际路径}`

**示例**：

| 源链接                               | 当前文件                     | 最终链接                                                             | 说明                |
| ------------------------------------ | ---------------------------- | -------------------------------------------------------------------- | ------------------- |
| `[Fusion](Fusion)`                   | Features/index.md            | `[Fusion](/en/official/Features/Fusion)`                             | 同目录链接          |
| `[Language/](Language/)`             | Features/index.md            | `[Language/](/en/official/Features/Language/)`                       | 子目录 index        |
| `[Call Stack](Call Stack)`           | IDE/index.md                 | `[Call Stack](/en/official/IDE/Call-Stack)`                          | 文件名有空格→连字符 |
| `[Getting started](Getting started)` | Tutorials/WebView2/index.md  | `[Getting started](/en/official/Tutorials/WebView2/Getting-started)` | 空格→连字符         |
| `[Math](../Modules/Math)`            | Reference/VBA/Strings/Len.md | `[Math](/en/official/Reference/VBA/Math)`                            | Modules→VBA         |

#### (6) 图片链接

图片链接 `![alt](path)` 特殊处理：
- 同目录下的 `Images/xxx.png` → 保留相对路径，不做修改
- `../Images/xxx.png` → 保留相对路径（图片目录结构不变）
- `../_Images/xxx.png` → 改为 `../Images/xxx.png`（去掉下划线前缀）
- `/assets/images/xxx` → 引用的是 Jekyll 全局资源，需确认是否在项目 `public/` 下有对应文件；如果没有，从源目录 `D:\code\tb\docs.twinbasic.com\docs\assets\` 复制到项目 `D:\code\vi\twinbasic\docs\doc.twinbasic.com.cn\docs\public\` 下同路径

### 5.3 链接修正流程总结

对每个 md 文件中的每个链接 `[text](url)`：

```
1. url 是外部链接？    → 保留
2. url 是纯锚点？      → 保留
3. url 是图片？        → 按图片规则处理
4. url 包含 tB/？      → 提取 tB/ 路径 → 查映射表 → 转绝对路径
5. url 以 ../ 开头？   → 解析为 Jekyll 绝对路径 → 查映射表/推导 → 转绝对路径
6. url 是同目录链接？  → 拼接当前目录 → 查映射表/推导 → 转绝对路径（注意重命名）
7. 以上都匹配不到？   → 检查目标文件是否实际存在 → 存在则用实际路径，否则转为纯文本
```

---

## 6. 特殊目录说明

### 6.1 Documentation 目录

这是文档开发相关的内部技术文档，Jekyll 中它放在 `Documentation/` 目录。在 VitePress 中也需要迁移，路径为 `Documentation/`。

其 permalink 模式为 `/Documentation/Development/xxx`，对应的文件路径就是 `Documentation/xxx`。

### 6.2 Reference 目录

Reference 是最大的目录（711 个 md），包含多个子目录。注意 Jekyll 中 `Modules` 对应的实际上是 `VBA/` 子目录：

| Jekyll permalink               | 实际文件路径                     |
| ------------------------------ | -------------------------------- |
| `/tB/Modules/Math/...`         | `Reference/VBA/Math/...`         |
| `/tB/Modules/Strings/...`      | `Reference/VBA/Strings/...`      |
| `/tB/Modules/DateTime/...`     | `Reference/VBA/DateTime/...`     |
| `/tB/Modules/Interaction/...`  | `Reference/VBA/Interaction/...`  |
| `/tB/Modules/Collection/...`   | `Reference/VBA/Collection/...`   |
| `/tB/Modules/Compilation/...`  | `Reference/VBA/Compilation/...`  |
| `/tB/Modules/Constants/...`    | `Reference/VBA/Constants/...`    |
| `/tB/Modules/Conversion/...`   | `Reference/VBA/Conversion/...`   |
| `/tB/Modules/ErrObject/...`    | `Reference/VBA/ErrObject/...`    |
| `/tB/Modules/Financial/...`    | `Reference/VBA/Financial/...`    |
| `/tB/Modules/FileSystem/...`   | `Reference/VBA/FileSystem/...`   |
| `/tB/Modules/HiddenModule/...` | `Reference/VBA/HiddenModule/...` |
| `/tB/Modules/Information/...`  | `Reference/VBA/Information/...`  |

### 6.3 IDE 目录

IDE 子目录的 permalink 使用了 `tB/IDE/Project/` 前缀，映射关系：

| Jekyll permalink                    | 实际文件路径                |
| ----------------------------------- | --------------------------- |
| `/tB/IDE/Project/CallStack`         | `IDE/Call-Stack.md`         |
| `/tB/IDE/Project/DebugConsole`      | `IDE/Debug-Console.md`      |
| `/tB/IDE/Project/Editor`            | `IDE/Editor.md`             |
| `/tB/IDE/Project/Editor/Form`       | `IDE/tbForm.md`             |
| `/tB/IDE/Project/Editor/Report`     | `IDE/tbReport.md`           |
| `/tB/IDE/Project/Explorer`          | `IDE/Project-Explorer.md`   |
| `/tB/IDE/Project/FindReplace`       | `IDE/FindReplace.md`        |
| `/tB/IDE/Project/History`           | `IDE/History.md`            |
| `/tB/IDE/Project/Memory`            | `IDE/Memory.md`             |
| `/tB/IDE/Project/Menu`              | `IDE/Menu/index.md`         |
| `/tB/IDE/Project/New`               | `IDE/New-Project.md`        |
| `/tB/IDE/Project/OpenEditors`       | `IDE/Open-Editors.md`       |
| `/tB/IDE/Project/Outline`           | `IDE/Outline.md`            |
| `/tB/IDE/Project/PackagePublishing` | `IDE/Package-Publishing.md` |
| `/tB/IDE/Project/Properties`        | `IDE/Properties.md`         |
| `/tB/IDE/Project/Settings`          | `IDE/Project-Settings.md`   |
| `/tB/IDE/Project/Splash`            | `IDE/Splash-Screen.md`      |
| `/tB/IDE/Project/StatusBar`         | `IDE/Status-Bar.md`         |
| `/tB/IDE/Project/Toolbar`           | `IDE/Toolbar.md`            |
| `/tB/IDE/Project/Toolbox`           | `IDE/Toolbox.md`            |
| `/tB/IDE/Project/Variables`         | `IDE/Variables.md`          |
| `/tB/IDE/Project/Watches`           | `IDE/Watches.md`            |
| `/tB/IDE/Project/Webpage`           | `IDE/Webpage.md`            |
| `/tB/IDE/Project/Diagnostics`       | `IDE/Diagnostics.md`        |

---

## 7. 辅助文件

- **映射表**：`ai/permalink-map.json` — 完整的 376 条 Jekyll permalink → 实际文件路径映射

---

## 8. 死链记录

处理过程中，所有无法修正的死链（即被替换为纯文本的链接），必须记录到 `ai/dielink.md` 文件中，格式如下：

```markdown
| 文件路径 | 行号 | 原超链接内容 |
|---------|------|------------|
| en/official/IDE/Editor.md | 42 | `[Settings](./tB/IDE/Project/Settings)` |
| en/official/Features/Language/Operators.md | 15 | `[xxx](../../NonExist/Page)` |
```

记录内容：
- **文件路径**：相对于项目根目录的目标文件路径
- **行号**：死链在目标文件中的行号
- **原超链接内容**：未修改前的原始链接 markdown 语法

---

## 9. 执行策略

1. 按 8 个源目录分配子代理并行处理
2. 每个子代理加载 `ai/permalink-map.json` 作为链接修正的依据
3. 处理完成后，全局搜索验证：
   - 无残留 Jekyll 语法（`{:`、`{%`、`[!NOTE]` 等）
   - 无残留 `tB/` 链接
   - 无残留 `../` 相对路径链接
   - 无残留 AIGC 水印
4. 所有子代理的死链记录汇总写入 `ai/dielink.md`

> AI生成