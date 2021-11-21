const express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("You have hit root")
});

app.get('/pointOne', function (req, res) {

    res.json({
        person: "me", 

    });

});

var server = app.listen(8080, function () {
    console.log('Server is running..');
});