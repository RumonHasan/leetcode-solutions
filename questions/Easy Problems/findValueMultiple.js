const findFinalValue = (nums, original) => {
  const generalIntuitiveApproach = () => {
    if (!nums.includes(original)) {
      return original;
    } else {
      let local = original * 2;
      while (nums.includes(local)) {
        if (!nums.includes(local)) {
          break;
        }
        local *= 2;
      }
      return local;
    }
  };
};

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
