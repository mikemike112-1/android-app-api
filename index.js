/*
const express = require('express');
//const mysql = require('mysql');
//const credentials = require("./dbCred");
var app = express();

const port = process.env.PORT || 8080 ;
*/

const express = require('express');
const mysql = require('mysql');
const credentials = require("./dbCred");
var app = express();

const port = process.env.PORT || 8080 ;

var con = mysql.createConnection({
    host: "androidclass.ctbicidjx9pg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "editables"
});

con.connect(function(err) {
    if(err) throw err;
});

//www.yoursite.com?myparam1={id1}&myparam2={id2} 
//http://localhost:8080/?myparam1={id1}&myparam2={id2}
//http://localhost:8080/?idP=v1&nameP=v2&locationP=v3&distanceP=v4&picURLP=v5&isAcceptingP=v6
app.get('/', function (req, res) {

    var idQ = req.query.idP;
    var nameQ = req.query.nameP;
    var locationQ = req.query.locationP;
    var distanceQ = req.query.distanceP;
    var picURLQ = req.query.picURLP;
    var isAcceptingQ = req.query.isAcceptingP;

    //url parameters format is...
    //?idP={idQ}

    console.log(req.query);
    console.log(req.query.myparam1); 

    //"INSERT INTO restaurants (id, name, location, distance, picURL, isAccepting) VALUES ('a', 'b', 'c', 'd', 'e', 'f')";
    //var restaurantQuery = "UPDATE restaurants SET id = 'idB', name = 'nameA', location = 'locationA', distance = 'distanceA', picURL = 'picURLA', isAccepting = 'isAcceptingA'";

    //STOPPED HERE 
    var restaurantQuery 
    = "UPDATE restaurants SET " 
    + "id = '" 
    + idQ 
    + "', name = '"
    + nameQ  
    + "', location = '"
    + locationQ
    + "', distance = '"
    + distanceQ
    + "', picURL = '" 
    + picURLQ
    + "', isAccepting = '"
    + isAcceptingQ
    + "'";

    con.query(restaurantQuery, function (err, result, fields){
            if(err) throw err;
            console.log(result);
            res.send("SUCCESS version 3");
            //res.send(result);
    });

});


app.get('/foodBanks', function (req, res) {


    res.json([
        {
            id: 1,
            name: "Please update",
            location: "Update", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },        
        {
            id: 2,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://ibb.co/DRxTHM0",
            isAccepting: true
        },
        {
            id: 3,
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
            name: "Please update",
            location: "Update", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },     
        {
            id: 2,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://i.ibb.co/LZLHXgV/buddyUwU.jpg",
            isAccepting: true
        },
        {
            id: 3,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: false
        },
        {
            id: 4,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 5,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: false
        },
        {
            id: 6,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: false
        },
        {
            id: 7,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        },
        {
            id: 8,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 9,
            name: "Nacho Mama's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        },
        {
            id: 10,
            name: "Buddy's Creations",
            location: "Towson", 
            distance: 5,
            picUrl: "https://dogtime.com/assets/uploads/gallery/jack-russel-terrier-dog-breed-pictures/2-face.jpg",
            isAccepting: true
        },
        {
            id: 11,
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
