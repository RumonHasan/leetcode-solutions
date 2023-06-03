const removeDuplicates = (s, k) => {
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    let letter = s[index];
    if (stack.length === 0) {
      let initialVal = [s[index], 1];
      stack.push(initialVal);
    } else {
      if (stack[stack.length - 1][0] === letter) {
        let prevVal = stack[stack.length - 1][1];
        stack[stack.length - 1] = [letter, prevVal + 1];
      } else {
        stack.push([s[index], 1]);
      }
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return '';
  } else {
    let result = '';
    for (let index in stack) {
      result += stack[index][0].repeat(stack[index][1]);
    }
    return result;
  }
};

//console.log(removeDuplicates('deeedbbcccbdaa', 3));
