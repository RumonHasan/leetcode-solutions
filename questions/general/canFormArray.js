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
