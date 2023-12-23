const license = (s, k) => {
  const intuitiveApproach = () => {
    const array = s.split('-').join('');
    let counter = 0;
    let stack = [];
    for (let i = array.length - 1; i >= 0; i--) {
      const currChar = array[i];
      stack.unshift(currChar.toUpperCase());
      counter++;
      if (counter === k && i > 0) {
        stack.unshift('-');
        counter = 0;
      }
    }
    return stack.join('');
  };
};

console.log(license('2-5g-3-J', 3));
