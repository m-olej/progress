// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(num) {
  const str_array = Array.from(num.toString()); //specifically for Array, because you can't get the length when using split().
  const rev_array = [];
  let rev_str = ""; //Hope that's fine :p
  for (let i = str_array.length; i > 0; i--) {
    rev_array.push(str_array[i - 1]);
    rev_str += rev_array[rev_array.length - 1];
  }
  return rev_str;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  return sum;
}

console.log("2.", addEven(tab));
