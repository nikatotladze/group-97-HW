// 1

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// 2

function printerError(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}


// 3

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}


// 4

function noSpace(x){
  return x.replace(/\s/g, '');
}