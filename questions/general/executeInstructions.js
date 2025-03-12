const executeInstructions = (n, startPos, s) => {
  let array = new Array(s.length).fill(0);
  let ROW = n;

  for (let i = 0; i < s.length; i++) {
    let moveCounter = 0;
    let posStart = [...startPos]; // to make sure teh original array is not modified
    // starting from starting pos to check for the remaining
    for (let j = i; j < s.length; j++) {
      const currStartingDirection = s[j];
      if (currStartingDirection == 'R' && posStart[1] + 1 < ROW) {
        posStart[1] += 1;
        moveCounter++;
      } else if (currStartingDirection == 'L' && posStart[1] - 1 >= 0) {
        posStart[1] -= 1;
        moveCounter++;
      } else if (currStartingDirection == 'D' && posStart[0] + 1 < ROW) {
        posStart[0] += 1;
        moveCounter++;
      } else if (currStartingDirection == 'U' && posStart[0] - 1 >= 0) {
        posStart[0] -= 1;
        moveCounter++;
      } else {
        break;
      }
    }
    array[i] = moveCounter;
  }

  return array;
};

console.log(executeInstructions(3, [0, 1], 'RRDDLU'));
