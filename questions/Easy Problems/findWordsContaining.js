const findWordsContaining = (words, x) => {
  let stack = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const check = word.includes(x);
    check && stack.push(i);
  }
  return stack;
};

//console.log(findWordsContaining(['leet', 'code'], e));
