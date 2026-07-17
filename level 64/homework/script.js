

// 1

const names = ["ანი", "ლუკა", "ნინო"];

names.forEach(function(name) {
    console.log(`გამარჯობა, ${name}!`);
});


// 2

const numbers = [4, 7, 10, 3, 8];

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(`${number} არის ლუწი`);
    } else {
        console.log(`${number} არის კენტი`);
    }
});


// 3

const numbers2 = [-5, 10, -2, 8, 0, -1];

const positiveNumbers = [];

numbers2.forEach(function(number) {
    if (number > 0) {
        positiveNumbers.push(number);
    }
});

console.log(positiveNumbers);


// 🟡 საშუალო დონე

// 4

const movies = ["Inception", "Interstellar", "The Matrix"];

movies.forEach(function(movie, index) {
    console.log(`${index + 1}. ${movie}`);
});


// 5

const words = ["ვაშლი", "მსხალი", "ატამი"];

let totalLetters = 0;

words.forEach(function(word) {
    totalLetters += word.length;
});

console.log(`სულ ასოების რაოდენობა: ${totalLetters}`);


// 6

const userNames = ["გიორგი", "მარიამი"];
const userAges = [25, 22];

userNames.forEach(function(name, index) {
    console.log(`${name} არის ${userAges[index]} წლის`);
});


// 7

const prices = [100, 200, 300];

prices.forEach(function(price, index, arr) {
    arr[index] = price * 0.8;
});

console.log(prices);


// 🔴 რთული დონე

// 8

const scores = [45, 60, 72, 50, 90, 30];

const passedScores = [];

scores.forEach(function(score) {
    if (score > 51) {
        passedScores.push(score);
    }
});

console.log(passedScores);


// 9

const dishes = [
    "პიცა მარგარიტა",
    "ცეზარი სალათი",
    "პიცა პეპერონი",
    "ბერძნული სალათი"
];

dishes.forEach(function(dish) {
    if (dish.includes("პიცა")) {
        console.log(dish);
    }
});


// 10

const numbers3 = [12, 45, 7, 89, 23, 56];

let maxNumber = numbers3[0];

numbers3.forEach(function(number) {
    if (number > maxNumber) {
        maxNumber = number;
    }
});

console.log(`ყველაზე დიდი რიცხვია: ${maxNumber}`);