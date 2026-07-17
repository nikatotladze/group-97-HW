// 1

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 2

let count = 10;

while (count > 0) {
    console.log(count);
    count--;
}


// 3

let password;

do {
    password = prompt("შეიყვანე პაროლი:");
} while (password !== "secret");

console.log("სწორი პაროლია!");


// 4

const fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

for (const fruit of fruits) {
    console.log(fruit);
}


// 5

const car = {
    brand: "Toyota",
    model: "Prius",
    year: 2020
};

for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}


// 6

const numbers = [10, 20, 30, 40];

let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log(`ჯამი: ${sum}`);


// 7

let number = 123456;
let digitCount = 0;

while (number > 0) {
    number = Math.floor(number / 10);
    digitCount++;
}

console.log(`ციფრების რაოდენობა: ${digitCount}`);


// 8

const products = {
    milk: 3,
    bread: 2,
    cheese: 10
};

for (const product in products) {
    products[product] = products[product] * 2;
}

console.log(products);


// 9

let totalSum = 0;
let inputNumber;

do {
    inputNumber = Number(prompt("შეიყვანე რიცხვი:"));
    totalSum += inputNumber;
} while (inputNumber !== 0);

console.log(`საბოლოო ჯამი: ${totalSum}`);


// 10

const names = ["ლუკა", "ანი", "ალექსი", "ნინო", "ავთო"];

const aNames = [];

for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "ა") {
        aNames.push(names[i]);
    }
}

console.log(aNames);