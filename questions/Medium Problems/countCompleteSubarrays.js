const countCompleteSubarrays = (nums) => {
  // initial approach using sets
  const setApproach = () => {
    let numSetSize = new Set([...nums]).size;
    let end = 0;
    let counter = 0;
    while (end < nums.length) {
      let localSet = new Set();
      for (let subIndex = end; subIndex < nums.length; subIndex++) {
        localSet.add(nums[subIndex]);
        if (localSet.size === numSetSize) {
          counter++;
        }
      }
      end++;
    }
    return counter;
  };
  // second approach
  const optimizedApproach = () => {
    let size = new Set([...nums]).size;
    let counter = 0;
    for (let index = 0; index < nums.length; index++) {
      let subSet = new Set();
      for (let subIndex = index; subIndex < nums.length; subIndex++) {
        subSet.add(nums[subIndex]);
        subSet.size === size && counter++;
      }
    }
    return counter;
  };
};

//console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
