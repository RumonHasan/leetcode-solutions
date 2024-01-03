const mostCompetitive = (nums, k) => {
  const intuitiveApproach = () => {
    let stack = [nums[0]];
    let numSize = nums.length;
    for (let index = 1; index < nums.length; index++) {
      while (
        nums[index] < stack[stack.length - 1] &&
        stack.length + numSize - index > k &&
        stack.length
      ) {
        stack.pop();
      }
      stack.push(nums[index]);
    }
    if (stack.length > k) {
      const diffLen = stack.length - k;
      for (let i = 0; i < diffLen; i++) {
        stack.pop();
      }
    }

    return stack;
  };
  // checks the remaining cancellations before hand before reducing from the stack
  const intuitiveStackApproach = () => {
    let stack = [nums[0]];
    let remaininCancel = nums.length - k;
    let end = 1;
    while (end < nums.length) {
      while (stack[stack.length - 1] > nums[end] && remaininCancel) {
        stack.pop();
        remaininCancel--;
      }
      stack.push(nums[end]);
      end++;
    }
    if (remaininCancel > 0) {
      for (let i = 0; i < remaininCancel; i++) {
        stack.pop();
      }
    }
    return stack;
  };

  //console.log(intuitiveStackApproach());
};

// console.log(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4));

const removeStarsFromStrings = (s) => {
  const easyIntuitiveApproach = () => {
    let stack = [s[0]];
    let end = 1;
    const star = '*';
    while (end < s.length) {
      const char = s[end];
      if (char === star) {
        stack.pop();
      } else {
        stack.push(char);
      }
      end++;
    }
    return stack.join('');
  };
};

//console.log(removeStarsFromStrings('leet**cod*e'));
