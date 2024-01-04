const dailyTemperatures = (temperatures) => {
  const intuitiveApproach = () => {
    let stack = [];
    let end = 0;
    let result = new Array(temperatures.length).fill(0);
    while (end < temperatures.length) {
      if (end === 0) {
        stack.push([temperatures[end], end]);
        end++;
        continue;
      }
      // when it increases then reduce the stack elements and replace the original index with the difference in iteration
      while (stack.length && temperatures[end] > stack[stack.length - 1][0]) {
        const stackEl = stack.pop();
        result[stackEl[1]] = Math.abs(end - stackEl[1]);
      }
      stack.push([temperatures[end], end]);
      end++;
    }
    return result;
  };
};

//console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

const minLength = (s) => {
  console.log(s);
  const first = () => {
    let stack = [];
    let end = 0;
    while (end < s.length) {
      if (end === 0) {
        stack.push(s[end]);
        end++;
        continue;
      }
      // check condition
      if (
        (s[end] === 'B' && stack[stack.length - 1] === 'A') ||
        (s[end] === 'D' && stack[stack.length - 1] === 'C' && stack.length)
      ) {
        stack.pop();
      } else {
        stack.push(s[end]);
      }
      end++;
    }

    return stack.length;
  };

  const secondDoublePop = () => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      const currChar = s[i];
      if (i === 0) {
        stack.push(currChar);
        continue;
      }
      const stackLastChar = stack[stack.length - 1];
      if (
        (currChar === 'B' && stackLastChar === 'A') ||
        (currChar === 'D' && stackLastChar === 'C')
      ) {
        stack.pop();
      } else {
        stack.push(currChar);
      }
    }
    return stack.length;
  };

  console.log(secondDoublePop());
};

// console.log(minLength('ABFCACDB'));

const sumCounts = (nums) => {
  const basicBruteForceApproach = () => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      let set = new Set();
      for (let j = i; j < nums.length; j++) {
        set.add(nums[j]);
        const setSize = set.size;
        total += Math.pow(setSize, 2);
      }
    }
    return total;
  };
};

console.log(sumCounts([1, 2, 1]));

const findBigram = (text, first, second) => {
  const array = text.split(' ');
  let collection = [];
  let localWindow = [];
  for (let i = 0; i < 3; i++) {
    localWindow.push(array[i]);
  }
  if (localWindow[0] == first && localWindow[1] == second) {
    collection.push(localWindow[2]);
  }
  let end = 3;
  while (end < array.length) {
    localWindow.shift();
    localWindow.push(array[end]);
    if (localWindow[0] == first && localWindow[1] == second) {
      collection.push(localWindow[localWindow.length - 1]);
    }
    end++;
  }
  return collection;
};

// console.log(
//   findBigram('alice is a good girl she is a good student', 'a', 'good')
// );

const validMountainArray = (arr) => {
  let end = 0;
  while (end < arr.length) {
    if (arr[end] < arr[end + 1]) {
      let checkOne = false;
      let checkTwo = false;
      while (end < arr.length && arr[end] < arr[end + 1]) {
        checkOne = true;
        end++;
      }
      while (end < arr.length && arr[end] > arr[end + 1]) {
        checkTwo = true;
        end++;
      }
      if (end !== arr.length - 1) return false;
      if (checkOne && checkTwo) return true;
    } else {
      return false;
    }
  }
};

//console.log(validMountainArray([3, 7, 6, 4, 3, 0, 1, 0]));
