//1

// for in ციკლი ძირითადად გამოიყენება ობიექტებთან სამუშაოდ, რათა მივიღოთ მათი თვისებების სახელები

//for of გამოიყენება მნიშვნელობების values მისაღებად

//while ციკლი მუშაობს მანამ, სანამ პირობა ჭეშმარიტია

//do while ჯერ ასრულებს კოდს ერთხელ და შემდეგ ამოწმებს პირობას

//break გამოიყენება ციკლის ნაადრევად შესაჩერებლად




//2

let pinCode = "1234";
let userPin;

while (userPin !== pinCode) {
    userPin = prompt("enter pinCode");

    if (userPin !== pinCode) {
        alert("pinCode is incorrect!");
    } else {
        alert("pinCode is correct!");
    }
}


//3

let fruits = ["ვაშლი", "ბანანი", "ატამი"];

for (let fruit of fruits) {
    console.log("მე მიყვარს " + fruit);
}

//4

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}



//5

//Callback Function არის ფუნქცია  რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა და შემდეგ გამოიძახება

//High Order Function არის ფუნქცია რომელიც იღებს სხვა ფუნქციას არგუმენტად ან აბრუნებს ფუნქციას


//6

function robot(number, action) {
    return action(number);
}

function double(num) {
    return num * 2;
}

function triple(num) {
    return num * 3;
}

console.log(robot(5, double)); 
console.log(robot(5, triple));



//7'

const friends = ["nika", "giorgi", "luka", "saba"];

friends.forEach(name => {
    console.log("გამარჯობა " + name);
});