const closestTarget = (words, target, startIndex) => {
  if (!words.includes(target)) {
    return -1;
  }
  // make post string
  let postSlice = words.slice(startIndex, words.length);
  let prePostSlice = words.slice(0, startIndex);
  let postArray = [...postSlice, ...prePostSlice];

  // make pre string
  let preSlice = words.slice(0, startIndex + 1);
  let preSliceSecond = words.slice(startIndex + 1, words.length);
  let preArray = [...preSlice.reverse(), ...preSliceSecond.reverse()];
  // checking the sortest path to target
  let front = 0;
  let back = 0;

  for (let i = 0; i < preArray.length; i++) {
    if (preArray[i] == target) {
      break;
    }
    if (preArray[i] !== target) {
      front++;
    }
  }
  for (let i = 0; i < postArray.length; i++) {
    if (postArray[i] == target) {
      break;
    }
    if (postArray[i] !== target) {
      back++;
    }
  }
  return Math.min(front, back);
};

// console.log(closestTarget(['a', 'b', 'leetcode'], 'leetcode', 0));
