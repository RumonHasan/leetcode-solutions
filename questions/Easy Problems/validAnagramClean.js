const validAnagramRetry = (s, t) => {
  let sSorted = s.split('').sort().join('');
  let tSorted = t.split('').sort().join('');
  return sSorted == tSorted;
};

//console.log(validAnagramRetry('anagram', 'nagaram'));
