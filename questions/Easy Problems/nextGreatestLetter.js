const nextGreatestLetter = (letters, target) => {
  const uglyWay = () => {
    let letterCopy = [...letters];
    // first condition when there is a sorted version of the letter and its included in the central array
    if (letters.includes(target)) {
      const index = letters.findIndex((item) => item === target);
      letters.splice(index, 1).sort();
      let collection = [];
      letters.forEach((letter, index) => {
        if (letter > target) {
          collection.push(letter);
        }
      });
      return collection[0] === undefined ? letterCopy[0] : collection[0];
    } else {
      // second condition when its not included
      let subCollection = [];
      letters.sort();
      letters.forEach((letter, index) => {
        if (letter > target) {
          subCollection.push(letter);
        }
      });
      return subCollection[0] === undefined ? letterCopy[0] : subCollection[0];
    }
  };
  // modified and higher level code achieving the same with less code and faster run time in general
  const optimizedWay = () => {
    let sortedLetters = letters.sort();
    if (sortedLetters.includes(target)) {
      for (let charIndex in sortedLetters) {
        let letter = sortedLetters[charIndex];
        if (letter === target) {
          return sortedLetters[charIndex + 1];
        }
      }
    } else {
      for (let charIndex in sortedLetters) {
        let letter = sortedLetters[charIndex];
        if (letter > target) {
          return sortedLetters[charIndex];
        }
      }
    }
  };
};

//console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
