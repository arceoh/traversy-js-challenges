function diceGameSimulation(rolls) {
  const results = Array(rolls)
    .fill()
    .map(() => {
      const dice1 = diceRoll();
      const dice2 = diceRoll();

      const sum = dice1 + dice2;
      let gameResult = "";

      if (sum === 7 || sum === 11) {
        gameResult = "win";
      } else if (sum === 2 || sum === 3 || sum === 12) {
        gameResult = "lose";
      } else {
        gameResult = "roll again";
      }

      return { dice1: dice1, dice2: dice2, sum: sum, result: gameResult };
    });

  return results;
}

const diceRoll = () => {
  return Math.floor(Math.random() * 6 + 1);
};

module.exports = diceGameSimulation;
