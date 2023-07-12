const backStringSpaceCompare = (s, t) => {
  const spaceDestroyer = (string) => {
    let stack = [];
    for (let index = 0; index < string.length; index++) {
      const stringVal = string[index];
      if (stringVal === '#') {
        stack.pop();
      } else {
        stack.push(stringVal);
      }
    }
    return stack.join('');
  };
  let stringOne = spaceDestroyer(s);
  let stringTwo = spaceDestroyer(t);
  return stringOne === stringTwo;
};
// multi stack approach
//console.log(backStringSpaceCompare('ab##', 'c#d#'));
