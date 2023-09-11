function findMissingNumber(arr) {
  const sorted = arr.sort((a, b) => a - b);
  let missing = -1;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (missing === -1 && sorted[i] != sorted[i + 1] - 1) {
      missing = sorted[i] + 1;
      break;
    }
  }

  return missing;
}

module.exports = findMissingNumber;
