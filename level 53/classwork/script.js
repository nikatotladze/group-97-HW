let totalCart = 120;

let finalPrice = totalCart >= 100
  ? totalCart - 20
  : totalCart;

console.log(finalPrice);