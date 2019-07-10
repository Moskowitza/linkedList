const generate = require('./arrayGenerator');

const arr1 = generate(50).sort((a, b) => a - b);
const arr2 = generate(25).sort((a, b) => a - b);
console.log(arr1);
console.log(arr2);
function intersection_destructive(a, b) {
  const result = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      a.shift();
    } else if (a[0] > b[0]) {
      b.shift();
    } /* they're equal */ else {
      result.push(a.shift());
      b.shift();
    }
  }

  return result;
}

const result = intersection_destructive(arr1, arr2);
console.log(result);
