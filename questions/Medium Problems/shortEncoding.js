const minimumLengthEncoding = (words) => {
  const initialApproach = () => {
    let resultString = '';
    const hash = '#';
    words.sort((a, b) => b.length - a.length);
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      for (let subIndex = index + 1; subIndex < words.length; subIndex++) {
        let checkWord = words[subIndex];
        if (word.length > checkWord.length) {
          if (word.includes(checkWord)) {
            words.splice(subIndex, 1);
          }
        }
      }
    }
    for (const word of words) {
      resultString += word + hash;
    }
    console.log(resultString);
    return resultString.length;
  };

  // convert the word portions into set parts in reverse order
  // horrible code
  const setApproach = () => {
    let globalSet = new Set(words);
    const getPrefixSet = (localWord) => {
      let localSet = new Set();
      let string = '';
      for (let subIndex = localWord.length - 1; subIndex >= 0; subIndex--) {
        const wordChar = localWord[subIndex];
        string += wordChar;
        localSet.add(string.split('').reverse().join(''));
      }
      return localSet;
    };
    // exclude the last character
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      let setArray = Array.from(getPrefixSet(word.slice(1, word.length)));
      for (let indexSet = 0; indexSet < setArray.length; indexSet++) {
        const substring = setArray[indexSet];
        if (globalSet.has(substring)) {
          globalSet.delete(substring);
        }
      }
    }
    return Array.from(globalSet)
      .map((word) => word + '#')
      .join('').length;
  };

  const optimizedVersion = () => {
    let mainSet = new Set(words);
    const wordSet = (word) => {
      let string = '';
      let set = new Set();
      for (let index = word.length - 1; index > 0; index--) {
        string += word[index];
        set.add(string.split('').reverse().join(''));
      }
      return set;
    };
    words.forEach((word) => {
      let setArray = Array.from(wordSet(word));
      setArray.map((setWord) =>
        mainSet.has(setWord) ? mainSet.delete(setWord) : mainSet
      );
    });
    return Array.from(mainSet)
      .map((word) => word + '#')
      .join('').length;
  };

  //console.log(setApproach(), optimizedVersion());
};

//console.log(minimumLengthEncoding(['time', 'me', 'bell']));
