const longestCons = (nums) => {
  let set = new Set([...nums]);
  let max = 0;
  for (let currNum of nums) {
    let nextNum = currNum + 1;
    let count = 1;
    if (!set.has(nextNum)) {
      let leftNum = currNum - 1;
      while (set.has(leftNum)) {
        leftNum -= 1;
        count++;
      }
    }
    max = Math.max(count, max);
  }
  return max;
};

//console.log(longestCons([100, 4, 200, 1, 3, 2]));
