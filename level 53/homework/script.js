// 2
let isAdmin = true;
let role = isAdmin ? "ყველა უფლება" : "შეზღუდული უფლება";

console.log(role);


// 3
let number = 7;
let evenOrOdd = number % 2 === 0 ? "ლუწია" : "კენტია";

console.log(evenOrOdd);


// 4
let price = 60;
let delivery = price >= 50 ? 0 : 5;

console.log("მიწოდება:", delivery, "ლარი");


// 5
let isDarkMode = true;
let background = isDarkMode ? "black" : "white";

console.log("ფონი:", background);


// 6
let stock = 5;
let stockStatus = stock > 0 ? "ხელმისაწვდომია" : "ამოიწურა";

console.log(stockStatus);


// 7
let temp = 25;

let temperatureStatus = temp > 30
    ? "ცხელა"
    : temp >= 15
        ? "თბილა"
        : "ცივა";

console.log(temperatureStatus);


// 8
let password = "javascript";

let passwordStatus = password.length < 8
    ? "სუსტი"
    : password.length < 12
        ? "საშუალო"
        : "ძლიერი";

console.log(passwordStatus);


// 9
let promoCode = "SAVE20";

let discountCode = promoCode === "SAVE10"
    ? 10
    : promoCode === "SAVE20"
        ? 20
        : 0;

console.log("ფასდაკლება:", discountCode, "ლარი");


// 10
let age = 16;

let ageCategory = age < 12
    ? "ბავშვი"
    : age < 18
        ? "მოზარდი"
        : "ზრდასრული";

console.log(ageCategory);


// 11
let isVIP = false;
let total = 250;

let discount = isVIP
    ? 30
    : total > 200
        ? 15
        : 0;

console.log("ფასდაკლება:", discount + "%");