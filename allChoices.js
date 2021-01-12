
var allDestinations = [


    //Beach starts

    {
        name: "Koloa, Hawaii",
        region: "beach",
        lat: "21.8733° N",
        long: "159.4542° W",
        cost: "rich",
        isCold: false,
        isHot: true,
        activities: ["mic", "hike", "bike", "swim"],
    },

    {
        name: "Salcombe, United Kingdom",
        region: "beach",
        lat: "50.2246° N",
        long: "3.7846° W",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["mic", "hike", "bike", "swim"],
    },
    {
        name: "Isla Harbour, Bahamas",
        region: "beach",
        lat: "25.5070° N",
        long: "76.6321 W",
        cost: "rich",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture"],

    },
    {
        name: "Bora-Bora, French Polynesia",
        region: "beach",
        lat: "16.5414 S",
        long: "151.7376 W",
        cost: "rich",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture"],

    },
    {
        name: "Rio de Janeiro, Brazil",
        region: "beach",
        lat: "22.9871 S",
        long: "43.2048 W",
        cost: "cheap",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture"],

    },
    {
        name: "Biarritz, France",
        region: "beach",
        lat: "43.4832 N",
        long: "1.5586 W",
        cost: "cheap",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture", "shopping"],

    },
    {
        name: "Queensland, Australia",
        region: "beach",
        lat: "16.7705 S",
        long: "145.6717 E",
        cost: "budget",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture"],

    },
    {
        name: "Anse Union, Seychelles",
        region: "beach",
        lat: "4.3715 S",
        long: "55.8272 E",
        cost: "budget",
        isCold: false,
        isHot: true,
        activities: ["mic", "hike", "bike", "swim", "culture"],

    },
    {
        name: "Saint-Tropez, France",
        region: "beach",
        lat: "43.2677 N",
        long: "6.6407 E",
        cost: "budget",
        isCold: false,
        isHot: true,
        activities: ["mic", "hike", "bike", "swim", "culture"],

    },

    //CITY starts
    {
        name: "Paris, France",
        region: "city",
        lat: "48.8566° N",
        long: "2.3522° E",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["shopping", "dance", "culture", "bike", "love"]
    },
    {
        name: "Rome, Italy",
        region: "city",
        lat: "41.9028° N",
        long: "12.4964° E",
        cost: "rich",
        isCold: true,
        isHot: true,
        activities: ["shopping", "culture", "bike", "love"]
    },
    {
        name: "London, UK",
        region: "city",
        lat: "51.5074° N",
        long: "0.1278° W",
        cost: "budget",
        isCold: true,
        isHot: false,
        activities: ["shopping", "dance", "culture", "bike", "love"]
    },
    {
        name: "New York City, New York",
        region: "city",
        lat: "40.7128° N",
        long: "74.0060° W",
        cost: "budget",
        isCold: true,
        isHot: true,
        activities: ["shopping", "dance", "mic", "bike"]
    },
    {
        name: "Bangkok, Thailand",
        region: "city",
        lat: "13.7563° N",
        long: "100.5018° E",
        cost: "cheap",
        isCold: false,
        isHot: true,
        activities: ["shopping", "dance", "culture", "bike"]
    },
    {

        name: "Mong Kok, Hong Kong",
        region: "city",
        lat: "22.3193° N",
        long: "114.1694° E",
        cost: "cheap",
        isCold: true,
        isHot: true,
        activities: ["shopping", "culture", "bike"]
    },

    {
        name: "Dubai, UAE",
        region: "city",
        lat: "25.2048° N",
        long: "55.2708° E",
        cost: "rich",
        isCold: true,
        isHot: true,
        activities: ["shopping", "dance", "bike", "love"]
    },
    {
        name: "Moscow, Russia",
        region: "city",
        lat: "55.7558° N",
        long: "37.6173° E",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["shopping", "dance", "culture", "bike"]
    },
    {
        name: "Torshavn, Faroe Islands",
        region: "city",
        lat: "62.0107° N",
        long: "6.7741° W",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["shopping", "dance", "culture", "hike", "bike", "love", "swim"]
    },
    {
        name: "Amsterdam, Netherlands",
        region: "city",
        lat: "52.3676° N",
        long: "4.9041° E",
        cost: "budget",
        isCold: true,
        isHot: true,
        activities: ["shopping", "dance", "culture", "bike",]
    },
    // countryside
    {
        name: "Stowe, Vermont",
        region: "Countryside",
        lat: "44.46",
        long: "72.68",
        cost: "budget",
        isCold: true,
        isHot: true,
        activities: ["hike", "bike",]
    },
    {
        name: "Isle of Mull, Scotland",
        region: "Countryside",
        lat: "56°37",
        long: "76°04",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["hike", "bike", "swim", "shopping"]
    },
    {
        name: "Bali, Indonesia",
        region: "Countryside",
        lat: "8.34",
        long: "115.09",
        cost: "rich",
        isCold: false,
        isHot: true,
        activities: ["hike", "bike", "swim", "culture"]
    },
    {
        name: "Carlingford, Ireland",
        region: "Countryside",
        lat: "54.04",
        long: "6.19",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["hike", "bike", "swim"]
    },
    {
        name: "Saratoga, Wyoming",
        region: "Countryside",
        lat: "41.45",
        long: "106.80",
        cost: "budget",
        isCold: true,
        isHot: true,
        activities: ["hike", "bike", "swim", "romance", "culture"]
    },
    {
        name: "Napa, California",
        region: "Countryside",
        lat: "38.29",
        long: "122.28",
        cost: "rich",
        isCold: true,
        isHot: true,
        activities: ["hike", "bike", "romance", "culture"]
    },
    {
        name: "Essex, United Kingdom",
        region: "Countryside",
        lat: "51.57",
        long: "0.48",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["bike", "romance", "culture"]
    },
    {
        name: "Cornwall, United Kingdom",
        region: "Countryside",
        lat: "50.26",
        long: "5.05",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["hike", "bike", "romance", "culture", "swim"]
    },
    {
        name: "Moselle Valley, Germany",
        region: "Countryside",
        lat: "50.40",
        long: "7.60",
        cost: "budget",
        isCold: true,
        isHot: false,
        activities: ["hike", "bike", "romance", "culture"]
    },
    {
        name: "Glasgow, Scotland",
        region: "Countryside",
        lat: "55.86",
        long: "4.25",
        cost: "rich",
        isCold: true,
        isHot: false,
        activities: ["shopping", "romance", "culture"]
    },
// mountain
{
    name : "",
    region : "mountain",
    lat : "47.0502° N",
    long : "8.3093° E",
    cost : "rich",
    isCold : true ,
    isHot : false,
    activities : ["Live Music","Hiking", "Biking", "Water Adventure"],
},
{
    name : "British Columbia, Canada" ,
    region : "mountain",
    lat : "50.1163° N",
    long : "122.9574° W",
    cost : "Budget",
    isCold : true,
    isHot : false,
    activities : ["shopping", "dancing"],
},
{
    name : "Torla-Ordesa, Spain" ,
    region : "mountain",
    lat : "42.6287° N",
    long : "122.9574° W",
    cost : "rich",
    isCold : true ,
    isHot : true ,
    activities : ["hiking", "biking", "dancing"],
},
{
    name : "Riobamba" ,
    region : "mountain",
    lat : "78.6589° W",
    long : "1.6650° S",
    cost : "cheap",
    isCold : true,
    isHot : true ,
    activities : ["biking","shopping"],
},
{
    name : "Hallstatt, Austria" ,
    region : "mountain",
    lat : "47.33° N",
    long : "13.38° E",
    cost : "rich",
    isCold : true,
    isHot :  false,
    activities : ["shopping", "hiking"],
},
{
    name : "San Pietro, Italy" ,
    region : "mountain",
    lat : "46.6406° N",
    long : "11.6849° E",
    cost : "rich",
    isCold : false,
    isHot :  true,
    activities : ["biking", "love","mic"],
},
{
    name : "Lake Placid, NY" ,
    region : "mountain",
    lat : "44.2795° N",
    long : "73.9799° W",
    cost : "budget",
    isCold : true,
    isHot :  false,
    activities : ["culture", "hiking"],
},
{
    name : "Gifu, Japan" ,
    region : "mountain",
    lat : "36.2710° N",
    long : "136.8986° E",
    cost : "budget",
    isCold : true,
    isHot :  false,
    activities : ["shopping", "culture"],
},
{
    name : "Olden, Norway" ,
    region : "mountain",
    lat : "61.8350° N",
    long : "6.8066° E",
    cost : "cheap",
    isCold : true,
    isHot :  true,
    activities : ["surf", "hiking", "biking"],
}

]
var userChoices =
 {

    "region" :  "",
    "cost" : "",
    "temp" : "",
    "activities" : "",

}
userChoices.region




