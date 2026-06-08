---
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: '59c68e2b-1ba4-4cbe-8356-55548ac64457'
  PropagateID: '59c68e2b-1ba4-4cbe-8356-55548ac64457'
  ReservedCode1: '0940be39-6258-421c-9fa2-2feef434c89c'
  ReservedCode2: '0940be39-6258-421c-9fa2-2feef434c89c'
---

# zh/official 中文翻译规则

## 0. 失败教训（必须阅读）

上一轮翻译产生了大量 Vue 编译错误，根本原因如下：

1. **代码围栏被破坏**：翻译子代理将 ` ```js ` 错误处理成 `` `js ``（单反引号），导致 Vue 将代码块内容当作 HTML 解析，报 "Element is missing end tag"。
2. **内联代码反引号丢失**：翻译子代理在处理 `<word>` 占位符时把反引号去掉了，如 `--src <path>` 变成裸露的 `--src <path>`，Vue 将 `<path>` 当作 HTML 标签解析。
3. **模板字面量反引号丢失**：JavaScript 模板字符串 `` `text ${var} text` `` 中的反引号被丢掉，导致语法错乱。
4. **Front matter YAML 损坏**：标题含 `&` 等特殊字符时未被双引号包裹，如 `title: &, =` 被 YAML 解析器报错。
5. **内联代码首字符丢失**：翻译时 `tbdocs` 变成 `bdocs`、`runBuild` 变成 `unBuild`。

**核心原则**：翻译是「只改文字，不改格式」。任何 Markdown 结构标记（反引号、代码围栏、HTML 标签、front matter）都是格式，不是翻译对象。

---

## 1. 概述

将 `docs/en/official/` 下全部 md 文件复制到 `docs/zh/official/`，然后将正文翻译为中文。

### 前提条件

- en/official 已构建成功（零错误零死链），是翻译的可靠源
- VitePress config.mts 已配置 `rewrites: { 'zh/:path*': ':path*' }`
- zh.mts 侧边栏已配置

### 链接规则

- 正文中所有 `/en/official/xxx` 链接替换为 `/official/xxx`（注意：不是 `/zh/official/`）
- 不要修改图片路径（保持 `Images/xxx.png` 相对路径）
- 不要修改外部链接

---

## 2. Front matter 规则

### 2.1 只改 title，其余不动

```yaml
---
title: "已翻译的中文标题"    # 翻译为中文
parent: Operators             # 不动
nav_order: 15                  # 不动
permalink: /tB/Core/Concat    # 不动
---
```

### 2.2 YAML 安全引用（极其重要）

title 值如果包含以下任意字符，**必须用双引号包裹**：

```
& : # { } [ ] ! % @ ' " * ? | > - ` 空格
```

正确示例：
```yaml
title: "& 和 &= 运算符"        # 含 &，必须双引号
title: "声明语句"               # 无特殊字符，可以不用引号（但用了也不错）
title: "CreateObject 函数"     # 含空格，建议双引号
```

错误示例（会导致构建失败）：
```yaml
title: & 和 &= 运算符           # & 在 YAML 中是锚点引用，解析崩溃
title: ToString 方法           # 无引号虽然能解析但不规范
```

### 2.3 翻译 title 的原则

- 翻译描述性部分，保留技术术语/API 名称为英文
- 示例：`title: "Creating a TWINPACK Package"` → `title: "创建 TWINPACK 包"`
- 示例：`title: "&, &="` → `title: "& 和 &= 运算符"`
- 示例：`title: CStr` → `title: CStr`（纯 API 名不翻译）
- 示例：`title: "Welcome"` → `title: "欢迎"`

---

## 3. 正文翻译规则

### 3.1 代码块（fenced code block）— 绝对不可修改

代码围栏标记 ` ``` ` 和语言标识符以及围栏内的所有内容**禁止任何修改**：

````markdown
```js              ← 禁止修改：保持三个反引号 + 语言标识符
import { foo } from "./bar.mjs";
const x = `hello ${name}`;    ← 禁止修改：模板字面量保持原样
```                ← 禁止修改：保持三个反引号
````

**常见错误**（绝对禁止）：
- ❌ `` `js `` （单反引号代替三反引号）
- ❌ 把 ` ``` ` 之间空行删掉
- ❌ 把模板字面量 `` `text ${var}` `` 的反引号去掉
- ❌ 把代码内容翻译成中文

### 3.2 缩进代码块（4空格缩进）— 绝对不可修改

```markdown
    node builder/tbdocs.mjs [--src <path>] [--dest <path>]
                            [--baseurl <prefix>] [--url <origin>]
```

缩进代码块中的 `<path>`、`<prefix>` 等占位符**保持原样**，不要加反引号。

### 3.3 内联代码（反引号包裹）— 翻译描述部分，保留代码部分

```markdown
在 `builder/tbdocs.mjs` 顶部添加导入：    ← 翻译了文字，保留了 `...` 反引号
```

**反引号是格式标记，翻译时必须原样保留**。反引号内的内容是否翻译取决于语义：

- **文件名/路径/命令**：不翻译 → `` `builder/tbdocs.mjs` ``
- **代码标识符**：不翻译 → `` `runBuild` ``
- **技术描述词**：翻译 → `the "dry run" flag` → `` `dry run` 标志 ``（但反引号保留）
- **UI 文本**：翻译 → `` `Save All Changes` `` → `` `全部保存` ``

### 3.4 含尖括号的内容 — 保持反引号包裹

en 源文件中凡是包含 `<word>` 占位符的地方，在 en 中都用反引号包裹（如 `--src <path>`）。翻译时**反引号必须保留**：

```markdown
| `--src <path>` | 源根目录。默认：`docs`。 |
```

**绝对禁止**把反引号去掉变成裸露的 `--src <path>`，这会导致 Vue 将 `<path>` 解析为 HTML 标签而报错。

### 3.5 HTML 标签 — 保持原样

以下 HTML 标签在文档中有意使用，翻译时**原样保留**：

- `<br>` — 换行（常见于图片后）
- `<kbd>CTRL</kbd>` — 键盘按键标记
- `<sup>` / `<sub>` — 上下标
- `<details>` / `<summary>` / `:::` — 折叠容器

### 3.6 VitePress 自定义容器 — 保持原样

```markdown
::: info
提示内容
:::

::: warning
警告内容
:::

::: details 折叠标题
折叠内容
:::
```

容器标记 `:::` 及其类型标识符**不可翻译**。容器内的文字可以翻译。

---

## 4. 表格翻译规则

```markdown
| Flag | Effect |
|---|---|
| `--src <path>` | Source root. Default: `docs` relative to the working directory. |
```

翻译为：

```markdown
| 标志 | 作用 |
|---|---|
| `--src <path>` | 源根目录。默认：相对于工作目录的 `docs`。 |
```

- **表头**：翻译描述性列，保留代码/符号列
- **分隔行** `|---|---|`：不动
- **代码列**：不翻译（保留反引号和尖括号占位符）
- **描述列**：翻译文字，但保留其中的内联代码反引号

---

## 5. 图片 — 不翻译

```markdown
![Toolbar](Images/Toolbar_1.png "Toolbar")
```

- 保持 Markdown 语法不变
- 保持图片路径不变
- alt 文本和 title 可以翻译（但非必须，保持英文也可）

---

## 6. 链接 — 只改路径前缀

### 6.1 内部链接

```
[link text](/en/official/Documentation/Pipeline-Stages#page-objects-pages)
```
↓
```
[link text](/official/Documentation/Pipeline-Stages#page-objects-pages)
```

仅做路径替换 `/en/official/` → `/official/`，不修改链接文字。

### 6.2 外部链接

保持不变，不做任何修改。

---

## 7. 不翻译的内容

以下内容在翻译时**原样保留，一个字符都不改**：

1. 代码块（fenced code block）内的所有内容
2. 缩进代码块内的所有内容
3. 内联代码反引号内的**代码部分**（文件名、路径、命令、API 名、变量名）
4. Front matter 的 `parent`、`nav_order`、`permalink` 字段
5. HTML 标签（`<br>`、`<kbd>`、`<sup>`、`<sub>` 等）
6. VitePress 容器标记（`::: info`、`::: warning`、`::: details`）
7. 表格分隔行
8. 图片 Markdown 语法（含路径）
9. YAML 特殊字符在标题中的双引号包裹

---

## 8. 翻译质量要求

### 8.1 技术术语保留英文

twinBASIC, VBA, COM, ActiveX, API, IDE, CLI, YAML, JSON, HTML, CSS, JavaScript, TypeScript, Node.js, npm, pnpm, VitePress, Vue, Chromium, Puppeteer, PagedJS, PDF, SEO, SSE, HTTP, CI/CD, GitHub, Git 等。

### 8.2 专有名词保留英文

TWINPACK, TWINSERV, tbForm, tbReport, CefBrowser, WebView2, Monaco, CodeLens, Printers 等。

### 8.3 翻译风格

- 专业、简洁、准确
- 避免直译，符合中文技术文档习惯
- 英文专有名词与中文之间不需要空格（如"VitePress构建"而非"VitePress 构建"）

---

## 9. 执行流程

1. 将 `docs/en/official/` 全部文件（md + Images）复制到 `docs/zh/official/`
2. 对每个 md 文件执行翻译：
   a. 读取文件全文
   b. 修改 front matter 的 title（遵守 YAML 引用规则）
   c. 修改正文中的描述性文字（遵守代码块/反引号/HTML 保留规则）
   d. 替换链接前缀 `/en/official/` → `/official/`
   e. 写回文件
3. 全部翻译完成后运行 `pnpm build` 验证零错误零死链