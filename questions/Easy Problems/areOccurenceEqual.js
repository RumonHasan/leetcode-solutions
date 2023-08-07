const areOccurenceEqual = (s) => {
  // if the interview says not to use any particular data structures
  const stackApproach = () => {
    let sorted = s.split('').sort((a, b) => a.localeCompare(b));
    let stack = [];
    for (const char of sorted) {
      if (stack.length && stack[stack.length - 1][0] === char) {
        stack[stack.length - 1][1] = stack[stack.length - 1][1] + 1;
      } else {
        stack.push([char, 1]);
      }
    }
    let checkVal = stack[0][1];
    for (let index in stack) {
      if (stack[index][1] !== checkVal) {
        return false;
      }
    }
    return true;
  };
  // in this case its much faster
  const hashApproach = () => {
    let hash = {};
    for (let char of s) {
      hash[char] ? hash[char]++ : (hash[char] = 1);
    }
    let charValCheck = hash[s[0]];
    let hashVals = Object.values(hash);
    const check = hashVals.some((val) => val !== charValCheck);
    return check ? false : true;
    // object appraoch
    // for (const [key, val] of Object.entries(hash)) {
    //   if (val !== charValCheck) {
    //     return false;
    //   }
    // }
    // return true;
  };
};

console.log(areOccurenceEqual('aaabb'));
