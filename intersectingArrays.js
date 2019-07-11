const generate = require('./arrayGenerator');

const arr1 = generate(50).sort((a, b) => a - b);
const arr2 = generate(25).sort((a, b) => a - b);

function intersectionDestructive(arr1, arr2) {
  const result = []; /* Our New Array */
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      arr1.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else {
      result.push(arr1[0]);
      arr1.shift();
      arr2.shift();
    }
  }

  return result;
}

const arr3 = intersectionDestructive(arr1, arr2);
console.log(arr3);
