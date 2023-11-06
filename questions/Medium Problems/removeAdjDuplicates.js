const removeAdjDuplicates = (s, k) => {
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (stack.length === 0) {
      stack.push([char, 1]);
      continue;
    }
    if (stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }
  let string = '';
  for (let index = 0; index < stack.length; index++) {
    string += stack[index][0].repeat(stack[index][1]);
  }
  return string;
};

//console.log(removeAdjDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4));
