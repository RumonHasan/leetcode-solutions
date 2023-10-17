const minOoperationsToCollectElements = (nums, k) => {
  const intuitiveApproach = () => {
    let collection = [];
    let map = new Map();
    for (let index = 1; index <= k; index++) {
      map.set(index, true);
    }
    for (let index = nums.length - 1; index >= 0; index--) {
      const number = nums[index];
      if (map.has(number)) {
        if (!collection.includes(number)) {
          collection.push(number);
        }
      }
      if (collection.length === k) {
        return nums.length - index;
      }
    }
  };
};

//console.log(minOoperationsToCollectElements([1, 2, 2], 2));
