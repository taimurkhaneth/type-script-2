"use strict";
// Addition
let answer1 = add(3, 3);
console.log(answer1);
function add(x, y) {
    let addition = x + y;
    return addition;
}
// Check Even Or ODD 
let answer2 = checkEoD(3);
console.log(answer2);
function checkEoD(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// area of rec
let answer3 = calArea(3, 3);
console.log(answer3);
function calArea(length, width) {
    const area = length * width;
    return area;
}
// Temprature 
let answer4 = convertCtoF(60);
console.log(`${answer4} Frh`);
function convertCtoF(celsius) {
    const fahr = (celsius * 9 / 5) + 32;
    return fahr;
}
// reverse of string 
let answer5 = revStr("taimur");
console.log(answer5);
function revStr(str) {
    const arry = str.split('');
    arry.reverse();
    const reversedString = arry.join('');
    return reversedString;
}
