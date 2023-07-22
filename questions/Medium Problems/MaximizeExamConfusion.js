const maxConsequtiveAnswers = (answerKey, k) => {
  let hashMap = new Map();
  let end = 0;
  let start = 0;
  let maxLen = 0;
  while (end < answerKey.length) {
    let answer = answerKey[end];
    if (hashMap.has(answer)) {
      hashMap.set(answer, hashMap.get(answer) + 1);
    } else {
      hashMap.set(answer, 1);
    }
    // sub iteration for checking when it goes over k limit for interchangeability
    while (end - start + 1 - Math.max(...hashMap.values()) > k) {
      // note since answer start will change after removing here so u need to keep the start answer key local
      hashMap.set(answerKey[start], hashMap.get(answerKey[start]) - 1);
      if (hashMap.get(answerKey[start]) === 0) {
        hashMap.delete(answerKey[start]);
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
};

// sliding window approach with storing the character occurence using hash map
// console.log(
//   maxConsequtiveAnswers(
//     'FTFFTFTFTTFTTFTTFFTTFFTTTTTFTTTFTFFTTFFFFFTTTTFTTTTTTTTTFTTFFTTFTFFTTTFFFFFTTTFFTTTTFTFTFFTTFTTTTTTF',
//     32
//   )
// );
