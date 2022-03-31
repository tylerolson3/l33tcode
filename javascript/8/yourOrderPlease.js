// https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function orderMINE(words) {
  if (words === "") {
    return "";
  }

  let answer = [];
  const wordsArray = words.split(" ");

  for (let i = 1; i <= words.length; i++) {
    let findNum = wordsArray.filter((word) => word.indexOf(i) !== -1);
    answer.push(findNum);
  }

  const finalAnswer = answer.slice(0, wordsArray.length).join(" ");
  return finalAnswer;
}
