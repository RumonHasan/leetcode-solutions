const countOfSubstrings = (word, k) => {
  let subCount = 0;
  let vowelMap = new Map();
  let consonantCount = 0;
  let vowelHash = {
    a: true,
    i: true,
    e: true,
    o: true,
    u: true,
  };

  let end = 0;
  let start = 0;

  // getting total subcounts starting from the first and checking
  const totalSubCounts = (left, consonantCount) => {
    let result = 0;
    let localMap = new Map(vowelMap);
    // checking from the beginning for more subcounts that are inclusive of the whole strings
    while (consonantCount === k && localMap.size === 5) {
      result++;
      if (localMap.has(word[left])) {
        localMap.set(word[left], localMap.get(word[left]) - 1);
        if (localMap.get(word[left]) === 0) {
          localMap.delete(word[left]);
        }
      } else {
        consonantCount--;
      }
      left++;
    }

    return result;
  };
  // sliding window approach to check out the consonant count and vowel map count

  while (end < word.length) {
    if (vowelHash[word[end]]) {
      vowelMap.set(word[end], (vowelMap.get(word[end]) || 0) + 1);
    } else {
      consonantCount++; // increasing consonant count if its a consonant
    }
    while (consonantCount > k) {
      // determines the starting points from where the totalSubcounts will start
      // reducing with consonant increments
      if (vowelMap.has(word[start])) {
        vowelMap.set(word[start], vowelMap.get(word[start]) - 1);
        if (vowelMap.get(word[start]) === 0) {
          vowelMap.delete(word[start]);
        }
      } else {
        consonantCount--;
      }
      start++;
    }
    // increasing only if vowel map meets the size requirements

    subCount += totalSubCounts(start, consonantCount); // everytime condition is satisfied we starting from beginning in order to prevent any miss

    end++;
  }

  return subCount;
};

// getting substrings that has all 5 vowel once then has one k consonants
console.log(countOfSubstrings('iqeaouqi', 2));

// main trick is that there could be multiple substrings withing the existing sliding window hence we start counting the subarray from the start in the total subarray function
