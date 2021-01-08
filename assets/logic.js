$(document).ready (function() {
    // Global var
      // let url =  "https://maps.googleapis.com/maps/api/js?";
      //  let apikey = "AIzaSyA_LwhQsJXpaTsL-C1ZQEYb93z7eP1Asog";
      // let cityName;
    //   let queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_LwhQsJXpaTsL-C1ZQEYb93z7eP1Asog&callback=initMap";
    //   // let map;
    // $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).then(function(response){
    //         console.log(response);
    //    });
    let map;
  function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 28.538336, lng: -81.379234 },
    zoom: 8,
  });
  }
  let queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=burgers%20NewSmyrnaBeach&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBpsko6mY2gC8yhiv3pQsX0X2axGTXKrE0"
// ajax request
  $.ajax({  url: 'https://api.allorigins.win/get?url=' + encodeURIComponent(queryURL),method: 'GET'}).then(function(data){console.log(data.contents)});
  initMap();

})

