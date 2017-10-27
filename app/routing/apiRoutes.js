var characters = require("../data/characters.js");

module.exports = function(app) {

  app.get("/api/characters", function(req, res) {
      console.log(characters);
      res.json(characters);
  });

  app.post("/api/new", function(req, res) {
    var answers = req.body;

    //subject.push(answers);

    compareScores(answers);

    res.json(leader);
  });

  var quiz = {
  1: "I'm good at giving orders",
  2: "I'm good in a fight",
  3: "I'm good at solving inter-personal problems",
  4: "I'm good at solving mysteries",
  5: "I'm good at giving advice",
  6: "I'm good at negotiation",
  7: "I'm good at making friends",
  8: "I'm good at solving technical problems",
  9: "I'm good at social functions",
  10: "I'm good at saving the day"
  };

  var order = ["Picard", "Riker", "Data", "Crusher", "Troi", "Geordi", "Worf", "Wesley"];

  var scores = [];
  var leader;

  function compareScores(answers) {
    var lowestScore = 50;
    for (var i = 0; i < characters.length; i++) {
      var q1Margin = Math.abs(characters[i].q1 - answers.q1);
      var q2Margin = Math.abs(characters[i].q2 - answers.q2);
      var q3Margin = Math.abs(characters[i].q3 - answers.q3);
      var q4Margin = Math.abs(characters[i].q4 - answers.q4);
      var q5Margin = Math.abs(characters[i].q5 - answers.q5);
      var q6Margin = Math.abs(characters[i].q6 - answers.q6);
      var q7Margin = Math.abs(characters[i].q7 - answers.q7);
      var q8Margin = Math.abs(characters[i].q8 - answers.q8);
      var q9Margin = Math.abs(characters[i].q9 - answers.q9);
      var q10Margin = Math.abs(characters[i].q10 - answers.q10);
      var total = q1Margin + q2Margin + q3Margin + q4Margin + q5Margin + q6Margin + q7Margin + q8Margin + q9Margin + q10Margin;
      console.log(characters[i].name + ": ", total);
      if (total < lowestScore) {
        lowestScore = total;
        leader = {
          name: characters[i].name,
          copy: characters[i].copy,
          pic: characters[i].pic
        };
      }
      if (i == 7) {
          console.log(leader);
        }
    }
  };

};
