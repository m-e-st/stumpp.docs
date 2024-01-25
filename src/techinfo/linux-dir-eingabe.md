---
title: Eingabe von Sonderzeichen
description: Eingabe von Sonderzeichen´
date: '2021-12-19'
tags:
  - linux
---
Verschiedene Handreichungen zur Tastatur unter Linux.

### Zugang zu allen Unicode-Zeichen

Mancher mag vielleicht von Windows daran gewöhnt sein, Zeichen über den ASCII-Code mit `Alt Gr` einzugeben. In einer GTK+ basierten Anwendung kann man dies, indem man `Strg` + `⇧` + `U` drückt. Diese Tastenkombination für Unicode-Zeichen ist unter der ISO Norm ISO-14755 standardisiert.

Nach der Eingabe erscheint ein <u>u</u> für Unicode. Danach muss man die Tasten `Strg` + `⇧` + `U` loslassen, dann den Zeichencode eingeben und mit der Leertaste oder der Eingabetaste `⏎` abschließen. Der Zeichencode darf aber nicht wie in Windows der Dezimalwert sein, sondern es muss der Hexadezimalwert sein. Für Qt und KDElibs basierte Anwendungen wurde diese Norm noch nicht umgesetzt.

### Linux Tastaturbelegung ändern

| Variante        | Tottasten| Geeignet zum Tippen von... |
|-----------------|----------|----------------------------|
| Standard        | ^ ~ \` ´ |                            |
| `deadgraveacute`| \` ´     |                            |
| `deadacute`     | ´        |                            |
| `nodeadkeys`    | (keine)  |                            |


    sudo dpkg-reconfigure keyboard-configuration 

---

Quelle: <https://wiki.ubuntuusers.de/Sonderzeichen/>


