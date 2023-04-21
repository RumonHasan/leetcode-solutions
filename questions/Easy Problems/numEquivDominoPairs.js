const numEquivDominoPairs = (dominoes) => {
  let dominoCounter = 0;

  for (let index = 0; index < dominoes.length; index++) {
    for (
      let secondIndex = index + 1;
      secondIndex < dominoes.length;
      secondIndex++
    ) {
      if (
        (dominoes[index][0] === dominoes[secondIndex][0] &&
          dominoes[index][1] === dominoes[secondIndex][1]) ||
        (dominoes[index][0] === dominoes[secondIndex][1] &&
          dominoes[index][1] === dominoes[secondIndex][0])
      ) {
        dominoCounter++;
      }
    }
  }

  return dominoCounter;
};

// console.log(
//   numEquivDominoPairs([
//     [1, 1],
//     [2, 2],
//     [1, 1],
//     [1, 2],
//     [1, 2],
//     [1, 1],
//   ])
// );
