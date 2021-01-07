$(document).ready(function () {
    // Global var
    let url =  "http://www.mapquestapi.com/geocoding/v1/reverse";
    let apikey = "6BECJhBC72w4mEBuvxsoGhC7r3fwaA09";
    let cityName;

    function randomCity() {

    let queryURL = url + apikey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
    }
})