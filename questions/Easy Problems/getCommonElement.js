const getCommonElement = (nums1, nums2) => {
  const slowApproach = () => {
    let checkNumSet = new Set([...nums1]);
    let secondSet = new Set([...nums2]);
    nums2 = [...secondSet];
    let collection = [];
    for (let index in nums2) {
      if (checkNumSet.has(nums2[index])) {
        collection.push(nums2[index]);
      }
    }
    return Math.min(...collection) === Infinity ? -1 : Math.min(...collection);
  };

  // optimized approach using objects and sets and concatinating nums together
  const optimizedApproach = () => {
    let newNums = Array.from(new Set(nums1)).concat(Array.from(new Set(nums2)));
    let map = new Map();
    for (let index in newNums) {
      if (map.has(newNums[index])) {
        map.set(newNums[index], map.get(newNums[index]) + 1);
      } else {
        map.set(newNums[index], 1);
      }
    }
    let minValue = Infinity;
    for (const [key, value] of map) {
      if (value > 1) {
        minValue = Math.min(minValue, Number(key));
      }
    }
    return minValue === Infinity ? -1 : minValue;
  };

  console.log(optimizedApproach());
};
// get the most common element with the minimum value
//console.log(getCommonElement([1000000000, 1000000000], [1000000000]));
