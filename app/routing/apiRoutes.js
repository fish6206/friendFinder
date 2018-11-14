//LOAD DATA 
//linking routes to data sources in friends.js

var friendsData = require("../data/friends");

//ROUTING

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    
//NEED TO WORK ON CODE BELOW
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    //THIS IS WHERE MATCHING LOGIC NEEDS TO GO
    app.post("/api/friends", function (req, res) {
        //req.body becomes userData from survey.html
        var userData = req.body;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //runs through all current friends in list
        for (var i = 0; i < friendsData.length; i++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < userData.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userData[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var bff = friendsData[bestMatch];
        res.json(bff);


        friendsData.push(userData);
        //matchedFriend becomes data on server.html
        res.json(matchedFriend);
    });



    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it! 
    //NEED TO UPDATE CODE
/*
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        tableData.length = [];
        waitListData.length = [];

        res.json({ ok: true });
    });
  */  
};