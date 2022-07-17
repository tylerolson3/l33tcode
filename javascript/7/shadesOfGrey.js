// https://www.codewars.com/kata/54d22119beeaaaf663000024/solutions

// Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// Examples:

// n =  1:    ["#010101"]
// n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]

function shadesOfGrey(n) {
  var shades = [];

  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ("0" + i.toString(16)).slice(-2);
    shades.push("#" + grey + grey + grey);
  }

  return shades;
}
