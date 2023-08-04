module.exports = {
	"title": "DB Menus",
	"version": "1.0.0",
	"date": "2023-07-31",
	
	"top": [
		{
			"hide": true, 
			"caption": "Info",
			"hint": "Informationen",
			"text": [ "Derzeit liegen keine weiteren Informationen über die HTML-Tools von Station&Service vor" ],
			"url": "./index.html"
		}, {
			"caption": "TIM",
			"hint": "TIM Serverauswahl",
			"img": "regionalbereiche.png",
			"text": [
				"Jeder Regionalbereich wird vom zugeordneten TIM-Servier bedient. Hinzu kommt der Quarantäne-Server für alle Regionen."
			],
			"url": "./tim.html"
		}, {
			"caption": "ITBF",
			"hint": "Datennetz der Gebäudeautomation",
			"img": "ethernet-port-53.png",
			"text": [
				"Informationen zum GA-Datennetz; Bestellungshilfe."
			],
			"url": "./network.html"
		}, {
			"caption": "Specials",
			"hint": "Spezielle Sonderlösungen",
			"img": "timlogo.png",
			"text": [
				"Hier finden sich Sonderlösungen, welche nicht einem einzelnen Thema zugeordnet sind."
			],
			"url": "./specials.html"
		}, {
			"hide": true,
			"caption": "leer",
			"hint": "Diese Karte ist nicht belegt",
			"url": "./"
		}
	],
	
	"tim": [
		{
			"id"  : "map",
			"name": "Karte",
			"hint": "Serverauswahl über Landkarte",
			"type": "html",
			"file": "servermap",
			"img" : "db-logo.svg"
		},{
			"id"  : "region",
			"name": "Region",
			"hint": "Serverauswahl über Regionalbereich",
			"type": "html",
			"file": "server-rb",
			"img" : "db-logo.svg"
		},{
			"id"  : "bm",
			"name": "BM",
			"hint": "Serverauswahl über Bahnhofsmanagement",
			"type": "html",
			"file": "server-bm",
			"img" : "db-logo.svg"
		},{
			"id"  : "country",
			"name": "Land",
			"hint": "Serverauswahl über Bundesland",
			"type": "html",
			"file": "serverland",
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
	
	"network": [
		{
			"id"  : "itbf8",
			"name": "IP-Adressen",
			"tag" : "ITBF-8",
			"type": "html",
			"file": "itbf8",
			"img" : "ethernet-port-53.png",
		},{
			"hide": true,
			"id"  : "order",
			"name": "Bestellung",
			"tag" : "LAN",
			"type": "info",
			"file": "orderlan",
			"img" : "ethernet-port-53.png",
		},{
			"hide": true,
			"id"  : "empty",
			"name": "Reserviert",
			"tag":  "RSV",
			"type": "info",
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
			"type": "html",
			"file": "uhr",
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
	
	"rsv": ""
}
