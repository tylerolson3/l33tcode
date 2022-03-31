// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

// Define a function that takes one integer argument and returns TRUE or FALSE depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

/// Assume only integers will be given.  You can NOT assume the integer will be positive or it may be 0

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// below is NOT optimized and times out on codewars

function isPrime2(num) {
  // return false on zero, one and negative numbers
  if (num < 2) {
    return false;
  }

  // one, two, & three are prime, so return true
  if (num > 1 && num < 4) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
