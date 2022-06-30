// https://www.codewars.com/kata/6357825a00fba284e0189798/solutions

// The task
// You have to make a program capable of returning the sum of all the elements of a triangle with side of size n+1n+1n+1.

// The problem
// Your solution has to support 0≤n≤1060\leq n \leq 10^60≤n≤10
// 6
//  . Brute-forcing will not work!

// The definition
// A triangle element aija_{ij}a
// ij
// ​
//   where iii is the column and jjj is the row can be defined as aij=2j+i+1a_{ij}=2j + i + 1a
// ij
// ​
//  =2j+i+1 where 0≤j≤i≤n0\leq j\leq i\leq n0≤j≤i≤n

// Examples
// For n = 2:

// 1  2  3      \
//    4  5       \__ 1+2+3+4+5+7 sums to: 22
//       7       /
// sum(2) = 22

function getSum(n) {
  return (++n * (n + 1n) * (4n * n - 1n)) / 6n;
}
