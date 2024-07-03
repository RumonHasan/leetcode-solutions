const longestWordAfterDeleting = (s, dictionary) => {
  let collection = [];

  // pattern matching
  for (let word of dictionary) {
    let wIndex = 0;
    for (let i = 0; i < s.length; i++) {
      let sLetter = s[i];
      if (sLetter === word[wIndex]) {
        wIndex++;
      }
    }
    if (wIndex === word.length) {
      collection.push(word);
    }
  }
  collection.sort((a, b) => {
    if (a.length > b.length) {
      return b.length - a.length;
    } else if (a.length === b.length) {
      return a.localeCompare(b);
    }
  });
  if (collection.length === 0) return '';
  return collection[0];
};

//console.log(longestWordAfterDeleting('abce', ['abe', 'abc']));
