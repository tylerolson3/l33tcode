// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function highestScoringWord(str) {
  const values = str
    .split(" ")
    .map((el) => el.split("").reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return str.split(" ")[values.indexOf(Math.max(...values))];
}
