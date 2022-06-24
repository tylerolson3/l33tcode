// https://www.codewars.com/kata/5413759479ba273f8100003d/solutions

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin functionalities are deactivated, you CANNOT use reverse())

const reverse = function (array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};
