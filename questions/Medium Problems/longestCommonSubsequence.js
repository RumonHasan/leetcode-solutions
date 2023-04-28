const lCS = (text1, text2) => {
  const dpArray = new Array(text1.length + 1)
    .fill()
    .map((item) => new Array(text2.length + 1).fill(0));
  for (let index = text1.length - 1; index >= 0; index--) {
    let mainLetter = text1[index];
    for (let secondIndex = text2.length - 1; secondIndex >= 0; secondIndex--) {
      let checkLetter = text2[secondIndex];
      if (mainLetter == checkLetter) {
        dpArray[index][secondIndex] = 1 + dpArray[index + 1][secondIndex + 1];
      } else {
        dpArray[index][secondIndex] = Math.max(
          dpArray[index + 1][secondIndex],
          dpArray[index][secondIndex + 1]
        );
      }
    }
  }
  return dpArray[0][0];
};

// console.log(lCS('abcde', 'ace'));
