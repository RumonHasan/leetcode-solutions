const countSubstringWithKConsonants = (word, k) => {
  let vowels = { a: true, i: true, e: true, o: true, u: true }; // current vowel letters present
  let map = new Map(); // map for vowels
  let subCount = 0;
  let consonantCount = 0;

  // calculates the substring from the starting index
  const subCountCalculator = (left, consonantCount) => {
    let vowelMap = new Map(map);
    let subResult = 0;
    while (consonantCount === k && vowelMap.size === 5) {
      subResult++;
      if (vowelMap.has(word[left])) {
        vowelMap.set(word[left], vowelMap.get(word[left]) - 1);
        if (vowelMap.get(word[left]) === 0) {
          vowelMap.delete(word[left]);
        }
      } else {
        consonantCount--;
      }
      left++;
    }
    return subResult;
  }; // this will contain the new numbers hence the actual value of consonant count will not be reduced

  // checking the main substring count
  let end = 0;
  let start = 0;
  while (end < word.length) {
    // increases the count for vowels and consonants
    if (vowels[word[end]]) {
      map.set(word[end], (map.get(word[end]) || 0) + 1);
    } else {
      consonantCount++;
    }
    // decrease if the consonant count increases beyond k ... so the point of control is checking the subsets between the k consonant
    while (consonantCount > k) {
      if (vowels[word[start]]) {
        map.set(word[start], map.get(word[start]) - 1);
        if (map.get(word[start]) === 0) {
          map.delete(word[start]);
        }
      } else {
        consonantCount--;
      }
      start++;
    }

    subCount += subCountCalculator(start, consonantCount);

    end++;
  }

  return subCount;
};

console.log(countSubstringWithKConsonants('iqeaouqi', 2));

// once the k consonants it bigger u reduce them then start checking whether all 5 vowels are present or not
