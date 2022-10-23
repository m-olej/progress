// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// .prettierrc is a configuring file that can change the behavior of prettier.
/*
const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(2002));
*/
//Problem
//Given an array of temperatures calculate the Amplitude(the differnce between max and min). Keep in mind sensor errors.

/*
const temperatures = [
  -10,
  -2,
  -8,
  4,
  -5,
  -1,
  -3,
  7,
  "error",
  1,
  4,
  10,
  7,
  8,
  -4,
];
const temperatures2 = [-20, 21, 5, 6, 3];

const calcTempAmp = function (array1, array2) {
  let max = array3[0];
  let min = array3[0];
  const array3 = array1.concat(array2);
  console.log(array3);
  for (let i = 0; i < array3.length; i++) {
    if (typeof array3[i] !== "number") continue;
    if (min > array3[i]) min = array3[i];
    if (max < array3[i]) max = array3[i];
  }
  return `min: ${min}, max: ${max}
  The amplitude is: ${max - min}`;
};

console.log(calcTempAmp(temperatures, temperatures2));


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius"),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/
