const reverseParentheses = (s) => {
  // to be continues
  console.log(s);
  // find all the brackets
  const leftBracket = '(';
  const rightBracket = ')';
  let finalString = '';
  let leftBracCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === leftBracket) {
      leftBracCount++;
    }
    if (s[i] === rightBracket) {
      break;
    }
  }
  let totalBracketCount = leftBracCount * 2;
  console.log(leftBracCount, totalBracketCount);
  //main reversal;
};

//console.log(reverseParentheses('(u(love)i)'));
