const minimizedStringLength = (s) => {
  const setApproach = () => {
    let stringSet = new Set();
    for (let index = 0; index < s.length; index++) {
      stringSet.add(s[index]);
    }
    return stringSet.size;
  };

  // second appraoch can be done using hashmap
  const nonSetApproach = () => {
    let hash = {};
    for (let char of s) {
      hash[char] ? hash[char]++ : (hash[char] = 1);
    }
    return Object.keys(hash).length;
  };
};

// removing the closest duplicate from either side of the character in selection
// console.log(minimizedStringLength('cbbd'));
