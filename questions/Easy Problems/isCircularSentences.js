const isCircularSentences = (sentence) => {
  const array = sentence.split(' ');
  // first and last check
  let initialCheck = false;
  if (
    array[0][0] === array[array.length - 1][array[array.length - 1].length - 1]
  ) {
    initialCheck = true;
  }
  // middle check
  let index = 1;
  let middleCheck = true;
  while (index < array.length) {
    const lastLetter = array[index - 1][array[index - 1].length - 1];
    const nextFirstLetter = array[index][0];
    if (lastLetter !== nextFirstLetter) {
      middleCheck = false;
      break;
    }
    index++;
  }
  return middleCheck && initialCheck;
};

//console.log(isCircularSentences('leetcode exercises sound delightful'));
