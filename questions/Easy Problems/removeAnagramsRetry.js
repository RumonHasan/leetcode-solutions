const removeAnagramsRetry = (words) => {
  const generalIntuitiveApproach = () => {
    const anagramChecker = (wordOne, wordTwo) => {
      return (
        wordOne
          .split('')
          .sort((a, b) => a.localeCompare(b))
          .join('') ===
        wordTwo
          .split('')
          .sort((a, b) => a.localeCompare(b))
          .join('')
      );
    };
    let end = 1;
    while (end < words.length) {
      let currentWord = words[end];
      let prevWord = words[end - 1];
      let check = false;
      if (currentWord && prevWord) {
        check = anagramChecker(currentWord, prevWord);
      }
      if (check) {
        words.splice(end, 1);
        end = 0;
        continue;
      } else {
        end++;
      }
    }
    return words;
  };
};
// other approaches can be done by map or using sets
// checking for adjacent stringa are anagrams or not
//console.log(removeAnagramsRetry(['abba', 'baba', 'bbaa', 'cd', 'cd']));
