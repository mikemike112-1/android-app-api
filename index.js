const express = require('express');
var app = express();

const port = process.env.PORT || 8080 ;

app.get('/', function (req, res) {
    res.send("You have hit root. Use /foodBank for more!")
});

app.get('/foodBank', function (req, res) {

    res.json({
        'locationOne' : [{
            city: "Towson", 
            name: "Nova's Creations"
        }],
        'locationTwo' : [{
            city: "Towson", 
            name: "Pumpkin's Creations"
        }]
    });

});

app.get('/restaurants', function (req, res) {

    res.json({
        'locationOne' : [{
            city: "Towson", 
            name: "Buddy's Treats"
        }],
        'locationTwo' : [{
            city: "Towson", 
            name: "Syd's Restaurant"
        }]
    });

});

var server = app.listen(port, function () {
    console.log('Server is running..');
});