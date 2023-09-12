function findMissingLetter(arr) {
  if (arr.length === 0) return "";
  const sorted = arr.sort((a, b) => a - b);

  const unicodes = sorted.map((char) => {
    return char.charCodeAt(0);
  });

  const missingUnicodePrev = unicodes.find((num, index) => {
    return unicodes[index + 1] - num != 1;
  });

  return String.fromCharCode(missingUnicodePrev + 1);
}

module.exports = findMissingLetter;
