/**
 * login.js - Login Seite für statische Seiten
 *
 * 11.08.2023 created 
 */

 
const user =(function () {
	
	function _search(username='') {
		let name = username.toLocaleLowerCase();
		let hash = ''
		for (let i = 0; i < user_data.length; i++)
			if (name.localeCompare(user_data[i].name) == 0) {
				hash = user_data[i].hash;
				break;
			}
		return hash;
	}
	
	function _stash(cmd, username='',password='') {
		const genAuth = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8"} );
		genAuth.update('Station&Service 2023');
		const _user_="user.name";
		const _hash_="user.hash";
		//~ console.log("store", cmd, username, password);
		switch(cmd) {
			case 'set':
				const found = _search(username);
				if (found) {
					const hashObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8"} );
					hashObj.update(password);
					if (found == (hashObj.getHash("B64"))) {
						sessionStorage.setItem(_hash_, genAuth.getHash('B64'));
						sessionStorage.setItem(_user_, username);
						return 'ok';
					}
				}
				return 'failure';
			case 'get':
				if (! sessionStorage.getItem(_hash_)) return '';
				if (sessionStorage.getItem(_hash_) != genAuth.getHash('B64')) return '';
				console.log("logon state successed");
				return sessionStorage.getItem(_user_);
			case 'del':
				sessionStorage.removeItem(_hash_);
				sessionStorage.removeItem(_user_);
				return '';
			}
		return 'error: ' + cmd;
	}
	
	return {
		logon: function(username, password) {
				_stash('set', username, password);
				console.log('logon', username, password);
			},
		logoff: function() {
				_stash('del');
				console.log("logoff", '|'+_stash("get")+'|');
			},
		name: function() {
				console.log("status", _stash("get"));
				return _stash("get");	
			},
		status: function() {
				console.log("status", _stash("get").length > 0);
				return (_stash("get").length > 0);
			}
    }
}());
 
 
