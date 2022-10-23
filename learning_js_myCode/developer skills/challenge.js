"use strict";

const forecast = prompt().split(" ").map(Number);

console.log(forecast.length);

const printForecast = function (array) {
  for (let days = 0; days < array.length; days++) {
    console.log(`...${array[days]}\u00B0C in ${days + 1}`);
  }
};

printForecast(forecast);
