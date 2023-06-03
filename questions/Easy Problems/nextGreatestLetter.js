const nextGreatestLetter = (letters, target) => {
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

//console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
