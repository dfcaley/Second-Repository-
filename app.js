var express = require("express");
var app = express ();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello', function(request, response) {
    response.send("Hello!!");
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(8000, function() {
    console.log("Server started");
});