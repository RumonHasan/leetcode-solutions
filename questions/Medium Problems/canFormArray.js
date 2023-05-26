const canFormArrayByRearrangingPieces = (arr, pieces) => {
  let arrayIndex = 0;
  const checkIndex = () => {
    for (let index = 0; index < pieces.length; index++) {
      let singlePiece = pieces[index];
      if (singlePiece.includes(arr[arrayIndex])) {
        for (
          let pieceIndex = 0;
          pieceIndex < singlePiece.length;
          pieceIndex++
        ) {
          if (singlePiece[pieceIndex] !== arr[arrayIndex]) {
            return false;
          } else {
            arrayIndex++;
          }
        }
        return true;
      }
    }
  };
  while (arrayIndex < arr.length) {
    if (!checkIndex()) {
      return false;
    }
  }
  return true;
};

// initial approach wud be record and store the pieces of the array in a map and record their indexes along with it
// console.log(
//   canFormArrayByRearrangingPieces([91, 4, 64, 78], [[78], [4, 64], [91]])
// );

// drilling into pieces one by one and checking availability of array pieces within each of the other indexes
//
