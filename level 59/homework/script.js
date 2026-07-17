// 1

const getEvenNumbers = (numbers) => {
    const evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
};

const numbers = [1, 2, 3, 4, 5, 6, 8, 9];

console.log(getEvenNumbers(numbers));


// 2

const students = ["ანი", "ლუკა", "ნიკო"];

const findStudent = (name) => {
    if (students.includes(name)) {
        console.log("სტუდენტი ნაპოვნია");
    } else {
        console.log("სტუდენტი არ არის სიაში");
    }
};

findStudent("ლუკა");


// 3

const cleanNumbers = [10, -5, 20, -3, 30, -12];

for (let i = cleanNumbers.length - 1; i >= 0; i--) {
    if (cleanNumbers[i] < 0) {
        cleanNumbers.splice(i, 1);
    } else {
    }
}

console.log(cleanNumbers);


// 4

const calculateTotal = (prices) => {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 0) {
            total += prices[i];
        } else {
            total += 0;
        }
    }

    return total;
};

const prices = [10, 25, 50, 100];

console.log("სრული ფასი:", calculateTotal(prices));


// 5

const words = ["მე", "ვსწავლობ", "javascript-ს"];

const createSentence = (words) => {
    const text = words.join(" ");

    if (text.length > 10) {
        console.log(text);
    } else {
        console.log("ტექსტი 10 სიმბოლოზე მეტი არ არის");
    }
};

createSentence(words);


// 6

const cities = ["ბათუმი", "თბილისი", "ქუთაისი"];

const findCity = (city) => {
    if (cities.includes(city)) {
        const index = cities.indexOf(city);
        console.log(`ქალაქი ნაპოვნია. ინდექსი: ${index}`);
    } else {
        console.log("ქალაქი ვერ მოიძებნა");
    }
};

findCity("თბილისი");

// 7

const listA = [1, 2, 3];
const listB = [4, 5, 6, 7, 8];

let combined;

if (listA.length > listB.length) {
    combined = listA.concat(listB);
} else {
    combined = listB.concat(listA);
}

console.log(combined);


// 8

const letters = ["A", "B", "C", "D", "E"];

for (let i = 0; i < 3; i++) {
    letters.pop();
}

console.log(letters);


// 9

const numbers = [5, 18, 25, 42, 30, 10, 35];

const result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15 && numbers[i] < 40) {
        result.unshift(numbers[i]);
    } else {
    }
}

console.log(result);


// 10

const fruits = ["ვაშლი", "ბანანი", "ატამი"];

const changeFruit = (fruits) => {
    if (fruits[1] === "ბანანი") {
        fruits[1] = "მსხალი";
    } else {
        console.log("ბანანი მე-1 ინდექსზე არ არის");
    }

    console.log(fruits);
};

changeFruit(fruits);
