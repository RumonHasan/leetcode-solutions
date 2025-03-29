const splitIntoSub = (nums) => {
  let map = new Map();
  let waitingMap = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // processing teh waiting and freq map and checking whether each number is possible to process or not if not returning false
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (map.get(currNum) === 0) {
      // if the frequency is 0 then cannot be processed since its already processed
      continue;
    }
    // check for waiting number to see if any subsequence is waiting to be extended or not
    if (waitingMap.get(currNum) > 0) {
      waitingMap.set(currNum, waitingMap.get(currNum) - 1);
      const nextNumInSeq = currNum + 1;
      waitingMap.set(nextNumInSeq, (waitingMap.get(nextNumInSeq) || 0) + 1);
    } // if the freq is present and there is no subsequence waiting to be extended them I can find the min 3 elements
    else if (map.get(currNum + 1) > 0 && map.get(currNum + 2) > 0) {
      const nextNum = currNum + 1;
      const nextNextNum = currNum + 2;
      map.set(nextNum, map.get(nextNum) - 1);
      map.set(nextNextNum, map.get(nextNextNum) - 1);
      waitingMap.set(
        nextNextNum + 1,
        (waitingMap.get(nextNextNum + 1) || 0) + 1
      );
    } else {
      return false;
    }

    // processing the starting number
    map.set(currNum, map.get(currNum) - 1);
  }

  return true;
};

console.log(splitIntoSub([1, 2, 3, 3, 4, 5]));
