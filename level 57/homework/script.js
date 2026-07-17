// 1

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// 2

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

// 3

function findOutlier(integers){
  var res;
  var odd = integers.filter(function(e){
    if(e%2 != 0){
      res = e;
    };
    return e%2 == 0;
  });
  
  return odd.length>1 ? res : odd.pop();
}

// 4

function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}

// 5

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}