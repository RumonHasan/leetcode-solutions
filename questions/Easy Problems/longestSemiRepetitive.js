const longestSemiRepeatitiveString = (s) => {
  let maxLen = 0;
  let prevNum = s[0];
  let indexCollection = [];
  // getting the index points of the starting and ending of each pairs
  for (let i = 1; i < s.length; i++) {
    const currNum = s[i];
    if (currNum === prevNum) {
      indexCollection.push([i - 1, i]);
    }
    prevNum = currNum;
  }
  if (indexCollection.length === 1 || indexCollection.length === 0)
    return s.length;
  maxLen = Math.max(maxLen, indexCollection[1][0] + 1);
  for (let index = 1; index < indexCollection.length; index++) {
    const prevIndexSet = indexCollection[index - 1];
    const nextIndexSet = indexCollection[index + 1];

    if (index === indexCollection.length - 1) {
      // indicating the final pair
      maxLen = Math.max(maxLen, s.length - prevIndexSet[1]);
    } else {
      maxLen = Math.max(maxLen, nextIndexSet[0] - prevIndexSet[1] + 1);
    }
  }

  return maxLen;
};

//console.log(longestSemiRepeatitiveString('5227886336789'));

// answer should be 6

/* 
 0, 1,2,3,4,5,6,7,8
1, 2
3, 4



*/
