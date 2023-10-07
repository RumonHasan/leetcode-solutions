const majorityElement = (nums) => {
  const hashMapApproach = () => {
    const lenNums = Math.floor(nums.length / 3);
    let map = new Map();
    for (let index in nums) {
      const num = nums[index];
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    let array = [];
    for (let [key, value] of map) {
      if (value > lenNums) {
        array.push(Number(key));
      }
    }
    return array;
  };
};

//console.log(majorityElement([3, 2, 3]));
