function longestConsecutiveSequence(arr) {
  const mySet = new Set(arr);
  let maxConsecutiveCount = 1;

  for (const num of mySet) {
    if (mySet.has(num + 1)) {
      let currentNum = num + 1;
      let currentConsecutiveCount = 2; // two numbers in a row
      while (mySet.has(currentNum + 1)) {
        currentNum++;
        currentConsecutiveCount++;
      }
      maxConsecutiveCount = Math.max(
        maxConsecutiveCount,
        currentConsecutiveCount
      );
    }
  }
  return maxConsecutiveCount;
}
function longestConsecutiveSequenceArr(arr) {
  const sortedSet = new Set(arr.toSorted((a, b) => a - b));
  const sortedArr = Array.from(sortedSet);
  let maxConsecutiveCount = 1;

  let currentConsecutiveCount = 1;
  sortedArr.forEach((num, index) => {
    if (index === 0) {
      return;
    }
    if (num - sortedArr[index - 1] === 1) {
      currentConsecutiveCount = currentConsecutiveCount + 1;
      if (currentConsecutiveCount >= maxConsecutiveCount) {
        maxConsecutiveCount = currentConsecutiveCount;
      }
    } else {
      currentConsecutiveCount = 1;
    }
  });

  return maxConsecutiveCount;
}

module.exports = { longestConsecutiveSequenceArr, longestConsecutiveSequence };
