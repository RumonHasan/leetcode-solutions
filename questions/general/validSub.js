const validSub = (s) => {
  let stack = [];
  for (let char of s) {
    stack.push(char);
    if (stack.length && stack[stack.length - 1] === 'c') {
      if (stack[stack.length - 2] === 'b' && stack[stack.length - 3] === 'a') {
        for (let i = 0; i < 3; i++) {
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0;
};

//console.log(validSub("abccba"));
