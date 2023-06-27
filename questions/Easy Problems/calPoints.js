const baseballCalPoints = (operations) => {
  let stack = [];
  let endIndex = 0;
  while (endIndex < operations.length) {
    if (operations[endIndex] === 'C') {
      stack.pop();
    } else if (operations[endIndex] === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (operations[endIndex] === '+') {
      stack.push(
        Number(stack[stack.length - 1]) + Number(stack[stack.length - 2])
      );
    } else {
      stack.push(operations[endIndex]);
    }
    endIndex++;
  }
  // edge case for if the stack has no value as everything is popped out
  if (stack.length === 0) return 0;
  for (let index in stack) {
    stack[index] = Number(stack[index]);
  }
  return stack.reduce((acc, currentEl) => acc + currentEl);
};

//console.log(baseballCalPoints(['1', 'C']));
