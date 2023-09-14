function twoSum(arr, sum) {
  const result = [];

  for (const [outerIndex, OuterNum] of arr.entries()) {
    for (const [innerIndex, innerNum] of arr.entries()) {
      if (outerIndex === innerIndex) continue;
      if (OuterNum + innerNum === sum) {
        result.push(outerIndex, innerIndex);
        return result;
      }
    }
  }

  return result;
}

module.exports = twoSum;
