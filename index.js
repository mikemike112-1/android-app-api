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


app.get('/restaurants', function (req, res) {


    res.json([
        {
            id: 1,
            name: "Please update",
            location: "Update", 
            distance: 5,
            picUrl: "https://i.ibb.co/LZLHXgV/buddyUwU.jpg",
            isAccepting: true
        },        
        {
            id: 2,
            name: "Buddy's Munchies",
            location: "Damascus", 
            distance: 25,
            picUrl: "https://ibb.co/DRxTHM0",
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
            name: "Chipotle",
            location: "Columbia", 
            distance: 30,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: true
        },
        {
            id: 5,
            name: "Applebee's",
            location: "Germantown", 
            distance: 50,
            picUrl: "https://media-cdn.tripadvisor.com/media/photo-p/1b/b7/a0/38/applebee-s-neighborhood.jpg",
            isAccepting: false
        },{
            id: 6,
            name: "Dunkin Donuts",
            location: "Towson", 
            distance: 3,
            picUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Dunkin%27_Donuts_logo.svg/1200px-Dunkin%27_Donuts_logo.svg.png",
            isAccepting: true
        },{
            id: 7,
            name: "Olive Garden",
            location: "Frederick", 
            distance: 40,
            picUrl: "https://media.olivegarden.com/en_us/images/marketing/italian-family-restaurant-olive-garden-g6-rdv.jpg",
            isAccepting: true
        },{
            id: 8,
            name: "BJ's",
            location: "Towson", 
            distance: 10,
            picUrl: "https://cloudfront.bjsrestaurants.com/img_5e4d91a1796f60.24461213_500_Daytona%20Beach_2019.jpg",
            isAccepting: false
        },{
            id: 9,
            name: "McDonald's",
            location: "Ellicott City", 
            distance: 20,
            picUrl: "https://pbs.twimg.com/profile_images/1461340048608145408/R5YTzeUS_400x400.png",
            isAccepting: true
        },{
            id: 10,
            name: "Longhorn",
            location: "Germantown", 
            distance: 50,
            picUrl: "https://i.ytimg.com/vi/8KwRTE91U9I/maxresdefault.jpg",
            isAccepting: true
        },{
            id: 11,
            name: "Smoothie King",
            location: "Ellicott City", 
            distance: 20,
            picUrl: "https://nachomamasmd.com/wp-content/uploads/2017/08/nacho-mamas-logo.png",
            isAccepting: false
        },{
            id: 12,
            name: "Outback",
            location: "Germantown", 
            distance: 40,
            picUrl: "https://images.otstatic.com/prod1/30089650/2/huge.jpg",
            isAccepting: true
        },
        ]);
});

app.get('/foodBanks', function (req, res) {

    res.json([
        {
            id: 1,
            name: "Please update",
            location: "Update", 
            distance: 5,
            picUrl: "https://i.ibb.co/LZLHXgV/buddyUwU.jpg",
            isAccepting: true
        },     
        {
            id: 2,
            name: "Anne Arundel County",
            location: "Anne Arundel", 
            distance: 20,
            picUrl: "https://aafoodbank.org/wp-content/uploads/sites/7/2021/10/aacfb-logo.jpeg",
            isAccepting: true
        },
        {
            id: 3,
            name: "Nourish Pierce County",
            location: "Pierce County", 
            distance: 10,
            picUrl: "https://nourishpc.org/wp-content/uploads/2020/06/cropped-Logo-Truck-scaled-e1591291401110.jpg",
            isAccepting: false
        },
        {
            id: 4,
            name: "Feeding America",
            location: "West Michigan", 
            distance: 300,
            picUrl: "https://www.fbcmich.org/wp-content/uploads/2020/03/Feeding-America-West-MI_food-bank.jpg",
            isAccepting: false
        },
        {
            id: 5,
            name: "United Food Bank",
            location: "Columbia", 
            distance: 30,
            picUrl: "https://www.unitedfoodbank.org/wp-content/uploads/2021/03/United-Food-Bank-2020-Logo-Full-Color-01.png",
            isAccepting: true
        },
        {
            id: 6,
            name: "Coastal Bend Food Bank",
            location: "Coastal Bend", 
            distance: 50,
            picUrl: "https://coastalbendfoodbank.org/wp-content/uploads/2017/03/header_logo.png",
            isAccepting: false
        },
        {
            id: 7,
            name: "Community Food Bank",
            location: "Citrus County", 
            distance: 20,
            picUrl: "https://communityfoodbankofcitruscounty.org/wp-content/uploads/2021/01/CFB_LogoWO_CC-01-Small.png",
            isAccepting: true
        },
        {
            id: 8,
            name: "Mobile Market",
            location: "Towson", 
            distance: 5,
            picUrl: "https://foodbanknwi.org/wp-content/uploads/sites/5/2016/03/Mobile-Market-2019-Website-Slider.png",
            isAccepting: true
        },
        {
            id: 9,
            name: "Valley Food Bank",
            location: "Baltimore County",
            distance: 10,
            picUrl: "https://valleyfoodbank.org/wp-content/uploads/sites/10/2020/05/VFB_Logo.png",
            isAccepting: true
        },
        {
            id: 10,
            name: "Buddy's Food Charity",
            location: "Damascus", 
            distance: 5,
            picUrl: "https://i.ibb.co/LZLHXgV/buddyUwU.jpg",
            isAccepting: false
        }
    ]);
});

//var server = 
app.listen(port, function () {
    console.log('Server is running..');
});
