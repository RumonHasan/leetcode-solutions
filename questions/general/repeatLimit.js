const removeDuplcates = (s, k) => {
  let stack = [[s[0], 1]];
  for (let i = 1; i < s.length; i++) {
    const currChar = s[i];
    if (stack.length && stack[stack.length - 1][0] === currChar) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([currChar, 1]);
    }
  }
  let result = '';
  for (let el of stack) {
    result += el[0].repeat(el[1]);
  }
  return result;
};

//console.log(removeDuplcates('deeedbbcccbdaa', 3));
