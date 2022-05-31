// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function buildTower(n) {
  let tower = [];
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    tower.push(spaces + "*".repeat(i * 2 - 1) + spaces);
  }
  return tower;
}
