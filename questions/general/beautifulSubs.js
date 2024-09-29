const beautifulSubs = (s, k) => {
  const bruteForceApproach = () => {
    let counter = 0;
    let vowelSet = new Set(['a', 'i', 'e', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
      let vCount = 0;
      let cCount = 0;
      // checking all sub directly
      for (let j = i; j < s.length; j++) {
        const char = s[j];
        if (vowelSet.has(char)) {
          vCount++;
        } else {
          cCount++;
        }
        if (cCount === vCount) {
          const calc = (cCount * vCount) % k === 0 ? true : false;
          if (calc) {
            counter++;
          }
        }
      }
    }
    return counter;
  };
};

// using brute force approach to check through every substring
//console.log(beautifulSubs('baeyh', 2));

const subarrayRanges = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let large = -Infinity;
    let min = Infinity;
    for (let j = i; j < nums.length; j++) {
      const curr = nums[j];
      min = Math.min(min, curr);
      large = Math.max(large, curr);
      total += large - min;
    }
  }
  return total;
};

console.log(subarrayRanges([1, 2, 3]));
