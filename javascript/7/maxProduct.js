// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

function adjacentElementsProduct(array) {
  let ans = [];
  for (let i = 0; i < array.length - 1; i++) {
    ans.push(array[i] * array[i + 1]);
  }
  return Math.max(...ans);
}
