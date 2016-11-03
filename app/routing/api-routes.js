
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
var friendData = require('../data/friends.js');

// ROUTING

module.exports = function (app) {
	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function (req, res) {
		res.json(friendData);
	});

	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table	
			console.log(req.body);
			friendData.push(req.body);
			// Logic to compare the datasubmitted by user to the data from friends data will go here
			// return the data match in response instead of true
			res.json(true); // KEY LINE
		
	});
};