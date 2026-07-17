// 1

function randomNumber() {
    return Math.random() * 10;
}

console.log(randomNumber());


// 2

let number1 = 5.99;

console.log(Math.floor(number1)); 


// 3

let boxes = 4.1;

console.log(Math.ceil(boxes));  


// 4

function roundNumber(number) {
    return Math.round(number);
}

console.log(roundNumber(2.4));  
console.log(roundNumber(2.5));  


// 5

let balance = -100;

console.log(Math.sign(balance));  



// 6

let side = 5;

let volume = Math.pow(side, 3);

console.log("კუბის მოცულობა:", volume, "სმ³");  


// 7

let maxNumber = Math.max(12, 45, 7, 89, 23);

console.log("ყველაზე დიდი რიცხვია:", maxNumber);  


// 8

let youngestAge = Math.min(18, 25, 14);

console.log("ყველაზე ახალგაზრდა ასაკი:", youngestAge);  


// 

let a = 3;
let b = 4;

let hypotenuse = Math.sqrt(
    Math.pow(a, 2) + Math.pow(b, 2)
);

console.log("ჰიპოტენუზა:", hypotenuse);  


// 10   

function isInteger(number) {
    return Number.isInteger(number);
}

console.log(isInteger(10));   
console.log(isInteger(10.5));  