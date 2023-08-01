

/** --- */

function _network_number(ipstring) {
	if (ipstring == "") return -1;
	const ip = ipstring.split('.');
	return Number(ip[3])+256*(Number(ip[2])+256*(Number(ip[1])+256*Number(ip[0])));
}
function _network_string(ipnumber) {
	return		(ipnumber >>> 24).toString()
		+ '.' +	((ipnumber >>> 16) & 255).toString()
		+ '.' +	((ipnumber >>> 8) & 255).toString()
		+ '.' +	(ipnumber & 255).toString()
}
function network_ipfirst(subnetz) {
	const item = subnetz.split('/');
	const cidr = Number(item[1]);
	return _network_string(_network_number(item[0]) + 1);
}
function network_iplast(subnetz) {
	const item = subnetz.split('/');
	const cidr = Number(item[1]);
	return _network_string(_network_number(item[0]) + 2**(32-Number(item[1]))-1);
}
function network_ipmask(subnetz) {
	const item = subnetz.split('/');
	return _network_string(~((1 << (32-Number(item[1]))) - 1));
}
function network_ipwidth(subnetz) {
	if (subnetz == "") return "";
	const item = subnetz.split('/');
	return 2**(32-Number(item[1]))-2;
}

/** --- */

let index_networks = [];
let index_numbers = [];
let index_names = [];

function itbf8_createIndices() {
	let i;
	let array_nets = [];
	let array_nos = [];
	let array_names = [];

	for (let i = 0; i < itbf8_data.length; i++) {
		array_nets.push  ({ value: itbf8_data[i].subnetz,  id: itbf8_data[i].id, index: i });
		array_nos.push   ({ value: itbf8_data[i].vst_nr,   id: itbf8_data[i].id, index: i });
		array_names.push ({ value: itbf8_data[i].vst_name, id: itbf8_data[i].id, index: i });
	}
	index_networks = array_nets.sort(function(a,b) { return a.id - b.id});
	index_numbers = array_nos.sort(function(a,b) { return a.value - b.value});
	index_names = array_names.sort(function(a,b) { return a.value.localeCompare(b.value)});
	//~ for (i = 0; i < 10; i++) {
		//~ console.log("index", i, index_networks[i], index_numbers[i], index_names[i]);
	//~ }
}


/** --- */

function itbf8_retrieve_network (command, pattern)	{ return _itbf8_retrieve(index_networks, command, pattern); }
function itbf8_retrieve_number (command, pattern)	{ return _itbf8_retrieve(index_numbers, command, pattern); }
function itbf8_retrieve_name (command, pattern)		{ return _itbf8_retrieve(index_names, command, pattern); }
	
function _itbf8_retrieve (indexarray, command, pattern) {
	
	let index = -1;
	switch (command) {
		case "|<":	index = indexarray[0].index;
					break;
		case ">|":	index = indexarray[indexarray.length-1].index;
					break;
		case "<<":	index = indexarray.findIndex(function(item) { return item.value == pattern; });
					if (--index < 0) index = 0;
					break;
		case ">>":	index = indexarray.findIndex(function(item) { return item.value == pattern; });
					if (++index >= indexarray.length) index = indexarray.length - 1;
					break;
		case "**":	index = indexarray.findIndex(function(item) { return item.value.localeCompare(pattern); });
					break;
		default:
			
	}
	console.log ("retrieve", indexarray[0].value, command, pattern,"index",index);

	if (index < 0) return undefined;
	if (index >= indexarray.length) return undefined;
	return itbf8_data[index];
}


/** --- */
