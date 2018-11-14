// ===============================================================================
// DATA
// Below data will hold all of the friend info.
// Initially set it equal to a "dummy" friend (could use empty array)
// ===============================================================================

//make sure name, photo and scores should be in quotes.  They aren't in Hot-Resaurant activity
var tableArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;
  