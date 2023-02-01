const isCircularSentence = (sentence) => {
  const array = sentence.split(' ');
  // basic edge case for one word
  if (array.length == 1) {
    return array[0][0] == array[0][array[0].length - 1];
  }
  let pairs = [];
  for (let i = 1; i < array.length; i++) {
    // for the first and last for circular list
    if (i === array.length - 1) {
      pairs.push([
        array[0][0],
        array[array.length - 1][array[array.length - 1].length - 1],
      ]);
    }
    // passing the general first and last
    pairs.push([array[i - 1][array[i - 1].length - 1], array[i][0]]);
  }
  // checking pairs
  for (let i = 0; i < pairs.length; i++) {
    const singlePair = pairs[i];
    if (singlePair[0] !== singlePair[1]) {
      return false;
    }
  }
  return true;
};

//console.log(isCircularSentence('leetcode exercises sound delightful'));
