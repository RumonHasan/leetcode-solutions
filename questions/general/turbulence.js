const longestTurbulentSubarray = (arr) => {
  console.log(arr);
  let end = 1;
  let start = 0;
  let maxLen = 0;
  let currSign = '';
  if (arr.length === 1) return 1;
  while (end < arr.length) {
    const currEl = arr[end];
    const currPrev = arr[end - 1];

    if (currPrev > currEl && currSign !== '>') {
      maxLen = Math.max(maxLen, end - start + 1);
      end++;
      currSign = '>';
    } else if (currPrev < currEl && currSign !== '<') {
      maxLen = Math.max(maxLen, end - start + 1);
      console.log(start, end);
      end++;
      currSign = '<';
    } else {
      // reindexing when there is duplicate signs or equal sign
      if (currEl == currPrev) {
        maxLen = Math.max(maxLen, end - start);
        start = end;
        end = end + 1;
        currSign = '';
      }
      if (currSign == '>' || currSign == '<') {
        start = end - 1;
        end++;
      }
    }
  }
  return maxLen;
};

console.log(longestTurbulentSubarray([0, 1, 1, 0, 1, 0, 1, 1, 0, 0]));
