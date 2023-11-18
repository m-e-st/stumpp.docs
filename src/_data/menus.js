module.exports = {
	title:	"www.stumpp.name",
	version:"1.0.0",
	date:	"2023-08-27",

	top: [
		{
			hide_card:	true,
			caption: 	"Home",
			title: 		"Startseite",
			hint: 		"Übersicht über die Inhalte dieser Seite",
			icon: 		"home",
			color:		"gray",
			text: 		[ "Startseite von <b>www.stumpp.name</b>" ],
			url:		"/index.html"
		}, {
			hide:		true,
			caption: 	"Developer",
			title: 		"Informationen für Entwickler",
			hint: 		"Nachschlagewerke und Werkzeuge zur Software-Entwicklung",
			icon: 		"chef-hat",
			color:		"green",
			text: 		[ " " ],
			url:		"/index.html"
		}, {
			caption: 	"IT-Security",
			title: 		"Cyber Security Unterstützung",
			hint: 		"Wechsel zur Rezeptseite von Familie Stumpp",
			icon: 		"shield",
			color:		"deep-orange",
			text: 		[ " " ],
			url:		"/index.html"
		}, {
			caption: 	"Tools",
			title: 		"Werkzeug",
			hint: 		"Wechsel zur Rezeptseite von Familie Stumpp",
			icon: 		"hammer",
			color:		"yellow",
			text: 		[ " " ],
			url:		"/tools"
		}, {
			caption: 	"Infothek",
			title: 		"Bibliothek",
			hint: 		"Bibliothek aller verfügbaren Informationen auf dieser Seite",
			icon: 		"book-open",
			color:		"blue",
			text: 		[ " " ],
			url:		"/infothek"
		}, {
			caption: 	"Rezepte",
			title: 		"Rezeptseite Familie Stumpp",
			hint: 		"Wechsel zur Rezeptseite von Familie Stumpp",
			icon: 		"chef-hat",
			color:		"pale-blue",
			text: 		[ "Die Rezeptseite ist momentan noch auf einer separaten Seite untergebracht. "
						+ "Es ist vorgesehen, die Rezeptseite vollständig hier zu integrieren"
						],
			url:		"https://rezepte.stumpp.name"
		}, {
			caption: 	"Intern",
			title: 		"Interne Seiten",
			hint: 		"Der Zugriff auf die internen Seiten erfordert eine Autorisierung",
			icon: 		"book-lock",
			color:		"red",
			text: 		[ "Dies ist der private Bereich der Familie Stumpp. Die Inhalte sind nicht für die Öffentlichkeit bestimmt. " ],
			url:		"/internal"
		}, {
			caption: 	"Privat",
			title: 		"Private Seiten",
			hint: 		"Der Zugriff auf die internen Seiten erfordert eine Autorisierung",
			icon: 		"book-lock",
			color:		"blue",
			text: 		[ "Dies ist der private Bereich der Familie Stumpp. Die Inhalte sind nicht für die Öffentlichkeit bestimmt. " ],
			url:		"/private"
		}, {
			hide_menu:	true,
			caption: 	"Version",
			title:		"Release Notes",
			hint:		"Release Notes",
			icon: 		"sticky-note",
			color:		"light-blue",
			text: 		[ "Integrierte Webseite Michael Stumpp" ],
			bottom:		"Version 1",
			action:		"document.getElementById('release').style.display='block';"
		}
	],

	"tim": [
		{
			"id"  : "index",
			"name": "Server",
			"hint": "TIM Server",
			"file": "tim-index",
			"img" : "server.png"
		},{
			"id"  : "map",
			"name": "Karte",
			"hint": "Serverauswahl über Landkarte",
			"file": "tim-map",
			"img" : "regionalbereiche.png"
		},{
			"id"  : "region",
			"name": "Region",
			"hint": "Serverauswahl über Regionalbereich",
			"file": "tim-rb",
			"img" : "landscape.svg"
		},{
			"id"  : "bm",
			"name": "BM",
			"hint": "Serverauswahl über Bahnhofsmanagement",
			"file": "tim-bm",
			"img" : "location_city.svg"
		},{
			"id"  : "country",
			"name": "Land",
			"hint": "Serverauswahl über Bundesland",
			"file": "tim-land",
			"img" : "germany.png"
		},{
			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			"tag":  "RSV",
			"text": [
				"Dieser Eintrag existiert noch gar nicht"
			],
			"img" : "db-logo.svg"
		}
	],

	internal: [
		{
			"id"  : "overview",
			"name": "Übersicht",
			caption: "Funktionen",
			logon: true,
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "itbf8",
			"name": "Nummer 1",
			caption: "IP-Adressen ITBF-8",
			logon: true,
			"file": "lan-itbf8",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "order",
			"name": "Nummer 2",
			caption: "Bestellhilfe Netzwerk",
			logon: false,
			"file": "lan-order",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "project",
			"name": "GA-Projekt",
			caption: "Bestellhilfe Netzwerk für Projekte",
			logon: true,
			color:	"light-green",
			"file": "lan-projects",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "register",
			"name": "Registrierung",
			caption: "Registrierung für den geschützten Bereich",
			color: "teal",
			logon: false,
			"file": "register",
			"img" : "assistant_navigation.svg"
		}
	],

	"network": [
		{
			"id"  : "itbf8",
			"name": "IP-Adressen",
			caption: "IP-Adressen ITBF-8",
			logon: true,
			"file": "lan-itbf8",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "order",
			"name": "Bestellung",
			caption: "Bestellhilfe Netzwerk",
			logon: false,
			"file": "lan-order",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "project",
			"name": "GA-Projekt",
			caption: "Bestellhilfe Netzwerk für Projekte",
			logon: true,
			color:	"light-green",
			"file": "lan-projects",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "register",
			"name": "Registrierung",
			caption: "Registrierung für den geschützten Bereich",
			color: "teal",
			logon: false,
			"file": "register",
			"img" : "assistant_navigation.svg"
		},{

			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			caption: "Rserviert für zukünftige Zwecke.",
			"text": [
				"Dieser Eintrag existiert noch gar nicht"
			],
			"img": "hourglass-64.png"
		}
	],

	"specials": [
		{
			"hide": true,
			"id"  : "register",
			"name": "Registrierung",
			"tag" : "signin",
			"file": "register",
			"img" : "db-logo.svg"
		},{
			"id"  : "ulmuhr",
			"name": "Ulmer Uhr",
			"tag" : "Uhr",
			"file": "uhr",
			"img" : "db-logo.svg"
		},{
			"env" : true,
			"id"  : "sandbox",
			"name": "Buddelkiste",
			"tag" : "sandbox",
			"file": "sandbox",
			"img" : "dragon.png"
		},{
			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			"tag":  "RSV",
			"type": "info",
			"text": [
				"Dieser Eintrag existiert noch gar nicht"
			],
			"img" : "db-logo.svg"
		}
	],

	"dragon": [
		{
			"id"  : "dragon 1",
			"name": "1. Drache",
			"tag" : "dragon #1",
			"img" : "dragon.png"
		},{
			"id"  : "dragon 2",
			"name": "2. Drache",
			"tag" : "dragon #2",
			"img" : "dragon.png"
		},{
			"id"  : "dragon 3",
			"name": "3. Drache",
			"tag" : "dragon #3",
			"file": "dragon",
			"img" : "dragon.png"
		},{
			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			"tag":  "RSV",
			"text": [
				"Dieser Eintrag existiert noch gar nicht"
			],
			"img" : "db-logo.svg"
		}
	]
}
