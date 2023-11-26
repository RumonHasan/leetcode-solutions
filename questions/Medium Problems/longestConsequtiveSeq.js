const longestConsequtiveSequence = (nums) => {
  const intuitiveSetApproach = () => {
    let set = new Set([...nums]);
    let maxLength = 0;
    for (let index = 0; index < nums.length; index++) {
      let subLength = 0;
      let num = nums[index];
      if (!set.has(num - 1)) {
        let subNum = num;
        while (set.has(subNum + 1)) {
          subNum++;
          subLength++;
        }
        maxLength = Math.max(subLength + 1, maxLength);
      }
    }
    return maxLength;
  };
};
//console.log(longestConsequtiveSequence([100, 4, 200, 1, 3, 2]));
