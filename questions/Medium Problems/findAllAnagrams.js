const findAnagramsa = (s, p) => {
  let result = [];
  let pMap = new Map();
  let initialSMap = new Map();
  for (let char of p) {
    pMap.has(char) ? pMap.set(char, pMap.get(char) + 1) : pMap.set(char, 1);
  }
  for (let index in p) {
    initialSMap.has(s[index])
      ? initialSMap.set(s[index], initialSMap.get(s[index]) + 1)
      : initialSMap.set(s[index], 1);
  }
  const checkAnagrams = (sMap) => {
    const sortedSMap = new Map([...sMap].sort());
    const sortedPMap = new Map([...pMap].sort());
    const sVals = [...sortedSMap.values()];
    const pVals = [...sortedPMap.values()];
    const sKeys = [...sortedSMap.keys()];
    const pKeys = [...sortedPMap.keys()];
    for (let index in sVals) {
      if (!(sVals[index] === pVals[index] && sKeys[index] === pKeys[index])) {
        return false;
      }
    }
    return true;
  };
  // checking for anagrams using two pointer approach but using chunks of the length of p
  let start = 0;
  let sMap = new Map(initialSMap);
  if (checkAnagrams(initialSMap)) {
    result.push(0);
  }
  let end = p.length;
  // initial check
  while (end < s.length) {
    // delete from map
    sMap.set(s[start], sMap.get(s[start]) - 1);
    if (sMap.get(s[start]) === 0) {
      sMap.delete(s[start]);
    }
    start++;
    if (sMap.has(s[end])) {
      sMap.set(s[end], sMap.get(s[end]) + 1);
    } else {
      sMap.set(s[end], 1);
    }
    if (checkAnagrams(sMap)) {
      result.push(start);
    }
    end++;
  }

  return result;
};
// finding anagrams of all the possible p occurences
console.log(findAnagramsa('abab', 'ba'));
