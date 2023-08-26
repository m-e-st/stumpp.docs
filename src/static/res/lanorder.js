/***
 *	lanorder.js
 * Erzeugt die Systel Bestell-"Tapete" 
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
		"verantwortlicher Bahnhofsmanager",	/**	11:L	Name des Bestellers	**/
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
		"VPN",								/*	26:AA	"ITBF8"	wg. Ardessangabe	*/
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
		"",									/*	0:A 	*/
		"",									/*	1:B 	*/
		"FEHLT: Bahnhof",					/**	2:C		bfnr + bfname		**/
		"FEHLT: PLZ",						/** 3:D		bfplz				**/
		"FEHLT: Ort",						/**	4:E		bfort				**/
		"FEHLT: Straße",					/**	5:F		bfstrasse			**/
		"GA Endgerät oder Uplink",			/*	6:G		"GA Endgerät oder Uplink	*/
		"keine Angabe",						/**	7:H		standort 					**/
		"",									/*	8:I		*/
		"keine Angabe",						/**	9:J		raum						**/
		"manuell",							/*	10:K	"manuell"					*/
		"",									/**	11:L	bestname					**/
		"FEHLT: E-Mail",					/**	12:M	bestmail			**/
		"FEHLT: Bahnstelle",				/** 13:N	bahnstelle			**/
		"FEHLT: Kostenstelle",				/** 14:O	kostenstelle		**/
		"monatlich",						/*	15:P	"monatlich"				*/
		"DB Station&Service",				/*	16:Q	"DB Station&Service"	*/
		"",									/*	17:R	*/
		"nein",								/*	18:S	"nein"					*/
		"",									/*	19:T	*/
		"Basic+ (24h)",						/*	20:U	"Basic+ (24h)"			*/
		"10 KBit/s (S)",					/*	21:V	"10 KBit/s (S)"			*/
		"ja",								/*	22:W	"ja"					*/
		"",									/*	23:X	*/
		"gltdev000-???",					/**	24:Y	"gltdev000-" + bf100		**/
		"ga.itbf.db.de",					/*	25:Z	"ga.itbf.db.de"				*/
		"ITBF8",							/*	26:AA	"ITBF8"	wg. Ardessangabe	*/
		"Kein QoS (VLAN 500/501)",			/*	27:AB	"Kein QoS (VLAN 500/501)"	*/
		"FEHLT: Subnetzbereich GLT",		/**	28:AC	iprange						**/
		"FEHLT: Subnetzmaske GLT",			/** 29:AD	subnetzmask					**/
		"",									/**	30:AE	subnetz						**/
		"",									/*	31:AF	*/
		"",									/*	32:AG	*/
		"DB S", 							/*	33:AH	"DB S"						*/
		"",									/*	34:AI								*/
		"",									/**	35:AJ	ipadresse					**/
		"DB S" 								/*	36:AK	"DB S"						*/	
	
	
	]	/* row 1 contains order payload	*/
];

function orderWriteText(text) {
	return download_text(autoFilename('LanOrder', '.txt'), text);
}

function orderWriteData(data) {
	orderSet(data);
	return download_csv(autoFilename('LanOrder', '.csv'), order_data);
}

function orderSet(data) {
	const idx = 1;
	
	if (data) {
		order_data[idx][ 2] = '('.concat(data.bfnr, ') ',data.bfname);
		order_data[idx][ 3] = data.bfplz ?? "Angabe fehlt";
		order_data[idx][ 4] = data.bfort ?? "Angabe fehlt";
		order_data[idx][ 5] = data.bfstrasse ?? "Angabe fehlt";
		order_data[idx][ 7] = data.standort;
		order_data[idx][ 9] = data.raum;
		order_data[idx][11] = data.bestname;
		order_data[idx][12] = data.bestmail ?? "Angabe fehlt";
		order_data[idx][13] = data.bahnstelle ?? "Angabe fehlt";
		order_data[idx][14] = data.kostenstelle ?? "Angabe fehlt";
		order_data[idx][24] = 'gltdev000-'.concat(data.bf100);
		order_data[idx][28] = data.iprange ?? "I.SVT";
		order_data[idx][29] = data.subnetzmask ?? "I.SVT";
		order_data[idx][30] = data.subnetz;
		order_data[idx][33] = data.idg ?? "DB S";
		order_data[idx][35] = data.ipadresse;
	} else  {
		order_data[idx][ 2] = "Angabe fehlt";
		order_data[idx][ 3] = "Angabe fehlt";
		order_data[idx][ 4] = "Angabe fehlt";
		order_data[idx][ 5] = "Angabe fehlt";
		order_data[idx][ 7] = "";		/* keine Angabe */
		order_data[idx][ 9] = "";		/* keine Angabe */
		order_data[idx][11] = "";		/* keine Angabe */
		order_data[idx][12] = "Angabe fehlt";
		order_data[idx][13] = "Angabe fehlt";
		order_data[idx][14] = "Angabe fehlt";
		order_data[idx][24] = "gltdev000-???";
		order_data[idx][28] = "I.SVT";
		order_data[idx][29] = "I.SVT";
		order_data[idx][30] = "";		/* keine Angabe */
		order_data[idx][33] = "DB S";
		order_data[idx][35] = "";		/* keine Angabe */
	}
}

function autoFilename(body="LanOrder", ext='') {
	let filebody = body.concat('-',new Date().toISOString().slice(0,16).replace(/[-:]/g,'').replace('T','-'));
	if (filebody.toLowerCase().endsWith(ext)) return filebody;
	return filebody.concat(ext);
	}


function download_text(filename, text) {
     console.log(text);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(text);
     hiddenElement.target = '_blank';
     hiddenElement.download = filename;
     hiddenElement.click();
     return filename;
}

function download_csv(filename, data) {
     var csv = '';
     data.forEach(function(row) {
             csv += '"';
             csv += row.join('";"');
             csv += '"\n';
     });
     
     console.log(csv);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     hiddenElement.download = filename;
     hiddenElement.click();
     return filename;
}
