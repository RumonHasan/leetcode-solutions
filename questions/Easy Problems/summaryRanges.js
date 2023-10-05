const summaryRanges = (nums) => {
  const generalIntuitiveApproach = () => {
    let end = 1;
    let array = [];
    if (nums.length === 1) {
      array.push(`${nums[0]}`);
      return array;
    }
    const rangeMark = '->';
    let start = 0;
    while (end < nums.length) {
      while (nums[end] - nums[end - 1] === 1 && end < nums.length) {
        end++;
      }
      const currentPosition = nums[start].toString();
      const endPosition = nums[end - 1].toString();
      if (currentPosition === endPosition) {
        array.push(`${currentPosition}`);
      } else {
        array.push(`${currentPosition}${rangeMark}${endPosition}`);
      }

      start = end;
      if (end === nums.length - 1 && nums[end] - nums[end - 1] > 1) {
        array.push(`${nums[end]}`);
      }
      end++;
    }
    return array;
  };
  console.log(generalIntuitiveApproach());
};

console.log(summaryRanges([-1]));
