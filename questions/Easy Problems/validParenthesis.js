const validParenthesis = (s) => {
  // optimized stack approach using maps
  let bracketMap = new Map([
    [']', '['],
    [')', '('],
    ['}', '{'],
  ]);
  let bracketStack = [];
  for (let index = 0; index < s.length; index++) {
    if (
      bracketStack.length &&
      bracketStack[bracketStack.length - 1] === bracketMap.get(s[index])
    ) {
      bracketStack.pop();
    } else {
      bracketStack.push(s[index]);
    }
  }
  if (bracketStack.length === 0) {
    return true;
  } else {
    return false;
  }
};

//console.log(validParenthesis('()[]{}'));
