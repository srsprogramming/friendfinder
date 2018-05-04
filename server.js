var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// setting up express app 
var app = express();
var PORT = 3000;

app.use(express.static('public'))

// handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/sur", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
