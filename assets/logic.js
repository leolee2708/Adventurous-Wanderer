$(document).ready (function() {
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

