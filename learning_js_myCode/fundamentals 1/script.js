
// name conventions - camelWriting
//let js = "amazing"; this turns off the function
/* this also turns off, but multiple at a time
let firstName = "Michał";
console.log(firstName);
console.log(69 * 6 - 12);

let $new = "True";
console.log($new);

let PI = 3.1415;
true; // a boolean value
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof (69));
console.log(typeof "sixty-nine");
javaScriptIsFun = "YES!"
console.log(typeof javaScriptIsFun);


let undefine;
undefine = 54 ;
console.log(undefine);
console.log(typeof undefine);

console.log(typeof null);
*/


//declaring variables
/*
let age = 30;
age = 31;

const birthYear = 1991;
//mutating a const variable makes the program not work !
// birthYear = 1990;

var job = "programmer";
job = "coder";

//can also not specify variable, don't do it though

lastName = "Olej"
console.log(lastName)
*/

//Operators

/*
const currentYear = 2022
const myBirthYear = 2004
const yourBirthYear = 2003

const ageMe = currentYear - myBirthYear
const ageYou = currentYear - yourBirthYear
console.log(ageMe, ageYou)

console.log(ageMe * 2, ageYou ** 2, (ageMe + ageYou) / 2)

const firstName2 = "Michał";
const lastName2 = "Olej";

console.log(firstName2 + " " + lastName2)

let x = 10 + 5;
x += 10; // x = x + 10 ;
x++; // x = x + 1 ;
x--; // x = x - 1 ;
x *= 4; // x = x * 4 ;
x /= 8; // x = x / 8 ;

console.log(x)

//comparison operators (boolean values)

console.log(ageMe + 1 > ageYou) // prints boolean = false (also false when it's equal)

console.log(ageMe + 1 >= ageYou) // true

const boolean = ageMe + 1 >= ageYou;

console.log(boolean)

*/

//Operators precadence
/*
const num = 20;

console.log(num - 10 > num - 9)

let x, y;
x = y = 69; // order from right to left otherwise 69 = undefined

console.log((x + y) / 2, x, y, x + " " + y)

*/
/*

const firstName = "Michał"
const job = "student"
const birthYear = 2004

const aboutMe = "My name is " + firstName + ", I'm " + (2020 - birthYear) + " years old, and I'm a " + job;

console.log(aboutMe);

const aboutMe2 = `I'm ${firstName}, a ${2020 - birthYear} year old student`; //template literals

console.log(aboutMe2);

console.log('this is a message\n\spread across\n\ 3 lines');

console.log(`this is also
a message spread
across 3 lines`)



const age = 9;
const yearsLeft = 18 - age;
// if/else control structure
if (age >= 18) {
    console.log("Able to learn how to drive 😎")
}
else {
    console.log(`Not able to learn how to drive 😢
    Will be able to in ${yearsLeft} years`)
}

const n = 100000000;

console.log("Euler's number", (1 + 1 / n) ** n);

const birthYear = 1990;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = "21";
}
console.log(century)

// Falsy values (5): 0, "", undefined, null, NaN
// Truthy values (everything else):

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({})); // empty object
console.log(Boolean(""));
console.log(Boolean(69));

const money = 0.5;
// Because money = 0, type coercion of JS takes boolean(0) which is False ( falsy value)
if (money) {
    console.log("don't spend it all!")
}
else {
    console.log("you should get a job")
}

let height;

if (height) {
    console.log("defined")
} else {
    console.log("undefined")
}



// === - strict (doesn't let type coercion) also !==
// == - weak (does type coercion)
also !=
const age = 18;

if (age == "18") console.log("Just turned 18!")

if (age === 18) console.log("Just turned 18!")

const input = Number(prompt("Guess the number"));
if (input === 69) console.log("You guessed the number", input);
else if (input === 68) console.log("almost guessed it!")
else console.log("Didn't guess it right")



// Boolean logic
// AND - &&
// OR - ||
// NOT - !(Boolean), inverts the logical value of the boolean

const hasDvd = true // A
const hasCd = true //  B 
const hasVhs = true // C

console.log(hasDvd && !hasCd)

const nerd = hasDvd && hasCd

console.log(`Are you a nerd? \n${nerd}`)

if (hasCd && hasDvd && hasVhs) {
    console.log("Nerd shit")
} else {
    console.log("Not nerdy enough")
}

*/

const day = prompt("Choose a day of the week")

switch (day) {
    case "monday": //if day === monday then
        console.log("Plan work structure");
        console.log("Go to school")
        break;
    case "tuesday":
        console.log("Prepare for exam")
        break;
    case "wednesday":
    case "thursday":
        console.log("Start project for AKAI")
        break;
    case "friday":
        console.log("Keep doing the project!")
        break;
    case "saturday":
        console.log("finish up on the project")
        break;
    case "sunday":
        console.log("Work out what to do next week")
        break;
    default:
        console.log("invalid input")
}

const day2 = prompt("Choose a day of the week:")

if (day2 === "monday") {
    console.log("Plan work structure");
    console.log("Go to school")
} else if (day2 === "tuesday") {
    console.log("Prepare for exam")
} else if (day2 === "wednesday" || day2 === "thursday") { }
else if (day2 === "friday") {
    console.log("Keep doing the project!")
} else if (day2 === "saturday") {
    console.log("finish up on the project")
} else if (day2 === "sunday") {
    console.log("Work out what to do next week")
} else {
    console.log("invalid input")
}

//expression - produces a value exp : 3 + 4, 1987, true && false || !true, const variable etc...
//statement - doesn't produce the value itself, an action exp : if, else if, console.log ect... (ended with a semicolon;)

//only expressions can be inserted 
console.log(`I am ${2022 - 2004} years old`)



// conditional operator (ternary operator) an expression
//has to has 3 parts condition/if/else
const age = 13;
age >= 18 ? console.log("I am an alcoholic") : console.log("I still drink illegaly")

const legality_of_drinking = age >= 18 ? "Legal drinking" : "Illegal drinking"
console.log(legality_of_drinking)

console.log(`I am ${age} and ${age >= 18 ? "I am an alcoholic" : "I still drink illegaly"} `)


