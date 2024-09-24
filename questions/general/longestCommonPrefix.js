const longestCommonPrefix = (arr1, arr2) => {
  let maxLen = 0;
  const prefCreator = (array) => {
    let set = new Set();
    for (let i = 0; i < array.length; i++) {
      const currStr = array[i].toString();
      let str = '';
      for (let currChar of currStr) {
        str += currChar;
        set.add(str);
      }
    }
    return set;
  };
  let setOne = prefCreator(arr2);
  arr2.sort((a, b) => b.length - a.length);
  // iterating from the largest number and checking its subsets
  for (let i = 0; i < arr1.length; i++) {
    let currNum = arr1[i].toString();
    let str = '';
    for (let currChar of currNum) {
      str += currChar;
      if (setOne.has(str)) {
        maxLen = Math.max(maxLen, str.length);
      }
    }
  }
  return maxLen;
};

console.log(longestCommonPrefix([1, 10, 1001], [100]));
