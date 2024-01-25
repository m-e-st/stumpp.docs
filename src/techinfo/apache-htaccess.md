---
title:  .htaccess
description: .htaccess-Datei für Apache
color: orange
date: '2022-10-05'
tags: 
 - apache
 - www
---

Wichtige Befehle für die `.htaccess` Datei eines Apache Web Servers.

## Lokale Sperre für Webverzeichnisse

Inhalt von .htaccess

	order deny,allow
	deny from all
	allow from 172.16.1

erlaubt den Zugriff nur aus dem lokalen Netzwerk.

## Password-Schutz

	# .htaccess-Datei für Passwortschutz
	AuthType Basic
	AuthName "Geschützter Bereich - Bitte geben Sie ein Passwort ein!"
	AuthUserFile /Individueller/Pfad/.htpasswd
	Require valid-user

`htpasswd -c -B .htusers username` für ersten Benutzer.<br>
`htpasswd -B .htusers username`für weitere Benutzer.

## Quellen

 - <https://wiki.selfhtml.org/wiki/Webserver/htaccess>
 - <https://wiki.selfhtml.org/wiki/Webserver/htaccess/Zugriffskontrolle>

