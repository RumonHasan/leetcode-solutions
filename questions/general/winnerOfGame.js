const winnerOfGame = (colors) => {
  let end = 0;
  let aliceScore = 0;
  let bobScore = 0;
  while (end < colors.length) {
    let left = end;
    while (left < colors.length && colors[end] === colors[left]) {
      left++;
    }
    if (left > end) {
      const currPlayer = colors[end];
      if (left - end > 1) {
        const score = left - end - 2;
        if (currPlayer == 'A') {
          aliceScore += score;
        } else {
          bobScore += score;
        }
      }
      end = left;
    } else {
      end++;
    }
  }
  return aliceScore > bobScore ? true : false;
};

//console.log(winnerOfGame('AAABABB'));
