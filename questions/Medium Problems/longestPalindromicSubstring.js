const longestPalindromeSubstring = (s) => {
  let collection = [];
  for (let index = 0; index < s.length; index++) {
    let left = index - 1;
    let right = index + 1;
    // odd
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const subDrome = s.slice(left, right + 1);
      collection.push(subDrome);
      left--;
      right++;
    }
    // even
    left = index;
    right = index + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const subDrome = s.slice(left, right + 1);
      collection.push(subDrome);
      left--;
      right++;
    }
  }
  //getting the largest
  if (collection.length === 0) {
    return s[0];
  }
  let largestPalindrome = '';
  let maxIndex = 0;
  for (let index in collection) {
    maxIndex = Math.max(collection[index].length, maxIndex);
  }
  for (let index in collection) {
    if (collection[index].length === maxIndex) {
      largestPalindrome = collection[index];
    }
  }
  return largestPalindrome;
};

//console.log(longestPalindromeSubstring('ccc'));
