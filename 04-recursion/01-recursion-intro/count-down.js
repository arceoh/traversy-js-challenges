function countDown(num) {
  // base case
  if (num <= 0) {
    return "All done!";
  }

  // Recursion
  console.log(num);
  num--;
  countDown(num);
}

module.exports = countDown;
