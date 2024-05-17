const carFleet = (target, position, speed) => {
  let carMat = [];
  for (let i = 0; i < position.length; i++) {
    let carDim = [position[i], speed[i]];
    carMat.push(carDim);
  }
  // sort them based on position
  carMat.sort((a, b) => a[0] - b[0]);
  let stackFleet = [];
  // reverse iteration to check collision
  let currTime = 0;
  let nextTime = 0;
  for (let i = carMat.length - 1; i >= 0; i--) {
    let currMat = carMat[i];
    if (i === carMat.length - 1) {
      nextTime = (target - currMat[0]) / currMat[1];
      stackFleet.push(currMat);
    }
    if (i === carMat.length - 2) {
      stackFleet.push(currMat);
      currTime = (target - currMat[0]) / currMat[1];
      if (nextTime >= currTime) {
        stackFleet.pop();
      }
    }
    // updating and switching curr and next time
    if (i < carMat.length - 2) {
      // the last time will always be the last element of the stack is not removed
      let lastStackCar = stackFleet[stackFleet.length - 1];
      let lastStackTime = (target - lastStackCar[0]) / lastStackCar[1];
      stackFleet.push(currMat);
      nextTime = lastStackTime;
      currTime = (target - currMat[0]) / currMat[1];
      if (nextTime >= currTime) {
        stackFleet.pop();
      }
    }
  }
  return stackFleet.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
