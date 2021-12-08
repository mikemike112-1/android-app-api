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

    /*con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO testTable (colOne) VALUES ('infoStudd')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
*/
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

//var server = 
app.listen(port, function () {
    console.log('Server is running..');
});