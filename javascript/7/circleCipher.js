// https://www.codewars.com/kata/634d0723075de3f97a9eb604/solutions

// Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

// If we read the result from left to right, we get csordaew.

// Decoding is the same process in reverse. If we decode csordaew, we get codewars.

// Examples:
// encode "codewars" -> "csordaew"
// decode "csordaew" -> "codewars"
// encode "white" -> "wehti"
// decode "wehti" -> "white"

const encode = (s) => {
  const len = s.length;
  const half = (len / 2) | 0;
  const res = [];
  for (let i = 0; i < half; ++i) {
    res.push(s[i], s[len - i - 1]);
  }
  if (len % 2) res.push(s[half]);
  return res.join("");
};

const decode = (s) => {
  const res = [[], []];
  for (let i = 0; i < s.length; ++i) {
    res[i % 2].push(s[i]);
  }
  return [...res[0], ...res[1].reverse()].join("");
};
