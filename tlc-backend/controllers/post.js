'use strict';

const config = require('config');
const crate = require('node-crate');

const host = config.get('db.host');
const port = config.get('db.port');

/*******************************
----------KEYWORD SEARCH--------
*******************************/

function keyWordSearch(keyword) {
	console.log('Connecting to Crate');
	crate.connect(host, port);
	console.log("keyword passed in now is " + keyword);
	console.log('Starting SQL Query');
	return crate.execute("select * from post where match (details_index, ?) using phrase", [keyword])
		.then((res) => {
			console.log('keyword search Success', res.json);
			return res.json;
		});
}

module.exports = function() {
	return {
		keyWordSearch: keyWordSearch
	};
}