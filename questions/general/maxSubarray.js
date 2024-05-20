const maxSubarray = (nums) => {
  let end = 1;
  let stack = new Array(nums.length).fill(0);
  stack[0] = nums[0];
  // using the subarray approach
  while (end < nums.length) {
    const currNum = nums[end];
    stack[end] = Math.max(currNum, currNum + stack[end - 1]);
    end++;
  }
  return Math.max(...stack);
};

const kItemsWithMaximumSum = (numOnes, numZeros, numNegOnes, k) => {
  const formArray = (len, type) => {
    let stack = [];
    for (let i = 0; i < len; i++) {
      if (type === '0') {
        stack.push(0);
      } else if (type === '1') {
        stack.push(1);
      } else {
        stack.push(-1);
      }
    }
    return stack;
  };
  const array = [
    ...formArray(numOnes, '1'),
    ...formArray(numZeros, '0'),
    ...formArray(numNegOnes, '-1'),
  ].sort((a, b) => b - a);
  let totalSum = array[0];
  let counter = 1;
  if (counter === k) return totalSum;
  if (k === 0) return 0;
  for (let i = 1; i < array.length; i++) {
    totalSum += array[i];
    counter++;
    if (counter === k) break;
  }
  return totalSum;
};

// valid stack sequence
const validStackSequence = (pushed, popped) => {
  let stack = [];
  let commonLen = pushed.length + 1;
  let popIndex = 0;
  for (let i = 0; i < commonLen; i++) {
    while (
      popIndex < popped.length &&
      popped[popIndex] === stack[stack.length - 1]
    ) {
      stack.pop();
      popIndex++;
    }
    const currPush = pushed[i];
    stack.push(currPush);
  }
  for (let val of stack) {
    if (val !== undefined) {
      return false;
    }
  }
  return true;
};

// remove k duplicates
const removeDuplicates = (s, k) => {
  let stack = [[s[0], 1]];
  let end = 1;
  while (end < s.length) {
    if (stack.length && s[end] == stack[stack.length - 1][0]) {
      stack[stack.length - 1][1] = stack[stack.length - 1][1] + 1;
    } else {
      stack.push([s[end], 1]);
    }
    // popping logic when the consequtive repeatitions hit k number
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
    end++;
  }
  let result = '';
  for (let val of stack) {
    result += val[0].repeat(val[1]);
  }
  return result;
};

//console.log(removeDuplicates('deeedbbcccbdaa', 3));

//console.log(validStackSequence([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));

//console.log(kItemsWithMaximumSum(3, 2, 0, 4));
//console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
