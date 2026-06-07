---
title: Library Patches
parent: Documentation Development
nav_order: 9
permalink: /Documentation/Development/Fixes
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'e533fa10-0051-4664-bddc-2ed97aff273e'
  PropagateID: 'e533fa10-0051-4664-bddc-2ed97aff273e'
  ReservedCode1: '85b84980-0458-4b64-a35c-c4163a2c316b'
  ReservedCode2: '85b84980-0458-4b64-a35c-c4163a2c316b'
---

# Library Patches

Several third-party libraries carry in-tree modifications. `book/lib/paged.browser.js` is a patched copy of paged.js v0.4.3 (MIT); the thirteen `fast-*.mjs` files there are side-effecting shims applied to pdf-lib's live exports before each PDF process phase; and `builder/scripts/patch-dagre.mjs` is a `postinstall` hook that rewrites mermaid's bundled dagre adapter to fix per-cluster layout. This section documents every change: what the upstream behaviour was, why it was unsuitable for the build pipeline, and what was changed.

## Sub-pages

- [Paged.js Patches](/en/official/Documentation/Fixes-PagedJS) --- changes to `book/lib/paged.browser.js`: the synchronous execution chain, hook dispatch fast-paths, DOM lookup optimizations, layout correctness fixes, and miscellaneous headless-specific changes.
- [pdf-lib Patches](/en/official/Documentation/Fixes-PDFLib) --- the thirteen `fast-*.mjs` shims and `parallel-deflate.mjs` that retune pdf-lib's parser, object model, and serializer for the process phase.
- [Mermaid Dagre Patches](/en/official/Documentation/Fixes-Dagre) --- five patches to `node_modules/mermaid/dist/chunks/mermaid.esm/dagre-ZXKKJJHT.mjs` that make `direction LR` subgraphs work correctly when they have cross-cluster edges or no internal edges at all.

> AI生成