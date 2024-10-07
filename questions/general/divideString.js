const divideString = (s, k, fill) => {
  const fillRequired = s.length % k === 0 ? 0 : s.length % k;
  let string = '';
  let result = [];
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    string += s[i];
    counter++;
    if (counter === k) {
      result.push(string);
      string = '';
      counter = 0;
    }
    if (i === s.length - 1 && string.length > 0) {
      result.push(string);
    }
  }
  if (fillRequired > 0) {
    const newFillReq = k - result[result.length - 1].length;
    const newStr = result[result.length - 1] + fill.repeat(newFillReq);
    result[result.length - 1] = newStr;
  }
  return result;
};

//console.log(divideString('abcdefghii', 3, 'x'));
