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



app.get('/foodBanks', function (req, res) {

    res.json([
        {
            id: 1,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 2,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        }
        
    ]);

});

app.get('/restaurants', function (req, res) {

    res.json([
        {
            id: 1,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 2,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: false
        },
        {
            id: 3,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 4,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: false
        },
        {
            id: 5,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: false
        },
        {
            id: 6,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        },
        {
            id: 7,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 8,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        },
        {
            id: 9,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 10,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        }
    ]);
});

//var server = 
app.listen(port, function () {
    console.log('Server is running..');
});