//Declare variables to select the history area and weather container so that we can append things to those
var weatherContainer = document.querySelector("#weather-container");
var searchHistoryContainer = document.querySelector("#search-history");
var cityForm = document.querySelector("#city-form");
var cityFormInput = document.querySelector("#city")

//Add a function for btnHandler
var btnHandler = function(event) {
    event.preventDefault();

    //define location variable
    var location = cityFormInput.value.trim().toLowerCase();

    if (location) {
        getLocationWeather(location);
    
        // clear old content
        cityFormInput.textContent = "";
        cityFormInput.value = "";
      } else {
        alert("Please enter a GitHub username");
      }

};

var getLocationWeather = function(location) {
     var apiUrl =  'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=f4d9020b0d30765266d6150cdd94784b'
    
    // make a get request to url
  fetch(apiUrl)
  .then(function(response) {
    // request was successful
    if (response.ok) {
      
      response.json().then(function(data) {
        console.log(data);

        //weather section
        var createP = document.createElement("p");
        var temp = (1.8*(data.main.temp-273)) + 32
        var cityName = data.name
        createP.textContent = "Current Temperature in " + cityName + ": " + temp + " degrees Farenheit";
        weatherContainer.appendChild(createP);

        //search history 
        var createBtn = document.createElement("a");
        createBtn.classList = "list-item flex-row justify-space-between align-center";
        createBtn.textContent = cityName;
        searchHistoryContainer.appendChild(createBtn);


      });
    } else {
      alert('Error: City Not Found');
    }
  })
  .catch(function(error) {
    alert("Unable to connect to Weather API");
  });
};



//Event Listener to btnClick 
cityForm.addEventListener("submit", btnHandler);