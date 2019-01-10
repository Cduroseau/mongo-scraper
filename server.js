var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var expressHbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
  });
