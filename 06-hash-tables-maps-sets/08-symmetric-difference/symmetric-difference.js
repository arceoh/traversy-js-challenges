function symmetricDifference(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];
  const set = new Set([...arr1, ...arr2]);

  const diffArr = [];

  for (const item of set) {
    if (
      (arr1.indexOf(item) >= 0 && arr2.indexOf(item) === -1) ||
      (arr1.indexOf(item) === -1 && arr2.indexOf(item) >= 0)
    ) {
      diffArr.push(item);
    }
  }

  return diffArr;
}

module.exports = symmetricDifference;
