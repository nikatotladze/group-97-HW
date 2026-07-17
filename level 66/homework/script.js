// 1

const users = ["გიორგი", "ნიკა", "სალომე"];

users.forEach(function(name) {
    console.log(`მომხმარებელი: ${name}`);
});


// 2

const salaries = [800, 1200, 1500, 2000];

const newSalaries = salaries.map(function(salary) {
    return salary + 150;
});

console.log(newSalaries);


// 3

const ages = [14, 22, 17, 18, 30, 15];

const adults = ages.filter(function(age) {
    return age >= 18;
});

console.log(adults);


// 4

const colors = ["Blue", "Green", "Red", "Yellow"];

const redIndex = colors.findIndex(function(color) {
    return color === "Red";
});

console.log(redIndex);


// 5

const coins = [10, 5, 20, 2, 5];

const totalMoney = coins.reduce(function(total, coin) {
    return total + coin;
}, 50);

console.log(totalMoney);


// 6

const balances = [120, -5, 450, 0, 89];

const hasNegativeBalance = balances.some(function(balance) {
    return balance < 0;
});

console.log(hasNegativeBalance);


// 7

const passwordLengths = [8, 12, 4, 6, 9];

const areAllPasswordsSafe = passwordLengths.every(function(length) {
    return length >= 6;
});

console.log(areAllPasswordsSafe);


// 8

const spentMoney = [20, 150, 40, 300, 80, 500];

const cashback = spentMoney
    .filter(function(amount) {
        return amount > 100;
    })
    .map(function(amount) {
        return amount * 0.1;
    });

console.log(cashback);const spentMoney = [20, 150, 40, 300, 80, 500];

const cashback = spentMoney
    .filter(function(amount) {
        return amount > 100;
    })
    .map(function(amount) {
        return amount * 0.1;
    });

console.log(cashback);


// 9

const dishes = ["ხაჭაპური", "ლობიანი", "ხინკალი", "მწვადი"];

const menu = dishes
    .filter(function(dish) {
        return dish !== "ლობიანი";
    })
    .sort()
    .join(" - ");

console.log(menu);


// 10


const balances = [-10, 50, -25, 100, 0, -5];

const total = balances
    .map(function(balance) {
        if (balance < 0) {
            return 0;
        }

        return balance;
    })
    .filter(function(balance) {
        return balance > 0;
    })
    .reduce(function(sum, balance) {
        return sum + balance;
    }, 0);

console.log(total);