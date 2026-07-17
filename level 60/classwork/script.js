const numbers = [10, -5, 20, -3, 30, -12];
const positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    positiveNumbers.push(numbers[i]);
  } else {

  }
}

console.log(positiveNumbers);