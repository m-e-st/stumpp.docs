/***
 *	TIM-Dispatcher.js 
 *
 *	Copyright 2022 Michael Stumpp <mstumpp@hwn.de>
 * 
 * 08.08.2023 completly new - divided server status and intranet check
 * 15.08.2023 "static dir" insted of "res"
 */

/*** initialization on document ready ***/
/*
$(document).ready(function(){
  // jQuery initialization goes here...
}); 
*/


document.addEventListener("DOMContentLoaded", function(event) { 
  // DOM initialization goes here...
  checkIntranetAccess();
  // intervalTimer(true);  --> wird nur in "tim.njk" gestartet
});




/**	********************************************************************
 *	DB intranet check
 *	executed once on web page start
/**	********************************************************************
 * 
 *	Die folgenden Prüfdateien stehen zur Verfügung
 *	 - Host = 'tim.ga.itbf.db.de'
 *	 - File = 'tim.ga.itbf.db.de/static/timlogo.png'
 *	 - File = 'tim.ga.itbf.db.de/res/timlogo.png'	 // Übergangssweise ...
 *	 - File = 'localhost:8080/static/timlogo.png'	 // Entwicklungsumgebung
 *	 - File = 'localhost:8081/static/timlogo.png'	 // Entwicklungsumgebung
 */

let graceCounter = 0;

function checkIntranetAccess() {
	const fqdnTIM = 'tim.ga.itbf.db.de';
	if (window.location.hostname == fqdnTIM) { /* we are hosted inside DB */
		displayMain();
		return true;
	}
	graceCounter = 5;  /* graceCounter MUST match no of checkServer calls */
	checkServer(callbackIntranetAccess, fqdnTIM, "/static/timlogo.png"); /* ab 6.9.23 benötigt, bis dahin liefert die Abfrage 404 */
	checkServer(callbackIntranetAccess, fqdnTIM, "/res/timlogo.png"); /* bis 6.9.23 benötigt */
	checkServer(callbackIntranetAccess, "localhost:8080", "/static/timlogo.png");
	checkServer(callbackIntranetAccess, "localhost:8081", "/static/timlogo.png");
	checkServer(callbackIntranetAccess, "172.16.1.4", "/company.svg");
}

function callbackIntranetAccess(u,s) {
	const urlGoHome = 'https://www.deutschebahn.com/de/konzern/konzernprofil/Konzernunternehmen/db_station_service_ag-6879530';
	if (s) return; /* we have successfully found a valid item */
	if (--graceCounter <= 0) { window.location.replace(urlGoHome); }
	displayMain(graceCounter>0);
}

function displayMain(state=true) {
	const nodes = document.getElementsByTagName('main');	
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.display = (state) ? "block" : "none";
	}
}

/**	********************************************************************
 *	TIM server online check
 *	********************************************************************
 *
 **	intervalTimer
 * 
 *	Startet (true) und stoppt (false) den 60-Sekunden-Timer des ServerChecks
 */
const intervalTimer = (function serverTimer() {
    let timer1 = undefined;
    let timer2 = undefined;

    return function(state) {
		if(state) {
			checkServerStates(); /* run once immediatelly */
			setServerStates(); /* run once immediatelly */
			timer1 = setInterval (checkServerStates, 6000); 
			timer2 = setInterval (setServerStates, 6000); 
		} else {
			clearTimeout(timer1); 
			clearTimeout(timer2); 
		}
    }
}());

/**	checkServerStates
 * 
 *	Der Check läuft über alle DOM-Elemente mit der Klasse "tim-status"
 *	Jedes gefundene Element hat ein Attribute "data-fqdn" zu haben.
 *	Der mit der URL in "data-fqdn" referenzierte Server wird geprüft.
 *	Die eigentliche Prüfung findet in der Funktion "checkServer()" statt.
 *	Abhängig vom Prüfungsergebnis werden die Farbklassen vergebem
 */
function checkServerStates() {
	const nodes = document.getElementsByClassName('tim-status');
	for (let i = 0; i < nodes.length; i++) {
		let badge = nodes[i];
		let url = badge.attributes.getNamedItem('data-fqdn').value;
		checkServer(function(u,s) {
			badge.classList.remove('w3-yellow');
			badge.classList.remove('w3-green');
			badge.classList.remove('w3-red');
			if (s) badge.classList.add('w3-green');
			  else badge.classList.add('w3-red');
			}, url);
  		}	
}

/***
 * shows server status of all server elements using opacity
 * 
 */
 
function setServerStates() {
	let article, url;
	let nodes = document.getElementsByClassName("tim-server");
	for (let i = 0; i < nodes.length; i++) {
		let article = nodes[i];
		let url = article.attributes.getNamedItem("data-fqdn").value
		checkServer(function(u,s) {
			//~ console.log('state of ', u, ' is ', s);
			if (s) article.classList.remove("w3-opacity-max");
			  else article.classList.add("w3-opacity-max");
			}, url);
  		}
}

/***
 * toggle color of server indicators manually
 * 
 */
function toggleServerColor(key) {
	let classes = document.getElementById(key).classList;
	for (let k = 0; k < classes.length; k++) {
		if (classes[k] == 'w3-blue') { classes.replace("w3-blue", "w3-green");	break; }
		if (classes[k] == 'w3-green') { classes.replace("w3-green", "w3-red");	break; }
		if (classes[k] == 'w3-red') { classes.replace("w3-red", "w3-blue");		break; }
	}
}

/** checkServer
 *
 *	Prüft auf die Existenz der angegebenen Datei.
 *	Wird kein Dateipfad übergeben, wird auf das TIM-Refresh-Image geprüft
 *	Das Default-Image ist "/enteliweb/images/refresh.png"
 *
 *	Diese Funktion wird (mit anderem Bild) auch zur Intranet-Prüfung verwendet!
 */
function checkServer(callback, fqdn, imagepath="/enteliweb/images/refresh.png") {
    let img = new Image();
    let protocol = (fqdn.startsWith("localhost") || fqdn.startsWith("172.16.1.4")) ? "http://" : "https://";
    img.onload = function() { callback(fqdn, true); };
    img.onerror = function() { callback(fqdn, false); };
    img.src = protocol + fqdn + imagepath + '?r=' + Math.random(); /* avoid caching */
}

/***
 * displays modal element
 * 
 */
function openModal(modalName) {
	document.getElementById(modalName).style.display='block';
	if (modalName == 'offline') {
		checkOnlineBadges();
	}
}

function closeModal(modalName) {
	document.getElementById(modalName).style.display='none';
}

/** copyToClipboard
 *
 *	origin: https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
 *	
 */

async function copyToClipboard(textToCopy) {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
    } else {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
            
        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
	}
}

 
