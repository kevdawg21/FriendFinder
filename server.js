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

var subject = [];

var scores = [];

function compareScores() {
	for (var i = 0; i < characters.length; i++) {
		console.log(characters[i].name, characters[i].q1);
		console.log("subject q1: " + subject.q1)
	}
}


require("/app/routing/apiRoutes.js")(app);
require("/app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});