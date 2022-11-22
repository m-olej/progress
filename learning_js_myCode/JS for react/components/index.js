let variable; //variable could be changed / is mutible
variable = 1;
variable = 2;
const value = 1; //is constant, cannot be changed

//Arrow Functions
const nameOffunction = (input) => {
  console.log(`body of function, logs ${input}`);
};

nameOffunction("input");

const squared = (num) => console.log(num * num);

squared(36);

//Export & Import (Modules)

import person from "./person.js";
import prs from "./person.js"; //export default makrs what will be imported from file as default. The default import can have any name but will have funtionality of the default export in referenced file
import { func as exFunction } from "./utility.js"; //otherwise you have to specify name, but can Change it using 'as'
import { value2 } from "./utility.js";

import * as bundled from "./utility.js"; //Imports everything from referenced file. To use specific exports type ex: bundled.value

console.log(person);
console.log(prs);
exFunction();
console.log(value2);
console.log(bundled.variable2);

//classes
class testClass {
  key = value; //property
  call = () => console.log("You've been called"); //method
}

const myClass = new testClass();

myClass.call();
console.log(myClass.key);

class extentsion {
  constructor() {
    this.expression = "NIE JEST SAM!";
  }
  printExpression = () => console.log(this.expression);
}

class furtherMore extends extentsion {
  constructor() {
    super();
    this.name = "Bob";
  }
  profession = "Budowniczy";
  printProffesion = () => console.log(this.profession);
}

const notAlone = new furtherMore();

console.log(notAlone.name);
console.log(notAlone.profession);
console.log(notAlone.expression);

console.log(notAlone.name);
notAlone.printProffesion();
notAlone.printExpression();

//Spread & Rest operator [...]

//Spread
const oldArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = [...oldArray, 8, 9];
console.log(newArray);

const oldObject = {
  1: 1,
  2: 2,
};
const newObject = { ...oldObject, 3: 3 };
console.log(newObject);

//Rest
const sortArgs = function (...args) {
  return args.sort(function (a, b) {
    return a - b;
  });
};
console.log(sortArgs(6, 5, 3, 3, 74, 6, 7, 8, 4, 2, 3, 5, 0, -2));

//Destructuring
let a, b, c, d;
[a, b] = newArray;
console.log(a);
console.log(b);

//Refreshing Arrays
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});
console.log(doubleNumbers);
