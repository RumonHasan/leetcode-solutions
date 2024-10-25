const nonDecreasingSub = (nums) => {
  let result = [];
  const dfsSub = (index, sequence) => {
    if (sequence.length >= 2) {
      result.push([...sequence]);
    }
    let usedSet = new Set(); // set for stopping duplicates

    for (let i = index; i < nums.length; i++) {
      // avoid checking if the number is already present
      const currNum = nums[i];
      if (usedSet.has(nums[i])) {
        continue;
      }
      // add only if sequence is empty and there is no elements
      if (sequence.length === 0 || sequence[sequence.length - 1] <= currNum) {
        usedSet.add(currNum);
        sequence.push(currNum);
        dfsSub(i + 1, sequence);
        sequence.pop();
      }
    }
    return sequence;
  };
  dfsSub(0, []);
  return result;
};

// backtracking and dfs problems.. fundamental concept that arrays and objects are passed by values
//console.log(nonDecreasingSub([4, 6, 7, 7]));

// getting all the subsets
const subsets = (nums) => {
  let result = [];
  const dfs = (index, subset) => {
    if (subset.length >= 0) {
      result.push([...subset]);
    }
    let set = new Set();

    for (let i = index; i < nums.length; i++) {
      const currNum = nums[i];
      if (set.has(currNum)) {
        continue;
      }
      subset.push(currNum);
      set.add(currNum);
      dfs(i + 1, subset);
      subset.pop();
    }
    return subset;
  };

  dfs(0, []);
  return result;
};

//console.log(subsets([1, 2, 3]));
