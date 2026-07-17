// 1

const oddSum = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }

    return sum;
};

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

console.log("კენტი რიცხვების ჯამი:", oddSum(numbers1));


// 2

const numbers2 = [12, 45, 7, 89, 23];

let max = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}

console.log("ყველაზე დიდი რიცხვია:", max);


// 3

const countNumber = (numbers, searchNumber) => {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchNumber) {
            count++;
        }
    }

    return count;
};

const numbers3 = [5, 2, 5, 8, 5, 1, 5];

console.log("5 მეორდება:", countNumber(numbers3, 5), "ჯერ");


// 4

const numbers4 = [1, 2, 3, 4, 5];

const reversedArray = [];

for (let i = numbers4.length - 1; i >= 0; i--) {
    reversedArray.push(numbers4[i]);
}

console.log("შებრუნებული მასივი:", reversedArray);


// 5

const doubleNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
    }

    return numbers;
};

const numbers5 = [1, 2, 3, 4, 5];

console.log("გაორმაგებული მასივი:", doubleNumbers(numbers5));


// 6

const numbers6 = [-3, 5, 0, -1, 12, -8, 4];

let positiveCount = 0;
let negativeCount = 0;

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] > 0) {
        positiveCount++;
    } else if (numbers6[i] < 0) {
        negativeCount++;
    }
}

console.log("დადებითი რიცხვები:", positiveCount);
console.log("უარყოფითი რიცხვები:", negativeCount);


// 7

const findIndexManually = (fruits, searchFruit) => {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === searchFruit) {
            console.log("ინდექსი:", i);
        }
    }
};

const fruits = ["ვაშლი", "მსხალი", "ატამი", "ქლიავი"];

findIndexManually(fruits, "ატამი");


// 8

const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

const result = [];

for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
}

console.log(result);


// 9

const numbers = [10, 20, 30, 40, 50];

let sum = 0;


for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

const average = sum / numbers.length;

console.log("საშუალო:", average);


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > average) {
        console.log("საშუალოზე მეტია:", numbers[i]);
    } else {
        console.log("საშუალოზე მეტი არ არის:", numbers[i]);
    }
}


// 10

const checkTextLength = (words) => {
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
            console.log(`${words[i]} - მოკლე ტექსტი`);
        } else {
            console.log(`${words[i]} - გრძელი ტექსტი`);
        }
    }
};

const words = ["it", "javascript", "code", "programming"];

checkTextLength(words);