const evaluate = (s, knowledge) => {
  let map = new Map(knowledge);
  let sArray = [...s];
  let end = 0;
  let stack = [];
  while (end < sArray.length) {
    const currChar = sArray[end];
    if (currChar == '(') {
      let str = '';
      end++;
      while (sArray[end] !== ')') {
        str += sArray[end];
        end++;
      }
      if (!map.has(str)) {
        stack.push('?');
      } else {
        const key = map.get(str);
        stack.push(key);
      }
      end++;
    } else {
      stack.push(currChar);
      end++;
    }
  }
  return stack.join('');
};

console.log(evaluate('hi(name)', [['a', 'b']]));
