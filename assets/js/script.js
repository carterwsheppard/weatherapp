//Declare variables to select the history area and weather container so that we can append things to those
var weatherContainer = document.querySelector("#weather-container");
var searchHistoryContainer = document.querySelector("#search-history");
var cityForm = document.querySelector("#city-form");

//Add a function for btnHandler
var btnHandler = function(event) {
    event.preventDefault();

console.log("function is listening!")

};


//Event Listener to btnClick 
cityForm.addEventListener("submit", btnHandler);