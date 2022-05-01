// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase();
};
