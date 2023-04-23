const stringMatching = (words) => {
  words.sort((a, b) => a.length - b.length);
  const array = [];
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    for (
      let secondIndex = index + 1;
      secondIndex < words.length;
      secondIndex++
    ) {
      if (words[secondIndex].includes(word)) {
        array.push(word);
        break;
      }
    }
  }

  return array;
};

//console.log(stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am']));
