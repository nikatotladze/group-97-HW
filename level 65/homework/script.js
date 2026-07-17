

// 1

const temperatures = [18, 30, 22, 27, 15];

temperatures.forEach(function(temperature) {
    if (temperature > 25) {
        console.log(`ცხელა: ${temperature}`);
    } else {
        console.log(`ნორმალურია: ${temperature}`);
    }
});


// 2

const numbers = [-3, 5, -8, 2, 0, -1];

let negativeCount = 0;

numbers.forEach(function(number) {
    if (number < 0) {
        negativeCount++;
    }
});

console.log(`უარყოფითი რიცხვების რაოდენობა: ${negativeCount}`);


// 3

const cities = ["თბილისი", "ბათუმი", "ქუთაისი"];

cities.forEach(function(city, index) {
    console.log(`პოზიცია ${index}: ${city}`);
});




// 4

const nums = [2, 4, 6, 8];

const squares = nums.map(function(number) {
    return number * number;
});

console.log(squares);


// 5

const dollars = [10, 50, 100];

const lari = dollars.map(function(price) {
    return price * 2.7;
});

console.log(lari);


// 6

const files = ["photo", "avatar", "background"];

const pngFiles = files.map(function(file) {
    return file + ".png";
});

console.log(pngFiles);




// 7

const words = ["სახლი", "ხე", "მზე", "კომპიუტერი", "კარი"];

const longWords = words.filter(function(word) {
    return word.length > 4;
});

console.log(longWords);


// 8

const evenAndOddNumbers = [12, 5, 8, 13, 21, 4];

const oddNumbers = evenAndOddNumbers.filter(function(number) {
    return number % 2 !== 0;
});

console.log(oddNumbers);


// 9

const prices = [20, 85, 45, 120, 15];

const budgetPrices = prices.filter(function(price) {
    return price < 50;
});

console.log(budgetPrices);


// 10

const emails = [
    "test@gmail.com",
    "invalidgmail.com",
    "user@mail.ru",
    "hello.com"
];

const validEmails = emails.filter(function(email) {
    return email.includes("@");
});

console.log(validEmails);