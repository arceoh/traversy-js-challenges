function titleCase(str) {
  const arr = str.toLowerCase().trim().split("");

  arr[0] = arr[0].toUpperCase();
  arr.forEach((char, index) => {
    if (char === " ") {
      arr[index + 1] = arr[index + 1].toUpperCase();
    }
  });

  let titleCaseStr = arr.join("");

  return titleCaseStr;
}

module.exports = titleCase;
