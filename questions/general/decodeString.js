const decodeString = (s) => {
  let stack = []; // stack will contain the list of current context in order to update the result
  let currentRepeatCount = 0; // contains the number for the current count
  let localResult = ''; // will contain the result of the current context till updated to stack
  const close = ']';
  const open = '[';

  // if the string chars are number then split them based on number
  let sArray = [];
  let numString = '';
  let end = 0;
  while (end < s.length) {
    if (!isNaN(s[end])) {
      numString += s[end];
    } else {
      if (numString !== '') {
        sArray.push(Number(numString));
        numString = '';
      }
      sArray.push(s[end]);
    }
    end++;
  }

  for (let i = 0; i < sArray.length; i++) {
    const currChar = sArray[i];

    if (!isNaN(currChar)) {
      currentRepeatCount = Number(currChar);
      continue;
    }
    // if its open bracket then update the stack with the current context
    if (currChar === open) {
      stack.push({
        result: localResult,
        currentRepeatCount,
      });
      currentRepeatCount = 0;
      localResult = '';
      continue;
    }

    // check if its a letter or not
    if (isNaN(currChar) && currChar !== open && currChar !== close) {
      localResult += currChar; // simply add to the existing result
      continue;
    }

    // when it closes add the popping logic
    if (currChar === close) {
      const { result, currentRepeatCount: repeatCount } = stack.pop();
      const repeatedString = result + localResult.repeat(repeatCount); // repeated string with the current repeat count string
      localResult = repeatedString; // update the current result when the brackets start unfolding
    }
  }

  return localResult;
};

console.log(decodeString('100[leetcode]'));
