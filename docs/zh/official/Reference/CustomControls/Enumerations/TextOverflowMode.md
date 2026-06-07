---
title: TextOverflowMode
parent: Enumerations
permalink: /tB/Packages/CustomControls/Enumerations/TextOverflowMode
---
# TextOverflowMode
Controls how text that does not fit inside the available rectangle is truncated. Used by [**TextRendering.OverflowMode**](/official/Reference/CustomControls/Styles/TextRendering#overflowmode).

| Constant | Value | Description |
|----------|-------|-------------|
| **tbAllowPartialChars** | 0 | Truncate at the available width, allowing the final glyph to be clipped mid-character. |
| **tbDisallowPartialChars** | 1 | Truncate at the last fully-visible character; no half-glyph at the edge. Used by [**WaynesTextBox**](/official/Reference/CustomControls/WaynesTextBox/) so the caret never falls between glyphs of a surrogate pair. |
| **tbAppendEllipsis** | 2 | Truncate at the last fully-visible character and append `…` if any characters were dropped. The default for newly-constructed [**TextRendering**](/official/Reference/CustomControls/Styles/TextRendering) objects. |
| **tbShrinkToFit** | 3 | Reduce the rendered font size until the entire string fits without truncation. Used by [**WaynesTimer**](/official/Reference/CustomControls/WaynesTimer) so its design-time clock glyph scales with the control. |
