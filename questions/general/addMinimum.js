const eliminateMax = (dist, speed) => {
  let reached = new Array(dist.length).fill(0);
  const commonLen = dist.length;
  for (let i = 0; i < commonLen; i++) {
    const time = Math.ceil(dist[i] / speed[i]);
    reached[i] = time;
  }
  // time taken to reach the city and attack it
  let attackCount = 0;
  reached.sort((a, b) => a - b); // based on the closest to the city
  for (let i = 0; i < reached.length; i++) {
    const currentMinute = i;
    const timeToAttack = reached[i];
    if (currentMinute < timeToAttack) {
      attackCount++;
    }
    if (currentMinute === timeToAttack) {
      break;
    }
  }
  return attackCount;
};

// console.log(
//   eliminateMax([7, 2, 6, 6, 2, 6, 4, 3, 4], [1, 3, 1, 1, 10, 1, 1, 1, 1])
// );
