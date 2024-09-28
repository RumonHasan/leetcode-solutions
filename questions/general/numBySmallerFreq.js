const numBySmallerFreq = (queries, words) => {
  const AcceptedWithoutBinary = () => {
    let result = [];
    const getSmallFreq = (word) => {
      let smallestChar = 'z';
      let count = 0;
      for (let char of word) {
        if (char === smallestChar) {
          count++;
        } else if (char < smallestChar) {
          smallestChar = char;
          count = 1;
        }
      }
      return count;
    };
    for (let query of queries) {
      const lowQueryFreq = getSmallFreq(query);
      let counter = 0;
      for (let word of words) {
        const wordLowFreq = getSmallFreq(word);
        if (wordLowFreq > lowQueryFreq) {
          counter++;
        }
      }
      result.push(counter);
    }
    return result;
  };
};

//console.log(numBySmallerFreq(['bbbaa', 'cc'], ['a', 'aa', 'aaa', 'aaaa']));
