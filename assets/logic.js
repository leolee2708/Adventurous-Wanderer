$(document).ready (function() {
    // Global var
    // let url =  "https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00";
    // let apikey = "AIzaSyA_LwhQsJXpaTsL-C1ZQEYb93z7eP1Asog"
    // let cityName;
    // let queryURL = 
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response){
    //       console.log(response);
    //   }

    var unirest = require("unirest");

    var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");
    
    req.query({
        "location": "New York"
    });
    
    req.headers({
        "x-rapidapi-key": "fe2e4d049cmshb5133f4f7dbb862p1c13b1jsn15281d51fcfa",
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "useQueryString": true
    });
    
    
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
    
        console.log(res.body);
    });




























})