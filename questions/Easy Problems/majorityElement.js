const majorityElement = (nums) => {
  let map = new Map();
  nums.map((num) =>
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
  );
  for (let [key, value] of map) {
    if (value > Math.floor(nums.length / 2)) {
      return Number(key);
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
