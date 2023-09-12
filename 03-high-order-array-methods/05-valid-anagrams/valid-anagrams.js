function validAnagrams(word1, word2) {
  const arr1 = word1.split("").sort();
  const arr2 = word2.split("").sort();

  if (arr1.length != arr2.length) return false;

  const str1 = arr1.join("");
  const str2 = arr2.join("");
  if (str1 != str2) return false;

  return true;
}

module.exports = validAnagrams;
