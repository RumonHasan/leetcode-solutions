const evaluteBrackets = (s, knowledge) => {
  // clean stack approach
  const stackApproach = () => {
    let stack = [];
    let map = new Map(knowledge);
    const brackets = ['(', ')'];
    for (let index = 0; index < s.length; index++) {
      const char = s[index];
      if (char === brackets[1]) {
        let localKeyCheck = '';
        while (stack[stack.length - 1] !== brackets[0]) {
          localKeyCheck = stack.pop() + localKeyCheck;
        }
        stack.pop(); // needed for removing the starting bracket
        if (map.has(localKeyCheck)) {
          stack.push(map.get(localKeyCheck));
        } else {
          stack.push('?');
        }
      } else {
        stack.push(char);
      }
    }
    return stack.join('');
  };

  console.log(stackApproach());
};

// separate the keys with the values then inject them
// console.log(
//   evaluteBrackets('(name)is(age)yearsold', [
//     ['name', 'bob'],
//     ['age', 'two'],
//   ])
// );
