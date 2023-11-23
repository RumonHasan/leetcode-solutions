const revWordsIII = (s) => {
  console.log(s);
  // traditional approach
  const traditionalApproach = () => {
    let array = s.split(' ');
    let spaceNumbers = s.length - 1;
    for (let index = 0; index < array.length; index++) {
      let word = array[index].split('');
      for (
        let subIndex = 0;
        subIndex < Math.floor(word.length / 2);
        subIndex++
      ) {
        let tempChar = word[word.length - 1 - subIndex];
        word[word.length - 1 - subIndex] = word[subIndex];
        word[subIndex] = tempChar;
      }
      array[index] = word.join('');
    }
    return array
      .map((word) => {
        if (spaceNumbers > 0) {
          spaceNumbers--;
          return (word += ' ');
        }
      })
      .join('')
      .slice(0, -1); // takes the last char off
  };
  // modern but ugly approach
  const modernApproach = () => {
    let array = s.split(' ');
    return array
      .map((word) => word.split('').reverse().join(''))
      .map((word, index) => {
        if (index < array.length) {
          return (word = word + ' ');
        }
      })
      .join('')
      .slice(0, -1);
  };
  //   console.log(modernApproach());
};

console.log(revWordsIII("Let's take LeetCode contest"));
