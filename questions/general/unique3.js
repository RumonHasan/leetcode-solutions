const unique3 = (s) => {
  // time limit exceeded passes 45/70 case
  const timeLimitExceeded = () => {
    const array = s.split('');
    let palSet = new Set();
    let leftSet = new Set();
    for (let i = 1; i < array.length - 1; i++) {
      let curr_char = array[i];
      let left = i - 1;
      let right = i + 1;
      // first check
      if (!leftSet.has(array[left])) {
        leftSet.add(array[left]);
      }
      while (right < array.length) {
        const right_char = array[right];
        if (leftSet.has(right_char)) {
          const palindrome = right_char + curr_char + right_char;
          palSet.add(palindrome);
        }
        right += 1;
      }
    }
    return palSet.size;
  };

  // acceptable optimized approach
  const optimizedApproach = (s) => {
    const array = s.split('');
    let leftSet = new Set();
    let rightMap = new Map();
    let resSet = new Set();
    // stores all the chars once in a ma
    for (let char of s) {
      rightMap.set(char, (rightMap.get(char) || 0) + 1);
    }
    for (let i = 0; i < array.length; i++) {
      let curr_char = array[i];
      // to prevent repeatations
      rightMap.set(curr_char, rightMap.get(curr_char) - 1);
      if (rightMap.get(curr_char) == 0) {
        rightMap.delete(curr_char);
      }
      // looping through all the letters
      for (j = 97; j <= 122; j++) {
        const curr_letter = String.fromCharCode(j);
        if (leftSet.has(curr_letter) && rightMap.has(curr_letter)) {
          let palindrome = curr_letter + curr_char + curr_letter;
          resSet.add(palindrome);
        }
      }
      // slowly add the letters from the left side to the set
      if (!leftSet.has(curr_char)) {
        leftSet.add(curr_char);
      }
    }
    return resSet.size;
  };

  console.log(optimizedApproach(s));
};

console.log(unique3('aabca'));
