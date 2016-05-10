var express = require("express");
var app = express ();
var bodyParser = require("body-parser");
var csv = require("ya-csv");


app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello', function(request, response) {
    response.send("Hello!!");
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post('/signup', function(request, response) {
    var identity = request.body.visitorName;
    var address = request.body.visitorEmail;


    var database = csv.createCsvFileWriter("customerDetails", {flags: "a"});
    var data = [identity, address];
    database.writeRecord(data);
    
    database.writeStream.end();
    
    response.send(identity);
});

app.listen(8000, function() {
    console.log("Server started");
});

