---
title: Documentation Development
nav_order: 9
permalink: /Documentation/Development/
AIGC:
  ContentProducer: '001191110102MAD55U9H0F10002'
  ContentPropagator: '001191110102MAD55U9H0F10002'
  Label: '1'
  ProduceID: 'eddfae78-b2f3-4098-a6a4-75fc157a3336'
  PropagateID: 'eddfae78-b2f3-4098-a6a4-75fc157a3336'
  ReservedCode1: '6eb77f2c-0a24-4ce4-a787-32661f2beb28'
  ReservedCode2: '6eb77f2c-0a24-4ce4-a787-32661f2beb28'
---

# Documentation Development

This section covers everything related to the twinBASIC documentation: the URL contract the compiler and IDE rely on, the build / preview / deploy workflow for content contributors, every script and batch file in the repository, and the internals of the `tbdocs` static site generator that produces the site.

## Toolchain overview

Three commands handle the entire build-and-verify workflow. `build.bat` produces three output trees from the markdown source; `check.bat` validates link integrity on the two HTML trees; `book.bat` renders the PDF from the third.

![Toolchain overview](/assets/images/mmd/toolchain-overview.svg)

`build.bat` must run before either of the other two --- `check.bat` reads from `_site/` and `_site-offline/`, while `book.bat` reads from `_site-pdf/`. A clean `build.bat && check.bat` is the bar for "ready to commit".

## Build pipeline

A single `build.bat` run drives `tbdocs` through eight phases plus a Mermaid pre-phase.

![Build pipeline, eight phases plus the Mermaid pre-phase](/assets/images/mmd/build-phases.svg)

Phases 1--6 produce the online tree (`_site/`). Phase 7 mirrors it into a `file://`-browsable offline copy. Phase 8 assembles the sparse PDF source tree that `book.bat` later renders into the final PDF. The [Pipeline Stages](/official/Documentation/Pipeline-Stages) page documents every phase's interface contract; the [tbdocs Builder](/official/Documentation/Builder) page covers the design rationale.

## Sub-pages

- [Permanent Links](/official/Documentation/Permanent-Links) --- the stable `/tB/` URL contract under which the IDE help system, in-source `[Documentation(...)]` attribute links, and external references resolve.
- [Building and Deployment](/official/Documentation/Building) --- the day-to-day workflow for editing content: requirements, building, serving locally, link checking, Mermaid diagrams, screenshots, and the GitHub Pages deployment.
- [Tools and Scripts](/official/Documentation/Tools) --- one-line-per-tool reference for every script, batch file, and CLI flag exposed by the documentation toolchain (intended audience: doc contributors).
- [tbdocs Builder](/official/Documentation/Builder) --- detailed technical documentation for the `tbdocs` static site generator that lives under [`builder/`](https://github.com/twinbasic/documentation/tree/main/builder). Read this when modifying the build pipeline itself. Sub-pages:
    - [Pipeline Stages](/official/Documentation/Pipeline-Stages) --- per-stage interface reference: function signatures, reads/writes, and every exported symbol.
    - [Book Configuration](/official/Documentation/Book-Configuration) --- `_book.yml` key reference for the PDF chapter manifest.
    - [Extending the Builder](/official/Documentation/Extending) --- tutorial for adding a new pipeline stage or a markdown-it plugin.
- [PDF Generation](/official/Documentation/PDF-Generation) --- internals of the PDF renderer: `render-book.mjs`, paged.browser.js, and the pdf-lib shims.
- [Library Patches](/official/Documentation/Fixes) --- every modification to `paged.browser.js` and the `fast-*.mjs` pdf-lib shims: upstream problem, applied fix, and mechanism.

> AI生成