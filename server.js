var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
