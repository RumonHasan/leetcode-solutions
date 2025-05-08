const splitSubstringsIntoDescendingVals = (s) => {
  // main dfs function will contain currIndex , prevVal and count of the total number of partition
  const dfs = (index, prevVal, count) => {
    // it will be true when there are atleast 2 valid partitions
    if (index >= s.length && count >= 2) {
      return true;
    }
    // main logic to separate into other paritions and try out
    for (let i = index; i < s.length; i++) {
      const localSlice = s.slice(index, i + 1);
      const localSliceVal = BigInt(localSlice);
      if (localSliceVal + 1n === prevVal || prevVal === null) {
        if (dfs(i + 1, localSliceVal, count + 1)) {
          return true;
        }
      }
    }

    return false; // no valid partitions from this current starting point
  };
  // checking every starting points
  for (let i = 0; i < s.length - 1; i++) {
    const slice = s.slice(0, i + 1); // will always be from the start
    const sliceVal = BigInt(slice); // big int used to remove all leading zeroes
    // if this condition is true then the partition is valid because slice val is used as the prev val
    if (dfs(i + 1, sliceVal, 1)) {
      // count should be set to 1 since it includes the first partition
      return true;
    }
  }

  return false; // if the string is traversed and no valid partition is found
};

// have to explore all possible start substrings and find out whether partition can be possible or not
console.log(splitSubstringsIntoDescendingVals('4771447713'));
