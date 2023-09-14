function wordFrequencyCounter(str) {
  if (str === "") return new Map();

  const arr = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(" ");

  const wordCount = new Map();

  arr.map((word) => {
    if (!wordCount.has(word)) {
      wordCount.set(word, 1);
    } else {
      wordCount.set(word, wordCount.get(word) + 1);
    }
  });

  return wordCount;
}

module.exports = wordFrequencyCounter;
