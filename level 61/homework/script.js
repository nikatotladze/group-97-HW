// 2

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3

let numbers = [4, 8, 15, 16, 23, 42];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("ჯამი:", sum);


// 4

let fruits = ["ვაშლი", "ბანანი", "მარწყვი", "კივი"];

for (let fruit of fruits) {
    console.log(`${fruit} - ${fruit.length} ასო`);
}


// 5

let word = "პროგრამირება";

for (let letter of word) {
    console.log(letter);
}


// 6

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}


// 7

let shoppingCart = {
    პური: 2,
    რძე: 4,
    ყველი: 10,
    კვერცხი: 5
};

let total = 0;

for (let product in shoppingCart) {
    total += shoppingCart[product];
}

console.log("სულ:", total, "ლარი");


// 8

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("გაშვება!");


// 9

let number = 1;

while (true) {
    if (number % 7 === 0 && number % 5 === 0) {
        console.log("პირველი საერთო ჯერადია:", number);
        break;
    }

    number++;
}


// 10

let dice;

do {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log("ამოვიდა:", dice);
} while (dice !== 6);


// 11

let students = [
    { name: "ანა", score: 85 },
    { name: "ნიკა", score: 42 },
    { name: "მარიამი", score: 91 },
    { name: "ლაშა", score: 38 }
];

for (let student of students) {
    if (student.score > 50) {
        console.log(student.name);
    }
}