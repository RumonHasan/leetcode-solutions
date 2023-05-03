const longestPalindromicSub = (s) => {
  let string = s;
  let revString = s.split('').reverse().join('');
  let dpArray = new Array(string.length + 1)
    .fill()
    .map((item) => new Array(revString.length + 1).fill(0));
  let outerIndex = string.length - 1;
  let innerIndex = revString.length - 1;
  while (outerIndex >= 0) {
    innerIndex = revString.length - 1;
    while (innerIndex >= 0) {
      if (string[outerIndex] === revString[innerIndex]) {
        dpArray[outerIndex][innerIndex] =
          1 + dpArray[outerIndex + 1][innerIndex + 1];
      } else {
        // getting the prefix sum
        dpArray[outerIndex][innerIndex] = Math.max(
          dpArray[outerIndex + 1][innerIndex],
          dpArray[outerIndex][innerIndex + 1]
        );
      }
      innerIndex--;
    }
    outerIndex--;
  }
  return dpArray[0][0];
};
// using LCS DP formula

//console.log(longestPalindromicSub('bbbab'));
