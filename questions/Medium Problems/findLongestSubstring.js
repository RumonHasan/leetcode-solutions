const findTheLongestSubstring = (s) => {
  const checkSubstring = (substring) => {
    console.log(substring);
    let vowelArray = ['a', 'i', 'e', 'o', 'u'];
    let hash = {};
    let maxLen = 0;
    for (let index in substring) {
      if (vowelArray.includes(substring[index])) {
        hash[substring[index]]
          ? hash[substring[index]]++
          : (hash[substring[index]] = 1);
      }
    }
    let hashVals = Object.values(hash);
    let occurences = hashVals.filter((val) => val % 2 === 1);
    return occurences.length === 0;
  };
  // get substring
  let max = 0;
  for (let index = s.length - 1; index >= 0; index--) {
    let secondIndex = 0;
    let j = index;
    while (j < s.length) {
      console.log('second', secondIndex, 'j', j);
      if (checkSubstring(s.slice(secondIndex, j + 1))) {
        console.log(s.slice(secondIndex, j + 1));
        return j - secondIndex + 1;
      }
      secondIndex++;
      j++;
    }
  }
  return max;
};

console.log(findTheLongestSubstring('leetcodeisgreat'));
