$(document).ready (function() {
    // Global var
    let lng;
    let lat;
    let map;
  function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat, lng},
    zoom: 8,
  });
  }
  let queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=burgers%20NewSmyrnaBeach&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBpsko6mY2gC8yhiv3pQsX0X2axGTXKrE0"
// ajax request
  $.ajax({  url: 'https://api.allorigins.win/get?url=' + encodeURIComponent(queryURL),method: 'GET'}).then(function(data){console.log(data.contents)});
  initMap();

})


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
