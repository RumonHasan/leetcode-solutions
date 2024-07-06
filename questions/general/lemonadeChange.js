const lemonadeChange = (bills) => {
  let map = new Map();
  for (let currBill of bills) {
    if (currBill === 5) {
      map.set(currBill, (map.get(currBill) || 0) + 1);
    }
    if (currBill === 10) {
      if (map.get(5) === 0 || !map.has(5)) {
        return false;
      }
      map.set(currBill, (map.get(currBill) || 0) + 1);
      map.set(5, map.get(5) - 1);
    }
    if (currBill === 20) {
      if (map.get(5) >= 1 && map.get(10) >= 1) {
        map.set(5, map.get(5) - 1);
        map.set(10, map.get(10) - 1);
      } else if (map.get(5) >= 3) {
        map.set(5, map.get(5) - 3);
      } else {
        return false;
      }
    }
  }
  return true;
};

//console.log(lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]));

const findUnsorted = (nums) => {
  const n = nums.length;
  let start = -1;
  let end = -2;
  let min = nums[n - 1];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[n - 1 - i]);

    if (nums[i] < max) end = i;
    if (nums[n - 1 - i] > min) start = n - 1 - i;
  }

  return end - start + 1;
};

//console.log(findUnsorted([2, 6, 4, 8, 10, 9, 15]));
