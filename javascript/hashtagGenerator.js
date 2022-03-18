// https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateHashtag2(str) {
  if (!str || str.length < 1) return false;

  var r =
    "#" +
    str
      .split(" ")
      .map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
      })
      .join("");
  return r.length > 140 ? false : r;
}

function generateHashtagMINE(str) {
  const alphaNumeric = str
    .split(" ")
    .map((word) => word.replace(/[^a-z0-9]/gi, ""));
  const wordArray = alphaNumeric
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  console.log(wordArray);
  if (wordArray.length < 1 || wordArray.length > 139) {
    return false;
  }
  return `#${wordArray}`;
}
