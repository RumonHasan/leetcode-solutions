const movePieces = (start, target) => {
  const canMoveCheck = (s, t) => {
    let lCount = 0;
    let rCount = 0;
    let lCountTwo = 0;
    let rCountTwo = 0;
    let newS = [];
    let newT = [];

    for (const char of s) {
      if (char === 'R') {
        newS.push(char);
        rCount++;
      }
      if (char === 'L') {
        newS.push(char);
        lCount++;
      }
    }
    for (const char of t) {
      if (char === 'R') {
        newT.push(char);
        rCountTwo++;
      }
      if (char === 'L') {
        newT.push(char);
        lCountTwo++;
      }
    }
    // base cases
    if (lCount !== lCountTwo && rCount !== rCountTwo) return false;
    if (newS.length !== newT.length) return false;
    // checking for similar order
    for (let index = 0; index < newS.length; index++) {
      if (newS[index] !== newT[index]) {
        return false;
      }
    }
    return true;
  };
  let canMove = canMoveCheck(start, target);
  if (!canMove) return canMove;

  // function to check for equivalency between lOne indices and rTwo indices;
  const finalIndicesCheck = (lOne, rOne, lTwo, rTwo) => {
    // for left indices check
    for (let i = 0; i < lOne.length; i++) {
      const lOneIndex = lOne[i];
      const lTwoIndex = lTwo[i];
      if (lOneIndex < lTwoIndex) return false;
    }

    // for right indices check
    for (let j = 0; j < rTwo.length; j++) {
      const rOneIndex = rOne[j];
      const rTwoIndex = rTwo[j];
      if (rTwoIndex < rOneIndex) return false;
    }

    return true;
  };

  // main iteration check
  let lOneIndices = [];
  let rOneIndices = [];
  let lTwoIndices = [];
  let rTwoIndices = [];

  for (let i = 0; i < start.length; i++) {
    const char = start[i];
    if (char === 'R') rOneIndices.push(i);
    if (char === 'L') lOneIndices.push(i);
  }

  for (let j = 0; j < target.length; j++) {
    const char = target[j];
    if (char === 'R') rTwoIndices.push(j);
    if (char === 'L') lTwoIndices.push(j);
  }

  let finalCheck = finalIndicesCheck(
    lOneIndices,
    rOneIndices,
    lTwoIndices,
    rTwoIndices
  );

  return finalCheck;
};

/**
 * Extractng the L and Rs then checking order similarity if condition is successful then
 * can proceed with the next checks for index placements
 * Central condition final return will be true with checking for false in every step
 */
console.log(movePieces('R_L_', '__LR'));
