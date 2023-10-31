const closeStrings = (word1, word2) => {
  const weirdIntuition = () => {
    let setOne = [...new Set([...word1.split('')])].sort((a, b) =>
      a.localeCompare(b)
    );
    let setTwo = [...new Set([...word2.split('')])].sort((a, b) =>
      a.localeCompare(b)
    );
    if (setOne.join('') !== setTwo.join('')) return false;

    const getOccurence = (word) => {
      let map = new Map();
      for (let char of word) {
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
      }
      return map;
    };
    let mapOne = [...getOccurence(word1).values()].sort((a, b) => a - b);
    let mapTwo = [...getOccurence(word2).values()].sort((a, b) => a - b);
    for (let index in mapOne) {
      if (mapOne[index] !== mapTwo[index]) return false;
    }
    return true;
  };
};

c; //onsole.log(closeStrings('cabbba', 'abbccc'));
