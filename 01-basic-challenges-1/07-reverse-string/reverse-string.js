function reverseString(str) {
  const arr = str.split("");
  const reversedArr = arr.reverse();
  return reversedArr.join("");
}

module.exports = reverseString;
