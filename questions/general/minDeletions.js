const minDeletions = (nums) => {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let checkMax = false;
  let checkMin = false;
  let leftMoves = 0;
  let rightMoves = 0;
  let doubleMoves = 0;

  // from left and right
  const leftRight = (index, type) => {
    if (type !== 'max' || type !== 'min') {
      let checkMax = false;
      let checkMin = false;
      let moveCounter = 0;
      for (
        let i = index;
        type === 'left' ? i < nums.length : i >= 0;
        type === 'left' ? i++ : i--
      ) {
        const currNum = nums[i];
        moveCounter++;
        if (currNum === min) {
          checkMin = true;
        }
        if (currNum === max) {
          checkMax = true;
        }
        if (checkMin && checkMax) {
          break;
        }
      }
      return moveCounter;
    }
    return 0;
  };

  leftMoves = leftRight(0, 'left');
  rightMoves = leftRight(nums.length - 1, 'right');

  // two pointers;
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    doubleMoves++;
    if (nums[i] === min) {
      checkMin = true;
    } else if (nums[i] === max) {
      checkMax = true;
    }
    if (checkMax || checkMin) {
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    doubleMoves++;
    if (nums[i] === min) {
      checkMin = true;
    } else if (nums[i] === max) {
      checkMax = true;
    }
    if (checkMax && checkMin) {
      break;
    }
  }
  return Math.min(leftMoves, rightMoves, doubleMoves);
};

//console.log(minDeletions([2, 10, 7, 5, 4, 1, 8, 6]));
