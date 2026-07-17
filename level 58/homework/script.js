// 1

const patients = ["პაციენტი 1", "პაციენტი 2"];

patients.unshift("კრიტიკული პაციენტი");
patients.shift();

console.log(patients);


// 2

const classA = ["ანი", "გიორგი"];
const classB = ["ლუკა", "ნინო"];

const allStudents = classA.concat(classB);

console.log(allStudents);


// 3

const nestedArray = [1, 2, [3, 4]];

const flatArray = nestedArray.flat();

console.log(flatArray);


// 4

const tags = ["javascript", "programming", "web"];

const text = tags.join("-");

console.log(text);


// 5

const runners = ["ნიკა", "ლაშა", "სანდრო", "გიორგი", "დათო"];

const topThree = runners.slice(0, 3);

console.log(topThree);


// 6

const guests = ["ანი", "ლუკა", "საბა"];

if (guests.includes("ლუკა")) {
    console.log("მოგესალმებით!");
}

// 7

const fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

const peachIndex = fruits.indexOf("ატამი");

console.log(peachIndex);


// 8

const letters = ["A", "B", "C", "A", "D"];

const lastAIndex = letters.lastIndexOf("A");

console.log(lastAIndex);


// 9

const items = ["პირველი", "მეორე", "მეოთხე"];

const firstPart = items.slice(0, 2);
const secondPart = items.slice(2);

const finalArray = firstPart.concat("მესამე", secondPart);

console.log(finalArray);


// 10

const agents = [
    ["აგენტი 001"],
    ["აგენტი 007"],
    ["აგენტი 005"]
];

const flatAgents = agents.flat();

if (flatAgents.includes("აგენტი 007")) {
    const agentIndex = flatAgents.indexOf("აგენტი 007");

    console.log("აგენტი 007-ის ინდექსია:", agentIndex);
}