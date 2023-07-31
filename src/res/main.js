/***
 *	TIM-Dispatcher.js 
 *
 *	Copyright 2022 Michael Stumpp <mstumpp@hwn.de>
 *
 */

/*** initialization on document ready ***/
/*
$(document).ready(function(){
  // jQuery initialization goes here...
}); 
*/


document.addEventListener("DOMContentLoaded", function(event) { 
  // DOM initialization goes here...
  //~ if (checkIntranetAccess() == false) openModal('offline');
  
  //~ intervalTimer(true);
});

const intervalTimer = (function serverTimer() {
    let timer = undefined;

    return function (state) {
		console.info('interval state', state);
		if(state) {
			timer = setInterval (timerIntranetAccess, 6000); 
		} else {
			clearTimeout(timer); 
		}
    }
}());

/***
 * check whether running on tim environment
 * 
 */
const fqdnTim = 'tim.ga.itbf.db.de';

function checkIntranetAccessWithAnimation() {
	console.info('checkIntranetAccessWithAnimation');
	//~ intervalTimer(false);
	reset_animation('offlineLogo');
	let rc = checkIntranetAccess();
	return rc;
}

function reset_animation(elemId) {
  var el = document.getElementById(elemId);
  el.classList.remove('w3-spin');
  el.offsetHeight; /* trigger reflow */
  el.classList.add('w3-spin');
}
function checkIntranetAccess() {
	if (window.location.hostname == fqdnTim) return true; /* we are located inside DB */
	
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
	return checkOnlineBadges();
}

function timerIntranetAccess() {
	intervalTimer(false);
	document.getElementById("offline").style.display="none"; 
	if (window.location.hostname == fqdnTim) return true; /* we are located inside DB */
	if (checkOnlineBadges()) return true; /* has seen at least one server */
	intervalTimer(true);
	console.info('timerIntranetAccess', false);
	openModal('offline');
}
	

/***
 * check whether there is a green badge or a blue badge
 * 
 */
function checkOnlineBadges() {
	const nodes = document.getElementsByClassName('tim-status');
	let offlineCounter = nodes.length;
	for (let i = 0; i < nodes.length; i++) {
		let classes = nodes[i].classList;
		for (let k = 0; k < classes.length; k++) {
			if (classes[k] == 'w3-red') { offlineCounter--; break; }
		}
	}
	let img=document.getElementById("offlineLogo");
	if (offlineCounter < 1)
		 img.src = "res/img/offline.png";
	else img.src = "res/img/server.png";
	return (offlineCounter > 0);
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

/***
 * toggle color of server indicators
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

/***
 * shows server status of all server elements using opacity
 * 
 */
function setServerStatus() {
	console.info('setServerStatus');
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
 * check online status loading an image
 * 
 */
function checkServer(callback, fqdn, imagepath="/enteliweb/images/refresh.png") {
	console.info('checkServer');
    let img = new Image();
    img.onload = function() { callback(fqdn, true); };
    img.onerror = function() { callback(fqdn, false); };
    img.src = "https://" + fqdn + imagepath + '?r=' + Math.random(); /* avoid caching */
}


 
