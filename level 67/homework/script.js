// 1

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

// 2

function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}

// 3

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// 4

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}

// 5

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
