const buildArray = (target, n) => {
  let stack = [];
  let end = 1;
  let targetIndex = 0;
  let result = [];
  while (end <= n) {
    const currNum = end;
    stack.push(currNum);
    result.push('Push');
    if (stack[stack.length - 1] == target[target.length - 1]) break;
    if (stack[stack.length - 1] !== target[targetIndex]) {
      stack.pop();
      result.push('Pop');
      targetIndex--; // readjusting target index to match the old target
    }
    targetIndex++;
    end++;
  }
  return result;
};

//console.log(buildArray([1, 3], 3));
