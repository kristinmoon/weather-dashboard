// add dates to the page
today = $("#today")
  .text(moment().format("[cityName] (MM/DD/YYYY)"));

tPlusOne = $("#t-plus-1")
  .text(moment().add(1, "days").format("MM/DD/YYYY"));

tPlusTwo = $("#t-plus-2")
  .text(moment().add(2, "days").format("MM/DD/YYYY"));

tPlusThree = $("#t-plus-3")
  .text(moment().add(3, "days").format("MM/DD/YYYY"));

tPlusFour = $("#t-plus-4")
  .text(moment().add(4, "days").format("MM/DD/YYYY"));

tPlusFive = $("#t-plus-5")
  .text(moment().add(5, "days").format("MM/DD/YYYY"));


var getCityWeather = function (cityName) {
  // format the OpenWeather api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1e88f1bc9b5f8c56e02828ddcd511ef1";

  // make a request to the url
  fetch(apiUrl)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          displayWeather(data, cityName);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather API");
    });
}


var cityFormEl = document.querySelector("#city-form");
var cityNameInputEl = document.querySelector("#city-name");


var formSubmitHandler = function (event) {
  event.preventDefault();

  // get value from input element
  var cityName = cityNameInputEl.value.trim();

  if (cityName) {
    getCityWeather(cityName);
    cityNameInputEl.value = "";
  } else {
    alert("Please enter a valid city name.")
  }
}
cityFormEl.addEventListener("submit", formSubmitHandler);

console.log(apiUrl)