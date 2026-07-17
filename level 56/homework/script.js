// 1

const colors = ["წითელი", "მწვანე"];

colors.push("ლურჯი");

console.log(colors);


// 2

const playlist = ["სიმღერა 1", "სიმღერა 2", "სიმღერა 3"];

playlist.pop();

console.log(playlist);


// 3

const numbers = [10, 20, 30];

numbers.push(40, 50);

console.log(numbers.length);


// 4

const cities = ["თბილისი", "ბათუმი", "ქუთაისი"];

const removedCity = cities.pop();

console.log(removedCity);


// 5

const animals = [];

const animal1 = prompt("შეიყვანე პირველი ცხოველი:");
const animal2 = prompt("შეიყვანე მეორე ცხოველი:");

animals.push(animal1);
animals.push(animal2);

console.log(animals);


// 6

const stack = ["A", "B", "C"];
const reversed = [];

const removedElement = stack.pop();

reversed.push(removedElement);

console.log(reversed);


// 7

const team = ["ნიკა", "ლუკა", "გიორგი", "საბა"];

if (team.length > 3) {
    team.pop();
} else {
    team.push("გია");
}

console.log(team);


// 8

const transactions = [100, -50, 200];

const newAmount = Number(prompt("შეიყვანე თანხა:"));

if (newAmount > 0) {
    transactions.push(newAmount);
} else if (newAmount < 0) {
    transactions.pop();
}

console.log(transactions);


// 9

const warehouse = ["მაგიდა", "სკამი"];

warehouse.push("კარადა");

let isFull;

if (warehouse.length === 3) {
    isFull = true;
    warehouse.pop();
} else {
    isFull = false;
}

console.log(warehouse);
console.log(isFull);