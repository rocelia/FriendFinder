// Dependencies
var path = require('path');


module.exports = function (app) {
  //sends user to the survey page

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  // Basic route that sends the user to the Home Page

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });



};
