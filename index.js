const express = require('express');
var app = express();

const port = process.env.PORT || 8080 ;

app.get('/', function (req, res) {
    res.send("You have hit root")
});

app.get('/pointOne', function (req, res) {

    res.json({
        person: "me", 

    });

});

var server = app.listen(port, function () {
    console.log('Server is running..');
});