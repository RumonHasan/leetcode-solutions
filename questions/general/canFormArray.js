const canFormArray = (arr, pieces) => {
  let map = new Map(); // distributing based on pieces
  for (let i = 0; i < pieces.length; i++) {
    const currPiece = pieces[i];
    const currFirstPiece = pieces[i][0];
    map.set(currFirstPiece, currPiece);
  }
  let end = 0;
  while (end < arr.length) {
    const currElement = arr[end];
    if (map.has(currElement)) {
      // if element is found then check whether the sequence is present
      const subset = map.get(currElement);
      const subsetLen = subset.length;
      let subSetIndex = 0;
      for (let i = end; i < end + subsetLen; i++) {
        if (subset[subSetIndex] !== arr[i]) {
          return false;
        } else {
          subSetIndex++;
        }
      }
      end += subsetLen;
    } else {
      return false; // return false straight up if its not found
    }
  }
  return true;
};

// using a look up emthod by using the first key of the array as the store
//console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));

// two pointer medium approach
const arrayStringsAreEqual = (word1, word2) => {
  let w1 = 0;
  let w2 = 0;
  let i = 0;
  let j = 0;

  while (w1 < word1.length && w2 < word2.length) {
    if (word1[w1][i] !== word2[w2][j]) {
      // initial check
      return false;
    }
    i++; // incrementing to next char i
    if (i === word1[w1].length) {
      w1++; // incrementing to next word
      i = 0;
    }
    // incrementing j to next check
    j++;
    if (j === word2[w2].length) {
      w2++; // incrementing to next word
      j = 0;
    }
  }

  return w1 === word1.length && w2 === word2.length;
};

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']));
