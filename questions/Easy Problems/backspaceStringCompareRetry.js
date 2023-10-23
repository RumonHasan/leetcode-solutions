const backspaceCompare = (s, t) => {
  const stringDestroyer = (string) => {
    let index = 0;
    let stack = [];
    while (index < string.length) {
      if (string[index] === '#') {
        stack.pop();
      } else {
        stack.push(string[index]);
      }
      index++;
    }
    return stack.join('');
  };
  return stringDestroyer(s) === stringDestroyer(t);
};

//console.log(backspaceCompare('y#fo##f', 'y#f#o##f'));
