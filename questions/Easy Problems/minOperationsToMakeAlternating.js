const minOperationsToAlternating = (s) => {
  let sArray = s.split('');
  let zeroDp = new Array(s.length).fill(0);
  let oneDp = new Array(s.length).fill(0);
  let check = false;
  for (let index in sArray) {
    if (!check) {
      zeroDp[index] = 0;
      oneDp[index] = 1;
    } else if (check) {
      zeroDp[index] = 1;
      oneDp[index] = 0;
    }
    check = !check;
  }
  let zeroChangeCounter = 0;
  let oneChangeCounter = 0;

  for (let index in sArray) {
    if (sArray[index] == zeroDp[index]) {
      oneChangeCounter++;
    } else if (sArray[index] == oneDp[index]) {
      zeroChangeCounter++;
    }
  }
  return Math.min(zeroChangeCounter, oneChangeCounter);
};

// console.log(minOperationsToAlternating('0100'));

// 010101
// 101010
// 01010
// 10101
