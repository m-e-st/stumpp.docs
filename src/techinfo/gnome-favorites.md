---
title: Gnome Schnellstartleiste konfigurieren
description: Gnome Schnellstartleiste konfigurieren
color: red
date: '2022-04-04'
tags:
  - linux
  - gnome
---

Schnellstartleiste von Gnome unter Linux konfigurieren

Quelle [Linktext](URL)

## Shell script 
Stand 01.04.2022

    #!/bin/sh
    dconf write /org/gnome/shell/favorite-apps "['org.gnome.Nautilus.desktop', 'firefox.desktop', 'brave-browser.desktop', 'chromium_chromium.desktop', 'libreoffice-startcenter.desktop', 'me.mitya57.ReText.desktop', 'virtualbox.desktop', 'org.gnome.Terminal.desktop', 'geany.desktop', 'code_code.desktop', 'org.gnome.Calculator.desktop', 'irfanview_irfanview.desktop', 'org.gnome.Screenshot.desktop', 'Mouse-Reset.desktop', 'discord_discord.desktop', 'fluffychat_fluffychat.desktop', 'thunderbird.desktop']"
