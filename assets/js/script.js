// add current date to the page
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



fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=1e88f1bc9b5f8c56e02828ddcd511ef1")