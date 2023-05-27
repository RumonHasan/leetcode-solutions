const findWords = (words) => {
  let keyBoardRows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  let collection = [];

  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    let checkRowOne = false;
    let checkRowTwo = false;
    let checkRowThree = false;
    let checkCount = 0;
    for (let c of word) {
      let letter = c.toLowerCase();
      if (keyBoardRows[0].includes(letter)) {
        checkRowOne = true;
      }
      if (keyBoardRows[1].includes(letter)) {
        checkRowTwo = true;
      }
      if (keyBoardRows[2].includes(letter)) {
        checkRowThree = true;
      }
    }
    checkRowOne && checkCount++;
    checkRowTwo && checkCount++;
    checkRowThree && checkCount++;
    if (checkCount === 1) collection.push(words[index]);
  }

  return collection;
};
// three keyboard rows only so you can use indexing
//console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
