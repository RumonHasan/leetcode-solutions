const closeStrings = (word1, word2) => {
  const mapApproach = () => {
    if (word1.length !== word2.length) return false;
    // comparing sets as a first measure in order to check whether the letters are same or not
    const getSet = (string) => {
      let set = new Set();
      for (let char of string) {
        set.add(char);
      }
      return [...set].sort((a, b) => a.localeCompare(b)).join('');
    };
    if (getSet(word1) !== getSet(word2)) return false;

    // frequency check
    const getFreq = (string) => {
      let map = new Map();
      for (let char of string) {
        map.set(char, (map.get(char) || 0) + 1);
      }
      return map;
    };

    const sort = (array) => array.sort((a, b) => a - b);
    // final check for the frequencies being the same after sorting
    const freqOne = sort([...getFreq(word1).values()]).join('');
    const freqTwo = sort([...getFreq(word2).values()]).join('');

    return freqOne === freqTwo;
  };

  const hashApproach = () => {
    const freqHash = (string) => {
      let hash = {};
      for (let char of string) {
        hash[char] = (hash[char] || 0) + 1;
      }
      let sortedVals = [...Object.values(hash)].sort((a, b) => a - b).join('');
      return sortedVals;
    };
    // ugly set check
    if (
      [...new Set([...word1.split('')])]
        .sort((a, b) => a.localeCompare(b))
        .join('') !==
      [...new Set([...word2.split('')])]
        .sort((a, b) => a.localeCompare(b))
        .join('')
    ) {
      return false;
    }

    return freqHash(word1) === freqHash(word2);
  };
  //console.log(hashApproach());
};

//console.log(closeStrings('cabbba', 'abbccc'));
