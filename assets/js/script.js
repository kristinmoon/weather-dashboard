// add dates to the page
today = $("#today")
  .text(moment().format("(MM/DD/YYYY)"));

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
          displayWeather("weather", cityName);
        });
      } else {
        alert("Please enter a valid city name.");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to OpenWeather API");
    });
}


var cityFormBtn = document.querySelector("#button-addon2");
var cityNameInputEl = document.querySelector("#city-name");
var citySearchContainerEl = document.querySelector("#city-search-container")
var citySearchTerm = document.querySelector("#city-search-term");



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
  // add city to ul
  // create a container for each search term
  var searchEL = document.createElement("li");
  searchEL.classList = "list-group-item";
  //searchEL.setAttribute("href", )

  // create a span element to hold search term
  var cityEl = document.createElement("p");
  cityEl.textContent = cityName;

  //append to container
  searchEL.appendChild(cityEl);

  citySearchContainerEl.appendChild(cityEl);
  console.log(cityName)

}
cityFormBtn.addEventListener("click", formSubmitHandler);



var displayWeather = function (weather, searchTerm) {
  // check if api returned results
  if (weather.length === 0) {

  }
}
