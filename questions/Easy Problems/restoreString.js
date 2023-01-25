const restoreString = (s, indices) => {
  let wordArray = new Array(s.length).fill('');
  for (let index in indices) {
    wordArray[parseInt(indices[index])] = s[index];
  }
  return wordArray.join('');
};

//console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
