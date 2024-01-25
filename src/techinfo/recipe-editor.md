---
title: Rezept-Editor
description: Editor zur Bearbeitung der Rezepte von 'my-online-cookbook'
date: 2021-11-02
tags:
- project
- www
- local
eleventyExcludeFromCollections: true

---
## Ziel

Ein Editor zum Eingeben und Bearbeiten von Rezepten für my-online-cookbook.
Insbesonders soll das MD/YAML-Mischformat richtig eingelesen und geschrieben werden können.

## User-Stories

- Die Oberfläche ist mit Angular geschrieben und funktioniert soweit auch. Allerdings gibt es aus der Web-Anwendung heraus keine direkte Möglichkeit, Dateien zu schreiben. Lesen ließe sich über den Upload-Button realisieren
- Lösungsmöglichkeiten:
    - Einlesen über den Upload-Button; Schreiben außerhalb des Programms über Copy&Paste-Funktion.
    - Einlesen und Schreiben per http-Request über ein Backend
    - Re-Implementierumg des Editors als Server-System mit php
