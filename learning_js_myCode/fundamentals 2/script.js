// has to be the first statement in the script.
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive")


function logger() {
    console.log("Name's Heisenberg")
}

//invoking/calling/running a function
logger()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
const orangeJuice = fruitProcessor(0, 5)
console.log("", appleJuice, "\n", orangeJuice)

//D.R.Y - Don't Repeat Yourself

//Function declaration

console.log(calcAge1(2004, 2022));
// With declaration you can specify a return of a function before defining the function
function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear;
}



//Function expression, anonuymous function
const calcAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
}
// With expression you can't use the return before defining
console.log(calcAge2(2004, 2022))

//Arrow function ([kinda] faster function expression)

const calcAge3 = (birthYear, currentYear) => currentYear - birthYear

console.log(calcAge3(2004, 2022))

const yearsUntilRetirement = (birthYear, currentYear, retirementAge, firstName) => {
    const age = currentYear - birthYear;
    if (age <= retirementAge) {
        console.log(`${firstName} retires in ${retirementAge - age}`);
    } else if (age >= 100) {
        console.log("How are you not dead yet?")
    }
    else {
        console.log("You're already retired!")
    }
    return `Yes you ${firstName}`
}
console.log(yearsUntilRetirement(2004, 2022, 65, "Jonas"))

function fruitProcessor(apples, oranges, pieces) {

    const applePieces = fruitCutter(apples, pieces)
    const orangePieces = fruitCutter(oranges, pieces)
    const juice = `Juice with ${applePieces} apple slices and ${orangePieces} orange slices`;
    return juice;
}
function fruitCutter(fruit, pieces) {
    return fruit * pieces;
}

console.log(fruitProcessor(2, 3, 3))


//active function
const yearsUntilRetirement_a = function (birthYear, currentYear, retirementAge, firstName) {
    const age = calcAge1(birthYear, currentYear)
    if (age <= retirementAge) {
        console.log(`${firstName} is ${age} years old and retires in ${retirementAge - age} years`);
    } else if (age >= 100) {
        console.log("How are you not dead yet?")
    }
    else {
        console.log("You're already retired!")
    }
}
function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear;
}

yearsUntilRetirement_a(1969, 2022, 65, "Jonas")

//passive function

const yearsUntilRetirement_p = function (birthYear, currentYear, retirementAge, firstName) {
    const age = calcAge1(birthYear, currentYear)
    if (age <= retirementAge) {
        return `${firstName} is ${age} years old and retires in ${retirementAge - age} years`;
    } else if (age >= 100) {
        return "How are you not dead yet?"
    }
    else {
        return "You're already retired!"
    }
}
function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear;
}

console.log(yearsUntilRetirement_p(1969, 2022, 65, "Jonas"))


//Arrays

const numbers = [1, 2, 3, 4, 5]
const nums = new Array(1, 2, 3, 4, 5)

console.log(`${numbers}
${nums}`)

console.log("", nums[1], "\n", numbers[1])
console.log("", nums[nums.length - 1], "\n", numbers[numbers.length - 1])
console.log(`${nums.length}
${numbers.length}`)

//array manipulation

//notice that even though those arrays were declared with const, you can still change arrays elements
numbers[0] = 0
nums[0] = 0
console.log(`${numbers}
${nums}`)
const name = "Jonas"
const jonas = [name, "Shmedtman", calcAge1(1991, 2022), numbers]
console.log(jonas)

function calcAge1(birthYear, currentYear) {
    return currentYear - birthYear;
}
const years = [1999, 2000, 2002, 2004]
const calcAge4 = function (...birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge4(years[0])
const age2 = calcAge4(years[1])
const age3 = calcAge4(years[years.length - 1])

const ages = [age1, age2, age3]
console.log(ages)

//Array methods
nums.push(6);
numbers.push(6);
console.log(nums.push(7), nums)

nums.unshift(-1);
numbers.unshift(-1)
console.log(nums, numbers)
const nums_popped = nums.pop() // removes last element
console.log(nums_popped) // returns removed element
numbers.shift() // removes first element
console.log(numbers)

console.log(nums.indexOf(3)) // returns index of the element 3 in nums array
console.log(numbers.indexOf(69)) // if an element isn't in the array it will return as -1

//uses strict comparison, so it test the elements type aswell
console.log(nums.includes(3)) // true
console.log(nums.includes(69)) // false

nums[4] = 69
console.log(nums)
if (nums.includes(4)) {
    console.log("nums has an element 4 ")
}
else {
    console.log("nums doesn't have an element 4")
}


//Objects



const nameKey = "Name";
console.log(jonas)
console.log(jonas.lastName)
console.log(jonas['last' + nameKey]) // can take expressions

let input = prompt("Choose a property of jonas object")
while (1 < 2) {
    if (jonas[input]) {
        console.log(jonas[input])
        break;
    } else {
        input = prompt("Wrong value, choose a different one")
    }
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)


const jonas = {
    firstName: "Jonas",
    lastName: "Shmedtmann",
    birthyear: 1991,
    job: "teacher",
    friends: ['Micheal', 'Peter'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }

};
jonas.location = "Portugal";
jonas["twitter"] = "@Jonasschmedtmann"

console.log(jonas.calcAge(jonas.birthyear))
console.log(jonas["calcAge"](jonas["birthyear"])) // !!!

const jonas = {
    firstName: "Jonas",
    lastName: "Shmedtmann",
    birthyear: 1991,
    job: "teacher",
    friends: ['Micheal', 'Peter'],
    hasDriversLicense: true,
    //this is assigned the value of the object calling the property
    calcAge: function () {
        // console.log(this)
        this.age = 2037 - this.birthyear;
        return this.age
    },
    hdl: function () {
        if (this.hasDriversLicense === true) {
            return "a"
        } else {
            return "no"
        }
    },
    // getSummary: function () {
    //     return `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hdl()} driver's license`
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
};
console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)


console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job} and he has ${jonas.hdl()} driver's license`)

console.log(jonas.getSummary());

//arrays are also objects. Objects have methods which are activated by . or [""] notation.

const test = []
test["push"](1)
console.log(test)

//Loops
// for loop keeps runnin while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetiotion ${rep}`);
}



const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true,
    { name: "Jonas" }
];
const type_array = [];
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])
    type_array[i] = typeof jonasArray[i]
}
console.log(type_array)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i])
}
console.log(ages)

//continue and break 

for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'string') continue; // continue - stops from doint the action, but doesn't stop the whole iteration
    console.log(jonasArray[i], typeof jonasArray[i])
}


for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') break; // break - stops the whole ting innit 
    console.log(jonasArray[i], typeof jonasArray[i])
}


const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true,
    { name: "Jonas" }
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

const ex_repetition = function (number) {
    for (let i = 0; i <= 4; i++) {
        console.log(`ex.${number}`)
    }
}

for (let exercise = 1; exercise <= 3; exercise++) {
    ex_repetition(exercise);
}

*/
let rep = 0
while (rep <= 10) {
    console.log(rep)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
let assigned = 0;
while (dice !== 6) {
    console.log(dice)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) console.log(6)
}