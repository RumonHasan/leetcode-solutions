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
