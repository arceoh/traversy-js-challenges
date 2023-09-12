// function fibonacci(num) {
//   // Base case
//   if (num < 2) return num;

//   // Recursive case
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

function fibonacci(num) {
  const memo = {};

  if (num === 0) return 0;
  if (num === 1) return 1;

  function checkMemo(num) {
    if (num in memo) return memo[num];
    if (num < 3) return 1;
    return (memo[num] = checkMemo(num - 1) + checkMemo(num - 2));
  }

  return checkMemo(num);
}

module.exports = fibonacci;
