function whileAddition(n) {
  let sum = 0; /* sum is in the function scoped */
  let x = n;
  if (n < 2) {
    return n;
  }
  while (x > 0) {
    sum += x;
    x -= 1;
  }
  return sum;
}
// console.log(whileAddition(4));

let sum2 = 0; /* sum is in the global scope */
function simpleRecursion(n) {
  // If n is greater than zero
  if (n > 0) {
    sum2 += n;
    simpleRecursion(n - 1);
  }
  return sum2;
}

// console.log(simpleRecursion(4));

// Function to return the Fibonacci Sequence to a given number of places (n)
function fibonacci(n) {
  const answer = []; /* Array to hold result scoped here */
  // Loop to pass the desired place into the recursive function to determine the Fibonacci Number at that position
  for (let i = 1; i < n + 1; i += 1) {
    // pushes the calculated Fibonacci Number into the array
    answer.push(recursive(i));
  }
  // Returns the answer
  return answer;
}

// Function which takes an integer as an argument (i) which is a place in the Fibonacci Sequence
function recursive(i) {
  console.log(i);
  // Triggered when calculating the 1st and 0th places, simply returns 1 for the 1st position and 0 for the 0th
  if (i < 2) {
    console.log('XXX');
    return i;
  }
  // Run recursive on the two places before the current one
  return recursive(i - 1) + recursive(i - 2);
}
console.log(fibonacci(7));
