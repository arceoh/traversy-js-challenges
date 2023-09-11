function areAllCharactersUnique(str) {
  const arr = str.split("");
  const mySet = {};
  arr.forEach((item) => (mySet[item] = 0));

  return Object.keys(mySet).length === arr.length;
}

module.exports = areAllCharactersUnique;
