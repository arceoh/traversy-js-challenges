function highestScoringWord(str) {
  const wordArr = str.split(" ");
  let highScore = 0;
  let highScoreWord = "";

  wordArr.forEach((word) => {
    let score = 0;

    const charArr = word.split("");
    charArr.forEach((char) => {
      score = score + char.charCodeAt(0) - 96;
    });

    if (score >= highScore) {
      highScore = score;
      highScoreWord = word;
    }
  });
  return highScoreWord;
}

module.exports = highestScoringWord;
