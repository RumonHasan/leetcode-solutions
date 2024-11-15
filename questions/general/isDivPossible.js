const isDivPossibleTwo = (nums, k) => {
  const sorted = nums.sort((a, b) => a - b);
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // removing map elements if freq hits 0;
  const removeEl = (mapRef, currRef) => {
    if (mapRef.get(currRef) === 0) {
      return mapRef.delete(currRef);
    }
  };
  for (let i = 0; i < sorted.length; i++) {
    const curr = sorted[i];
    if (!map.has(curr)) continue; //skip if no more occurence is present on map
    if (map.get(curr) > 0 && map.has(curr)) {
      let index = 0;
      let currNext = curr;
      while (index < k) {
        // check till k
        if (!map.has(currNext) || map.get(currNext) <= 0) return false; // stops iteration
        if (map.has(currNext)) {
          map.set(currNext, map.get(currNext) - 1);
          removeEl(map, currNext);
        }
        currNext++; // increasing and checking.... no counter value needed
        index++;
      }
    }
  }
  return true;
};

// each group should have k elements that are consequtive ;
console.log(isDivPossibleTwo([5, 7, 8, 8, 7, 4, 3, 6], 1));
