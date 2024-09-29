const maxEvenSplit = (finalSum) => {
  let stack = [];
  let sum = 0;
  let index = 2;
  if (finalSum % 2 !== 0) return [];

  while (sum <= finalSum) {
    stack.push(index);
    sum += index;
    index += 2;
    if (sum === finalSum) {
      return stack;
    }
  }
  const poppedVal = stack.pop();
  const lastSum = sum - poppedVal;
  sum -= poppedVal;
  const neededSum = finalSum - lastSum;
  // if it includes the last sum then pop again and recalculate
  if (stack.includes(neededSum)) {
    sum -= stack.pop();
    const newNeededSum = finalSum - sum;
    stack.push(newNeededSum);
  } else {
    // just push the original needed sum if its not included in the stack already
    stack.push(neededSum);
  }

  return stack;
};

console.log(maxEvenSplit(12));
