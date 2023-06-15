const makeGood = (s) => {
  let sArray = s.split('');
  let stack = [];
  for (let index = 0; index < sArray.length; index++) {
    if (
      stack.length &&
      stack[stack.length - 1].toLowerCase() === sArray[index].toLowerCase()
    ) {
      if (
        stack[stack.length - 1] === stack[stack.length - 1].toLowerCase() &&
        sArray[index] === sArray[index].toUpperCase()
      ) {
        stack.pop();
      } else if (
        stack[stack.length - 1] === stack[stack.length - 1].toUpperCase() &&
        sArray[index] === sArray[index].toLowerCase()
      ) {
        stack.pop();
      } else {
        stack.push(sArray[index]);
      }
    } else {
      stack.push(sArray[index]);
    }
  }
  return stack.join('');
};

//console.log(makeGood('abBAcC'));
