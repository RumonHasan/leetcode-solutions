const maxProdOfWordLength = (words) => {
  let collectionSet = [];
  for (let word of words) {
    const wordArray = word.split('');
    collectionSet.push(new Set([...wordArray]));
  }
  let maxLength = 0;

  // brute force check for every word
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const set = collectionSet[i];
      const subSet = collectionSet[j];

      const isUniqueCheck = [...set].some((letter) => subSet.has(letter));

      if (!isUniqueCheck) {
        maxLength = Math.max(maxLength, words[i].length * words[j].length);
      }
    }
  }

  return maxLength;
};

// checking whether there is any duplication of letters using sets from one word with the other by brute forcing
// console.log(
//   maxProdOfWordLength(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])
// );

// making palindrome partitioning
const palindromePartitioning = (s) => {
  let result = [];
  // simple function to check palindrome string from start and ending
  const isPalindromeCheck = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };
  // main dfs function to check for every subset and create subset patterns
  const dfs = (start, subSet) => {
    if (start >= s.length) {
      result.push([...subSet]); // push the subset of palindromic substring if the start index exceeds or is equal to length of string
    }
    for (let i = start; i < s.length; i++) {
      if (isPalindromeCheck(start, i)) {
        const slice = s.slice(start, i + 1); // here i index is incrementing hence i should be the ending and start index will slowly increment in the forloop
        subSet.push(slice);
        dfs(i + 1, subSet); // if its a palindrome then start it from the next index
        subSet.pop(); // popping the last found palindrome  in order to start checking for more sub palindrome form the point of first palindrome
      }
    }
  };

  dfs(0, []); // starting the dfs from the starting index of 0 in the string
  return result;
};

console.log(palindromePartitioning('abbab'));
