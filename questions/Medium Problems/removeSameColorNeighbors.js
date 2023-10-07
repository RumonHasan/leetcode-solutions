const winnerOfGameSameColor = (colors) => {
  //   console.log(colors);
  const generalIntuitiveApproach = () => {
    let aliceScore = 0;
    let bobScore = 0;
    let aliceCounter = 0;
    let bobCounter = 0;
    let end = 0;
    while (end < colors.length) {
      if (colors[end] === 'A') {
        while (end < colors.length && colors[end] === 'A') {
          aliceCounter++;
          end++;
        }
        if (aliceCounter >= 3) {
          aliceScore += aliceCounter - 2;
        }
        aliceCounter = 0;
      } else {
        while (end < colors.length && colors[end] === 'B') {
          bobCounter++;
          end++;
        }
        if (bobCounter >= 3) {
          bobScore += bobCounter - 2;
        }
        bobCounter = 0;
      }
    }
    if (aliceScore === bobScore) return false;
    return aliceScore > bobScore ? true : false;
  };

  //   console.log(generalIntuitiveApproach());
};

//console.log(winnerOfGameSameColor('AAAABBBB'));
