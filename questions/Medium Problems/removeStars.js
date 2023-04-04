const removeStars = (s) => {
  const star = '*';
  let stack = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== star) {
      stack.push(s[index]);
    }
    if (s[index] === star) {
      stack.pop();
    }
  }
  return stack.join('');
};

//console.log(removeStars('leet**cod*e'));
