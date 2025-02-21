const dailyTemperatures = (temperatures) => {
  let stack = []; // will contain the indices
  let result = new Array(temperatures.length).fill(0);

  for (let index = temperatures.length - 1; index >= 0; index--) {
    const currTemperature = temperatures[index];
    // remove colder temperatures
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= currTemperature
    ) {
      stack.pop();
    }
    if (stack.length) {
      result[index] = stack[stack.length - 1] - index;
    }
    stack.push(index);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
