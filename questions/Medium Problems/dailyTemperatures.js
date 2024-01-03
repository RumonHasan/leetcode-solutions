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

console.log(minLength('ABFCACDB'));
