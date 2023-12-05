const maxTime = (time) => {
  const horribleApproach = () => {
    const modifiedTime = (timeString) => {
      const array = timeString.split(':');
      return array;
    };
    let leftSideTime = [];
    let rigthSideTime = [];
    let modifiedTimeString = modifiedTime(time);
    for (let index = 0; index < modifiedTimeString.length; index++) {
      if (index === 0) {
        if (modifiedTimeString[index].length === 2) {
          const leftSide = modifiedTimeString[index][0];
          const rightSide = modifiedTimeString[index][1];
          if (rightSide === '?' && leftSide === '?') {
            leftSideTime[0] = '2';
            leftSideTime[1] = '3';
            continue;
          }
          if (leftSide === '?') {
            if (Number(rightSide) > 3) {
              leftSideTime[0] = '1';
              leftSideTime[1] = rightSide;
            } else {
              leftSideTime[0] = '2';
              leftSideTime[1] = rightSide;
            }
            continue;
          }
          if (rightSide === '?') {
            if (Number(leftSide) === 0) {
              leftSideTime[0] = leftSide;
              leftSideTime[1] = '9';
              continue;
            }
            if (Number(leftSide) === 1) {
              leftSideTime[0] = leftSide;
              leftSideTime[1] = '9';
            } else {
              leftSideTime[0] = leftSide;
              leftSideTime[1] = '3';
            }
            continue;
          }
        } else {
          const hourSide = modifiedTimeString[index][0];
          if (hourSide === '?') {
            leftSideTime[0] = '0';
            leftSideTime[1] = '9';
          }
          continue;
        }
      } else {
        // for minute
        const left = modifiedTimeString[index][0];
        const right = modifiedTimeString[index][1];
        if (left === '?' && right === '?') {
          rigthSideTime[0] = '5';
          rigthSideTime[1] = '9';
          continue;
        }
        if (left === '?') {
          rigthSideTime[0] = '5';
          rigthSideTime[1] = right;
          continue;
        }
        if (right === '?') {
          rigthSideTime[1] = '9';
          rigthSideTime[0] = left;
        }
      }
    }
    let left =
      leftSideTime.length === 0 ? modifiedTimeString[0] : leftSideTime.join('');
    let right =
      rigthSideTime.length === 0
        ? modifiedTimeString[1]
        : rigthSideTime.join('');
    return left + ':' + right;
  };
};

console.log(maxTime('2?:50'));
