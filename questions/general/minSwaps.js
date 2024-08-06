const minSwaps = (s) => {
  let extraClose = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const currBracket = s[i];
    if (currBracket == ']') {
      extraClose++;
    } else {
      extraClose -= 1;
    }
    max = Math.max(max, extraClose);
  }
  if (max === 0) return 0;
  console.log(extraClose, max);
  const minSwaps = Math.floor((max + 1) / 2);
  return minSwaps;
};

// console.log(
//   minSwaps(
//     '[[][[[[][][[[[]]][][]]]]][[][[][][]][[[[]]][[]][[]][[]]]]]]]][]][]]][[]][[[[[[][[]][[[][]][[]]]['
//   )
// );

const minAddToMakeValid = (s) => {
  let openCount = 0;
  let extraClose = 0;
  for (let i = 0; i < s.length; i++) {
    const currBracket = s[i];
    if (currBracket == '(') {
      openCount++;
    } else if (currBracket == ')' && openCount > 0) {
      // stops at 0 then adds the extra close space
      openCount--;
    } else {
      extraClose++;
    }
  }
  return openCount + extraClose;
};

//console.log(minAddToMakeValid('()))(('));
