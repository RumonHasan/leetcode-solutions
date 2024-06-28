const arrangeWords = (text) => {
  let array = text
    .split(' ')
    .map((word, index) => [word, word.length, index])
    .sort((a, b) => a[1] - b[1]);
  return array.map((word, index) =>
    index === 0
      ? word[0][0].toUpperCase() + word[0].slice(1, word[0].length)
      : word[0]
  );
};

//console.log(arrangeWords('calm Keep and code on'));
