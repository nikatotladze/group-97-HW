# 1

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num

# 2

def disemvowel(string_):
    vowels = "aeiouAEIOU"
    return ''.join(char for char in string_ if char not in vowels)

# 3

var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

# 4

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

# 5

function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}