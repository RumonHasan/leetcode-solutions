const minRemoval = (s) => {
  let stack = [];
  for (let char of s) {
    if (stack.length) {
      if (
        (char == 'B' && stack[stack.length - 1] == 'A') ||
        (char == 'D' && stack[stack.length - 1] == 'C')
      ) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

//console.log(minRemoval('ABFCACDB'));

const fancyString = (s) => {
  let stack = [];
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.length) {
      if (stack[stack.length - 1] === char) {
        stack.push(char);
        counter++;
        if (counter === 3) {
          stack.pop();
          counter -= 1;
        }
      } else {
        counter = 1;
        stack.push(char);
      }
    } else {
      stack.push(char);
      counter = 1;
    }
  }
  return stack.join('');
};

//console.log(fancyString('aaabaaaa'));

const uniqueLen = (s) => {
  let res = new Set();
  let left = new Set();
  let midHash = {};
  for (let char of s) {
    midHash[char] = (midHash[char] || 0) + 1;
  }
  // main iteration
  for (let char of s) {
    const mid = char;
    // remove mid or it will duplicate values to the right
    midHash[char] -= 1; // in a way represents the right side
    if (midHash[char] === 0) delete midHash[char];
    // checking all letters
    for (let i = 97; i <= 122; i++) {
      const char = String.fromCharCode(i);
      if (left.has(char) && midHash[char]) {
        res.add(`${char}${mid}${char}`);
      }
    }
    if (!left.has(char)) {
      left.add(char);
    }
  }
  return res.size;
};

console.log(uniqueLen('aabca'));
