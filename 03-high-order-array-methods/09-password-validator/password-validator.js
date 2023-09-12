function validatePassword(str) {
  if (str.legth < 8) return false;

  const arr = str.split("");
  const hasDigits = arr.some((char) => Number.isInteger(parseInt(char)));
  if (!hasDigits) return false;

  const hasUpperCase = arr.some((char) => char == char.toUpperCase());
  if (!hasUpperCase) return false;

  const hasLowerCase = arr.some((char) => char == char.toLowerCase());
  if (!hasLowerCase) return false;

  return hasDigits && hasLowerCase && hasUpperCase;
}

module.exports = validatePassword;
