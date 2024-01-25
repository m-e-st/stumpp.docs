---
title: Verschlüsseln mit Javascript
description: Verschlüsseln mit Javascript - Snippet- und Link-Sammlung.
color: lime
date: '2022-10-05'
tags:
 - javascript
 - www
---

## SJCL - Stanford Javascript Crypto Library

Die SJCL-Bibliothek [sjcl.js](https://bitwiseshiftleft.github.io/sjcl/)
hat ein einfach funktionierendes encrypt/decrypt-Funktionspärchen.
Die komplette Bibliothek ist in einer JS-Datei enthalten.

- [Github](https://github.com/bitwiseshiftleft/sjcl/) repository
- Quelldatei [sjcl.min.js](https://bitwiseshiftleft.github.io/sjcl/sjcl.js)
- Detail[dokumentation](https://bitwiseshiftleft.github.io/sjcl/doc/)

### Nutzung

```javascript
const paraphrase = "Secret Passphrase";

function encrypt(cleartext) {
	var encrypted = sjcl.encrypt(paraphrase, cleartext); 
	var stringified = JSON.stringify(encrypted);
	return btoa(stringified);
}

function decrypt(keyedtext) {
	var unbased = atob(keyedtext);
	var encrypted = JSON.parse(unbased);
	return sjcl.decrypt(paraphrase, encrypted);
}
```

### Lizenz:
>SJCL is open. You can use, modify and redistribute it under a BSD license or under the GNU GPL, version 2.0 or higher.


## Alternativen

Eine Alternative ist die Bibliothek [aes-js](https://cdnjs.com/libraries/aes-js).

Möglicherweise identisch ist die Bibliothek [crypto-js](https://code.google.com/archive/p/crypto-js/)
bei Google. Zumindest die Versionsnummern `3.1.2` sind gleich.
