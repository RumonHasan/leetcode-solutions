const countSortedVowelString = (n) => {
  let counter = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = [];

  const dfs = (currIndex, position, vowelSubstring) => {
    if (position === n) {
      // if position matches n then adds counter
      // when position hits
      counter++;
      result.push(vowelSubstring);
      return;
    }

    for (let index = currIndex; index < vowels.length; index++) {
      dfs(index, position + 1, vowelSubstring + vowels[index]); // adds one by one
    }
  };
  dfs(0, 0, '');
  return result.length;
};

console.log(countSortedVowelString(2));
