const countGoodSubstringsOfLengthThree = (s) => {
  let subMap = new Map();
  let subCount = 0;
  // check first three
  for (let index = 0; index < 3; index++) {
    subMap.has(s[index])
      ? subMap.set(s[index], subMap.get(s[index]) + 1)
      : subMap.set(s[index], 1);
  }
  if (subMap.size === 3) subCount++;
  let end = 3;
  let start = 0;
  // main iteration
  while (end < s.length) {
    let letter = s[end];
    let startLetter = s[start];
    if (subMap.get(startLetter) > 0) {
      subMap.set(startLetter, subMap.get(startLetter) - 1);
      if (subMap.get(startLetter) === 0) subMap.delete(startLetter);
    } else {
      subMap.delete(startLetter);
    }
    if (subMap.has(letter)) {
      subMap.set(letter, subMap.get(letter) + 1);
    } else {
      subMap.set(letter, 1);
    }
    subMap.size === 3 && subCount++;
    start++;
    end++;
  }
  return subCount;
};

// logic is to approach the problem while keeping track of the distinct character count
//console.log(countGoodSubstringsOfLengthThree('xyzzaz'));
