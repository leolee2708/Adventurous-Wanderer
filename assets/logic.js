
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);


//   let beach = ["21.8733° N, 159.4542° W", "20.7370° N, 86.9688° W", "50.2246° N, 3.7846° W", "25.5070° N, 76.6321° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "16.7705° S, 145.6717° E", "43.4832° N, 1.5586° W", "4.3715° S, 55.8272° E", "43.2677° N, 6.6407° E"];
//    let mountain = ["50.1163° N, 122.9574° W", "47.0502° N, 8.3093° E", "39.1911° N, 106.8175° W", "42.6287° N, 0.1127° W", "1.6650° S, 78.6589° W", "47.5622° N, 13.6493° E", "46.6406° N, 11.6849° E", "44.2795° N, 73.9799° W", "36.2710° N, 136.8986° E", "61.8350° N, 6.8066° E"];
//   let city = ["48.8566° N, 2.3522° E", "41.9028° N, 12.4964° E", "51.5074° N, 0.1278° W", "40.7128° N, 74.0060° W", "13.7563° N, 100.5018° E", "22.3193° N, 114.1694° E", "25.2048° N, 55.2708° E", "1.3521° N, 103.8198°", "55.7558° N, 37.6173° E", "52.3676° N, 4.9041° E"];
//  let countyside = ["44.4654° N, 72.6874° W", "56.6228° N, 6.0723° W", "8.5069° S, 115.2625° E", "54.0469° N, 6.1902° W", "", "", "", "", "", ""];



// // var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// let lng;
// let lat;


// let beach = ["21.8733° N, 159.4542° W", "20.7370° N, 86.9688° W", "50.2246° N, 3.7846° W", "25.5070° N, 76.6321° W", "16.5414° S, 151.7376° W", "22.9871° S, 43.2048° W", "16.7705° S, 145.6717° E", "43.4832° N, 1.5586° W", "4.3715° S, 55.8272° E", "43.2677° N, 6.6407° E"];
// let mountain = ["50.1163° N, 122.9574° W", "47.0502° N, 8.3093° E", "39.1911° N, 106.8175° W", "42.6287° N, 0.1127° W", "1.6650° S, 78.6589° W", "47.5622° N, 13.6493° E", "46.6406° N, 11.6849° E", "44.2795° N, 73.9799° W", "36.2710° N, 136.8986° E", "61.8350° N, 6.8066° E"];
// let city = ["48.8566° N, 2.3522° E", "41.9028° N, 12.4964° E", "51.5074° N, 0.1278° W", "40.7128° N, 74.0060° W", "13.7563° N, 100.5018° E", "22.3193° N, 114.1694° E", "25.2048° N, 55.2708° E", "1.3521° N, 103.8198°", "55.7558° N, 37.6173° E", "52.3676° N, 4.9041° E"];
// let countyside = ["44.4654° N, 72.6874° W", "56.6228° N, 6.0723° W", "8.5069° S, 115.2625° E", "54.0469° N, 6.1902° W", "", "", "", "", "", ""];




// var userChoices = {

//   region: "",
//   cost: "",
//   temp: "",
//   activities: "",
// }




// var myRegion = null;
// function setRegion(region) {
//   //console.log("click")


//   myRegion = region;
//   console.log(region);
//   userChoices.region = allDestinations.filter(destination => {
//     destination.region === region;
//   });
//   console.log(userChoices);
// }
// var myBudget = null;
// function setCost(cost) {

//   myBudget = cost;
//   console.log(cost);

//   userChoices.cost = allDestinations.filter(destination => {
//     destination.cost === cost;
//   });
//   console.log(userChoices);
// }
// var myTemp = null;
// var tempHot;
// var tempCold;
// function setTemp(temp) {
//   console.log(temp);
//   // Need a condtional statement to transform our STRING into a BOOLEAN
//   if (temp === "hot") {
//     tempHot = true;
//     tempCold = false;
//   } else {
//     tempHot = false;
//     tempCold = true;
//   }
//   /*
//       if(isCold == "cold") {
//           tempCold = true;
//       } else {
//           tempCold = false;
//       }
//   */
//   console.log(tempHot, tempCold);
//   //    myTemp = isCold, isHot;
//   userChoices.temp = allDestinations.filter(destination => {
//     destination.isCold === tempCold;
//   });

//   userChoices.temp = allDestinations.filter(destination => {
//     destination.isHot === tempHot;
//   })

//   console.log(userChoices);
// }
// var myActivities = null;
// function setActivities(activities) {
//   console.log(activities)
//   myActivities = activities;
//   userChoices = allDestinations.filter(destination => {
//     destination.activities.includes(activities);
//   });
//   console.log(userChoices);

//   randomChoice();
// }

// function randomChoice() {
//   // userInterestedDestinations = [{}, {}, {}]
//   var numberOfRemainingDestinations = userChoices.length;
//   // randomize a number between 0 and numberOfRemainingDestinations
//   // idk the syntax and store it to a var randomIndex
//   var randomIndex = Math.floor(Math.random(0, numberOfRemainingDestinations));
//   console.log(randomIndex);
//   // grab the coordinates
//   var lat = userChoices[randomIndex].lat
//   var lng = userChoices[randomIndex].long
//   console.log(lat, lng);

//   // Call the MAP function and pass the (lat, lng) variables
// }

 console.log(allDestinations);
var userInterestedDestinations = [];

    var myRegion = null;
function setRegion(region) {
    //console.log("click")
    myRegion = region;
    console.log(region);
    userInterestedDestinations = allDestinations.filter(destination => {
        return destination.region === region;
    });
    console.log(userInterestedDestinations);
}
var myBudget = null;
function setCost(cost) {
   
    myBudget = cost;
    userInterestedDestinations = userInterestedDestinations.filter(destination => {
        return destination.cost === cost;
    });
    console.log(userInterestedDestinations);
}
var myTemp = null;
var tempHot;
var tempCold;
function setTemp(temp) {
    console.log(temp);
    // Need a condtional statement to transform our STRING into a BOOLEAN
    if(temp == "hot") {
        tempHot = true;
        tempCold = false;
    } else {
        tempHot = false;
        tempCold = true;
    }
/*
    if(isCold == "cold") {
        tempCold = true;
    } else {
        tempCold = false;
    }
*/
    console.log(tempHot, tempCold);
//    myTemp = isCold, isHot;
    userInterestedDestinations = userInterestedDestinations.filter(destination => {
        return destination.isCold === tempCold;
    });

    userInterestedDestinations = userInterestedDestinations.filter(destination => {
        return destination.isHot === tempHot;
    })

    console.log(userInterestedDestinations);
}
var myActivities = null;
function setActivities(activities) {
    console.log(activities)
    myActivities = activities;
    userInterestedDestinations = userInterestedDestinations.filter(destination => {
        return destination.activities.includes(activities);
    });
    console.log(userInterestedDestinations);

    randomChoice();
}

function randomChoice(userInterestedDestinations) {
    // userInterestedDestinations = [{}, {}, {}]
    var numberOfRemainingDestinations = userInterestedDestinations.length;
    // randomize a number between 0 and numberOfRemainingDestinations
    // idk the syntax and store it to a var randomIndex
    var randomIndex = Math.floor(Math.random(0, numberOfRemainingDestinations));
    console.log(randomIndex);
    // grab the coordinates
    lat = userInterestedDestinations[randomIndex].lat
    lng = userInterestedDestinations[randomIndex].long
    console.log(lat, lng)
}
//  function showPosition() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
        document.getElementById("result").innerHTML = positionInfo;
    });
} else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
}

// function to get current user location:
// var x = document.getElementById();
// function getCurrentLocation() {

//   if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

//   console.log(x);