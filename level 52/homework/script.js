// 2 
let username = prompt("შეიყვანე მომხმარებლის სახელი:");

if (!username) {
    console.log("შესვლა ვერ მოხერხდა");
} else {
    console.log("კეთილი იყოს შენი მობრძანება, " + username);
}


// 3    
let age = Number(prompt("შეიყვანე ასაკი:"));

if (age > 0 && age <= 18) {
    console.log("ბილეთის ფასი: 5 ლარი");
} else if (age > 18) {
    console.log("ბილეთის ფასი: 10 ლარი");
} else {
    console.log("არასწორი ასაკი");
}


// 4 
let name = prompt("შეიყვანე შენი სახელი:");

let defaultName = name || "უცნობი მომხმარებელი";

console.log("გამარჯობა, " + defaultName);


// 5
let number1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let number2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

let result = number2 && Math.round(number1 / number2);

if (number2 === 0) {
    console.log("ნულზე გაყოფა შეუძლებელია");
} else {
    console.log("შედეგი:", result);
}


// 6   
let points = Number(prompt("შეიყვანე ქულების რაოდენობა:"));
let code = prompt("შეიყვანე ბონუს კოდი:");

let finalPoints = code === "BONUS"
    ? Math.pow(points, 2)
    : points;

console.log("საბოლოო ქულა:", finalPoints);


// 7
let number = Number(prompt("შეიყვანე მთელი რიცხვი 1-დან 100-მდე:"));

if (!Number.isInteger(number) || number < 1 || number > 100) {
    console.log("არასწორი რიცხვი");
} else {
    console.log("რიცხვი სწორია");
}


// 8
let randomNumber1 = Math.random();
let randomNumber2 = Math.random();

if (randomNumber1 > 0.5 && randomNumber2 > 0.5) {
    console.log("მოიგე! 🎉");
} else {
    console.log("წააგე 😢");
}


// 9
let temp = Number(prompt("შეიყვანე ტემპერატურა:"));
let sign = Math.sign(temp);

if (sign === -1 || temp > 40) {
    console.log("კრიტიკული ტემპერატურაა");
} else {
    console.log("ტემპერატურა ნორმალურია");
}


// 10
let price1 = Number(prompt("შეიყვანე პირველი მაღაზიის ფასი:")) || Infinity;
let price2 = Number(prompt("შეიყვანე მეორე მაღაზიის ფასი:")) || Infinity;
let price3 = Number(prompt("შეიყვანე მესამე მაღაზიის ფასი:")) || Infinity;

let minPrice = Math.min(price1, price2, price3);

console.log("ყველაზე დაბალი ფასი:", minPrice);


// 11
let a = Number(prompt("შეიყვანე პირველი კათეტი:"));
let b = Number(prompt("შეიყვანე მეორე კათეტი:"));

if (a > 0 && b > 0) {
    let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    console.log("ჰიპოტენუზა:", hypotenuse);
} else {
    console.log("კათეტები უნდა იყოს 0-ზე მეტი");
}