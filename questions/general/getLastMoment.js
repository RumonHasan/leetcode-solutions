const getLastMoment = (n, left, right) => {
  let maxLeft = left.length > 0 ? Math.max(...left) : 0;
  let maxRight = right.length > 0 ? n - Math.min(...right) : 0;
  return Math.max(maxLeft, maxRight);
};

//console.log(getLastMoment(20, [9, 3, 13, 10], [4, 7, 15]));

const numOfAlternatingGroups = (colors) => {
  let count = 0;

  for (let i = 0; i < colors.length; i++) {
    const first = colors[i];
    const second = colors[i + 1];
    const third = colors[i + 2];
    //special case
    if (i === colors.length - 2) {
      if (first === 1 && second === 0 && colors[0] === 1) {
        count++;
      }
      if (first === 0 && second === 1 && colors[0] === 0) {
        count++;
      }
    }
    if (i === colors.length - 1) {
      if (first === 1 && colors[0] === 0 && colors[1] === 1) {
        count++;
      }
      if (first === 0 && colors[0] === 1 && colors[1] === 0) {
        count++;
      }
    }

    if (first === 1 && second === 0 && third === 1) {
      count++;
    }
    if (first === 0 && second === 1 && third === 0) {
      count++;
    }
  }

  return count;
};

//console.log(numOfAlternatingGroups([0, 1, 0, 0, 1]));
