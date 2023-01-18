const removeDuplicates = (s, k) => {
  let string = s;
  // indexing approach
  let stack = [[string[0], 1]];
  let index = 1;
  while (index < string.length) {
    if (stack.length && string[index] === stack[stack.length - 1][0]) {
      stack[stack.length - 1][1] += 1;
    } else {
      stack.push([string[index], 1]);
    }
    // when equal to k
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
    index++;
  }
  // extracting the repeatitions
  let result = '';
  for (let index in stack) {
    let repeatCount = stack[index][1];
    let string = stack[index][0].repeat(repeatCount);
    result += string;
  }
  return result;
};

//console.log(removeDuplicates('deeedbbcccbdaa', 3));
