const mostFrequent = (nums, key) => {
  const basicIntuitiveApproach = () => {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
      const nextElement = nums[index + 1];
      const currentElement = nums[index];
      if (currentElement === key) {
        if (map.has(nextElement)) {
          map.set(nextElement, map.get(nextElement) + 1);
        } else {
          map.set(nextElement, 1);
        }
      }
    }
    let mapArray = new Array(...map).sort((a, b) => b[1] - a[1]);
    return mapArray[0][0];
  };
};

// console.log(mostFrequent([1, 100, 200, 1, 100], 1));
