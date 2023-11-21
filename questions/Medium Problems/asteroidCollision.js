const asteroidCollisions = (asteroids) => {
  const attempt = (asteroids) => {
    let stack = [];
    for (let index = 0; index < asteroids.length; index++) {
      const asteroid = asteroids[index];
      if (stack.length === 0) {
        stack.push(asteroid);
        continue;
      }
      if (
        (stack[stack.length - 1] < 0 && asteroid < 0) ||
        (stack[stack.length - 1] > 0 && asteroid > 0)
      ) {
        stack.push(asteroid);
        continue;
      }
      // collision and other stuffs
      while (stack.length) {
        // opposite directions
        if (stack[stack.length - 1] < 0 && asteroid > 0) {
          stack.push(asteroid);
          break;
        }
        // collision course
        if (stack[stack.length - 1] > 0 && asteroid < 0) {
          const stackRoid = stack[stack.length - 1];
          if (Math.abs(stackRoid) === Math.abs(asteroid)) {
            stack.pop();
            break;
          }
          if (Math.abs(stackRoid) > Math.abs(asteroid)) {
            break;
          }
          // change happens
          if (Math.abs(stackRoid) < Math.abs(asteroid)) {
            stack.pop();
            // sub conditions if the other elements in stack become same sign then just push and break
            if (stack[stack.length - 1] < 0 && asteroid < 0) {
              stack.push(asteroid);
              break;
            }
            if (stack[stack.length - 1] > 0 && asteroid > 0) {
              stack.push(asteroid);
              break;
            }
            // if not then it will cycle back up again
          }
          // if all the stack destroyed then just add the new roid
          if (stack.length === 0) {
            stack.push(asteroid);
            break;
          }
        }
      }
    }
    return stack;
  };

  //console.log(attemptTwo(asteroids));
};

//console.log(asteroidCollisions([-2, -2, 1, -2]));
