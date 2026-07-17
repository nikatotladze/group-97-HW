const car = {
    brand: "BMW",
    color: "black"
};


Object.seal(car);


car.color = "white";

car.price = 50000;

console.log(Object.isSealed(car));

console.log(car);