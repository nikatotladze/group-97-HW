// 1

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;

    console.log("ამოვიდა:", dice);

    if (dice === 6 || dice === 5) {
        console.log("შენ მოიგე!");
    } else {
        console.log("შენ წააგე!");
    }
}

rollDice();


// 2

const num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
const operator = prompt("შეიყვანე ოპერაცია (+, -, *, /):");
const num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return a / b;

        default:
            return "არასწორი ოპერატორი";
    }
}

console.log("პასუხი:", calculate(num1, operator, num2));


// 3

const isStudent = true;
const age = 17;

const ticketPrice = isStudent || age < 18 ? 10 : 15;

console.log("ბილეთის ფასი:", ticketPrice, "ლარი");


// 4

function roundNumber(number) {
    const decimalPart = number - Math.floor(number);

    return decimalPart >= 0.5
        ? Math.ceil(number)
        : Math.floor(number);
}

console.log(roundNumber(4.7)); // 5
console.log(roundNumber(4.2)); // 4


// 5


const day = Number(prompt("შეიყვანე კვირის დღის ნომერი (1-7):"));

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("სამუშაო დღეა");
        break;

    case 6:
    case 7:
        console.log("დასვენების დღეა");
        break;

    default:
        console.log("არასწორი დღე");
}


// 6

function findSqrt(number) {
    return number < 0
        ? "შეცდომა: უარყოფით რიცხვს ფესვი არ აქვს"
        : Math.sqrt(number);
}

console.log(findSqrt(25));
console.log(findSqrt(-9));


// 7

const userAge = Number(prompt("შეიყვანე ასაკი:"));

const clubAccess =
    userAge >= 18 && userAge <= 60
        ? "შეგიძლია კლუბში შესვლა"
        : "კლუბში შესვლა არ შეგიძლია";

console.log(clubAccess);


// 8

function canUnlockNextLevel(score, hasKey) {
    return score >= 50 && hasKey
        ? "შემდეგი დონე გაიხსნა"
        : "შემდეგი დონე არ გაიხსნა";
}

console.log(canUnlockNextLevel(75, true));
console.log(canUnlockNextLevel(40, true));


// 9

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

console.log(findMin(15, 8, 20));


// 10

const username = prompt("შეიყვანე სახელი:");
const password = prompt("შეიყვანე პაროლი:");

const loginResult =
    username === "admin" && password === "12345"
        ? "წარმატებით შეხვედი სისტემაში"
        : "სახელი ან პაროლი არასწორია";

console.log(loginResult);

// 11

let luckyNumber = Math.floor(Math.random() * 3) + 1;

let userGuess = Number(prompt("გამოიცანი რიცხვი 1-დან 3-მდე:"));

let result = userGuess === luckyNumber
    ? "გილოცავ! გამოიცანი 🎉"
    : "ვერ გამოიცანი 😢";

console.log("კომპიუტერის რიცხვი:", luckyNumber);
console.log(result);