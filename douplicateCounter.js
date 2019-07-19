const arr1 = [
  'x',
  'a',
  'd',
  'd',
  'd',
  'd',
  'd',
  'd',
  'd',
  'd',
  'a',
  'a',
  'a',
  'a',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'a',
  'b',
  'c',
  'a',
  'm',
  'b',
  'c',
  'b',
  'c',
  'd',
  'e',
  'b',
  'c',
  'a',
  'b',
  'c',
  'b',
  'c',
  'd',
  'e',
  'f',
  'a',
  'b',
  'd',
  'e',
  'f',
  'a',
  'b',
];

const counter = arr => {
  const myMap = new Map();
  while (arr.length) {
    // if map does  have arr[arr.0] put count up
    if (!myMap.get(arr[0])) {
      myMap.set(`${arr[0]}`, 1);
      arr.shift();
    } else {
      const val = myMap.get(arr[0]);
      myMap.set(arr[0], val + 1);
      arr.shift();
    }
  }
  return [...myMap];
};
const map = counter(arr1);
const sortedByKeysMap = Array.from(map.values()).sort();
const sortedByValueMap = Array.from(map.values()).sort((a, b) => a[1] - b[1]);
// map.forEach((key, value) => console.log(`key ${key[0]} and value ${value}`));

console.log(map);
console.log(sortedByKeysMap);
console.log(sortedByValueMap);
