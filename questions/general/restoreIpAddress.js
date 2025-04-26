const restoreIpAddress = (s) => {
  let ipCollection = []; // contains the final collection of ip addresses
  const section = 4;
  // returns true if ip is 255 or below
  const checkIp = (ip) => {
    const ipNumber = Number(ip);
    return ipNumber < 256;
  };

  // only will return the id and add it to the collection if the dots hit 4 which is one more than 3 limited
  const dfs = (currIndex, currDots, currIp) => {
    // base case
    if (currDots === section && currIndex === s.length) {
      // so dots have to be 4 max and we should be at the last index
      const currSlicedIp = currIp.slice(0, -1);
      ipCollection.push(currSlicedIp);
    }
    if (currDots > 5) {
      // optional for reducing run times
      // egde case if curr dots exceed limit
      return;
    }
    // using for loop to generate all possible combinations of ip address that does not exceed 255 chars
    for (
      let i = currIndex;
      i < Math.min(currIndex + 3, s.length);
      i++ // within each block it checks a variation of 3
    ) {
      if (i > currIndex && s[currIndex] === '0') {
        // skips this initial starting index if its equal to 0
        break;
      }
      const ip = s.slice(currIndex, i + 1);
      if (checkIp(ip)) {
        dfs(i + 1, currDots + 1, currIp + ip + '.'); // making a current series of three dots and have maxmimum 3 dots
      }
    }
  };

  // running dfs function
  dfs(0, 0, ''); // accepts three params , current index , curr dot counter, curr ip string
  return ipCollection;
};

// need to use dfs backtracking to find all the combinations of ip addresses and return the final collection
//console.log(restoreIpAddress('25525511135'));

// count complete subarrays
const countCompleteSubarrays = (nums) => {
  let distinctCount = new Set([...nums]).size;
  let end = 0;
  let start = 0;
  let hash = {};
  let size = 0;

  while (end < nums.length) {
    hash[nums[end]] = (hash[nums[end]] || 0) + 1;
    while (Object.keys(hash).length === distinctCount) {
      size += nums.length - end; // cuz all the subarrays after the end is all valid
      if (hash[nums[start]]) {
        hash[nums[start]]--;
        if (hash[nums[start]] === 0) {
          delete hash[nums[start]];
        }
      }
      start++;
    }
    end++;
  }

  return size;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
