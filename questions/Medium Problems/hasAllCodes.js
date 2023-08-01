const hasAllCodes = (s, k) => {
  const hashMapApproach = () => {
    let hashMap = new Map();
    hashMap.set(s.slice(0, k), 1);
    let substring = s.slice(0, k);
    let end = k;
    while (end < s.length) {
      substring = substring.slice(1, substring.length);
      substring += s[end];
      if (hashMap.has(substring)) {
        hashMap.set(substring, hashMap.get(substring) + 1);
      } else {
        hashMap.set(substring, 1);
      }
      end++;
    }
    const numOfUniqueSubs = hashMap.size;
    return numOfUniqueSubs === Math.pow(2, k);
  };
  // using set approach to increase the run time a bit
  const setApproach = () => {
    let set = new Set();
    set.add(s.slice(0, k));
    let sub = s.slice(0, k);
    let end = k;
    while (end < s.length) {
      sub = sub.slice(1, sub.length);
      sub += s[end];
      set.add(sub);
      end++;
    }
    return set.size === Math.pow(2, k);
  };
};

// base approach:
// finding all the substrings of length 2 and find out how many of them are unique then verifying with the total length
// console.log(hasAllCodes('00110110', 2));
