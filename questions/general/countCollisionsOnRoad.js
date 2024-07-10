const countCollisions = (directions) => {
  let collisionCount = 0;
  let extraForce = 0;
  let dir = directions.split('');
  let prev = dir[0];
  // extra force needed to keep track of similar directions
  // populating right side and have to keep in mind when the collision force gathers
  for (let i = 1; i < dir.length; i++) {
    const curr = dir[i];
    if (curr === 'L' && prev == 'R') {
      collisionCount += 2 + extraForce;
      extraForce = 0;
      prev = 'S';
    } // for both sides stationery
    else if ((prev === 'S' && curr === 'L') || (prev === 'R' && curr === 'S')) {
      collisionCount += 1 + extraForce;
      prev = 'S';
      extraForce = 0;
    } else if (curr === 'R' && prev === 'R') {
      extraForce += 1;
      prev = curr;
    } else {
      prev = curr;
    }
  }
  return collisionCount;
};
// calculating the number of collisions from either sides
console.log(countCollisions('SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR'));
