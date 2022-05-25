// https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function bitCounting(n) {
  return n.toString(2).replace(/0/g, "").length;
}

// OR

let bitCounting = (n) => n.toString(2).split("0").join("").length;
