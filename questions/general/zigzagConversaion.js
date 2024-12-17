const zig = (s, numRows) => {
  let result = new Array(numRows).fill('');
  let direction = false;
  let countIndex = 0;
  if (numRows === 1) return s;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (countIndex === numRows - 1) {
      direction = false;
    } else if (countIndex === 0) {
      direction = true;
    }
    result[countIndex] += curr; // adding characters either way
    countIndex = direction ? countIndex + 1 : countIndex - 1;
  }
  return result.join('');
};

//console.log(zig('AB', 1));

const maxScore = (s) => {
  let rightOne = new Array(s.length).fill(0);
  let leftZero = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === '0') {
      if (leftZero[i - 1]) {
        leftZero[i] = leftZero[i - 1] + 1;
      } else {
        leftZero[i] = 1;
      }
    } else {
      leftZero[i] = leftZero[i - 1] ? leftZero[i - 1] : leftZero[i];
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = s[i];
    if (curr === '1') {
      if (rightOne[i + 1]) {
        rightOne[i] = rightOne[i + 1] + 1;
      } else {
        rightOne[i] = 1;
      }
    } else {
      rightOne[i] = rightOne[i + 1] ? rightOne[i + 1] : rightOne[i];
    }
  }
  let maxScore = 0;
  for (let i = 0; i < s.length - 1; i++) {
    maxScore = Math.max(maxScore, rightOne[i + 1] + leftZero[i]);
  }
  return maxScore;
};

console.log(maxScore('00'));
