let prices = [10, 20, 30, 40, 50];

let total = 0;

prices.forEach(function(price) {
    let newPrice = price * 1.18; 

    console.log("ახალი ფასი:", newPrice);

    total += newPrice; 
});

console.log("ყველა პროდუქტის ჯამური ღირებულება:", total);