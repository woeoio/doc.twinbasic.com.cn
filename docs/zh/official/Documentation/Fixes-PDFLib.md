---
title: "pdf-lib 补丁"
parent: Library Patches
grand_parent: Documentation Development
nav_order: 2
permalink: /Documentation/Development/Fixes/PDFLib
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'db38515c-e411-4c9c-bd88-281f06474147'
  PropagateID: 'db38515c-e411-4c9c-bd88-281f06474147'
  ReservedCode1: '02507aa1-f24e-4c14-ac05-d906a2368863'
  ReservedCode2: '02507aa1-f24e-4c14-ac05-d906a2368863'
---

# pdf-lib 补丁

`book/lib/fast-*.mjs` 和 `book/lib/parallel-deflate.mjs` 下的文件是修补 pdf-lib 运行时导出的副作用 ES 模块。所有模块都在 `render-book.mjs` 顶部导入，在任何 pdf-lib 操作运行之前；它们相互兼容且幂等（每个模块通过修补原型或模块上的标志保护其安装）。它们共同将处理阶段 --- 解析 Chromium 的原始 PDF 输出、添加书签和元数据、序列化结果 --- 从约 40 秒减少到约 1.6 秒（1651 页书籍）。

所有这些补丁的根本原因相同：pdf-lib 设计用于浏览器和 Node 中的通用场景，并针对通用性而非单一大文档的吞吐量进行优化。

## fast-refs-class.mjs

**问题。** `PDFRef.of(objectNumber, generationNumber)` 是 PDF 中每个间接引用的工厂。原始工厂通过 `Object.create(PDFRef.prototype)` 后跟单独的属性写入来构建实例。V8 将以这种方式构建的对象视为通过中间隐藏类映射进行转换，每个写入产生一个过渡，产生的实例大约是通过 `new` 构建的实例大小的两倍。在书籍上测量：上游路径每个实例约 60 字节。有约 226,000 个唯一间接引用，即约 13.5 MB 的额外堆。此外，没有池：每次调用 `PDFRef.of(N, 0)` 即使对于之前见过的对象编号也会分配新实例。

**修复。** 两个构造函数：`_FastRef`（gen=0）和 `_FastRefGen`（gen≠0），两者的 `prototype` 都别名为 `PDFRef.prototype`。V8 从第一个实例为每个分配稳定的隐藏类。`_FastRef` 仅携带 `objectNumber`；`generationNumber` 作为原型数据属性默认值 `0` 提供，因此 gen=0 实例只需一个内联槽（每个实例约 16 字节，从约 60 字节降低）。gen=0 实例缓存在以 `objectNumber` 索引的密集 `pool0` Array 中；gen≠0 实例使用以 `"N M"` 字符串为键的 `Map`（极其罕见：仅 Chromium 发出的 PDF 中对象 0 处的空闲条目）。热原型方法 `toString`、`sizeInBytes` 和 `copyBytesInto` 被重写，将 `objectNumber` 和 `generationNumber` 作为普通数据属性读取，而非通过每个实例上存储的原始 `tag` 字符串。

## fast-inflate.mjs

**问题。** `PDFCrossRefStreamParser` 使用 `pako.inflate()` 解压 PDF 的交叉引用流，这是纯 JavaScript 的 zlib 实现。Node 提供了由原生 zlib C 库支持的 `zlib.inflateSync`，速度显著更快。交叉引用流在每个 `PDFDocument.load` 调用中精确解压一次，因此绝对墙钟时间的节省很小，但这是 `parallel-deflate.mjs` 接管 deflate 侧后最后一个对 pako 的调用，消除它使运行时 pako 调用计数归零。

**修复。** 修改运行时 `pako` 导出对象：用在不传选项时（pdf-lib 唯一的调用模式）委托给 `zlib.inflateSync` 的包装器替换 `pako.inflate`，对于传递选项的调用回退到原始 `pako.inflate`。PDF 的 `/FlateDecode` 编码（RFC 1950 zlib 帧）被两种实现接受，因此交换是字节兼容的。

**机制。** pdf-lib 在调用点惰性调用 `require("pako")` 而非在导入时捕获导出，因此修改模块导出对象上的运行时 `pako.inflate` 属性对调用点可见。

## fast-parse-number.mjs

**问题。** `BaseParser.parseRawNumber` 和 `BaseParser.parseRawInt` 通过一次一个字符追加到 JavaScript 字符串来构建数值（`value += charFromCode(byte)`），然后调用 `Number(value)` 将字符串转换回数字。PDF 中的每个数字 token --- 对象编号、生成编号、字节长度、坐标、字体大小、数组索引 --- 都流经这些路径之一。每次调用分配一个立即被丢弃的临时字符串。在书籍上这触发了数十万次。

**修复。** 直接整数累加器：`n = n * 10 + (byte - 0x30)`，每个字节消耗一次。`parseRawNumber` 另外用单独的累加器和 `scale` 除数处理小数部分。当整数部分超过 15 位（为病理输入保留 `Number.MAX_SAFE_INTEGER` 语义）或输入完全没有数字时，两种实现都回退到原始版本。

**机制。** `BaseParser` 未从 pdf-lib 的公共索引重新导出；它通过 `createRequire` 经 CJS 内部路径 `pdf-lib/cjs/core/parser/BaseParser.js` 导入。修改 `BaseParser.prototype` 影响所有子类：`PDFParser`、`PDFObjectParser`、`PDFObjectStreamParser` 和 `PDFXRefStreamParser`。

## fast-decode-name.mjs

**问题。** `PDFName.of(name)` 无条件地对每次调用调用 `decodeName(name)` --- 一个 `.replace(/#([\dABCDEF]{2})/g, ...)` 正则扫描 --- 以解码 `#XX` 十六进制转义序列。在书籍上，`PDFName.of` 被调用 2,759,635 次；恰好两个输入包含 `#`。正则扫描了 276 万个字符串只找到两个匹配，占处理阶段自耗时间约 168 ms（7%）。

**修复。** 一个以原始输入字符串为键的并行 `Map<string, PDFName>`。当输入不包含 `#`（通过 `indexOf` 检查）时，解码形式等于原始形式，因此映射键与 pdf-lib 内部池键匹配。缓存命中返回去重后的 `PDFName` 实例，无需正则工作。缓存未命中委托给原始 `PDFName.of`（运行一次正则，从 pdf-lib 自己的池返回规范实例）；结果然后存储在快速缓存中。包含 `#` 的输入完全绕过缓存，保留原始解码语义。

## fast-number-to-string.mjs

**问题。** `numberToString(num)` --- 由 `PDFNumber` 等用于将数字序列化为 PDF 语法 --- 总是调用 `num.toString()` 两次：一次获取 `numStr`，第二次在指数表示法检查内部（`num.toString().split('e-')` 等）。指数表示法的情况仅在 `|num| < 1e-6` 或 `|num| >= 1e21` 时出现，这在真实 PDF 中都不会出现。每次调用都支付第二次 `toString()`、`split` 和 `parseInt` 的成本来确认指数检查无关。

**修复。** 计算一次 `numStr = String(num)` 并检查 `numStr.indexOf('e') === -1`。常见情况下立即返回 `numStr`。仅在 `'e'` 存在时走原始逻辑。

**机制。** pdf-lib 针对 tslib 1.x 编译，其 `__exportStar` 在模块求值时按值复制导出值而非按引用。当 `PDFNumber.js` 的 `index_1.numberToString(value)` 执行时，`index_1` 持有对原始函数的捕获引用。仅修补源模块对调用点不可见。垫片修补三个位置：`pdf-lib/cjs/utils/numbers.js`（源）、`pdf-lib/cjs/utils/index.js`（`PDFNumber` 读取的桶文件）和 `pdf-lib/cjs/index.js`（顶层公共索引）。

## fast-size-in-bytes.mjs

**问题。** `utils.sizeInBytes(n)` 通过调用 `Math.ceil(n.toString(2).length / 8)` 计算 PDF 交叉引用流字段中编码整数所需的字节数 --- 转换为二进制字符串、测量其长度、然后除法。它在每个 xref 条目上被调用三次（来自 `PDFCrossRefStream.computeMaxEntryByteWidths`），每本书约 50,000 个条目，每次调用分配一个临时二进制字符串。

**修复。** 无分配的短路阶梯：

```js
if (n < 0x100)       return 1;
if (n < 0x10000)     return 2;
if (n < 0x1000000)   return 3;
if (n < 0x100000000) return 4;
return 4 + Math.ceil((32 - Math.clz32(Math.floor(n / 0x100000000))) / 8);
```

四字节情况覆盖所有 4 GB 以下的 PDF；回退处理更大的值而无需分配字符串。

**机制。** 与 `fast-number-to-string` 相同的 tslib 桶文件复制问题；在三个位置修补。

## fast-dict-onebuf.mjs

**问题。** 每个 `PDFDict` 实例在 `Map` 中保存其键值对。空 Map 承担约 200 字节的每实例开销，每个条目约 50 字节。在书籍上，`PDFDocument.load` 期间创建了约 260,000 个 `PDFDict` 实例。随着文档在解析期间增长，Map 反复将其内部哈希表存储空间翻倍并将每个之前的竞技场丢弃给 GC。

**修复。** 一个在文档生命周期内所有 `PDFDict` 实例共享的单个只追加 Array（`main`）。每个 `PDFDict` 携带一个编码整数（`d`），将 `start` 索引（23 位）和条目对 `length` 计数（16 位）打包到单个 JavaScript 数字中。`main[start..start+length]` 存放交替的键和值引用。添加新条目的修改在字典位于数组高水位标记时原地扩展其范围，否则首先将范围复制到尾部（写时复制）。`PDFCatalog`、`PDFPageTree` 和 `PDFPageLeaf` 共享相同的后备数组；`PDFPageLeaf` 的 `normalized` 和 `autoNormalizeCTM` 布尔值编码在 `d` 的两个备用位（第 23 和 24 位）中。`PDFObjectParser.parseDict` 使用每个解析器的临时数组作为递归帧栈，将每个完成的帧作为单个连续追加提交到 `main`。

`measure-pass.mjs` 的预遍计数原始 PDF 字节流中的总 `dictSlots`。在 `PDFDocument.load` 之前调用 `setExpectedDictSlots(n)` 通过 `main.length = n` 原地将 `main` 调整到精确所需的大小，消除解析期间的 V8 增长重新分配。使用原地调整大小而非替换模块级绑定；替换会使读取 `main` 的每个闭包中的 V8 内联缓存槽失效，导致解析时去优化峰值。

## fast-parse-object.mjs

**问题。** `PDFObjectParser.parseObject` 在读取当前 token 的第一个字节以按其类型分发之前，运行三个推测性 `matchKeyword` 调用 --- 检查 `true`、`false` 和 `null`。失败时的 `matchKeyword` 仍然消耗 `bytes.offset()` 读取、两次 `bytes.next()` 调用（前进和回退）以及一次比较。`true`/`false`/`null` 值在真实 PDF 中极其罕见；在书籍上，这三个调用在 `parseObject` 的几乎每次调用中都失败，而 `parseObject` 在每个 dict 值、数组元素和间接对象体上被调用一次。

**修复。** 先读取第一个字节，然后按字节值分发。数字、符号字符和句点进入 `parseNumberOrRef`；`<<` 进入 `parseDictOrStream`；`/` 进入 `parseName`；`[` 进入 `parseArray`；`(` 进入 `parseString`；单独的 `<` 进入 `parseHexString`。`true`/`false`/`null` 的 `matchKeyword` 调用仅在第一个字节分别为 `t`、`f` 或 `n` 时运行。未识别 token 的 `PDFObjectParsingError` 被保留。

## fast-parse-name.mjs

**问题。** `parseName` 从名称体的原始字节构建 JavaScript 字符串，通过 cons 链累加器一次一个字符，然后调用 `PDFName.of(string)` 获取规范实例。每次调用分配一个临时字符串（平均约 8 个字符），尽管 99.7% 的调用指向已在池中的名称（书籍上 4787 个唯一名称对 168 万次总调用）。

**修复。** `parseName` 前的字节哈希缓存。名称体字节被扫描以计算 Java 风格哈希（`hash = hash * 31 + byte`），同时推进字节游标 --- 此路径上不分配字符串。哈希在 `Map` 中查找；命中时，存储的 `Uint8Array` 键与当前缓冲区切片逐字节比较以确认相等（处理哈希冲突）。确认命中时，缓存的 `PDFName` 实例随即返回，零字符串分配。

未命中时，名称字符串通过一次 `String.fromCharCode.apply(null, slice)` 调用构建（而非逐字节 cons 链），并传递给 `PDFName.of`（此栈上是 `fast-decode-name` 的字符串键缓存）。结果 `PDFName` 实例然后作为新条目存储在字节哈希缓存中。

两个缓存收敛于每个逻辑名称的同一 `PDFName` 实例。来自非解析器代码的直接 `PDFName.of(string)` 调用（如 `setOutline`、`setMetadata`）绕过字节哈希缓存，直接通过 `fast-decode-name` --- 正确，因为那些调用点没有可哈希的字节范围。

## fast-sync-load.mjs

**问题。** pdf-lib 的解析器和写入方法从 TypeScript `async function` 编译为 tslib 的 `__awaiter` + `__generator` 状态机。在浏览器上，这些通过 `objectsPerTick` / `waitForTick()` 定期让出以保持页面响应。在 Node 中使用 `objectsPerTick: Infinity`（`parseSpeed: Fastest` 配置），让出门控从不触发 --- 整个生成器在一个 tick 中运行 --- 但每个间接对象（书籍上约 50,000 个）仍为单个 `case 0` 直通支付状态机分发开销。

**修复。** 八个方法被替换为普通同步等效方法。

加载侧：
- `PDFParser.parseDocument`、`parseDocumentSection`、`parseIndirectObjects`、`parseIndirectObject`
- `PDFObjectStreamParser.parseIntoContext`
- `PDFDocument.load`（静态工厂）

保存侧：
- `PDFWriter.serializeToBuffer`（保持 `async`，因为 `ParallelStreamWriter.computeBufferSize` 通过 `Promise.all` 在 libuv 上是真正异步的）
- `PDFWriter.computeBufferSize` 和 `PDFStreamWriter.computeBufferSize`

`PDFDocument.load` 返回普通 `PDFDocument` 值而非 Promise。现有调用点的 `await PDFDocument.load(...)` 仍然有效，因为对非 thenable 的 `await` 立即解析为该值。

`parseIndirectObjects` 中的额外优化：上游实现在每个间接对象之后调用 `skipJibberish()` 以从格式错误 PDF 中对象间的垃圾中恢复。`skipJibberish` 在下一个字节已经是数字（常见情况）时仍推测性尝试关键字匹配。同步重写短路此逻辑：当下一个字节是数字时，外部 `while` 循环直接继续；仅当字节不是数字时才调用 `skipJibberish`。

## fast-indirect-objects.mjs

**问题。** `PDFContext.indirectObjects` 是一个 `Map<PDFRef, PDFObject>`。在 `PDFDocument.load` 期间，每个间接对象的赋值调用 `indirectObjects.set(ref, object)`。Map 经过约 14 次翻倍步骤增长以容纳书籍的约 9,000 个间接对象，将每个中间后备竞技场丢弃给 GC。性能分析将约 14.5 MB 堆流量归因于这些 `Map.set` 调用。

**修复。** 每个 `PDFContext` 上的辅助密集数组 `_objArr`，以 `objectNumber` 索引 gen=0 引用（Chromium 发出的 PDF 上压倒性的常见情况）。gen≠0 引用使用原始 `indirectObjects` Map 作为回退。方法 `assign`、`lookup`、`lookupMaybe`、`delete`、`getObjectRef` 和 `enumerateIndirectObjects` 都先查询 `_objArr`。额外好处：`enumerateIndirectObjects` 不再需要对结果排序：密集数组迭代已经按 `objectNumber` 升序。

## fast-pdfnumber-pool.mjs

**问题。** `PDFNumber.of(value)` 在每次调用时分配新的 `PDFNumber` 实例。`PDFNumber` 构造函数还调用 `numberToString(value)` 计算 `stringValue` 字段，分配第二个对象。PDF 中密集包含重复的数值 --- 页面索引、`/MediaBox` 尺寸（612、792、595、842）、字体大小、位宽。在书籍上，约 15 MB 堆归因于对一小组唯一值的 `PDFNumber.of` 调用。

**修复。** 密集数组 `intPool` 以 `value` 索引 `[0, 16384)` 范围内的非负整数（远超书籍上所有观察到的整数值）。`Map` 回退覆盖浮点数、负数和超范围整数。`PDFNumber` 实例不可变（`numberValue` 和 `stringValue` 在构造函数中设置且永不改变），因此共享缓存实例是安全的。书籍上 `PDFNumber.of` 归因的堆从约 15 MB 降至约 0.8 MB。

## fast-array-onebuf.mjs

**问题。** 每个 `PDFArray` 实例在其构造函数中分配每实例的 `this.array = []`。在书籍上，这些每实例分配贡献了约 19 MB 堆。每个 `this.array` 是按需增长的短命数组，导致 V8 对小数组执行重复的后备存储重新分配。

**修复。** 与 `fast-dict-onebuf` 相同的单缓冲策略，应用于 `PDFArray`。一个所有 `PDFArray` 实例共享的单个只追加 Array（`arrayMain`）。每个 `PDFArray` 携带一个编码整数（`d`），打包 `start`（24 位）和 `length`（16 位）。`arrayMain[start..start+length]` 存放数组元素作为普通 JavaScript 引用 --- 无编码，读取时无解码步骤。`PDFObjectParser.parseArray` 使用每个解析器的 `_arrayTemp` 栈，将每个完成的帧作为一个连续追加提交到 `arrayMain`。修改遵循与 `fast-dict-onebuf` 相同的写时复制逻辑。

来自 `measure-pass.mjs` 的 `setExpectedArraySlots(n)` 在解析前原地调整 `arrayMain` 大小，原因与 `setExpectedDictSlots` 相同：原地调整大小保留 V8 内联缓存槽。

## parallel-deflate.mjs

**问题。** `PDFDocument.save({ useObjectStreams: true })` 同步驱动 `PDFStreamWriter.computeBufferSize`。该方法创建每个 `PDFObjectStream`，然后立即对其调用 `computeIndirectObjectSize`。`PDFObjectStream` 上的 `sizeInBytes()` 通过对流未编码内容运行 zlib deflate 惰性填充其内容缓存 --- 在 Node.js 主线程上同步执行。在书籍上（约 450 个对象流，每个分组 50 个对象），这些顺序 deflate 调用占保存阶段墙钟时间约 30%。

**修复。** `ParallelStreamWriter` 是 `PDFStreamWriter` 的子类，将缓冲区大小计算阶段分为三个阶段：

1. **分类** --- 与上游相同的分区逻辑：对象被分为未压缩（PDF 流、加密引用、gen≠0）和压缩块。
2. **并行 deflate** --- 所有 `PDFObjectStream` 实例预先创建，然后调用 `await Promise.all(streams.map(s => deflateAsync(s.getUnencodedContents())))`。每个 deflate 在 libuv 的线程池（默认 4 个线程）上运行。结果直接写入每个流的 `contentsCache.value`，以便后续大小阶段只找到缓存命中。
3. **大小与发出** --- 与上游相同；每个 `computeIndirectObjectSize` 调用都是缓存命中。

交叉引用流的内容取决于阶段 3 中固定的字节偏移，因此它通过 `deflateSync` 在这些偏移固定后立即同步 deflate。这是一个流；主线程开销可忽略。

`parallelSave(pdfDoc, opts)` 是公共入口点，替代 `pdfDoc.save({ useObjectStreams: true })`。生产配置使用 `{ objectsPerStream: 500 }` --- pdf-lib 默认值 50 的十倍。更大的对象流为 deflate 压缩器提供更宽的窗口以处理相似的重复字符串（PDF 名称、对象类型、坐标模式），产生的输出比默认分组小约 5%。

`UV_THREADPOOL_SIZE`（默认 4）限制 deflate 并发。在有超过四个 CPU 核心的机器上，在任何 libuv 工作触发之前设置 `process.env.UV_THREADPOOL_SIZE = '8'` 可以减少阶段 2 墙钟时间。

## 另见

- [Paged.js 补丁](/official/Documentation/Fixes-PagedJS) -- 对内置 paged.js 包的补丁。
- [PDF 生成](/official/Documentation/PDF-Generation) -- 这些垫片如何融入三阶段渲染管线和整体数据流。

> AI生成