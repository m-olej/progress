'use strict';
//challenge 1
/*
const scoreInputs = function (team) {
    const scores = prompt(`Input ${team}'s scores`).split(" ")
    return scores;
}

const scores_d = scoreInputs("Dolphin").map(Number);
const scores_k = scoreInputs("Koala").map(Number);

const calcAverage = (...array) => {
    let i = 0
    let sum = 0
    while (i < array.length) {
        sum += array[i]
        i++
    }
    return sum / array.length;
}

const avgDolphin = calcAverage(...scores_d)
const avgKoala = calcAverage(...scores_k)

function checkWinner(team1, avg1, team2, avg2) {
    if (avg1 >= avg2 * 2) {
        console.log(`${team1} win (${avg1} vs. ${avg2})`)
    }
    else if (avg2 >= avg1 * 2) {
        console.log(`${team2} win (${avg2} vs. ${avg1})`)
    }
    else {
        console.log("Neither team wins.")
    }
}

checkWinner("Dolphins", avgDolphin, "Koalas", avgKoala);

//challenge 2

const bill_array = prompt("How much do you owe?").split(" ").map(Number);

function calcTip(...array) {
    let i = 0;
    const tip_array = []
    while (i < array.length) {
        tip_array.push(1)
        i++
    }
    i = 0
    while (i < array.length) {
        if (array[i] >= 50 && array[i] <= 300) {
            tip_array[i] = array[i] * 0.15
        } else {
            tip_array[i] = array[i] * 0.20
        }
        i++
    }
    return tip_array
}
const tip_array = calcTip(...bill_array);
const total_array = [];
let d = 0;
let sum = 0
while (d < bill_array.length) {
    sum = bill_array[d] + tip_array[d];
    total_array.push(sum)
    d++
}
sum = 0
d = 0
while (d < total_array.length) {
    sum += total_array[d]
    d++
}

console.log("Your bills", bill_array);
console.log("Your calculated tips", tip_array);
console.log("Your separate totals", total_array);
console.log("Your total", sum)


//challenge 3

const mark_v = prompt("Mark's mass and heigh").split(" ");
const john_v = prompt("John's mass and height").split(" ");


const mark = {
    name: "Mark",
    mass: mark_v[0],
    height: mark_v[1],
    calcBmi: function () {
        return this.mass / (this.height ** 2)
    }
}
const john = {
    name: "John",
    mass: john_v[0],
    height: john_v[1],
    calcBmi: function () {
        return this.mass / (this.height ** 2)
    }
}

const logic = () => {
    if (john.calcBmi() > mark.calcBmi()) {
        return true;
    } else {
        return false;
    }
}

console.log(`${john.name}'s BMI ${john.calcBmi()} is ${logic() ? "Higher" : "Lower"} than ${mark.name}'s ${mark.calcBmi()} `)

*/