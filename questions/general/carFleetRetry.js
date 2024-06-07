const carFleetRetry = (target, position, speed) => {
  // sorting based on position
  const carDims = position
    .map((pos, index) => [pos, speed[index]])
    .sort((a, b) => a[0] - b[0]);
  let carStack = [];
  let currTime = 0;
  let nextTime = 0;
  for (let i = carDims.length - 1; i >= 0; i--) {
    const currCarDim = carDims[i];
    if (i === carDims.length - 1) {
      carStack.push(currCarDim);
      nextTime = (target - currCarDim[0]) / currCarDim[1];
    } else if (i === carDims.length - 2) {
      carStack.push(currCarDim);
      currTime = target - currCarDim[0] / currCarDim[1];
      if (currTime <= nextTime) {
        carStack.pop();
      }
    } else {
      nextTime =
        target -
        carStack[carStack.length - 1][0] / carStack[carStack.length - 1][1];
      currTime = (target - currCarDim[0]) / currCarDim[1];
      carStack.push(currCarDim); // initial reset time before collision
      if (currTime <= nextTime) {
        carStack.pop();
      }
    }
  }
  return carStack.length;
};

//console.log(carFleetRetry(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
