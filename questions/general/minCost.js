const minCostForColors = (colors, neededTime) => {
  let end = 0;
  let total = 0;
  while (end < colors.length) {
    let start = end;
    let maxTime = neededTime[end];
    let groupSum = neededTime[end];
    while (start < colors.length && colors[start] === colors[start + 1]) {
      maxTime = Math.max(neededTime[start + 1], maxTime);
      groupSum += neededTime[start + 1];
      start++;
    }
    // considered bigger
    if (start > end) {
      total += groupSum - maxTime;
    }
    end = start + 1;
  }
  return total;
};

//console.log(minCostForColors('aabaa', [1, 3, 3, 4, 1]));

const maxPower = (s) => {
  let max = 1;
  let end = 0;
  while (end < s.length) {
    let start = end;
    let localCount = 1;
    while (start + 1 < s.length && s[start] === s[start + 1]) {
      localCount++;
      start++;
    }
    if (start > end) {
      // checking whether start is more than end index
      max = Math.max(max, localCount);
    }
    end = start + 1;
  }
  return max;
};

console.log(maxPower('abbcccddddeeeeedcba'));
