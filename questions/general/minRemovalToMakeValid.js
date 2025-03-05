const minRemovalToMakeValid = (s) => {
  let stack = [];
  const opening = '(';
  const closing = ')';
  let set = new Set();
  // to store the opening brackets
  for (let i = 0; i < s.length; i++) {
    const index = i;
    const char = s[i];
    if (char === opening) {
      stack.push(index);
    } else if (stack.length && char === closing) {
      set.add(index);
      set.add(stack.pop());
    }
  }
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    if ((currChar === closing || currChar === opening) && !set.has(i)) {
      continue;
    }
    result += currChar;
  }
  return result;
};

// using a min stack approach storing indices then removing based on the count of opening and closing indices
console.log(minRemovalToMakeValid('a)b(c)d'));
