const isValidIPv4 = (str) => {
  // x . x . x . x
  // x is called an octet
  // octet must be a decimal value between 0 and 255
  // must contain three periods and four octets

  const arr = str.split(".");

  if (arr.length != 4) return false;

  const allValid = arr.every((octet) => {
    return octet >= 0 && octet <= 255 && octet.at(0) != 0;
  });

  return allValid;
};

module.exports = isValidIPv4;
