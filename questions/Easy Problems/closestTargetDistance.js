const closestTargetDistance = (words, target, startIndex) => {
  // edge case
  if (!words.includes(target)) {
    return -1;
  }
  // left slice construction
  let leftSlice = words.slice(0, startIndex + 1).reverse();
  let lastSectionLeftSlice = words
    .slice(startIndex + 1, words.length)
    .reverse();
  let finalLeftSlice = [...leftSlice, ...lastSectionLeftSlice];
  // right slice construction
  let rightSlice = words.slice(startIndex, words.length);
  let firstSectionRightSlice = words.slice(0, startIndex);
  let finalRightSlice = [...rightSlice, ...firstSectionRightSlice];
  let rightCounter = 0;
  let leftCounter = 0;
  // check from right
  for (let index in finalRightSlice) {
    if (finalRightSlice[index] === target) {
      break;
    }
    rightCounter++;
  }
  // check from left
  for (let index in finalLeftSlice) {
    if (finalLeftSlice[index] === target) {
      break;
    }
    leftCounter++;
  }
  return Math.min(rightCounter, leftCounter);
};

// console.log(
//   closestTargetDistance(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1)
// );
