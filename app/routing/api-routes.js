// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
var friendData = require('../data/friends.js');

// ROUTING

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // ---------------------------------------------------------------------------

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
        // Note the code here. Our "server" will respond to requests
        // It will do this by sending out the best matched friend from the friends object

        // array to store totalDifference of each character
        var diffArr = [];
        // get the current user from the request and store the values in userscore array 
        var currentUser = req.body;
        var userScore = currentUser.scores;

        // console.log(currentUser);
        // console.log(friendData);

        // Logic to compare the score of user to the score of each friend 
        for (var i = 0; i < friendData.length; i++) {
            var scoreArr = friendData[i].scores;
            console.log(friendData[i].name);
            var totalDifference = 0;
            // get totalDifferene for each friend
            for (var j = 0; j < scoreArr.length; j++) {
                var diff = Math.abs(parseInt(userScore[j]) - parseInt(scoreArr[j]));
                console.log(diff);
                totalDifference = totalDifference + diff;
            }
            console.log("----------------------------------------------");
            console.log("Difference Value " + totalDifference);
            console.log("----------------------------------------------");
            //populate diffArray
            diffArr.push(totalDifference);
        }
        // Call function to get the index of lowest value from the diffArr

        var lowestDiffIndex = indexOfSmallest(diffArr);

        console.log(lowestDiffIndex);

        // function return the index of lowest value
        function indexOfSmallest(a) {
            console.log("Inside indexoflowest :: " + a)
            var lowest = 0;
            for (var x = 1; x < a.length; x++) {
                if (a[x] < a[lowest]) {
                    lowest = x;
                }

            }
            console.log("Inside indexoflowest :: " + lowest);
            return lowest;
        }

        console.log("----------------------------------------------");
        console.log("Best Matched :: " + friendData[lowestDiffIndex].name);
        console.log("----------------------------------------------");

        // send the friend information at the lowest difference value as response
        res.json(friendData[lowestDiffIndex]); // KEY LINE

        friendData.push(req.body);

    });
};
