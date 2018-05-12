// Import friends
var friends = require('../data/friends.js');

// Export API routes
module.exports = function (app) {

  // list of friends

  app.get("/api/friends", function (req, res) {
    res.json(friends);

  });

  // Create New friend entry - takes in JSON input
  app.post("/api/friends", function (req, res) {

  

    // object to hold the best match for the user
    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // parse results of the user's survey

    var userInput = req.body;
    var userName = userInput.name;
    var userPhoto = userInput.photo;
    var userScores = userInput.score;

    var totalDifference = 0;

    // loop through all the scores. 
    for (var i = 0; i < friends.length; i++) {


      // Calculate the difference of your score and the friends' scores. 

      totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestFriend.friendDifference) {



          bestFriend.name = friends[i].name;
          bestFriend.photo = friends[i].photo;
          bestFriend.friendDifference = totalDifference;
        }
      }


    }


      console.log(userInput);

      friends.push(useInput);

      res.json(bestFriend);
    });
};
