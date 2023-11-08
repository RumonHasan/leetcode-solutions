const jumpingOnClouds = (c) => {
  let end = 0;
  let counter = 0;
  c.push(0);
  while (end < c.length) {
    if (c[end + 1] === 0 && c[end + 2] === 1) {
      end++;
      counter++;
    } else if (c[end + 1] === 1 && c[end + 2] === 0) {
      end += 2;
      counter++;
    } else if (c[end + 1] === 0 && c[end + 2] === 0) {
      end += 2;
      counter++;
    } else {
      end++;
    }
  }
  return counter;
};

// modified original array approach in order to mark the end with a finish line
//console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
