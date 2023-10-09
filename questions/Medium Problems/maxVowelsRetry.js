const maxVowelsRetry = (s, k) => {
  const intuitiveApproach = () => {
    const vowelMap = new Map([
      ['a', true],
      ['i', true],
      ['e', true],
      ['o', true],
      ['u', true],
    ]);
    let vowelCounter = 0;
    for (let index = 0; index < k; index++) {
      const char = s[index];
      if (vowelMap.has(char)) {
        vowelCounter++;
      }
    }
    let maxVowelCount = vowelCounter;
    let end = k;
    let start = 0;
    while (end < s.length) {
      if (vowelMap.has(s[start])) {
        vowelCounter--;
      }
      start++;
      if (vowelMap.has(s[end])) {
        vowelCounter++;
      }
      maxVowelCount = Math.max(vowelCounter, maxVowelCount);
      end++;
    }
    return maxVowelCount;
  };
};

//console.log(maxVowelsRetry('ibpbhixfiouhdljnjfflpapptrxgcomvnb', 33));
