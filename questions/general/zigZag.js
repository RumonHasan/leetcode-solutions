const zigZagConversions = (s, numRows) => {
  // you have to track the diagonal approach
  const diagonalTrackingApproach = () => {
    let result = new Array(numRows).fill('');
    let direction = false;
    let countIndex = 0;
    if (numRows === 1) return s;
    for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      result[countIndex] += curr; // adding characters either way
      if (countIndex === numRows - 1) {
        direction = false;
      } else if (countIndex === 0) {
        direction = true;
      }
      countIndex = direction ? countIndex + 1 : countIndex - 1;
    }
    return result.join('');
  };

  // diagonal jump formula approach
  const diagonalJumpFormulaApproach = (s, numRows) => {
    let result = '';
    let jumpCycle = (numRows - 1) * 2; // calculates the general jump cycle from starting to the next after crossing diag
    if (numRows === 1 || s.length <= numRows) {
      return s;
    }

    for (let i = 0; i < numRows; i++) {
      // main loop will loop through the number of rows
      for (let j = i; j < s.length; j += jumpCycle) {
        // j increments by jump cycle for 0 and ending index
        result += s[j]; // appending for 0th index and s.length - 1 index since its a full cycle

        if (i > 0 && i < numRows - 1) {
          // targetting the mid indices only
          const diagPositionJump = jumpCycle - 2 * i; // has to relative to i
          const diagPosition = j + diagPositionJump;
          if (diagPosition < s.length) {
            result += s[diagPosition];
          }
        }
      }
    }
    return result;
  };

  diagonalJumpFormulaApproach(s, numRows);
};

console.log(zigZagConversions('PAYPALISHIRING', 4));
