// 1

const greeter = {
    name: "გიორგი",

    sayHello() {
        console.log(`გამარჯობა, ${this.name}!`);
    }
};

greeter.sayHello();



// 2

const calculator = {
    add(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3));      
console.log(calculator.multiply(5, 3));  


// 3

function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("ნიკა", 15);
const user2 = new User("გიორგი", 16);

console.log(user1);
console.log(user2);


// 4

function Car(brand, speed) {
    this.brand = brand;
    this.speed = speed;

    this.drive = function() {
        console.log(`${this.brand} მიდის ${this.speed} კმ/სთ სიჩქარით`);
    };
}

const car1 = new Car("BMW", 120);

car1.drive();


// 5

const bankAccount = {
    balance: 100,

    deposit(amount) {
        this.balance += amount;
    }
};

bankAccount.deposit(50);

console.log(bankAccount.balance); 


// 6

const counter = {
    count: 0,

    increment() {
        this.count++;
    },

    decrement() {
        this.count--;
    }
};

counter.increment();
counter.increment();

console.log(counter.count); 

counter.decrement();

console.log(counter.count); 


// 7

function Product(name, price) {
    this.name = name;
    this.price = price;

    this.getDiscountPrice = function(discountPercent) {
        return this.price - (this.price * discountPercent / 100);
    };
}

const product1 = new Product("Laptop", 1000);

console.log(product1.getDiscountPrice(20)); 


// 8

const stepCounter = {
    steps: 0,

    walk() {
        this.steps++;
        return this;
    },

    print() {
        console.log(this.steps);
        return this;
    }
};

stepCounter.walk().walk().print()


// 9

function Box(size) {
    this.size = size;
}

const box1 = new Box(10);
const box2 = new Box(10);

console.log(box1 === box2); 


// 10

const actions = {
    greet: () => "Hi!",
    wave: () => "*waves*"
};

const chosenAction = "greet";

console.log(actions[chosenAction]());