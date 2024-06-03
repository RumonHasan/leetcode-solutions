const longestWithoutRepeat = (nums, k) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let maxLen = 0;
  while (end < nums.length) {
    const currNum = nums[end];
    map.set(currNum, (map.get(currNum) || 0) + 1);
    while (map.get(nums[end]) > k) {
      map.set(nums[start], map.get(nums[start]) - 1);
      if (map.get(nums[start]) === 0) {
        map.delete(nums[start]);
      }
      start++;
    }
    maxLen = Math.max(end - start + 1, maxLen);
    end++;
  }
  return maxLen;
};

// trying to locate disjoint pairs and adding the sum to check for k equivalent for the solution unclean solution
const maxPairs = (nums, k) => {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let operationCount = 0;
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const compliment = k - currNum;
    if (map.has(compliment) && map.has(currNum)) {
      if (compliment === currNum && map.get(compliment) < 2) {
        continue;
      }
      const complimentValue = map.get(compliment);
      const currNumVal = map.get(currNum);
      if (complimentValue >= 1 && currNumVal >= 1) {
        map.set(compliment, map.get(compliment) - 1);
        map.set(currNum, map.get(currNum) - 1);
        if (map.get(currNum) <= 0) {
          map.delete(currNum);
        }
        if (map.get(complimentValue) <= 0) {
          map.delete(complimentValue);
        }
        operationCount++;
      }
    }
  }
  return operationCount;
};

// divide players and total of each team has to be equal using sorting and two pointer approach
const dividePlayers = (skills) => {
  skills.sort((a, b) => a - b);
  let midIndex = skills.length / 2;
  let total = 0;
  let collectors = new Set();
  for (let i = 0; i < midIndex; i++) {
    const currNumLeft = skills[i];
    const currNumRight = skills[skills.length - i - 1];
    const totalSkill = currNumLeft + currNumRight;
    collectors.add(totalSkill);
    total += currNumLeft * currNumRight;
  }
  if (collectors.size > 1) {
    return -1;
  }
  return total;
};

//console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
