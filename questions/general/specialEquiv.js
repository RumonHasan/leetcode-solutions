const numSpecialEquivGroups = (words) => {
  let set = new Set();
  // function to transform word
  const transformWord = (word) => {
    let even = word.filter((_, index) => index % 2 === 0 && word[index]).sort();
    let odd = word.filter((_, index) => index % 2 === 1 && word[index]).sort();
    return `${even.join('')}${odd.join('')}`;
  };
  for (let word of words) {
    set.add(transformWord(word.split('')));
  }
  return set.size;
};

// return largest group;
// console.log(
//   numSpecialEquivGroups(['abcd', 'cdab', 'cbad', 'xyzz', 'zzxy', 'zzyx'])
// );
