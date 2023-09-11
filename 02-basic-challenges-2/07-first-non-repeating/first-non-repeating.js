function findFirstNonRepeatingCharacter(str) {
  const pairs = [];

  for (let i = 0; i < str.length; i = i + 2) {
    if (str.at(i) != str.at(i + 1)) {
      return str.at(i);
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
