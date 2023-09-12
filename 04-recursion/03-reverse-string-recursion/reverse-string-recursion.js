function reverseString(str) {
  // Base Case
  if (str === "") {
    return "";
  }
  // Recursion
  return reverseString(str.substring(1)) + str.at(0);
}

module.exports = reverseString;
