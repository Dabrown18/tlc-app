'use strict';

const config = require('config');
const crate = require('node-crate');

const host = config.get('db.host');
const port = config.get('db.port');

/*******************************
------------FOLLOWERS-----------
*******************************/

function getFollowers( userId ) {
	console.log("Connecting to crate")
	crate.connect(host, port);
	console.log("doing the sql query");
	return crate.execute("Select * from followers where user_id = ?", [userId])
		.then((res) => {
			console.log('Second Success', res.json, res.duration, res.rowcount, res.cols, res.rows);
			return res.json;
		});
}

/*******************************
------------FOLLOWING-----------
*******************************/

function getFollowing( userId ) {
	console.log('Connecting to Crate');
	crate.connect(host, port);
	console.log("doing the sql query");
	return crate.execute("Select * from followers where follower_id = ?", [userId])
		.then((res) => {
			console.log('Second Success', res.json);
			return res.json;
		});
}


module.exports = function() {
	return {
		getFollowers : getFollowers,
		getFollowing : getFollowing
	};
}