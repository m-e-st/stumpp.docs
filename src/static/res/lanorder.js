/***
 *	systelliste.js 
 *
 */

const order_data = [
	[
		"Verkabelung",						/*	0:A 	""	*/
		"Steckerart",						/*	1:B 	""	*/
		"Standort",							/**	2:C		**/
		"PLZ",								/** 3:D		**/
		"Ort",								/**	4:E		**/
		"Straße",							/**	5:F		**/
		"Gerätetyp aus Liste",				/** 6:G		Auswahl aus Liste sonst GA-Gerät **/
		"Aufstellungsort Endgerät",			/**	7:H		**/
		"Raum ID transICT",					/*	8:I		*/
		"Übergabepunkt IP-Port",			/**	9:J		(Raum, Stockwerk etc.)	**/
		"DHCP Klasse",						/*	10:K	"manuell"	*/
		"verantwortlicher Bahnhofsmanager",	/*	11:L	""	*/
		"E-Mail Adresse",					/**	12:M		**/
		"Bahnstelle",						/** 13:N		**/
		"Rahmenkostenstelle",				/** 14:O		**/
		"Verrechnungsart",					/*	15:P	"monatlich"				*/
		"Kunde",							/*	16:Q	"DB Station&Service"	*/
		"MAC-Adresse Endgerät (MDHCP)",		/*	17:R	*/
		"NAC auf Switchport aktivieren",	/*	18:S	"nein"					*/
		"Standortklasse",					/*	19:T	*/
		"Supportlevel/ Leistungstyp",		/*	20:U	"Basic+ (24h)"			*/
		"Bandbreite Kbit/s",				/*	21:V	"10 KBit/s (S)"			*/
		"physikalischer DB Systel IP Port benötigt",	/* 22:W		"ja"		*/
		"Verrechnungsartikel",				/*	23:X	""	*/
		"Hostname",							/**	24:Y	"gltdev000-" + RIL100	**/
		"Domänenname",						/*	25:Z	"ga.itbf.db.de"			*/
		"VPN",								/*	26:AA	"ITBF2 o. ITBF8"		*/
		"QoS Klasse ITBF",					/*	27:AB	"Kein QoS (VLAN 500/501)"	*/
		"Subnetzbereich GLT Endgeräte",		/**	28:AC		**/
		"Subnetzmaske GLT Endgeräte",		/** 29:AD		**/
		"Subnetz",							/*	30:AE		*/
		"Subnetzmaske",						/*	31:AF		*/
		"Gebäude ID",						/*	32:AG		*/
		"Switch IDG", 						/**	33:AH	"DB S" wenn Feld leer ist */
		"Default Gateway",					/*	34:AI		*/
		"IP-Adresse",						/*	35:AJ		*/
		"Switchport" 						/**	36:AK	"DB S" wenn Feld leer ist */
	],	/* row 0 is our header */
	[
		"",									/*	0:A 	""		*/
		"",									/*	1:B 	""		*/
		"FEHLT: Standort",					/**	2:C		**/
		"FEHLT: PLZ",						/** 3:D		**/
		"FEHLT: Ort",						/**	4:E		**/
		"FEHLT: Straße",					/**	5:F		**/
		"GA Endgerät oder Uplink",			/** 6:G		Auswahl aus Liste sonst GA-Gerät **/
		"keine Angabe",						/**	7:H		Aufstellungsort Endgerät	**/
		"",									/*	8:I		""		*/
		"keine Angabe",						/**	9:J		Übergabepunkt IP-Port (Raum, Stockwerk etc.)	**/
		"manuell",							/*	10:K	"manuell"	*/
		"",									/*	11:L	""		*/
		"FEHLT: E-Mail",					/**	12:M		**/
		"FEHLT: Bahnstelle",				/** 13:N		**/
		"FEHLT: Kostenstelle",				/** 14:O		**/
		"monatlich",						/*	15:P	"monatlich"				*/
		"DB Station&Service",				/*	16:Q	"DB Station&Service"	*/
		"",									/*	17:R	""		*/
		"nein",								/*	18:S	"nein"					*/
		"",									/*	19:T	""		*/
		"Basic+ (24h)",						/*	20:U	"Basic+ (24h)"			*/
		"10 KBit/s (S)",					/*	21:V	"10 KBit/s (S)"			*/
		"ja",								/*	22:W		"ja"		*/
		"",									/*	23:X	""		*/
		"gltdev000-???",					/**	24:Y	"gltdev000-" + RIL100	**/
		"ga.itbf.db.de",					/*	25:Z	"ga.itbf.db.de"			*/
		"ITBF2 o. ITBF8",					/*	26:AA	"ITBF2 o. ITBF8"		*/
		"Kein QoS (VLAN 500/501)",			/*	27:AB	"Kein QoS (VLAN 500/501)"	*/
		"FEHLT: Subnetzbereich GLT",		/**	28:AC	Subnetzbereich GLT Endgeräte	**/
		"FEHLT: Subnetzmaske GLT",			/** 29:AD	Subnetzmaske GLT Endgeräte	**/
		"",									/*	30:AE	""		*/
		"",									/*	31:AF	""		*/
		"",									/*	32:AG	""		*/
		"DB S", 							/**	33:AH	"DB S" wenn Feld leer ist */
		"",									/*	34:AI	""		*/
		"",									/*	35:AJ	""		*/
		"DB S" 								/**	36:AK	"DB S" wenn Feld leer ist */	
	
	
	]	/* row 1 contains order payload	*/
];


function orderSet(
	bahnhof		= "Angabe fehlt",
	plz			= "Angabe fehlt";
	ort			= "Angabe fehlt",
	strasse		= "Angabe fehlt",
	endgeraet	= "GA Endgerät oder Uplink",
	standort = "keine Angabe",
	order_data[1][ 9] = "keine Angabe",
	order_data[1][12] = "Angabe fehlt",
	order_data[1][13] = "Angabe fehlt",
	order_data[1][14] = "Angabe fehlt",
	order_data[1][24] = "gltdev000-???"",
	order_data[1][28] = "I.SVT",
	order_data[1][29] = "I.SVT",
	order_data[1][33] = "DB S",
	switchport		= "DB S",
	
	) {
	const idx = 1;
	
	order_data[idx][ 2] = "Angabe fehlt";
	order_data[idx][ 3] = "Angabe fehlt";
	order_data[idx][ 4] = "Angabe fehlt";
	order_data[idx][ 5] = "Angabe fehlt";
	order_data[idx][ 6] = "GA Endgerät oder Uplink";
	order_data[idx][ 7] = "keine Angabe";
	order_data[idx][ 9] = "keine Angabe";
	order_data[idx][12] = "Angabe fehlt";
	order_data[idx][13] = "Angabe fehlt";
	order_data[idx][14] = "Angabe fehlt";
	order_data[idx][24] = "gltdev000-???"";
	order_data[idx][28] = "I.SVT";
	order_data[idx][29] = "I.SVT";
	order_data[idx][33] = "DB S";
	order_data[idx][36] = "DB S";
}



function download_csv(filename, data) {
     var csv = '';
     data.forEach(function(row) {
             csv += '"';
             csv += row.join('";"');
             csv += '"\n';
     });
     
     if (! filename.toLowerCase().endsWith('.csv')) filename.concat('.csv');

     console.log(csv);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     hiddenElement.download = filename;
     hiddenElement.click();
}
