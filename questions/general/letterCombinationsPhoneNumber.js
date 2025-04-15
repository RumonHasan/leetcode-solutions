const letterCombinationsPhoneNumber = (digits) => {
  let results = [];
  if (digits === '') return results;
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  const dfs = (index, currentSub) => {
    if (currentSub.length === digits.length) {
      results.push(currentSub);
      return;
    }
    const currDigit = digits[index];
    const letters = phoneMap[currDigit];
    for (let letter of letters) {
      dfs(index + 1, currentSub + letter);
    }
  };
  dfs(0, ''); // main dfs function

  return results;
};

console.log(letterCombinationsPhoneNumber('23'));
