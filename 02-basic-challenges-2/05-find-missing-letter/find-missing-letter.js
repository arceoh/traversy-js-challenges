function findMissingLetter(arr) {
  if (arr.length === 0) return "";
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let missing = null;
  let current, next;
  for (let i = 0; i < sorted.length - 1; i++) {
    current = sorted[i].charCodeAt(0); // 97
    next = sorted[i + 1].charCodeAt(0); // 98

    if (missing === null && next - current != 1) {
      missing = String.fromCharCode(current + 1);
      break;
    }
  }

  return missing;
}

module.exports = findMissingLetter;
