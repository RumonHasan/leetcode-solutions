const isPrefixString = (s, words) => {
  let string = '';
  let end = 0;
  while (end < words.length) {
    string += words[end];
    if (string.length === s.length && string == s) {
      return true;
    }
    end++;
  }
  return false;
};

// console.log(
//   isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples'])
// );
