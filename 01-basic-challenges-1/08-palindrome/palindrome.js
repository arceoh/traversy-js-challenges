function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Z0-9]/gi, "");
  const revArr = cleanStr.split("").reverse();
  const revStr = revArr.join("");

  return revStr.toLowerCase() === cleanStr.toLowerCase();
}

module.exports = isPalindrome;
