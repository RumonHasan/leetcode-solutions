const reverseParentheses = (s) => {
  let stack = [];
  let end = 0;
  while (end < s.length) {
    const currChar = s[end];
    // if its closing then check for the while loop
    if (currChar === ')') {
      let localArray = [];
      while (stack.length && stack[stack.length - 1] !== '(') {
        localArray.push(stack[stack.length - 1]);
        console.log(stack[stack.length - 1]);
        stack.pop();
      }
      stack.pop(); // pops the last bracket
      for (let char of localArray) {
        stack.push(char);
      }
    } else {
      stack.push(currChar);
    }
    end++;
  }

  return stack.join('');
};

//console.log(reverseParentheses('(u(love)i)'));
