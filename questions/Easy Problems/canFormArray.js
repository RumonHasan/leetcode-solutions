const canFormArray = (arr, pieces) => {
  // converting the pieces to actual numbers
  arr.sort();
  let pieceArray = [];
  for (let index = 0; index < pieces.length; index++) {
    const piece = pieces[index];
    for (let index in piece) {
      pieceArray.push(Number(piece[index]));
    }
  }
  console.log(pieceArray);
  for (let index in arr) {
    if (arr[index] !== pieceArray[index]) {
      return false;
    }
  }
  return true;
};

// console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
