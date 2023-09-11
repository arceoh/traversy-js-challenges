function fizzBuzzArray(num) {
  // % 3 "Fizz"
  // % 5 "Buzz"
  // % 3 & 5 "FizzBuzz"
  const arr = [];
  const numArr = Array.from({ length: num }, (_, i) => i + 1);

  numArr.forEach((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      arr.push("FizzBuzz");
      return;
    } else if (item % 3 === 0) {
      arr.push("Fizz");
      return;
    } else if (item % 5 === 0) {
      arr.push("Buzz");
      return;
    }
    arr.push(item);
  });

  return arr;
}

module.exports = fizzBuzzArray;
