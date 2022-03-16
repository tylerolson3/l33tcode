// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

function spinWords(string) {
  const splitWords = string.split(" ").map((item) => {
    return item.length > 4 ? item.split("").reverse().join("") : item;
  });
  return splitWords.join(" ");
}
