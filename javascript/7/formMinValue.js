// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/solutions/javascript

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}
