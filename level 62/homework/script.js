// 1

function arrayDiff(a, b) {
  if(b.length==0 || a.length==0)
    return a;
  for(let i =0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
      if(a[i]==b[j]){
        a.splice(i,1);
        i--;
      }
    }
  }
  return a;
}

// 2

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// 3

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}


// 4

function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

// 5

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}