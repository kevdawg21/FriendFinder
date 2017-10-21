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
		1: 5,
		2: 4,
		3: 4,
		4: 5,
		5: 3,
		6: 5,
		7: 2,
		8: 3,
		9: 2,
		10: 5
	},
	{
		name: "Riker",
		1: 5,
		2: 4,
		3: 2,
		4: 1,
		5: 4,
		6: 5,
		7: 5,
		8: 3,
		9: 4,
		10: 4
	},
	{
		name: "Data",
		1: 2,
		2: 3,
		3: 1,
		4: 5,
		5: 5,
		6: 1,
		7: 4,
		8: 5,
		9: 1,
		10: 5
	},
	{
		name: "Crusher",
		1: 3,
		2: 1,
		3: 3,
		4: 4,
		5: 4,
		6: 2,
		7: 3,
		8: 4,
		9: 3,
		10: 3
	},
	{
		name: "Troi",
		1: 1,
		2: 1,
		3: 5,
		4: 2,
		5: 5,
		6: 4,
		7: 4,
		8: 1,
		9: 5,
		10: 2
	},
	{
		name: "Geordi",
		1: 3,
		2: 2,
		3: 3,
		4: 2,
		5: 2,
		6: 1,
		7: 5,
		8: 5,
		9: 3,
		10: 2
	},
	{
		name: "Worf",
		1: 5,
		2: 5,
		3: 1,
		4: 1,
		5: 1,
		6: 2,
		7: 1,
		8: 3,
		9: 1,
		10: 3
	},
	{
		name: "Wesley",
		1: 1,
		2: 2,
		3: 2,
		4: 4,
		5: 3,
		6: 1,
		7: 3,
		8: 5,
		9: 3,
		10: 5
	}
]



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

  console.log(answers);

  // We then add the json the user sent to the character array
  //characters.push(newcharacter);

  // We then display the JSON to the users
  //res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});