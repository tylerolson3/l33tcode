// https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript

// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Examples:
// friend(["Ryan", "Kieran", "Jason", "Yous"])   //   ["Ryan", "Yous"]

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
