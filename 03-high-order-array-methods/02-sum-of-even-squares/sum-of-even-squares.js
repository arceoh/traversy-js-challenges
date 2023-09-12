function sumOfEvenSquares(arr) {
  const sum = arr.reduce((total, current) => {
    if (current % 2 === 0) {
      total = total + Math.pow(current, 2);
    }
    return total;
  }, 0);

  return sum;
}

module.exports = sumOfEvenSquares;
