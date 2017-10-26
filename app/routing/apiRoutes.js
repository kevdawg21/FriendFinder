var characters = require("../data/characters.js");

app.get("/api/characters", function(req, res) {
    res.json(characters);
});

app.post("/api/new", function(req, res) {
  var answers = req.body;

  subject.push(answers);

  res.json(characters);
});