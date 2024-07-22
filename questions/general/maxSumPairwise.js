const maxSumPairwise = (nums, m, k) => {
  let total = 0;
  let map = new Map();
  for (let i = 0; i < k; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    total += num;
  }
  let max = map.size >= m ? total : 0;
  let start = 0;
  let end = k;
  while (end < nums.length) {
    let first = nums[start];
    map.set(first, map.get(first) - 1);
    if (map.get(first) === 0) {
      map.delete(first);
    }
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    total -= first;
    total += nums[end];
    if (map.size >= m) {
      max = Math.max(max, total);
    }
    start++;
    end++;
  }
  return max;
};

// with atleast m distinct elements with size k
//console.log(maxSumPairwise([2, 6, 7, 3, 1, 7], 3, 4));
