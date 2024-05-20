"use strict";

var asteroidCollision = function asteroidCollision(asteroids) {
  console.log(asteroids);
  var stack = [];
  var end = 0;

  while (end < asteroids.length) {
    var currAstro = asteroids[end];

    if (end === 0 || stack.length === 0) {
      stack.push(currAstro);
    } else {
      var stackRoid = stack[stack.length - 1]; // check directions

      if (stackRoid > 0 && currAstro > 0) {
        stack.push(currAstro);
      } else if (stackRoid < 0 && currAstro < 0) {
        stack.push(currAstro);
      } else {
        // collision -> check for all collisions
        var collisionResolved = false; // collision pattern if resolved then pop

        while (stack.length && stack[stack.length - 1] > 0 && currAstro < 0) {
          if (Math.abs(stack[stack.length - 1]) < Math.abs(currAstro)) {
            stack.pop();
          } else if (Math.abs(stack[stack.length - 1]) === Math.abs(currAstro)) {
            stack.pop();
            collisionResolved = true;
            break;
          } else {
            collisionResolved = true;
            break;
          }
        }

        if (!collisionResolved) {
          stack.push(currAstro);
        }
      }
    }

    end++;
  }

  return stack;
};

console.log(asteroidCollision([-2, -1, 1, 2]));