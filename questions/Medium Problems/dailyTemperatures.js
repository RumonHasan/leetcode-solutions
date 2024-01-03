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
