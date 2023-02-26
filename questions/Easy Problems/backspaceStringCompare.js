const backspaceCompare = (s, t) => {
  let sArray = s.split('');
  let tArray = t.split('');
  // using stack approach
  let AStack = [];
  let BStack = [];

  for (let index in sArray) {
    if (sArray[index] !== '#') {
      AStack.push(sArray[index]);
    }
    if (sArray[index] === '#') {
      AStack.pop();
    }
  }
  for (let index in tArray) {
    if (tArray[index] !== '#') {
      BStack.push(tArray[index]);
    } else {
      BStack.pop();
    }
  }
  return AStack.join('') == BStack.join('');
};

// console.log(backspaceCompare('####a#b#c', 'ab##c'));
