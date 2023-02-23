const lengthOfLastWord = (s) => {
  const stringReverse = s.split(' ').reverse();
  let length = 0;
  for (let index in stringReverse) {
    if (stringReverse[index].length > 0) {
      length = stringReverse[index].length;
      break;
    }
  }
  return length;
};

// console.log(lengthOfLastWord('   fly me   to   the moon  '));
