const removeKAdjDuplicates = (s, k) => {
  let stack = [];
  let end = 0;
  while (end < s.length) {
    const char = s[end];
    // have to check based on whether the stack has some elements or not
    if (stack.length && stack[stack.length - 1][0] === char) {
      let prevOccurence = stack[stack.length - 1][1];
      stack[stack.length - 1][1] = prevOccurence + 1;
    } else {
      stack.push([char, 1]);
    }
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
    end++;
  }
  let result = '';
  for (let index = 0; index < stack.length; index++) {
    result += stack[index][0].repeat(stack[index][1]);
  }
  return result;
};

//console.log(removeKAdjDuplicates('deeedbbcccbdaa', 3));

/*
 first iteration -> e => 3
 basic flow of popping out of the stack
 ddbbcccbdaa
 ddbbbdaa
 dddaa
 aa



*/
