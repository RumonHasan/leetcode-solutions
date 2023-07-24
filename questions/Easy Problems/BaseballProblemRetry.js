const baseBallProblemRetry = (operations) => {
  const add = '+';
  const cut = 'C';
  const double = 'D';
  let end = 0;
  let stack = [];
  while (end < operations.length) {
    let value = operations[end];
    if (value === cut) {
      stack.pop();
    }
    if (value === double) {
      stack.push(stack[stack.length - 1] * 2);
    }
    if (value === add) {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
    if (!isNaN(value)) {
      stack.push(Number(value));
    }
    end++;
  }
  if (stack.length === 0) return 0;
  return stack.reduce((a, b) => a + b);
};

//console.log(baseBallProblemRetry(['1', 'C']));
