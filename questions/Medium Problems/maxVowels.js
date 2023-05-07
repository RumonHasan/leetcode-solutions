const maxVowels = (s, k) => {
  let vowels = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
  };

  let vowelCounter = 0;
  for (let index = 0; index < k; index++) {
    if (vowels[s[index]]) {
      vowelCounter++;
    }
  }
  let maxVowelCounter = vowelCounter;
  let endIndex = k;
  let startIndex = 0;
  while (endIndex < s.length) {
    if (vowels[s[startIndex]]) {
      vowelCounter--;
    }
    startIndex++;
    if (vowels[s[endIndex]]) {
      vowelCounter++;
    }
    maxVowelCounter = Math.max(maxVowelCounter, vowelCounter);
    endIndex++;
  }
  return maxVowelCounter;
};

//console.log(maxVowels('abciiidef', 3));
