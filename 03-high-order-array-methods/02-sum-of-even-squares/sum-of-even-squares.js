function sumOfEvenSquares(arr) {
  const sum = arr.reduce((total, current) => {
    if (current % 2 === 0) {
      console.log("current: ", current);
      console.log("total: ", total);
      console.log("POW: ", Math.pow(current, 2));
      total = total + Math.pow(current, 2);
    }
    return total;
  }, 0);

  return sum;
}

module.exports = sumOfEvenSquares;
