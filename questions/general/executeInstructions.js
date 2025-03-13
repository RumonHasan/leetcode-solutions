const executeInstructions = (n, startPos, s) => {
  let array = new Array(s.length).fill(0);
  let ROW = n;

  for (let i = 0; i < s.length; i++) {
    let moveCounter = 0;
    let posStart = [...startPos]; // to make sure teh original array is not modified
    // starting from starting pos to check for the remaining
    for (let j = i; j < s.length; j++) {
      const currStartingDirection = s[j];
      if (currStartingDirection == 'R' && posStart[1] + 1 < ROW) {
        posStart[1] += 1;
        moveCounter++;
      } else if (currStartingDirection == 'L' && posStart[1] - 1 >= 0) {
        posStart[1] -= 1;
        moveCounter++;
      } else if (currStartingDirection == 'D' && posStart[0] + 1 < ROW) {
        posStart[0] += 1;
        moveCounter++;
      } else if (currStartingDirection == 'U' && posStart[0] - 1 >= 0) {
        posStart[0] -= 1;
        moveCounter++;
      } else {
        break;
      }
    }
    array[i] = moveCounter;
  }

  return array;
};

// console.log(executeInstructions(3, [0, 1], 'RRDDLU'));

// reverse on parenthesis based string after every parenthesis opened
const reverseParenthesis = (s) => {
  console.log(s);

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ')') {
      // if it finds an opening bracket then loop till closing it and reversing the string
      let local = [];
      // keep iterating till you find the opening bracket
      while (stack.length && stack[stack.length - 1] !== '(') {
        local.push(stack.pop());
      }
      // if local is filled then then add it to the curr stack
      stack.pop(); // also popping the first opening bracket that comes up
      // adding the chars to stack
      for (let char of local) {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

console.log(reverseParenthesis('(ed(et(oc))el)'));
