const lastStongWeight = (stones) => {
  if (stones.length === 1) return stones[0];
  stones.sort((a, b) => b - a);
  let index = 0;
  while (stones.length > 1) {
    if (stones[index] === stones[index + 1]) {
      stones.splice(index, 1);
      stones.splice(index, 1);
      stones.sort((a, b) => b - a);
      index = 0;
    } else if (stones[index] > stones[index + 1]) {
      const difference = stones[index] - stones[index + 1];
      stones.splice(index, 1);
      stones.splice(index, 1);
      stones.push(difference);
      stones.sort((a, b) => b - a);
      index = 0;
    } else {
      index++;
    }
  }
  return stones[0] === undefined ? 0 : stones[0];
};

console.log(lastStongWeight([2, 2]));
