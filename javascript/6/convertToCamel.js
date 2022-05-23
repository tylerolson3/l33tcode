// https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .map((word, i) =>
      i > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join("");
}
