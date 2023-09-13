function numberRange(start, end) {
  // Base
  if (start === end) return [start];

  // Recursion
  const numbers = numberRange(start, end - 1);
  numbers.push(end);
  return numbers;
}

module.exports = numberRange;
