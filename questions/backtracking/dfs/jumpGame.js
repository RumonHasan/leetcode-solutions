const jumpGame = (nums) => {
  let cache = new Array(nums.length).fill(-1);

  const dfs = (position) => {
    if (position === nums.length - 1) {
      // main base case
      return true;
    }
    if (position >= nums.length) {
      return false;
    }
    // cache
    if (cache[position] === 1) {
      return true;
    }
    let foundPath = false;
    // dfs path checking .. max jump is the maximum possible
    let maxJump = nums[position];
    for (let nextPosition = 1; nextPosition <= maxJump; nextPosition++) {
      let nextPos = position + nextPosition; // it will be checking for the next position
      if (dfs(nextPos)) {
        foundPath = true; // breaks once it finds the path
        break;
      }
    }
    cache[position] = foundPath ? 1 : 0;
    return foundPath;
  };

  return dfs(0);
};

// every index value represents a position then u jump
console.log(jumpGame([2, 3, 1, 1, 4]));
