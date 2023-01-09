const groupAnagrams = (strs) => {
  // group the anagrams
  let groups = [];
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split('').sort().join('');
    if (hash[word]) {
      hash[word] = {
        ...hash[word],
        count: hash[word].count + 1,
        word: [...hash[word].word, strs[i]],
      };
    } else {
      hash[word] = { count: 1, word: [strs[i]] };
    }
  }
  // extracting object groups
  for (const [_, values] of Object.entries(hash)) {
    groups.push(values.word);
  }
  return groups;
};

//console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
