const longestConsequtiveSub = (nums) => {
  const optimizedSetApproach = () => {
    let set = new Set([...nums]);
    if (nums.length === 0) return 0;
    let maxCount = 1;
    for (let num of nums) {
      const right = num + 1;
      if (!set.has(right)) {
        let left = num - 1;
        let count = 1;
        if (set.has(left)) {
          while (set.has(left)) {
            left--;
            count++;
          }
          maxCount = Math.max(maxCount, count);
        } else {
          continue;
        }
      }
    }
    return maxCount;
  };
};

console.log(longestConsequtiveSub([100, 4, 200, 1, 3, 2]));
