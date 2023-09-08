const isValidParent = (s) => {
  const stackIntuitiveApproach = () => {
    let stack = [];
    let bracketMap = new Map([
      [')', '('],
      [']', '['],
      ['}', '{'],
    ]);
    let index = 0;
    while (index < s.length) {
      const bracket = s[index];
      if (bracket === '(' || bracket === '[' || bracket === '{') {
        stack.push(bracket);
      } else if (bracketMap.get(bracket) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        // returns false immediately when it does not find the corresponding opening bracket
        return false;
      }
      index++;
    }
    return stack.length === 0 ? true : false;
  };
};

//console.log(isValidParent('(])'));
