/*
const markWeight = 95
const markHeight = 1.88

const johnWeight = 85
const johnHeight = 1.76

const markBmi = markWeight / markHeight ** 2;
const johnBmi = johnWeight / johnHeight ** 2;

const MarkBmi = markBmi.toFixed(3);
const JohnBmi = johnBmi.toFixed(3);

markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi)

console.log(markHigherBmi)

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${MarkBmi}) is higher than John's (${JohnBmi}) !`)
}
else {
    console.log(`John's BMI (${JohnBmi}) is higher than Mark's (${MarkBmi}) !`)
}

const diffBmi = JohnBmi - MarkBmi;

console.log(typeof MarkBmi)
*/

// Dolphin's

let inputs_d = prompt("Submit Dolphins's scores").split(" ");
inputs_d = inputs_d.map(Number);
const inputs_d_length = inputs_d.length;
let sum_d = 0;
// Koala's
let inputs_k = prompt("Submit Koala's scores").split(" ");
inputs_k = inputs_k.map(Number);
const inputs_k_length = inputs_k.length;
let sum_k = 0;

for (let i = 0; i < inputs_d_length; i++) {
    sum_d = sum_d + inputs_d[i]

}
const d_score = sum_d / inputs_d_length
console.log("The Average of Dolphin's Team", d_score)
for (let i = 0; i < inputs_k_length; i++) {
    sum_k = sum_k + inputs_k[i]

}
const k_score = sum_k / inputs_k_length
console.log("The average od Koala's Team", k_score)




if (d_score > k_score && d_score >= 100) console.log("Dolphins win the trophy!")
else if (d_score === k_score && k_score >= 100) console.log("It's a tie!")
else if (k_score > d_score && k_score >= 100) console.log("Koalas win the trophy!")
else console.log("Noone got the minimum score required to win :c")


const bill = Number(prompt("What is the value of the bill?"));

const tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;

console.log(`If the bill is ${bill}, you should tip ${tip} dollars. So you should pay ${bill + tip} in total.`)
