const maxCon = (answerKey, k) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let maxLength = 0;
  while (end < answerKey.length) {
    const currChar = answerKey[end];
    map.set(currChar, (map.get(currChar) || 0) + 1); // counting occurences of number of T and F

    // reducing length after calculation with K
    while (
      end -
        start +
        1 -
        (map.get('T') > map.get('F') ? map.get('T') : map.get('F')) >
      k
    ) {
      // reduce the start if the answer key is found
      if (map.has(answerKey[start])) {
        map.set(answerKey[start], map.get(answerKey[start]) - 1);
        if (map.get(answerKey[start]) === 0) {
          map.delete(answerKey[start]);
        }
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1); // calculating final max length
    end++;
  }
  return maxLength;
};

console.log(maxCon('TTFTTFTT', 1));
