const minimumOperations = (nums) => {
  let suffixArray = new Array(nums.length).fill(0);
  let set = new Set();
  let operationCount = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    set.add(nums[i]);
    suffixArray[i] = set.size;
  }

  if (suffixArray[0] === nums.length) {
    return 0;
  }

  for (let i = 0; i < suffixArray.length; i += 3) {
    // starts from 0 as for the first suffix values
    const remainingLen = nums.length - i;
    const distinctInSuffix = suffixArray[i];
    if (remainingLen === distinctInSuffix) {
      // we only care if remaining len is equal
      return operationCount;
    }
    operationCount++;
  }

  return operationCount;
};

// suffix based distinct elements approach
//console.log(minimumOperations([6, 7, 8, 9]));

// getting the substring of longest vowel in a series
const longestVowelSubstring = (word) => {
  let vowels = 'aeiou';
  let max = 0;
  let end = 0;

  // main iteration loop
  while (end < word.length) {
    if (word[end] == 'a') {
      let checkIndex = 0;
      let start = end;
      for (let i = 0; i < vowels.length; i++) {
        const currVowel = vowels[i];

        if (currVowel !== word[end]) {
          break;
        }
        // for same chars
        while (end < word.length && word[end] === currVowel) {
          end++;
        }
        checkIndex = i;
      }

      if (checkIndex === vowels.length - 1) {
        max = Math.max(max, end - start);
      }
    } else {
      // skip if no letter found
      end++;
    }
  }

  return max;
};

console.log(longestVowelSubstring('aeiaaioaaaaeiiiiouuuooaauuaeiu'));
