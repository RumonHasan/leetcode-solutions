const lengthOfLast = (s) => {
  const array = s.split(' ');
  let newArray = [];
  for (let index in array) {
    if (array[index] !== ' ') {
      newArray.push(array[index]);
    }
  }
  for (let index = newArray.length - 1; index >= 0; index--) {
    if (newArray[index] == ' ') {
      continue;
    } else {
      const word = newArray[index];
      if (word.length > 0) {
        return word.length;
      }
    }
  }
};

//console.log(lengthOfLast('   fly me   to   the moon  '));
