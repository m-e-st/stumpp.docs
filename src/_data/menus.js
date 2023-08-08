module.exports = {
	"title": "DB Menus",
	"version": "1.0.2",
	"date": "2023-07-31",
	
	"top": [
		{
			"hide": true, 
			"caption": "Info",
			"hint": "Informationen",
			"img": "home.svg",
			color: "gray",
			"text": [ "Derzeit liegen keine weiteren Informationen über die HTML-Tools von Station&Service vor." ],
			"url": "./index.html"
		}, {
			"caption": "TIM",
			"hint": "TIM Serverauswahl",
			"img": "regionalbereiche.png",
			color: "red",
			"text": [
				"Jeder Regionalbereich wird vom zugeordneten TIM-Servier bedient. Hinzu kommt der Quarantäne-Server für alle Regionen."
			],
			"url": "./tim-1.html"
		}, {
			"caption": "ITBF",
			"hint": "Datennetz der Gebäudeautomation",
			"img": "ethernet-port-53.png",
			color: "blue",
			"text": [
				"Informationen zum GA-Datennetz; Bestellungshilfe für GA-Netzwerk-Anschlüsse."
			],
			"url": "./network-0.html"
		}, {
			"caption": "Specials",
			"hint": "Spezielle Sonderlösungen",
			"img": "timlogo.png",
			color: "green",
			"text": [
				"Hier finden sich Sonderlösungen, welche nicht einem einzelnen Thema zugeordnet sind."
			],
			"url": "./specials-0.html"
		}, {
			"hide": true,
			"caption": "PoC",
			"hint": "Proof of Concept Pages",
			"img": "dragon.png",
			color: "black",
			"text": [
				"Hic sunt dracones."
			],
			"url": "./dragon-0.html"
		}, {
			"hide": true,
			"caption": "Über",
			"img": "about-94.png",
			color: "light-blue",
			"hint": "Über das Programm",
			text: [ "HTML Tool für DB Station&service AG" ],
			"url": "./"
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
	
	"network": [
		{
			"id"  : "itbf8",
			"name": "IP-Adressen",
			"tag" : "ITBF-8",
			"file": "lan-itbf8",
			"img" : "ethernet-port-53.png",
		},{
			"id"  : "order",
			"name": "Bestellung",
			"tag" : "LAN",
			"file": "lan-order",
			"img" : "ethernet-port-53.png",
		},{
			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			"tag":  "RSV",
			"text": [
				"Dieser Eintrag existiert noch gar nicht"
			],
			"img": "hourglass-64.png"
		}
	],
	
	"specials": [
		{
			"id"  : "ulmuhr",
			"name": "Ulmer Uhr",
			"tag" : "Uhr",
			"file": "uhr",
			"img" : "db-logo.svg"
		},{
			"id"  : "dragon",
			"name": "Drache #1",
			"tag" : "Drache",
			"file": "dragon",
			"img" : "db-logo.svg"
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
