const maximumGain = (s, x, y) => {
  const [firstSub, secondSub] = x > y ? ['ab', 'ba'] : ['ba', 'ab'];
  const [maxPoints, secondMax] = x > y ? [x, y] : [y, x];
  let points = 0;
  const populateStack = (arr, basePoints, sub) => {
    let localPoints = 0;
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
      const char = arr[i];
      if (char == sub[1] && stack.length && stack[stack.length - 1] == sub[0]) {
        stack.pop();
        localPoints += basePoints;
      } else {
        stack.push(char);
      }
    }
    return { localPoints, stack };
  };
  let { localPoints, stack } = populateStack(s, maxPoints, firstSub);
  points += localPoints;
  let { localPoints: pointsTwo } = populateStack(stack, secondMax, secondSub);
  points += pointsTwo;
  return points;
};

//console.log(maximumGain('aabbaaxybbaabb', 5, 4));
