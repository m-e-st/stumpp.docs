module.exports = {
	"title": "network specs",
	"version": "1.0.0",
	"date": "2023-04-01",
	
	"types": [
		{
			"id": "ITBF2",
			"type": "info",
			"name": "ITBF-2",
			"text": [
				"<b>Die Bestellung von ITBF-2 Ports erfolgt</b> weiterhin <b>über das <button><a href='https://serviceportal-shop.intranet.deutschebahn.com/is-bin/INTERSHOP.enfinity/WFS/Bahn-BahnShop-Site/de_DE/-/EUR/ViewCatalog-Start'>Serviceportal</a></button> der DB-Systel.</b> ITBF-2 Ports werden verwendet, wenn nur wenige Ports an einem Standort benötigt werden. Maximal können <b>vier</b> Geräte angeschlossen werden.",
				"Bestellen Sie einen ITBF-2 Port, wenn Sie <b>jetzt</b> nicht mehr als vier Geräte anschließen müssen. Eine spätere Umstellung auf ITBF-8 ist möglich, wenn der Portbedarf steigt."
			],
			"img": "about-94.png"
		}, {
			"id": "ITBF8",
			"type": "form",
		"name": "ITBF-8",
			"text": [
			],
			"color": "blue"
		}, {
			"id": "LTE",
			"type": "info",
			"name": "LTE-Box",
			"text": [
				"Die LTE-Box kann nicht mehr bestellt werden. Das Gerät hat das Ende seines Lebenszyklus erreicht. In Ausnahmesituationen besteht die Möglichkeit, eine gebrauchte LTE-Box bereitzustellen. Bitte setzen Sie sich mit dem GA-Team der Zentrale in Verbindung, um die Verfügbarkeit zu klären."
			],
			"img": "no-entry.png"
		}, {
			"id": "FUNK",
			"type": "info",
			"name": "Firewall",
			"text": [
				"Derzeit wird eine neue Funklösung auf Grundlage der sog. <b>2nd Generation Firewall</b> pilotiert. Falls die Pilotierung erfolgreich ist, wird diese Lösung demnächst bestellbar sein."
			],
			"img": "hourglass-64.png"
		}, {
			"id": "test",
			"type": "info",
			"name": "Debitoren",
			"text": [
				"Die Anbindung von Anlagen der Gebäudeautomation per WLAN ist derzeit nicht möglich. Es wird untersucht, ob eine solche Anbindung in Zukunft angeboten werden kann."
			],
			"img": "hourglass-64.png"
		}, {
			"id": "WLAN",
			"type": "info",
			"name": "WLAN",
			"text": [
				"Die Anbindung von Anlagen der Gebäudeautomation per WLAN ist derzeit nicht möglich. Es wird untersucht, ob eine solche Anbindung in Zukunft angeboten werden kann."
			],
			"img": "hourglass-64.png"
		}, {
			"id": "LORAWAN",
			"type": "info",
			"name": "LoraWAN",
			"text": [
				"Die Anbindung von Anlagen der Gebäudeautomation per LoraWAN ist derzeit nicht möglich. Es wird untersucht, ob eine solche Anbindung in Zukunft angeboten werden kann."
			],
			"img": "hourglass-64.png"
		}
	],

	"RBs": [
		{
			"code": "nord",
			"name": "RB Nord",
			"sid": 101,
			"server": "RB-Nord",
			"fqdn": "tim-dbsus-rbnord.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "100,1, 170,35, 155,87, 181,105, 165,119, 155,182, 126,190, 120,172, 109,128, 58,127, 37,143, 45,70, 95,59"
			},
			"color": "red"
		},{
			"code": "ost",
			"name": "RB Ost",
			"server": "RB-Ost-Südost",
			"sid": 100,
			"fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "158,84, 169,69, 165,54, 234,12, 274,56, 269,62, 291,173, 272,177, 262,190, 246,181, 244,162, 206,114"
			},
			"color": "orange"
		},{
			"code": "west",			
			"name": "RB West",
			"server": "RB-Nord",
			"sid": 101,
			"fqdn": "tim-dbsus-rbnord.ga.itbf.db.de",
			"text": [
					"Die Anlagen des RB West sind derzeit auf dem TIM-Server des RB Nord aufgeschaltet. " +
					"Sobald der TIM Server \"RB-West\" zur Verfügung steht, werden die Anlagen umgezogen."
					],
			"area": {
				"shape": "poly",
				"coords": "7,164, 60,137, 72,156, 88,144, 88,132, 105,135, 113,173, 89,193, 74,220, 63,213, 16,244, 2,220"
			},
			"color": "gray"
		},{
			"code": "SO",			
			"name": "RB Südost",
			"server": "RB-Ost-Südost",
			"sid": 100,
			"fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "138,192, 158,180, 171,130, 168,114, 187,105, 204,119, 216,152, 242,166, 244,195, 272,192, 295,178, 299,210, 215,252, 185,234, 155,242, 136,223, 144,200"
			},
			"color": "light-blue"
		},{
			"code": "mitte",			
			"name": "RB Mitte",
			"server": "RB-Mitte",
			"sid": 102,
			"fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "15,250, 63,220, 72,229, 115,180, 121,195, 132,192, 140,202, 132,226, 136,238, 97,261, 99,288, 81,287, 73,317, 15,302, 2,252"
			},
			"color": "blue"
		},{
			"code": "SW",			
			"name": "RB Südwest",
			"server": "RB-Süd-Südwest",
			"sid": 103,
			"fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "44,390, 61,332, 75,320, 87,301, 87,290, 95,298, 117,280, 138,296, 137,303, 150,323, 137,349, 136,383, 120,394, 94,386, 85,392"
			},
			"color": "green"
		},{
			"code": "sued",			
			"name": "RB Süd",
			"server": "RB-Süd-Südwest",
			"sid": 103,
			"fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de",
			"area": {
				"shape": "poly",
				"coords": "1044,285, 101,271, 143,237, 158,252, 199,245, 272,332, 232,365, 245,397, 213,388, 175,404, 154,396, 143,407, 123,399, 142,387, 139,353, 158,329, 142,303, 142,286, 120,273"
			},
			"color": "light-green"
		},{
			"code": "abnahme",
			"name": "Quarantäne",
			"sid": 200,
			"server": "Abnahme",
			"fqdn": "tim-dbsus-abnahme.ga.itbf.db.de",
			"text": [
					"Der Abnahme- und Quarantäneserver bedient alle Regionalbereiche."
					],
			"color": "yellow"
		},{
			"code": "test",
			"name": "Test",
			"sid": 300,
			"server": "Entwicklung",
			"fqdn": "tsyffmsvaglt300.ga.itbf.db.de",
			"text": [
					"Dieser Server ist nicht produktiv und dient zum Test von Softwareständen und zur Entwicklung von Konfigurationen."
					],
			"color": "pale-yellow"
		}			
	],

	"BMs": [
		{ "name": "Augsburg", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Bamberg", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Berlin Fernbahnhöfe", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Berlin Regionalbahnhöfe", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Bielefeld", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Braunschweig / Göttingen", "RB": "RB Nord", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Bremen / Osnabrück", "RB": "RB Nord", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Chemnitz", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Cottbus", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Darmstadt", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Dortmund", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Dresden", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Duisburg", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Düsseldorf", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Erfurt", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Essen", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Frankfurt a. M.", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Freiburg", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Friedrichshafen", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Gießen", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Hagen", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Halle (Saale)", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Hamburg", "RB": "RB Nord", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Hannover", "RB": "RB Nord", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Kaiserslautern", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Karlsruhe", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Kassel", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Koblenz", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Köln", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Leipzig", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Magdeburg", "RB": "RB Südost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Mainz", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Mannheim", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "München", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Münster (Westf)", "RB": "RB West", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Nürnberg", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Potsdam", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Regensburg", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Rosenheim", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Rostock", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Saarbrücken", "RB": "RB Mitte", "sid": "102", "fqdn": "tim-dbsus-rbmitte.ga.itbf.db.de" },
		{ "name": "Schleswig-Holstein", "RB": "RB Nord", "sid": "101", "fqdn": "tim-dbsus-rbnord.ga.itbf.db.de" },
		{ "name": "Schwerin", "RB": "RB Ost", "sid": "100", "fqdn": "tim-dbsus-rbostsuedost.ga.itbf.db.de" },
		{ "name": "Stuttgart", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Ulm", "RB": "RB Südwest", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" },
		{ "name": "Würzburg", "RB": "RB Süd", "sid": "103", "fqdn": "tim-dbsus-rbsuedsuedwest.ga.itbf.db.de" }
	],
	"result": 46
}
