const restoreIpAddress = (s) => {
  let ipCollection = [];
  let ipSection = 4;

  // will be checked based on values of three
  const isValidIp = (currIp) => {
    const ipNum = Number(currIp);
    return ipNum < 256;
  };
  // main dfs function to generate all the possible substrings
  const recurse = (currIndex, currDots, currIp) => {
    // main base case of pushing the ip address
    if (currIndex >= s.length && currDots === ipSection) {
      const ipAddress = currIp.slice(0, -1); // removing the last dot
      ipCollection.push(ipAddress);
      return;
    }
    // creating the variations of ip address
    for (
      let index = currIndex;
      index < Math.min(s.length, index + 3);
      index++
    ) {
      const currIpSlice = s.slice(currIndex, index + 1);
      // checking if there is no leading 0s
      if (index !== currIndex && s[currIndex] === '0') {
        continue;
      }
      if (isValidIp(currIpSlice)) {
        recurse(index + 1, currDots + 1, currIp + currIpSlice + '.');
      }
    }
  };

  recurse(0, 0, ''); // recurse will have the curr index, curr number of dots used and the ip substring
  return ipCollection;
};

// goal is to generate all variables of ip address
// note: this problem will generate all possible variations of the ip address substring hence caching is not required
// 1. split the string into 4 parts
// 2. check if the parts are valid
// 3. keep track of the dots that are required to segregate the segments
console.log(restoreIpAddress('0000'));
