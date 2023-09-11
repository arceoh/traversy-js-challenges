function arrayIntersection(arr1, arr2) {
  const common = [];

  let longerArr, shorterArr;

  if (arr1.length != arr2.length) {
    longerArr = arr1.length > arr2.length ? [...arr1] : [...arr2];
    shorterArr = arr1.length < arr2.length ? [...arr1] : [...arr2];
  } else {
    longerArr = [...arr1];
    shorterArr = [...arr2];
  }

  shorterArr.forEach((item) => {
    if (longerArr.indexOf(item) != -1) {
      common.push(item);
    }
  });

  return common;
}

module.exports = arrayIntersection;
