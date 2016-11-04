
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
			var diffArr = [];			
			// friendData.push(req.body);
			var currentUser = req.body;
			var userScore = currentUser.scores;			
			console.log(currentUser);
			console.log(friendData);
			// Logic to compare the datasubmitted by user to the data from friends data will go here
			// return the data match in response instead of true

			for (var i = 0; i < friendData.length ; i++) {				
				var scoreArr = friendData[i].scores;
				console.log(friendData[i].name);
				var totalDifference = 0;
				for(var j = 0 ; j < scoreArr.length; j++){
					var diff = Math.abs(parseInt(userScore[j]) - parseInt(scoreArr[j]));
					console.log(diff);	
					totalDifference = totalDifference + diff;					
				}
				console.log("----------------------------------------------");
				console.log("Difference Value " + totalDifference);
				console.log("----------------------------------------------");
				diffArr.push(totalDifference);
			}

			var lowestDiffIndex = indexOfSmallest(diffArr);

			console.log(lowestDiffIndex);

			function indexOfSmallest(a){
				console.log("Inside indexoflowest :: " + a)
				var lowest = 0;
				for (var x = 1; x < a.length; x++) {
				 if (a[x] < a[lowest])
				 {
				 	lowest = x;				 	
				}
				  
				}
				console.log("Inside indexoflowest :: " + lowest);
				return lowest;
			}

				console.log("----------------------------------------------");
				console.log("Best Matched :: " + friendData[lowestDiffIndex].name);
				console.log("----------------------------------------------");


			res.json(friendData[lowestDiffIndex]); // KEY LINE
		
	});
};