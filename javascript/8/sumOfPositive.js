// https://www.codewars.com/kata/5715eaedb436cf5606000381

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

function fakeBin(x) {
  return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");
}

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((a, b) => a + b);
}

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

// function positiveSum(arr) {
//     if (arr.length > 0) {
//       const posNums = arr.filter((num) => num > 0);
//       if (posNums.length > 0) {
//         return posNums.reduce((a, b) => a + b);
//       } else {
//         return 0;
//       }
//     } else if (arr.length < 1) {
//       return 0;
//     }
//   }
