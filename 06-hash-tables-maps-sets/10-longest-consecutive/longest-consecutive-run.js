const {
  longestConsecutiveSequence,
  longestConsecutiveSequenceArr,
} = require("./longest-consecutive");

console.time("Warm Up");
const result = longestConsecutiveSequence([1000000, 4, 200, 1, 3, 2]);
const result2 = longestConsecutiveSequenceArr([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]);
console.timeEnd("Warm Up");

console.time("Sets");
const result3 = longestConsecutiveSequence(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result4 = longestConsecutiveSequence(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result5 = longestConsecutiveSequence(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result6 = longestConsecutiveSequence(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
console.log("Result 3: ", result3);
console.log("Result 4: ", result4);
console.log("Result 5: ", result5);
console.log("Result 6: ", result6);
console.timeEnd("Sets");

console.time("Arrs");
const result7 = longestConsecutiveSequenceArr(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result8 = longestConsecutiveSequenceArr(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result9 = longestConsecutiveSequenceArr(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
const result10 = longestConsecutiveSequenceArr(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000))
);
console.log("Result 7: ", result7);
console.log("Result 8: ", result8);
console.log("Result 9: ", result9);
console.log("Result 10: ", result10);
console.timeEnd("Arrs");
