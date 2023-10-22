const findWinners = (matches) => {
  const intuitiveApproach = () => {
    let winners = [];
    let oneLosers = [];
    let map = new Map();
    let flatMatches = new Array(...new Set([...matches.flat()]));
    for (let index in flatMatches) {
      map.set(flatMatches[index], [0, 0]);
    }
    for (let index = 0; index < matches.length; index++) {
      const winner = matches[index][0];
      const loser = matches[index][1];
      if (map.has(winner) && winner === matches[index][0]) {
        map.get(winner)[0]++;
      }
      if (map.has(loser) && loser === matches[index][1]) {
        map.get(loser)[1]++;
      }
    }
    // sorting winners and losers
    for (let [key, value] of map) {
      if (value[1] === 1) {
        oneLosers.push(Number(key));
      }
      if (value[1] === 0) {
        winners.push(Number(key));
      }
    }
    return [winners.sort((a, b) => a - b), oneLosers.sort((a, b) => a - b)];
  };
};

// console.log(
//   findWinners([
//     [1, 3],
//     [2, 3],
//     [3, 6],
//     [5, 6],
//     [5, 7],
//     [4, 5],
//     [4, 8],
//     [4, 9],
//     [10, 4],
//     [10, 9],
//   ])
// );
