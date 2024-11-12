const isPossible = (nums) => {
  if (nums.length < 6) return false; // edge case
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  console.log(map);
  let result = [];
  let numSet = new Set([...nums]);
  for (let num of numSet) {
    console.log(num);
  }
};

// keep in mind that atleast the next two elements should have a consequtive increment in value
console.log(isPossible([1, 2, 3, 3, 4, 4, 5, 5]));
