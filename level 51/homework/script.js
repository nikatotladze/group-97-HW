// 1

let secretNumber = Math.floor(Math.random() * 5) + 1;
let userGuess = Number(prompt("გამოიცანი რიცხვი 1-დან 5-მდე:"));

if (userGuess === secretNumber) {
    console.log("გამოიცანი!");
} else {
    console.log("ვერ გამოიცანი, ჩაფიქრებული იყო:", secretNumber);
}


// 2

let seatNumber = Number(prompt("შეიყვანე ადგილის ნომერი:"));

if (seatNumber <= 0) {
    console.log("არასწორი ადგილი");
} else {
    let box = Math.ceil(seatNumber / 5);
    console.log("შენი ადგილი არის მე-" + box + " რიგში");
}


// 3

let originalPrice = Number(prompt("შეიყვანე საწყისი ფასი:"));
let newPrice = originalPrice - originalPrice * 0.15;
let finalPrice = Math.round(newPrice);

console.log("საბოლოო ფასი:", finalPrice);

if (finalPrice > 50) {
    console.log("ძვირია");
} else {
    console.log("მისაღები ფასია");
}


// 4

let balance = Number(prompt("შეიყვანე შენი ბალანსი:"));
let balanceStatus = Math.sign(balance);

if (balanceStatus === -1) {
    console.log("თქვენ გაქვთ დავალიანება");
} else if (balanceStatus === 0) {
    console.log("თქვენი ბალანსი ნულია");
} else {
    console.log("თქვენს ანგარიშზე არის თანხა");
}


// 5

let side = Number(prompt("შეიყვანე კვადრატის გვერდის სიგრძე:"));
let area = Math.pow(side, 2);

console.log("ფართობი:", area);

if (area > 100) {
    console.log("დიდი ფართობი");
} else {
    console.log("პატარა ფართობი");
}


// 6

let fighter1HP = Number(prompt("შეიყვანე პირველი მებრძოლის HP:"));
let fighter2HP = Number(prompt("შეიყვანე მეორე მებრძოლის HP:"));

let maxHP = Math.max(fighter1HP, fighter2HP);

if (maxHP < 50) {
    console.log("ორივე მებრძოლი სუსტია");
} else {
    console.log("გამარჯვებულის HP:", maxHP);
}


// 7

let price1 = Number(prompt("შეიყვანე პირველი მაღაზიის ფასი:"));
let price2 = Number(prompt("შეიყვანე მეორე მაღაზიის ფასი:"));
let price3 = Number(prompt("შეიყვანე მესამე მაღაზიის ფასი:"));

let cheapestPrice = Math.min(price1, price2, price3);

if (cheapestPrice < 10) {
    console.log("ძალიან იაფია!");
} else {
    console.log("ყველაზე დაბალი ფასი:", cheapestPrice);
}


// 8

let a = Number(prompt("შეიყვანე პირველი კათეტი:"));
let b = Number(prompt("შეიყვანე მეორე კათეტი:"));

let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("ჰიპოტენუზა:", hypotenuse);

if (hypotenuse > 10) {
    console.log("გრძელი სამკუთხედი");
} else {
    console.log("მოკლე სამკუთხედი");
}


// 9

let number = Number(prompt("შეიყვანე ნებისმიერი რიცხვი:"));

if (Number.isInteger(number)) {
    console.log("თქვენ შეიყვანეთ მთელი რიცხვი");
} else {
    console.log("თქვენ შეიყვანეთ ათწილადი რიცხვი");
}


// 10

let diceGuess = Number(prompt("გამოიცანი კამათლის რიცხვი 1-დან 6-მდე:"));

if (!Number.isInteger(diceGuess)) {
    console.log("შეცდომა!");
} else {
    let diceResult = Math.floor(Math.random() * 6) + 1;

    console.log("კამათელზე ამოვიდა:", diceResult);

    if (diceGuess === diceResult) {
        console.log("მოიგე! 🎉");
    } else {
        console.log("წააგე 😢");
    }
}