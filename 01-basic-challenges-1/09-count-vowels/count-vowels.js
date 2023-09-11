function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const arr = str.toLowerCase().split("");

  arr.forEach((char) => {
    if (vowels.indexOf(char) != -1) {
      count++;
    }
  });

  return count;
}

module.exports = countVowels;
