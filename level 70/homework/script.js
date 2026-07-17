// 1

const laptop = {
    brand: "Apple",
    model: "MacBook",
    ram: 16
};

console.log(Object.keys(laptop));


// 2

const player = {
    name: "Leo",
    score: 99,
    level: 5
};

console.log(Object.values(player));


// 3

const country = {
    name: "Georgia",
    capital: "Tbilisi"
};

console.log(Object.entries(country));


// 4

const entries = [
    ["role", "admin"],
    ["status", "active"]
];

const user = Object.fromEntries(entries);

console.log(user);


// 5

const part1 = { a: 1 };
const part2 = { b: 2 };
const part3 = { c: 3 };

const combined = Object.assign({}, part1, part2, part3);

console.log(combined);


// 6


const secureData = {
    pin: 1122
};

Object.freeze(secureData);

secureData.pin = 5566;

console.log(secureData.pin); 
console.log(Object.isFrozen(secureData));


// 7

const profile = {
    username: "davit",
    likes: 10
};

Object.seal(profile);

profile.likes = 11;

profile.age = 20;

console.log(profile);
console.log(Object.isSealed(profile)); 


// 8

const product = {
    id: 1,
    title: "Phone"
};

console.log(Object.hasOwn(product, "price")); 
console.log(Object.hasOwn(product, "title")); 


// 9 

const settings = {
    theme: "dark"
};

Object.preventExtensions(settings);

delete settings.theme;

console.log(settings);
console.log(Object.isExtensible(settings)); 


// 10

const val1 = NaN;
const val2 = NaN;

console.log(val1 === val2);       
console.log(Object.is(val1, val2)); 