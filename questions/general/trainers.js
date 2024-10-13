const trainers = (players, trainers) => {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let playerIndex = 0;
  let trainerIndex = 0;
  let counter = 0;
  while (trainerIndex < trainers.length) {
    if (players[playerIndex] <= trainers[trainerIndex]) {
      counter++;
      playerIndex++;
    }
    trainerIndex++;
  }
  return counter;
};

//console.log(trainers([4, 7, 9], [8, 2, 5, 8]));
