
var friendData 		= require('../data/friends');
var path 			= require('path');

// ROUTING

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

    app.post('/api/friends', function(req, res){

        var currentUserScores = req.body.scores.map(Number);        
        console.log(currentUserScores);
        var diffArray = [];

        for (var i = 0; i < friendData.length; i++) {
            var savedUserScores = friendData[i].scores.map(Number);

            totalDiff = 0;
            for (var x = 0; x < currentUserScores.length; x++) {
                let questDiff = Math.abs(savedUserScores[x] - currentUserScores[x]);
                totalDiff += questDiff;
            }
            diffArray.push(totalDiff);            
        }
        console.log(diffArray);

        var bestMatch = 40;
        var bestMatchPos = 0;
        for (let n = 0; n < diffArray.length; n++) {
            if (diffArray[n] < bestMatch) {
                bestMatch = diffArray[n];
                bestMatchPos = [n];
            }
        }
        console.log(bestMatch);
        console.log(bestMatchPos);
        console.log(friendData[bestMatchPos]);

        res.json(friendData[bestMatchPos]);

        friendData.push(req.body);
	});
}
