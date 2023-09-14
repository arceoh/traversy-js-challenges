function anagramGrouping(arr) {
  const groups = new Map();
  arr.map((word) => {
    const sortedWord = word.split("").sort().join("");
    if (groups.has(sortedWord)) {
      groups.set(sortedWord, [...groups.get(sortedWord), word]);
    } else {
      groups.set(sortedWord, [word]);
    }
  });

  const result = [];
  for (const [key, value] of groups) {
    result.push(value);
  }

  return result;
}

module.exports = anagramGrouping;
