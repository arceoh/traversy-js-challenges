function removeDuplicates(arr) {
  const unique = new Set();

  arr.forEach((item) => unique.add(item));

  return Array.from(unique);
}

module.exports = removeDuplicates;
