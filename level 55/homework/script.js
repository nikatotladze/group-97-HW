// 1


const canEnterParty = (isInList = false, hasGift = false) => {
    return isInList || hasGift;
};

console.log(canEnterParty(true, false));   
console.log(canEnterParty(false, true));   
console.log(canEnterParty());              


// 2


const getDiscount = function (cardType) {
    switch (cardType) {
        case "Gold":
            return 30;

        case "Silver":
            return 20;

        case "Bronze":
            return 10;

        default:
            return 0;
    }
};

console.log(getDiscount("Gold"));  


// 3


const userNumber = Number(prompt("შეიყვანე რიცხვი 1-დან 5-მდე:"));

const secretNumber = Math.floor(Math.random() * 5) + 1;

const compareNumbers = (userNumber, secretNumber) => {
    return userNumber > secretNumber
        ? "შენი რიცხვი მეტია"
        : "შენი რიცხვი მეტი არ არის";
};

console.log("ფარული რიცხვი:", secretNumber);
console.log(compareNumbers(userNumber, secretNumber));


// 4


const canDrive = (age, minimumAge = 18) => {
    return age >= minimumAge
        ? "შეგიძლია მანქანის მართვა"
        : "მანქანის მართვა არ შეგიძლია";
};

console.log(canDrive(20));
console.log(canDrive(16));


// 5


const checkBattery = function (battery, isCharging) {
    return battery < 20 && !isCharging
        ? "ენერგიის დამზოგავი ჩაირთო — წითელი ფონი"
        : "ტელეფონის მდგომარეობა ნორმალურია";
};

console.log(checkBattery(15, false));
console.log(checkBattery(15, true));


// 6


const predictMatch = () => {
    const result = Math.floor(Math.random() * 3);

    switch (result) {
        case 0:
            return "წაგება";

        case 1:
            return "ფრე";

        case 2:
            return "მოგება";
    }
};

console.log(predictMatch());


// 7


const bookRoom = (roomType = "standard") => {
    switch (roomType) {
        case "standard":
            return "Standard ოთახი — 100 ლარი";

        case "suite":
            return "Suite ოთახი — 250 ლარი";

        default:
            return "ასეთი ოთახის ტიპი არ არსებობს";
    }
};

console.log(bookRoom());
console.log(bookRoom("suite"));


// 8


const getGrade = function (score) {
    return score > 90
        ? "A"
        : score > 70
            ? "B"
            : "F";
};

console.log(getGrade(95)); 
console.log(getGrade(80)); 
console.log(getGrade(60));  

// 9


const total = Number(prompt("შეიყვანე კალათის ჯამი:"));
const coupon = prompt("შეიყვანე კუპონი:");

const calculateTotal = (total, coupon) => {
    if (total > 100 && coupon === "SALE") {
        return total - 10;
    } else {
        return total;
    }
};

console.log("საბოლოო თანხა:", calculateTotal(total, coupon));


// 10


const absoluteValue = (number) => {
    return number < 0 ? number * -1 : number;
};

console.log(absoluteValue(-25));  
console.log(absoluteValue(10));  