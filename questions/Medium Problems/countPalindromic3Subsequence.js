const countPalindromicSubsequence = (s) => {
  // remember its the length of three for the palindromic subsequence
  // here to check the sub palindromes without repetitions using sets
  const intuitiveApproach = () => {
    let globalSet = new Set(); // to check the global unique letter
    let counter = 0;
    for (let index = 0; index < s.length; index++) {
      if (!globalSet.has(s[index])) {
        globalSet.add(s[index]);
        const letter = s[index];
        let lastIndexOfLetter = s.lastIndexOf(letter);
        let localSet = new Set();
        if (lastIndexOfLetter > index) {
          let subEnd = index + 1;
          while (subEnd < lastIndexOfLetter) {
            localSet.add(s[subEnd]);
            subEnd++;
          }
          counter += localSet.size;
        }
      }
    }
    return counter;
  };

  //   console.log(intuitiveApproach());
};

// if the last position is available of the found letter then just add it to the set and get the other possible combinations
//console.log(countPalindromicSubsequence('bbcbaba'));
