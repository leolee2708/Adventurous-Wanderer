//jquery stepper

//4 variables for 4 different inputs 

var myRegion = null;


function setRegion(region){
    
    myRegion = region;
    console.log(myRegion);
}
function searchcheapBeach(){
let cheapBeach = beach.filter(function(e){
    return e.budget = "cheap";
});

}
console.log(cheapBeach);