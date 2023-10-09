const uncommonFromSentence = (s1, s2) => {
  const intuitiveApproach = () => {
    const sentenceOne = s1.split(' ');
    const sentenceTwo = s2.split(' ');
    let collection = [];
    const getWordOccurence = (sArray, sTwoArray) => {
      let map = new Map();
      for (let index in sArray) {
        const word = sArray[index];
        if (map.has(word)) {
          map.set(word, map.get(word) + 1);
        } else {
          map.set(word, 1);
        }
      }
      for (let index in sTwoArray) {
        const word = sTwoArray[index];
        if (map.has(word)) {
          map.set(word, map.get(word) + 1);
        } else {
          map.set(word, 1);
        }
      }
      return map;
    };
    let combinedMap = getWordOccurence(sentenceOne, sentenceTwo);
    for (let [key, value] of combinedMap) {
      if (value === 1) {
        collection.push(key);
      }
    }

    return collection;
  };
};

//console.log(uncommonFromSentence('s z z z s', 's z ejt'));
