function countOccurrences(haystack, needle) {
  const arr = haystack.split("");

  const count = arr.reduce((accumulator, char) => {
    if (char === needle) {
      accumulator = accumulator + 1;
    }
    return accumulator;
  }, 0);

  return count;
}

module.exports = countOccurrences;
