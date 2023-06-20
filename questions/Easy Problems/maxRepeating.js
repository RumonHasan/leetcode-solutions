const maxRepeating = (sequence, word) => {
  let count = 0;
  let check = true;
  let result = '';
  let index = 1;
  while (check) {
    result = word.repeat(index);
    if (sequence.includes(result)) {
      count++;
    } else {
      check = false;
    }
    index++;
  }
  return count;
};

//console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));
