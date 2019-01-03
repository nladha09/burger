var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

// serving static files in express
// app.use(express.static("public"));

app.use(express.static(process.cwd() + '/public'));


app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));

// set handlebars
app.set("view engine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
