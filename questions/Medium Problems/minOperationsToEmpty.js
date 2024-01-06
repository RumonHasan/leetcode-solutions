const minOperationsToEmpty = (nums) => {
  const intuitiveApproach = () => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const currNumber = nums[i];
      map.set(currNumber, (map.get(currNumber) || 0) + 1);
    }
    let minOperationCount = 0;
    for (let [key, value] of map) {
      if (value === 1) return -1;
      const numberOfOperations = Math.floor(value / 3);
      minOperationCount += numberOfOperations;
      if (value % 3 > 0) {
        minOperationCount++;
      }
    }
    return minOperationCount;
  };
};

//console.log(minOperationsToEmpty([2, 3, 3, 2, 2, 4, 2, 3, 4]));
