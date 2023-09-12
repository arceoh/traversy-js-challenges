function arraySum(arr) {
  // Base
  if (arr.length === 0) return 0;

  // Recursion
  return arr.at(0) + arraySum(arr.slice(1));
}

module.exports = arraySum;
