const findAnagrams = (s, p) => {
  //   console.log(s, p);
  let anagramLen = p.length;
  let hashS = {};
  let hashP = {};
  let indexArray = [];
  // checking for first three chars using hash
  for (let index in p) {
    hashP[p[index]] ? hashP[p[index]]++ : (hashP[p[index]] = 1);
    hashS[s[index]] ? hashS[s[index]]++ : (hashS[s[index]] = 1);
  }
  // checking for object equality
  const checkObjectEquality = (pHash, sHash) => {
    const pLen = Object.keys(pHash).length;
    const sLen = Object.keys(sHash).length;
    const pKeys = Object.keys(pHash);
    if (pLen === sLen) {
      if (
        pKeys.every(
          (pKey) => sHash.hasOwnProperty(pKey) && pHash[pKey] === sHash[pKey]
        )
      ) {
        return true;
      }
    }
    return false;
  };
  if (checkObjectEquality(hashP, hashS)) {
    indexArray.push(0);
  }
  // remaining iteration
  let endIndex = anagramLen;
  let startIndex = 0;
  // core logic
  while (endIndex < s.length) {
    // delete first
    hashS[s[startIndex]]--;
    if (hashS[s[startIndex]] === 0) {
      delete hashS[s[startIndex]];
    }
    startIndex++;
    // add last
    if (hashS[s[endIndex]]) {
      hashS[s[endIndex]]++;
    } else {
      hashS[s[endIndex]] = 1;
    }
    // check
    if (checkObjectEquality(hashP, hashS)) {
      indexArray.push(startIndex);
    }
    endIndex++;
  }
  return indexArray;
};

//console.log(findAnagrams('cbaebabacd', 'abc'));
