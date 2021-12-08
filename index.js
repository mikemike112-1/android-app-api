const express = require('express');
//const mysql = require('mysql');
//const credentials = require("./dbCred");
var app = express();

const port = process.env.PORT || 8080 ;
/*
var con = mysql.createConnection({
    host: "androidclass.ctbicidjx9pg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "androidClass"
});
*/

app.get('/', function (req, res) {

    res.send("You have hit root. Use... /foodBanks /restaurants")
});



app.get('/foodBank', function (req, res) {

    res.json({
        'locationOne' : [{
            id: 1,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        }],
        'locationTwo' : [{
            id: 2,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        }]
    });

});

app.get('/restaurants', function (req, res) {

    res.json({
        'locationOne' : [{
            city: "Towson", 
            name: "Buddy's Treats",
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg"
        }],
        'locationTwo' : [{
            city: "Towson", 
            name: "Greene Turtle",
            picUrl: "https://utfb-images.untappd.com/logos/8a1da194036b4e880d49d8823a07226e52e20798.png?auto=compress"
        }]
    });

});

//var server = 
app.listen(port, function () {
    console.log('Server is running..');
});