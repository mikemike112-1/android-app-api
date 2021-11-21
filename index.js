const express = require('express');
var app = express();

const port = process.env.PORT || 8080 ;

app.get('/', function (req, res) {
    res.send("You have hit root. Use /currentLocation for more!")
});

app.get('/currentLocation', function (req, res) {

    res.json({
        city: "Towson", 
        name: "Buddy's Treats"

    });

});

var server = app.listen(port, function () {
    console.log('Server is running..');
});