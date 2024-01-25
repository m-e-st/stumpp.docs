---
title: Markdown Syntax
description: kurze Syntaxbeschreibung Markdown
permalink: posts/{{ page.fileSlug | slug }}.html
date: 2022-10-06
tags:
- text
- www
---

Dies ist ein [Cheat Sheet]({{ page.filePathStem }}/../markdown-cheat-sheet.html) zum schnellen Nachschlagen der Markdown-Syntax.

Die Standard-Formatierung funktioniert immer:
- Überschriften: <kbd>## Überschrift Ebene 2</kbd>
- Fett: <kbd>&#x002a;&#x002a;bold text&#x002a;&#x002a;</kbd>
- Kursiv: <kbd>&#x002a;italicized text&#x002a;</kbd>
- Blockquote: <kbd>> blockquote</kbd>
- Code: <kbd>&#x0060;code&#x0060;</kbd>
- Nummerierte Liste: <kbd>1. First ordered item</kbd>
- Anstrich-Liste: <kbd>- First unordered item</kbd>
- Trennlinie: <kbd>---</kbd>
- Link: <kbd>&#x005b;title&#x005d;(https://www.example.com)</kbd>
- Bild: <kbd>!&#x005b;alt text&#x005d;(image.jpg)</kbd>

Folgende Erweiterungen funktionieren mit [eleventy][1]:
- Durchstreichen:  <kbd>&sim;&sim;strikethru&sim;&sim;</kbd>
- Tabellen: <kbd>|-----|</kbd>
- Codeblock: <kbd>&#x0060;&#x0060;&#x0060;</kbd>

Diese Erweiterungen funktionieren in [eleventy][1] **nicht**:
- Highlight: <kbd>==highlighted text==</kbd>
- Subscript: <kbd>H~2~O</kbd>
- Superscript: <kbd>X^2^</kbd>
- Emoji: <kbd>:joy:</kbd>
- Definitions: <kbd>: definition text</kbd>
- Task list:<kbd>- [x] task list checked</kbd>

[1]: <https://www.11ty.dev/docs/languages/markdown/> "Eleventy Markdown"
