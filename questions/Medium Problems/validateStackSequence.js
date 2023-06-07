const validateStackSequence = (pushed, popped) => {
  let stack = [];
  let poppedIndex = 0;
  for (let index = 0; index < pushed.length; index++) {
    stack.push(pushed[index]);
    while (
      popped[poppedIndex] === stack[stack.length - 1] &&
      poppedIndex < popped.length
    ) {
      stack.pop();
      poppedIndex++;
    }
  }
  return stack.length === 0 ? true : false;
};
// popped should be done from the top.
//console.log(validateStackSequence([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
