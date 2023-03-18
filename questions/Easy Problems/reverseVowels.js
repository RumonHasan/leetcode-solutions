const reverseVowels = (s) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'I', 'O', 'U', 'E'];
  let arrayVowels = [];
  for (let index in s) {
    if (vowels.includes(s[index])) {
      arrayVowels.push(s[index]);
    }
  }
  arrayVowels.reverse();
  let dp = new Array(s.length).fill('');
  for (let index in dp) {
    if (!vowels.includes(s[index])) {
      dp[index] = s[index];
    }
  }
  let vowelIndex = 0;
  for (let index in dp) {
    if (dp[index] === '') {
      dp[index] = arrayVowels[vowelIndex];
      vowelIndex++;
    }
  }
  return dp.join('');
};

//console.log(reverseVowels('aA'));
