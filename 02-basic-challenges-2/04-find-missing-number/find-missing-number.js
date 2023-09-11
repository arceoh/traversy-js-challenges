function findMissingNumber(arr) {
  if (arr.length === 0) return 1;

  const copy = [...arr];
  const sorted = copy.sort((a, b) => a - b);

  console.log(sorted);

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
