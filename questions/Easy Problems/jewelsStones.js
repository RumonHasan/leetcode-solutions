const numJewelsStones = (jewels, stones) => {
  let jewelSet = new Set([...jewels.split('')]);
  let counter = 0;
  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      counter++;
    }
  }
  return counter;
};
