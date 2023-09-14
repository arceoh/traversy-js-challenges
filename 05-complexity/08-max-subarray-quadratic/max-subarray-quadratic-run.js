const maxSubarraySum = require("./max-subarray-quadratic");

const arr = [2, 5, 3, 1, 11, 7, 6, 4];
const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];

const result = maxSubarraySum(arr, 3);
console.log(result);

console.log("-----");

const result2 = maxSubarraySum(arr2, 4);
console.log(result2);
