var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));
app.use(express.static("app/public"));

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

var characters = [
	{
		name: "Picard",
		q1: 5,
		q2: 4,
		q3: 4,
		q4: 5,
		q5: 3,
		q6: 5,
		q7: 2,
		q8: 3,
		q9: 2,
		q10: 5
	},
	{
		name: "Riker",
		q1: 5,
		q2: 4,
		q3: 2,
		q4: 1,
		q5: 4,
		q6: 5,
		q7: 5,
		q8: 3,
		q9: 4,
		q10: 4
	},
	{
		name: "Data",
		q1: 2,
		q2: 3,
		q3: 1,
		q4: 5,
		q5: 5,
		q6: 1,
		q7: 4,
		q8: 5,
		q9: 1,
		q10: 5
	},
	{
		name: "Crusher",
		q1: 3,
		q2: 1,
		q3: 3,
		q4: 4,
		q5: 4,
		q6: 2,
		q7: 3,
		q8: 4,
		q9: 3,
		q10: 3
	},
	{
		name: "Troi",
		q1: 1,
		q2: 1,
		q3: 5,
		q4: 2,
		q5: 5,
		q6: 4,
		q7: 4,
		q8: 1,
		q9: 5,
		q10: 2
	},
	{
		name: "Geordi",
		q1: 3,
		q2: 2,
		q3: 3,
		q4: 2,
		q5: 2,
		q6: 1,
		q7: 5,
		q8: 5,
		q9: 3,
		q10: 2
	},
	{
		name: "Worf",
		q1: 5,
		q2: 5,
		q3: 1,
		q4: 1,
		q5: 1,
		q6: 2,
		q7: 1,
		q8: 3,
		q9: 1,
		q10: 3
	},
	{
		name: "Wesley",
		q1: 1,
		q2: 2,
		q3: 2,
		q4: 4,
		q5: 3,
		q6: 1,
		q7: 3,
		q8: 5,
		q9: 3,
		q10: 5
	}
];

var subject = [];

var scores = [];

function compareScores() {
	for (var i = 0; i < characters.length; i++) {
		console.log(characters[i].name, characters[i].q1);
		console.log("subject q1: " + subject.q1)
	}
}



app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var answers = req.body;

  subject.push(answers);

  // We then add the json the user sent to the character array
  //characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(subject);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});