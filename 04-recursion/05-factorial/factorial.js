function factorial(num) {
  // base case
  if (num === 0) return 1;
  if (num === 1) return 1;

  // recursion
  return num * factorial(num - 1);
}

module.exports = factorial;
