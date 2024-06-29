const maxConsequtiveAnswers = (answerKey, k) => {
  let map = new Map();
  let end = 0;
  let start = 0;
  let maxLen = 0;
  while (end < answerKey.length) {
    map.set(answerKey[end], (map.get(answerKey[end]) || 0) + 1);
    while (
      end -
        start +
        1 -
        (map.get('T') > map.get('F') ? map.get('T') : map.get('F')) >
      k
    ) {
      map.set(answerKey[start], map.get(answerKey[start]) - 1);
      if (map.get(answerKey[start]) === 0) {
        map.delete(answerKey[start]);
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

//console.log(maxConsequtiveAnswers('TTFTTFTT', 1));
